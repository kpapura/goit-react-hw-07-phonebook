import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Notification } from 'components/Notification/Notification';
import { Loader } from 'components/Loader/Loader';

import { deleteContacts, fetchContacts } from '../../redux/contacts/contactsOperations';
import { selectError, selectFilteredContacts, selectIsLoading } from '../../redux/contacts/contactsSelectors';

import { Button, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Notification message={error} />}
      {filteredContacts?.length === 0 ? (
        <Notification message="No contacts have been found" />
      ) : (
        <List>
          {filteredContacts?.map(contact => (
            <ListItem key={contact.id}>
              {contact.name}: {contact.phone}
              <Button onClick={e => dispatch(deleteContacts(contact.id))}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
