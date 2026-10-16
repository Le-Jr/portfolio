import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata: Metadata = buildMetadata("pt-BR");

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="pt-BR">{children}</RootDocument>;
}
