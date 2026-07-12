import{R as b,O as Ze,A as re,r as h,j as a,B as et,C as tt,D as nt}from"./iframe-BI4oyWQy.js";import{B as se,F as J,S as $}from"./SubmissionOutputPanel-BIFJy7-k.js";import{t as ot}from"./DropdownField-CbZpN5cU.js";import{a as at}from"./assertUnreachable-tCT10eXl.js";import{u as it}from"./makeExternalStore-Czfove7z.js";import{u as rt}from"./toNumber-DBkxUK0r.js";import{w as st}from"./withOsdkMetrics-C-T3cVLi.js";import"./preload-helper-Uu2Ie1vE.js";import"./index-B4cN3ENE.js";import"./ActionButton-CX99eco7.js";import"./Button-yfi4hM-9.js";import"./useBaseUiId-8x_XEMPm.js";import"./SkeletonBar-DofieG95.js";import"./Tooltip-DdzTSyLa.js";import"./index-B5ybX1ZP.js";import"./index-RxrdGkU6.js";import"./InternalBackdrop-DERlKQLK.js";import"./composite-D-66BLrp.js";import"./index-BUCmpNYa.js";import"./getDisabledMountTransitionStyles-DqPHr7hO.js";import"./ToolbarRootContext-D0geINdH.js";import"./PopoverPopup-D0_dmbbH.js";import"./info-sign-MRTGqWyc.js";import"./svgIconContainer-DhVnukk2.js";import"./cross-BXWnhKHP.js";import"./Input-r7-566OJ.js";import"./useControlled-ek7CZzpd.js";import"./chevron-up-BfpWFJ_q.js";import"./chevron-down-v-E9IP1D.js";import"./useEventCallback-BKi7jVE5.js";import"./Switch-CqhbfQkK.js";import"./useValueChanged-BnlYbVgb.js";import"./iconLoader-GGrFACL9.js";import"./CompositeRoot-C9_2nNHe.js";import"./CompositeItem-BGIjPEv_.js";import"./TimePicker-CQwDlvaR.js";import"./caret-down-1suyiflx.js";import"./CollapsiblePanel-Dvk26ovj.js";import"./error-BtUWaEg7.js";import"./getPseudoElementBounds-vSdZc8Da.js";import"./small-cross-BOOvjWrV.js";import"./useOsdkClient--A2eY1s5.js";function lt(t){const{observableClient:e,devtoolsEnabled:n}=b.useContext(Ze);it(n,"useOsdkAction",t.apiName);const[o,s]=b.useState(),[C,i]=b.useState(),[d,c]=b.useState(!1),[g,v]=b.useState(!1),[y,R]=b.useState(),E=b.useRef(null),f=b.useCallback(async function(m){try{if(g&&E.current&&(E.current.abort(),v(!1)),c(!0),s(void 0),Array.isArray(m)){const l=[],r=m.map(x=>{const{$optimisticUpdate:A,...ee}=x;return A&&l.push(A),ee}),S=await e.applyAction(t,r,{optimisticUpdate:x=>{for(const A of l)A==null||A(x)}});return i(S),S}else{const{$optimisticUpdate:l,...r}=m,S=await e.applyAction(t,r,{optimisticUpdate:l});return i(S),S}}catch(l){throw l instanceof re?s({actionValidation:l}):s({unknown:l}),l}finally{c(!1)}},[e,t,g]),k=b.useCallback(async function(m){var l;try{if(d)return;(l=E.current)==null||l.abort();const r=new AbortController;E.current=r,v(!0),s(void 0);const S=await e.validateAction(t,m);return r.signal.aborted?void 0:(R(S),S)}catch(r){if(r instanceof Error&&r.name==="AbortError")return;throw r instanceof re?s({actionValidation:r}):s({unknown:r}),r}finally{v(!1)}},[e,t,d]);return b.useEffect(()=>()=>{var N;(N=E.current)==null||N.abort()},[]),b.useMemo(()=>({applyAction:f,validateAction:k,error:o,data:C,isPending:d,isValidating:g,validationResult:y}),[f,k,o,C,d,g,y])}function ct(t,e){if(e!=null){if(t==null||typeof t=="object")return e;switch(t){case"string":case"marking":case"geohash":case"geoshape":case"objectType":return typeof e=="string"?e:String(e);case"integer":case"long":{const n=le(e);return n!=null?Math.trunc(n):void 0}case"double":return le(e);case"boolean":return typeof e=="boolean"?e:e==="true"?!0:e==="false"?!1:void 0;case"datetime":case"timestamp":return typeof e=="string"?Number.isNaN(Date.parse(e))?void 0:e:e instanceof Date?e.toISOString():void 0;case"attachment":case"mediaReference":return e;default:return e}}}function le(t){if(typeof t=="number")return t;if(typeof t=="string"){const e=t.trim();if(e==="")return;const n=Number(e);return Number.isNaN(n)?void 0:n}}function mt(t){return Object.entries(t.parameters).map(([e,n])=>pt(e,n))}function pt(t,e){const n={fieldKey:t,label:t,isRequired:!e.nullable,fieldType:e.type},o=e.type;if(typeof o=="object")switch(o.type){case"objectSet":return{...n,fieldComponent:"OBJECT_SET",fieldComponentProps:{value:null}};case"object":return{...n,fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectType:{type:"object",apiName:o.object}}};case"interface":case"struct":return{...n,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}}}switch(o){case"string":return{...n,fieldComponent:"TEXT_INPUT",fieldComponentProps:{}};case"marking":case"geohash":case"geoshape":case"objectType":case"scenarioReference":return{...n,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}};case"boolean":return{...n,fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}};case"integer":case"double":case"long":return{...n,fieldComponent:"NUMBER_INPUT",fieldComponentProps:{}};case"datetime":case"timestamp":return{...n,fieldComponent:"DATETIME_PICKER",fieldComponentProps:{}};case"attachment":case"mediaReference":return{...n,fieldComponent:"FILE_PICKER",fieldComponentProps:{}};default:return at(o)}}const ut=[],dt=[],ft=ot(function({actionDefinition:e,formTitle:n,showFormTitle:o=!1,formFieldDefinitions:s,formState:C,onFormStateChange:i,isSubmitDisabled:d,onSubmit:c,onValidationResponse:g,onSuccess:v,onError:y}){const{applyAction:R,isPending:E}=lt(e),{metadata:f,loading:k,error:N}=rt(e);h.useEffect(function(){N!=null&&(y==null||y({type:"unknown",error:N}))},[N,y]);const m=f==null?void 0:f.parameters,l=h.useMemo(()=>s==null?null:s.map(p=>{var B;const{defaultValue:T,...w}=p;return{...w,fieldKey:String(p.fieldKey),fieldType:(B=m==null?void 0:m[String(p.fieldKey)])==null?void 0:B.type,fieldComponentProps:T===void 0?p.fieldComponentProps:{...p.fieldComponentProps,defaultValue:T}}}),[s,m]),r=h.useMemo(()=>l??(f!=null?mt(f):ut),[l,f]),S=h.useMemo(()=>r.length===0?dt:r.map(p=>({type:"field",definition:p})),[r]),x=h.useCallback(p=>{var w;const T={};for(const[B,Qe]of Object.entries(p))T[B]=ct((w=m==null?void 0:m[B])==null?void 0:w.type,Qe);return T},[m]),A=h.useCallback(async p=>{const T=x(p);try{if(c!=null)await c(T,R);else{const w=await R(T);v==null||v(w)}}catch(w){y==null||y({type:"submission",error:w})}},[x,c,R,v,y]),ee=h.useCallback((p,T)=>{i==null||i(w=>({...w,[p]:T}))},[i]),$e=o?n??(f==null?void 0:f.displayName)??e.apiName:void 0,ze=C!=null,ie={formTitle:$e,formContent:S,onSubmit:A,isSubmitDisabled:d,isPending:E,isLoading:k,onFieldValueChange:ee};return ze?a.jsx(se,{...ie,formState:C}):a.jsx(se,{...ie})}),z=st(ft,"ActionForm"),{expect:u,fn:U,userEvent:F,waitFor:P,within:D}=__STORYBOOK_MODULE_TEST__,Xe=et.actionDefinition,yt=tt.actionDefinition,bt=nt.actionDefinition,ht=1500,St=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Tt=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],I=U().mockName("onSuccess"),te=U().mockName("onError"),ne=U().mockName("onSubmit"),oe=U().mockName("onSubmit:slow"),ae=U().mockName("onSubmit:failure");function wt(t){I(t)}function Q(t,e){return e(t)}function Ft(t,e){return e(t)}function Ct(t,e){return e(t)}const gt=(t,e)=>(ne(t),Q(t,e)),vt=async(t,e)=>(oe(t),await Je(ht),Q(t,e)),Nt=async t=>{throw ae(t),await Je(300),new Error("Demo submission failed")};function Je(t){return new Promise(e=>setTimeout(e,t))}function Z({applyStoryAction:t,onSubmit:e}){const[n,o]=h.useState({status:"idle"}),s=h.useCallback(async(i,d)=>{o({status:"submitting",submittedValues:i});try{let c;if(e==null){const g=await t(i,d);wt(g),c=g}else c=await e(i,d);return o({status:"success",submittedValues:i,response:c}),c}catch(c){throw o({status:"error",submittedValues:i,error:c}),c}},[t,e]);return{handleStoryError:h.useCallback(i=>{o(d=>({...d,status:"error",error:i})),te(i)},[]),handleStorySubmit:s,submission:n}}function At({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onSubmit:o,showFormTitle:s}){const{handleStoryError:C,handleStorySubmit:i,submission:d}=Z({applyStoryAction:Q,onSubmit:o});return a.jsx(J,{output:a.jsx($,{idleMessage:"Submit the form to see the action response.",snapshot:d}),children:a.jsx(z,{actionDefinition:Xe,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onError:C,onSubmit:i,showFormTitle:s})})}function Et(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=Z({applyStoryAction:Ft});return a.jsx(J,{output:a.jsx($,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:a.jsx(z,{actionDefinition:yt,onError:t,onSubmit:e,showFormTitle:!0})})}function xt(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=Z({applyStoryAction:Ct});return a.jsx(J,{output:a.jsx($,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:a.jsx(z,{actionDefinition:bt,onError:t,onSubmit:e,showFormTitle:!0})})}const Tn={title:"Components/ActionForm/Usage",component:At,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},O={render:()=>a.jsx(Et,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}},j={play:async({canvasElement:t})=>{I.mockClear();const e=D(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await F.type(n,"Ada Lovelace"),await F.click(o),await P(()=>u(I).toHaveBeenCalled()),await u(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await u(await e.findByText(/Ada Lovelace/)).toBeInTheDocument()}},_={args:{onSubmit:Nt},play:async({canvasElement:t})=>{te.mockClear(),ae.mockClear();const e=D(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await F.type(n,"Margaret Hamilton"),await F.click(o),await P(()=>u(ae).toHaveBeenCalled()),await P(()=>u(te).toHaveBeenCalled()),await u(await e.findByText("Submit failed.")).toBeInTheDocument(),await u(await e.findByText(/Demo submission failed/)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},K={play:async({canvasElement:t})=>{I.mockClear();const e=D(t);await e.findByRole("textbox",{name:/^fullName/});const n=await e.findByRole("button",{name:/submit/i});await F.click(n),await u(await e.findByRole("alert")).toBeInTheDocument(),await u(I).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},M={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=D(t);await u(await e.findByRole("button",{name:/submit/i})).toBeDisabled()}},H={args:{onSubmit:vt},play:async({canvasElement:t})=>{oe.mockClear();const e=D(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await F.type(n,"Katherine Johnson"),await F.click(o),await P(()=>u(oe).toHaveBeenCalled()),await u(await e.findByRole("button",{name:/submitting/i})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},W={name:"Custom Submit Wrapper",args:{onSubmit:gt},play:async({canvasElement:t})=>{ne.mockClear();const e=D(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await F.type(n,"Grace Hopper"),await F.click(o),await P(()=>u(ne).toHaveBeenCalledWith(u.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},L={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},V={args:{formTitle:"Update employee profile",showFormTitle:!0}},q={args:{formFieldDefinitions:St},parameters:{docs:{source:{code:`const fields = [
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
      placeholder: "Select employment type",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`}}}},G={args:{formFieldDefinitions:Tt},parameters:{docs:{source:{code:`const fields = [
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
    fieldKey: "yearsExperience",
    label: "Relevant experience",
    fieldComponent: "NUMBER_INPUT",
    helperText: "Whole years only.",
    fieldComponentProps: {
      min: 0,
      max: 80,
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
      placeholder: "Select employment type",
    },
  },
] satisfies Array<FormFieldDefinition<typeof updateEmployeeStoryAction>>;

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formFieldDefinitions={fields}
/>`}}}},Y={render:()=>a.jsx(xt,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
// not currently generate default field components for.
//
// {
//   apiName: "unsupportedFieldsStoryAction",
//   displayName: "Review unsupported fields",
//   parameters: {
//     structPayload: {
//       displayName: "Struct payload",
//       dataType: {
//         type: "struct",
//         fields: [
//           {
//             name: "externalId",
//             fieldType: { type: "string" },
//             required: true,
//           },
//         ],
//       },
//       required: true,
//     },
//     geoshape: {
//       displayName: "Geoshape",
//       dataType: { type: "geoshape" },
//     },
//     classification: {
//       displayName: "Classification",
//       dataType: { type: "marking" },
//     },
//     objectKind: {
//       displayName: "Object type",
//       dataType: { type: "objectType" },
//     },
//   },
// }
<ActionForm
  actionDefinition={unsupportedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}},X={render:()=>a.jsx(Dt,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Dt(){const[t,e]=h.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:n,handleStorySubmit:o,submission:s}=Z({applyStoryAction:Q});return a.jsx(J,{output:a.jsx($,{idleMessage:"Submit the form to see the action response.",snapshot:s}),children:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"osdkFormStorySpacing",children:[a.jsx("strong",{children:"Current form state (JSON):"}),a.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),a.jsx(z,{actionDefinition:Xe,formState:t,onError:n,onFormStateChange:e,onSubmit:o})]})})}var ce,me,pe;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <DefaultActionFormStory />,
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(pe=(me=O.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,de,fe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/i
    });
    await userEvent.type(fullNameInput, "Ada Lovelace");
    await userEvent.click(submitButton);
    await waitFor(() => expect(successSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit succeeded.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Ada Lovelace/)).toBeInTheDocument();
  }
}`,...(fe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,be,he;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    onSubmit: handleFailingSubmit
  },
  play: async ({
    canvasElement
  }) => {
    errorSpy.mockClear();
    failingSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/i
    });
    await userEvent.type(fullNameInput, "Margaret Hamilton");
    await userEvent.click(submitButton);
    await waitFor(() => expect(failingSubmitSpy).toHaveBeenCalled());
    await waitFor(() => expect(errorSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit failed.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Demo submission failed/)).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: "Uses a failing custom submit handler so the story shows the error state and serialized error response."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>\`
      }
    }
  }
}`,...(he=(be=_.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Se,Te,we;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    await canvas.findByRole("textbox", {
      name: /^fullName/
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/i
    });
    await userEvent.click(submitButton);
    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(successSpy).not.toHaveBeenCalled();
  },
  parameters: {
    docs: {
      description: {
        story: "Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."
      }
    }
  }
}`,...(we=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Fe,Ce,ge;M.parameters={...M.parameters,docs:{...(Fe=M.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    isSubmitDisabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: /submit/i
    })).toBeDisabled();
  }
}`,...(ge=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var ve,Ne,Ae;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSlowSubmit
  },
  play: async ({
    canvasElement
  }) => {
    slowSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/i
    });
    await userEvent.type(fullNameInput, "Katherine Johnson");
    await userEvent.click(submitButton);
    await waitFor(() => expect(slowSubmitSpy).toHaveBeenCalled());
    await expect(await canvas.findByRole("button", {
      name: /submitting/i
    })).toBeDisabled();
  },
  parameters: {
    docs: {
      description: {
        story: "Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>\`
      }
    }
  }
}`,...(Ae=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Ee,xe,De;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: "Custom Submit Wrapper",
  args: {
    onSubmit: handleCustomSubmit
  },
  play: async ({
    canvasElement
  }) => {
    customSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/i
    });
    await userEvent.type(fullNameInput, "Grace Hopper");
    await userEvent.click(submitButton);
    await waitFor(() => expect(customSubmitSpy).toHaveBeenCalledWith(expect.objectContaining({
      fullName: "Grace Hopper"
    })));
  },
  parameters: {
    docs: {
      description: {
        story: "Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>\`
      }
    }
  }
}`,...(De=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Re,Be,Pe;L.parameters={...L.parameters,docs:{...(Re=L.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    showFormTitle: true
  },
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
}`,...(Pe=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ie,Ue,ke;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(ke=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:ke.source}}};var Oe,je,_e;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    formFieldDefinitions: actionFormDefaultValueFields
  },
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
      placeholder: "Select employment type",
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
}`,...(_e=(je=q.parameters)==null?void 0:je.docs)==null?void 0:_e.source}}};var Ke,Me,He;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    formFieldDefinitions: actionFormOverrideFields
  },
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
    fieldKey: "yearsExperience",
    label: "Relevant experience",
    fieldComponent: "NUMBER_INPUT",
    helperText: "Whole years only.",
    fieldComponentProps: {
      min: 0,
      max: 80,
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
      placeholder: "Select employment type",
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
}`,...(He=(Me=G.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var We,Le,Ve;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <UnsupportedFieldsActionFormStory />,
  parameters: {
    docs: {
      source: {
        code: \`// This story uses an action with parameter types that ActionForm does
// not currently generate default field components for.
//
// {
//   apiName: "unsupportedFieldsStoryAction",
//   displayName: "Review unsupported fields",
//   parameters: {
//     structPayload: {
//       displayName: "Struct payload",
//       dataType: {
//         type: "struct",
//         fields: [
//           {
//             name: "externalId",
//             fieldType: { type: "string" },
//             required: true,
//           },
//         ],
//       },
//       required: true,
//     },
//     geoshape: {
//       displayName: "Geoshape",
//       dataType: { type: "geoshape" },
//     },
//     classification: {
//       displayName: "Classification",
//       dataType: { type: "marking" },
//     },
//     objectKind: {
//       displayName: "Object type",
//       dataType: { type: "objectType" },
//     },
//   },
// }
<ActionForm
  actionDefinition={unsupportedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(Ve=(Le=Y.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var qe,Ge,Ye;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};const wn=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState"];export{X as ControlledFormState,W as CustomSubmitHandler,O as Default,H as SlowCustomSubmit,M as SubmitDisabled,_ as SubmitFailure,j as SubmitSuccess,K as ValidationErrors,V as WithCustomTitle,q as WithDefaultValues,G as WithFieldOverrides,L as WithTitle,Y as WithUnsupportedFields,wn as __namedExportsOrder,Tn as default};
