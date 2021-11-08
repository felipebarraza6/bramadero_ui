
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
  Card,  
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { Statistic } from 'antd';

import CubicMetersConsumed from "../components/Dashboard/CubicMetersConsumed"

const { Countdown } = Statistic;
const deadline = Date.now() + 0 * 60 * 60 * 24 * 2 + 1000 * 30; 

const Dashboard = () => {
  
  return (
    <>
      <div className="content">
        <Row>
          <CubicMetersConsumed />          
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-warning">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Nivel de Pozo(metros)</p>
                      <CardTitle tag="h3">5.4</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-primary">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Nivel de estanque(litros))</p>
                      <CardTitle tag="h3">3.16</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>
          <Col lg="4" md="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-success">
                      <i className="tim-icons icon-components" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tiempo para sincronización</p>
                      <Countdown valueStyle={{color: 'white'}} value={deadline} format="mm:ss:SSS" onFinish={()=> window.location.reload()} />
                    </div>
                  </Col>
                </Row>
              </CardBody>              
            </Card>
          </Col>        
        </Row>
        
      </div>
    </>
  );
};

export default Dashboard;
