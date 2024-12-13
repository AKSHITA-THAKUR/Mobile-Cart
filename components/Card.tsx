import { View, Text , Image , Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '@/redux/productSlice'
import { AppDispatch, RootState } from "@/redux/store";

const Card = ({ item }: { item: any }) => {
const dispatch:AppDispatch = useDispatch();
const cart = useSelector((state: RootState) => state.products.cart);

  return (
    <View className="flex-1 bg-white rounded-lg m-2 p-3 shadow">
    <Image
      source={{ uri: item.thumbnail }}
      className="w-full h-32 rounded-lg"
      resizeMode="contain"
    />
    <Text className="text-lg font-bold mt-2">{item.title}</Text>
    <Text className="text-green-600 font-semibold">Rs.{item.price}</Text>
    <Text className="text-sm text-gray-600" numberOfLines={2}>
      {item.description}
    </Text>
    
    <Pressable onPress={()=> dispatch(addToCart(item.id))} className='p-3 mt-5 bg-sky-400 rounded-lg'><Text style={{alignSelf:"center"}}>Add to Cart</Text></Pressable>
  </View>
  )
}

export default Card