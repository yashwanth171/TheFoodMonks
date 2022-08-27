import { useState } from "react";
import axios from "axios";

export default () => {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState("");
  const searchApi = async (term) => {
    console.log(term, "term");
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2/?q=${term}&app_id=dd0f8626&app_key=ed6e1a3b4874780d11d45ea3c98cb7c7&type=public`
      );
      setResults(response.data.hits);
    } catch (error) {
      setIsError(error.message);
    }
  };

  return [searchApi, results, isError];
};