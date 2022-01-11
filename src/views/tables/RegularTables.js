import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap"
import SortingTable from "../../components/SortingTable/SortingTable.js"


const RegularTables = () => {
  return (
    <>
      <div className="content">
      <h2 className="text-center" style={{color: 'white'}} >Reportes</h2>  
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
                    { text: "Email" },
                    { text: "Telefono" },
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: "" },
                        { text: "" },
                        { text: "" },
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
