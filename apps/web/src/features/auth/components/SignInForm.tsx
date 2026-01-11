"use client";

import { Button } from "@/components/atoms";
import { TextField } from "@/components/molecules";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Form } from "react-aria-components";
import { useForm } from "react-hook-form";
import z from "zod";

// Infer TypeScript type from schema
type FormData = z.infer<typeof signInSchema>;

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    // Sign in the user
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
      <Button type="submit" variant="primary" isDisabled={isSubmitting}>
        Sign In
      </Button>
    </Form>
  );
};
