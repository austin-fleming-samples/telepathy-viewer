import { ReactNode } from "react";
import S from "./stat-ghost.module.css";

export const StatGhost = ({ children }: { children: ReactNode }) => (
	<div className={S.ghostbox}>{children}</div>
);
