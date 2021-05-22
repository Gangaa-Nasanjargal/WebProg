import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Signin = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    }, [url])

    const uploadPic = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "dqy4aqkfy")
        fetch("https://api.cloudinary.com/v1_1/dqy4aqkfy/image/upload",{
            method: "post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({ html: "invalid email", classes: "#757575 grey darken-1" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                pic: url
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#757575 grey darken-1" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })
    }
    const PostData = () => {
        if(image){
            uploadPic()
        }else{
            uploadFields()
        }
    }

    return (
        <div className="flex" style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="image">
                <img class="materialboxed" width="300" src="https://i.pinimg.com/564x/35/76/09/3576096b9e117491cb06e8b2d2e4ce3a.jpg" />
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
                    <div className="file-field input-field">
                        <div className="btn  #64b5f6 blue darken-1" style={{ width: "150px"}}>
                            <span>Profile Pic</span>
                            <input type="file" onChange={(e) =>setImage(e.target.files[0])} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
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