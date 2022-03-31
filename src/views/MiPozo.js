import React, { useEffect, useState } from 'react'

import {
    Card,  
    CardBody,
    CardTitle,
    Row,
    Col,
    Button,
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

  const data_estatic = JSON.parse(localStorage.getItem('data_p') || null)

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
            <Col>
              <Button onClick={()=> {
                localStorage.setItem('token_novus', '51ef5b36-0690-4592-89b0-a7aa40e04a17')
                localStorage.setItem("data_p", JSON.stringify({
                  "d1": 50,
                  "d2": 33,
                  "d3": 36,
                  "d4": 4,
                  "d5":4
                }))
                window.location.reload()
              }}>El Camaron</Button>
              <Button onClick={()=> {
                localStorage.setItem('token_novus', '40cef8c3-482c-46f7-a54a-a4f6d80921d5')
                localStorage.setItem("data_p", JSON.stringify({
                  "d1": 48,
                  "d2": 13,
                  "d3": 0,
                  "d4": 4,
                  "d5":4
                }))
                window.location.reload()
              }} >La Tuna</Button>
              <Button onClick={()=> {
                localStorage.setItem('token_novus', '32ae0a00-7374-46e8-bc5c-e085714748d7')
                localStorage.setItem("data_p", JSON.stringify({
                  "d1": 82,
                  "d2": 20,
                  "d3": 24,
                  "d4": 4,
                  "d5":4
                }))
                window.location.reload()
              }} >Lo Moscoso</Button>
              <Button onClick={()=> {
                localStorage.setItem('token_novus', '9d1162a7-7088-4dc8-9b19-d666acc051b1')
                localStorage.setItem("data_p", JSON.stringify({
                  "d1": 50,
                  "d2": 33,
                  "d3": 36,
                  "d4": 4,
                  "d5":4
                })) 
                window.location.reload()
              }} >Manantiales</Button>
              <Button onClick={()=> {
                localStorage.setItem('token_novus', '867f9225-24f2-487d-bf28-c2ccd0e662bc')
                localStorage.setItem("data_p", JSON.stringify({
                  "d1": 50,
                  "d2": 33,
                  "d3": 36,
                  "d4": 4,
                  "d5":4
                }))
                window.location.reload()
              }} >San Jose</Button>
            </Col>
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
                          <span style={{color:'gray'}}>Acumulador: {acc/10} (m3)</span>
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
                                data: [pond+(data_estatic.d1-data_estatic.d2)],
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
                            <td style={styles.table.tdth}>{data_estatic.d1} mtrs</td>                            
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Posicionamiento de bomba</th>
                            <td style={styles.table.tdth}>{data_estatic.d3} mtrs</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Posicionamiento de sensor(freatico)</th>
                            <td style={styles.table.tdth}>{data_estatic.d2} mtrs</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Diámetro ducto de salida(bomba)</th>
                            <td style={styles.table.tdth}>{data_estatic.d4}”</td>
                          </tr>
                          <tr>
                            <th style={styles.table.tdth}>Diámetro flujometro</th>
                            <td style={styles.table.tdth}>{data_estatic.d5}”</td>
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
    width:'200px'  
  },
  line2: {
    color: 'white',
    backgroundColor: '#5e72e4',
    border:'10px solid #5e72e4',
    marginTop:'-5px',
    marginLeft: '-50px',
    width:'80px'  
  },
  diagonal: {    
      borderTop:'4px solid gray',
      width:'57px',
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
