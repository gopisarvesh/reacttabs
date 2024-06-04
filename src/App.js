//import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function App() {
  const [key, setKey] = useState(0);
  const handleIncrement = () => {
    setKey(parseInt(key) + 1);
  };
  const handleDecrement = () => {
    setKey(parseInt(key) - 1);
  };
  return (
    <div className="App">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(key) => setKey(key)}
        className="mb-3"
      >
        <Tab eventKey="0" title="Tab1">
          <div>
            Tab content for Tab1
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
            <br />
            <input type="text" className="form-control" placeholder="Age" />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Mobile No."
            />
            <br />
            <button className="btn btn-primary" onClick={handleIncrement}>
              Next
            </button>
          </div>
        </Tab>
        <Tab eventKey="1" title="Tab2">
          Tab content for Tab2
          <input type="text" className="form-control" placeholder="Username" />
          <br />
          <input type="text" className="form-control" placeholder="Age" />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Mobile No."
          />
          <br />
          <button className="btn btn-secondary" onClick={handleDecrement}>
            Previous
          </button>
          &nbsp;
          <button className="btn btn-primary" onClick={handleIncrement}>
            Next
          </button>
        </Tab>
        <Tab eventKey="2" title="Tab3">
          Tab content for Tab3
          <input type="text" className="form-control" placeholder="Username" />
          <br />
          <input type="text" className="form-control" placeholder="Age" />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Mobile No."
          />
          <br />
          <button className="btn btn-secondary" onClick={handleDecrement}>
            Previous
          </button>
          &nbsp;
          <button className="btn btn-primary">Next</button>
        </Tab>
      </Tabs>
    </div>
  );
}
