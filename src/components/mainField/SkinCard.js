import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { secondaryColor } from '../styles/styles';

export default function SkinCard({src, price}) {
  return (

    <Card style={{ padding: "9px", display: "grid", height: "200px", alignItems: "end", background: "#652373"}}>
      <Card.Img 
      style={{background: "inherit", marginBottom: "0px", justifySelf: "center"}}
      variant="top"
      width={"100%"}
      src={src}
      alt={src}
      />
      <Card.Body style={{background: "inherit"}}>
        <Card.Text style={{color: secondaryColor, background: "inherit", marginBottom: "6px"}}>
            {price} $
        </Card.Text>
        <Button variant="primary" style={{background: "#2a0033", width: "100%"}}>Basket</Button>
      </Card.Body>
    </Card>
  );
}