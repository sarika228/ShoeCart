/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from "../redux/actions";

const AdminScreen=()=>{
    const dispatch=useDispatch();

    const handleAddToCart=()=>{
        const shoe={id:1,brand:'Nike',sizes:['7','8','9'],cost:500,image:'url-to-image'};
        dispatch(addToCart(shoe));
    }

    return(
        <View>
            <Text>Admin Screen</Text>
            <Button title="Add To Cart"
            onPress={handleAddToCart}
            ></Button>
        </View>
    )
}
export default AdminScreen;
