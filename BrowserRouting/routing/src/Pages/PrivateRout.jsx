
function PrivateRout({children}) {
    const token=localStorage.getItem("token")
    if(!token){
        return <h1>You Are not login</h1>
    }
     
  return children
}

export default PrivateRout
