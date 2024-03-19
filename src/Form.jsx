import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjnakrr");
  if (state.succeeded) {
    return <p>Thanks for Joining! ⭐</p>;
  }

  return (
    <div name="to_contact">
      <form className="space-y-1" onSubmit={handleSubmit} action="https://formspree.io/f/mbjnakrr" method="POST">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" name="name" id="full-name" className="grow" placeholder="Full Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            id="email"
            name="_replyto"
            type="email"
            className="grow"
            placeholder="myemail@gmail.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </label>
        <textarea
          id="message"
          name="message"
          className="textarea textarea-bordered textarea-md w-full max-w-xs"
          placeholder="Let's Connect"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-ghost"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
