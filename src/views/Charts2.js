
import React, { useEffect, useState} from "react";
import { Card, CardHeader, CardTitle, Row, Col, CardBody } from "reactstrap";
import api_novus from '../api_novus/endpoints'


const Charts2 = () => {

  const [labels, setLabels] = useState([])
    const [data, setData] = useState([])
    const [values, setValues]= useState([])
    const [viewstr, setViewStr]=useState('')
    const [valueMax, setValueMax]=useState(null)
    


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
    if(values.length > 6){    
      console.log(values)
      console.log(Math.max(...values)  )
      
    }
    
    
  return (
    <>
      <div className="content" style={{marginTop:'100px'}}>
        <h2 className="text-center" style={{color: 'gray'}} >Analisis de datos</h2>      
        <div style={{marginBottom:'0px'}}>        
        </div>
        <Row className="mt-5" >
          <Col className="ml-auto" md="6">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#1d8cf8', color:'white'}}>                                
                <CardBody>
                <h1 style={{color:'white'}}>Dia maximo de consumo del mes</h1>
                <div style={{margin:'77px'}}>
                  {valueMax ? <>
                    <center><h2 style={{ color:'white'}}>{valueMax.value}(m3)</h2></center>
                    <center><h2 style={{margin:'0', color:'white'}}>{valueMax.date}</h2></center>
                  </>: <center><h2 style={{ color:'white'}}>CARGANDO DATOS...</h2></center>}
                  
                  </div>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
          

          <Col className="ml-auto" md="6">
            <Card className="card-chart">
              <CardHeader style={{backgroundColor:'#1d8cf8', color:'white'}}>                                                                
                <CardBody>
                  <h1 style={{color:'white'}}>Tiempo de recuperacion del pozo</h1>
                  <center><h2 style={{margin:'100px', color:'white'}}>00:00:00 / tiempo</h2></center>
                </CardBody>
              </CardHeader>
            </Card>
          </Col>
        </Row>        
      </div>
    </>
  );
};

export default Charts2;
