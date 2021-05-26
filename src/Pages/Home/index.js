import React from 'react';
import { Col, Container, Row, Image, Button} from 'react-bootstrap';
import BarraNav from '../../Componentes/Nav';
import "../../App.css";


function Home(){
    return(<>

    <BarraNav />
    {/* ------------------------------AREA INICIAR DESIGN--------------------- */}
        <Container className="design">
            <Row>
                <Col md="8" sm="8">
                    <h2>Inovação, Design e</h2>
                    <h1>Experiência</h1><br/>
                    <span>Sempre a frente em soluções digitais</span><br/>
                    <Button>Saiba mais</Button>
                </Col>
                <Col md="4" sm="4">
                    <Image src="../../img/2905211.svg" />
                </Col>
            </Row>
        </Container>
    {/* ------------------------------AREA INICIAR SOBRE--------------------- */}
        <Container className="sobre">
            <h1>SOBRE NÓS</h1>
            <Image className="sombra" />
            
            <Row className="m-5">
                <Col md="6" sm="6">
                    <Image className="bg1" src="../../img/back1.png" />
                    <Image className="foto" src="../../img/freelancer-bearded-man-taking-notes-laptop_85574-3146.png" />
                </Col>
                <Col className="sobreText" md="6" sm="6">
                    <h2>Qual o seu próximo projeto?</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Lorem ipsum dolor sit amet. Ut diam quam nulla porttitor massa id neque.</span><br/>
                    <Button>Download CV</Button>
                </Col>
            </Row>
        </Container>

     {/* ------------------------------AREA INICIAR SERVIÇOS--------------------- */}
        <Container className="servicos">

            <Container className="tituloServicos">
            <h1>Serviços</h1>
            <Image className="sombraServicos1" />
            <h2>Proporcionamos uma melhor experiência</h2>
            <Image className="sombraServicos2" />
            </Container>
            <Row className="m-5">
                <Image className="bkEsquerda" src="../../img/back1.png" />
                <Col className="cardEsquerda" md="4" sm="4">
                    <Container className="porcent">
                        <h3>85%</h3><br/>
                        <h2>Design UI</h2>
                        <div id="progressbar">
                        <div></div>
                        </div>
                        <span>Photoshop, Illustrator</span>
                    </Container>
                </Col>
                <Col md="5" sm="5">
                    <Container className="containerServicos">
                        <Image className="bordaImage" src="../../img/Page-1.svg" />
                    
                    <h1>Design</h1>
                    <span>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</span>
                    <Button className="botaoServicos">Saiba mais <Image src="../../img/arrow.svg" /></Button>
                    </Container>
                </Col>
            </Row>
        </Container>

    {/* ------------------------------AREA INICIAR PORTIFOLIO--------------------- */}
    <Container className="portifolio">

    <Container className="tituloPortifolio">
    <h1>PORTIFOLIO</h1>
    <Image className="sombraPortifolio1" />
    <h2>Meus Trabalhos</h2>
    <Image className="sombraPortifolio2" />
    </Container>
    <Row className="m-5">
        <Col md="3" sm="6">
            <Container className="ml-1">
                <Image className="card" src="../../img/fish.png" />
            </Container>
        </Col>
        <Col md="3" sm="6">
            <Container className="ml-1">
                <Image className="card" src="../../img/app-design3.png" />
            </Container>
        </Col>
        <Col md="3" sm="6">
            <Container className="ml-1">
                <Image className="card" src="../../img/thumbnail-918x656-01-8be87c (1).png" />
            </Container>
        </Col>
        <Col md="3" sm="6">
            <Container className="ml-1">
                <Image className="card" src="../../img/How-UX-UI-Design-Will-Help-Your-Business-Succeed.png" />
            </Container>
        </Col>
    </Row>
    
    

    <Container className="tituloPortifolio">
    <h1>CONTATO</h1>
    <Image className="sombraContato1" />
    <h2>Envie sua mensagem</h2>
    <Image className="sombraContato2" />
    </Container>

    <Container>
    <form className="formulario">
        
        <input className="w-100" type="text" id="" name="" placeholder="Nome" />
        <input className="w-50" type="text" id="" name="" placeholder="Telefone" />
        <input className="w-50" type="text" id="" name="" placeholder="E-Mail" /><br/>
        <textarea rows="5" className="w-100" name="comment" form="usrform"></textarea>
    <br/>
    </form>
    
    </Container>
    <Button className="botaoFormulario">Enviar</Button>

    <Image className="bgFormulario" src="../../img/back1.png" />

    </Container>
    


    </>);
};

export default Home