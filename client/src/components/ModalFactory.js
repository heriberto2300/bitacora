import React from "react";

import FormRegister from './FormRegister';

function ModalFactory( {id, type, title} ) {
  
  const renderItem = (type) => {
    switch(type) {
      case 'register':
        return <FormRegister/>
      default:
        return <div>Perrito</div>
    }
  };


  return(
    <>
      <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {renderItem(type)}
          </div>
        </div>
      </div>
      </div>
    </>
  );
  
}

export default ModalFactory;