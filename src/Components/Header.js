import React from 'react';
import { Link , withRouter } from 'react-router-dom'
import styled from 'styled-components'


const Header = styled.header`
    color:#FFF;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    padding:0 10px;
    background-color:rgba(20,20,20, 0.8);
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display : flex;
`;

const Item = styled.li`
    width:80px;
    height:50px;
    text-align:center;
    border-bottom:3px solid ${props => (props.current ? '#3498db' : 'transparent')};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;

`;

const HeaderTag = ({location : { pathname }}) => (
  <Header>
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === '/tv'}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">search</SLink>
      </Item>
    </List>
  </Header>
)

// const HeaderTag = (props) => (
//     <Header>
//         {console.log(props)}
//         <List>
//             <Item >
//                 <SLink to="/">Movies</SLink>
//             </Item>
//             <Item >
//                 <SLink to="/tv">TV</SLink>
//             </Item>
//             <Item >
//                 <SLink to="/search">search</SLink>
//             </Item>
//         </List>
//     </Header>
// )

export default withRouter(HeaderTag)