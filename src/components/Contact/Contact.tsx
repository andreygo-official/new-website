import "./contact.scss";
import contactUsImg from "../../assets/contact-us.jpg";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IMaskInput } from "react-imask";
import { useState } from "react";

type Data = {
  email: string;
  username: string;
  phone: string;
  message: string;
}

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  username: yup.string().required("Username is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Invalid phone number"),
  message: yup.string().required('Message is required')
});

const Contact = () => {
  const onSubmit = (data: Data) => {
    console.log("Form Submitted:", data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });
  return (
    <div className="contact-us-container">
      <img src={contactUsImg} alt="contact-us" />
      <div className="contact-image">
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Contact Us</h2>
            <div className="mb-4">
              <input
                {...register("email")}
                type="email"
                className="form-control"
                placeholder="email"
              />
              <p className="error">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <input
              {...register("username")}
                type="text"
                className="form-control"
                name="username"
                placeholder="name"
              />
               <p className="error">{errors.username?.message}</p>
            </div>
            <div className="mb-4">
            <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    {...field}
                    mask="+38 (000) 000-00-00"
                    type="tel"
                    placeholder="phone"
                    className="form-control"
                    onAccept={(value) => field.onChange(value)}
                  />
                )}
              />
              <p className="error">{errors.phone?.message}</p>
            </div>
            <div className="mb-4">
              <textarea
              {...register("message")}
                className="form-control"
                name="message"
                placeholder="your message"
              ></textarea>
              <p className="error">{errors.message?.message}</p>
            </div>
            <div className="mb-4">
              <button disabled={!isValid} type="submit" className="btn">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
