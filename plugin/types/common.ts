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
} from "./ast.ts";

export type Node =
  | ArrayLit
  | ArrayPat
  | ArrowExpr
  | AssignExpr
  | AssignPat
  | AssignPatProp
  | AssignProp
  | AwaitExpr
  | BigInt_
  | BinExpr
  | BindingIdent
  | BlockStmt
  | Bool
  | BreakStmt
  | CallExpr
  | CatchClause
  | Class
  | ClassDecl
  | ClassExpr
  | ClassMethod
  | ClassProp
  | ComputedPropName
  | CondExpr
  | Constructor
  | ContinueStmt
  | DebuggerStmt
  | Decorator
  | DoWhileStmt
  | EmptyStmt
  | ExportAll
  | ExportDecl
  | ExportDefaultDecl
  | ExportDefaultExpr
  | ExportDefaultSpecifier
  | ExportNamedSpecifier
  | ExportNamespaceSpecifier
  | ExprOrSpread
  | ExprStmt
  | FnDecl
  | FnExpr
  | ForInStmt
  | ForOfStmt
  | ForStmt
  | Function_
  | GetterProp
  | Ident
  | IfStmt
  | ImportDecl
  | ImportDefaultSpecifier
  | ImportNamedSpecifier
  | ImportStarAsSpecifier
  | Invalid
  | JSXAttr
  | JSXClosingElement
  | JSXClosingFragment
  | JSXElement
  | JSXEmptyExpr
  | JSXExprContainer
  | JSXFragment
  | JSXMemberExpr
  | JSXNamespacedName
  | JSXOpeningElement
  | JSXOpeningFragment
  | JSXSpreadChild
  | JSXText
  | KeyValuePatProp
  | KeyValueProp
  | LabeledStmt
  | MemberExpr
  | MetaPropExpr
  | MethodProp
  | Module
  | NamedExport
  | NewExpr
  | Null
  | Number_
  | ObjectLit
  | ObjectPat
  | OptChainExpr
  | Param
  | ParenExpr
  | PrivateMethod
  | PrivateName
  | PrivateProp
  | Regex
  | RestPat
  | ReturnStmt
  | Script
  | SeqExpr
  | SetterProp
  | SpreadElement
  | Str
  | Super
  | SwitchCase
  | SwitchStmt
  | TaggedTpl
  | ThisExpr
  | ThrowStmt
  | Tpl
  | TplElement
  | TryStmt
  | TsArrayType
  | TsAsExpr
  | TsCallSignatureDecl
  | TsConditionalType
  | TsConstAssertion
  | TsConstructSignatureDecl
  | TsConstructorType
  | TsEnumDecl
  | TsEnumMember
  | TsExportAssignment
  | TsExprWithTypeArgs
  | TsExternalModuleRef
  | TsFnType
  | TsImportEqualsDecl
  | TsImportType
  | TsIndexSignature
  | TsIndexedAccessType
  | TsInferType
  | TsInterfaceBody
  | TsInterfaceDecl
  | TsIntersectionType
  | TsKeywordType
  | TsLitType
  | TsMappedType
  | TsMethodSignature
  | TsModuleBlock
  | TsModuleDecl
  | TsNamespaceDecl
  | TsNamespaceExportDecl
  | TsNonNullExpr
  | TsOptionalType
  | TsParamProp
  | TsParenthesizedType
  | TsPropertySignature
  | TsQualifiedName
  | TsRestType
  | TsThisType
  | TsTplLitType
  | TsTupleElement
  | TsTupleType
  | TsTypeAliasDecl
  | TsTypeAnn
  | TsTypeAssertion
  | TsTypeLit
  | TsTypeOperator
  | TsTypeParam
  | TsTypeParamDecl
  | TsTypeParamInstantiation
  | TsTypePredicate
  | TsTypeQuery
  | TsTypeRef
  | TsUnionType
  | UnaryExpr
  | UpdateExpr
  | VarDecl
  | VarDeclarator
  | WhileStmt
  | WithStmt
  | YieldExpr;

export type NodeKind = Node["nodeKind"];

export interface Span {
  start: number;
  end: number;
  ctxt: number;
}

export interface HasSpan {
  span: Span;
}
