/**
 * Host half: the pointer-trail ambience is a browser-only layer, so the Node
 * plugin contributes nothing to the harness.
 */

/** Cordis plugin name. */
export const name = 'dsh-pointer-trails'

/** Register nothing; the client half owns the effect. */
export function apply(): void {}
