'use client'
import Input from '@/components/Input';
import Image from 'next/image'
import { emailIcon, eyeIcon, nameIcon } from "@/constants";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { SignupValidation } from '@/lib/validation'

import { images } from "@/constants/signImages";
import React from 'react';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const signUp = () => {
  const router = useRouter()

  const { t } = useTranslation()

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
    try {

      toast({
        title: "Form values are valid",
        description: `Name: ${user.name}, Email: ${user.email}, Password: ${user.password}`,
        className: "bg-green-800 text-main-2",
      });
      console.log(user);
      router.push('/', { scroll: false });

    } catch (error) {

      toast({
        title: "Error",
        description: "An error occurred. Please try again later.",
        className: "bg-red-800 text-white",
      });
      console.error(error);

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

      <Form {...form}>

        <form className="signIn_form" onSubmit={form.handleSubmit(handleSignup)}>
          <h2>{t('Register')}</h2>

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input label={t('name')} id="nameInput" type='text' icon={nameIcon} {...field} />
                </FormControl>
                <FormMessage className='text-red-700'/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input label={t('email')} id="emailInput" type='text' icon={emailIcon} {...field} />
                </FormControl>
                <FormMessage className='text-red-700'/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input label={t('password')} id='passwordInput' type='password' icon={eyeIcon} {...field} />
                </FormControl>
                <FormMessage className='text-red-700'/>
              </FormItem>
            )}
          />

          <button type="submit" >
          {t('sign up')}
          </button>

          <Link href="/sign-in">{t('Have an account')}</Link>
        </form>
      </Form>
    </div>
  );
};

export default signUp;