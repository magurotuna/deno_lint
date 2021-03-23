import { Plugin, Bool, Context } from "../../../plugin/mod.ts";

export default class MyPlugin extends Plugin {
  ruleCode = "disallow-false-literal";

  bool(b: Bool, ctx: Context) {
    if (!b.value) {
      ctx.addDiagnostic(b.span, this.ruleCode, "Do not use `false`");
    }
  }
}

