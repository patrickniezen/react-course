import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
        <div className={classes.Modal} style={{
            transform: props.show ? 'translateY(0)' : 'transformY(-100vh)',
            display: props.show ? 'block' : 'none'
        }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;