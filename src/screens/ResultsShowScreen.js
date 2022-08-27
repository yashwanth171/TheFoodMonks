import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet} from 'react-native';
import axios from "axios";
const ResultShowScreen = ({navigation}) => {
    
    return (
        <View>
            <Text style={styles.text}>Under Progress</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    text:{
        fontWeight: "bold",
        fontSize: 20
    }
});

export default ResultShowScreen;