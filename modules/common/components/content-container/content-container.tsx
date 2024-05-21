import { ReactNode } from "react";

export const ContentContainer = ({ children }: { children: ReactNode }) => (
	<div className="w-full overflow-hidden rounded-2xl drop-shadow-xl bg-branddark-800 bg-opacity-70 backdrop-blur-md">
		{children}
	</div>
);
