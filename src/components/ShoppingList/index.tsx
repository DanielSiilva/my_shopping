import React, {useState} from "react"
import {FlatList} from 'react-native'
import {styles} from './styles'

import {Product, ProductPros} from '../Product'

import {shoppingListExample} from '../../utils/shopping.list.data'

export function ShoppingList(){
  const [products, setProducts] = useState<ProductPros[]>(shoppingListExample)

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
   
  )
}