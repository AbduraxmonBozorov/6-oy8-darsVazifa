import React, {useEffect, useState} from 'react'

function Home() {
  const [user, setUser] = useState({});
  useEffect(()=>{
    if(localStorage.getItem("user")){
      setUser(JSON.parse(localStorage.getItem("user")));
    }

  }, [])
  return (
    <div>
      Home
      <h1>Hello {user.username}</h1>
    </div>
  )
}

export default Home
