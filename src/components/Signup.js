import { useState, useRef } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'

//import components
import FormGroup from './common/FormGroup'
import ButtonSpinner from './common/ButtonSpinner'

//import helpers
import { register, login } from '../services/auth.service'
import { resMessage } from '../utilities/function.utility'


const Signup = (props) => {

    return(
        <div>Signup form goes here</div>
    )
}

export default Signup