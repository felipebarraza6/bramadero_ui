import React, { useEffect, useState } from 'react'

import {
    Card,  
    CardBody,
    CardTitle,
    Row,
    Col,
    CardHeader,
    
  } from "reactstrap";

import { Bar, Line } from "react-chartjs-2"

import SortingTable from "../components/SortingTable/SortingTable.js"

import {
    chartExample5,
    chartExample6,
    chartExample7,
    chartExample8,
    chartExample9,
    chartExample10 } from "../variables/charts.js"

import api_novus from '../api_novus/endpoints'

const MiPozo = () => {

  const [well, setWell] = useState(0)
  const [pond, setPond] = useState(0)
  const [acc, setAcc] = useState(0)

  useEffect(() => {
    const get = async() => {
        const rqWell = await api_novus.lastData('3grecuc1v')
        const rqPond = await api_novus.lastData('3grecuc2v')
        const rqAcc = await api_novus.lastData('3grecdi1va')
        setWell(rqWell.data.result[0].value)
        setPond(rqPond.data.result[0].value)
        setAcc(rqAcc.data.result[0].value)
        return {
          rqWell, 
          rqPond,
          rqAcc
        }
    }
  get()
  }, [])

    return( <>
        <div className="content">
          <Row>         
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader style={{marginBottom:'90px'}}>
                  
                  <Row>
                    <Col className="text-left" md="5" >
                      <h5 className="card-category">Mi Pozo</h5>
                      <CardTitle tag="h2">Esquema de representacion</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>                         
                <Row>
                <Col  lg="1" style={{marginLeft:'220px'}}>
                    <hr style={styles.hrV} />                    
                  </Col>
                  <Col  lg="2" style={{marginLeft:'0px'}}>                    
                    <hr style={styles.line} />                    
                  </Col>
                  <Col  lg="2" style={{marginLeft:'10px'}}> 
                  
                    <div style={{marginTop:'-6px'}}>
                    CAUDAL: {well} (Lt/S)
                    </div>
                  
                  </Col>
                  <Col  lg="1" style={{marginLeft:'0px'}}>                    
                    <hr style={styles.line2} />                    
                  </Col>
                  <Col lg="3">
                      <div style={{border:'2px solid gray', marginTop:'-50px',marginLeft:'-30px', padding:'10px',width:'200px'}}>
                          <span style={{color:'gray'}}>Acumulador: {acc/100} (m3)</span>
                          <img style={{marginTop: '0px'}} width={300}  src='https://smarthydro.cl/wp/wp-content/uploads/2021/01/logo-sin-tagline_Mesa-de-trabajo-1.png' />
                      </div>
                  </Col>
                  </Row>            
                    <Row style={{marginBottom: '100px', marginTop:'-300px'}}>
                      <Col lg="4" style={{paddingTop:'00px',marginLeft:'60px', background: 'repeating-linear-gradient(55deg, rgba(0, 0, 0, 0) 35px, rgba(0, 0, 0, 0) 50px, #d9d9d9 50px,#d9d9d9 60px'}}>                          
                          <Bar
                          data={{
                            labels: ["NIVEL FREATICO"],
                            datasets: [
                              {
                                label: "Metros",
                                fill: false,
                                backgroundColor: "#3C91E6",
                                hoverBackgroundColor: " #3C91E6",
                                borderColor: "#3C91E6",
                                borderWidth: 0,
                                borderDash: [0],
                                borderDashOffset: 0.0,
                                data: [pond+17.0],
                              }     
                            ],
                          }}
                          options={chartExample8.options}
                          style={{backgroundColor: 'gray'}}
                          height={'350px'}
                          />                          
                      </Col>         
                      <Col lg="4" style={{color:'gray', marginLeft: '150px', marginTop:'100px'}}>
                      <table style={styles.table}>
                          <tr >
                            <th style={styles.table.tdth}>Profundidad de pozo</th>
                            <td style={styles.table.tdth}>50 mtrs</td>                            
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Posicionamiento de bomba</th>
                            <td style={styles.table.tdth}>36 mtrs</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Posicionamiento de sensor(freatico)</th>
                            <td style={styles.table.tdth}>33 mtrs</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Diámetro ducto de salida(bomba)</th>
                            <td style={styles.table.tdth}>4”</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Diámetro flujometro</th>
                            <td style={styles.table.tdth}>4”</td>
                          </tr>
                         
                        </table>
                      </Col>
                      
                    </Row>         
                </CardBody>
              </Card>
            </Col>           
          </Row>
          
        </div>
      </>)
}

const styles = {
  line: {
    color: 'white',
    backgroundColor: '#5e72e4',
    border:'10px solid #5e72e4',
    marginTop:'-5px',
    marginLeft: '-60px',
    width:'230px'  
  },
  line2: {
    color: 'white',
    backgroundColor: '#5e72e4',
    border:'10px solid #5e72e4',
    marginTop:'-5px',
    marginLeft: '-60px',
    width:'108px'  
  },
  diagonal: {    
      borderTop:'4px solid gray',
      width:'257px',
      transform: 'rotate(-12.5deg)',
      transformOrigin: '0% 0%',
      marginTop: '50px'  
  },
  hrV: {
    
    height:'50vh',
    marginTop:'-5px',
    width:'.2vw',
    border:'10px solid #5e72e4',
    backgroundColor:'#5e72e4',
    
   },
   table: {
    borderCollapse: 'collapse',
    width: '100%',    
    tdth: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px'
    }
        
   }
}

export default MiPozo