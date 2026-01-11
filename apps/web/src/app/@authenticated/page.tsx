"use server";

import { signOut } from "@/auth";
import { Button } from "@/components/atoms";
import { Container } from "@/components/layout";

const Page = async () => {
  async function handleSignOut() {
    "use server";
    await signOut();
  }

  return (
    <main>
      <Container>
        <div className="grid-auto">
          <div className="col-[4/10]">
            <form action={handleSignOut}>
              <Button type="submit" variant="primary">
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
