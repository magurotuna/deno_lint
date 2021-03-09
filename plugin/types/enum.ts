import {
  ArrayLit,
  ArrayPat,
  ArrowExpr,
  AssignExpr,
  AssignPat,
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
  ExprStmt,
  FnDecl,
  FnExpr,
  ForInStmt,
  ForOfStmt,
  ForStmt,
  Ident,
  IfStmt,
  Invalid,
  JSXElement,
  JSXEmptyExpr,
  JSXFragment,
  JSXMemberExpr,
  JSXNamespacedName,
  JSXText,
  LabeledStmt,
  MemberExpr,
  MetaPropExpr,
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
  SeqExpr,
  Str,
  Super,
  SwitchStmt,
  TaggedTpl,
  ThisExpr,
  ThrowStmt,
  Tpl,
  TryStmt,
  TsAsExpr,
  TsConstAssertion,
  TsEnumDecl,
  TsIndexSignature,
  TsInterfaceDecl,
  TsModuleDecl,
  TsNonNullExpr,
  TsParamProp,
  TsTypeAliasDecl,
  TsTypeAssertion,
  UnaryExpr,
  UpdateExpr,
  VarDecl,
  WhileStmt,
  WithStmt,
  YieldExpr,
} from "./ast.ts";

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
