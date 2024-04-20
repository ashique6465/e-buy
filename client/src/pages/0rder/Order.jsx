import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/myContext'

const Order = () => {
  const context = useContext(MyContext);
  // const{name,rollno} = context;
  const {state, color} = context
  return (
   <Layout>
    <h1>Name: {state.name}</h1>
    <h1>Roll No. {state.rollno}</h1>
    <h1>My color: {color}</h1>
   </Layout>
  )
}

export default Order
