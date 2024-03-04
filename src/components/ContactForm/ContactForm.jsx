import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContacts } from '../../redux/contacts/contactsOperations';
import { selectContacts } from '../../redux/contacts/contactsSelectors';

import { Button, Form, Input, Label } from './ContactForm.styled';

const initialValue = {
  name: '',
  phone: '',
};

function ContactForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValue);
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prevForm => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === form.name)) {
      alert(`${form.name} has been already added`);
      setForm(initialValue);
      return;
    }
    dispatch(addContacts(form));
    setForm(initialValue);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={form.name}
          required
        />
      </Label>

      <Label>
        Number:
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={form.phone}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

export default ContactForm;
