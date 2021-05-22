import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signin = ()=>{
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email", classes:"#757575 grey darken-1"})
            return
        }
        fetch("/signup",{
            method: "post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#757575 grey darken-1"})
            }
            else{
                M.toast({html:data.message, classes:"#43a047 green darken-1"})
                history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="flex" style={{display:"flex", justifyContent:"space-around"}}>
           <div className="image">
              <img class="materialboxed" width="300"  src="https://i.pinimg.com/564x/35/76/09/3576096b9e117491cb06e8b2d2e4ce3a.jpg" />
            </div>
        <div className="mycard">
            <div className="card auth-card input-field">
               <h2>Mbppeee</h2>
               <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                onClick={()=>PostData()}>
                    Sign Up
                </button>  
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
            </div>
        </div>
        </div>
    )
}

export default Signin