import React, { useState } from 'react';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import Coluna1 from './components/Perfil';
import styled from 'styled-components';


const Head = styled.header`
  background-color:#6959CD;
  width: 100%;
  height: 2.1em;
  display: flex;
  color: #000000;
`
const Head2 = styled.footer`
  background-color:#6959CD;
  width: 100%;
  height: 1.5em;
  display: flex;
  color: #000000;

`
const Void = styled.div`
  width: 5px;
  height: 5px;
`
const Void2 = styled.div`
  width: 250px;
  height: 20px;
`
const Void3 = styled.div`
  width: 38px;
  height: 20px;
`

const Button = styled.button`
  background-color: #836FFF;
  color: white;
  border-color: white;
`
const Name = styled.span`
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
`

function App() {

  const link1 = "https://www.linkedin.com/in/guilherme-nascime41/" 
  const link2 = "https://github.com/41Guilherme"
  const link3 = ""
  const link4 = ""
  return (
    <Fragment>
      <Head>
        <span> Links de Contato</span>
        <Void/>
        <a href = {link1} target="_blank"><Button > Linkedin</Button></a>
        <Void/>
        <a href = {link2} target="_blank"><Button> GitHub </Button></a>
        <Void/>
        <a href = {link3} target="_blank"><Button> Facebook</Button></a>
        <Void/>
        <a href = {link4} target="_blank"><Button> Instagram </Button></a>
        <Void2/>
        <Name> Guilherme José da Silva Nascimento</Name>
      </Head>
      <Coluna1>
      </Coluna1>
      <Head2> Email: guilherme41@usp.br <Void3/>  Telefone: +55 11 96514-7385 <Void3/> 
      Endereço: Rua Doutor Luis Barreto 299 // Bela Vista // São Paulo - SP <Void3/>
      </Head2>
    </Fragment>
  );
}

export default App;
