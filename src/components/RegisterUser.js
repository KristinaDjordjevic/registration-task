import React, { useEffect, useReducer, useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";

const initialState = {
    email: {value: '', isEmpty: false},
    firstName: {value: '', isEmpty: false},
    lastName: {value: '', isEmpty: false},
    newsletter: {value: false, isEmpty: false},
    password: {value: '', isEmpty: false},
    privacyPolicy: {value: false, isEmpty: false},
    terms: {value: false, isEmpty: false},
    salutation: {value: '', isEmpty: false}
};

function reducer(state, action) {
    switch (action.type) {       
        case action.type:
            {
                return {
                    ...state,
                    [action.type]: {value: action.initialState},
                };
            }
        default:
            throw new Error();
    }
}

function RegisterUser() {
    const [user, dispatch] = useReducer(reducer, initialState);
    const [labels, setLabels] = useState()

    useEffect(()=>{
        getRegistrationLabels();
    },[]);

    // get registration labels
    const getRegistrationLabels = async() => {
        // const url = 'http://localhost:3000/registrationLabels';
        // const res = await fetch(url);
        // const data = await res.json();

        try {
            const res = await fetch(`http://localhost:3000/registrationLabels`);
            const data = await res.json();
            
            setLabels(data.registrationLabels);
        } catch (err) {
            console.error('err', err);
        }

    }

    // register user
    const registerUser = () => {
        
    }


    return (
        <div className="App">                
            <Input label='Email' value={user.email.value} onChange={(value)=>{dispatch({type: 'email', initialState: value})}}/>
            <Input label='First name' value={user.firstName.value} onChange={(value)=>{dispatch({type: 'firstName', initialState: value})}}/>
            <Input label='Last name' value={user.lastName.value} onChange={(value)=>{dispatch({type: 'lastName', initialState: value})}}/>
            <Input label='Password' password={true} value={user.password.value} onChange={(value)=>{dispatch({type: 'password', initialState: value})}}/>

            {/* checkbox inputs */}
            <Checkbox label='newsletter' value={user.newsletter.value} onChange={(value)=>{dispatch({type: 'newsletter', initialState: value})}}/>
            <Checkbox label='privacy policy' value={user.privacyPolicy.value} onChange={(value)=>{dispatch({type: 'privacyPolicy', initialState: value})}}/>
            <Checkbox label='terms' value={user.terms.value} onChange={(value)=>{dispatch({type: 'terms', initialState: value})}}/>

            <input type='submit' value='Submit' onClick={()=>{registerUser()}}/>
        </div>
    );
}

export default RegisterUser;
