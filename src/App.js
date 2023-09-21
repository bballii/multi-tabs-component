import "./styles.css";
import Tabs from "./Tabs";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App p-2">
      <Container>
        <Card>
          <CardHeader>Reactstrap Multiple tabs using one component.</CardHeader>
          <CardBody>
            <Tabs
              tabs={[
                {
                  tab_name: "Subscribers", //title of the tab
                  component: <h1>Subscribers Component</h1> //Add your component here
                },
                {
                  tab_name: "Plans", //title of the tab
                  component: <h1>Plans Component</h1> //Add your component here
                }
              ]}
            />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
