import React from 'react';
import PrintImg from "../../../assets/pdfprint1.png"

class ComponentToPrint extends React.Component {
  render( ) {
    return (
      <>
        <img src={PrintImg} height={"1000px"} width={"100%"} ></img>
      </>
    );
  }
}

export default ComponentToPrint;
