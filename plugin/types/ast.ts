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
  elems: ReadonlyArray<ExprOrSpread | null>;
}

export interface ArrayPat extends HasSpan {
  nodeKind: "ArrayPat";
  optional: boolean;
  elems: ReadonlyArray<Pat | null>;
  typeAnn: TsTypeAnn | null;
}

export interface ArrowExpr extends HasSpan {
  nodeKind: "ArrowExpr";
  isAsync: boolean;
  isGenerator: boolean;
  params: ReadonlyArray<Pat>;
  body: BodyStmtOrExpr;
  typeParams: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
}

export interface AssignExpr extends HasSpan {
  nodeKind: "AssignExpr";
  op: AssignOp;
  left: PatOrExpr;
  right: Expr;
}

export interface AssignPat extends HasSpan {
  nodeKind: "AssignPat";
  left: Pat;
  right: Expr;
  typeAnn: TsTypeAnn | null;
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
  arg: Expr;
}

export interface BigInt_ extends HasSpan {
  nodeKind: "BigInt";
  value: BigInt; // TODO(magurotuna): is it possible?
}

export interface BinExpr extends HasSpan {
  nodeKind: "BinExpr";
  op: BinaryOp;
  left: Expr;
  right: Expr;
}

export interface BindingIdent extends HasSpan {
  nodeKind: "BindingIdent";
  id: Ident;
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
  args: ReadonlyArray<ExprOrSpread>;
  typeArgs: TsTypeParamInstantiation | null;
}

export interface CatchClause extends HasSpan {
  nodeKind: "CatchClause";
  param: Pat | null;
  body: BlockStmt;
}

export interface Class extends HasSpan {
  nodeKind: "Class";
  isAbstract: boolean;
  decorators: ReadonlyArray<Decorator>;
  body: ReadonlyArray<ClassMember>;
  superClass: Expr | null;
  typsParams: TsTypeParamDecl | null;
  superTypeParams: TsTypeParamInstantiation | null;
  implements: ReadonlyArray<TsExprWithTypeArgs>;
}

export interface ClassDecl extends HasSpan {
  nodeKind: "ClassDecl";
  declare: boolean;
  ident: Ident;
  class: Class;
}

export interface ClassExpr extends HasSpan {
  nodeKind: "ClassExpr";
  ident: Ident | null;
  class: Class;
}

export interface ClassMethod extends HasSpan {
  nodeKind: "ClassMethod";
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
  key: PropName;
  function: Function_;
}

export interface ClassProp extends HasSpan {
  nodeKind: "ClassProp";
  isStatic: boolean;
  computed: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
  readonly: boolean;
  declare: boolean;
  definite: boolean;
  key: Expr;
  value: Expr | null;
  typeAnn: TsTypeAnn | null;
  decorators: ReadonlyArray<Decorator>;
}

export interface ComputedPropName extends HasSpan {
  nodeKind: "ComputedPropName";
  expr: Expr;
}

export interface CondExpr extends HasSpan {
  nodeKind: "CondExpr";
  test: Expr;
  cons: Expr;
  alt: Expr;
}

export interface Constructor extends HasSpan {
  nodeKind: "Constructor";
  accessibility: Accessibility | null;
  isOptional: boolean;
  key: PropName;
  params: ReadonlyArray<ParamOrTsParamProp>;
  body: BlockStmt | null;
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
  expr: Expr;
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
  src: Str;
  asserts: ObjectLit | null;
}

export interface ExportDecl extends HasSpan {
  nodeKind: "ExportDecl";
  decl: Decl;
}

export interface ExportDefaultDecl extends HasSpan {
  nodeKind: "ExportDefaultDecl";
  decl: DefaultDecl;
}

export interface ExportDefaultExpr extends HasSpan {
  nodeKind: "ExportDefaultExpr";
  expr: Expr;
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
  spread: Span | null;
  expr: Expr;
}

export interface ExprStmt extends HasSpan {
  nodeKind: "ExprStmt";
  expr: Expr;
}

export interface FnDecl extends HasSpan {
  nodeKind: "FnDecl";
  declare: boolean;
  ident: Ident;
  function: Function_;
}

export interface FnExpr extends HasSpan {
  nodeKind: "FnExpr";
  ident: Ident | null;
  function: Function_;
}

export interface ForInStmt extends HasSpan {
  nodeKind: "ForInStmt";
  left: VarDeclOrPat;
  right: Expr;
  body: Stmt;
}

export interface ForOfStmt extends HasSpan {
  nodeKind: "ForOfStmt";
  awaitToken: Span | null;
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
  isGenerator: boolean;
  isAsync: boolean;
  params: ReadonlyArray<Param>;
  decorators: ReadonlyArray<Decorator>;
  body: BlockStmt | null;
  typeParams: TsTypeParamDecl | null;
  returnType: TsTypeAnn | null;
}

export interface GetterProp extends HasSpan {
  nodeKind: "GetterProp";
  key: PropName;
  typeAnn: TsTypeAnn | null;
  body: BlockStmt | null;
}

export interface Ident extends HasSpan {
  nodeKind: "Ident";
  sym: string;
  optional: boolean;
}

export interface IfStmt extends HasSpan {
  nodeKind: "IfStmt";
  test: Expr;
  cons: Stmt;
  alt: Stmt | null;
}

export interface ImportDecl extends HasSpan {
  nodeKind: "ImportDecl";
  typeOnly: boolean;
  specifiers: ReadonlyArray<ImportSpecifier>;
  src: Str;
  asserts: ObjectLit | null;
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
  expr: JSXExpr;
}

export interface JSXFragment extends HasSpan {
  nodeKind: "JSXFragment";
  opening: JSXOpeningFragment;
  children: ReadonlyArray<JSXElementChild>;
  closing: JSXClosingFragment;
}

export interface JSXMemberExpr extends HasSpan {
  nodeKind: "JSXMemberExpr";
  obj: JSXObject;
  prop: Ident;
}

export interface JSXNamespacedName extends HasSpan {
  nodeKind: "JSXNamespacedName";
  ns: Ident;
  name: Ident;
}

export interface JSXOpeningElement extends HasSpan {
  nodeKind: "JSXOpeningElement";
  selfClosing: boolean;
  name: JSXElementName;
  attrs: ReadonlyArray<JSXAttrOrSpread>;
  typeArgs: TsTypeParamInstantiation | null;
}

export interface JSXOpeningFragment extends HasSpan {
  nodeKind: "JSXOpeningFragment";
}

export interface JSXSpreadChild extends HasSpan {
  nodeKind: "JSXSpreadChild";
  expr: Expr;
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
  value: Expr;
}

export interface LabeledStmt extends HasSpan {
  nodeKind: "LabeledStmt";
  label: Ident;
  body: Stmt;
}

export interface MemberExpr extends HasSpan {
  nodeKind: "MemberExpr";
  computed: boolean;
  obj: ExprOrSuper;
  prop: Expr;
}

export interface MetaPropExpr extends HasSpan {
  nodeKind: "MetaPropExpr";
  meta: Ident;
  prop: Ident;
}

export interface MethodProp extends HasSpan {
  nodeKind: "MethodProp";
  key: PropName;
  function: Function_;
}

export interface Module extends HasSpan {
  nodeKind: "Module";
  shebang: string | null;
  body: ReadonlyArray<ModuleItem>;
}

export interface NamedExport extends HasSpan {
  nodeKind: "NamedExport";
  typeOnly: boolean;
  specifiers: ReadonlyArray<ExportSpecifier>;
  src: Str | null;
  asserts: ObjectLit | null;
}

export interface NewExpr extends HasSpan {
  nodeKind: "NewExpr";
  callee: Expr;
  args: ReadonlyArray<ExprOrSpread> | null;
  typeArgs: TsTypeParamInstantiation | null;
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
  props: ReadonlyArray<PropOrSpread>;
}

export interface ObjectPat extends HasSpan {
  nodeKind: "ObjectPat";
  optional: boolean;
  props: ReadonlyArray<ObjectPatProp>;
  typeAnn: TsTypeAnn | null;
}

export interface OptChainExpr extends HasSpan {
  nodeKind: "OptChainExpr";
  questionDotToken: Span;
  expr: Expr;
}

export interface Param extends HasSpan {
  nodeKind: "Param";
  decorators: ReadonlyArray<Decorator>;
  pat: Pat;
}

export interface ParenExpr extends HasSpan {
  nodeKind: "ParenExpr";
  expr: Expr;
}

export interface PrivateMethod extends HasSpan {
  nodeKind: "PrivateMethod";
  kind: MethodKind;
  isStatic: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptional: boolean;
  key: PrivateName;
  function: Function_;
}

export interface PrivateName extends HasSpan {
  nodeKind: "PrivateName";
  id: Ident;
}

export interface PrivateProp extends HasSpan {
  nodeKind: "PrivateProp";
  isStatic: boolean;
  computed: boolean;
  accessibility: Accessibility | null;
  isAbstract: boolean;
  isOptiona: boolean;
  readonly: boolean;
  definite: boolean;
  key: PrivateName;
  value: Expr | null;
  typeAnn: TsTypeAnn | null;
  decorators: ReadonlyArray<Decorator>;
}

export interface Regex extends HasSpan {
  nodeKind: "Regex";
  exp: string;
  flags: string;
}

export interface RestPat extends HasSpan {
  nodeKind: "RestPat";
  dot3Token: Span;
  arg: Pat;
  typeAnn: TsTypeAnn | null;
}

export interface ReturnStmt extends HasSpan {
  nodeKind: "ReturnStmt";
  arg: Expr | null;
}

export interface Script extends HasSpan {
  nodeKind: "Script";
  shebang: string | null;
  body: ReadonlyArray<Stmt>;
}

export interface SeqExpr extends HasSpan {
  nodeKind: "SeqExpr";
  exprs: ReadonlyArray<Expr>;
}

export interface SetterProp extends HasSpan {
  nodeKind: "SetterProp";
  key: PropName;
  param: Pat;
  body: BlockStmt | null;
}

export interface SpreadElement extends HasSpan {
  nodeKind: "SpreadElement";
  dot3Token: Span;
  expr: Expr;
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
  cons: ReadonlyArray<Stmt>;
}

export interface SwitchStmt extends HasSpan {
  nodeKind: "SwitchStmt";
  descriminant: Expr;
  cases: ReadonlyArray<SwitchCase>;
}

export interface TaggedTpl extends HasSpan {
  nodeKind: "TaggedTpl";
  tag: Expr;
  exprs: ReadonlyArray<Expr>;
  quasis: ReadonlyArray<TplElement>;
  typeParams: TsTypeParamInstantiation | null;
}

export interface ThisExpr extends HasSpan {
  nodeKind: "ThisExpr";
}

export interface ThrowStmt extends HasSpan {
  nodeKind: "ThrowStmt";
  arg: Expr;
}

export interface Tpl extends HasSpan {
  nodeKind: "Tpl";
  exprs: ReadonlyArray<Expr>;
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
  expr: Expr;
  typeAnn: TsType;
}

export interface TsCallSignatureDecl extends HasSpan {
  nodeKind: "TsCallSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnn: TsTypeAnn | null;
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
  expr: Expr;
}

export interface TsConstructSignatureDecl extends HasSpan {
  nodeKind: "TsConstructSignatureDecl";
  params: ReadonlyArray<TsFnParam>;
  typeAnn: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsConstructorType extends HasSpan {
  nodeKind: "TsConstructorType";
  isAbstract: boolean;
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnn: TsTypeAnn;
}

export interface TsEnumDecl extends HasSpan {
  nodeKind: "TsEnumDecl";
  declare: boolean;
  isConst: boolean;
  id: Ident;
  members: ReadonlyArray<TsEnumMember>;
}

export interface TsEnumMember extends HasSpan {
  nodeKind: "TsEnumMember";
  id: TsEnumMemberId;
  init: Expr | null;
}

export interface TsExportAssignment extends HasSpan {
  nodeKind: "TsExportAssignment";
  expr: Expr;
}

export interface TsExprWithTypeArgs extends HasSpan {
  nodeKind: "TsExprWithTypeArgs";
  expr: TsEntityName;
  typeArgs: TsTypeParamInstantiation | null;
}

export interface TsExternalModuleRef extends HasSpan {
  nodeKind: "TsExternalModuleRef";
  expr: Str;
}

export interface TsFnType extends HasSpan {
  nodeKind: "TsFnType";
  params: ReadonlyArray<TsFnParam>;
  typeParams: TsTypeParamDecl | null;
  typeAnn: TsTypeAnn;
}

export interface TsImportEqualsDecl extends HasSpan {
  nodeKind: "TsImportEqualsDecl";
  declare: boolean;
  isExport: boolean;
  id: Ident;
  moduleRef: TsModuleRef;
}

export interface TsImportType extends HasSpan {
  nodeKind: "TsImportType";
  arg: Str;
  qualifier: TsEntityName | null;
  typeArgs: TsTypeParamInstantiation | null;
}

export interface TsIndexSignature extends HasSpan {
  nodeKind: "TsIndexSignature";
  readonly: boolean;
  params: ReadonlyArray<TsFnParam>;
  typeAnn: TsTypeAnn | null;
}

export interface TsIndexedAccessType extends HasSpan {
  nodeKind: "TsIndexedAccessType";
  readonly: boolean;
  objType: TsType;
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
  declare: boolean;
  id: Ident;
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
  lit: TsLit;
}

export interface TsMappedType extends HasSpan {
  nodeKind: "TsMappedType";
  readonly: TruePlusMinus | null;
  optional: TruePlusMinus | null;
  typeParam: TsTypeParam;
  nameType: TsType | null;
  typeAnnotation: TsType | null;
}

export interface TsMethodSignature extends HasSpan {
  nodeKind: "TsMethodSignature";
  readonly: boolean;
  computed: boolean;
  optional: boolean;
  key: Expr;
  params: ReadonlyArray<TsFnParam>;
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
  id: TsModuleName;
  body: TsNamespaceBody | null;
}

export interface TsNamespaceDecl extends HasSpan {
  nodeKind: "TsNamespaceDecl";
  declare: boolean;
  global: boolean;
  id: Ident;
  body: TsNamespaceBody;
}

export interface TsNamespaceExportDecl extends HasSpan {
  nodeKind: "TsNamespaceExportDecl";
  id: Ident;
}

export interface TsNonNullExpr extends HasSpan {
  nodeKind: "TsNonNullExpr";
  expr: Expr;
}

export interface TsOptionalType extends HasSpan {
  nodeKind: "TsOptionalType";
  typeAnn: TsType;
}

export interface TsParamProp extends HasSpan {
  nodeKind: "TsParamProp";
  accessibility: Accessibility | null;
  readonly: boolean;
  decorators: ReadonlyArray<Decorator>;
  param: TsParamPropParam;
}

export interface TsParenthesizedType extends HasSpan {
  nodeKind: "TsParenthesizedType";
  typeAnn: TsType;
}

export interface TsPropertySignature extends HasSpan {
  nodeKind: "TsPropertySignature";
  readonly: boolean;
  computed: boolean;
  optional: boolean;
  key: Expr;
  init: Expr | null;
  params: ReadonlyArray<TsFnParam>;
  typeAnn: TsTypeAnn | null;
  typeParams: TsTypeParamDecl | null;
}

export interface TsQualifiedName extends HasSpan {
  nodeKind: "TsQualifiedName";
  left: TsEntityName;
  right: Ident;
}

export interface TsRestType extends HasSpan {
  nodeKind: "TsRestType";
  typeAnn: TsType;
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
  ty: TsType;
}

export interface TsTupleType extends HasSpan {
  nodeKind: "TsTupleType";
  elemTypes: ReadonlyArray<TsTupleElement>;
}

export interface TsTypeAliasDecl extends HasSpan {
  nodeKind: "TsTypeAliasDecl";
  declare: boolean;
  id: Ident;
  typeParams: TsTypeParamDecl | null;
  typeAnn: TsType;
}

export interface TsTypeAnn extends HasSpan {
  nodeKind: "TsTypeAnn";
  typeAnn: TsType;
}

export interface TsTypeAssertion extends HasSpan {
  nodeKind: "TsTypeAssertion";
  expr: Expr;
  typeAnn: TsType;
}

export interface TsTypeLit extends HasSpan {
  nodeKind: "TsTypeLit";
  members: ReadonlyArray<TsTypeElement>;
}

export interface TsTypeOperator extends HasSpan {
  nodeKind: "TsTypeOperator";
  op: TsTypeOperatorOp;
  typeAnn: TsType;
}

export interface TsTypeParam extends HasSpan {
  nodeKind: "TsTypeParam";
  name: Ident;
  constraint: TsType | null;
  default: TsType | null;
}

export interface TsTypeParamDecl extends HasSpan {
  nodeKind: "TsTypeParamDecl";
  params: ReadonlyArray<TsTypeParam>;
}

export interface TsTypeParamInstantiation extends HasSpan {
  nodeKind: "TsTypeParamInstantiation";
  params: ReadonlyArray<TsType>;
}

export interface TsTypePredicate extends HasSpan {
  nodeKind: "TsTypePredicate";
  asserts: boolean;
  paramName: TsThisTypeOrIdent;
  typeAnn: TsTypeAnn | null;
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
  op: UnaryOp;
  arg: Expr;
}

export interface UpdateExpr extends HasSpan {
  nodeKind: "UpdateExpr";
  op: UpdateOp;
  prefix: boolean;
  arg: Expr;
}

export interface VarDecl extends HasSpan {
  nodeKind: "VarDecl";
  kind: VarDeclKind;
  declare: boolean;
  decls: ReadonlyArray<VarDeclarator>;
}

export interface VarDeclarator extends HasSpan {
  nodeKind: "VarDeclarator";
  definite: boolean;
  name: Pat;
  init: Expr | null;
}

export interface WhileStmt extends HasSpan {
  nodeKind: "WhileStmt";
  test: Expr;
  body: Stmt;
}

export interface WithStmt extends HasSpan {
  nodeKind: "WithStmt";
  obj: Expr;
  body: Stmt;
}

export interface YieldExpr extends HasSpan {
  nodeKind: "YieldExpr";
  delegate: boolean;
  arg: Expr | null;
}
