import React from 'react';
import styles from '../../styles/GetInTouch.module.css';

function GetInTouch() {
  return (
    <div className={styles.GetInTouch}>
      <h2>Let's Get In Touch!</h2>
      <form>
        <fieldset className={styles.content}>
          <legend><em>Send A Message</em></legend>
          <label for="name-area">Name:</label>
          <input type="text" id="name-area" placeholder="Name" pattern="^[a-zA-Z ]*$" maxlength="256" required="" class="invalid" />
          <label for="mail">Email:</label>
          <input type="email" placeholder="Email" id="mail" minlength="3" name="mail" maxlength="254" required="" class="valid" />
          <label for="message-area">Message:</label>
          <textarea id="message-area" placeholder="Your Message..." required=""></textarea>
          <button type="submit">Send</button>
        </fieldset>
      </form>
    </div>
  );
};

export default GetInTouch;