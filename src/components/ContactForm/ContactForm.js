import React, { Component } from "react";
import FormField from 'components/ContactForm/FormField/FormField'
import inputSetings from '../utils/inputSetings'
import {Form, Btn} from 'components/ContactForm/ContactForm.styled'

class ContactForm extends Component {

    state = {
    name: '',
    number: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        e.currentTarget.reset()  
    }

    onChangeHandler = (e) => { 
        const { name } = e.target
        this.setState({[name]: e.target.value}
       )
    }

    render() {

        return (
            <>  
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <FormField label={'Name'} settings={inputSetings.name} onChange={(e) => this.onChangeHandler(e)} />
                    <FormField label={'Tel'} settings={inputSetings.number} onChange={(e) => this.onChangeHandler(e)}/>
                    <Btn type='submit' >Add contact</Btn>
                </Form>
            </>
        )
    }
}

export default ContactForm

