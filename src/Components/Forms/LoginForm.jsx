

const LoginForm = ({loginInfo,setLoginInfo,handleSubmit}) => {
    const handleChange = (e)=>{
        const {name, value} = e.target
        setLoginInfo({...loginInfo, [name]:value})
    }

  return (
    <div className="loginForm-containeer" >
      <form  >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlm-label">Email address</label><br></br>
    <input type="email" name="email" value={loginInfo.email} onChange={handleChange}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required={true}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={loginInfo.password} onChange={handleChange}className="form-control" id="exampleInputPassword1"required={true}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Submit</button>
</form>

    </div>
  )
}

export default LoginForm
