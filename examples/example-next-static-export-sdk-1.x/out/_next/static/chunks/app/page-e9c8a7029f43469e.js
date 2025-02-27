(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{430:(e,t,l)=>{Promise.resolve().then(l.bind(l,4588))},4588:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>s});var i=l(2776),n=l(9969),a=l(8563),o=l(3780);let r=function(){let e=(0,a.useRouter)(),[t,l]=(0,o.useState)(n.A.auth.token);return(0,o.useEffect)(()=>{(null==n.A.auth.token||n.A.auth.token.isExpired)&&n.A.auth.refresh().then(()=>{l(n.A.auth.token)}).catch(()=>{e.push("/login")})},[e]),null!=t&&!t.isExpired};var p=l(5326),y=l.n(p);let s=function(){if(!r())return null;let e=Object.keys(n.A.ontology.objects),t=Object.keys(n.A.ontology.actions),l=Object.keys(n.A.ontology.queries);return(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"@osdk/e2e.generated.1.1.x"}),(0,i.jsx)("p",{children:"Welcome to your Ontology SDK! Try using any of the following methods now."}),(0,i.jsxs)("div",{className:y().methods,children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["Objects (",e.length,")"]}),e.map(e=>(0,i.jsxs)("pre",{children:["client.ontology.objects.",e]},e))]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["Actions (",t.length,")"]}),t.map(e=>(0,i.jsxs)("pre",{children:["client.ontology.actions.",e]},e))]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["Queries (",l.length,")"]}),l.map(e=>(0,i.jsxs)("pre",{children:["client.ontology.queries.",e]},e))]})]})]})}},9969:(e,t,l)=>{"use strict";l.d(t,{A:()=>d});var i=l(4706),n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,p={};((e,t)=>{for(var l in t)n(e,l,{get:t[l],enumerable:!0})})(p,{FoundryClient:()=>s}),((e,t,l,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let p of o(t))r.call(e,p)||p===l||n(e,p,{get:()=>t[p],enumerable:!(i=a(t,p))||i.enumerable})})(p,i,"default");var y={metadata:{ontologyRid:"ridHere",ontologyApiName:"OntologyApiName",userAgent:"typescript-sdk/dev osdk-cli/dev"},objects:{Todo:{apiName:"Todo",description:"Its a todo item.",links:{Assignee:{multiplicity:!1,targetType:"Person"}},primaryKeyApiName:"id",primaryKeyType:"integer",properties:{id:{multiplicity:!1,type:"integer",nullable:!0},body:{displayName:"Body",multiplicity:!1,description:"The text of the todo",type:"string",nullable:!0},complete:{multiplicity:!1,type:"boolean",nullable:!0}},type:"object"},Person:{apiName:"Person",description:"A person",links:{Todos:{multiplicity:!0,targetType:"Todo"},Friends:{multiplicity:!0,targetType:"Person"}},primaryKeyApiName:"email",primaryKeyType:"string",properties:{email:{multiplicity:!1,type:"string",nullable:!0}},type:"object"},ObjectTypeWithAllPropertyTypes:{apiName:"ObjectTypeWithAllPropertyTypes",description:"A type with all property types",links:{},primaryKeyApiName:"id",primaryKeyType:"integer",properties:{id:{multiplicity:!1,type:"integer",nullable:!0},string:{multiplicity:!1,type:"string",nullable:!0},boolean:{multiplicity:!1,type:"boolean",nullable:!0},date:{multiplicity:!1,type:"datetime",nullable:!0},dateTime:{multiplicity:!1,type:"timestamp",nullable:!0},decimal:{multiplicity:!1,type:"decimal",nullable:!0},integer:{multiplicity:!1,type:"integer",nullable:!0},long:{multiplicity:!1,type:"long",nullable:!0},short:{multiplicity:!1,type:"short",nullable:!0},float:{multiplicity:!1,type:"float",nullable:!0},double:{multiplicity:!1,type:"double",nullable:!0},byte:{multiplicity:!1,type:"byte",nullable:!0},attachment:{multiplicity:!1,type:"attachment",nullable:!0},geoPoint:{multiplicity:!1,type:"geopoint",nullable:!0},geoShape:{multiplicity:!1,type:"geoshape",nullable:!0},stringArray:{multiplicity:!0,type:"string",nullable:!0},booleanArray:{multiplicity:!0,type:"boolean",nullable:!0},dateArray:{multiplicity:!0,type:"datetime",nullable:!0},dateTimeArray:{multiplicity:!0,type:"timestamp",nullable:!0},decimalArray:{multiplicity:!0,type:"decimal",nullable:!0},integerArray:{multiplicity:!0,type:"integer",nullable:!0},longArray:{multiplicity:!0,type:"long",nullable:!0},shortArray:{multiplicity:!0,type:"short",nullable:!0},floatArray:{multiplicity:!0,type:"float",nullable:!0},doubleArray:{multiplicity:!0,type:"double",nullable:!0},byteArray:{multiplicity:!0,type:"byte",nullable:!0},attachmentArray:{multiplicity:!0,type:"attachment",nullable:!0},geoPointArray:{multiplicity:!0,type:"geopoint",nullable:!0},geoShapeArray:{multiplicity:!0,type:"geoshape",nullable:!0},numericTimeseries:{multiplicity:!1,type:"numericTimeseries",nullable:!0},stringTimeseries:{multiplicity:!1,type:"stringTimeseries",nullable:!0}},type:"object"}},actions:{actionTakesAllParameterTypes:{type:"action",apiName:"actionTakesAllParameterTypes",parameters:{objectSet:{multiplicity:!1,type:{type:"objectSet",objectSet:"Todo"},nullable:!1},object:{multiplicity:!1,type:{type:"object",object:"Person"},nullable:!0,description:"A person Object"},string:{multiplicity:!1,type:"string",nullable:!1},"time-stamp":{multiplicity:!1,type:"timestamp",nullable:!1},dateArray:{multiplicity:!0,type:"datetime",nullable:!0},attachmentArray:{multiplicity:!0,type:"attachment",nullable:!1}},description:"An action which takes different types of parameters",modifiedEntities:{Todo:{created:!0,modified:!0},ObjectTypeWithAllPropertyTypes:{created:!1,modified:!0}}},createTodo:{type:"action",apiName:"createTodo",parameters:{},description:"Creates a new Todo",modifiedEntities:{Todo:{created:!0,modified:!1}}}},queries:{queryTakesAllParameterTypes:{type:"query",apiName:"queryTakesAllParameterTypes",description:"description of the query that takes all parameter types",displayName:"qTAPT",version:"version",parameters:{double:{description:"a double parameter",type:"double",nullable:!1},float:{type:"float",nullable:!1},integer:{type:"integer",nullable:!1},long:{type:"long",nullable:!1},attachment:{type:"attachment",nullable:!1},boolean:{type:"boolean",nullable:!1},date:{type:"date",nullable:!1},string:{type:"string",nullable:!1},timestamp:{type:"timestamp",nullable:!1},object:{type:"object",object:"Todo",nullable:!1},objectSet:{type:"objectSet",objectSet:"Todo",nullable:!1},array:{description:"an array of strings",type:"string",nullable:!1,multiplicity:!0},set:{description:"a set of strings",type:"set",set:{type:"string",nullable:!1},nullable:!1},unionNonNullable:{description:"a union of strings and integers",type:"union",union:[{type:"string",nullable:!1},{type:"integer",nullable:!1}],nullable:!1},unionNullable:{description:"a union of strings and integers but its optional",type:"union",union:[{type:"string",nullable:!1},{type:"integer",nullable:!1}],nullable:!0},struct:{description:"a struct with some fields",type:"struct",struct:{name:{type:"string",nullable:!1},id:{type:"integer",nullable:!1}},nullable:!1},twoDimensionalAggregation:{type:"twoDimensionalAggregation",twoDimensionalAggregation:{keyType:"string",valueType:"double"},nullable:!1},threeDimensionalAggregation:{type:"threeDimensionalAggregation",threeDimensionalAggregation:{keyType:"range",keySubtype:"date",valueType:{keyType:"range",keySubtype:"timestamp",valueType:"date"}},nullable:!1}},output:{type:"string",nullable:!1}},getTodoCount:{type:"query",apiName:"getTodoCount",version:"0.1.2",parameters:{},output:{type:"integer",nullable:!1}}}},s=class extends i.BaseFoundryClient{get ontology(){return super.ontology}constructor(e){super(e,y)}},u=p.PublicClientAuth;let c="https://fake.palantirfoundry.com",m="https://example.com/auth/callback";function b(e,t){if(null==e)throw Error("Missing environment variable: ".concat(t))}b(c,"NEXT_PUBLIC_FOUNDRY_API_URL"),b("123","NEXT_PUBLIC_FOUNDRY_CLIENT_ID"),b(m,"NEXT_PUBLIC_FOUNDRY_REDIRECT_URL");let d=new s({url:c,auth:new u({clientId:"123",url:c,redirectUrl:m,scopes:["api:ontologies-read","api:ontologies-write"]})})},5326:e=>{e.exports={methods:"page_methods__NwQbr"}}},e=>{var t=t=>e(e.s=t);e.O(0,[931,527,881,269,391,358],()=>t(430)),_N_E=e.O()}]);