import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice'
function HeaderOption({avatar, Icon, title, onClick}) {
    
    const user = useSelector(selectUser);
   
    return (
        <HeaderOptionSection onClick={onClick}>

       
        {Icon && <Icon className="header_icon" />} 
        {avatar && ( <Avatar  className="header_avatar" src={user?.photoUrl}>{user?.email[0]}</Avatar>)}
        <h3>{title}</h3>
        </HeaderOptionSection>
    )
}

export default HeaderOption
const HeaderOptionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 20px;
color: grey;
cursor: pointer;

.header_icon{
object-fit: contain;
height: 25px !important;
width: 25px !important;
}

.header_avatar{
    object-fit: contain;
height: 25px !important;
width: 25px !important;
}

h3{
    font-size: 12p;
    font-weight: 400;

}
:hover{
    color: #000;

}
`