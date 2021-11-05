import React, { useEffect, useState } from 'react'

import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import api_novus from '../../api_novus/endpoints'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

// core components
import {
  dashboard, chart_1_2_3_options
} from "../../variables/charts.js"

const CubicMetersConsumed = () => {

    const [dataChart, setDataChart] = useState([])        

    const [bigChartData, setbigChartData] = React.useState("data1")
    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])
    

    const setBgChartData = (name) => {
        setbigChartData(name)
    }

    const getData = async()=> {
        try {
            const request = await api_novus.data('3grecdi1va')            
            var results = request.result
            setDataChart(results)                                                 
            results.map((x) => {
                setLabels((label) => {
                  if(Array.isArray(label)){                                      
                    return [...label, x.metadata.CREATED_AT.slice(0,10)]                                                                                   
                    
                }
                  
                })
              setData(data => [...data, x.value])
              return x
            }) 
            return request.result          
        } catch(err) {
            console.log(err)
        }        
    }

    useEffect(() => {
        getData()                
    }, [])
    
    

    return(<Col xs="12">
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <h5 className="card-category">Medida en metros cubicos</h5>
            <CardTitle tag="h2">Metros cúbicos consumidos(m3)</CardTitle>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <i style={{marginRight:'10px', marginTop:'6px'}}>Registros filtrados hace: </i>
              <Button
                color="info"
                id="0"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data1",
                })}
                onClick={() => setBgChartData("data1")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Semana 1
                </span>
                <span className="d-block d-sm-none">
                  S1
                </span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data2",
                })}
                onClick={() => setBgChartData("data2")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Semana 2
                </span>
                <span className="d-block d-sm-none">
                  S2
                </span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={classNames("btn-simple", {
                  active: bigChartData === "data3",
                })}
                onClick={() => setBgChartData("data3")}
              >
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  Semana 3
                </span>
                <span className="d-block d-sm-none">
                  S3
                </span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">                      
          <Line
            data={{      
              labels: labels,
              datasets: [
                {
                  label: "M3",
                  fill: true,          
                  borderColor: "#1f8ef1",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#1f8ef1",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#1f8ef1",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 6,
                  data: data,
                },
              ],
            }}
            options={chart_1_2_3_options}
          />
        </div>
      </CardBody>
    </Card>
  </Col>)
}


export default CubicMetersConsumed