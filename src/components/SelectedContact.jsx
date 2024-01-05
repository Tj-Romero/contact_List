import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        // Only fetch data if a contact ID is selected
        if (selectedContactId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
                .then(response => response.json())
                .then(data => {
                    setContact(data);
                })
                .catch(error => {
                    console.error('Error fetching contact:', error);
                });
        }
    }, [selectedContactId]);

    return (
        <div>
            {contact ? (
                <div>
                    <h2>{contact.name}</h2>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    {/* Add more details as needed */}
                </div>
            ) : (
                <p>Loading contact details...</p>
            )}
            <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
        </div>
    );
}
