import React, { Component } from "react";
import { Box, BoxTypes } from "../components/Box";
import { ImgHeader } from "../components/ImgHeader";

const imgSrc =
  "https://www.ge.com/news/sites/default/files/styles/full_header/public/Reports/2020-03/GettyImages-530755444-e1496426370542.jpg?itok=67DfrtvX";

export class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Box type={BoxTypes.Wrapper}>
          <ImgHeader imgSrc={imgSrc} headerText="About Us" />
          <div className="row mt-5">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p style={{ fontSize: "20px" }}>
                Dolore consequat commodo sint cillum. Veniam aliqua est et
                adipisicing magna adipisicing esse ad elit est incididunt nisi.
                Elit eu irure labore minim aliquip reprehenderit qui aliqua.Do
                ad do cillum in adipisicing culpa dolor mollit dolor sit esse
                irure aliqua. Laborum excepteur dolor irure cupidatat mollit
                pariatur commodo laboris irure. Cillum dolor non officia fugiat
                commodo nostrud aute. Consequat proident anim nisi nostrud sunt
                exercitation sunt culpa do aliquip aliqua. Exercitation fugiat
                proident veniam nisi.Veniam mollit dolor dolor sunt eiusmod amet
                consectetur. Exercitation incididunt labore irure sit ea.
                Excepteur elit nostrud quis quis sit deserunt cillum
                adipisicing. Nisi reprehenderit cupidatat non ullamco
                consectetur deserunt Lorem sunt ea est ea culpa elit. Laboris
                pariatur amet aliqua velit Lorem sint non. Cupidatat culpa
                exercitation officia do est do. Dolore do cupidatat esse
                proident reprehenderit ad dolor eiusmod deserunt officia enim.
              </p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="d-flex justify-content-center">
                <img
                  src="https://www.hermesiletisim.net/uploads/2013/11/pazarlama-teknikleri-g%C3%B6nderim-testleri.jpg"
                  class="img-fluid"
                  alt="..."
                ></img>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="d-flex justify-content-center">
                <img
                  src="https://www.hermesiletisim.net/uploads/2013/11/pazarlama-teknikleri-g%C3%B6nderim-testleri.jpg"
                  class="img-fluid"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p style={{ fontSize: "20px" }}>
                Dolore consequat commodo sint cillum. Veniam aliqua est et
                adipisicing magna adipisicing esse ad elit est incididunt nisi.
                Elit eu irure labore minim aliquip reprehenderit qui aliqua.Do
                ad do cillum in adipisicing culpa dolor mollit dolor sit esse
                irure aliqua. Laborum excepteur dolor irure cupidatat mollit
                pariatur commodo laboris irure. Cillum dolor non officia fugiat
                commodo nostrud aute. Consequat proident anim nisi nostrud sunt
                exercitation sunt culpa do aliquip aliqua. Exercitation fugiat
                proident veniam nisi.Veniam mollit dolor dolor sunt eiusmod amet
                consectetur. Exercitation incididunt labore irure sit ea.
                Excepteur elit nostrud quis quis sit deserunt cillum
                adipisicing. Nisi reprehenderit cupidatat non ullamco
                consectetur deserunt Lorem sunt ea est ea culpa elit. Laboris
                pariatur amet aliqua velit Lorem sint non. Cupidatat culpa
                exercitation officia do est do. Dolore do cupidatat esse
                proident reprehenderit ad dolor eiusmod deserunt officia enim.
              </p>
            </div>
          </div>
        </Box>
      </React.Fragment>
    );
  }
}
