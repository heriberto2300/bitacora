import React from "react";
import '../stylesheets/ShowDialog.css';

function ShowDialog({message, flag, type}) {
    return(
        <div className={`${flag ? 'no-showed' : 'showed'} ${type}`}>
            <h3>{message}</h3>
        </div>
    );
}

export default ShowDialog;