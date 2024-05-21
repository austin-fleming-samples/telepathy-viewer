import { ReactNode } from "react";
import S from "./stat-pill.module.css";

export const StatPill = ({ children }: { children: ReactNode }) => (
	<div className={S.pillbox}>{children}</div>
);
