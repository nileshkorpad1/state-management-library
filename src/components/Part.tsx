import React from 'react';
import { Card } from 'react-bootstrap';

const Part = ({ name, id, status }: { name: string; id: number; status: string }) => (
	<Card>
		<Card.Body>
			<div className="parts cards">
				<p>
					Name: <strong>{name}</strong>
				</p>
				<p>
					ID: <strong>{id}</strong>
				</p>
				<p>
					Status: <strong>{status}</strong>
				</p>
			</div>
		</Card.Body>
	</Card>
);

export default Part;
