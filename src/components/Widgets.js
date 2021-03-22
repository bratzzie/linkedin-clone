import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
function Widgets() {

    const newsArticle = (heading, subtitle) =>(
        <WidgetsArticle>
            <WidgetsArticleLeft>
                <FiberManualRecordIcon />
            </WidgetsArticleLeft>

            <WidgetsArticleRight>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </WidgetsArticleRight>
        </WidgetsArticle>
    )
    return (
        <WidgetsSection>
            <WidgetsHeader>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </WidgetsHeader>
            {newsArticle("Lorem epolctd", "kkteds'vkrokvgrpg")}
            {newsArticle("Coronavirus: UK updates", "Top news - 8905 readers")}
        </WidgetsSection>
    )
}

export default Widgets

const WidgetsArticle = styled.div`
display: flex;
padding: 10px;
cursor: pointer;

:hover{
    background-color: whitesmoke;

}`

const WidgetsArticleLeft = styled.div`
color: #0177b7;
margin-right: 5px;


.MuiSvgIcon-root{
    font-size: 15px; // check
}`
const WidgetsArticleRight = styled.div`
flex: 1;

h4{
    font-size: 14px;

}

p{
    font-size: 12px;
    color: gray;
}`

const WidgetsSection = styled.div`
position: sticky;
top: 80px;
flex: 0.2;
background-color: #fff;
border-radius: 10px;
border: 1px solid lightgray;
height: fit-content;
padding-bottom: 10px;
`
const WidgetsHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;

h2{
    font-size: 16px;
    font-weight: 400;
}`
