import React from "react";

function Debug() {
  return(
    <>
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" href="#test" role="button" aria-expanded="false" aria-controls="test">Button with data-bs-target</button>
      </p>
      <div className="collapse" id="test">
        <div className="card card-body">
          Lorem ipsum juas juas
        </div>
      </div>
    </>
    
  );
}

export default Debug;