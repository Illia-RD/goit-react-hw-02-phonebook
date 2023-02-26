import { List, Item, Btn } from 'components/ContactList/ContactList.styled'


const ContactList = ({ filter, contacts, filterByName, onClickBtn }) => {
   return (
            <List>
                {(filter === ''
                    ?
                    contacts
                    :
                    filterByName()
           ).map(contact => { return <Item key={contact.id}>{contact.name}: {contact.number} <Btn id={contact.id} onClick={(e) =>  onClickBtn(e) }> Delete</Btn></Item> })   
                }  
            </List>
        )
}

export default ContactList