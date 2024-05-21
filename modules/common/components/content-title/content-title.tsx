import { ReactNode } from "react";

export const ContentTitle = ({ children }: { children: ReactNode }) => (
	<h2 className="text-sm font-bold">{children}</h2>
);
