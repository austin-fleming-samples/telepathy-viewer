import { ArrowUpRight } from "@phosphor-icons/react";
import { AnchorHTMLAttributes } from "react";

export const ArrowLink = ({
	children,
	...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<a
		{...rest}
		className="flex flex-row gap-1 leading-none duration-150 align-center hover:text-brandbright-900"
	>
		{children} <ArrowUpRight />
	</a>
);
