import  { useState } from "react"
import LoginForm from "../../Components/Forms/LoginForm"
import { login } from "./services"
import { environmentConfig } from "../../Utils/Config/environmentConfig"
import { getUsersdetail } from "./services"
import { setItem } from "../../Utils/Config/storageConfig"
import { useNavigate } from "react-router-dom"




const Authentication = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
          // console.log(loginInfo,'<><><><>')
    const loginResponse = await login()
    console.log(loginResponse)
    const accountId = environmentConfig.accountId
    const detailResponse = await getUsersdetail(accountId)
    console .log(detailResponse)
    setItem('isAuthenticating',true)
    setItem('userDetail',JSON.stringify(detailResponse.data))
    navigate('/dashboard')
    }
    catch(e){
      alert(e)
    }

  }
  return (
    <div className="login-form">
      <h4>Login Page</h4>
      <LoginForm loginInfo={loginInfo} setLoginInfo={setLoginInfo} handleSubmit={handleSubmit}/>
    </div>
  )
}


export default Authentication
