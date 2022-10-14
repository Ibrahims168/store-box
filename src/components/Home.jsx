import React from 'react'
import ShowUser from '../components/Showuser'



const Home = ({ user }) => {

  return (
    <div>
      <p>{user}</p>
      <ShowUser />
    </div>
  )
}

export default Home