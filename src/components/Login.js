import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import {auth} from './firebase'
import {login} from '../features/userSlice'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();



    const loginToApp = (e) => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then(
        (userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        }
        ).catch((error) => alert(error));
    };




    
    const register = () => {

    if(!name) {
        return alert("Please enter a full name!");
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>{
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic
        }).then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
            })
            );
        })
    }).catch((error) =>alert(error));
    };
    return (
        <LoginSection>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Logo in Login"/>
           
            <form>
                <input
                value={name}
                onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />

                <input value={profilePic} 
                onChange={e => setProfilePic(e.target.value)} placeholder="Profile Pic URL (optional)" type="text" />
                <input value={email} 
                onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>
       <p>Not a member?
           <LoginRegister onClick={register}> Register Now</LoginRegister>
       </p>
       
       
       
       </LoginSection>
    )
}

export default Login
const LoginRegister = styled.span`
color: #0177b7;
cursor: pointer;`
const LoginSection = styled.div`
display: grid;
place-items: center;
margin-left: auto;
margin-right: auto;
padding-top: 100px;
padding-bottom: 100px;

p{
    margin-top: 20px;
}
form{
display: flex;
flex-direction: column;

input{
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

button{
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 5px;
}
}
img{
    object-fit: contain;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
}
`