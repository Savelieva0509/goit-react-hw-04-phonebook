// import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('')
  
    const handleChange = event => {
      setEmail(event.target.name)
      
      switch (event.target.name) {
        case 'email':
          setEmail(event.target.value);
          break;
        
        case 'number':
          setNumber(event.target.value);
          break;
        
        default:
          return;
      }
  }

  return (
    <form onSubmit={this.handleSubmit} className={css.form}>
      <label for="name" className={css.form__label}>
        Name
      </label>{' '}
      <input
        className={css.form__input}
        type="text"
        onChange={handleChange}
        value={email}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label for="number" className={css.form__label}>
        Number{' '}
      </label>
      <input
        className={css.form__input}
        type="tel"
        onChange={handleChange}
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { value } = event.currentTarget.name;
//     const { contacts, onSubmit } = this.props;

//     if (
//       contacts.find(elem => elem.name.toLowerCase() === value.toLowerCase())
//     ) {
//       return alert(`${value} is already in contacts`);
//     }
//     this.reset();
//     onSubmit(this.state);
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={css.form}>
//         <label for="name" className={css.form__label}>
//           Name
//         </label>
//         <input
//           className={css.form__input}
//           type="text"
//           onChange={this.handleChange}
//           value={this.state.name}
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label for="number" className={css.form__label}>
//           Number{' '}
//         </label>
//         <input
//           className={css.form__input}
//           type="tel"
//           onChange={this.handleChange}
//           value={this.state.number}
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <button type="submit" className={css.form__button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
