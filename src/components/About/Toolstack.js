import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiSlack,
	SiClickup,

} from "react-icons/si";

import {
	FaStripe,
	FaAws,
	FaGithub,
	FaJira,
	FaBootstrap,

} from "react-icons/fa";




function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaStripe />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSlack />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiClickup />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaGithub />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaJira />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaBootstrap />
			</Col>
		</Row>
	);
}

export default Toolstack;
