// Explicitly re-export the ChatInput component to ensure this file only
// exports components (instead of using `export *`). This makes the
// exported API explicit and avoids accidental non-component exports.
export { default as ChatInput } from "./ChatInput";
