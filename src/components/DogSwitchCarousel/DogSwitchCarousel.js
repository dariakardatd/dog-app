// import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Picture from "../Picture/Picture";
import React, { useState , useCallback} from "react";


const DogSwitchCarousel = (slides) => {
  //let dogPicUrl = ;

  // Declare a new state variable, which we'll call "count"
  // const [count, setCount] = useState(0);

  const [dogValue, setDogValue] = useState([
    "https://placedog.net/300/400/?id=5",
    "https://placedog.net/300/400/?id=6",
    "https://placedog.net/300/400/?id=14",
    "https://placedog.net/300/400/?id=15",
    "https://placedog.net/300/400/?id=10",
  ]);
  

  const switchDogPicUrl = useCallback((pos) => {
    const selected = dogValue[pos];
    const first = dogValue[0];

    const newdogPicUrl = [...dogValue];
    newdogPicUrl[0] = selected;
    newdogPicUrl[pos] = first;
    setDogValue(newdogPicUrl);
  }, [dogValue]);
  
  return (
    <Row>
      <Col  xs={12} md={6} >
          <Picture url={dogValue[0]} className="mb-3 mb-md-0" />
      </Col>

      <Col  xs={6} md={3} className="d-flex flex-column justify-content-between">
        <button className="btn__dogCarousel" onClick={() => switchDogPicUrl(1)}>
          <Picture url={dogValue[1]} />
        </button>

        <button className="btn__dogCarousel" onClick={() => switchDogPicUrl(2)}>
          <Picture url={dogValue[2]} className="mt-3" />
        </button>
      </Col>

      <Col xs={6} md={3} className="d-flex flex-column justify-content-between">
        <button className="btn__dogCarousel" onClick={() => switchDogPicUrl(3)}>
          <Picture url={dogValue[3]} />
        </button>

        <button className="btn__dogCarousel" onClick={() => switchDogPicUrl(4)}>
          <Picture url={dogValue[4]} className="mt-3" />
        </button>
      </Col>
    </Row>
  );
};

export default DogSwitchCarousel;
