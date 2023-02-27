import React, { Component } from "react";
import  shortid   from 'shortid'
import ContactForm from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import ContactList from "components/ContactList/ContactList";
import { PropTypes } from 'prop-types';
class Phonebook extends Component {

    state = {
    contacts: [],
    filter: ''
    }

  
   
    onSubmitHandler = (data) => {
      const alreadyInContacts =  this.state.contacts.map(contact => {
          if (contact.name.toLowerCase() === data.name.toLowerCase()) {
              alert(`${contact.name} is already in contacts.`)
              return "yes"
          }
          return 'no'
      })
        
        if (alreadyInContacts.includes("yes")) return
        else {
            this.setState(prevState => {
                const contact = { id: shortid.generate(), name: data.name, number: data.number }
                return { contacts: [...(prevState.contacts), contact] }
                
            })
        }
    }
    
    onClickContactRemove = (e) => {
        this.setState(prevState => {
            const newContacts = prevState.contacts.filter(contact => contact.id !== e.target.id)
            return {contacts: newContacts}
        })
    }

    filterChanger = (e) => { 
        this.setState({filter: e.target.value}
       )
    }


    filterByName = () => {
        return (
        this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
       )
    }


    render() {
        return (
            <>  
                <h1 >Phonebook</h1>
                <ContactForm onSubmit={this.onSubmitHandler } />
                <h2 >Contact</h2>
                <Filter value={this.state.filter} onChange={this.filterChanger} name={'filter'} />
                <ContactList  filterByName={this.filterByName} onClickBtn={this.onClickContactRemove} />



            </>
        )
    }
}

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onSubmitHendler: PropTypes.func,
  delete: PropTypes.func,
  filterName: PropTypes.func,
};

export default Phonebook