import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/contactsSelectors';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        title="Enter contact to find"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
        required
      />
    </Label>
  );
};
