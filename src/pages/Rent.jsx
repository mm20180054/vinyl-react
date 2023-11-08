import React from "react";
import OneVinyl from "../components/OneVinyl";
import Row from "react-bootstrap/Row";

function Rent({ vinyls, rentVinyl }) {
  return (
    <div className="all-vinyls">
      <Row>
        {vinyls.map((vinyl) => (
          <OneVinyl vinyl={vinyl} key={vinyl.id} rentVinyl={rentVinyl} />
        ))}
      </Row>
    </div>
  );
}

export default Rent;