import React from 'react';
import {Card, CardImg,  CardText, CardBody, CardTitle} from 'reactstrap';


function RenderDish({dish}){
    if (dish != null){
        return (
            <Card className="col-12 col-md-5 m-1">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>  
            </Card>
        );
    }
    else{
        return (<div></div>);
    }
}

    function RenderComments({dish}){

        if (dish != null && dish.comments != null){
            const komment = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                )
            });
            return(
                <div className="ml-5">
                     <div>
                        <div><h1>Comments</h1>{komment}</div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    } 

    const DishDetail = (props) =>{
        return (
            <div className="container">
            <div className="row">
              <RenderDish dish={props.dish}/>
              <RenderComments dish={props.dish}/>
            </div>
            </div>
        );
    }

export default DishDetail;