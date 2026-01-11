import { Link } from "@/components/atoms/Link/Link";
import { Container } from "@/components/layout";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <Container>
        <div className="grid-auto">
          <div className="col-[2/12] flex h-25 items-center justify-between lg:col-[3/10] 2xl:col-[4/10]">
            <Link href={"/"}>
              <Image
                src={"/images/socialreaders-logo.png"}
                alt="Socialreaders logo"
                width={155}
                height={19}
              />
            </Link>

            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <Link href={"/sign-in"}>Sign In</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
