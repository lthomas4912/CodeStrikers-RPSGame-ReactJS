import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Layout extends Component{
        render() {
            const Layout = (props) => {
                    return(
                            <Container>
                            {props.children}
                            </Container>
                     );
                };
        }
}
