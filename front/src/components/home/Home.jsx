import './Home.css'
import React, { Component } from 'react'
import Main from '../template/Main';
import on from '../../assets/imgs/on.png';
import off from '../../assets/imgs/off.png';
import timer from '../../assets/imgs/timer.png';
import qr from '../../assets/imgs/frame.png'
import * as firebase from 'firebase';


export default class UserCrud extends Component {

        constructor(){
 
                super();
                this.state={
                  v1: '',
                  v2:'',
                  v3:'',
                  v4:'',
                  t:'',
                  conta:10








                } ; 
              }
               
              renderVAGA1(){
                if(this.state.v1==='on'){
                return(
              <img src={on}  alt=''></img>
                )
              
                }else{
                  return(
                    <img src={off}  alt=''></img>
                      )
                }
              
              }
              renderVAGA2(){
                if(this.state.v2==='on'){
                return(
              <img src={on}  alt=''></img>
                )
              
                }else{
                  return(
                    <img src={off}  alt=''></img>
                      )
                }
              
              }
              renderVAGA3(){
                if(this.state.v3==='on'){
                return(
              <img src={on}  alt=''></img>
                )
              
                }else{
                  return(
                    <img src={off}  alt=''></img>
                      )
                }
              
              }
              tick(){             
               if(this.state.v4==="on"){
                if((this.state.conta - 1) >= 0){
                  this.setState((prevState, props)=>({
                    conta:prevState.conta - 1
                     }));
                     
                   }

               }
               
              }
              
              renderVAGA4(){
                if(this.state.v4==='on'){
                return(
              <img src={on}  alt=''></img>
                )
              console.log(this.state.conta)
                }else{
                  return(
                    <img src={off}  alt=''></img>
                      )
                }
              
              }
              
              componentDidMount(){
              
                const Config = {
                  apiKey: "AIzaSyBUJj7zSJW1d2r93EosrWI-dqkI5U4aa4M",
                  authDomain: "dbestacione.firebaseapp.com",
                  databaseURL: "https://dbestacione.firebaseio.com",
                  projectId: "dbestacione",
                  storageBucket: "dbestacione.appspot.com",
                 
                };
              
                firebase.initializeApp(Config);
                this.conta=setInterval(
                  (prevState,props)=>this.tick(),
                  1000
                )



                const rootRef = firebase.database().ref().child('VAGA1');
                const vaga1Ref= rootRef.child('VAGA1');
                const root2Ref = firebase.database().ref().child('VAGA2');
                const vaga2Ref= root2Ref.child('VAGA2');
                const root3Ref = firebase.database().ref().child('VAGA3');
                const vaga3Ref= root3Ref.child('VAGA3');
                const root4Ref = firebase.database().ref().child('VAGA4');
                const vaga4Ref= root4Ref.child('VAGA4');
                const roottRef = firebase.database().ref().child('tempo');
                const tempoRef= roottRef.child('tempo');
                
                vaga1Ref.on('value', snap =>{
                this.setState({
                  v1: snap.val()
                  
                });
              
                
               
                });
                tempoRef.on('value', snap =>{
                  this.setState({
                    t: snap.val()
                    
                  });
                
                  
                 
                  });
                vaga2Ref.on('value', snap =>{
                        this.setState({
                          v2: snap.val()
                          
                        });
                        
                       
                        });
                
                               
                      
                        vaga3Ref.on('value', snap =>{
                                this.setState({
                                  v3: snap.val()
                                  
                                });
                                
                               
                                });
                        
                        
                                vaga4Ref.on('value', snap =>{
                                        this.setState({
                                          v4: snap.val()
                                          
                                        });
                                        
                                       
                                        });
                                
                
                } 
  
  render() {
        return (
                <Main icon="car" title="Vagas"
                subtitle="Aconpanhamento em RealTime(Tempo Real) das vagas.">
                  <div >CONTROLE DE VAGAS :</div>
                  <div className="vagas" >          
                  <strong >A1</strong>                  
                  {this.renderVAGA1()}
                  <strong>A2</strong>
                  {this.renderVAGA2()}
                  <strong>A3</strong>
                  {this.renderVAGA3()}
                  <strong>A4</strong>                 
                  {this.renderVAGA4()}
                  {this.state.conta}
          </div>
          
          <div className="qr"> 
               <strong >Acompanhe acessando com :</strong>
               <img src={qr} alt=""/> 
               <strong>OU digite o seguinte endereço <a href="http://estacionae.duckdns.org:3000/"><span className="text-danger">http://estacionae.duckdns.org:3000 </span></a>seu Navegador.</strong>
               </div>
              </Main>




                
                
           
        )
    }
}
  
    

    