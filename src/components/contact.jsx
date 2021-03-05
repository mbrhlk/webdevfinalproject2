import React, { useState } from 'react'
import '../styles/contact.scss'

const NameInput = ({ setValue }) => {
  const onChange = e => setValue("name", e.target.value)

  return <input type="text" placeholder="Your Name" onChange={onChange} />
}

const EmailInput = ({ setValue }) => {
  const onChange = e => setValue("email", e.target.value)

  return <input type="text" placeholder="Your Email" onChange={onChange} />
}

const MessageTextarea = ({ setValue }) => {
  const onChange = e => setValue("message", e.target.value)

  return <textarea placeholder="Message" onChange={onChange} />
}

const Contact = () => {
  const [form, setForm] = useState({
    pristine: true,
    errors: [],
    name: "",
    email: "",
    message: "",
    isValid: false
  })

  const setValue = (field, value) => setForm({ ...form, [field]: value })

  const sendEmail = async () => {
    await fetch('https://mailthis.to/mbrhlk', {
      method: 'POST',
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
    })
    window.location.href = 'https://mailthis.to/confirm'
  }

  return (
    <div className="wrapper">
      <h2>Contact</h2>
      <form>
        <NameInput setValue={setValue} />
        <EmailInput setValue={setValue} />
        <MessageTextarea setValue={setValue} />
        <button type='button' onClick={sendEmail}>Send</button>
      </form>
    </div>
  )
}

export default Contact