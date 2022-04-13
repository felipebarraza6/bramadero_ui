
import React, { useEffect, useState} from "react";
import { Card, CardHeader, CardTitle, Row, Col, CardBody } from "reactstrap";
import api_novus from '../api_novus/endpoints'


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
            for(var i=0; i < start_datenowi.getDate(); i++){              
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
                  value: parseFloat(results[0].value / 10).toFixed(2)
                })               
              }                                            
            }  

            for(var i =0; i < list_d.length; i++){
              if(list_d[i+1]){
                rest = parseFloat(list_d[i].value-list_d[i+1].value).toFixed(2)
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
        <h2 className="text-center" style={{color: 'gray'}} >ANÁLISIS DE DATOS</h2>      
        <div style={{marginBottom:'0px'}}>        
        </div>
        <Row className="mt-5" >
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Promedio de consumo diario (semanal)</h3>
                  {valueMax ? <>
                    <center><h4 style={{ color:'white'}}>{valueMax.value}(m3)</h4></center>                    
                  </>: <center><h4 style={{ color:'white'}}>CARGANDO DATOS...</h4></center>}
                </CardBody>
              </CardHeader>
            </Card>
          </Col>          
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Bomba pozo profundo</h3>
                <h4 style={{color:'white'}}>Mantenimiento: X días / Cambio: X días</h4>                
                </CardBody>
              </CardHeader>
            </Card>
          </Col>    
          </Row>
          <Row className="mt-5" >
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Promedio cantidad de estanques llenados (semanal)</h3>
                <h4 style={{color:'white'}}>
                  {valueMax ? <center> 
                    {parseFloat(valueMax.value/data_p.d6).toFixed(1)} (Estanques)</center>: <center><h4 style={{color:'white'}}>CARGANDO DATOS...</h4></center>
                  }
                </h4>       
                </CardBody>
              </CardHeader>
            </Card>
          </Col>    
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Perdidas de facturación (mensual)</h3>
                <h4 style={{color:'white'}}>0000 m3</h4>                  
                </CardBody>
              </CardHeader>
            </Card>
          </Col>    
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Recuperación de pozo</h3>
                <h4 style={{color:'white'}}>0000 seg</h4>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>    
          <Col className="ml-center" md="5">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#0050b3', color:'white'}}>                                
                <CardBody style={{margin:'30px', color:'white'}}>                               
                <h3 style={{color:'white'}}>Factibididad de nuevos arranques</h3>
                <h4 style={{color:'white'}}>#### casas</h4> 
                </CardBody>
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
