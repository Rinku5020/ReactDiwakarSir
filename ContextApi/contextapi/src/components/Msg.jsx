import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'

function Msg() {
  const {log,login,logout}=useContext(AuthContext)
    console.log(log)

  return (
    <div>
     <p>{log ? "User Log In":"User Log Out"}</p>
    <button onClick={login} >Log in</button>
    <button onClick={logout} >Log out</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat ducimus ea quas! Quia cumque eius animi, numquam doloremque ad possimus ea atque. Consequuntur, unde fuga fugiat harum velit impedit.
      Optio quisquam est voluptate hic tempora, molestias qui totam itaque accusamus? Cum velit eos temporibus minus nostrum expedita est non asperiores harum voluptatem? Pariatur necessitatibus nobis asperiores accusamus optio minus?
      Nesciunt nostrum dignissimos vero eum in iusto soluta sapiente tempore sint suscipit eos placeat quo repellat, molestias dolor iure temporibus! Ipsa cum obcaecati quae reprehenderit? Sint voluptatibus nisi modi totam.
      Dolorem error impedit harum aspernatur ad nam corrupti recusandae veniam unde earum, cupiditate esse, dolorum iste ratione vitae, iusto accusamus! Blanditiis quasi asperiores deserunt quas vitae accusamus laborum totam deleniti.</p>
    </div>
  )
}

export default Msg
