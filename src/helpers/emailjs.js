import emailjs from "@emailjs/browser";

const email = () => {
  return emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE,
      import.meta.env.VITE_TEMP,
      form.current,
      import.meta.env.VITE_PASS
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

email()