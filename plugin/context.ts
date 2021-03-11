import type { Node } from "./types/common.ts";

export class Context {
  constructor() {
    // TODO(magurotuna)
  }

  getParentOfNode(node: Node): Node | null {
    const { parent } = Deno.core.jsonOpSync("op_get_parent_of_node", {
      span: node.span,
    });
    return parent;
  }

  getChildrenOfNode(node: Node): ReadonlyArray<Node> {
    const { children } = Deno.core.jsonOpSync("op_get_children_of_node", {
      span: node.span,
    });
    return children;
  }

  // TODO(magurotuna): provide other utility methods like control-flow, scope-analysis, etc.
}
