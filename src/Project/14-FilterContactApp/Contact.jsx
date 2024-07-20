import React from 'react'

export default function Contact({contact, width=300}) {
  return (
    <div 
    // key={contact.id} 
    className='card-body bs-light m-auto' 
    style={{width:width}}
    >
        <div className="card-header">{contact.first_name}</div>
        <div className="card-body text-left">
            <h4 className="card-text">
                {" "}
            <span className="fw-bold">Last Name : </span>
                {contact.last_name}</h4>
            <p className="card-text">
                <span className="fw-bold">Email : </span>
                {contact.email}
            </p>
            <p className="card-text">
                <span className="fw-bold">Phone : </span>
                {contact.phone_number}
            </p>
            <p className="card-text">
                <span className="fw-bold">User Name : </span>
                {contact.user_name}
            </p>
        </div>
    </div>
  )
}
