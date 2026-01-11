"use server";

import { Heading, Text } from "@/components/atoms";
import { Container } from "@/components/layout";
import { SignInForm } from "@/features/auth/components/SignInForm";
import Image from "next/image";

const Page = ({ searchParams }: { searchParams: { error?: string } }) => {
  return (
    <main>
      <Container>
        <div className="grid-auto">
          <div
            className="col-[4/10] grid h-full grid-cols-2 overflow-hidden rounded-[24px] bg-[#F5F2EA]"
            style={{ viewTransitionName: "main-container" }}
          >
            <Image
              src={"/images/auth/books-auth.png"}
              alt=""
              width={4096}
              height={2731}
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center p-16">
              <Heading as="h1" variant="sm" className="mb-4">
                Welcome Back
              </Heading>
              <Text as="p" className="mb-8">
                Sign in to continue exploring books and connecting with fellow
                readers in the community.
              </Text>
              <SignInForm />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
