import React from 'react';
import Avatar from 'react-avatar'
import { BsLinkedin,BsWhatsapp  } from 'react-icons/Bs';
import { SiGithub } from 'react-icons/Si';
import { MdLocationPin,MdOutlineEmail,MdPictureAsPdf } from 'react-icons/Md';
import { GiSmartphone } from 'react-icons/Gi';






import styles from './profile.module.css'

export default function Profile() {

    return (
        <div className = {styles.container}>

            <div className = {styles.profile}>

                <div className = {styles.avatar}>
                    <Avatar src="/images/profile.jpeg" size="180" round={true} />
                </div>

                <h1 className={styles.nome}>Fábio Rocha</h1>

                <div className = {styles.developer}>
                    <text>Desenvolvedor</text>
                </div>

                <div className = {styles.developer}>
                    <text>Front-end ReactJs</text>
                </div>

                <div className = {styles.developer}>
                    <text>Mobile React Native</text>
                </div>

                <div className={styles.social}>
                    <BsLinkedin size="50" color="#0077b5"/>
                    <SiGithub size="50" color="black"/>
                </div>

                <div className = {styles.contacts}>
                    
                    <MdLocationPin size="22" color="red"/>
                    <text> Torres/RS </text>

                    <div className={styles.break}/> 

                    <BsWhatsapp size="22" color="#25d366"/>
                    <GiSmartphone size="22" color="black"/>
                    <text> (53) 999314087 </text>

                    <div className={styles.break}/>

                    <MdOutlineEmail size="22" color="black"/>
                    <text> fabio.oliveira.r@hotmail.com </text>
  
                </div>

                <div className={styles.buttonBox}>

                    <button className = {styles.button} onClick={()=>{console.log('download curriculo')}}>
                        <MdPictureAsPdf size="22" color="black"/>  
                        <text className={styles.buttonText}> Baixar Curriculo</text>
                    </button>
                </div>

            </div>
            
        </div>

    )

}




