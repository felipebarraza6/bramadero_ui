import React, {useState, useEffect} from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import api_novus from '../api_novus/endpoints'

// core components
import {
  chartExample5,
  chartExample6,
  chart_1_2_3_options,
  chart_mode
} from "../variables/charts.js";

const Charts = () => {

  const [labels1, setLabels1] = useState([])
  const [data1, setData1] = useState([])
  const [objD1, setObjD1] = useState([])

  const [labels2, setLabels2] = useState([])
  const [data2, setData2] = useState([])

  const getDataFl = async()=> {
    
    var start_datenowi = new Date()
      try {            
          let list_d = []
          let rest = []
          let proto = []
          let labels= []
          for(var i=0; i < 8; i++){            
            var start_datenow = new Date()                       
            var demo_date = new Date ()
            start_datenow.setDate(start_datenow.getDate()-i)
            const rq1 = await api_novus.data('3grecdi1va', 
              `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()-1}`,
              `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()-1}`
            )            
            var results = rq1.result
           
            // eslint-disable-next-line no-loop-func            
            if(results.length > 0){
              // eslint-disable-next-line no-loop-func
              proto.push({
                  date:results[0].time.slice(0, 10),
                  value: parseFloat(results[0].value / 10).toFixed(2)
              })

              labels.push(results[0].time.slice(0, 10))

              // eslint-disable-next-line no-loop-func
              
              list_d.push(parseFloat(results[0].value / 100).toFixed(2))                         
             
            }               
          }  
          for(var i =0; i < list_d.length; i++){
              var proc = list_d[i]-list_d[i+1]
              if(!isNaN(proc)){
                rest.push(proc.toFixed(2)) 
              }              
          }  
          setData1(rest)
          labels.pop()
          setLabels1(labels)
          
      } catch(err) {
          console.log({err})
      }        
  }

  const getDataPw = async()=> {
    var data_v = []
    var start_datenowi = new Date()
      try {            
          for(var i=0; i < 7; i++){            
            var start_datenow = new Date()                       
            var demo_date = new Date ()
            start_datenow.setDate(start_datenow.getDate()-i)
            const rq1 = await api_novus.data('3grecuc2v', 
              `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()}`,
              `${start_datenow.getFullYear()}-${start_datenow.getMonth()+1}-${start_datenow.getDate()}`
            )            
            var results = rq1.result
           
            // eslint-disable-next-line no-loop-func            
            if(results.length > 0){
              // eslint-disable-next-line no-loop-func
              setLabels2(label =>{                
              
                return [...label, results[0].time.slice(0, 10)];                
            })                            
              // eslint-disable-next-line no-loop-func
              setData2(data => {                                         
                  return [...data2, parseFloat(results[0].value)]                
              })               
            }                                            
          }                      
      } catch(err) {
          console.log({err})
      }        
  }

  useEffect(() => {
    getDataFl()         
    getDataPw()
}, [])

  return (
    <>
      <div className="content">
        <h2 className="text-center" style={{color: "gray"}} >Flujo & Nivel freático</h2>      
       
          
     
      <Row style={{marginTop:'100px'}}>
      <Col className="text-left" sm="6">
      <Card className="card-chart">  
      <CardHeader>       
            <CardTitle tag="h2">Acumulado (Lt/S)</CardTitle>
      </CardHeader>          
      <CardBody>
        <div className="chart-area">                             
          <Line
            data={{      
              labels: labels1,
              datasets: [
                {
                  label: "M3",
                  fill: false,          
                  borderColor: "#1f8ef1",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#1f8ef1",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#1f8ef1",
                  pointBorderWidth: 0,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 6,
                  data: data1,
                },
              ],
            }}
            options={chart_mode}
          />
        </div>
      </CardBody>
      </Card> 
        </Col> 
        <Col className="text-left" sm="6" style={{padding:'10px'}}>
        <table style={styles.table}>          
          <tr>
          {labels1.map((x)=>
              <td style={styles.table.tdth} >
              {x.slice(5)}
              </td>
              
            )}</tr>
            <tr>
            {data1.map((x)=>
              <td style={styles.table.tdth}>
              {x}
              </td>
            )}</tr>
        </table>
        </Col>
      </Row>
      <Row>
      <Col className="text-left" sm="6">
      <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="12">            
            <CardTitle tag="h2">Nivel freático (McH2O)</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <div className="chart-area">                             
          <Line
            data={{
              labels: ["2022-03-18", "2022-03-17", "2022-03-16", "2022-03-15", "2022-03-14", "2022-03-13"],
              datasets: [
                {
                  label: "MIN",
                  data: [25.6, 25.5, 25.6, 25.6, 25.6, 25.4],
                  fill: true,
                  backgroundColor: "white",
                  borderColor: "red"
                },
                {
                  label: "MAX",
                  data: [28.7, 28.8, 28.8, 28.8, 28.8, 28.8],
                  fill: false,
                  borderColor: "#1890ff"
                }
              ]
            }}
            options={chart_mode}
          />
        </div>
      </CardBody>
    </Card> 
      </Col> 
      <Col className="text-left" sm="6" style={{padding:'10px'}}>
        <table style={styles.table}>          
          <tr style={styles.table.tdth}>
            <th style={styles.table.tdth}> 03-18</th>
            <th style={styles.table.tdth}> 03-17</th>
            <th style={styles.table.tdth}> 03-16</th>
            <th style={styles.table.tdth}> 03-15</th>
            <th style={styles.table.tdth}> 03-14</th>
            <th style={styles.table.tdth}> 03-13</th>
          </tr>
          <tr>
            
            <td style={styles.table.tdthb}> 28.7</td>
            <td style={styles.table.tdthb}> 28.8</td>
            <td style={styles.table.tdthb}> 28.8</td>
            <td style={styles.table.tdthb}> 28.8</td>
            <td style={styles.table.tdthb}> 28.8</td>
            <td style={styles.table.tdthb}> 28.8</td>
          </tr>          
          <tr>
            <td style={styles.table.tdthr}>25.6</td>
            <td style={styles.table.tdthr}>25.6</td>
            <td style={styles.table.tdthr}>25.6</td>
            <td style={styles.table.tdthr}>25.6</td>
            <td style={styles.table.tdthr}> 25.6</td>
            <td style={styles.table.tdthr}>25.6</td>
          </tr>
          
        </table>
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
    },
    tdthr: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
      color: 'red'
    },
    tdthb: {
      border: '1px solid #dddddd',
      textAlign: 'left',
      padding: '8px',
      color: '#1890ff'
    }
        
   }
}

export default Charts;
