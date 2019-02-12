import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled,{ThemeProvider, injectGlobal} from 'styled-components';

const theme = {   
  orange:'#FF9200',
  black: '#271600',
  grey:'#794500',
  lightgrey:'grey',
  offWhite:'#FFD296',
  maxWidth:'1024px',
  bs: '0 12px 24px 0 rgba(0,0,0,0.1)',
};

const StyledPage = styled.div`
  background: white;
  color: ${p=>p.theme.black};
`;

const In = styled.div`
  max-width:${props=>props.theme.maxWidth};
  
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family:'radnika_next' ;
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight:normal;
    font-style:normal; 
  }
  html{
    box-sizing: border-box;
    font-size:10px;
  }
  *,*:before,*:after{
    box-sizing: inherit;
  }
  body{
    padding: 0;
    margin:0;
    font-size:1.5rem;
    line-height:2;
    font-family:'radnika_next';
  }
  a{
    text-decoration:none;
    color:${theme.black};
  }
`;
//injectGlobal is global for your project, needs to be written somewhere.

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta/>
        <Header/>
        <In>
        {this.props.children}
        </In>
      </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;