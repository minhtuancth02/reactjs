import React , {useState, useEffect} from 'react'
import ContactForm from './ContactForm'
import fireDb from '../firebase';
import { List } from './List';


// Form Input & List Contacts
const Contacts = () => {

    // Data get from Firebase
    const [ contactObject , setContactObject ] = useState({});
    const [ currentId, setCurrentId ] = useState('');
    
    // Subscribe firebase 'contacts info' -> .on('value', callBack()) ,access all data of "contacts info" -> snapshot.val()
    useEffect(() => {
        fireDb.child('contacts info').on('value', (snapshot) => {
            if (snapshot.val() !== null) {
                setContactObject({ ...snapshot.val() })
            }
            else setContactObject({})
        })
    }, []);

    // Storage Data, save(store) data / values from input-Form to Firebase "contacts info"
    const addOrEdit = (data) => {
        const dataB = JSON.parse(JSON.stringify(data));
        if (currentId === '') {
            fireDb
                .child('contacts info')
                .push(dataB, err => { if (err) console.log(err) });
        }
        else {
            fireDb
                .child(`contacts info/${currentId}`)
                .set(dataB, err => { if (err) console.log(err) });
            setCurrentId('');
        }
    };
    
    const onDelete = (id) => {
        if (window.confirm('Delete Contact ?')) {
            fireDb.child(`contacts info/${id}`).remove(err => { if (err) console.log(err) })
        }
    };


    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3 className="display-5 text-center">Contacts Register</h3>
                </div>
            </div>
            <div className='col'>
                <div className='col-md-12'>
                    <ContactForm {...{addOrEdit, currentId, contactObject}} />
                </div>
                <div className='col col-md-12 '>
                    <List
                        contactObject={contactObject}
                        setCurrentId={setCurrentId}
                        onDelete={onDelete}
                    />
                </div>
            </div>
        </div>
    )
}

export default Contacts
