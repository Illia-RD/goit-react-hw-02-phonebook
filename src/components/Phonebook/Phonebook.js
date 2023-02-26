import React, { Component } from "react";
import  shortid   from 'shortid'
import ContactForm from 'components/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import ContactList from "components/ContactList/ContactList";
class Phonebook extends Component {

    state = {
    contacts: [],
    filter: ''
    }

    // feedbackCounter = (e) => this.setState(prevState => {
    //     const { name } = e.target
    //     return { [name]: prevState[name] + 1 };
    // })
    idMaker = shortid.generate()
   
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
                <ContactList filter={this.state.filter} contacts={this.state.contacts} filterByName={this.filterByName} onClickBtn={this.onClickContactRemove} />



            </>
        )
    }
}

export default Phonebook