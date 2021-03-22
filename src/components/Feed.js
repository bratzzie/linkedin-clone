import CreateIcon from '@material-ui/icons/Create'
import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import EventNoteIcon from  '@material-ui/icons/EventNote'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import FlipMove from 'react-flip-move'
import {selectUser} from '../features/userSlice'


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, []);
    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    };
    return (
        <FeedSection>
            <FeedInputContainer>
                <FeedInput>
                    <CreateIcon  />
                    <form>
                        <input value={input} 
                        onChange={e =>setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </FeedInput>
                <FeedInputOptions>
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E" />
                </FeedInputOptions>
            </FeedInputContainer>

            <FlipMove>
                 {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            
            </FlipMove>
           
        </FeedSection>
    )
}

export default Feed
const FeedInputOptions = styled.div`
display: flex;
justify-content: space-evenly;`

const FeedSection = styled.div`
flex: 0.6;
margin: 0 20px;
`
const FeedInputContainer = styled.div`

padding: 10px;
border-bottom: 20px;
border-radius: 10px;
margin-bottom: 20px;
background-color: #fff;`
const FeedInput = styled.div`
border: 1px solid lightgray;
border-radius: 30px;
display: flex;
padding: 10px;
color: gray;
padding-left: 15px;

form{
    display: flex;
    width: 100%;

    input{
        border: none;
        flex: 1;
        margin-left: 10px;
        outline-width: 0;
        font-weight: 600;

    }

    button{
        display: none;
    }
}
`