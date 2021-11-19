
import React from 'react';

import { Container, Row, Col } from "react-bootstrap";

import dogQuote from "../images/dogQuote.svg";
import Picture from "../components/Picture/Picture";
import ArticleTitle from "../components/ArticleTitle/ArticleTitle";
import TrendsBox from "../components/TrendsBox/TrendsBox";
import TexContainer from "../components/TexContainer/TexContainer";
import DogSwitchCarousel from "../components/DogSwitchCarousel/DogSwitchCarousel";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";




const Home = () => {
    return (

<div className="App">
        <Header title="Dog catalogue" subtitle={["page 1", "page 2", "page 3"]} />

      <div className="Catalogue__wrapper">
      {/* FIRST ROW */}

      <Container className="bootstrapContainer">
        <Row className="align-items-end">
          <Col xs={12} md={6}>
            <Picture
              url="https://placedog.net/300/400/?id=3"
              caption="labrador"
              className="Picture__captionBackground"
            />
            <img src={dogQuote} className="img-fluid mt-4" />
          </Col>

          <Col xs={12} md={6}>
            <TexContainer
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="withBorder"
            />
            <TrendsBox
              title="Dog Trends"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className=""
            />
          </Col>
        </Row>

        {/* SECOND DOG CAROUSEL ROW */}

        <DogSwitchCarousel />

        {/* FOURTH ARTICLE & TEXT */}

        <Row className="align-items-end">
          <Col xs={12} md={6}>
            <ArticleTitle
              title="01"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Col>

          <Col xs={12} md={6}>
            <TexContainer text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </Col>
        </Row>

        {/* THIRD DOG PIC AND DOG PICS WITH DESCRIPTION */}

        <Row>
          <Col xs={12} md={6}>
            <Picture
              url="https://placedog.net/300/400/?id=17"
              caption="Lorem Ipsum"
              className="photoBy"
            />
          </Col>

          <Col>
            <Picture url="https://placedog.net/300/400/?id=21" />
          </Col>

          <Col>
            <Picture
              url="https://placedog.net/300/400/?id=22"
              caption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="captionBottom"
            />
          </Col>
        </Row>

        {/*  ROW TEXT AND PIC */}

        <Row>
          <Col xs={6}>
            <TexContainer
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="italic"
            />
          </Col>

          <Col>
            <Picture url="https://placedog.net/300/400/?id=29" />
          </Col>
        </Row>

        {/*  ROW ARTICLE AND TEXT */}
        <Row className="align-items-end">
          <Col xs={12} md={6}>
            <ArticleTitle
              title="02"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="blue"
            />
          </Col>

          <Col>
            <TexContainer text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </Col>
        </Row>

        {/* ROW WITH TEXT AND DOGS */}

        <Row className="align-items-end">
          <Col xs={12} md={6} className="mb-5 mb-md-0">
            <TrendsBox
              title="Dog Trends"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="peach"
            />
          </Col>

          <Col>
            <Row>
              <Col>
                <Picture url="https://placedog.net/300/400/?id=20" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Picture
                  url="https://placedog.net/300/400/?id=28"
                  className="mt-3"
                />
              </Col>
              <Col>
                <Picture
                  url="https://placedog.net/300/400/?id=30"
                  className="mt-3"
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/*  ROW ARTICLE AND TEXT */}
        <Row className="align-items-end">
          <Col xs={10} md={6}>
            <ArticleTitle
              title="03"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              className="white"
            />
          </Col>

          <Col>
            <TexContainer text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          </Col>
        </Row>
      </Container>
    </div>

    <Footer
          links={[
            "Dog Trends",
            "Page 2",
            "Page 3",
            "Page 4",
            "Page 5",
            "Page 6",
            "Page 7",
          ]}
          subText="Lorem Ipsum" />
      </div>
    );
};
export default Home;