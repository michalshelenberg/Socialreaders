"use client";

import { Button } from "@/components/atoms";
import { TextField } from "@/components/molecules";
import { signUpSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Form } from "react-aria-components";
import { useForm } from "react-hook-form";
import z from "zod";
import { signUpUser } from "../services/signUpUser";

// Infer TypeScript type from schema
type FormData = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const { email, password, userName } = data;

    // Register the user
    await signUpUser({
      email,
      password,
      userName,
    });

    // After successful registration, sign in the user
    await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/",
    });

    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        name="userName"
        placeholder="Username"
        error={errors.userName}
        control={control}
      />
      <TextField
        type="email"
        name="email"
        placeholder="E-mail"
        error={errors.email}
        control={control}
      />
      <TextField
        type="password"
        name="password"
        placeholder="Password"
        error={errors.password}
        control={control}
      />
      <TextField
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        error={errors.confirmPassword}
        control={control}
      />
      <Button type="submit" variant="primary" isDisabled={isSubmitting}>
        Sign Up
      </Button>
    </Form>
  );
};
