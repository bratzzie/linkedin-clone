import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'
function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <SidebarRecentItem>
            <SidebarHash>#</SidebarHash>
            <p>{topic}</p>
        </SidebarRecentItem>
    )
    
    return (
        <SidebarSection>
           <SidebarTop>
               <img 
src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
               <Avatar src={user.photoUrl} className="sidebar_avatar">{user.email[0]}</Avatar>
               <h2>{user.displayName}</h2>
               <h4>{user.email}</h4>
           </SidebarTop>

           <SidebarStats>
               <SidebarStat>
                <p>Who viewed you</p>
                <p className="sidebar_number">2,456</p>
               </SidebarStat>

               <SidebarStat>
                <p>Who viewed you</p>
                <p className="sidebar_number">2,456</p>
               </SidebarStat>


           </SidebarStats>

           <SidebarBottom>
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('programming')}
               {recentItem('design')}
               {recentItem('developer')}
               {recentItem('gatsby')}
           </SidebarBottom>
        </SidebarSection>

    )
}

export default Sidebar

const SidebarRecentItem = styled.div`
display: flex;
font-size: 13px;
color: gray;
font-weight: bolder;
cursor: pointer;
margin-bottom: 5px;
padding: 5px;

:hover{
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
}
`

const SidebarHash = styled.span`
margin-right: 10px;
margin-left: 5px;`

const SidebarSection= styled.div`
position: sticky;
top: 80px;
flex: 0.2;
border-radius: 10px;
text-align:center ;
height: fit-content;

.sidebar_avatar{
    margin-bottom: 10px;

}`
const SidebarTop= styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid lightgray;
border-bottom: 0;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-color: #fff;
padding-bottom: 10px;
margin-top: 10px;
img{
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;

}

h4{
    color: grey;
    font-size: 12px;

}

h2{
    font-size: 18px;
}
`
const SidebarStat = styled.div`

margin-top: 10px;
display: flex;
justify-content: space-between;

p{
    color: gray;
    font-size: 13px;
    font-weight: 600;
}

.sidebar_number{
    font-weight: bold;
    color: #0a66c2 !important;

}`

const SidebarStats = styled.div`
padding: 10px;
margin-bottom: 10px;
border: 1px solid lightgray;
background-color: white;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`


const SidebarBottom = styled.div`
text-align: left;
padding: 10px;
border: 1px solid lightgray;
background-color: white;
border-radius: 10px;
margin-top: 10px;

p{
    font-size: 13px;
    padding-bottom: 10px;
}`