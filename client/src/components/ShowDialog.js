import React from "react";
import '../stylesheets/showDialog.css';

function ShowDialog({message, flag, type}) {
    return(
        <div className={`${flag ? 'noShowed' : 'showed'} ${type}`}>
            <h3>{message}</h3>
        </div>
    );
}

export default ShowDialog;