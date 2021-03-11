import type { HasSpan, Span, Traverse } from "./common.ts";
import type {
  Accessibility,
  AssignOp,
  BinaryOp,
  BodyStmtOrExpr,
  ClassMember,
  Decl,
  DefaultDecl,
  ExportSpecifier,
  Expr,
  ExprOrSuper,
  ImportSpecifier,
  JSXAttrName,
  JSXAttrOrSpread,
  JSXAttrValue,
  JSXElementChild,
  JSXElementName,
  JSXExpr,
  JSXObject,
  MethodKind,
  ModuleItem,
  ObjectPatProp,
  ParamOrTsParamProp,
  Pat,
  PatOrExpr,
  PropName,
  PropOrSpread,
  Stmt,
  StrKind,
  TruePlusMinus,
  TsEntityName,
  TsEnumMemberId,
  TsFnParam,
  TsKeywordTypeKind,
  TsLit,
  TsModuleName,
  TsModuleRef,
  TsNamespaceBody,
  TsParamPropParam,
  TsThisTypeOrIdent,
  TsType,
  TsTypeElement,
  TsTypeOperatorOp,
  TsTypeQueryExpr,
  UnaryOp,
  UpdateOp,
  VarDeclKind,
  VarDeclOrExpr,
  VarDeclOrPat,
} from "./enum.ts";

export interface ArrayLit extends Traverse, HasSpan {
  nodeKind: "ArrayLit";
  elements: ReadonlyArray<ExprOrSpread | null>;
}

export interface ArrayPat extends Traverse, HasSpan {
  nodeKind: "ArrayPat";
  elements: ReadonlyArray<Pat | null>;
  typeAnnotation: TsTypeAnn | null;
  optional: boolean;
}

export interface ArrowExpr extends Traverse, HasSpan {
  nodeKind: "ArrowExpr";
  params: ReadonlyArray<Pat>;
  body: BodyStmtOrExpr;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  async: boolean;
  generator: boolean;
}

export interface AssignExpr extends Traverse, HasSpan {
  nodeKind: "AssignExpr";
  left: PatOrExpr;
  right: Expr;
  operator: AssignOp;
}

export interface AssignPat extends Traverse, HasSpan {
  nodeKind: "AssignPat";
  left: Pat;
  right: Expr;
  typeAnnotation: TsTypeAnn | null;
}

export interface AssignPatProp extends Traverse, HasSpan {
  nodeKind: "AssignPatProp";
  key: Ident;
  value: Expr | null;
}

export interface AssignProp extends Traverse, HasSpan {
  nodeKind: "AssignProp";
  key: Ident;
  value: Expr;
}

export interface AwaitExpr extends Traverse, HasSpan {
  nodeKind: "AwaitExpr";
  argument: Expr;
}

export interface BigInt_ extends Traverse, HasSpan {
  nodeKind: "BigInt";
  value: BigInt; // TODO(magurotuna): is it possible?
}

export interface BinExpr extends Traverse, HasSpan {
  nodeKind: "BinExpr";
  left: Expr;
  right: Expr;
  operator: BinaryOp;
}

export interface BindingIdent extends Traverse, HasSpan {
  nodeKind: "BindingIdent";
  value: string;
  optional: boolean;
  typeAnnotation: TsTypeAnn | null;
}

export interface BlockStmt extends Traverse, HasSpan {
  nodeKind: "BlockStmt";
  stmts: ReadonlyArray<Stmt>;
}

export interface Bool extends Traverse, HasSpan {
  nodeKind: "Bool";
  value: boolean;
}

export interface BreakStmt extends Traverse, HasSpan {
  nodeKind: "BreakStmt";
  label: Ident | null;
}

export interface CallExpr extends Traverse, HasSpan {
  nodeKind: "CallExpr";
  callee: ExprOrSuper;
  arguments: ReadonlyArray<ExprOrSpread>;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface CatchClause extends Traverse, HasSpan {
  nodeKind: "CatchClause";
  param: Pat | null;
  body: BlockStmt;
}

export interface Class extends Traverse, HasSpan {
  nodeKind: "Class";
  decorators: ReadonlyArray<Decorator>;
  body: ReadonlyArray<ClassMember>;
  superClass: Expr | null;
  typsParams: TsTypeParamDecl | null;
  superTypeParams: TsTypeParamInstantiation | null;
  implements: ReadonlyArray<TsExprWithTypeArgs>;
  isAbstract: boolean;
}

export interface ClassDecl extends Traverse, HasSpan {
  nodeKind: "ClassDecl";
  identifier: Ident;
  declare: boolean;
  decorators: ReadonlyArray<Decorator>;
  body: ReadonlyArray<ClassMember>;
  superClass: Expr | null;
  typsParams: TsTypeParamDecl | null;
  superTypeParams: TsTypeParamInstantiation | null;
  implements: ReadonlyArray<TsExprWithTypeArgs>;
  isAbstract: boolean;
}

export interface ClassExpr extends Traverse, HasSpan {
  nodeKind: "ClassExpr";
  identifier: Ident | null;
  decorators: ReadonlyArray<Decorator>;
  body: ReadonlyArray<ClassMember>;
  superClass: Expr | null;
  typsParams: TsTypeParamDecl | null;
  superTypeParams: TsTypeParamInstantiation | null;
  implements: ReadonlyArray<TsExprWithTypeArgs>;
  isAbstract: boolean;
}

export interface ClassMethod extends Traverse, HasSpan {
  nodeKind: "ClassMethod";
  key: PropName;
  function: Function_;
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
}

export interface ClassProp extends Traverse, HasSpan {
  nodeKind: "ClassProp";
  key: Expr;
  value: Expr | null;
  typeAnnotation: TsTypeAnn | null;
  decorators: ReadonlyArray<Decorator>;
  isStatic: boolean;
  computed: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
  readonly: boolean;
  declare: boolean;
  definite: boolean;
}

export interface ComputedPropName extends Traverse, HasSpan {
  nodeKind: "ComputedPropName";
  expression: Expr;
}

export interface CondExpr extends Traverse, HasSpan {
  nodeKind: "CondExpr";
  test: Expr;
  consequent: Expr;
  alternate: Expr;
}

export interface Constructor extends Traverse, HasSpan {
  nodeKind: "Constructor";
  key: PropName;
  params: ReadonlyArray<ParamOrTsParamProp>;
  body: BlockStmt | null;
  accessibility: Accessibility | null;
  isOptional: boolean;
}

export interface ContinueStmt extends Traverse, HasSpan {
  nodeKind: "ContinueStmt";
  label: Ident | null;
}

export interface DebuggerStmt extends Traverse, HasSpan {
  nodeKind: "DebuggerStmt";
}

export interface Decorator extends Traverse, HasSpan {
  nodeKind: "Decorator";
  expression: Expr;
}

export interface DoWhileStmt extends Traverse, HasSpan {
  nodeKind: "DoWhileStmt";
  test: Expr;
  body: Stmt;
}

export interface EmptyStmt extends Traverse, HasSpan {
  nodeKind: "EmptyStmt";
}

export interface ExportAll extends Traverse, HasSpan {
  nodeKind: "ExportAll";
  source: Str;
  asserts: ObjectLit | null;
}

export interface ExportDecl extends Traverse, HasSpan {
  nodeKind: "ExportDecl";
  declaration: Decl;
}

export interface ExportDefaultDecl extends Traverse, HasSpan {
  nodeKind: "ExportDefaultDecl";
  // TODO(magurotuna): this is not "declaration" as of swc_ecma_ast 0.40.0
  decl: DefaultDecl;
}

export interface ExportDefaultExpr extends Traverse, HasSpan {
  nodeKind: "ExportDefaultExpr";
  expression: Expr;
}

export interface ExportDefaultSpecifier extends Traverse, HasSpan {
  nodeKind: "ExportDefaultSpecifier";
  exported: Ident;
}

export interface ExportNamedSpecifier extends Traverse, HasSpan {
  nodeKind: "ExportNamedSpecifier";
  orig: Ident;
  exported: Ident | null;
}

export interface ExportNamespaceSpecifier extends Traverse, HasSpan {
  nodeKind: "ExportNamespaceSpecifier";
  name: Ident;
}

export interface ExprOrSpread extends Traverse, HasSpan {
  nodeKind: "ExprOrSpread";
  expression: Expr;
  spread: Span | null;
}

export interface ExprStmt extends Traverse, HasSpan {
  nodeKind: "ExprStmt";
  expression: Expr;
}

export interface FnDecl extends Traverse, HasSpan {
  nodeKind: "FnDecl";
  identifier: Ident;
  declare: boolean;
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  generator: boolean;
  async: boolean;
}

export interface FnExpr extends Traverse, HasSpan {
  nodeKind: "FnExpr";
  identifier: Ident | null;
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  generator: boolean;
  async: boolean;
}

export interface ForInStmt extends Traverse, HasSpan {
  nodeKind: "ForInStmt";
  left: VarDeclOrPat;
  right: Expr;
  body: Stmt;
}

export interface ForOfStmt extends Traverse, HasSpan {
  nodeKind: "ForOfStmt";
  await: Span | null;
  left: VarDeclOrPat;
  right: Expr;
  body: Stmt;
}

export interface ForStmt extends Traverse, HasSpan {
  nodeKind: "ForStmt";
  init: VarDeclOrExpr | null;
  test: Expr | null;
  update: Expr | null;
  body: Stmt;
}

export interface Function_ extends Traverse, HasSpan {
  nodeKind: "Function";
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  generator: boolean;
  async: boolean;
}

export interface GetterProp extends Traverse, HasSpan {
  nodeKind: "GetterProp";
  key: PropName;
  typeAnnotation: TsTypeAnn | null;
  body: BlockStmt | null;
}

export interface Ident extends Traverse, HasSpan {
  nodeKind: "Ident";
  value: string;
  optional: boolean;
}

export interface IfStmt extends Traverse, HasSpan {
  nodeKind: "IfStmt";
  test: Expr;
  consequent: Stmt;
  alternate: Stmt | null;
}

export interface ImportDecl extends Traverse, HasSpan {
  nodeKind: "ImportDecl";
  specifiers: ReadonlyArray<ImportSpecifier>;
  source: Str;
  asserts: ObjectLit | null;
  typeOnly: boolean;
}

export interface ImportDefaultSpecifier extends Traverse, HasSpan {
  nodeKind: "ImportDefaultSpecifier";
  local: Ident;
}

export interface ImportNamedSpecifier extends Traverse, HasSpan {
  nodeKind: "ImportNamedSpecifier";
  local: Ident;
  imported: Ident | null;
}

export interface ImportStarAsSpecifier extends Traverse, HasSpan {
  nodeKind: "ImportStarAsSpecifier";
  local: Ident;
}

export interface Invalid extends Traverse, HasSpan {
  nodeKind: "Invalid";
}

export interface JSXAttr extends Traverse, HasSpan {
  nodeKind: "JSXAttr";
  name: JSXAttrName;
  value: JSXAttrValue | null;
}

export interface JSXClosingElement extends Traverse, HasSpan {
  nodeKind: "JSXClosingElement";
  name: JSXElementName;
}

export interface JSXClosingFragment extends Traverse, HasSpan {
  nodeKind: "JSXClosingFragment";
}

export interface JSXElement extends Traverse, HasSpan {
  nodeKind: "JSXElement";
  opening: JSXOpeningElement;
  children: ReadonlyArray<JSXElementChild>;
  closing: JSXClosingElement | null;
}

export interface JSXEmptyExpr extends Traverse, HasSpan {
  nodeKind: "JSXEmptyExpr";
}

export interface JSXExprContainer extends Traverse, HasSpan {
  nodeKind: "JSXExprContainer";
  expression: JSXExpr;
}

export interface JSXFragment extends Traverse, HasSpan {
  nodeKind: "JSXFragment";
  opening: JSXOpeningFragment;
  children: ReadonlyArray<JSXElementChild>;
  closing: JSXClosingFragment | null;
}

export interface JSXMemberExpr extends Traverse, HasSpan {
  nodeKind: "JSXMemberExpr";
  object: JSXObject;
  property: Ident;
}

export interface JSXNamespacedName extends Traverse, HasSpan {
  nodeKind: "JSXNamespacedName";
  namespace: Ident;
  name: Ident;
}

export interface JSXOpeningElement extends Traverse, HasSpan {
  nodeKind: "JSXOpeningElement";
  attributes: ReadonlyArray<JSXAttrOrSpread>;
  selfClosing: boolean;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface JSXOpeningFragment extends Traverse, HasSpan {
  nodeKind: "JSXOpeningFragment";
}

export interface JSXSpreadChild extends Traverse, HasSpan {
  nodeKind: "JSXSpreadChild";
  expression: Expr;
}

export interface JSXText extends Traverse, HasSpan {
  nodeKind: "JSXText";
  value: string;
  raw: string;
}

export interface KeyValuePatProp extends Traverse, HasSpan {
  nodeKind: "KeyValuePatProp";
  key: PropName;
  value: Pat;
}

export interface KeyValueProp extends Traverse, HasSpan {
  nodeKind: "KeyValueProp";
  key: PropName;
  value: Pat;
}

export interface LabeledStmt extends Traverse, HasSpan {
  nodeKind: "LabeledStmt";
  label: Ident;
  body: Stmt;
}

export interface MemberExpr extends Traverse, HasSpan {
  nodeKind: "MemberExpr";
  object: ExprOrSuper;
  property: Expr;
  computed: boolean;
}

export interface MetaPropExpr extends Traverse, HasSpan {
  nodeKind: "MetaPropExpr";
  meta: Ident;
  property: Ident;
}

export interface MethodProp extends Traverse, HasSpan {
  nodeKind: "MethodProp";
  key: PropName;
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  generator: boolean;
  async: boolean;
}

export interface Module extends Traverse, HasSpan {
  nodeKind: "Module";
  body: ReadonlyArray<ModuleItem>;
  interpreter: string | null;
}

export interface NamedExport extends Traverse, HasSpan {
  nodeKind: "NamedExport";
  specifiers: ReadonlyArray<ExportSpecifier>;
  source: Str | null;
  typeOnly: boolean;
  asserts: ObjectLit | null;
}

export interface NewExpr extends Traverse, HasSpan {
  nodeKind: "NewExpr";
  callee: Expr;
  arguments: ReadonlyArray<ExprOrSpread> | null;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface Null extends Traverse, HasSpan {
  nodeKind: "Null";
}

export interface Number_ extends Traverse, HasSpan {
  nodeKind: "Number";
  value: number;
}

export interface ObjectLit extends Traverse, HasSpan {
  nodeKind: "ObjectLit";
  properties: ReadonlyArray<PropOrSpread>;
}

export interface ObjectPat extends Traverse, HasSpan {
  nodeKind: "ObjectPat";
  properties: ReadonlyArray<ObjectPatProp>;
  optional: boolean;
  typeAnnotation: TsTypeAnn | null;
}

export interface OptChainExpr extends Traverse, HasSpan {
  nodeKind: "OptChainExpr";
  questionDotToken: Span;
  // TODO(magurotuna): this is not "expression" as of swc_ecma_ast 0.40.0
  expr: Expr;
}

export interface Param extends Traverse, HasSpan {
  nodeKind: "Param";
  decorators: ReadonlyArray<Decorator>;
  pat: Pat;
}

export interface ParenExpr extends Traverse, HasSpan {
  nodeKind: "ParenExpr";
  expression: Expr;
}

export interface PrivateMethod extends Traverse, HasSpan {
  nodeKind: "PrivateMethod";
  key: PrivateName;
  function: Function_;
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
}

export interface PrivateName extends Traverse, HasSpan {
  nodeKind: "PrivateName";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
}

export interface PrivateProp extends Traverse, HasSpan {
  nodeKind: "PrivateProp";
  key: PrivateName;
  value: Expr | null;
  typeAnnotation: TsTypeAnn | null;
  isStatic: boolean;
  decorators: ReadonlyArray<Decorator>;
  computed: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptiona: boolean;
  readonly: boolean;
  definite: boolean;
}

export interface Regex extends Traverse, HasSpan {
  nodeKind: "Regex";
  pattern: string;
  flags: string;
}

export interface RestPat extends Traverse, HasSpan {
  nodeKind: "RestPat";
  rest: Span;
  argument: Pat;
  typeAnnotation: TsTypeAnn | null;
}

export interface ReturnStmt extends Traverse, HasSpan {
  nodeKind: "ReturnStmt";
  argument: Expr | null;
}

export interface Script extends Traverse, HasSpan {
  nodeKind: "Script";
  body: ReadonlyArray<Stmt>;
  interpreter: string | null;
}

export interface SeqExpr extends Traverse, HasSpan {
  nodeKind: "SeqExpr";
  expressions: ReadonlyArray<Expr>;
}

export interface SetterProp extends Traverse, HasSpan {
  nodeKind: "SetterProp";
  key: PropName;
  param: Pat;
  body: BlockStmt | null;
}

export interface SpreadElement extends Traverse, HasSpan {
  nodeKind: "SpreadElement";
  spread: Span;
  // FIXME(magurotuna): this should be `argument`?
  arguments: Expr;
}

export interface Str extends Traverse, HasSpan {
  nodeKind: "Str";
  value: string;
  hasEscape: boolean;
  kind: StrKind;
}

export interface Super extends Traverse, HasSpan {
  nodeKind: "Super";
}

export interface SwitchCase extends Traverse, HasSpan {
  nodeKind: "SwitchCase";
  test: Expr | null;
  consequent: ReadonlyArray<Stmt>;
}

export interface SwitchStmt extends Traverse, HasSpan {
  nodeKind: "SwitchStmt";
  descriminant: Expr;
  cases: ReadonlyArray<SwitchCase>;
}

export interface TaggedTpl extends Traverse, HasSpan {
  nodeKind: "TaggedTpl";
  tag: Expr;
  expressions: ReadonlyArray<Expr>;
  quasis: ReadonlyArray<TplElement>;
  typeParameters: TsTypeParamInstantiation | null;
}

export interface ThisExpr extends Traverse, HasSpan {
  nodeKind: "ThisExpr";
}

export interface ThrowStmt extends Traverse, HasSpan {
  nodeKind: "ThrowStmt";
  argument: Expr;
}

export interface Tpl extends Traverse, HasSpan {
  nodeKind: "Tpl";
  expressions: ReadonlyArray<Expr>;
  quasis: ReadonlyArray<TplElement>;
}

export interface TplElement extends Traverse, HasSpan {
  nodeKind: "TplElement";
  tail: boolean;
  cooked: Str | null;
  raw: Str;
}

export interface TryStmt extends Traverse, HasSpan {
  nodeKind: "TryStmt";
  block: BlockStmt;
  handler: CatchClause | null;
  finalizer: BlockStmt | null;
}

export interface TsArrayType extends Traverse, HasSpan {
  nodeKind: "TsArrayType";
  elemType: TsType;
}

export interface TsAsExpr extends Traverse, HasSpan {
  nodeKind: "TsAsExpr";
  expression: Expr;
  typeAnnotation: TsType;
}

export interface TsCallSignatureDecl extends Traverse, HasSpan {
  nodeKind: "TsCallSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsConditionalType extends Traverse, HasSpan {
  nodeKind: "TsConditionalType";
  checkType: TsType;
  extendsType: TsType;
  trueType: TsType;
  falseType: TsType;
}

export interface TsConstAssertion extends Traverse, HasSpan {
  nodeKind: "TsConstAssertion";
  expression: Expr;
}

export interface TsConstructSignatureDecl extends Traverse, HasSpan {
  nodeKind: "TsConstructSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsConstructorType extends Traverse, HasSpan {
  nodeKind: "TsConstructorType";
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsTypeAnn;
  isAbstract: boolean;
}

export interface TsEnumDecl extends Traverse, HasSpan {
  nodeKind: "TsEnumDecl";
  declare: boolean;
  isConst: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  members: ReadonlyArray<TsEnumMember>;
}

export interface TsEnumMember extends Traverse, HasSpan {
  nodeKind: "TsEnumMember";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: TsEnumMemberId;
  init: Expr | null;
}

export interface TsExportAssignment extends Traverse, HasSpan {
  nodeKind: "TsExportAssignment";
  expression: Expr;
}

export interface TsExprWithTypeArgs extends Traverse, HasSpan {
  nodeKind: "TsExprWithTypeArgs";
  expression: TsEntityName;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface TsExternalModuleRef extends Traverse, HasSpan {
  nodeKind: "TsExternalModuleRef";
  expression: Str;
}

export interface TsFnType extends Traverse, HasSpan {
  nodeKind: "TsFnType";
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsTypeAnn;
}

export interface TsImportEqualsDecl extends Traverse, HasSpan {
  nodeKind: "TsImportEqualsDecl";
  declare: boolean;
  isExport: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  moduleRef: TsModuleRef;
}

export interface TsImportType extends Traverse, HasSpan {
  nodeKind: "TsImportType";
  argument: Str;
  qualifier: TsEntityName | null;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface TsIndexSignature extends Traverse, HasSpan {
  nodeKind: "TsIndexSignature";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  readonly: boolean;
}

export interface TsIndexedAccessType extends Traverse, HasSpan {
  nodeKind: "TsIndexedAccessType";
  readonly: boolean;
  objectType: TsType;
  indexType: TsType;
}

export interface TsInferType extends Traverse, HasSpan {
  nodeKind: "TsInferType";
  typeParam: TsTypeParam;
}

export interface TsInterfaceBody extends Traverse, HasSpan {
  nodeKind: "TsInterfaceBody";
  body: ReadonlyArray<TsTypeElement>;
}

export interface TsInterfaceDecl extends Traverse, HasSpan {
  nodeKind: "TsInterfaceDecl";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  declare: boolean;
  typeParams: TsTypeParamDecl | null;
  extends: ReadonlyArray<TsExprWithTypeArgs>;
  body: TsInterfaceBody;
}

export interface TsIntersectionType extends Traverse, HasSpan {
  nodeKind: "TsIntersectionType";
  types: ReadonlyArray<TsType>;
}

export interface TsKeywordType extends Traverse, HasSpan {
  nodeKind: "TsKeywordType";
  kind: TsKeywordTypeKind;
}

export interface TsLitType extends Traverse, HasSpan {
  nodeKind: "TsLitType";
  literal: TsLit;
}

export interface TsMappedType extends Traverse, HasSpan {
  nodeKind: "TsMappedType";
  readonly: TruePlusMinus | null;
  typeParam: TsTypeParam;
  nameType: TsType | null;
  optional: TruePlusMinus | null;
  typeAnnotation: TsType | null;
}

export interface TsMethodSignature extends Traverse, HasSpan {
  nodeKind: "TsMethodSignature";
  readonly: boolean;
  key: Expr;
  computed: boolean;
  optional: boolean;
  params: ReadonlyArray<TsFnParam>;
  // TODO(magurotuna): this is not "typeAnnotation" as of swc_ecma_ast 0.40.0
  typeAnn: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsModuleBlock extends Traverse, HasSpan {
  nodeKind: "TsModuleBlock";
  body: ReadonlyArray<ModuleItem>;
}

export interface TsModuleDecl extends Traverse, HasSpan {
  nodeKind: "TsModuleDecl";
  declare: boolean;
  global: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: TsModuleName;
  body: TsNamespaceBody | null;
}

export interface TsNamespaceDecl extends Traverse, HasSpan {
  nodeKind: "TsNamespaceDecl";
  declare: boolean;
  global: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  body: TsNamespaceBody;
}

export interface TsNamespaceExportDecl extends Traverse, HasSpan {
  nodeKind: "TsNamespaceExportDecl";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
}

export interface TsNonNullExpr extends Traverse, HasSpan {
  nodeKind: "TsNonNullExpr";
  expression: Expr;
}

export interface TsOptionalType extends Traverse, HasSpan {
  nodeKind: "TsOptionalType";
  typeAnnotation: TsType;
}

export interface TsParamProp extends Traverse, HasSpan {
  nodeKind: "TsParamProp";
  decorators: ReadonlyArray<Decorator>;
  accessibility: Accessibility | null;
  readonly: boolean;
  param: TsParamPropParam;
}

export interface TsParenthesizedType extends Traverse, HasSpan {
  nodeKind: "TsParenthesizedType";
  typeAnnotation: TsType;
}

export interface TsPropertySignature extends Traverse, HasSpan {
  nodeKind: "TsPropertySignature";
  readonly: boolean;
  key: Expr;
  computed: boolean;
  optional: boolean;
  init: Expr | null;
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsQualifiedName extends Traverse, HasSpan {
  nodeKind: "TsQualifiedName";
  left: TsEntityName;
  right: Ident;
}

export interface TsRestType extends Traverse, HasSpan {
  nodeKind: "TsRestType";
  typeAnnotation: TsType;
}

export interface TsThisType extends Traverse, HasSpan {
  nodeKind: "TsThisType";
}

export interface TsTplLitType extends Traverse, HasSpan {
  nodeKind: "TsTplLitType";
  types: ReadonlyArray<TsType>;
  quasis: ReadonlyArray<TplElement>;
}

export interface TsTupleElement extends Traverse, HasSpan {
  nodeKind: "TsTupleElement";
  label: Pat | null;
  // TODO(magurotuna): this is not "type" as of swc_ecma_ast 0.40.0
  ty: TsType;
}

export interface TsTupleType extends Traverse, HasSpan {
  nodeKind: "TsTupleType";
  elemTypes: ReadonlyArray<TsTupleElement>;
}

export interface TsTypeAliasDecl extends Traverse, HasSpan {
  nodeKind: "TsTypeAliasDecl";
  declare: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsType;
}

export interface TsTypeAnn extends Traverse, HasSpan {
  nodeKind: "TsTypeAnn";
  typeAnnotation: TsType;
}

export interface TsTypeAssertion extends Traverse, HasSpan {
  nodeKind: "TsTypeAssertion";
  expression: Expr;
  typeAnnotation: TsType;
}

export interface TsTypeLit extends Traverse, HasSpan {
  nodeKind: "TsTypeLit";
  members: ReadonlyArray<TsTypeElement>;
}

export interface TsTypeOperator extends Traverse, HasSpan {
  nodeKind: "TsTypeOperator";
  // TODO(magurotuna): this is not "operator" as of swc_ecma_ast 0.40.0
  op: TsTypeOperatorOp;
  typeAnnotation: TsType;
}

export interface TsTypeParam extends Traverse, HasSpan {
  nodeKind: "TsTypeParam";
  name: Ident;
  constraint: TsType | null;
  default: TsType | null;
}

export interface TsTypeParamDecl extends Traverse, HasSpan {
  nodeKind: "TsTypeParamDecl";
  // TODO(magurotuna): should be "params"? "parameters"?
  parameters: ReadonlyArray<TsTypeParam>;
}

export interface TsTypeParamInstantiation extends Traverse, HasSpan {
  nodeKind: "TsTypeParamInstantiation";
  // TODO(magurotuna): should be "params"? "parameters"?
  params: ReadonlyArray<TsType>;
}

export interface TsTypePredicate extends Traverse, HasSpan {
  nodeKind: "TsTypePredicate";
  asserts: boolean;
  paramName: TsThisTypeOrIdent;
  typeAnnotation: TsTypeAnn | null;
}

export interface TsTypeQuery extends Traverse, HasSpan {
  nodeKind: "TsTypeQuery";
  exprName: TsTypeQueryExpr;
}

export interface TsTypeRef extends Traverse, HasSpan {
  nodeKind: "TsTypeRef";
  typeName: TsEntityName;
  typeParams: TsTypeParamInstantiation | null;
}

export interface TsUnionType extends Traverse, HasSpan {
  nodeKind: "TsUnionType";
  types: ReadonlyArray<TsType>;
}

export interface UnaryExpr extends Traverse, HasSpan {
  nodeKind: "UnaryExpr";
  operator: UnaryOp;
  argument: Expr;
}

export interface UpdateExpr extends Traverse, HasSpan {
  nodeKind: "UpdateExpr";
  operator: UpdateOp;
  prefix: boolean;
  argument: Expr;
}

export interface VarDecl extends Traverse, HasSpan {
  nodeKind: "VarDecl";
  kind: VarDeclKind;
  declare: boolean;
  declarations: ReadonlyArray<VarDeclarator>;
}

export interface VarDeclarator extends Traverse, HasSpan {
  nodeKind: "VarDeclarator";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Pat;
  init: Expr | null;
  definite: boolean;
}

export interface WhileStmt extends Traverse, HasSpan {
  nodeKind: "WhileStmt";
  test: Expr;
  body: Stmt;
}

export interface WithStmt extends Traverse, HasSpan {
  nodeKind: "WithStmt";
  object: Expr;
  body: Stmt;
}

export interface YieldExpr extends Traverse, HasSpan {
  nodeKind: "YieldExpr";
  argument: Expr | null;
  delegate: boolean;
}
