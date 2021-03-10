import type { Node } from "./types/common.ts";
import type { Program } from "./types/enum.ts";
import type {
  ArrayLit,
  ArrayPat,
  ArrowExpr,
  AssignExpr,
  AssignPat,
  AssignPatProp,
  AssignProp,
  AwaitExpr,
  BigInt_,
  BindingIdent,
  BinExpr,
  BlockStmt,
  Bool,
  BreakStmt,
  CallExpr,
  CatchClause,
  Class,
  ClassDecl,
  ClassExpr,
  ClassMethod,
  ClassProp,
  ComputedPropName,
  CondExpr,
  Constructor,
  ContinueStmt,
  DebuggerStmt,
  Decorator,
  DoWhileStmt,
  EmptyStmt,
  ExportAll,
  ExportDecl,
  ExportDefaultDecl,
  ExportDefaultExpr,
  ExportDefaultSpecifier,
  ExportNamedSpecifier,
  ExportNamespaceSpecifier,
  ExprOrSpread,
  ExprStmt,
  FnDecl,
  FnExpr,
  ForInStmt,
  ForOfStmt,
  ForStmt,
  Function_,
  GetterProp,
  Ident,
  IfStmt,
  ImportDecl,
  ImportDefaultSpecifier,
  ImportNamedSpecifier,
  ImportStarAsSpecifier,
  Invalid,
  JSXAttr,
  JSXClosingElement,
  JSXClosingFragment,
  JSXElement,
  JSXEmptyExpr,
  JSXExprContainer,
  JSXFragment,
  JSXMemberExpr,
  JSXNamespacedName,
  JSXOpeningElement,
  JSXOpeningFragment,
  JSXSpreadChild,
  JSXText,
  KeyValuePatProp,
  KeyValueProp,
  LabeledStmt,
  MemberExpr,
  MetaPropExpr,
  MethodProp,
  Module,
  NamedExport,
  NewExpr,
  Null,
  Number_,
  ObjectLit,
  ObjectPat,
  OptChainExpr,
  Param,
  ParenExpr,
  PrivateMethod,
  PrivateName,
  PrivateProp,
  Regex,
  RestPat,
  ReturnStmt,
  Script,
  SeqExpr,
  SetterProp,
  SpreadElement,
  Str,
  Super,
  SwitchCase,
  SwitchStmt,
  TaggedTpl,
  ThisExpr,
  ThrowStmt,
  Tpl,
  TplElement,
  TryStmt,
  TsArrayType,
  TsAsExpr,
  TsCallSignatureDecl,
  TsConditionalType,
  TsConstAssertion,
  TsConstructorType,
  TsConstructSignatureDecl,
  TsEnumDecl,
  TsEnumMember,
  TsExportAssignment,
  TsExprWithTypeArgs,
  TsExternalModuleRef,
  TsFnType,
  TsImportEqualsDecl,
  TsImportType,
  TsIndexedAccessType,
  TsIndexSignature,
  TsInferType,
  TsInterfaceBody,
  TsInterfaceDecl,
  TsIntersectionType,
  TsKeywordType,
  TsLitType,
  TsMappedType,
  TsMethodSignature,
  TsModuleBlock,
  TsModuleDecl,
  TsNamespaceDecl,
  TsNamespaceExportDecl,
  TsNonNullExpr,
  TsOptionalType,
  TsParamProp,
  TsParenthesizedType,
  TsPropertySignature,
  TsQualifiedName,
  TsRestType,
  TsThisType,
  TsTplLitType,
  TsTupleElement,
  TsTupleType,
  TsTypeAliasDecl,
  TsTypeAnn,
  TsTypeAssertion,
  TsTypeLit,
  TsTypeOperator,
  TsTypeParam,
  TsTypeParamDecl,
  TsTypeParamInstantiation,
  TsTypePredicate,
  TsTypeQuery,
  TsTypeRef,
  TsUnionType,
  UnaryExpr,
  UpdateExpr,
  VarDecl,
  VarDeclarator,
  WhileStmt,
  WithStmt,
  YieldExpr,
} from "./types/ast.ts";

function assertUnreachable(_x: never): never {
  throw new Error("Unreachable");
}

export abstract class Plugin {
  static getParentOfNode(node: Node): Node | null {
    const { parent } = Deno.core.jsonOpSync("op_get_parent_of_node", {
      span: node.span,
    });
    return parent;
  }

  static getChildrenOfNode(node: Node): ReadonlyArray<Node> {
    const { children } = Deno.core.jsonOpSync("op_get_children_of_node", {
      span: node.span,
    });
    return children;
  }

  ////////////////////////////////////////////
  // handlers
  //
  // plugin writers may override whichever methods they want to.
  ////////////////////////////////////////////

  arrayLit(_n: ArrayLit) {}
  arrayPat(_n: ArrayPat) {}
  arrowExpr(_n: ArrowExpr) {}
  assignExpr(_n: AssignExpr) {}
  assignPat(_n: AssignPat) {}
  assignPatProp(_n: AssignPatProp) {}
  assignProp(_n: AssignProp) {}
  awaitExpr(_n: AwaitExpr) {}
  bigInt_(_n: BigInt_) {}
  binExpr(_n: BinExpr) {}
  bindingIdent(_n: BindingIdent) {}
  blockStmt(_n: BlockStmt) {}
  bool(_n: Bool) {}
  breakStmt(_n: BreakStmt) {}
  callExpr(_n: CallExpr) {}
  catchClause(_n: CatchClause) {}
  class(_n: Class) {}
  classDecl(_n: ClassDecl) {}
  classExpr(_n: ClassExpr) {}
  classMethod(_n: ClassMethod) {}
  classProp(_n: ClassProp) {}
  computedPropName(_n: ComputedPropName) {}
  condExpr(_n: CondExpr) {}
  constructor(_n: Constructor) {}
  continueStmt(_n: ContinueStmt) {}
  debuggerStmt(_n: DebuggerStmt) {}
  decorator(_n: Decorator) {}
  doWhileStmt(_n: DoWhileStmt) {}
  emptyStmt(_n: EmptyStmt) {}
  exportAll(_n: ExportAll) {}
  exportDecl(_n: ExportDecl) {}
  exportDefaultDecl(_n: ExportDefaultDecl) {}
  exportDefaultExpr(_n: ExportDefaultExpr) {}
  exportDefaultSpecifier(_n: ExportDefaultSpecifier) {}
  exportNamedSpecifier(_n: ExportNamedSpecifier) {}
  exportNamespaceSpecifier(_n: ExportNamespaceSpecifier) {}
  exprOrSpread(_n: ExprOrSpread) {}
  exprStmt(_n: ExprStmt) {}
  fnDecl(_n: FnDecl) {}
  fnExpr(_n: FnExpr) {}
  forInStmt(_n: ForInStmt) {}
  forOfStmt(_n: ForOfStmt) {}
  forStmt(_n: ForStmt) {}
  function_(_n: Function_) {}
  getterProp(_n: GetterProp) {}
  ident(_n: Ident) {}
  ifStmt(_n: IfStmt) {}
  importDecl(_n: ImportDecl) {}
  importDefaultSpecifier(_n: ImportDefaultSpecifier) {}
  importNamedSpecifier(_n: ImportNamedSpecifier) {}
  importStarAsSpecifier(_n: ImportStarAsSpecifier) {}
  invalid(_n: Invalid) {}
  JSXAttr(_n: JSXAttr) {}
  JSXClosingElement(_n: JSXClosingElement) {}
  JSXClosingFragment(_n: JSXClosingFragment) {}
  JSXElement(_n: JSXElement) {}
  JSXEmptyExpr(_n: JSXEmptyExpr) {}
  JSXExprContainer(_n: JSXExprContainer) {}
  JSXFragment(_n: JSXFragment) {}
  JSXMemberExpr(_n: JSXMemberExpr) {}
  JSXNamespacedName(_n: JSXNamespacedName) {}
  JSXOpeningElement(_n: JSXOpeningElement) {}
  JSXOpeningFragment(_n: JSXOpeningFragment) {}
  JSXSpreadChild(_n: JSXSpreadChild) {}
  JSXText(_n: JSXText) {}
  keyValuePatProp(_n: KeyValuePatProp) {}
  keyValueProp(_n: KeyValueProp) {}
  labeledStmt(_n: LabeledStmt) {}
  memberExpr(_n: MemberExpr) {}
  metaPropExpr(_n: MetaPropExpr) {}
  methodProp(_n: MethodProp) {}
  module(_n: Module) {}
  namedExport(_n: NamedExport) {}
  newExpr(_n: NewExpr) {}
  null(_n: Null) {}
  number_(_n: Number_) {}
  objectLit(_n: ObjectLit) {}
  objectPat(_n: ObjectPat) {}
  optChainExpr(_n: OptChainExpr) {}
  param(_n: Param) {}
  parenExpr(_n: ParenExpr) {}
  privateMethod(_n: PrivateMethod) {}
  privateName(_n: PrivateName) {}
  privateProp(_n: PrivateProp) {}
  regex(_n: Regex) {}
  restPat(_n: RestPat) {}
  returnStmt(_n: ReturnStmt) {}
  script(_n: Script) {}
  seqExpr(_n: SeqExpr) {}
  setterProp(_n: SetterProp) {}
  spreadElement(_n: SpreadElement) {}
  str(_n: Str) {}
  super(_n: Super) {}
  switchCase(_n: SwitchCase) {}
  switchStmt(_n: SwitchStmt) {}
  taggedTpl(_n: TaggedTpl) {}
  thisExpr(_n: ThisExpr) {}
  throwStmt(_n: ThrowStmt) {}
  tpl(_n: Tpl) {}
  tplElement(_n: TplElement) {}
  tryStmt(_n: TryStmt) {}
  tsArrayType(_n: TsArrayType) {}
  tsAsExpr(_n: TsAsExpr) {}
  tsCallSignatureDecl(_n: TsCallSignatureDecl) {}
  tsConditionalType(_n: TsConditionalType) {}
  tsConstAssertion(_n: TsConstAssertion) {}
  tsConstructSignatureDecl(_n: TsConstructSignatureDecl) {}
  tsConstructorType(_n: TsConstructorType) {}
  tsEnumDecl(_n: TsEnumDecl) {}
  tsEnumMember(_n: TsEnumMember) {}
  tsExportAssignment(_n: TsExportAssignment) {}
  tsExprWithTypeArgs(_n: TsExprWithTypeArgs) {}
  tsExternalModuleRef(_n: TsExternalModuleRef) {}
  tsFnType(_n: TsFnType) {}
  tsImportEqualsDecl(_n: TsImportEqualsDecl) {}
  tsImportType(_n: TsImportType) {}
  tsIndexSignature(_n: TsIndexSignature) {}
  tsIndexedAccessType(_n: TsIndexedAccessType) {}
  tsInferType(_n: TsInferType) {}
  tsInterfaceBody(_n: TsInterfaceBody) {}
  tsInterfaceDecl(_n: TsInterfaceDecl) {}
  tsIntersectionType(_n: TsIntersectionType) {}
  tsKeywordType(_n: TsKeywordType) {}
  tsLitType(_n: TsLitType) {}
  tsMappedType(_n: TsMappedType) {}
  tsMethodSignature(_n: TsMethodSignature) {}
  tsModuleBlock(_n: TsModuleBlock) {}
  tsModuleDecl(_n: TsModuleDecl) {}
  tsNamespaceDecl(_n: TsNamespaceDecl) {}
  tsNamespaceExportDecl(_n: TsNamespaceExportDecl) {}
  tsNonNullExpr(_n: TsNonNullExpr) {}
  tsOptionalType(_n: TsOptionalType) {}
  tsParamProp(_n: TsParamProp) {}
  tsParenthesizedType(_n: TsParenthesizedType) {}
  tsPropertySignature(_n: TsPropertySignature) {}
  tsQualifiedName(_n: TsQualifiedName) {}
  tsRestType(_n: TsRestType) {}
  tsThisType(_n: TsThisType) {}
  tsTplLitType(_n: TsTplLitType) {}
  tsTupleElement(_n: TsTupleElement) {}
  tsTupleType(_n: TsTupleType) {}
  tsTypeAliasDecl(_n: TsTypeAliasDecl) {}
  tsTypeAnn(_n: TsTypeAnn) {}
  tsTypeAssertion(_n: TsTypeAssertion) {}
  tsTypeLit(_n: TsTypeLit) {}
  tsTypeOperator(_n: TsTypeOperator) {}
  tsTypeParam(_n: TsTypeParam) {}
  tsTypeParamDecl(_n: TsTypeParamDecl) {}
  tsTypeParamInstantiation(_n: TsTypeParamInstantiation) {}
  tsTypePredicate(_n: TsTypePredicate) {}
  tsTypeQuery(_n: TsTypeQuery) {}
  tsTypeRef(_n: TsTypeRef) {}
  tsUnionType(_n: TsUnionType) {}
  unaryExpr(_n: UnaryExpr) {}
  updateExpr(_n: UpdateExpr) {}
  varDecl(_n: VarDecl) {}
  varDeclarator(_n: VarDeclarator) {}
  whileStmt(_n: WhileStmt) {}
  withStmt(_n: WithStmt) {}
  yieldExpr(_n: YieldExpr) {}

  ////////////////////////////////////////////
  // internal methods
  ////////////////////////////////////////////

  private __traverse(currentNode: Node) {
    switch (currentNode.nodeKind) {
      case "ArrayLit":
        this.arrayLit(currentNode);
        break;
      case "ArrayPat":
        this.arrayPat(currentNode);
        break;
      case "ArrowExpr":
        this.arrowExpr(currentNode);
        break;
      case "AssignExpr":
        this.assignExpr(currentNode);
        break;
      case "AssignPat":
        this.assignPat(currentNode);
        break;
      case "AssignPatProp":
        this.assignPatProp(currentNode);
        break;
      case "AssignProp":
        this.assignProp(currentNode);
        break;
      case "AwaitExpr":
        this.awaitExpr(currentNode);
        break;
      case "BigInt":
        this.bigInt_(currentNode);
        break;
      case "BinExpr":
        this.binExpr(currentNode);
        break;
      case "BindingIdent":
        this.bindingIdent(currentNode);
        break;
      case "BlockStmt":
        this.blockStmt(currentNode);
        break;
      case "Bool":
        this.bool(currentNode);
        break;
      case "BreakStmt":
        this.breakStmt(currentNode);
        break;
      case "CallExpr":
        this.callExpr(currentNode);
        break;
      case "CatchClause":
        this.catchClause(currentNode);
        break;
      case "Class":
        this.class(currentNode);
        break;
      case "ClassDecl":
        this.classDecl(currentNode);
        break;
      case "ClassExpr":
        this.classExpr(currentNode);
        break;
      case "ClassMethod":
        this.classMethod(currentNode);
        break;
      case "ClassProp":
        this.classProp(currentNode);
        break;
      case "ComputedPropName":
        this.computedPropName(currentNode);
        break;
      case "CondExpr":
        this.condExpr(currentNode);
        break;
      case "Constructor":
        this.constructor(currentNode);
        break;
      case "ContinueStmt":
        this.continueStmt(currentNode);
        break;
      case "DebuggerStmt":
        this.debuggerStmt(currentNode);
        break;
      case "Decorator":
        this.decorator(currentNode);
        break;
      case "DoWhileStmt":
        this.doWhileStmt(currentNode);
        break;
      case "EmptyStmt":
        this.emptyStmt(currentNode);
        break;
      case "ExportAll":
        this.exportAll(currentNode);
        break;
      case "ExportDecl":
        this.exportDecl(currentNode);
        break;
      case "ExportDefaultDecl":
        this.exportDefaultDecl(currentNode);
        break;
      case "ExportDefaultExpr":
        this.exportDefaultExpr(currentNode);
        break;
      case "ExportDefaultSpecifier":
        this.exportDefaultSpecifier(currentNode);
        break;
      case "ExportNamedSpecifier":
        this.exportNamedSpecifier(currentNode);
        break;
      case "ExportNamespaceSpecifier":
        this.exportNamespaceSpecifier(currentNode);
        break;
      case "ExprOrSpread":
        this.exprOrSpread(currentNode);
        break;
      case "ExprStmt":
        this.exprStmt(currentNode);
        break;
      case "FnDecl":
        this.fnDecl(currentNode);
        break;
      case "FnExpr":
        this.fnExpr(currentNode);
        break;
      case "ForInStmt":
        this.forInStmt(currentNode);
        break;
      case "ForOfStmt":
        this.forOfStmt(currentNode);
        break;
      case "ForStmt":
        this.forStmt(currentNode);
        break;
      case "Function":
        this.function_(currentNode);
        break;
      case "GetterProp":
        this.getterProp(currentNode);
        break;
      case "Ident":
        this.ident(currentNode);
        break;
      case "IfStmt":
        this.ifStmt(currentNode);
        break;
      case "ImportDecl":
        this.importDecl(currentNode);
        break;
      case "ImportDefaultSpecifier":
        this.importDefaultSpecifier(currentNode);
        break;
      case "ImportNamedSpecifier":
        this.importNamedSpecifier(currentNode);
        break;
      case "ImportStarAsSpecifier":
        this.importStarAsSpecifier(currentNode);
        break;
      case "Invalid":
        this.invalid(currentNode);
        break;
      case "JSXAttr":
        this.JSXAttr(currentNode);
        break;
      case "JSXClosingElement":
        this.JSXClosingElement(currentNode);
        break;
      case "JSXClosingFragment":
        this.JSXClosingFragment(currentNode);
        break;
      case "JSXElement":
        this.JSXElement(currentNode);
        break;
      case "JSXEmptyExpr":
        this.JSXEmptyExpr(currentNode);
        break;
      case "JSXExprContainer":
        this.JSXExprContainer(currentNode);
        break;
      case "JSXFragment":
        this.JSXFragment(currentNode);
        break;
      case "JSXMemberExpr":
        this.JSXMemberExpr(currentNode);
        break;
      case "JSXNamespacedName":
        this.JSXNamespacedName(currentNode);
        break;
      case "JSXOpeningElement":
        this.JSXOpeningElement(currentNode);
        break;
      case "JSXOpeningFragment":
        this.JSXOpeningFragment(currentNode);
        break;
      case "JSXSpreadChild":
        this.JSXSpreadChild(currentNode);
        break;
      case "JSXText":
        this.JSXText(currentNode);
        break;
      case "KeyValuePatProp":
        this.keyValuePatProp(currentNode);
        break;
      case "KeyValueProp":
        this.keyValueProp(currentNode);
        break;
      case "LabeledStmt":
        this.labeledStmt(currentNode);
        break;
      case "MemberExpr":
        this.memberExpr(currentNode);
        break;
      case "MetaPropExpr":
        this.metaPropExpr(currentNode);
        break;
      case "MethodProp":
        this.methodProp(currentNode);
        break;
      case "Module":
        this.module(currentNode);
        break;
      case "NamedExport":
        this.namedExport(currentNode);
        break;
      case "NewExpr":
        this.newExpr(currentNode);
        break;
      case "Null":
        this.null(currentNode);
        break;
      case "Number":
        this.number_(currentNode);
        break;
      case "ObjectLit":
        this.objectLit(currentNode);
        break;
      case "ObjectPat":
        this.objectPat(currentNode);
        break;
      case "OptChainExpr":
        this.optChainExpr(currentNode);
        break;
      case "Param":
        this.param(currentNode);
        break;
      case "ParenExpr":
        this.parenExpr(currentNode);
        break;
      case "PrivateMethod":
        this.privateMethod(currentNode);
        break;
      case "PrivateName":
        this.privateName(currentNode);
        break;
      case "PrivateProp":
        this.privateProp(currentNode);
        break;
      case "Regex":
        this.regex(currentNode);
        break;
      case "RestPat":
        this.restPat(currentNode);
        break;
      case "ReturnStmt":
        this.returnStmt(currentNode);
        break;
      case "Script":
        this.script(currentNode);
        break;
      case "SeqExpr":
        this.seqExpr(currentNode);
        break;
      case "SetterProp":
        this.setterProp(currentNode);
        break;
      case "SpreadElement":
        this.spreadElement(currentNode);
        break;
      case "Str":
        this.str(currentNode);
        break;
      case "Super":
        this.super(currentNode);
        break;
      case "SwitchCase":
        this.switchCase(currentNode);
        break;
      case "SwitchStmt":
        this.switchStmt(currentNode);
        break;
      case "TaggedTpl":
        this.taggedTpl(currentNode);
        break;
      case "ThisExpr":
        this.thisExpr(currentNode);
        break;
      case "ThrowStmt":
        this.throwStmt(currentNode);
        break;
      case "Tpl":
        this.tpl(currentNode);
        break;
      case "TplElement":
        this.tplElement(currentNode);
        break;
      case "TryStmt":
        this.tryStmt(currentNode);
        break;
      case "TsArrayType":
        this.tsArrayType(currentNode);
        break;
      case "TsAsExpr":
        this.tsAsExpr(currentNode);
        break;
      case "TsCallSignatureDecl":
        this.tsCallSignatureDecl(currentNode);
        break;
      case "TsConditionalType":
        this.tsConditionalType(currentNode);
        break;
      case "TsConstAssertion":
        this.tsConstAssertion(currentNode);
        break;
      case "TsConstructSignatureDecl":
        this.tsConstructSignatureDecl(currentNode);
        break;
      case "TsConstructorType":
        this.tsConstructorType(currentNode);
        break;
      case "TsEnumDecl":
        this.tsEnumDecl(currentNode);
        break;
      case "TsEnumMember":
        this.tsEnumMember(currentNode);
        break;
      case "TsExportAssignment":
        this.tsExportAssignment(currentNode);
        break;
      case "TsExprWithTypeArgs":
        this.tsExprWithTypeArgs(currentNode);
        break;
      case "TsExternalModuleRef":
        this.tsExternalModuleRef(currentNode);
        break;
      case "TsFnType":
        this.tsFnType(currentNode);
        break;
      case "TsImportEqualsDecl":
        this.tsImportEqualsDecl(currentNode);
        break;
      case "TsImportType":
        this.tsImportType(currentNode);
        break;
      case "TsIndexSignature":
        this.tsIndexSignature(currentNode);
        break;
      case "TsIndexedAccessType":
        this.tsIndexedAccessType(currentNode);
        break;
      case "TsInferType":
        this.tsInferType(currentNode);
        break;
      case "TsInterfaceBody":
        this.tsInterfaceBody(currentNode);
        break;
      case "TsInterfaceDecl":
        this.tsInterfaceDecl(currentNode);
        break;
      case "TsIntersectionType":
        this.tsIntersectionType(currentNode);
        break;
      case "TsKeywordType":
        this.tsKeywordType(currentNode);
        break;
      case "TsLitType":
        this.tsLitType(currentNode);
        break;
      case "TsMappedType":
        this.tsMappedType(currentNode);
        break;
      case "TsMethodSignature":
        this.tsMethodSignature(currentNode);
        break;
      case "TsModuleBlock":
        this.tsModuleBlock(currentNode);
        break;
      case "TsModuleDecl":
        this.tsModuleDecl(currentNode);
        break;
      case "TsNamespaceDecl":
        this.tsNamespaceDecl(currentNode);
        break;
      case "TsNamespaceExportDecl":
        this.tsNamespaceExportDecl(currentNode);
        break;
      case "TsNonNullExpr":
        this.tsNonNullExpr(currentNode);
        break;
      case "TsOptionalType":
        this.tsOptionalType(currentNode);
        break;
      case "TsParamProp":
        this.tsParamProp(currentNode);
        break;
      case "TsParenthesizedType":
        this.tsParenthesizedType(currentNode);
        break;
      case "TsPropertySignature":
        this.tsPropertySignature(currentNode);
        break;
      case "TsQualifiedName":
        this.tsQualifiedName(currentNode);
        break;
      case "TsRestType":
        this.tsRestType(currentNode);
        break;
      case "TsThisType":
        this.tsThisType(currentNode);
        break;
      case "TsTplLitType":
        this.tsTplLitType(currentNode);
        break;
      case "TsTupleElement":
        this.tsTupleElement(currentNode);
        break;
      case "TsTupleType":
        this.tsTupleType(currentNode);
        break;
      case "TsTypeAliasDecl":
        this.tsTypeAliasDecl(currentNode);
        break;
      case "TsTypeAnn":
        this.tsTypeAnn(currentNode);
        break;
      case "TsTypeAssertion":
        this.tsTypeAssertion(currentNode);
        break;
      case "TsTypeLit":
        this.tsTypeLit(currentNode);
        break;
      case "TsTypeOperator":
        this.tsTypeOperator(currentNode);
        break;
      case "TsTypeParam":
        this.tsTypeParam(currentNode);
        break;
      case "TsTypeParamDecl":
        this.tsTypeParamDecl(currentNode);
        break;
      case "TsTypeParamInstantiation":
        this.tsTypeParamInstantiation(currentNode);
        break;
      case "TsTypePredicate":
        this.tsTypePredicate(currentNode);
        break;
      case "TsTypeQuery":
        this.tsTypeQuery(currentNode);
        break;
      case "TsTypeRef":
        this.tsTypeRef(currentNode);
        break;
      case "TsUnionType":
        this.tsUnionType(currentNode);
        break;
      case "UnaryExpr":
        this.unaryExpr(currentNode);
        break;
      case "UpdateExpr":
        this.updateExpr(currentNode);
        break;
      case "VarDecl":
        this.varDecl(currentNode);
        break;
      case "VarDeclarator":
        this.varDeclarator(currentNode);
        break;
      case "WhileStmt":
        this.whileStmt(currentNode);
        break;
      case "WithStmt":
        this.withStmt(currentNode);
        break;
      case "YieldExpr":
        this.yieldExpr(currentNode);
        break;
      default:
        assertUnreachable(currentNode);
    }

    for (const child of Plugin.getChildrenOfNode(currentNode)) {
      this.__traverse(child);
    }
  }

  // entry point of a plugin, which is called from deno_lint
  __run(rootNode: Program) {
    this.__traverse(rootNode);
  }
}
