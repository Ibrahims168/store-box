import { inject, observer } from 'mobx-react'
import React from 'react'



const ShowUser = ({ globalStore }) => {
  const { user } = globalStore
  let newUser = ""

  const ShowUser = () => {
    let newUser = user
    console.log(user, newUser);
  }


  return (
    <div>
      <button onClick={ShowUser}>Show the user</button>
      <div>{newUser}</div>
    </div>
  )
}

export default inject(["globalStore"])(observer(ShowUser))