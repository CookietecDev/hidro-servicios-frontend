import React from "react";
import { Container, Text } from "./style";

const SectionContact = () => {
  return (
    <Container>
      <div>
        <Text>Telefono: 01-4452316 </Text>
        <Text>Moviles: 963226764 / 946419381</Text>
        <Text>Correo: hidroservicios01@gmail.com</Text>
        <Text>Dirección: Jr. Leoncio Prado 677 - Surquillo - Lima</Text>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.925686135524!2d-77.02420578466739!3d-12.117237146515876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8102020c9df%3A0xd25983cfe337dc0a!2sJir%C3%B3n%20Leoncio%20Prado%20677%2C%20Lima%2015047!5e0!3m2!1ses!2spe!4v1645746126490!5m2!1ses!2spe"
          width="600"
          height="450"
          style={{ border: "0", maxWidth: "100%" }}
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
};

export default SectionContact;
