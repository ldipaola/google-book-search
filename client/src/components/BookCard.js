import React from 'react';


export default function BookCard(props) {

    return (
      <div className="card search results">
        <div className="card-image">
          <img
            src={props.image}
            className="img-responsive" alt="book cover"
          />
        </div>
        <div className="card-header">
          <div className="card-title h5">{props.title}</div>
          <div className="card-subtitle text-gray">
            {props.author}
          </div>
        </div>
        <div className="card-body">{props.description}</div>
        <div className="card-footer">
          <a
            className="btn btn-primary"
            href={props.link} target="_blank" rel="noopener noreferrer"
          >
            View
          </a>
          <button className="btn btn-primary" data-value={props.id}  onClick={props.onClick}>Delete</button>
        </div>
      </div>  
    )
}
