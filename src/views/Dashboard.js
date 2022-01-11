
import React, { useState, useEffect } from "react";
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
import api_novus from '../api_novus/endpoints'

import CubicMetersConsumed from "../components/Dashboard/CubicMetersConsumed"

const { Countdown } = Statistic;
const deadline = Date.now() + 0 * 60 * 60 * 24 * 2 + 1000 * 30; 

const Dashboard = () => {

  const [well, setWell] = useState(0)
  const [pond, setPond] = useState(0)

  useEffect(() => {
      const get = async() => {
          const rqWell = await api_novus.lastData('3grecuc1v')
          const rqPond = await api_novus.lastData('3grecuc2v')
          setWell(rqWell.data.result[0].value)
          setPond(rqPond.data.result[0].value)
          return {
            rqWell, 
            rqPond
          }
      }
    get()
  }, [])

  
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
                      <p className="card-category">Flujo (lt/sa)</p>
                      <CardTitle tag="h3"> {well} </CardTitle>
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
                      <p className="card-category">Nivel freático (mcH2O)</p>
                      <CardTitle tag="h3"> {pond} </CardTitle>
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
                      <Countdown valueStyle={{color: 'white'}} value={deadline} format="mm:ss:SSS" onFinish={()=> {
                        window.location.reload()
                      }
                      } />
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
