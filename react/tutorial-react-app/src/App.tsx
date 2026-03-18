import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// import ListGroup from "./components/ListGroup";

/*
function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
*/
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Alert color="success" onClose={() => setAlertVisibility(false)} show={alertVisible}>
        Hello World
      </Alert>
      <Button color="primary" onClick={() => setAlertVisibility(true)} link="#">
        Ayyo
      </Button>
    </>
  );
}

export default App;
