import React from 'react';
import './Styles/ModalChallenges.css';

const ModalChallenges = (props) => {
    const divStyle ={
        display:props.displayModal ? 'block' : 'none'
    };

    const closeModal =(e) =>{
            e.stopPropagation()
            props.closeModal()
    };

    return (
        <div className="Modal"
        onClick={closeModal}
        style={divStyle}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>
                    x
                </span>
            </div>

        </div>
    )
};

export default ModalChallenges;