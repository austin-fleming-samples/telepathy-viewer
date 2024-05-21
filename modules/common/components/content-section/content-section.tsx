import { ReactNode } from "react";

export const ContentSection = ({ children }: { children: ReactNode }) => (
	<section className="flex flex-col gap-2">{children}</section>
);
