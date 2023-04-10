import { List, Item, Btn } from 'components/ContactList/ContactList.styled';

const ContactList = ({ filterByName, onClickBtn }) => {
  return (
    <List>
      {filterByName().map(contact => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <Btn id={contact.id} onClick={e => onClickBtn(e)}>
              {' '}
              Delete
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
