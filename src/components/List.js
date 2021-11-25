import React from 'react'


const List = ({ contactObject, setCurrentId, onDelete }) => {

    function PhoneNumber(string) {
        const numAr = [];  
        for (let i = 0; i <= 7; i= i+3) {
            numAr.push(string.split('').slice(i, i + 3).join(''));
        }
        return `${numAr.join(' ')}${string.slice(-1)}`;
    };

    return (
        <>
            <table className='table table-borderless table-striped'>
                <thead style={{fontFamily: "Montserrat', sans-serif",fontStyle:'oblique', fontSize: '16px', color: '#79a7e8' }}>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(contactObject).map( id => {
                        return (
                            <tr key={id}>
                                <td>{contactObject[id].fullName}</td>
                                <td>{PhoneNumber(contactObject[id].mobile)}</td>
                                <td>{contactObject[id].email}</td>
                                <td>{contactObject[id].address}</td>
                                <td>
                                    <div className='btn text-primary' onClick={() => setCurrentId(id)}>
                                        <i className='fas fa-pencil-alt'></i>
                                    </div>
                                    <div className='btn text-danger' onClick={() => onDelete(id)}>
                                        <i className='fas fa-trash-alt'></i>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> 
        </>
    )
}

export {List} 
