import React from "react"
import { Card, Button, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap"
import SortingTable from "../../components/SortingTable/SortingTable.js"


const RegularTables = () => {
  return (
    <>
           
      <div className="content" style={{marginBottom:'30px'}}>
      <h2 className="text-center" 
        style={{
          color: 'gray', 
          marginBottom:'80px', 
          paddingTop:'40'}}> Reportes</h2>  
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <Table responsive>
    <thead>
        <tr>
            <th className="text-center">#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th className="text-center">Telefono</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Constanza Hidd Cutiño</td>
            <td>constanza.hidd@iansa.cl	</td>
            <td className="text-center">+56 9 9886 2975</td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Hugo Torres Chavez</td>
            <td>htorrres@iansa.cl</td>
            <td className="text-center"></td>
            
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Luis Nuñez Bustamante</td>
            <td>lnunez@iansa.cl</td>
            <td className="text-center"></td>
        </tr>
        <tr>
            <td className="text-center">4</td>
            <td>Ricardo Barahona Angel</td>
            <td>ricardo.barahona@iansa.cl</td>
            <td className="text-center"></td>
        </tr>
        <tr>
            <td className="text-center">5</td>
            <td>Hugo Pereira Cespedes</td>
            <td>hpereir@iansa.cl</td>
            <td className="text-center"></td>
        </tr>
        <tr>
            <td className="text-center">6</td>
            <td>Leonardo Marquez Espinoza</td>
            <td>lrrmarque@iansa.cl</td>
            <td className="text-center"></td>
        </tr>


    </tbody>
</Table>
          </Card>
          </Col>          
        </Row>
      </div>
    </>
  );
};

export default RegularTables;
