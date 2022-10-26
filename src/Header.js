import { Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src="./logo_tng.jpeg"
      padding={tokens.space.medium}
    />
  );
}
