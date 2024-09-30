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
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.367032992344!2d90.35574967432673!3d23.76994098802785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c19704f97af7%3A0xab7638e90fa88e4c!2sUmmah%20Point!5e0!3m2!1sen!2sbd!4v1727725472599!5m2!1sen!2sbd" width="600" height="450" loading="lazy"></iframe>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 lg:max-w-sm"
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
        </div>
      </div>
    </section>
  );
}

export default ContactForm;