import React from 'react';
import styles from '../../styles/GetInTouch.module.css';
import { useForm, ValidationError } from '@formspree/react';

function GetInTouch() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);

  if (state.succeeded) {
    return <p>Thanks for your message! I'll get back to you soon.</p>;
  }
  return (
    <div className={styles.GetInTouch}>
      <h2>Let's Get In Touch!</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className={styles.content}>
          <legend><em>Send A Message</em></legend>

          <label htmlFor="name-area">Name:</label>
          <input
            type="text"
            id="name-area"
            name="name"
            placeholder="Name"
            required
            className="invalid"
          />
          <ValidationError 
            field="name" 
            prefix="Name" 
            errors={state.errors} 
          />

          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            id="mail"
            name="email"
            placeholder="Email"
            required
            className="valid"
          />
          <ValidationError 
            field="email" 
            prefix="Email" 
            errors={state.errors} 
          />

          <label htmlFor="message-area">Message:</label>
          <textarea
            id="message-area"
            name="message"
            placeholder="Your Message..."
            required
          ></textarea>
          <ValidationError 
            field="message" 
            prefix="Message" 
            errors={state.errors} 
          />

          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </fieldset>
        {state.error && <p style={{ color: 'red' }}>{state.error}</p>} {/* Form submission error message */}
      </form>
    </div>
  );
};

export default GetInTouch;