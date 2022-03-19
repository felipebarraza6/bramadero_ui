import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap"
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
              <CardHeader>
                <CardTitle tag="h4">LISTADO DE PERSONAS</CardTitle>
              </CardHeader>
              <CardBody>
                <SortingTable
                  thead={[
                    { text: "Nombre" },
                    { text: "Cargo" },
                    { text: "Telefono" },
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: "Carlos Díaz" },
                        { text: "Presidente" },
                        { text: "+56 9 9421 9533" },
                      ],
                     },
                                                          
                  ]}
                />
              </CardBody>
            </Card>
          </Col>          
        </Row>
      </div>
    </>
  );
};

export default RegularTables;
