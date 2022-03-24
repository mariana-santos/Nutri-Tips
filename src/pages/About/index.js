import React, {Component} from "react";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer'
import './style.css'

export default class About extends Component {
    render(){
        return(
            <div>
                <Header/>
                
                <img src="https://assets.uninove.br/headers/Nutri%C3%A7%C3%A3o-imagem-principal.jpg?mtime=20201022144043&focal=none"
                    className="header-img"/>

                <div className="container-row">
                    <div className="container-about">
                        <h1 style={{fontSize: '3rem', marginTop: '2rem'}}>Como a Nutri Tips nasceu? </h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl quam, vulputate ut interdum ut, vehicula nec ante. Vivamus non nisi ornare, vestibulum elit at, ullamcorper tellus. Aliquam posuere iaculis scelerisque. Mauris lacus lacus, pretium eu arcu ornare, scelerisque tempus lectus. Pellentesque ligula turpis, scelerisque quis metus eu, tempor malesuada mauris. Nullam viverra orci ac tortor semper, quis aliquet eros rhoncus. Fusce vel neque eros. Phasellus eget tortor eu ante vestibulum sollicitudin. Pellentesque purus nibh, luctus in aliquam sit amet, sollicitudin in purus. </p>

                        <p>Vestibulum in nunc aliquam, mollis urna non, condimentum dolor. Vivamus iaculis enim dolor, ut convallis orci interdum convallis. Suspendisse dignissim ipsum justo, ut sollicitudin erat vestibulum eget. Nam mollis luctus vehicula. Mauris mollis nunc eget lectus varius, a finibus erat consectetur. In sed lectus accumsan, blandit nunc ut, aliquet turpis. Maecenas tincidunt mauris tellus, nec dignissim ligula rhoncus quis. Maecenas euismod suscipit lectus, quis viverra nulla aliquam non. Proin justo felis, interdum a auctor imperdiet, tristique quis justo.</p>
                    </div>

                    <div className="container-redes">
                        <h1 style={{fontSize: '2rem', marginTop: '2rem'}}>Siga a nossas redes! </h1>

                    </div>
                </div>

                

                <Footer />
            </div>
        );
    }
}