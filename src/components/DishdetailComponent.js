import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.name, values.comment)
    }

    render() {

        return (
            <>
            <Button color="outline-secondary" value="submitComment" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}> Submit Comment </ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={10}>Rating</Label>
                        <Col md={12}>
                            <Control.select model=".rating" id="rating" name="rating"
                                className="form-control" >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                            </Control.select>                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="name" md={10}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".name" id="name" name="name"
                                placeholder="Your Name" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} 
                            />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less'
                                }}
                            />                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment" md={10}>Comment</Label>
                        <Col md={12}>
                            <Control.textarea rows="6" model=".comment" id="comment" name="comment" 
                                className="form-control"
                            />                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col>
                            <Button type="submit" color="primary">Submit</Button>
                        </Col>
                    </Row>
                </LocalForm>
                </ModalBody>
            </Modal>
            </>
        );
    }
}


function RenderComments({comments, postComment, dishId}) {
    if(comments == null) {
        return(
            <div></div>
        );
    }
    const cmnts = comments.map( comment => {
        return (
            <div className="container">
                <Fade in>
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                            &nbsp;
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))
                            }
                        </p>
                    </li>
                </Fade>
            </div>
        );
    })

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className='list-unstyled'>
                <Stagger in>
                    {cmnts}
                </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );
}

function RenderDish({dish}) {
    if(dish == null) {
        return (
            <div></div>
        );
    }

    return (
        <div className='col-12 col-md-5 m-1'>
            <FadeTransform in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            </FadeTransform>
        </div>
    );
}

const DishDetail = (props) => {

    if(props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if(props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} 
                    postComment={props.postComment}
                    dishId={props.dish.id}
                />
                </div>
            </div>
        );
        else
            return(<div></div>);

}


export default DishDetail;