import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styled from "styled-components";

const Texto = "Estudante apaixonado pela Área da computação e graduando do segundo período em Bacharelado em Sistemas de Informação. Estou em busca de uma oportunidade de estágio para expandir meus conhecimentos nas diversas Áreas da Computação e desenvolver habilidades práticas enquanto contribuo para o progresso produtivo de alguma empresa, meus principais interesses envolvem programação FullStack, Data Science e Machine Learning"

const Part1 = styled.div`
    width: 30%;
    height: 38em;
    background-color:	#1C1C1C;
    text-align: center;
    display: inline-block;
`

const Foto = styled.img`
    padding:20px;
    width: 60%;
    height: 40%;
    border-radius: 200%;
    border:  #000000 solid 2px;
`
const Title = styled.h1`
    background-color:	#000000; 
    color: #008000;
    font-family: 'Times New Roman', Times, serif;
    border: solid;
    width: 98%;
`
const link = "https://media-exp1.licdn.com/dms/image/C4E03AQFAeRkOFyIBMQ/profile-displayphoto-shrink_800_800/0/1629493319531?e=1637798400&v=beta&t=ZG5OVTCH65mW1Ie6Mc8dct7CMUr70ymdIW_qY5HhwEs";

const Info = styled.article`
    background-color: #000000;
    color:#008000;
    font-family: 'Times New Roman', Times, serif;
    border-style: solid;
    width: 95%;
    height: 31%;
    text-align: left;
    text-align: center;
    padding: 6.3px;
`

const Info2 = styled.article`
    background-color: #000000;
    color: #008000;
    font-family: 'Times New Roman', Times, serif;
    border-style: solid;
    width: 95%;
    height: 55%;
    text-align: left;
    text-align: center;
    padding: 6.3px;
`
const Info3 = styled.article`
    background-color: #000000;
    color: #008000;
    font-family: 'Times New Roman', Times, serif;
    border-style: solid;
    width: 95%;
    height: 55%;
    text-align: left;
    text-align: center;
    padding: 6.3px;
`
const Info4 = styled.article`
    background-color: #000000;
    color: #008000;
    font-family: 'Times New Roman', Times, serif;
    border-style: solid;
    width: 95%;
    height: 45%;
    text-align: left;
    text-align: center;
    padding: 6.3px;
`

const Container = styled.div`
    display: flex;
`

const Part2 = styled.div`
    width: 70%;
    background-image: url(https://th.bing.com/th/id/R.0ebda6b524d7e7c05fac962b5e928bf5?rik=H8RIYige8pnvPQ&pid=ImgRaw&r=0);
    display: flex;
    flex-wrap: wrap;
`

const Form2 = styled.div`
    margin-top: 40px;
    margin-left: 50px;
    width: 38%;
    height: 50%;
    background-color: 	#1C1C1C;
    text-align: center;
`
const Form3 = styled.div`
    margin-left: 50px;
    width: 38%;
    height: 40%;
    background-color: 	#1C1C1C;
    text-align: center;
    
`

const Lista = styled.ul`
    text-align: left;

`

export default function Coluna1(){
    return(
        <Container>
            <Part1>
                <Foto src={link} />
                <Title>Perfil Pessoal</Title>
                <Info><p>{Texto}</p></Info>
            </Part1>

            <Part2>
                <Form2>
                    <Title>Qualificações Gerais</Title>
                    <Info2>
                        <Lista>
                            <li>Experiência em Tratamento e Análise de Dados</li>
                            <li>Experiênciaa em Desenvolvimento de Pesquisa Científica</li>
                            <li>Aptidão para Trabalho em Grupo e Gestão de Pessoas</li>
                            <li>Conhecimento em Pacote Office (Word - Excel - PowerPoint)</li>
                        </Lista>
                    </Info2>
                </Form2>
                <Form2>
                    <Title>Tecnologias da Área</Title>
                    <Info3>
                        <Lista>
                            <li>Uso de Versionamento de código com Git</li>
                            <li>Conhecimento Teórico em SOLID</li>
                            <li>HTML5 / CSS3</li>
                            <li>Javascript / ReactJS</li>
                            <li>Java 11 / Angular 8</li>
                            <li>R / Rtudio</li>
                            <li>Python / Flask</li>
                            <li>C / C++</li>
                        </Lista>
                    </Info3>
                </Form2>
                <Form3>
                    <Title>Formação Acadêmica</Title>
                    <Info4>
                        <Lista>
                            <li>Ensino Médio Completo</li>
                            <li>Bacharelado em Sistemas de Informação EACH USP (2º Período)</li>
                            <li>Bootcamp de Programação FullStack DIO</li>
                        </Lista>
                    </Info4>
                </Form3>
                <Form3>
                    <Title>Experiência Proffisional</Title>
                    <Info4>
                        <Lista>
                            <li> Iniciação Científica (USP Matching Jobs)</li>
                            <li> Estágio em Desenvolvimento de Software Front/Back-end (BCR CX)</li>
                            <li> Trabalho Voluntário de três anos (Irmãs Vicentinas) </li>
                        </Lista>
                    </Info4>
                </Form3>
            </Part2>
        </Container>
    );
}