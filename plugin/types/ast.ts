import { IntoNode, Spanned } from "./common.ts";
import {
  Accessibility,
  AssignOp,
  BinaryOp,
  BodyStmtOrExpr,
  ClassMember,
  Expr,
  ExprOrSuper,
  MethodKind,
  ParamOrTsParamProp,
  Pat,
  PatOrExpr,
  PropName,
  Stmt,
} from "./enum.ts";

export interface ArrayLit extends IntoNode, Spanned {
  kind: "ArrayLit";
  elems: () => ReadonlyArray<ExprOrSpread | null>;
}

export interface ArrayPat extends IntoNode, Spanned {
  kind: "ArrayPat";
  elems: () => ReadonlyArray<Pat | null>;
  typeAnn: () => TsTypeAnn | null;
  optional: () => boolean;
}

export interface ArrowExpr extends IntoNode, Spanned {
  kind: "ArrowExpr";
  params: () => ReadonlyArray<Pat>;
  body: () => BodyStmtOrExpr;
  typeParams: () => TsTypeParamDecl | null;
  returnType: () => TsTypeAnn | null;
  isAsync: () => boolean;
  isGenerator: () => boolean;
}

export interface AssignExpr extends IntoNode, Spanned {
  kind: "AssignExpr";
  left: () => PatOrExpr;
  right: () => Expr;
  op: () => AssignOp;
}

export interface AssignPat extends IntoNode, Spanned {
  kind: "AssignPat";
  left: () => Pat;
  right: () => Expr;
  type_ann: () => TsTypeAnn | null;
}

export interface AssignPatProp extends IntoNode, Spanned {
  kind: "AssignPatProp";
  key: () => Ident;
  value: () => Expr | null;
}

export interface AssignProp extends IntoNode, Spanned {
  kind: "AssignProp";
  key: () => Ident;
  value: () => Expr;
}

export interface AwaitExpr extends IntoNode, Spanned {
  kind: "AwaitExpr";
  arg: () => Expr;
}

export interface BigInt_ extends IntoNode, Spanned {
  kind: "BigInt";
  value: () => BigInt; // TODO(magurotuna): is it possible?
}

export interface BinExpr extends IntoNode, Spanned {
  kind: "BinExpr";
  left: () => Expr;
  right: () => Expr;
  op: () => BinaryOp;
}

export interface BindingIdent extends IntoNode, Spanned {
  kind: "BindingIdent";
  id: () => Ident;
  typeAnn: () => TsTypeAnn | null;
}

export interface BlockStmt extends IntoNode, Spanned {
  kind: "BlockStmt";
  stmts: ReadonlyArray<Stmt>;
}

export interface Bool extends IntoNode, Spanned {
  kind: "Bool";
  value: () => boolean;
}

export interface BreakStmt extends IntoNode, Spanned {
  kind: "BreakStmt";
  label: () => Ident | null;
}

export interface CallExpr extends IntoNode, Spanned {
  kind: "CallExpr";
  callee: () => ExprOrSuper;
  args: () => ReadonlyArray<ExprOrSpread>;
  typeArgs: () => TsTypeParamInstantiation | null;
}

export interface CatchClause extends IntoNode, Spanned {
  kind: "CatchClause";
  param: () => Pat | null;
  body: () => BlockStmt;
}

export interface Class extends IntoNode, Spanned {
  kind: "Class";
  decorators: () => ReadonlyArray<Decorator>;
  body: () => ReadonlyArray<ClassMember>;
  superClass: () => Expr | null;
  typsParams: () => TsTypeParamDecl | null;
  superTypeParams: () => TsTypeParamInstantiation | null;
  implements: () => ReadonlyArray<TsExprWithTypeArgs>;
  isAbstract: () => boolean;
}

export interface ClassDecl extends IntoNode, Spanned {
  kind: "ClassDecl";
  ident: () => Ident;
  class: () => Class;
  declare: () => boolean;
}

export interface ClassExpr extends IntoNode, Spanned {
  kind: "ClassExpr";
  ident: () => Ident | null;
  class: () => Class;
}

export interface ClassMethod extends IntoNode, Spanned {
  kind: "ClassMethod";
  key: () => PropName;
  function: () => Function_;
  methodKind: () => MethodKind;
  isStatic: () => boolean;
  accessibility: () => Accessibility | null;
  isAbstract: () => boolean;
  isOptional: () => boolean;
}

export interface ClassProp extends IntoNode, Spanned {
  kind: "ClassProp";
  key: () => Expr;
  value: () => Expr | null;
  typeAnn: () => TsTypeAnn | null;
  decorators: () => ReadonlyArray<Decorator>;
  isStatic: () => boolean;
  computed: () => boolean;
  accessibility: () => Accessibility | null;
  isAbstract: () => boolean;
  isOptional: () => boolean;
  readonly: () => boolean;
  declare: () => boolean;
  definite: () => boolean;
}

export interface ComputedPropName extends IntoNode, Spanned {
  kind: "ComputedPropName";
  expr: () => Expr;
}

export interface CondExpr extends IntoNode, Spanned {
  kind: "CondExpr";
  test: () => Expr;
  cons: () => Expr;
  alt: () => Expr;
}

export interface Constructor extends IntoNode, Spanned {
  kind: "Constructor";
  key: () => PropName;
  params: () => ReadonlyArray<ParamOrTsParamProp>;
  body: () => BlockStmt | null;
  accessibility: () => Accessibility | null;
  isOptional: () => boolean;
}

export interface ContinueStmt extends IntoNode, Spanned {
  kind: "ContinueStmt";
  label: () => Ident | null;
}

export interface DebuggerStmt extends IntoNode, Spanned {
  kind: "DebuggerStmt";
}

export interface Decorator extends IntoNode, Spanned {
  kind: "Decorator";
}

export interface DoWhileStmt extends IntoNode, Spanned {
  kind: "DoWhileStmt";
}

export interface EmptyStmt extends IntoNode, Spanned {
  kind: "EmptyStmt";
}

export interface ExportAll extends IntoNode, Spanned {
  kind: "ExportAll";
}

export interface ExportDecl extends IntoNode, Spanned {
  kind: "ExportDecl";
}

export interface ExportDefaultDecl extends IntoNode, Spanned {
  kind: "ExportDefaultDecl";
}

export interface ExportDefaultExpr extends IntoNode, Spanned {
  kind: "ExportDefaultExpr";
}

export interface ExportDefaultSpecifier extends IntoNode, Spanned {
  kind: "ExportDefaultSpecifier";
}

export interface ExportNamedSpecifier extends IntoNode, Spanned {
  kind: "ExportNamedSpecifier";
}

export interface ExportNamespaceSpecifier extends IntoNode, Spanned {
  kind: "ExportNamespaceSpecifier";
}

export interface ExprOrSpread extends IntoNode, Spanned {
  kind: "ExprOrSpread";
}

export interface ExprStmt extends IntoNode, Spanned {
  kind: "ExprStmt";
}

export interface FnDecl extends IntoNode, Spanned {
  kind: "FnDecl";
}

export interface FnExpr extends IntoNode, Spanned {
  kind: "FnExpr";
}

export interface ForInStmt extends IntoNode, Spanned {
  kind: "ForInStmt";
}

export interface ForOfStmt extends IntoNode, Spanned {
  kind: "ForOfStmt";
}

export interface ForStmt extends IntoNode, Spanned {
  kind: "ForStmt";
}

export interface Function_ extends IntoNode, Spanned {
  kind: "Function";
}

export interface GetterProp extends IntoNode, Spanned {
  kind: "GetterProp";
}

export interface Ident extends IntoNode, Spanned {
  kind: "Ident";
}

export interface IfStmt extends IntoNode, Spanned {
  kind: "IfStmt";
}

export interface ImportDecl extends IntoNode, Spanned {
  kind: "ImportDecl";
}

export interface ImportDefaultSpecifier extends IntoNode, Spanned {
  kind: "ImportDefaultSpecifier";
}

export interface ImportNamedSpecifier extends IntoNode, Spanned {
  kind: "ImportNamedSpecifier";
}

export interface ImportStarAsSpecifier extends IntoNode, Spanned {
  kind: "ImportStarAsSpecifier";
}

export interface Invalid extends IntoNode, Spanned {
  kind: "Invalid";
}

export interface JSXAttr extends IntoNode, Spanned {
  kind: "JSXAttr";
}

export interface JSXClosingElement extends IntoNode, Spanned {
  kind: "JSXClosingElement";
}

export interface JSXClosingFragment extends IntoNode, Spanned {
  kind: "JSXClosingFragment";
}

export interface JSXElement extends IntoNode, Spanned {
  kind: "JSXElement";
}

export interface JSXEmptyExpr extends IntoNode, Spanned {
  kind: "JSXEmptyExpr";
}

export interface JSXExprContainer extends IntoNode, Spanned {
  kind: "JSXExprContainer";
}

export interface JSXFragment extends IntoNode, Spanned {
  kind: "JSXFragment";
}

export interface JSXMemberExpr extends IntoNode, Spanned {
  kind: "JSXMemberExpr";
}

export interface JSXNamespacedName extends IntoNode, Spanned {
  kind: "JSXNamespacedName";
}

export interface JSXOpeningElement extends IntoNode, Spanned {
  kind: "JSXOpeningElement";
}

export interface JSXOpeningFragment extends IntoNode, Spanned {
  kind: "JSXOpeningFragment";
}

export interface JSXSpreadChild extends IntoNode, Spanned {
  kind: "JSXSpreadChild";
}

export interface JSXText extends IntoNode, Spanned {
  kind: "JSXText";
}

export interface KeyValuePatProp extends IntoNode, Spanned {
  kind: "KeyValuePatProp";
}

export interface KeyValueProp extends IntoNode, Spanned {
  kind: "KeyValueProp";
}

export interface LabeledStmt extends IntoNode, Spanned {
  kind: "LabeledStmt";
}

export interface MemberExpr extends IntoNode, Spanned {
  kind: "MemberExpr";
}

export interface MetaPropExpr extends IntoNode, Spanned {
  kind: "MetaPropExpr";
}

export interface MethodProp extends IntoNode, Spanned {
  kind: "MethodProp";
}

export interface Module extends IntoNode, Spanned {
  kind: "Module";
}

export interface NamedExport extends IntoNode, Spanned {
  kind: "NamedExport";
}

export interface NewExpr extends IntoNode, Spanned {
  kind: "NewExpr";
}

export interface Null extends IntoNode, Spanned {
  kind: "Null";
}

export interface Number_ extends IntoNode, Spanned {
  kind: "Number";
}

export interface ObjectLit extends IntoNode, Spanned {
  kind: "ObjectLit";
}

export interface ObjectPat extends IntoNode, Spanned {
  kind: "ObjectPat";
}

export interface OptChainExpr extends IntoNode, Spanned {
  kind: "OptChainExpr";
}

export interface Param extends IntoNode, Spanned {
  kind: "Param";
}

export interface ParenExpr extends IntoNode, Spanned {
  kind: "ParenExpr";
}

export interface PrivateMethod extends IntoNode, Spanned {
  kind: "PrivateMethod";
}

export interface PrivateName extends IntoNode, Spanned {
  kind: "PrivateName";
}

export interface PrivateProp extends IntoNode, Spanned {
  kind: "PrivateProp";
}

export interface Regex extends IntoNode, Spanned {
  kind: "Regex";
}

export interface RestPat extends IntoNode, Spanned {
  kind: "RestPat";
}

export interface ReturnStmt extends IntoNode, Spanned {
  kind: "ReturnStmt";
}

export interface Script extends IntoNode, Spanned {
  kind: "Script";
}

export interface SeqExpr extends IntoNode, Spanned {
  kind: "SeqExpr";
}

export interface SetterProp extends IntoNode, Spanned {
  kind: "SetterProp";
}

export interface SpreadElement extends IntoNode, Spanned {
  kind: "SpreadElement";
}

export interface Str extends IntoNode, Spanned {
  kind: "Str";
}

export interface Super extends IntoNode, Spanned {
  kind: "Super";
}

export interface SwitchCase extends IntoNode, Spanned {
  kind: "SwitchCase";
}

export interface SwitchStmt extends IntoNode, Spanned {
  kind: "SwitchStmt";
}

export interface TaggedTpl extends IntoNode, Spanned {
  kind: "TaggedTpl";
}

export interface ThisExpr extends IntoNode, Spanned {
  kind: "ThisExpr";
}

export interface ThrowStmt extends IntoNode, Spanned {
  kind: "ThrowStmt";
}

export interface Tpl extends IntoNode, Spanned {
  kind: "Tpl";
}

export interface TplElement extends IntoNode, Spanned {
  kind: "TplElement";
}

export interface TryStmt extends IntoNode, Spanned {
  kind: "TryStmt";
}

export interface TsArrayType extends IntoNode, Spanned {
  kind: "TsArrayType";
}

export interface TsAsExpr extends IntoNode, Spanned {
  kind: "TsAsExpr";
}

export interface TsCallSignatureDecl extends IntoNode, Spanned {
  kind: "TsCallSignatureDecl";
}

export interface TsConditionalType extends IntoNode, Spanned {
  kind: "TsConditionalType";
}

export interface TsConstAssertion extends IntoNode, Spanned {
  kind: "TsConstAssertion";
}

export interface TsConstructSignatureDecl extends IntoNode, Spanned {
  kind: "TsConstructSignatureDecl";
}

export interface TsConstructorType extends IntoNode, Spanned {
  kind: "TsConstructorType";
}

export interface TsEnumDecl extends IntoNode, Spanned {
  kind: "TsEnumDecl";
}

export interface TsEnumMember extends IntoNode, Spanned {
  kind: "TsEnumMember";
}

export interface TsExportAssignment extends IntoNode, Spanned {
  kind: "TsExportAssignment";
}

export interface TsExprWithTypeArgs extends IntoNode, Spanned {
  kind: "TsExprWithTypeArgs";
}

export interface TsExternalModuleRef extends IntoNode, Spanned {
  kind: "TsExternalModuleRef";
}

export interface TsFnType extends IntoNode, Spanned {
  kind: "TsFnType";
}

export interface TsImportEqualsDecl extends IntoNode, Spanned {
  kind: "TsImportEqualsDecl";
}

export interface TsImportType extends IntoNode, Spanned {
  kind: "TsImportType";
}

export interface TsIndexSignature extends IntoNode, Spanned {
  kind: "TsIndexSignature";
}

export interface TsIndexedAccessType extends IntoNode, Spanned {
  kind: "TsIndexedAccessType";
}

export interface TsInferType extends IntoNode, Spanned {
  kind: "TsInferType";
}

export interface TsInterfaceBody extends IntoNode, Spanned {
  kind: "TsInterfaceBodyextends IntoNode, Spanned ";
}

export interface TsInterfaceDecl extends IntoNode, Spanned {
  kind: "TsInterfaceDeclextends IntoNode, Spanned ";
}

export interface TsIntersectionType extends IntoNode, Spanned {
  kind: "TsIntersectionType";
}

export interface TsKeywordType extends IntoNode, Spanned {
  kind: "TsKeywordType";
}

export interface TsLitType extends IntoNode, Spanned {
  kind: "TsLitType";
}

export interface TsMappedType extends IntoNode, Spanned {
  kind: "TsMappedType";
}

export interface TsMethodSignature extends IntoNode, Spanned {
  kind: "TsMethodSignature";
}

export interface TsModuleBlock extends IntoNode, Spanned {
  kind: "TsModuleBlock";
}

export interface TsModuleDecl extends IntoNode, Spanned {
  kind: "TsModuleDecl";
}

export interface TsNamespaceDecl extends IntoNode, Spanned {
  kind: "TsNamespaceDecl";
}

export interface TsNamespaceExportDecl extends IntoNode, Spanned {
  kind: "TsNamespaceExportDecl";
}

export interface TsNonNullExpr extends IntoNode, Spanned {
  kind: "TsNonNullExpr";
}

export interface TsOptionalType extends IntoNode, Spanned {
  kind: "TsOptionalType";
}

export interface TsParamProp extends IntoNode, Spanned {
  kind: "TsParamProp";
}

export interface TsParenthesizedType extends IntoNode, Spanned {
  kind: "TsParenthesizedType";
}

export interface TsPropertySignature extends IntoNode, Spanned {
  kind: "TsPropertySignature";
}

export interface TsQualifiedName extends IntoNode, Spanned {
  kind: "TsQualifiedName";
}

export interface TsRestType extends IntoNode, Spanned {
  kind: "TsRestType";
}

export interface TsThisType extends IntoNode, Spanned {
  kind: "TsThisType";
}

export interface TsTplLitType extends IntoNode, Spanned {
  kind: "TsTplLitType";
}

export interface TsTupleElement extends IntoNode, Spanned {
  kind: "TsTupleElement";
}

export interface TsTupleType extends IntoNode, Spanned {
  kind: "TsTupleType";
}

export interface TsTypeAliasDecl extends IntoNode, Spanned {
  kind: "TsTypeAliasDecl";
}

export interface TsTypeAnn extends IntoNode, Spanned {
  kind: "TsTypeAnn";
}

export interface TsTypeAssertion extends IntoNode, Spanned {
  kind: "TsTypeAssertion";
}

export interface TsTypeLit extends IntoNode, Spanned {
  kind: "TsTypeLit";
}

export interface TsTypeOperator extends IntoNode, Spanned {
  kind: "TsTypeOperator";
}

export interface TsTypeParam extends IntoNode, Spanned {
  kind: "TsTypeParam";
}

export interface TsTypeParamDecl extends IntoNode, Spanned {
  kind: "TsTypeParamDecl";
}

export interface TsTypeParamInstantiation extends IntoNode, Spanned {
  kind: "TsTypeParamInstantiation";
}

export interface TsTypePredicate extends IntoNode, Spanned {
  kind: "TsTypePredicate";
}

export interface TsTypeQuery extends IntoNode, Spanned {
  kind: "TsTypeQuery";
}

export interface TsTypeRef extends IntoNode, Spanned {
  kind: "TsTypeRef";
}

export interface TsUnionType extends IntoNode, Spanned {
  kind: "TsUnionType";
}

export interface UnaryExpr extends IntoNode, Spanned {
  kind: "UnaryExpr";
}

export interface UpdateExpr extends IntoNode, Spanned {
  kind: "UpdateExpr";
}

export interface VarDecl extends IntoNode, Spanned {
  kind: "VarDecl";
}

export interface VarDeclarator extends IntoNode, Spanned {
  kind: "VarDeclarator";
}

export interface WhileStmt extends IntoNode, Spanned {
  kind: "WhileStmt";
}

export interface WithStmt extends IntoNode, Spanned {
  kind: "WithStmt";
}

export interface YieldExpr extends IntoNode, Spanned {
  kind: "YieldExpr";
}
