'use client'
import Input from '@/components/Input';
import Image from 'next/image'
import { emailIcon, eyeIcon } from "@/constants";
import { images } from "@/constants/signImages";
import React from 'react';
import { SignupValidation } from '@/lib/validation'
import { useToast } from '@/components/ui/use-toast';

const signIn = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // pegando os valores
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    // Validando os valores
    const validationResult = SignupValidation.safeParse({ email, password });

    if (validationResult.success) {

      toast({
        title: "Form values are valid",
        className: "bg-main-3 text-main-2",
      })

    } else {
      const validationErrors: { [key: string]: string[] } = validationResult.error.flatten().fieldErrors;

      // Exibir mensagens de erro em um toast
      Object.keys(validationErrors).forEach((field: string) => {
        toast({
          title: `Error in ${field}`,
          description: validationErrors[field][0], // Mensagem de erro específica para o campo
          className: "bg-red-800 text-white",
        });
      });
    }
  };

  const { toast } = useToast()

  return (
    <div className="signIn">
        <div className="sign_titles">
        <h1>Moda</h1>
        <h1>Express</h1>
       </div>


      <div className="signIn_images">
        {images.map((image, i) => (
          <div className="signIn_image" key={i}>
            <Image
              src={image.url}
              width={500}
              height={500}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      <form className="signIn_form" onSubmit={handleSubmit}>
        <h2>Welcome</h2>

        <Input label='email' type='text' icon={emailIcon} name="email" />

        <Input label='password' type='password' icon={eyeIcon} name="password" />

        <button type="submit">
          sign in
        </button>

        <a href="#">Have an account</a>
      </form>
    </div>
  );
};

export default signIn;