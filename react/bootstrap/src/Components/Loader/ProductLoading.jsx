import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

export default function ProductLoading() {
  return (
    <div class="col-md-6 col-lg-4 col-xl-4">
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    </div>
  )
}
