import React from 'react';
import Part from '../components/Part';
import { connectStore } from 'lib/StateManager';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Home = (props: { store: any }) => {
	const { store } = props;

	const parts = store.get('parts');
	return parts && parts.length > 0 ? (
		<>
			<div className="container mt-5">
				<div className="row justify-content-center">
					{parts.map((item: any, index: any) => (
						<div className="col-md-4 part-wrapper">
							<Part key={index} name={item.name} id={item.id} status={item.status} />
						</div>
					))}
					<div className="col-md-4 btn-more-wrapper">
						<Card>
							<Card.Body className="d-flex align-items-center justify-content-center">
								<Link to="/create" className="btn btn-dark">
									Create More!
								</Link>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</>
	) : (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center">
					<Card>
						<Card.Body>
							<h2>Parts are not created yet!</h2>
							<Link to="/create">Please Click here to create</Link>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default connectStore(Home);
