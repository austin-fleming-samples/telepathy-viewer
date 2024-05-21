export const errorOrUnknown = (maybeError: Error | unknown): Error =>
	maybeError instanceof Error
		? maybeError
		: new Error(`Unexpected error: ${maybeError}`);

/**
 * Option type
 *
 * Assists with understanding how functions fail and where, relying on Typescript's
 * type narrowing to enhance type safety.
 *
 * Typically would be named "Result", but it collides with an ethers type.
 */
export type Option<T> = { ok: true; data: T } | { ok: false; err: Error };
export const optionOk = <T>(data: T): Option<T> => ({ ok: true, data });
export const optionFail = <T>(err: Error): Option<T> => ({
	ok: false,
	err,
});
