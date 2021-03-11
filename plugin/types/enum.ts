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
  ClassDecl,
  ClassExpr,
  ClassMethod,
  ClassProp,
  ComputedPropName,
  CondExpr,
  Constructor,
  ContinueStmt,
  DebuggerStmt,
  DoWhileStmt,
  EmptyStmt,
  ExportAll,
  ExportDecl,
  ExportDefaultDecl,
  ExportDefaultExpr,
  ExportDefaultSpecifier,
  ExportNamedSpecifier,
  ExportNamespaceSpecifier,
  ExprStmt,
  FnDecl,
  FnExpr,
  ForInStmt,
  ForOfStmt,
  ForStmt,
  GetterProp,
  Ident,
  IfStmt,
  ImportDecl,
  ImportDefaultSpecifier,
  ImportNamedSpecifier,
  ImportStarAsSpecifier,
  Invalid,
  JSXAttr,
  JSXElement,
  JSXEmptyExpr,
  JSXExprContainer,
  JSXFragment,
  JSXMemberExpr,
  JSXNamespacedName,
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
  SwitchStmt,
  TaggedTpl,
  ThisExpr,
  ThrowStmt,
  Tpl,
  TryStmt,
  TsArrayType,
  TsAsExpr,
  TsCallSignatureDecl,
  TsConditionalType,
  TsConstAssertion,
  TsConstructorType,
  TsConstructSignatureDecl,
  TsEnumDecl,
  TsExportAssignment,
  TsExternalModuleRef,
  TsFnType,
  TsImportEqualsDecl,
  TsImportType,
  TsIndexedAccessType,
  TsIndexSignature,
  TsInferType,
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
  TsTupleType,
  TsTypeAliasDecl,
  TsTypeAssertion,
  TsTypeLit,
  TsTypeOperator,
  TsTypePredicate,
  TsTypeQuery,
  TsTypeRef,
  TsUnionType,
  UnaryExpr,
  UpdateExpr,
  VarDecl,
  WhileStmt,
  WithStmt,
  YieldExpr,
} from "./ast.ts";

export type Program = Module | Script;

export type ModuleItem = ModuleDecl | Stmt;

export type ModuleDecl =
  | ImportDecl
  | ExportDecl
  | NamedExport
  | ExportDefaultDecl
  | ExportDefaultExpr
  | ExportAll
  | TsImportEqualsDecl
  | TsExportAssignment
  | TsNamespaceExportDecl;

export type Pat =
  | BindingIdent
  | ArrayPat
  | RestPat
  | ObjectPat
  | AssignPat
  | Invalid
  | Expr;

export type Expr =
  | ThisExpr
  | ArrayLit
  | ObjectLit
  | FnExpr
  | UnaryExpr
  | UpdateExpr
  | BinExpr
  | AssignExpr
  | MemberExpr
  | CondExpr
  | CallExpr
  | NewExpr
  | SeqExpr
  | Ident
  | Lit
  | Tpl
  | TaggedTpl
  | ArrowExpr
  | ClassExpr
  | YieldExpr
  | MetaPropExpr
  | AwaitExpr
  | ParenExpr
  | JSXMemberExpr
  | JSXNamespacedName
  | JSXEmptyExpr
  | JSXElement
  | JSXFragment
  | TsTypeAssertion
  | TsConstAssertion
  | TsNonNullExpr
  | TsAsExpr
  | PrivateName
  | OptChainExpr
  | Invalid;

export type Stmt =
  | BlockStmt
  | EmptyStmt
  | DebuggerStmt
  | WithStmt
  | ReturnStmt
  | LabeledStmt
  | BreakStmt
  | ContinueStmt
  | IfStmt
  | SwitchStmt
  | ThrowStmt
  | TryStmt
  | WhileStmt
  | DoWhileStmt
  | ForStmt
  | ForInStmt
  | ForOfStmt
  | Decl
  | ExprStmt;

export type Decl =
  | ClassDecl
  | FnDecl
  | VarDecl
  | TsInterfaceDecl
  | TsTypeAliasDecl
  | TsEnumDecl
  | TsModuleDecl;

export type DefaultDecl =
  | ClassExpr
  | FnExpr
  | TsInterfaceDecl;

export type ImportSpecifier =
  | ImportNamedSpecifier
  | ImportDefaultSpecifier
  | ImportStarAsSpecifier;

export type ExportSpecifier =
  | ExportNamespaceSpecifier
  | ExportDefaultSpecifier
  | ExportNamedSpecifier;

export type Lit =
  | Str
  | Bool
  | Null
  | Number_
  | BigInt_
  | Regex
  | JSXText;

export type BodyStmtOrExpr = BlockStmt | Expr;

export type PatOrExpr = Expr | Pat;

export type VarDeclOrPat = VarDecl | Pat;

export type VarDeclOrExpr = VarDecl | Expr;

export type Prop =
  | Ident
  | KeyValueProp
  | AssignProp
  | GetterProp
  | SetterProp
  | MethodProp;

export type PropOrSpread = SpreadElement | Prop;

export type ObjectPatProp = KeyValuePatProp | AssignPatProp | RestPat;

export type PropName =
  | Ident
  | Str
  | Number_
  | ComputedPropName
  | BigInt_;

export type ClassMember =
  | Constructor
  | ClassMethod
  | PrivateMethod
  | ClassProp
  | PrivateProp
  | TsIndexSignature
  | EmptyStmt;

export type ExprOrSuper = Super | Expr;

export type ParamOrTsParamProp = TsParamProp | Param;

export type VarDeclKind = "var" | "let" | "const";

export type MethodKind = "method" | "getter" | "setter";

export type Accessibility = "public" | "protected" | "private";

export type AssignOp =
  | Assign
  | AddAssign
  | SubAssign
  | MulAssign
  | DivAssign
  | ModAssign
  | LShiftAssign
  | RShiftAssign
  | ZeroFillRShiftAssign
  | BitOrAssign
  | BitXorAssign
  | BitAndAssign
  | ExpAssign
  | AndAssign
  | OrAssign
  | NullishAssign;
export type Assign = "=";
export type AddAssign = "+=";
export type SubAssign = "-=";
export type MulAssign = "*=";
export type DivAssign = "/=";
export type ModAssign = "%=";
export type LShiftAssign = "<<=";
export type RShiftAssign = ">>=";
export type ZeroFillRShiftAssign = ">>>=";
export type BitOrAssign = "|=";
export type BitXorAssign = "^=";
export type BitAndAssign = "&=";
export type ExpAssign = "**=";
export type AndAssign = "&&=";
export type OrAssign = "||=";
export type NullishAssign = "??=";

export type BinaryOp =
  | EqEq
  | NotEq
  | EqEqEq
  | NotEqEq
  | Lt
  | LtEq
  | Gt
  | GtEq
  | LShift
  | RShift
  | ZeroFillRShift
  | Add
  | Sub
  | Mul
  | Div
  | Mod
  | BitOr
  | BitXor
  | BitAnd
  | LogicalOr
  | LogicalAnd
  | In
  | InstanceOf
  | Exp
  | NullishCoalescing;
export type EqEq = "==";
export type NotEq = "!=";
export type EqEqEq = "===";
export type NotEqEq = "!==";
export type Lt = "<";
export type LtEq = "<=";
export type Gt = ">";
export type GtEq = ">=";
export type LShift = "<<";
export type RShift = ">>";
export type ZeroFillRShift = ">>>";
export type Add = "+";
export type Sub = "-";
export type Mul = "*";
export type Div = "/";
export type Mod = "%";
export type BitOr = "|";
export type BitXor = "^";
export type BitAnd = "&";
export type LogicalOr = "||";
export type LogicalAnd = "&&";
export type In = "in";
export type InstanceOf = "instanceof";
export type Exp = "**";
export type NullishCoalescing = "??";

export type UnaryOp = "-" | "+" | "!" | "~" | "typeof" | "void" | "delete";

export type UpdateOp = "++" | "--";

export type TruePlusMinus = true | "+" | "-";

interface Normal {
  type: "normal";
  containsQuote: boolean;
}

interface Synthesized {
  type: "synthesized";
}

export type StrKind = Normal | Synthesized;

////////////////////////////////////////
// JSX
////////////////////////////////////////

export type JSXAttrName = Ident | JSXNamespacedName;

export type JSXAttrValue =
  | Lit
  | JSXExprContainer
  | JSXElement
  | JSXFragment;

export type JSXElementName =
  | Ident
  | JSXMemberExpr
  | JSXNamespacedName;

export type JSXElementChild =
  | JSXText
  | JSXExprContainer
  | JSXSpreadChild
  | JSXElement
  | JSXFragment;

export type JSXExpr = JSXEmptyExpr | Expr;

export type JSXObject = JSXMemberExpr | Ident;

export type JSXAttrOrSpread = JSXAttr | SpreadElement;

////////////////////////////////////////
// TypeScript
////////////////////////////////////////

export type TsType =
  | TsKeywordType
  | TsThisType
  | TsFnOrConstructorType
  | TsTypeRef
  | TsTypeQuery
  | TsTypeLit
  | TsArrayType
  | TsTupleType
  | TsOptionalType
  | TsRestType
  | TsUnionOrIntersectionType
  | TsConditionalType
  | TsInferType
  | TsParenthesizedType
  | TsTypeOperator
  | TsIndexedAccessType
  | TsMappedType
  | TsLitType
  | TsTypePredicate
  | TsImportType;

export type TsFnOrConstructorType = TsFnType | TsConstructorType;

export type TsUnionOrIntersectionType = TsUnionType | TsIntersectionType;

export type TsFnParam = BindingIdent | ArrayPat | RestPat | ObjectPat;

export type TsEnumMemberId = Ident | Str;

export type TsEntityName = TsQualifiedName | Ident;

export type TsModuleRef = TsEntityName | TsExternalModuleRef;

export type TsTypeElement =
  | TsCallSignatureDecl
  | TsConstructSignatureDecl
  | TsPropertySignature
  | TsMethodSignature
  | TsIndexSignature;

export type TsLit = Number | Str | Bool | BigInt | TsTplLitType;

export type TsModuleName = Ident | Str;

export type TsNamespaceBody = TsModuleBlock | TsNamespaceDecl;

export type TsParamPropParam = BindingIdent | AssignPat;

export type TsThisTypeOrIdent = TsThisType | Ident;

export type TsTypeQueryExpr = TsEntityName | TsImportType;

export type TsKeywordTypeKind =
  | "any"
  | "unknown"
  | "number"
  | "object"
  | "boolean"
  | "bigint"
  | "string"
  | "symbol"
  | "void"
  | "undefined"
  | "null"
  | "never"
  | "intrinsic";

export type TsTypeOperatorOp = "keyof" | "unique" | "readonly";
