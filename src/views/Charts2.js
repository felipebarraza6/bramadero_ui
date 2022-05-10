
import React, { useEffect, useState} from "react";
import { Card, CardHeader, CardTitle, Row, Col, CardBody } from "reactstrap";
import api_novus from '../api_novus/endpoints'
import icono1 from '../assets/img/icono-20.png'
import icono2 from '../assets/img/icono-21.png'
import icono3 from '../assets/img/Icono-30.png'


const Charts2 = () => {

    const [labels, setLabels] = useState([])
    const [data, setData] = useState([])
    const [values, setValues]= useState([])
    const [viewstr, setViewStr]=useState('')
    const [valueMax, setValueMax]=useState(null)
    
    const data_p =  JSON.parse(localStorage.getItem('data_p'))


    const getData = async()=> {
      var data_v = []
      var start_datenowi = new Date()
        try {            
          let list_d = []
          let rest = []
          let arrVal = []
          let max = 0.0
          let maxObj = {}
            for(var i=0; i < 7; i++){              
              var start_datenow = new Date()                       
              var demo_date = new Date ()
              start_datenow.setDate(start_datenow.getDate()-i)
              const rq1 = await api_novus.data('3grecdi1va', 
                `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()}`,
                `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()}`
              )            
              var results = rq1.result
             
              // eslint-disable-next-line no-loop-func              
              if(results.length > 0){
                // eslint-disable-next-line no-loop-func
                list_d.push({
                  date: results[0].time.slice(0, 10),
                  value: parseFloat(results[0].value)
                })               
              }                                            
            }  

            for(var i =0; i < list_d.length; i++){
              if(list_d[i+1]){
                rest = parseFloat(list_d[i].value-list_d[i+1].value)
                list_d[i].value = rest
              }
            }

          //console.log(rest) 
          for(var i =0; i < list_d.length-1; i++){
            arrVal.push(list_d[i])
          }
          for(var i =0; i < arrVal.length; i++){            
            if(arrVal[i].value > max){
              max = arrVal[i].value
              maxObj = arrVal[i]
            }
          }
          
          Math.max.apply(Math, arrVal.map(function(o) { 
            maxObj = o
            return o.value 
          
          }))

          setValueMax(maxObj)
          //setData1(rest)                            
        } catch(err) {
            console.log({err})
        }        
    }

    useEffect(() => {
        getData() 
        
    }, [])
        
    
  return (
    <>
      <div className="content" style={{marginTop:'0px'}}>
        <div style={{marginBottom:'0px'}}>        
        </div>
        <Row className="mt-5">
        <h2 style={{color: 'gray', marginLeft:'31%'}} >ANÁLISIS DE DATOS</h2>      
        </Row>
        <Row className="mt-5" >
          <Col className="ml-center" md="5">
            <Card className="card-chart" style={{background:'linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(228,237,247,1) 61%, rgba(216,229,244,1) 69%, rgba(210,225,242,1) 79%, rgba(197,216,238,1) 87%, rgba(150,183,224,1) 100%, rgba(0,80,179,1) 100%)'}}>
              <CardHeader style={{border:'1px #3967AA solid', borderRadius:'7px'}}>                                
                <CardBody style={{margin:'10px'}}>                               
                <Row>
                  <Col><img alt='icono' src={icono1} style={{width:'40%'}} /></Col>
                  <Col>
                    <h4>Peak de consumo semanal</h4>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  {valueMax ? 
                    <Col>
                    <div>
                      <h4>3338(m3) - 9 de Mayo</h4>
                    </div>
                    </Col>
                    : <Col><h4>CARGANDO DATOS...</h4></Col>}
              </Row>
                </CardBody>
              <Row>
                <Col style={{float:'right'}}>
                  <div style={{float:'right',backgroundColor:'#3967AA', width:'10px', height:'10px', borderRadius:'50%', margin:'5px'}}></div>
                </Col>
              </Row>
              
              
              </CardHeader>

            </Card>
          </Col>          
          
          <Col className="ml-center" md="5">
            <Card className="card-chart" style={{background:'linear-gradient(180deg, rgba(255,255,255,1) 30%, rgba(228,237,247,1) 61%, rgba(216,229,244,1) 69%, rgba(210,225,242,1) 79%, rgba(197,216,238,1) 87%, rgba(150,183,224,1) 100%, rgba(0,80,179,1) 100%)'}}>
              <CardHeader style={{border:'1px #3967AA solid', borderRadius:'7px'}}>                                
                <CardBody style={{margin:'10px'}}>                               
                <Row>
                  <Col><img alt='icono' src={icono2} style={{width:'40%'}} /></Col>
                  <Col>
                    <h4>Bomba pozo profundo</h4>
                  </Col>
                </Row>
            
                <Row>
                  <Col></Col>
                  <Col>
                  <h4>Mantenimiento: x días</h4>
                  </Col>
                </Row>
                </CardBody>
                <Row>
                <Col style={{float:'right'}}>
                  <div style={{float:'right',backgroundColor:'#3967AA', width:'10px', height:'10px', borderRadius:'50%', margin:'5px'}}></div>
                </Col>
              </Row>

              </CardHeader>
            </Card>
          </Col>
          <Col className="ml-center" md="5">
            <Card className="card-chart" style={{background:'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 78%, rgba(184,184,184,1) 100%)'}}>
              <CardHeader style={{border:'1px solid', borderRadius:'7px'}}>                                
                <CardBody style={{margin:'10px'}}>                               
                <Row>
                  <Col><img alt='icono' src={icono3} style={{width:'40%'}} /></Col>
                  <Col>
                    <h4 style={{color:'grey'}}>Recuperación de pozo</h4>
                  </Col>
                </Row><Row>
                  <Col></Col>
                  <Col>
                  <h4 style={{color:'grey'}}>0000 seg</h4>
                  </Col>
                  </Row>
                </CardBody>
                <Row>
                <Col style={{float:'right'}}>
                  <div style={{float:'right',backgroundColor:'grey', width:'10px', height:'10px', borderRadius:'50%', margin:'5px'}}></div>
                </Col>
              </Row>
              </CardHeader>
            </Card>
          </Col>
             
                                       
        </Row>        
      </div>
    </>
  );
};

const styles = {
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

export default Charts2;
