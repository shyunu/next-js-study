"use client";

import { ReactNode } from "react";

export default function ClientComponent({ children }: { children: ReactNode }) {
  console.log("Client Component");

  return <div>{children}</div>;
}
