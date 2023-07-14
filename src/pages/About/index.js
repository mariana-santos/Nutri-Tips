import React, {Component} from "react";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer'
import './style.css'

function RedeLink(props){
    return(
        <div>
            <i className={`fa fa-${props.rede} icon-about`}></i>
                <p>{props.username}</p>
        </div>
    );
}

export default class About extends Component {
    render(){
        return(
            <div>
                <Header/>
                
                <img src="https://assets.uninove.br/headers/Nutri%C3%A7%C3%A3o-imagem-principal.jpg?mtime=20201022144043&focal=none"
                    className="header-img" alt=""/>

                <div className="container-row" id="sobre">
                    <div className="container-about">
                        <h1>Como a Nutri Tips nasceu? </h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl quam, vulputate ut interdum ut, vehicula nec ante. Vivamus non nisi ornare, vestibulum elit at, ullamcorper tellus. Aliquam posuere iaculis scelerisque. Mauris lacus lacus, pretium eu arcu ornare, scelerisque tempus lectus. </p>

                        <p>Vestibulum in nunc aliquam, mollis urna non, condimentum dolor. Vivamus iaculis enim dolor, ut convallis orci interdum convallis. Suspendisse dignissim ipsum justo, ut sollicitudin erat vestibulum eget. Nam mollis luctus vehicula. Mauris mollis nunc eget lectus varius, a finibus erat consectetur. </p>
                    </div>

                    <div className="container-redes">
                        <h1 style={{fontSize: '2rem', marginTop: '2rem'}}>Siga nossas redes! </h1>
                        <p>Acompanhe nossos canais para ter acesso a outras dicas sobre alimentação, saúde, bem-estar e receitas</p>

                        <RedeLink rede='instagram' username='@nutri_tips'/>
                        <RedeLink rede='facebook' username='Nutri Tips'/>
                        <RedeLink rede='twitter' username='@nutri_tips'/>
                        <RedeLink rede='linkedin' username='Nutri tips' />

                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}