import{R as f,O as ze,A as re,r as S,j as a,B as Qe,C as Ze,D as et}from"./iframe-CjLCYPjP.js";import{B as se,F as Y,S as X}from"./SubmissionOutputPanel-Dbbntb70.js";import{t as tt}from"./DropdownField-CVccp13h.js";import{a as nt}from"./assertUnreachable-tCT10eXl.js";import{u as ot}from"./makeExternalStore-CuYJtRm7.js";import{u as at}from"./toNumber-Dc_C2hIq.js";import{w as it}from"./withOsdkMetrics-JADyG9oK.js";import"./preload-helper-ByO7fxtk.js";import"./index-f-S2-r7i.js";import"./ActionButton-tR5Q6IOl.js";import"./Button-CIR_AgrW.js";import"./useBaseUiId-njZIx2Uj.js";import"./SkeletonBar-Dfq3KLiJ.js";import"./Tooltip-x0EIYMcK.js";import"./index-B-mUbcTO.js";import"./index-DFQIppYh.js";import"./InternalBackdrop-DcxaL_PT.js";import"./composite-DOtgHB4N.js";import"./index-BJNvwJy0.js";import"./getDisabledMountTransitionStyles-xkMz7bO3.js";import"./ToolbarRootContext-Do5gfKIj.js";import"./PopoverPopup-DBVaV4KW.js";import"./info-sign-ByGsBTzw.js";import"./svgIconContainer-CUfGw83J.js";import"./cross-DL0QZscy.js";import"./Input-jALqAWvf.js";import"./useControlled-CoHb1tef.js";import"./chevron-up-DXGmXx4u.js";import"./chevron-down-DLtLuFqQ.js";import"./useEventCallback-B4PsR34i.js";import"./Switch-CrMVPH-e.js";import"./useValueChanged-DdOgyepL.js";import"./iconLoader-BWW9OmUq.js";import"./CompositeRoot-DWu7otyj.js";import"./CompositeItem-Bqp3H5gP.js";import"./TimePicker-BLIBs6fh.js";import"./caret-down-8jOpd4yE.js";import"./CollapsiblePanel-C7Qsoko0.js";import"./error-Mi8VUdj0.js";import"./getPseudoElementBounds-DKP9-avB.js";import"./tick-Dh-Y59zV.js";import"./small-cross-BLFFZOgT.js";import"./useOsdkClient-C5B9dS-h.js";import"./search-_m4au-z9.js";function rt(t){const{observableClient:e,devtoolsEnabled:n}=f.useContext(ze);ot(n,"useOsdkAction",t.apiName);const[o,s]=f.useState(),[T,l]=f.useState(),[m,h]=f.useState(!1),[y,b]=f.useState(!1),[N,Q]=f.useState(),c=f.useRef(null),I=f.useCallback(async function(i){try{if(y&&c.current&&(c.current.abort(),b(!1)),h(!0),s(void 0),Array.isArray(i)){const p=[],r=i.map(E=>{const{$optimisticUpdate:v,...Z}=E;return v&&p.push(v),Z}),w=await e.applyAction(t,r,{optimisticUpdate:E=>{for(const v of p)v==null||v(E)}});return l(w),w}else{const{$optimisticUpdate:p,...r}=i,w=await e.applyAction(t,r,{optimisticUpdate:p});return l(w),w}}catch(p){throw p instanceof re?s({actionValidation:p}):s({unknown:p}),p}finally{h(!1)}},[e,t,y]),A=f.useCallback(async function(i){var p;try{if(m)return;(p=c.current)==null||p.abort();const r=new AbortController;c.current=r,b(!0),s(void 0);const w=await e.validateAction(t,i);return r.signal.aborted?void 0:(Q(w),w)}catch(r){if(r instanceof Error&&r.name==="AbortError")return;throw r instanceof re?s({actionValidation:r}):s({unknown:r}),r}finally{b(!1)}},[e,t,m]);return f.useEffect(()=>()=>{var i;(i=c.current)==null||i.abort()},[]),f.useMemo(()=>({applyAction:I,validateAction:A,error:o,data:T,isPending:m,isValidating:y,validationResult:N}),[I,A,o,T,m,y,N])}function st(t,e){if(e!=null){if(t==null||typeof t=="object")return e;switch(t){case"string":case"marking":case"geohash":case"geoshape":case"objectType":return typeof e=="string"?e:String(e);case"integer":case"long":{const n=le(e);return n!=null?Math.trunc(n):void 0}case"double":return le(e);case"boolean":return typeof e=="boolean"?e:e==="true"?!0:e==="false"?!1:void 0;case"datetime":case"timestamp":return typeof e=="string"?Number.isNaN(Date.parse(e))?void 0:e:e instanceof Date?e.toISOString():void 0;case"attachment":case"mediaReference":return e;default:return e}}}function le(t){if(typeof t=="number")return t;if(typeof t=="string"){const e=t.trim();if(e==="")return;const n=Number(e);return Number.isNaN(n)?void 0:n}}function lt(t){return Object.entries(t.parameters).map(([e,n])=>mt(e,n))}function mt(t,e){const n={fieldKey:t,label:t,isRequired:!e.nullable,fieldType:e.type},o=e.type;if(typeof o=="object")switch(o.type){case"objectSet":return{...n,fieldComponent:"OBJECT_SET",fieldComponentProps:{value:null}};case"object":return{...n,fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectType:{type:"object",apiName:o.object}}};case"interface":case"struct":return{...n,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}}}switch(o){case"string":return{...n,fieldComponent:"TEXT_INPUT",fieldComponentProps:{}};case"marking":case"geohash":case"geoshape":case"objectType":case"scenarioReference":return{...n,fieldComponent:"UNSUPPORTED",fieldComponentProps:{}};case"boolean":return{...n,fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}};case"integer":case"double":case"long":return{...n,fieldComponent:"NUMBER_INPUT",fieldComponentProps:{}};case"datetime":case"timestamp":return{...n,fieldComponent:"DATETIME_PICKER",fieldComponentProps:{}};case"attachment":case"mediaReference":return{...n,fieldComponent:"FILE_PICKER",fieldComponentProps:{}};default:return nt(o)}}function ee(){return ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ee.apply(null,arguments)}const ct=[],pt=[],ut=tt(function({actionDefinition:t,formTitle:e,showFormTitle:n=!1,formFieldDefinitions:o,formState:s,onFormStateChange:T,isSubmitDisabled:l,onSubmit:m,onValidationResponse:h,onSuccess:y,onError:b}){const{applyAction:N,isPending:Q}=rt(t),{metadata:c,loading:I,error:A}=at(t);S.useEffect(function(){A!=null&&(b==null||b({type:"unknown",error:A}))},[A,b]);const i=c==null?void 0:c.parameters,p=S.useMemo(()=>o==null?null:o.map(d=>{var D;const{defaultValue:F,...g}=d;return{...g,fieldKey:String(d.fieldKey),fieldType:(D=i==null?void 0:i[String(d.fieldKey)])==null?void 0:D.type,fieldComponentProps:F===void 0?d.fieldComponentProps:{...d.fieldComponentProps,defaultValue:F}}}),[o,i]),r=S.useMemo(()=>p??(c!=null?lt(c):ct),[p,c]),w=S.useMemo(()=>r.length===0?pt:r.map(d=>({type:"field",definition:d})),[r]),E=S.useCallback(d=>{var g;const F={};for(const[D,$e]of Object.entries(d))F[D]=st((g=i==null?void 0:i[D])==null?void 0:g.type,$e);return F},[i]),v=S.useCallback(async d=>{const F=E(d);try{if(m!=null)await m(F,N);else{const g=await N(F);y==null||y(g)}}catch(g){b==null||b({type:"submission",error:g})}},[E,m,N,y,b]),Z=S.useCallback((d,F)=>{T==null||T(g=>({...g,[d]:F}))},[T]),ie={formTitle:n?e??(c==null?void 0:c.displayName)??t.apiName:void 0,formContent:w,onSubmit:v,isSubmitDisabled:l,isPending:Q,isLoading:I,onFieldValueChange:Z};return s==null?f.createElement(se,ie):f.createElement(se,ee({},ie,{formState:s}))}),J=it(ut,"ActionForm"),{expect:u,fn:P,userEvent:C,waitFor:R,within:x}=__STORYBOOK_MODULE_TEST__,Xe=Qe.actionDefinition,dt=Ze.actionDefinition,ft=et.actionDefinition,yt=1500,bt=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],ht=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],B=P().mockName("onSuccess"),te=P().mockName("onError"),ne=P().mockName("onSubmit"),oe=P().mockName("onSubmit:slow"),ae=P().mockName("onSubmit:failure");function St(t){B(t)}function $(t,e){return e(t)}function Tt(t,e){return e(t)}function wt(t,e){return e(t)}const Ft=(t,e)=>(ne(t),$(t,e)),gt=async(t,e)=>(oe(t),await Je(yt),$(t,e)),Ct=async t=>{throw ae(t),await Je(300),new Error("Demo submission failed")};function Je(t){return new Promise(e=>setTimeout(e,t))}function z({applyStoryAction:t,onSubmit:e}){const[n,o]=S.useState({status:"idle"}),s=S.useCallback(async(l,m)=>{o({status:"submitting",submittedValues:l});try{let h;if(e==null){const y=await t(l,m);St(y),h=y}else h=await e(l,m);return o({status:"success",submittedValues:l,response:h}),h}catch(h){throw o({status:"error",submittedValues:l,error:h}),h}},[t,e]);return{handleStoryError:S.useCallback(l=>{o(m=>({...m,status:"error",error:l})),te(l)},[]),handleStorySubmit:s,submission:n}}function vt({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onSubmit:o,showFormTitle:s}){const{handleStoryError:T,handleStorySubmit:l,submission:m}=z({applyStoryAction:$,onSubmit:o});return a.jsx(Y,{output:a.jsx(X,{idleMessage:"Submit the form to see the action response.",snapshot:m}),children:a.jsx(J,{actionDefinition:Xe,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onError:T,onSubmit:l,showFormTitle:s})})}function Nt(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=z({applyStoryAction:Tt});return a.jsx(Y,{output:a.jsx(X,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:a.jsx(J,{actionDefinition:dt,onError:t,onSubmit:e,showFormTitle:!0})})}function At(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=z({applyStoryAction:wt});return a.jsx(Y,{output:a.jsx(X,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:a.jsx(J,{actionDefinition:ft,onError:t,onSubmit:e,showFormTitle:!0})})}const wn={title:"Components/ActionForm/Usage",component:vt,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},O={render:()=>a.jsx(Nt,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
/>`}}}},U={play:async({canvasElement:t})=>{B.mockClear();const e=x(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await C.type(n,"Ada Lovelace"),await C.click(o),await R(()=>u(B).toHaveBeenCalled()),await u(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await u(await e.findByText(/Ada Lovelace/)).toBeInTheDocument()}},k={args:{onSubmit:Ct},play:async({canvasElement:t})=>{te.mockClear(),ae.mockClear();const e=x(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await C.type(n,"Margaret Hamilton"),await C.click(o),await R(()=>u(ae).toHaveBeenCalled()),await R(()=>u(te).toHaveBeenCalled()),await u(await e.findByText("Submit failed.")).toBeInTheDocument(),await u(await e.findByText(/Demo submission failed/)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},j={play:async({canvasElement:t})=>{B.mockClear();const e=x(t);await e.findByRole("textbox",{name:/^fullName/});const n=await e.findByRole("button",{name:/submit/i});await C.click(n),await u(await e.findByRole("alert")).toBeInTheDocument(),await u(B).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},_={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=x(t);await u(await e.findByRole("button",{name:/submit/i})).toBeDisabled()}},K={args:{onSubmit:gt},play:async({canvasElement:t})=>{oe.mockClear();const e=x(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await C.type(n,"Katherine Johnson"),await C.click(o),await R(()=>u(oe).toHaveBeenCalled()),await u(await e.findByRole("button",{name:/submitting/i})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},M={name:"Custom Submit Wrapper",args:{onSubmit:Ft},play:async({canvasElement:t})=>{ne.mockClear();const e=x(t),n=await e.findByRole("textbox",{name:/^fullName/}),o=await e.findByRole("button",{name:/submit/i});await C.type(n,"Grace Hopper"),await C.click(o),await R(()=>u(ne).toHaveBeenCalledWith(u.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},H={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},W={args:{formTitle:"Update employee profile",showFormTitle:!0}},L={args:{formFieldDefinitions:bt},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},V={args:{formFieldDefinitions:ht},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},q={render:()=>a.jsx(At,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},G={render:()=>a.jsx(Et,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Et(){const[t,e]=S.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:n,handleStorySubmit:o,submission:s}=z({applyStoryAction:$});return a.jsx(Y,{output:a.jsx(X,{idleMessage:"Submit the form to see the action response.",snapshot:s}),children:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"osdkFormStorySpacing",children:[a.jsx("strong",{children:"Current form state (JSON):"}),a.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),a.jsx(J,{actionDefinition:Xe,formState:t,onError:n,onFormStateChange:e,onSubmit:o})]})})}var me,ce,pe;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,fe;U.parameters={...U.parameters,docs:{...(ue=U.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(de=U.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,be,he;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(be=k.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Se,Te,we;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Fe,ge,Ce;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ce=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var ve,Ne,Ae;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ae=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Ee,xe,De;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:De.source}}};var Re,Be,Pe;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ie,Oe,Ue;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(Ue=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var ke,je,_e;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(_e=(je=L.parameters)==null?void 0:je.docs)==null?void 0:_e.source}}};var Ke,Me,He;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(He=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var We,Le,Ve;q.parameters={...q.parameters,docs:{...(We=q.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ve=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var qe,Ge,Ye;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};const Fn=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState"];export{G as ControlledFormState,M as CustomSubmitHandler,O as Default,K as SlowCustomSubmit,_ as SubmitDisabled,k as SubmitFailure,U as SubmitSuccess,j as ValidationErrors,W as WithCustomTitle,L as WithDefaultValues,V as WithFieldOverrides,H as WithTitle,q as WithUnsupportedFields,Fn as __namedExportsOrder,wn as default};
