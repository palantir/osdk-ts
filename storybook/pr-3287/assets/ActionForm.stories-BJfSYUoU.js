import{R as m,O as pe,A as w,r as S,j as a,u as de,a as ue}from"./iframe-BqSobOjs.js";import{t as fe}from"./DropdownField-DL8T-hja.js";import{B as H}from"./BaseForm-CLHBOeJV.js";import{a as ye}from"./assertUnreachable-tCT10eXl.js";import{u as Fe}from"./makeExternalStore-B5IsxxjS.js";import{u as Te}from"./toNumber-BmW-2qr4.js";import{w as Ce}from"./withOsdkMetrics-D4GiNPF8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-L1wTDGqM.js";import"./caret-down-CDW-Sg4_.js";import"./svgIconContainer-DgnMBskL.js";import"./useBaseUiId-Dp_kYV1S.js";import"./InternalBackdrop-BYMeP7M_.js";import"./composite-DfJCZyGn.js";import"./index-CDBVc2Go.js";import"./index-bCpJ3h2u.js";import"./index-Dmw5mkmL.js";import"./useControlled-9AVv5K6I.js";import"./Input-GUrmuab8.js";import"./useValueChanged-D2pZ8qWZ.js";import"./getDisabledMountTransitionStyles-B6CVhBf6.js";import"./ToolbarRootContext-DRoLsPMn.js";import"./getPseudoElementBounds-JEaCRQOJ.js";import"./CompositeItem-CTpBLKUN.js";import"./cross-CnGN68mu.js";import"./small-cross-Cz-s3IOk.js";import"./ActionButton-BzrQsBY7.js";import"./Button-Zje7J_lk.js";import"./SkeletonBar-fsduxo0X.js";import"./Tooltip-BLcJAY5k.js";import"./PopoverPopup-C8MLFvM4.js";import"./info-sign-kLacitQn.js";import"./chevron-up-BB11Jexa.js";import"./chevron-down-B8BcgL7Y.js";import"./useEventCallback-CysBZKYk.js";import"./Switch-BsEFLCTz.js";import"./iconLoader-CA_nZi9T.js";import"./CompositeRoot-CvRJGIGW.js";import"./CollapsiblePanel-DbqIEyss.js";import"./error-LlycrbnK.js";import"./useOsdkClient-Dz_AketL.js";import"./useRegisterUserAgent-BB-OJR3x.js";function Se(t){const{observableClient:e,devtoolsEnabled:o}=m.useContext(pe);Fe(o,"useOsdkAction",t.apiName);const[i,y]=m.useState(),[h,O]=m.useState(),[T,k]=m.useState(!1),[F,p]=m.useState(!1),[A,L]=m.useState(),s=m.useRef(null),x=m.useCallback(async function(n){try{if(F&&s.current&&(s.current.abort(),p(!1)),k(!0),y(void 0),Array.isArray(n)){const l=[],r=n.map(D=>{const{$optimisticUpdate:C,...M}=D;return C&&l.push(C),M}),d=await e.applyAction(t,r,{optimisticUpdate:D=>{for(const C of l)C==null||C(D)}});return O(d),d}else{const{$optimisticUpdate:l,...r}=n,d=await e.applyAction(t,r,{optimisticUpdate:l});return O(d),d}}catch(l){throw l instanceof w?y({actionValidation:l}):y({unknown:l}),l}finally{k(!1)}},[e,t,F]),E=m.useCallback(async function(n){var l;try{if(T)return;(l=s.current)==null||l.abort();const r=new AbortController;s.current=r,p(!0),y(void 0);const d=await e.validateAction(t,n);return r.signal.aborted?void 0:(L(d),d)}catch(r){if(r instanceof Error&&r.name==="AbortError")return;throw r instanceof w?y({actionValidation:r}):y({unknown:r}),r}finally{p(!1)}},[e,t,T]);return m.useEffect(()=>()=>{var n;(n=s.current)==null||n.abort()},[]),m.useMemo(()=>({applyAction:x,validateAction:E,error:i,data:h,isPending:T,isValidating:F,validationResult:A}),[x,E,i,h,T,F,A])}function he(t,e){if(e!=null){if(t==null||typeof t=="object")return e;switch(t){case"string":case"marking":case"geohash":case"geoshape":case"objectType":return typeof e=="string"?e:String(e);case"integer":case"long":{const o=V(e);return o!=null?Math.trunc(o):void 0}case"double":return V(e);case"boolean":return typeof e=="boolean"?e:e==="true"?!0:e==="false"?!1:void 0;case"datetime":case"timestamp":return typeof e=="string"?Number.isNaN(Date.parse(e))?void 0:e:e instanceof Date?e.toISOString():void 0;case"attachment":case"mediaReference":return e;default:return e}}}function V(t){if(typeof t=="number")return t;if(typeof t=="string"){const e=t.trim();if(e==="")return;const o=Number(e);return Number.isNaN(o)?void 0:o}}function be(t){return Object.entries(t.parameters).map(([e,o])=>Ae(e,o))}function Ae(t,e){const o={fieldKey:t,label:t,isRequired:!e.nullable,fieldType:e.type},i=e.type;if(typeof i=="object")switch(i.type){case"objectSet":return{...o,fieldComponent:"OBJECT_SET",fieldComponentProps:{value:null}};case"object":return{...o,fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectType:{type:"object",apiName:i.object}}};case"interface":case"struct":return{...o,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}}}switch(i){case"string":return{...o,fieldComponent:"TEXT_INPUT",fieldComponentProps:{}};case"marking":case"geohash":case"geoshape":case"objectType":return{...o,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}};case"boolean":return{...o,fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}};case"integer":case"double":case"long":return{...o,fieldComponent:"NUMBER_INPUT",fieldComponentProps:{}};case"datetime":case"timestamp":return{...o,fieldComponent:"DATETIME_PICKER",fieldComponentProps:{}};case"attachment":case"mediaReference":return{...o,fieldComponent:"FILE_PICKER",fieldComponentProps:{}};default:return ye(i)}}function W(){return W=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)({}).hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},W.apply(null,arguments)}const Ee=[],De=[],ge=fe(function({actionDefinition:t,formTitle:e,showFormTitle:o=!1,formFieldDefinitions:i,formState:y,onFormStateChange:h,isSubmitDisabled:O,onSubmit:T,onValidationResponse:k,onSuccess:F,onError:p}){const{applyAction:A,isPending:L}=Se(t),{metadata:s,loading:x,error:E}=Te(t);S.useEffect(function(){E!=null&&(p==null||p({type:"unknown",error:E}))},[E,p]);const n=s==null?void 0:s.parameters,l=S.useMemo(()=>i==null?null:i.map(c=>{var N;const{defaultValue:u,...f}=c;return{...f,fieldKey:String(c.fieldKey),fieldType:(N=n==null?void 0:n[String(c.fieldKey)])==null?void 0:N.type,fieldComponentProps:u===void 0?c.fieldComponentProps:{...c.fieldComponentProps,defaultValue:u}}}),[i,n]),r=S.useMemo(()=>l??(s!=null?be(s):Ee),[l,s]),d=S.useMemo(()=>r.length===0?De:r.map(c=>({type:"field",definition:c})),[r]),D=S.useCallback(c=>{var f;const u={};for(const[N,me]of Object.entries(c))u[N]=he((f=n==null?void 0:n[N])==null?void 0:f.type,me);return u},[n]),C=S.useCallback(async c=>{const u=D(c);try{if(T!=null)await T(u,A);else{const f=await A(u);F==null||F(f)}}catch(f){p==null||p({type:"submission",error:f})}},[D,T,A,F,p]),M=S.useCallback((c,u)=>{h==null||h(f=>({...f,[c]:u}))},[h]),B={formTitle:o?e??(s==null?void 0:s.displayName)??t.apiName:void 0,formContent:d,onSubmit:C,isSubmitDisabled:O,isPending:L,isLoading:x,onFieldValueChange:M};return y==null?m.createElement(H,B):m.createElement(H,W({},B,{formState:y}))}),b=Ce(ge,"ActionForm"),{fn:ce}=__STORYBOOK_MODULE_TEST__,R=de.actionDefinition,Pe=ue.actionDefinition,Ne=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor"}}],Re=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor"}}],Oe=ce().mockName("onSuccess"),g=ce().mockName("onError");function P(t){Oe(t)}const ht={title:"Experimental/ActionForm",component:b,decorators:[t=>a.jsx("div",{className:"osdkFormCard",children:a.jsx(t,{})})],parameters:{docs:{description:{component:"ActionForm fetches action metadata through @osdk/react and renders a submit-ready BaseForm. These stories exercise the same metadata and action hooks used by applications."}}}},v={render:()=>a.jsx(b,{actionDefinition:R,onSuccess:P,onError:g}),parameters:{docs:{source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(result) => console.log("Applied:", result)}
/>`}}}},U={render:()=>a.jsx(b,{actionDefinition:R,showFormTitle:!0,onSuccess:P,onError:g}),parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},_={render:()=>a.jsx(b,{actionDefinition:R,formFieldDefinitions:Ne,onSuccess:P,onError:g}),parameters:{docs:{source:{code:`const fields = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    defaultValue: "Grace Hopper",
    fieldComponentProps: {},
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    defaultValue: 42,
    fieldComponentProps: { min: 0 },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "RADIO_BUTTONS",
    defaultValue: true,
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    defaultValue: true,
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`}}}},K={render:()=>a.jsx(b,{actionDefinition:R,formFieldDefinitions:Re,onSuccess:P,onError:g}),parameters:{docs:{source:{code:`const fields = [
  {
    fieldKey: "fullName",
    label: "Employee legal name",
    fieldComponent: "TEXT_INPUT",
    helperText: "Use the name that should appear in HR records.",
    fieldComponentProps: {
      placeholder: "Ada Lovelace",
      minLength: 2,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    helperText: "Turn on when the employee is not assigned to an office.",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    helperText: "Choose whether this employee is full-time or a contractor.",
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`}}}},j={render:()=>a.jsx(b,{actionDefinition:Pe,showFormTitle:!0,onSuccess:P,onError:g}),parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={unsupportedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}},I={render:()=>a.jsx(xe,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function xe(){const[t,e]=S.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0});return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"osdkFormStorySpacing",children:[a.jsx("strong",{children:"Current Form State:"}),a.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),a.jsx(b,{actionDefinition:R,formState:t,onFormStateChange:e,onSuccess:P,onError:g})]})}var X,Y,G;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <ActionForm actionDefinition={actionDefinition} onSuccess={handleSuccess} onError={errorSpy} />,
  parameters: {
    docs: {
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(result) => console.log("Applied:", result)}
/>\`
      }
    }
  }
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,$,q;U.parameters={...U.parameters,docs:{...(J=U.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ActionForm actionDefinition={actionDefinition} showFormTitle={true} onSuccess={handleSuccess} onError={errorSpy} />,
  parameters: {
    docs: {
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(q=($=U.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,Q,Z;_.parameters={..._.parameters,docs:{...(z=_.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ActionForm actionDefinition={actionDefinition} formFieldDefinitions={actionFormDefaultValueFields} onSuccess={handleSuccess} onError={errorSpy} />,
  parameters: {
    docs: {
      source: {
        code: \`const fields = [
  {
    fieldKey: "fullName",
    label: "Full name",
    fieldComponent: "TEXT_INPUT",
    defaultValue: "Grace Hopper",
    fieldComponentProps: {},
  },
  {
    fieldKey: "yearsExperience",
    label: "Years of experience",
    fieldComponent: "NUMBER_INPUT",
    defaultValue: 42,
    fieldComponentProps: { min: 0 },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "RADIO_BUTTONS",
    defaultValue: true,
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    defaultValue: true,
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>\`
      }
    }
  }
}`,...(Z=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,oe;K.parameters={...K.parameters,docs:{...(ee=K.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ActionForm actionDefinition={actionDefinition} formFieldDefinitions={actionFormOverrideFields} onSuccess={handleSuccess} onError={errorSpy} />,
  parameters: {
    docs: {
      source: {
        code: \`const fields = [
  {
    fieldKey: "fullName",
    label: "Employee legal name",
    fieldComponent: "TEXT_INPUT",
    helperText: "Use the name that should appear in HR records.",
    fieldComponentProps: {
      placeholder: "Ada Lovelace",
      minLength: 2,
    },
  },
  {
    fieldKey: "isRemote",
    label: "Remote employee",
    fieldComponent: "SWITCH",
    helperText: "Turn on when the employee is not assigned to an office.",
    fieldComponentProps: {},
  },
  {
    fieldKey: "isFullTime",
    label: "Employment type",
    fieldComponent: "DROPDOWN",
    helperText: "Choose whether this employee is full-time or a contractor.",
    fieldComponentProps: {
      items: [true, false],
      itemToStringLabel: (value) =>
        value === true ? "Full-time" : "Contractor",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>\`
      }
    }
  }
}`,...(oe=(te=K.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,re,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <ActionForm actionDefinition={unsupportedFieldsActionDefinition} showFormTitle={true} onSuccess={handleSuccess} onError={errorSpy} />,
  parameters: {
    docs: {
      source: {
        code: \`<ActionForm
  actionDefinition={unsupportedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(ie=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,le,ae;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <ControlledActionFormStory />,
  parameters: {
    docs: {
      source: {
        code: \`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>\`
      }
    }
  }
}`,...(ae=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const bt=["Default","WithTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState"];export{I as ControlledFormState,v as Default,_ as WithDefaultValues,K as WithFieldOverrides,U as WithTitle,j as WithUnsupportedFields,bt as __namedExportsOrder,ht as default};
