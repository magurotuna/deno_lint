import { instantiate, run } from "../static/deno_lint.generated.js";
import { useEffect, useMemo } from "preact/hooks";
import { type Signal, useComputed, useSignal } from "@preact/signals";
import Convert from "https://esm.sh/v130/ansi-to-html@0.7.2";
import { type SupportedLanguages } from "./MonacoEditor.tsx";
import { unreachable } from "@std/assert/unreachable";

type Props = {
  source: Signal<string>;
  language: Signal<SupportedLanguages>;
  enableAllRules: Signal<boolean>;
};

type Display = {
  kind: "Loading" | "LintError" | "Diagnostics";
  content: string;
};

export default function Linter(props: Props) {
  const convert = useMemo(() =>
    new Convert({
      newline: true,
    }), []);

  const initialized = useSignal(false);

  useEffect(() => {
    const origin = new URL(location.href).origin;
    instantiate({
      url: new URL("deno_lint_bg.wasm", origin),
    }).then(() => {
      initialized.value = true;
    });
  }, []);

  const filename = useComputed(() => {
    switch (props.language.value) {
      case "TypeScript":
        return "playground.ts";
      case "JavaScript":
        return "playground.js";
      case "TSX":
        return "playground.tsx";
      case "JSX":
        return "playground.jsx";
      default:
        unreachable();
    }
  });

  const display = useComputed<Display>(() => {
    if (!initialized.value) {
      return {
        kind: "Loading",
        content: "Loading...",
      };
    }

    let result;
    try {
      result = run(
        filename.value,
        props.source.value,
        props.enableAllRules.value,
      );
    } catch (e) {
      return {
        kind: "LintError",
        content: e.toString(),
      };
    }

    return {
      kind: "Diagnostics",
      content: convert.toHtml(result),
    };
  });

  return (
    <div class="h-full">
      <div class="border border-gray-300 dark:border-gray-700 dark:bg-[#1e1e1e] p-4 overflow-x-auto h-full">
        {display.value.kind === "Loading"
          ? <p>wasm is being loaded...</p>
          : display.value.kind === "LintError"
          ? (
            <>
              <span class="inline-block text-red-500">
                Lint error
              </span>
              <code class="block py-5 whitespace-pre">
                {display.value.content}
              </code>
            </>
          )
          : (
            <>
              <span class="inline-block border border-gray-300 dark:border-white p-3 rounded-lg">
                Diagnostics
              </span>
              <code
                class="block font-mono whitespace-pre py-5"
                dangerouslySetInnerHTML={{ __html: display.value.content }}
              >
              </code>
            </>
          )}
      </div>
    </div>
  );
}