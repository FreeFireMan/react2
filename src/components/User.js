import React, { Component } from 'react';
import '../components/userStyle.css';


const User = ({ item }) => {

  return (
    <div className={'user divBase'}>
      <p>
        {item.id}  {item.name}
      </p>
      <div><span className='size16 boldItl'>NickName: </span> {item.username}</div>
      <div><span className='size16 boldItl'>Phone: </span>{item.phone}</div>
      <div><span className='size16 boldItl'>Website: </span>{item.website}</div>
    </div>
  )
}


export default User;