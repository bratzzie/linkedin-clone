import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import {useDispatch} from 'react-redux'
import {logout} from '../features/userSlice'
import {auth} from './firebase'
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

function Header() {
    const dispatch = useDispatch();
   const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <HeaderSection>

            <HeaderLeft>
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
             
             <HeaderSearch>
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </HeaderSearch>
            </HeaderLeft>


            <HeaderRight>
              <HeaderOption Icon={HomeIcon} title="Home" />
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
              <HeaderOption Icon={WorkIcon} title="Jobs" />
              <HeaderOption Icon={SmsIcon} title="Messaging" />
              <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            
           <HeaderOption avatar={true} title="me" 
           onClick={logoutOfApp}/>
           <HeaderOption Icon={DragIndicatorIcon} title="Work" />
       
            </HeaderRight>
        </HeaderSection>
    )
}

export default Header
const HeaderSection = styled.div`
display: flex;
justify-content: space-evenly;
border-bottom: 0.1px solid lightgray;
padding-top: 10px;
padding-bottom: 10px;
width: 100%;
position: sticky;
top: 0;
z-index: 100;
background-color: #fff;
`
const HeaderLeft = styled.div`
display: flex;
img{
margin-right: 10px;
object-fit: contain;
height: 40px;
}`
const HeaderRight = styled.div`
display: flex;
`
const HeaderSearch = styled.div`
padding: 10px;
display: flex;
align-items: center;
border-radius: 5px;
height: 22px;
color: gray;
background-color: #eef3f8;

input{
    outline: none;
    border: none;
    background: none;
}`