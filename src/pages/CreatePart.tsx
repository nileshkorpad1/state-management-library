import React, { useState } from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import { connectStore } from 'lib/StateManager';
import { useInput } from '../hooks/inputHook';
import { Link } from 'react-router-dom';

const CreatePart = (props: any,state:any) => {
	console.log(props);
    const [validated, setValidated] = useState(false);
      const [showSuccess, setSuccessShow] = useState(false);
      const [showError, setErrorShow] = useState(false);

	const { value: name, bind: bindName, reset: resetName } = useInput('');
	const { value: id, bind: bindId, reset: resetId } = useInput('');
	const { value: status, bind: bindStatus, reset: resetStatus } = useInput('Checked In');

	const handleSubmit = (event: any) => {
		const form = event.currentTarget;
		event.preventDefault();
		event.stopPropagation();
		if (form.checkValidity() === false) {
			setErrorShow(true);
		} else {
            const parts = props.store.get('parts');

            console.log(name);
			props.store.set('parts', [...parts, { name, id, status }], () => {
				resetName();
				resetId();
                resetStatus();
                setValidated(false);
                setSuccessShow(true);
                setErrorShow(false);
			});
		}

		setValidated(true);
	};
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-8">
					<Alert
						show={showSuccess}
						variant="success"
						onClose={() => setSuccessShow(false)}
						dismissible
					>
						Form submitted Successfully
					</Alert>
					<Alert
						show={showError}
						variant="danger"
						onClose={() => setErrorShow(false)}
						dismissible
					>
						Error in form submission
					</Alert>
					<Form noValidate validated={validated} onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} md="12" controlId="validationCustom01">
								<Form.Label>Part name</Form.Label>
								<Form.Control
									required
									type="text"
									placeholder="Part name"
									{...bindName}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="12" controlId="validationCustom02">
								<Form.Label>Part Id</Form.Label>
								<Form.Control
									required
									type="number"
									placeholder="Part Id"
									{...bindId}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="12" controlId="exampleForm.SelectCustom">
								<Form.Label> select Status</Form.Label>
								<Form.Control as="select" {...bindStatus}>
									<option value="Checked In">Checked In</option>
									<option value="Checked Out">Checked Out</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Button type="submit">Submit form</Button>
						<Link to="/" className="btn btn-secondary mx-2">
							Cancel
						</Link>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default connectStore(CreatePart);
