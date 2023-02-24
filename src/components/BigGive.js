import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../css/BigGive.css';
import Button from 'react-bootstrap/Button';


const BigGive = () => {
    return (
        <div className="big-give">
                <div className="center-horz">
                    <a href="https://give.berkeley.edu/giftdetails?fund1=FU1349000">
                        <Button className="button join-button" style={style.BigButton}>
                            <p className="button-text">DONATE</p>
                        </Button>
                    </a>
                </div>
                <br />
                <dahawkdwad></dahawkdwad>
                <div className="center-horz">
                    <a href="/landing">
                        <Button className="button join-button">
                            <p className="button-text">Homepage</p>
                        </Button>
                    </a>
                </div>
        </div>
        
    )
}

const style = {
    BigButton: {
        fontSize: "50px",
    }
}

export default BigGive;