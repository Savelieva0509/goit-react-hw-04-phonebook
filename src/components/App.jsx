import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import shortid from 'shortid';

const  initialContacts =  [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
     window.localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])
  
  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts(prevState => ({
      contacts: [contact,...prevState.contacts],
    }));
  };
  
  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

    const changeFilter = event => {
      setFilter({ filter: event.currentTarget.value });
    };

    const getVisibleContact = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

  const visibleContacts = getVisibleContact();
  
  return (
      <div>
        <ContactForm
          onSubmit={addContact}
          contacts={contacts}
        />
        <Filter onChange={changeFilter} value={filter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }


  

 

//   useEffect (() => {
//     window.localStorage.setItem('contacts', JSON.stringify(contacts))
// })


  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   } else {
  //     this.setState(this.props.initialContacts);
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  // changeFilter = event => {
  //   this.setState({ filter: event.currentTarget.value });
  // };

  // getVisibleContact = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };


    // return (
    //   <div>
    //     <ContactForm
    //       onSubmit={this.addContact}
    //       contacts={this.state.contacts}
    //     />
    //     <Filter onChange={this.changeFilter} value={this.state.filter} />
    //     <ContactList
    //       contacts={visibleContacts}
    //       onDeleteContact={this.deleteContact}
    //     />
    //   </div>
    // );
    

