import { Container } from "@/components/layout";

export default function Page() {
  return (
    <main>
      <Container>
        <div className="grid grid-cols-12">
          <div
            className="col-[4/10] min-h-[500px] rounded-t-[24px] rounded-b-[24px] bg-[#F6F2EA]"
            style={{ viewTransitionName: "main-container" }}
          ></div>
        </div>
      </Container>
    </main>
  );
}
