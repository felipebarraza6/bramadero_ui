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
import Pozo from '../assets/pozo/dem1.png'

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

  const data_estatic = JSON.parse(localStorage.getItem('data_p'))

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
                    <Row >
                      <Col style={{marginTop:'-200px'}} xs='8' >

                        <img src={Pozo} style={{width:'120%'}} />
                      </Col>

                      <Col style={{color:'gray'}}>
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
          <Row>
                      
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
