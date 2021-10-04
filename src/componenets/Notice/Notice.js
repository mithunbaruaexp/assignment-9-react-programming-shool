import React from 'react';
import {  Container, } from 'react-bootstrap';
import Noticecart from '../Noticecart/Noticecart';

//notice page

const Notice = (props) => {
    
    const data = props.data 

    return (
        <Container>
            <strong>
                        Recent Notice : There course will be available from 1s january 22
                    </strong>
                    {
                    data.map(data=><Noticecart
                    data={data}
                    ></Noticecart>)
                    }
           
        </Container>
    );
};

export default Notice;