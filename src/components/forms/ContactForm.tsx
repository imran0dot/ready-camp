import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // You can handle form submission here (e.g., send data to an API)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            First Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="focus:border-t-gray-900"
            containerProps={{
              className: "min-w-full",
            }}
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <Typography
            variant="small"
            className="mb-2 text-left font-medium !text-gray-900"
          >
            Last Name
          </Typography>
          <Input
            color="gray"
            size="lg"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className="focus:border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Your Email
        </Typography>
        <Input
          color="gray"
          size="lg"
          placeholder="name@email.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address"
            }
          })}
          className="focus:border-t-gray-900"
          containerProps={{
            className: "!min-w-full",
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Typography
          variant="small"
          className="mb-2 text-left font-medium !text-gray-900"
        >
          Your Message
        </Typography>
        <Textarea
          rows={6}
          color="gray"
          placeholder="Message"
          {...register("message", { required: "Message is required" })}
          className="focus:border-t-gray-900"
          containerProps={{
            className: "!min-w-full",
          }}
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}
      </div>
      <Button className="w-full" color="blue" type="submit">
        Send message
      </Button>
    </form>
  );
}

export default ContactForm;