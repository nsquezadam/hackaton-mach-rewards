import React,{useContext, useState} from 'react';
import './Styles/ModalChallenges.css'
import { ContextUser } from '../../../App.js';
import closeIcon from '../../../img/close.svg';

const ModalChallenge = (props) => {
	const [user] = useContext(ContextUser);

	const [modalChallenge, setModalChallenge] = useState(false);

	return (
		<div>
			<div className="cardChallengePpal" >
			{modalChallenge === false ? null : <div className="modalChallenge">
        <div className="modalContentChallenge">
          <img src={closeIcon} alt='closeIcon' className="closeModal" onClick={() => setModalChallenge(false)} />    
        </div>
      </div>}
				<img src={props.data.foto} alt="" srcset="" />
				<div className="cardTextPpal">
					<p className="pointsPpal">{props.data.puntos}</p>
					<p className="cardSubtitlePpal">{props.data.titulo}</p>
					<p className="cardExplanationPpal">{props.data.Explicacion}</p>
				</div>
				<button className="btnDesafio"  onClick={() => setModalChallenge(!modalChallenge)}>
					{props.data.textobton}
				</button>
			</div>
		</div>
	);
}

export default ModalChallenge;