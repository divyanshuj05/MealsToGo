import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const RestaurentInfo = ( {restaurent = {}}) => {
    const{
        name = "wrapchik",
        icon ,
        photos = ['https://picsum.photos/700'],
        address = tiet,
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily ,
          } = restaurent
          return(
            <Card elevation={5} style={styles.card}>
                <Card.cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
                <Text style={styles.title}>{name}</Text>
            </Card>
          );

};
const styles = StyleSheet.create({
  card: {
    backgroundColor:"white",
  },
 cover:{
    padding:"20",
    backgroundColor:"white",
 },
 title:{
    padding:16,
 },

});
