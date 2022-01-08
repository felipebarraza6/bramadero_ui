
import React, { useEffect, useState} from "react";
import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap";
import api_novus from '../api_novus/endpoints'


const Charts2 = () => {

  const [labels, setLabels] = useState([])
    const [data, setData] = useState([])
    const [values, setValues]= useState([])
    const [viewstr, setViewStr]=useState('')
    


    const getData = async()=> {
      var data_v = []
        try {            
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
                setLabels(label =>{                
                
                  return [...label, results[0].time.slice(0, 10)];                
              })                            
                // eslint-disable-next-line no-loop-func
                setData(data => {                                         
                    return [...data, results[0]]                
                })               
                setValues(data => {                                         
                  return [...data, results[0].value]                
              })               
              }                                            
            }                                     
        } catch(err) {
            console.log({err})
        }        
    }

    useEffect(() => {
        getData() 
         
        
    }, [])
    if(values.length > 6){    
      console.log(values)
      console.log(Math.max(...values)  )
      
    }
    
    
  return (
    <>
      <div className="content">
        <h2 className="text-center" style={{color: 'white'}} >Analisis de datos</h2>      
        <div style={{marginBottom:'0px'}}>        
        </div>
        <Row className="mt-5">
          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Dia maximo de consumo del mes</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                  {data.length > 1 && <>
                  {data[0].time.slice(0,10)} / {parseInt(data[0].value/1000).toFixed(2)}
                  </>
                }
                </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Cantidad de estanques llenados las ultimas 24 hrs</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-primary" />{" "}
                  {values.length > 1 ? '4':'5' }              </CardTitle>
              </CardHeader>
            </Card>
          </Col>

          <Col className="ml-auto" md="4">
            <Card className="card-chart">
              <CardHeader>                
                <h5 className="card-category">Recuperacion de pozo</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-chart-bar-32 text-info" /> 0 Seg (en desarrollo)
                </CardTitle>
              </CardHeader>              
            </Card>
          </Col>
        </Row>        
      </div>
    </>
  );
};

export default Charts2;
