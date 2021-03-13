import type { HasSpan, Span } from "./common.ts";
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

export interface ArrayLit extends HasSpan {
  nodeKind: "ArrayLit";
  elements: ReadonlyArray<ExprOrSpread | null>;
}

export interface ArrayPat extends HasSpan {
  nodeKind: "ArrayPat";
  elements: ReadonlyArray<Pat | null>;
  typeAnnotation: TsTypeAnn | null;
  optional: boolean;
}

export interface ArrowExpr extends HasSpan {
  nodeKind: "ArrowExpr";
  params: ReadonlyArray<Pat>;
  body: BodyStmtOrExpr;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  async: boolean;
  generator: boolean;
}

export interface AssignExpr extends HasSpan {
  nodeKind: "AssignExpr";
  left: PatOrExpr;
  right: Expr;
  operator: AssignOp;
}

export interface AssignPat extends HasSpan {
  nodeKind: "AssignPat";
  left: Pat;
  right: Expr;
  typeAnnotation: TsTypeAnn | null;
}

export interface AssignPatProp extends HasSpan {
  nodeKind: "AssignPatProp";
  key: Ident;
  value: Expr | null;
}

export interface AssignProp extends HasSpan {
  nodeKind: "AssignProp";
  key: Ident;
  value: Expr;
}

export interface AwaitExpr extends HasSpan {
  nodeKind: "AwaitExpr";
  argument: Expr;
}

export interface BigInt_ extends HasSpan {
  nodeKind: "BigInt";
  value: BigInt; // TODO(magurotuna): is it possible?
}

export interface BinExpr extends HasSpan {
  nodeKind: "BinExpr";
  left: Expr;
  right: Expr;
  operator: BinaryOp;
}

export interface BindingIdent extends HasSpan {
  nodeKind: "BindingIdent";
  value: string;
  optional: boolean;
  typeAnnotation: TsTypeAnn | null;
}

export interface BlockStmt extends HasSpan {
  nodeKind: "BlockStmt";
  stmts: ReadonlyArray<Stmt>;
}

export interface Bool extends HasSpan {
  nodeKind: "Bool";
  value: boolean;
}

export interface BreakStmt extends HasSpan {
  nodeKind: "BreakStmt";
  label: Ident | null;
}

export interface CallExpr extends HasSpan {
  nodeKind: "CallExpr";
  callee: ExprOrSuper;
  arguments: ReadonlyArray<ExprOrSpread>;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface CatchClause extends HasSpan {
  nodeKind: "CatchClause";
  param: Pat | null;
  body: BlockStmt;
}

export interface Class extends HasSpan {
  nodeKind: "Class";
  decorators: ReadonlyArray<Decorator>;
  body: ReadonlyArray<ClassMember>;
  superClass: Expr | null;
  typsParams: TsTypeParamDecl | null;
  superTypeParams: TsTypeParamInstantiation | null;
  implements: ReadonlyArray<TsExprWithTypeArgs>;
  isAbstract: boolean;
}

export interface ClassDecl extends HasSpan {
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

export interface ClassExpr extends HasSpan {
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

export interface ClassMethod extends HasSpan {
  nodeKind: "ClassMethod";
  key: PropName;
  function: Function_;
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
}

export interface ClassProp extends HasSpan {
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

export interface ComputedPropName extends HasSpan {
  nodeKind: "ComputedPropName";
  expression: Expr;
}

export interface CondExpr extends HasSpan {
  nodeKind: "CondExpr";
  test: Expr;
  consequent: Expr;
  alternate: Expr;
}

export interface Constructor extends HasSpan {
  nodeKind: "Constructor";
  key: PropName;
  params: ReadonlyArray<ParamOrTsParamProp>;
  body: BlockStmt | null;
  accessibility: Accessibility | null;
  isOptional: boolean;
}

export interface ContinueStmt extends HasSpan {
  nodeKind: "ContinueStmt";
  label: Ident | null;
}

export interface DebuggerStmt extends HasSpan {
  nodeKind: "DebuggerStmt";
}

export interface Decorator extends HasSpan {
  nodeKind: "Decorator";
  expression: Expr;
}

export interface DoWhileStmt extends HasSpan {
  nodeKind: "DoWhileStmt";
  test: Expr;
  body: Stmt;
}

export interface EmptyStmt extends HasSpan {
  nodeKind: "EmptyStmt";
}

export interface ExportAll extends HasSpan {
  nodeKind: "ExportAll";
  source: Str;
  asserts: ObjectLit | null;
}

export interface ExportDecl extends HasSpan {
  nodeKind: "ExportDecl";
  declaration: Decl;
}

export interface ExportDefaultDecl extends HasSpan {
  nodeKind: "ExportDefaultDecl";
  // TODO(magurotuna): this is not "declaration" as of swc_ecma_ast 0.40.0
  decl: DefaultDecl;
}

export interface ExportDefaultExpr extends HasSpan {
  nodeKind: "ExportDefaultExpr";
  expression: Expr;
}

export interface ExportDefaultSpecifier extends HasSpan {
  nodeKind: "ExportDefaultSpecifier";
  exported: Ident;
}

export interface ExportNamedSpecifier extends HasSpan {
  nodeKind: "ExportNamedSpecifier";
  orig: Ident;
  exported: Ident | null;
}

export interface ExportNamespaceSpecifier extends HasSpan {
  nodeKind: "ExportNamespaceSpecifier";
  name: Ident;
}

export interface ExprOrSpread extends HasSpan {
  nodeKind: "ExprOrSpread";
  expression: Expr;
  spread: Span | null;
}

export interface ExprStmt extends HasSpan {
  nodeKind: "ExprStmt";
  expression: Expr;
}

export interface FnDecl extends HasSpan {
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

export interface FnExpr extends HasSpan {
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

export interface ForInStmt extends HasSpan {
  nodeKind: "ForInStmt";
  left: VarDeclOrPat;
  right: Expr;
  body: Stmt;
}

export interface ForOfStmt extends HasSpan {
  nodeKind: "ForOfStmt";
  await: Span | null;
  left: VarDeclOrPat;
  right: Expr;
  body: Stmt;
}

export interface ForStmt extends HasSpan {
  nodeKind: "ForStmt";
  init: VarDeclOrExpr | null;
  test: Expr | null;
  update: Expr | null;
  body: Stmt;
}

export interface Function_ extends HasSpan {
  nodeKind: "Function";
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParameters: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
  generator: boolean;
  async: boolean;
}

export interface GetterProp extends HasSpan {
  nodeKind: "GetterProp";
  key: PropName;
  typeAnnotation: TsTypeAnn | null;
  body: BlockStmt | null;
}

export interface Ident extends HasSpan {
  nodeKind: "Ident";
  value: string;
  optional: boolean;
}

export interface IfStmt extends HasSpan {
  nodeKind: "IfStmt";
  test: Expr;
  consequent: Stmt;
  alternate: Stmt | null;
}

export interface ImportDecl extends HasSpan {
  nodeKind: "ImportDecl";
  specifiers: ReadonlyArray<ImportSpecifier>;
  source: Str;
  asserts: ObjectLit | null;
  typeOnly: boolean;
}

export interface ImportDefaultSpecifier extends HasSpan {
  nodeKind: "ImportDefaultSpecifier";
  local: Ident;
}

export interface ImportNamedSpecifier extends HasSpan {
  nodeKind: "ImportNamedSpecifier";
  local: Ident;
  imported: Ident | null;
}

export interface ImportStarAsSpecifier extends HasSpan {
  nodeKind: "ImportStarAsSpecifier";
  local: Ident;
}

export interface Invalid extends HasSpan {
  nodeKind: "Invalid";
}

export interface JSXAttr extends HasSpan {
  nodeKind: "JSXAttr";
  name: JSXAttrName;
  value: JSXAttrValue | null;
}

export interface JSXClosingElement extends HasSpan {
  nodeKind: "JSXClosingElement";
  name: JSXElementName;
}

export interface JSXClosingFragment extends HasSpan {
  nodeKind: "JSXClosingFragment";
}

export interface JSXElement extends HasSpan {
  nodeKind: "JSXElement";
  opening: JSXOpeningElement;
  children: ReadonlyArray<JSXElementChild>;
  closing: JSXClosingElement | null;
}

export interface JSXEmptyExpr extends HasSpan {
  nodeKind: "JSXEmptyExpr";
}

export interface JSXExprContainer extends HasSpan {
  nodeKind: "JSXExprContainer";
  expression: JSXExpr;
}

export interface JSXFragment extends HasSpan {
  nodeKind: "JSXFragment";
  opening: JSXOpeningFragment;
  children: ReadonlyArray<JSXElementChild>;
  closing: JSXClosingFragment | null;
}

export interface JSXMemberExpr extends HasSpan {
  nodeKind: "JSXMemberExpr";
  object: JSXObject;
  property: Ident;
}

export interface JSXNamespacedName extends HasSpan {
  nodeKind: "JSXNamespacedName";
  namespace: Ident;
  name: Ident;
}

export interface JSXOpeningElement extends HasSpan {
  nodeKind: "JSXOpeningElement";
  attributes: ReadonlyArray<JSXAttrOrSpread>;
  selfClosing: boolean;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface JSXOpeningFragment extends HasSpan {
  nodeKind: "JSXOpeningFragment";
}

export interface JSXSpreadChild extends HasSpan {
  nodeKind: "JSXSpreadChild";
  expression: Expr;
}

export interface JSXText extends HasSpan {
  nodeKind: "JSXText";
  value: string;
  raw: string;
}

export interface KeyValuePatProp extends HasSpan {
  nodeKind: "KeyValuePatProp";
  key: PropName;
  value: Pat;
}

export interface KeyValueProp extends HasSpan {
  nodeKind: "KeyValueProp";
  key: PropName;
  value: Pat;
}

export interface LabeledStmt extends HasSpan {
  nodeKind: "LabeledStmt";
  label: Ident;
  body: Stmt;
}

export interface MemberExpr extends HasSpan {
  nodeKind: "MemberExpr";
  object: ExprOrSuper;
  property: Expr;
  computed: boolean;
}

export interface MetaPropExpr extends HasSpan {
  nodeKind: "MetaPropExpr";
  meta: Ident;
  property: Ident;
}

export interface MethodProp extends HasSpan {
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

export interface Module extends HasSpan {
  nodeKind: "Module";
  body: ReadonlyArray<ModuleItem>;
  interpreter: string | null;
}

export interface NamedExport extends HasSpan {
  nodeKind: "NamedExport";
  specifiers: ReadonlyArray<ExportSpecifier>;
  source: Str | null;
  typeOnly: boolean;
  asserts: ObjectLit | null;
}

export interface NewExpr extends HasSpan {
  nodeKind: "NewExpr";
  callee: Expr;
  arguments: ReadonlyArray<ExprOrSpread> | null;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface Null extends HasSpan {
  nodeKind: "Null";
}

export interface Number_ extends HasSpan {
  nodeKind: "Number";
  value: number;
}

export interface ObjectLit extends HasSpan {
  nodeKind: "ObjectLit";
  properties: ReadonlyArray<PropOrSpread>;
}

export interface ObjectPat extends HasSpan {
  nodeKind: "ObjectPat";
  properties: ReadonlyArray<ObjectPatProp>;
  optional: boolean;
  typeAnnotation: TsTypeAnn | null;
}

export interface OptChainExpr extends HasSpan {
  nodeKind: "OptChainExpr";
  questionDotToken: Span;
  // TODO(magurotuna): this is not "expression" as of swc_ecma_ast 0.40.0
  expr: Expr;
}

export interface Param extends HasSpan {
  nodeKind: "Param";
  decorators: ReadonlyArray<Decorator>;
  pat: Pat;
}

export interface ParenExpr extends HasSpan {
  nodeKind: "ParenExpr";
  expression: Expr;
}

export interface PrivateMethod extends HasSpan {
  nodeKind: "PrivateMethod";
  key: PrivateName;
  function: Function_;
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
}

export interface PrivateName extends HasSpan {
  nodeKind: "PrivateName";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
}

export interface PrivateProp extends HasSpan {
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

export interface Regex extends HasSpan {
  nodeKind: "Regex";
  pattern: string;
  flags: string;
}

export interface RestPat extends HasSpan {
  nodeKind: "RestPat";
  rest: Span;
  argument: Pat;
  typeAnnotation: TsTypeAnn | null;
}

export interface ReturnStmt extends HasSpan {
  nodeKind: "ReturnStmt";
  argument: Expr | null;
}

export interface Script extends HasSpan {
  nodeKind: "Script";
  body: ReadonlyArray<Stmt>;
  interpreter: string | null;
}

export interface SeqExpr extends HasSpan {
  nodeKind: "SeqExpr";
  expressions: ReadonlyArray<Expr>;
}

export interface SetterProp extends HasSpan {
  nodeKind: "SetterProp";
  key: PropName;
  param: Pat;
  body: BlockStmt | null;
}

export interface SpreadElement extends HasSpan {
  nodeKind: "SpreadElement";
  spread: Span;
  // FIXME(magurotuna): this should be `argument`?
  arguments: Expr;
}

export interface Str extends HasSpan {
  nodeKind: "Str";
  value: string;
  hasEscape: boolean;
  kind: StrKind;
}

export interface Super extends HasSpan {
  nodeKind: "Super";
}

export interface SwitchCase extends HasSpan {
  nodeKind: "SwitchCase";
  test: Expr | null;
  consequent: ReadonlyArray<Stmt>;
}

export interface SwitchStmt extends HasSpan {
  nodeKind: "SwitchStmt";
  descriminant: Expr;
  cases: ReadonlyArray<SwitchCase>;
}

export interface TaggedTpl extends HasSpan {
  nodeKind: "TaggedTpl";
  tag: Expr;
  expressions: ReadonlyArray<Expr>;
  quasis: ReadonlyArray<TplElement>;
  typeParameters: TsTypeParamInstantiation | null;
}

export interface ThisExpr extends HasSpan {
  nodeKind: "ThisExpr";
}

export interface ThrowStmt extends HasSpan {
  nodeKind: "ThrowStmt";
  argument: Expr;
}

export interface Tpl extends HasSpan {
  nodeKind: "Tpl";
  expressions: ReadonlyArray<Expr>;
  quasis: ReadonlyArray<TplElement>;
}

export interface TplElement extends HasSpan {
  nodeKind: "TplElement";
  tail: boolean;
  cooked: Str | null;
  raw: Str;
}

export interface TryStmt extends HasSpan {
  nodeKind: "TryStmt";
  block: BlockStmt;
  handler: CatchClause | null;
  finalizer: BlockStmt | null;
}

export interface TsArrayType extends HasSpan {
  nodeKind: "TsArrayType";
  elemType: TsType;
}

export interface TsAsExpr extends HasSpan {
  nodeKind: "TsAsExpr";
  expression: Expr;
  typeAnnotation: TsType;
}

export interface TsCallSignatureDecl extends HasSpan {
  nodeKind: "TsCallSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsConditionalType extends HasSpan {
  nodeKind: "TsConditionalType";
  checkType: TsType;
  extendsType: TsType;
  trueType: TsType;
  falseType: TsType;
}

export interface TsConstAssertion extends HasSpan {
  nodeKind: "TsConstAssertion";
  expression: Expr;
}

export interface TsConstructSignatureDecl extends HasSpan {
  nodeKind: "TsConstructSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsConstructorType extends HasSpan {
  nodeKind: "TsConstructorType";
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsTypeAnn;
  isAbstract: boolean;
}

export interface TsEnumDecl extends HasSpan {
  nodeKind: "TsEnumDecl";
  declare: boolean;
  isConst: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  members: ReadonlyArray<TsEnumMember>;
}

export interface TsEnumMember extends HasSpan {
  nodeKind: "TsEnumMember";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: TsEnumMemberId;
  init: Expr | null;
}

export interface TsExportAssignment extends HasSpan {
  nodeKind: "TsExportAssignment";
  expression: Expr;
}

export interface TsExprWithTypeArgs extends HasSpan {
  nodeKind: "TsExprWithTypeArgs";
  expression: TsEntityName;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface TsExternalModuleRef extends HasSpan {
  nodeKind: "TsExternalModuleRef";
  expression: Str;
}

export interface TsFnType extends HasSpan {
  nodeKind: "TsFnType";
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsTypeAnn;
}

export interface TsImportEqualsDecl extends HasSpan {
  nodeKind: "TsImportEqualsDecl";
  declare: boolean;
  isExport: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  moduleRef: TsModuleRef;
}

export interface TsImportType extends HasSpan {
  nodeKind: "TsImportType";
  argument: Str;
  qualifier: TsEntityName | null;
  typeArguments: TsTypeParamInstantiation | null;
}

export interface TsIndexSignature extends HasSpan {
  nodeKind: "TsIndexSignature";
  params: ReadonlyArray<TsFnParam>;
  typeAnnotation: TsTypeAnn | null;
  readonly: boolean;
}

export interface TsIndexedAccessType extends HasSpan {
  nodeKind: "TsIndexedAccessType";
  readonly: boolean;
  objectType: TsType;
  indexType: TsType;
}

export interface TsInferType extends HasSpan {
  nodeKind: "TsInferType";
  typeParam: TsTypeParam;
}

export interface TsInterfaceBody extends HasSpan {
  nodeKind: "TsInterfaceBody";
  body: ReadonlyArray<TsTypeElement>;
}

export interface TsInterfaceDecl extends HasSpan {
  nodeKind: "TsInterfaceDecl";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  declare: boolean;
  typeParams: TsTypeParamDecl | null;
  extends: ReadonlyArray<TsExprWithTypeArgs>;
  body: TsInterfaceBody;
}

export interface TsIntersectionType extends HasSpan {
  nodeKind: "TsIntersectionType";
  types: ReadonlyArray<TsType>;
}

export interface TsKeywordType extends HasSpan {
  nodeKind: "TsKeywordType";
  kind: TsKeywordTypeKind;
}

export interface TsLitType extends HasSpan {
  nodeKind: "TsLitType";
  literal: TsLit;
}

export interface TsMappedType extends HasSpan {
  nodeKind: "TsMappedType";
  readonly: TruePlusMinus | null;
  typeParam: TsTypeParam;
  nameType: TsType | null;
  optional: TruePlusMinus | null;
  typeAnnotation: TsType | null;
}

export interface TsMethodSignature extends HasSpan {
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

export interface TsModuleBlock extends HasSpan {
  nodeKind: "TsModuleBlock";
  body: ReadonlyArray<ModuleItem>;
}

export interface TsModuleDecl extends HasSpan {
  nodeKind: "TsModuleDecl";
  declare: boolean;
  global: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: TsModuleName;
  body: TsNamespaceBody | null;
}

export interface TsNamespaceDecl extends HasSpan {
  nodeKind: "TsNamespaceDecl";
  declare: boolean;
  global: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  body: TsNamespaceBody;
}

export interface TsNamespaceExportDecl extends HasSpan {
  nodeKind: "TsNamespaceExportDecl";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
}

export interface TsNonNullExpr extends HasSpan {
  nodeKind: "TsNonNullExpr";
  expression: Expr;
}

export interface TsOptionalType extends HasSpan {
  nodeKind: "TsOptionalType";
  typeAnnotation: TsType;
}

export interface TsParamProp extends HasSpan {
  nodeKind: "TsParamProp";
  decorators: ReadonlyArray<Decorator>;
  accessibility: Accessibility | null;
  readonly: boolean;
  param: TsParamPropParam;
}

export interface TsParenthesizedType extends HasSpan {
  nodeKind: "TsParenthesizedType";
  typeAnnotation: TsType;
}

export interface TsPropertySignature extends HasSpan {
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

export interface TsQualifiedName extends HasSpan {
  nodeKind: "TsQualifiedName";
  left: TsEntityName;
  right: Ident;
}

export interface TsRestType extends HasSpan {
  nodeKind: "TsRestType";
  typeAnnotation: TsType;
}

export interface TsThisType extends HasSpan {
  nodeKind: "TsThisType";
}

export interface TsTplLitType extends HasSpan {
  nodeKind: "TsTplLitType";
  types: ReadonlyArray<TsType>;
  quasis: ReadonlyArray<TplElement>;
}

export interface TsTupleElement extends HasSpan {
  nodeKind: "TsTupleElement";
  label: Pat | null;
  // TODO(magurotuna): this is not "type" as of swc_ecma_ast 0.40.0
  ty: TsType;
}

export interface TsTupleType extends HasSpan {
  nodeKind: "TsTupleType";
  elemTypes: ReadonlyArray<TsTupleElement>;
}

export interface TsTypeAliasDecl extends HasSpan {
  nodeKind: "TsTypeAliasDecl";
  declare: boolean;
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Ident;
  typeParams: TsTypeParamDecl | null;
  typeAnnotation: TsType;
}

export interface TsTypeAnn extends HasSpan {
  nodeKind: "TsTypeAnn";
  typeAnnotation: TsType;
}

export interface TsTypeAssertion extends HasSpan {
  nodeKind: "TsTypeAssertion";
  expression: Expr;
  typeAnnotation: TsType;
}

export interface TsTypeLit extends HasSpan {
  nodeKind: "TsTypeLit";
  members: ReadonlyArray<TsTypeElement>;
}

export interface TsTypeOperator extends HasSpan {
  nodeKind: "TsTypeOperator";
  // TODO(magurotuna): this is not "operator" as of swc_ecma_ast 0.40.0
  op: TsTypeOperatorOp;
  typeAnnotation: TsType;
}

export interface TsTypeParam extends HasSpan {
  nodeKind: "TsTypeParam";
  name: Ident;
  constraint: TsType | null;
  default: TsType | null;
}

export interface TsTypeParamDecl extends HasSpan {
  nodeKind: "TsTypeParamDecl";
  // TODO(magurotuna): should be "params"? "parameters"?
  parameters: ReadonlyArray<TsTypeParam>;
}

export interface TsTypeParamInstantiation extends HasSpan {
  nodeKind: "TsTypeParamInstantiation";
  // TODO(magurotuna): should be "params"? "parameters"?
  params: ReadonlyArray<TsType>;
}

export interface TsTypePredicate extends HasSpan {
  nodeKind: "TsTypePredicate";
  asserts: boolean;
  paramName: TsThisTypeOrIdent;
  typeAnnotation: TsTypeAnn | null;
}

export interface TsTypeQuery extends HasSpan {
  nodeKind: "TsTypeQuery";
  exprName: TsTypeQueryExpr;
}

export interface TsTypeRef extends HasSpan {
  nodeKind: "TsTypeRef";
  typeName: TsEntityName;
  typeParams: TsTypeParamInstantiation | null;
}

export interface TsUnionType extends HasSpan {
  nodeKind: "TsUnionType";
  types: ReadonlyArray<TsType>;
}

export interface UnaryExpr extends HasSpan {
  nodeKind: "UnaryExpr";
  operator: UnaryOp;
  argument: Expr;
}

export interface UpdateExpr extends HasSpan {
  nodeKind: "UpdateExpr";
  operator: UpdateOp;
  prefix: boolean;
  argument: Expr;
}

export interface VarDecl extends HasSpan {
  nodeKind: "VarDecl";
  kind: VarDeclKind;
  declare: boolean;
  declarations: ReadonlyArray<VarDeclarator>;
}

export interface VarDeclarator extends HasSpan {
  nodeKind: "VarDeclarator";
  // TODO(magurotuna): this is not "identifier" as of swc_ecma_ast 0.40.0
  id: Pat;
  init: Expr | null;
  definite: boolean;
}

export interface WhileStmt extends HasSpan {
  nodeKind: "WhileStmt";
  test: Expr;
  body: Stmt;
}

export interface WithStmt extends HasSpan {
  nodeKind: "WithStmt";
  object: Expr;
  body: Stmt;
}

export interface YieldExpr extends HasSpan {
  nodeKind: "YieldExpr";
  argument: Expr | null;
  delegate: boolean;
}
