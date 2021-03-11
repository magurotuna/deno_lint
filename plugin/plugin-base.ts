import { Context } from "./context.ts";
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
  ////////////////////////////////////////////
  // handlers
  //
  // plugin writers may override whichever methods they want to.
  ////////////////////////////////////////////

  arrayLit(_n: ArrayLit, _ctx: Context) {}
  arrayPat(_n: ArrayPat, _ctx: Context) {}
  arrowExpr(_n: ArrowExpr, _ctx: Context) {}
  assignExpr(_n: AssignExpr, _ctx: Context) {}
  assignPat(_n: AssignPat, _ctx: Context) {}
  assignPatProp(_n: AssignPatProp, _ctx: Context) {}
  assignProp(_n: AssignProp, _ctx: Context) {}
  awaitExpr(_n: AwaitExpr, _ctx: Context) {}
  bigInt_(_n: BigInt_, _ctx: Context) {}
  binExpr(_n: BinExpr, _ctx: Context) {}
  bindingIdent(_n: BindingIdent, _ctx: Context) {}
  blockStmt(_n: BlockStmt, _ctx: Context) {}
  bool(_n: Bool, _ctx: Context) {}
  breakStmt(_n: BreakStmt, _ctx: Context) {}
  callExpr(_n: CallExpr, _ctx: Context) {}
  catchClause(_n: CatchClause, _ctx: Context) {}
  class(_n: Class, _ctx: Context) {}
  classDecl(_n: ClassDecl, _ctx: Context) {}
  classExpr(_n: ClassExpr, _ctx: Context) {}
  classMethod(_n: ClassMethod, _ctx: Context) {}
  classProp(_n: ClassProp, _ctx: Context) {}
  computedPropName(_n: ComputedPropName, _ctx: Context) {}
  condExpr(_n: CondExpr, _ctx: Context) {}
  constructor_(_n: Constructor, _ctx: Context) {}
  continueStmt(_n: ContinueStmt, _ctx: Context) {}
  debuggerStmt(_n: DebuggerStmt, _ctx: Context) {}
  decorator(_n: Decorator, _ctx: Context) {}
  doWhileStmt(_n: DoWhileStmt, _ctx: Context) {}
  emptyStmt(_n: EmptyStmt, _ctx: Context) {}
  exportAll(_n: ExportAll, _ctx: Context) {}
  exportDecl(_n: ExportDecl, _ctx: Context) {}
  exportDefaultDecl(_n: ExportDefaultDecl, _ctx: Context) {}
  exportDefaultExpr(_n: ExportDefaultExpr, _ctx: Context) {}
  exportDefaultSpecifier(_n: ExportDefaultSpecifier, _ctx: Context) {}
  exportNamedSpecifier(_n: ExportNamedSpecifier, _ctx: Context) {}
  exportNamespaceSpecifier(_n: ExportNamespaceSpecifier, _ctx: Context) {}
  exprOrSpread(_n: ExprOrSpread, _ctx: Context) {}
  exprStmt(_n: ExprStmt, _ctx: Context) {}
  fnDecl(_n: FnDecl, _ctx: Context) {}
  fnExpr(_n: FnExpr, _ctx: Context) {}
  forInStmt(_n: ForInStmt, _ctx: Context) {}
  forOfStmt(_n: ForOfStmt, _ctx: Context) {}
  forStmt(_n: ForStmt, _ctx: Context) {}
  function_(_n: Function_, _ctx: Context) {}
  getterProp(_n: GetterProp, _ctx: Context) {}
  ident(_n: Ident, _ctx: Context) {}
  ifStmt(_n: IfStmt, _ctx: Context) {}
  importDecl(_n: ImportDecl, _ctx: Context) {}
  importDefaultSpecifier(_n: ImportDefaultSpecifier, _ctx: Context) {}
  importNamedSpecifier(_n: ImportNamedSpecifier, _ctx: Context) {}
  importStarAsSpecifier(_n: ImportStarAsSpecifier, _ctx: Context) {}
  invalid(_n: Invalid, _ctx: Context) {}
  JSXAttr(_n: JSXAttr, _ctx: Context) {}
  JSXClosingElement(_n: JSXClosingElement, _ctx: Context) {}
  JSXClosingFragment(_n: JSXClosingFragment, _ctx: Context) {}
  JSXElement(_n: JSXElement, _ctx: Context) {}
  JSXEmptyExpr(_n: JSXEmptyExpr, _ctx: Context) {}
  JSXExprContainer(_n: JSXExprContainer, _ctx: Context) {}
  JSXFragment(_n: JSXFragment, _ctx: Context) {}
  JSXMemberExpr(_n: JSXMemberExpr, _ctx: Context) {}
  JSXNamespacedName(_n: JSXNamespacedName, _ctx: Context) {}
  JSXOpeningElement(_n: JSXOpeningElement, _ctx: Context) {}
  JSXOpeningFragment(_n: JSXOpeningFragment, _ctx: Context) {}
  JSXSpreadChild(_n: JSXSpreadChild, _ctx: Context) {}
  JSXText(_n: JSXText, _ctx: Context) {}
  keyValuePatProp(_n: KeyValuePatProp, _ctx: Context) {}
  keyValueProp(_n: KeyValueProp, _ctx: Context) {}
  labeledStmt(_n: LabeledStmt, _ctx: Context) {}
  memberExpr(_n: MemberExpr, _ctx: Context) {}
  metaPropExpr(_n: MetaPropExpr, _ctx: Context) {}
  methodProp(_n: MethodProp, _ctx: Context) {}
  module(_n: Module, _ctx: Context) {}
  namedExport(_n: NamedExport, _ctx: Context) {}
  newExpr(_n: NewExpr, _ctx: Context) {}
  null(_n: Null, _ctx: Context) {}
  number_(_n: Number_, _ctx: Context) {}
  objectLit(_n: ObjectLit, _ctx: Context) {}
  objectPat(_n: ObjectPat, _ctx: Context) {}
  optChainExpr(_n: OptChainExpr, _ctx: Context) {}
  param(_n: Param, _ctx: Context) {}
  parenExpr(_n: ParenExpr, _ctx: Context) {}
  privateMethod(_n: PrivateMethod, _ctx: Context) {}
  privateName(_n: PrivateName, _ctx: Context) {}
  privateProp(_n: PrivateProp, _ctx: Context) {}
  regex(_n: Regex, _ctx: Context) {}
  restPat(_n: RestPat, _ctx: Context) {}
  returnStmt(_n: ReturnStmt, _ctx: Context) {}
  script(_n: Script, _ctx: Context) {}
  seqExpr(_n: SeqExpr, _ctx: Context) {}
  setterProp(_n: SetterProp, _ctx: Context) {}
  spreadElement(_n: SpreadElement, _ctx: Context) {}
  str(_n: Str, _ctx: Context) {}
  super(_n: Super, _ctx: Context) {}
  switchCase(_n: SwitchCase, _ctx: Context) {}
  switchStmt(_n: SwitchStmt, _ctx: Context) {}
  taggedTpl(_n: TaggedTpl, _ctx: Context) {}
  thisExpr(_n: ThisExpr, _ctx: Context) {}
  throwStmt(_n: ThrowStmt, _ctx: Context) {}
  tpl(_n: Tpl, _ctx: Context) {}
  tplElement(_n: TplElement, _ctx: Context) {}
  tryStmt(_n: TryStmt, _ctx: Context) {}
  tsArrayType(_n: TsArrayType, _ctx: Context) {}
  tsAsExpr(_n: TsAsExpr, _ctx: Context) {}
  tsCallSignatureDecl(_n: TsCallSignatureDecl, _ctx: Context) {}
  tsConditionalType(_n: TsConditionalType, _ctx: Context) {}
  tsConstAssertion(_n: TsConstAssertion, _ctx: Context) {}
  tsConstructSignatureDecl(_n: TsConstructSignatureDecl, _ctx: Context) {}
  tsConstructorType(_n: TsConstructorType, _ctx: Context) {}
  tsEnumDecl(_n: TsEnumDecl, _ctx: Context) {}
  tsEnumMember(_n: TsEnumMember, _ctx: Context) {}
  tsExportAssignment(_n: TsExportAssignment, _ctx: Context) {}
  tsExprWithTypeArgs(_n: TsExprWithTypeArgs, _ctx: Context) {}
  tsExternalModuleRef(_n: TsExternalModuleRef, _ctx: Context) {}
  tsFnType(_n: TsFnType, _ctx: Context) {}
  tsImportEqualsDecl(_n: TsImportEqualsDecl, _ctx: Context) {}
  tsImportType(_n: TsImportType, _ctx: Context) {}
  tsIndexSignature(_n: TsIndexSignature, _ctx: Context) {}
  tsIndexedAccessType(_n: TsIndexedAccessType, _ctx: Context) {}
  tsInferType(_n: TsInferType, _ctx: Context) {}
  tsInterfaceBody(_n: TsInterfaceBody, _ctx: Context) {}
  tsInterfaceDecl(_n: TsInterfaceDecl, _ctx: Context) {}
  tsIntersectionType(_n: TsIntersectionType, _ctx: Context) {}
  tsKeywordType(_n: TsKeywordType, _ctx: Context) {}
  tsLitType(_n: TsLitType, _ctx: Context) {}
  tsMappedType(_n: TsMappedType, _ctx: Context) {}
  tsMethodSignature(_n: TsMethodSignature, _ctx: Context) {}
  tsModuleBlock(_n: TsModuleBlock, _ctx: Context) {}
  tsModuleDecl(_n: TsModuleDecl, _ctx: Context) {}
  tsNamespaceDecl(_n: TsNamespaceDecl, _ctx: Context) {}
  tsNamespaceExportDecl(_n: TsNamespaceExportDecl, _ctx: Context) {}
  tsNonNullExpr(_n: TsNonNullExpr, _ctx: Context) {}
  tsOptionalType(_n: TsOptionalType, _ctx: Context) {}
  tsParamProp(_n: TsParamProp, _ctx: Context) {}
  tsParenthesizedType(_n: TsParenthesizedType, _ctx: Context) {}
  tsPropertySignature(_n: TsPropertySignature, _ctx: Context) {}
  tsQualifiedName(_n: TsQualifiedName, _ctx: Context) {}
  tsRestType(_n: TsRestType, _ctx: Context) {}
  tsThisType(_n: TsThisType, _ctx: Context) {}
  tsTplLitType(_n: TsTplLitType, _ctx: Context) {}
  tsTupleElement(_n: TsTupleElement, _ctx: Context) {}
  tsTupleType(_n: TsTupleType, _ctx: Context) {}
  tsTypeAliasDecl(_n: TsTypeAliasDecl, _ctx: Context) {}
  tsTypeAnn(_n: TsTypeAnn, _ctx: Context) {}
  tsTypeAssertion(_n: TsTypeAssertion, _ctx: Context) {}
  tsTypeLit(_n: TsTypeLit, _ctx: Context) {}
  tsTypeOperator(_n: TsTypeOperator, _ctx: Context) {}
  tsTypeParam(_n: TsTypeParam, _ctx: Context) {}
  tsTypeParamDecl(_n: TsTypeParamDecl, _ctx: Context) {}
  tsTypeParamInstantiation(_n: TsTypeParamInstantiation, _ctx: Context) {}
  tsTypePredicate(_n: TsTypePredicate, _ctx: Context) {}
  tsTypeQuery(_n: TsTypeQuery, _ctx: Context) {}
  tsTypeRef(_n: TsTypeRef, _ctx: Context) {}
  tsUnionType(_n: TsUnionType, _ctx: Context) {}
  unaryExpr(_n: UnaryExpr, _ctx: Context) {}
  updateExpr(_n: UpdateExpr, _ctx: Context) {}
  varDecl(_n: VarDecl, _ctx: Context) {}
  varDeclarator(_n: VarDeclarator, _ctx: Context) {}
  whileStmt(_n: WhileStmt, _ctx: Context) {}
  withStmt(_n: WithStmt, _ctx: Context) {}
  yieldExpr(_n: YieldExpr, _ctx: Context) {}

  ////////////////////////////////////////////
  // internal methods
  ////////////////////////////////////////////

  constructor(private __ctx: Context) {}

  private __traverse(currentNode: Node, ctx: Context) {
    switch (currentNode.nodeKind) {
      case "ArrayLit":
        this.arrayLit(currentNode, ctx);
        break;
      case "ArrayPat":
        this.arrayPat(currentNode, ctx);
        break;
      case "ArrowExpr":
        this.arrowExpr(currentNode, ctx);
        break;
      case "AssignExpr":
        this.assignExpr(currentNode, ctx);
        break;
      case "AssignPat":
        this.assignPat(currentNode, ctx);
        break;
      case "AssignPatProp":
        this.assignPatProp(currentNode, ctx);
        break;
      case "AssignProp":
        this.assignProp(currentNode, ctx);
        break;
      case "AwaitExpr":
        this.awaitExpr(currentNode, ctx);
        break;
      case "BigInt":
        this.bigInt_(currentNode, ctx);
        break;
      case "BinExpr":
        this.binExpr(currentNode, ctx);
        break;
      case "BindingIdent":
        this.bindingIdent(currentNode, ctx);
        break;
      case "BlockStmt":
        this.blockStmt(currentNode, ctx);
        break;
      case "Bool":
        this.bool(currentNode, ctx);
        break;
      case "BreakStmt":
        this.breakStmt(currentNode, ctx);
        break;
      case "CallExpr":
        this.callExpr(currentNode, ctx);
        break;
      case "CatchClause":
        this.catchClause(currentNode, ctx);
        break;
      case "Class":
        this.class(currentNode, ctx);
        break;
      case "ClassDecl":
        this.classDecl(currentNode, ctx);
        break;
      case "ClassExpr":
        this.classExpr(currentNode, ctx);
        break;
      case "ClassMethod":
        this.classMethod(currentNode, ctx);
        break;
      case "ClassProp":
        this.classProp(currentNode, ctx);
        break;
      case "ComputedPropName":
        this.computedPropName(currentNode, ctx);
        break;
      case "CondExpr":
        this.condExpr(currentNode, ctx);
        break;
      case "Constructor":
        this.constructor_(currentNode, ctx);
        break;
      case "ContinueStmt":
        this.continueStmt(currentNode, ctx);
        break;
      case "DebuggerStmt":
        this.debuggerStmt(currentNode, ctx);
        break;
      case "Decorator":
        this.decorator(currentNode, ctx);
        break;
      case "DoWhileStmt":
        this.doWhileStmt(currentNode, ctx);
        break;
      case "EmptyStmt":
        this.emptyStmt(currentNode, ctx);
        break;
      case "ExportAll":
        this.exportAll(currentNode, ctx);
        break;
      case "ExportDecl":
        this.exportDecl(currentNode, ctx);
        break;
      case "ExportDefaultDecl":
        this.exportDefaultDecl(currentNode, ctx);
        break;
      case "ExportDefaultExpr":
        this.exportDefaultExpr(currentNode, ctx);
        break;
      case "ExportDefaultSpecifier":
        this.exportDefaultSpecifier(currentNode, ctx);
        break;
      case "ExportNamedSpecifier":
        this.exportNamedSpecifier(currentNode, ctx);
        break;
      case "ExportNamespaceSpecifier":
        this.exportNamespaceSpecifier(currentNode, ctx);
        break;
      case "ExprOrSpread":
        this.exprOrSpread(currentNode, ctx);
        break;
      case "ExprStmt":
        this.exprStmt(currentNode, ctx);
        break;
      case "FnDecl":
        this.fnDecl(currentNode, ctx);
        break;
      case "FnExpr":
        this.fnExpr(currentNode, ctx);
        break;
      case "ForInStmt":
        this.forInStmt(currentNode, ctx);
        break;
      case "ForOfStmt":
        this.forOfStmt(currentNode, ctx);
        break;
      case "ForStmt":
        this.forStmt(currentNode, ctx);
        break;
      case "Function":
        this.function_(currentNode, ctx);
        break;
      case "GetterProp":
        this.getterProp(currentNode, ctx);
        break;
      case "Ident":
        this.ident(currentNode, ctx);
        break;
      case "IfStmt":
        this.ifStmt(currentNode, ctx);
        break;
      case "ImportDecl":
        this.importDecl(currentNode, ctx);
        break;
      case "ImportDefaultSpecifier":
        this.importDefaultSpecifier(currentNode, ctx);
        break;
      case "ImportNamedSpecifier":
        this.importNamedSpecifier(currentNode, ctx);
        break;
      case "ImportStarAsSpecifier":
        this.importStarAsSpecifier(currentNode, ctx);
        break;
      case "Invalid":
        this.invalid(currentNode, ctx);
        break;
      case "JSXAttr":
        this.JSXAttr(currentNode, ctx);
        break;
      case "JSXClosingElement":
        this.JSXClosingElement(currentNode, ctx);
        break;
      case "JSXClosingFragment":
        this.JSXClosingFragment(currentNode, ctx);
        break;
      case "JSXElement":
        this.JSXElement(currentNode, ctx);
        break;
      case "JSXEmptyExpr":
        this.JSXEmptyExpr(currentNode, ctx);
        break;
      case "JSXExprContainer":
        this.JSXExprContainer(currentNode, ctx);
        break;
      case "JSXFragment":
        this.JSXFragment(currentNode, ctx);
        break;
      case "JSXMemberExpr":
        this.JSXMemberExpr(currentNode, ctx);
        break;
      case "JSXNamespacedName":
        this.JSXNamespacedName(currentNode, ctx);
        break;
      case "JSXOpeningElement":
        this.JSXOpeningElement(currentNode, ctx);
        break;
      case "JSXOpeningFragment":
        this.JSXOpeningFragment(currentNode, ctx);
        break;
      case "JSXSpreadChild":
        this.JSXSpreadChild(currentNode, ctx);
        break;
      case "JSXText":
        this.JSXText(currentNode, ctx);
        break;
      case "KeyValuePatProp":
        this.keyValuePatProp(currentNode, ctx);
        break;
      case "KeyValueProp":
        this.keyValueProp(currentNode, ctx);
        break;
      case "LabeledStmt":
        this.labeledStmt(currentNode, ctx);
        break;
      case "MemberExpr":
        this.memberExpr(currentNode, ctx);
        break;
      case "MetaPropExpr":
        this.metaPropExpr(currentNode, ctx);
        break;
      case "MethodProp":
        this.methodProp(currentNode, ctx);
        break;
      case "Module":
        this.module(currentNode, ctx);
        break;
      case "NamedExport":
        this.namedExport(currentNode, ctx);
        break;
      case "NewExpr":
        this.newExpr(currentNode, ctx);
        break;
      case "Null":
        this.null(currentNode, ctx);
        break;
      case "Number":
        this.number_(currentNode, ctx);
        break;
      case "ObjectLit":
        this.objectLit(currentNode, ctx);
        break;
      case "ObjectPat":
        this.objectPat(currentNode, ctx);
        break;
      case "OptChainExpr":
        this.optChainExpr(currentNode, ctx);
        break;
      case "Param":
        this.param(currentNode, ctx);
        break;
      case "ParenExpr":
        this.parenExpr(currentNode, ctx);
        break;
      case "PrivateMethod":
        this.privateMethod(currentNode, ctx);
        break;
      case "PrivateName":
        this.privateName(currentNode, ctx);
        break;
      case "PrivateProp":
        this.privateProp(currentNode, ctx);
        break;
      case "Regex":
        this.regex(currentNode, ctx);
        break;
      case "RestPat":
        this.restPat(currentNode, ctx);
        break;
      case "ReturnStmt":
        this.returnStmt(currentNode, ctx);
        break;
      case "Script":
        this.script(currentNode, ctx);
        break;
      case "SeqExpr":
        this.seqExpr(currentNode, ctx);
        break;
      case "SetterProp":
        this.setterProp(currentNode, ctx);
        break;
      case "SpreadElement":
        this.spreadElement(currentNode, ctx);
        break;
      case "Str":
        this.str(currentNode, ctx);
        break;
      case "Super":
        this.super(currentNode, ctx);
        break;
      case "SwitchCase":
        this.switchCase(currentNode, ctx);
        break;
      case "SwitchStmt":
        this.switchStmt(currentNode, ctx);
        break;
      case "TaggedTpl":
        this.taggedTpl(currentNode, ctx);
        break;
      case "ThisExpr":
        this.thisExpr(currentNode, ctx);
        break;
      case "ThrowStmt":
        this.throwStmt(currentNode, ctx);
        break;
      case "Tpl":
        this.tpl(currentNode, ctx);
        break;
      case "TplElement":
        this.tplElement(currentNode, ctx);
        break;
      case "TryStmt":
        this.tryStmt(currentNode, ctx);
        break;
      case "TsArrayType":
        this.tsArrayType(currentNode, ctx);
        break;
      case "TsAsExpr":
        this.tsAsExpr(currentNode, ctx);
        break;
      case "TsCallSignatureDecl":
        this.tsCallSignatureDecl(currentNode, ctx);
        break;
      case "TsConditionalType":
        this.tsConditionalType(currentNode, ctx);
        break;
      case "TsConstAssertion":
        this.tsConstAssertion(currentNode, ctx);
        break;
      case "TsConstructSignatureDecl":
        this.tsConstructSignatureDecl(currentNode, ctx);
        break;
      case "TsConstructorType":
        this.tsConstructorType(currentNode, ctx);
        break;
      case "TsEnumDecl":
        this.tsEnumDecl(currentNode, ctx);
        break;
      case "TsEnumMember":
        this.tsEnumMember(currentNode, ctx);
        break;
      case "TsExportAssignment":
        this.tsExportAssignment(currentNode, ctx);
        break;
      case "TsExprWithTypeArgs":
        this.tsExprWithTypeArgs(currentNode, ctx);
        break;
      case "TsExternalModuleRef":
        this.tsExternalModuleRef(currentNode, ctx);
        break;
      case "TsFnType":
        this.tsFnType(currentNode, ctx);
        break;
      case "TsImportEqualsDecl":
        this.tsImportEqualsDecl(currentNode, ctx);
        break;
      case "TsImportType":
        this.tsImportType(currentNode, ctx);
        break;
      case "TsIndexSignature":
        this.tsIndexSignature(currentNode, ctx);
        break;
      case "TsIndexedAccessType":
        this.tsIndexedAccessType(currentNode, ctx);
        break;
      case "TsInferType":
        this.tsInferType(currentNode, ctx);
        break;
      case "TsInterfaceBody":
        this.tsInterfaceBody(currentNode, ctx);
        break;
      case "TsInterfaceDecl":
        this.tsInterfaceDecl(currentNode, ctx);
        break;
      case "TsIntersectionType":
        this.tsIntersectionType(currentNode, ctx);
        break;
      case "TsKeywordType":
        this.tsKeywordType(currentNode, ctx);
        break;
      case "TsLitType":
        this.tsLitType(currentNode, ctx);
        break;
      case "TsMappedType":
        this.tsMappedType(currentNode, ctx);
        break;
      case "TsMethodSignature":
        this.tsMethodSignature(currentNode, ctx);
        break;
      case "TsModuleBlock":
        this.tsModuleBlock(currentNode, ctx);
        break;
      case "TsModuleDecl":
        this.tsModuleDecl(currentNode, ctx);
        break;
      case "TsNamespaceDecl":
        this.tsNamespaceDecl(currentNode, ctx);
        break;
      case "TsNamespaceExportDecl":
        this.tsNamespaceExportDecl(currentNode, ctx);
        break;
      case "TsNonNullExpr":
        this.tsNonNullExpr(currentNode, ctx);
        break;
      case "TsOptionalType":
        this.tsOptionalType(currentNode, ctx);
        break;
      case "TsParamProp":
        this.tsParamProp(currentNode, ctx);
        break;
      case "TsParenthesizedType":
        this.tsParenthesizedType(currentNode, ctx);
        break;
      case "TsPropertySignature":
        this.tsPropertySignature(currentNode, ctx);
        break;
      case "TsQualifiedName":
        this.tsQualifiedName(currentNode, ctx);
        break;
      case "TsRestType":
        this.tsRestType(currentNode, ctx);
        break;
      case "TsThisType":
        this.tsThisType(currentNode, ctx);
        break;
      case "TsTplLitType":
        this.tsTplLitType(currentNode, ctx);
        break;
      case "TsTupleElement":
        this.tsTupleElement(currentNode, ctx);
        break;
      case "TsTupleType":
        this.tsTupleType(currentNode, ctx);
        break;
      case "TsTypeAliasDecl":
        this.tsTypeAliasDecl(currentNode, ctx);
        break;
      case "TsTypeAnn":
        this.tsTypeAnn(currentNode, ctx);
        break;
      case "TsTypeAssertion":
        this.tsTypeAssertion(currentNode, ctx);
        break;
      case "TsTypeLit":
        this.tsTypeLit(currentNode, ctx);
        break;
      case "TsTypeOperator":
        this.tsTypeOperator(currentNode, ctx);
        break;
      case "TsTypeParam":
        this.tsTypeParam(currentNode, ctx);
        break;
      case "TsTypeParamDecl":
        this.tsTypeParamDecl(currentNode, ctx);
        break;
      case "TsTypeParamInstantiation":
        this.tsTypeParamInstantiation(currentNode, ctx);
        break;
      case "TsTypePredicate":
        this.tsTypePredicate(currentNode, ctx);
        break;
      case "TsTypeQuery":
        this.tsTypeQuery(currentNode, ctx);
        break;
      case "TsTypeRef":
        this.tsTypeRef(currentNode, ctx);
        break;
      case "TsUnionType":
        this.tsUnionType(currentNode, ctx);
        break;
      case "UnaryExpr":
        this.unaryExpr(currentNode, ctx);
        break;
      case "UpdateExpr":
        this.updateExpr(currentNode, ctx);
        break;
      case "VarDecl":
        this.varDecl(currentNode, ctx);
        break;
      case "VarDeclarator":
        this.varDeclarator(currentNode, ctx);
        break;
      case "WhileStmt":
        this.whileStmt(currentNode, ctx);
        break;
      case "WithStmt":
        this.withStmt(currentNode, ctx);
        break;
      case "YieldExpr":
        this.yieldExpr(currentNode, ctx);
        break;
      default:
        assertUnreachable(currentNode);
    }

    for (const child of ctx.getChildrenOfNode(currentNode)) {
      this.__traverse(child, ctx);
    }
  }

  // entry point of a plugin, which is called from deno_lint
  __run(rootNode: Program) {
    this.__traverse(rootNode,this.__ctx);
  }
}
