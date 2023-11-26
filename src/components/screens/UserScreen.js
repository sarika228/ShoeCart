/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text} from 'react';
import {useSelector} from 'react-redux';

const UserScreen =()=>{
    const cart=useSelector((state)=>state.cart);

    return(
        <View>
            <Text>User Screen</Text>
            <Text>Cart:</Text>
            {cart.map((shoe)=>(
                <View key={shoe.id}>
                    <Text>{shoe.brand}</Text>
                    <Text>{shoe.cost}</Text>
                </View>
            ))}
        </View>
    )
}

export default UserScreen;