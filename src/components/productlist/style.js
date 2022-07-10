import styled from 'styled-components'

export const Container = styled.div`
    
    width:100%;
    display:flex;
    flex-direction:row;
    gap:5vh;
    justify-content:space-around;
    flex-wrap:wrap;
    align-itens:center;
`

export const List = styled.div`
    width:250px;
    height:300px;
    background-color:yellow;
    border-radius:10px;
    color:black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .title{
        font-size:25px;
        font-weight:700;
    }
    .price{
        font-size:30px;
        font-weight:300;
    }
`