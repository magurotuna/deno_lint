import type { Node, Span } from "./types/common.ts";

export class Context {
  constructor() {
    // TODO(magurotuna)
  }

  getParentOfNode(node: Node): Node | null {
    const { parent } = this.opGetParentOfNode(node);
    return parent;
  }

  getChildrenOfNode(node: Node): ReadonlyArray<Node> {
    const { children } = this.opGetChildrenOfNode(node);
    return children;
  }

  addDiagnostic(span: Span, code: string, message: string, hint?: string) {
    this.opAddDiagnostic({
      span,
      code,
      message,
      hint,
    });
  }

  // TODO(magurotuna): provide other utility methods like control-flow, scope-analysis, etc.

  /////////////////////////////////////////////
  // internal methods interacting with Rust via op
  /////////////////////////////////////////////

  private opGetParentOfNode(node: Node): { parent: Node | null } {
    return Deno.core.jsonOpSync("op_get_parent_of_node", {
      span: node.span,
    });
  }

  private opGetChildrenOfNode(node: Node): { children: ReadonlyArray<Node> } {
    return Deno.core.jsonOpSync("op_get_children_of_node", {
      span: node.span,
    });
  }

  private opAddDiagnostic(diagnostic: { code: string; span: Span; message: string; hint?: string }) {
    Deno.core.jsonOpSync("op_add_diagnostic", { diagnostic });
  }
}

