---
layout: layouts/base.njk
title:  Contact Me
heroImg: /images/hero-contact.jpg
heroText: Contact Me
bodyImg: /images/bg-about.jpg
heroBgColor: "#323A27"
bodyImgPosition: bottom right
heroImgHeight: 0.334

---

<form name="pizza" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
