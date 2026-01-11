import { Text } from "@/components/atoms";
import { Container } from "@/components/layout";

export function Footer() {
  return (
    <footer>
      <Container>
        <div className="grid-auto">
          <div className="col-[2/12] 2xl:col-[4/11]">
            <div className="flex h-25 items-center">
              <Text as="p" data-theme="dark">
                © {new Date().getFullYear()} Michal Sheleneberg
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
