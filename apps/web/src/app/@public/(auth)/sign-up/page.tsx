"use server";

import { Heading, Text } from "@/components/atoms";
import { Container } from "@/components/layout";
import { SignUpForm } from "@/features/auth/components/SignUpForm";
import Image from "next/image";

const Page = () => {
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
                Create a Free Account
              </Heading>
              <Text as="p" className="mb-8">
                Socialreaders lets you add custom titles—even those missing from
                our database. You can also borrow books directly from fellow
                readers in the community.
              </Text>
              <SignUpForm />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
