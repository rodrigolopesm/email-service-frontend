import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";

function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  return (
    <div className="container">
      <div className="teste">
        <form action="">
          <div className="names-form-container">
            <PrimaryInput
              value={email}
              onChange={(event) => setFirstName(event.target.value)}
              name="firstName"
              label="Primeiro"
              placeholder="Rodrigo"
            />

            <PrimaryInput
              value={email}
              onChange={(event) => setSecondName(event.target.value)}
              name="secondName"
              label="Segundo"
              placeholder="Lopes"
            />
          </div>
          <PrimaryInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name={email}
          label="Digite seu E-mail"
          placeholder="email@gmail.com "
        />
        <Button colorScheme='green' width="100%" marginTop="4">Enviar</Button>
        </form>
      </div>
      <Spacer width="8" maxWidth="8" />
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <p>voce irá pagar</p>
        <span>R$ 250,00</span>
      </div>
    </div>
  );
}

export default App;
