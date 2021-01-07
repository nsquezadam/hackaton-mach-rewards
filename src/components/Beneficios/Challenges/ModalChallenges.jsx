import React, { useContext, useState } from 'react';
import './Styles/ModalChallenges.css';
import './Styles/Challenges.css';
import { ContextUser } from '../../../App.js';
import closeIcon from '../../../img/close.svg';
import BanderaModal from '../../../img/BanderaDesafioModal.svg';
import Logoptos from '../../../img/logPtos.svg';
import copyIcon from '../../../img/CopyIcon.svg';
import instagram from '../../../img/Instagram.svg';
import linkdedin from '../../../img/linkedin.svg';
import gmail from '../../../img/gmail.svg';
import whatsapp from '../../../img/whatsApp.svg';

const ModalChallenge = (props) => {
	const { userValue } = useContext(ContextUser);

	const [user] = userValue

	const [modalChallenge, setModalChallenge] = useState(false);
	const [socialMedia, setsocialMedia] = useState(false);

	const classPointsPpal= user===0? 'pointsPpalBeginner':'pointsPpalAdventure';
	

	return (

		<div className="cardChallengePpal" >
			{modalChallenge === false ? null : <div className="modalChallenge">
				<div className="modalContentChallenge">
					<img src={closeIcon} alt='closeIcon' className="closeModalChallenge" onClick={() => setModalChallenge(false)} />
					<img className="imgModal" src={props.data.foto} alt="" srcSet="" />
					<div className="challengeBanner">
						<p className="titleBanner"> <img src={BanderaModal} className="iconoChallenge" alt="" /> Desafío</p>
					</div>
					<div className="infoModal">
						<div className="pointsModal">
							<p><img src={Logoptos} alt="" />{props.data.puntos}</p>
						</div>
						<div className="textModal">
							<p className="titleModal">{props.data.titulomodal}</p>
							<p className="paragraphModal">{props.data.textomodal}</p>
						</div>
					</div>
					{socialMedia === false ?
						<div >
							<div className="copyLink">
								<p className="instructionCopy">Copia el link de descarga</p>
								<p className="linkDownload"> https://bajamach.com/MGyXjoQGocv
				  	<img className="copyIcon" src={copyIcon} alt="" />
								</p>
							</div>
							<button className="btonDesafio" onClick={() => { setsocialMedia(true) }}>
								<img src={props.data.iconobton} alt="" />
								{props.data.textobton}
							</button>
							<div className="message">
								<p>*Tu invitad@ debe activar su tarjeta MACH para que ganes los puntos.</p>
							</div>
						</div> :
						<div className="socialMediacontainer">
							<div className="textSocialMedia">
								<p>¿Cómo quieres enviar tu invitación?</p>
							</div>
							<div className="iconSocialMedia">
								<div className="WhatsApp">
									<img src={whatsapp} alt="" />
									<p>WhatsApp</p>
								</div>
								<div className="instagram">
									<img src={instagram} alt="" />
									<p>Instagram</p>
								</div>
								<div className="linkedin">
									<img src={linkdedin} alt="" />
									<p>Linkedin</p>
								</div>
								<div className="gmail">
									<img src={gmail} alt="" />
									<p>Gmail</p>
								</div>
							</div>
						</div>}
				</div>
			</div>}
			<img src={props.data.foto} className="photoCard" alt="" srcset="" />
			<div className="cardTextPpal">
				<p className={classPointsPpal}>{props.data.puntos}</p>
				<p className="cardSubtitlePpal">{props.data.titulo}</p>
				<p className="cardExplanationPpal">{props.data.Explicacion}</p>
			</div>
			<button className="btnDesafio" onClick={() => setModalChallenge(!modalChallenge)}>
				<img src={props.data.iconobton} alt="" />
				{props.data.textobton}
			</button>
		</div>
	);
}

export default ModalChallenge;