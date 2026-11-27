import{r as l,j as n,f as Xt}from"./iframe-BKkgtFSo.js";import{E as z}from"./Employee-BAk2o20h.js";import{F as Ht,S as Jt}from"./SubmissionOutputPanel-CMH8fv9r.js";import{B as p}from"./BaseForm-CPAdu0l-.js";import{u as Z}from"./useOsdkClient-DFktUr12.js";import{B as kt,D as Vt}from"./dialog-B3xfgWGW.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dvbp0kPd.js";import"./ActionButton-DkNjySCa.js";import"./Button-D0Mtf1Wu.js";import"./useBaseUiId-BfmvZ33T.js";import"./SkeletonBar-DCi4lVfd.js";import"./Tooltip-Br4k1WIE.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./InternalBackdrop-BpRAUWPw.js";import"./composite-CVFofIE7.js";import"./index-1AbeELNr.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./ToolbarRootContext-CGelScnS.js";import"./PopoverPopup-Dkt2NgPN.js";import"./info-sign-vVV9Cw6P.js";import"./svgIconContainer-Ce9VGxQH.js";import"./NonIdealState-CcUJbrpE.js";import"./Select-CQIz6wip.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./tick-Ch6cMwoK.js";import"./small-cross-D5_9Jwec.js";import"./search-VxZ7VsjM.js";import"./cross-5K119jUx.js";import"./useValueChanged-BVys5dm-.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./CompositeItem-B3A9StDG.js";import"./TimePicker-BLPwYNUR.js";import"./DropdownField-DT-aa1rt.js";import"./makeExternalStore-Qrh_OJH6.js";import"./chevron-up-YSHwn7pL.js";import"./chevron-down-C5BYt7gU.js";import"./iconLoader-DWt84vrv.js";import"./Switch-DG3faCiG.js";import"./CompositeRoot-9HaszsTh.js";import"./CollapsiblePanel-BB19Mn1b.js";import"./error-DeWUfdBM.js";import"./html-CdGGBoei.js";const Gt="_sliderField_s5oyb_1",Qt="_sliderInput_s5oyb_7",Yt="_sliderValue_s5oyb_19",Q={sliderField:Gt,sliderInput:Qt,sliderValue:Yt},ee=50,$t=0,zt=100,Y=l.memo(function({disabled:o,id:a,onChange:i,value:s}){const m=Zt(s),J=l.useCallback(G=>{i==null||i(G.currentTarget.valueAsNumber)},[i]);return n.jsxs("div",{className:Q.sliderField,children:[n.jsx("input",{"aria-valuetext":`${m}% complete`,className:Q.sliderInput,disabled:o,id:a,max:zt,min:$t,onChange:J,type:"range",value:m}),n.jsxs("output",{className:Q.sliderValue,htmlFor:a,children:[m,"% complete"]})]})});function Zt(t){return typeof t=="number"?t:ee}try{Y.displayName="ThemedSliderField",Y.__docgenInfo={description:"",displayName:"ThemedSliderField",props:{}}}catch{}const{expect:c,fn:en,userEvent:te,within:tn}=__STORYBOOK_MODULE_TEST__;function e(t){return{type:"field",definition:t}}const f=["Low","Medium","High"],d=["Engineering","Marketing","Sales","Finance","Operations","Legal"],H=["Urgent","Review","Follow-up","Archived","Pinned"],ne=["usr_ada","usr_grace","usr_katherine"],jt={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},u=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",isRequired:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"completion",fieldComponent:"CUSTOM",label:"Completion",fieldComponentProps:{defaultValue:ee,customRenderer:t=>n.jsx(Y,{...t})}})],nn=[],X={current:void 0},$=en().mockName("onSubmit");function r(t){var o;$(t),(o=X.current)==null||o.call(X,{status:"success",submittedValues:t,response:{message:"onSubmit completed"}})}function on(){const[t,o]=l.useState({status:"idle"});return X.current=o,n.jsx(Jt,{idleMessage:"Submit the form to see submitted values.",snapshot:t})}const No={title:"Components/ActionForm/BaseForm",component:p,tags:["beta"],decorators:[t=>n.jsx(Ht,{output:n.jsx(on,{}),children:n.jsx(t,{})})],parameters:{msw:{handlers:[...Xt.handlers]},controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}}},argTypes:{formTitle:{description:"Optional title displayed at the top of the form.",control:"text"},formContent:{description:"Ordered list of form content items (fields or sections) to render.",control:!1},onSubmit:{description:"Called when the form is submitted. Receives the current form state.",control:!1,table:{category:"Events"}},isSubmitDisabled:{description:"Whether the submit button is disabled.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isPending:{description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isLoading:{description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},className:{description:"Additional CSS class name for the form.",control:"text"},submitButtonText:{description:"Text displayed in the submit button.",control:"text",table:{defaultValue:{summary:"Submit"}}},submitButtonVariant:{description:"Visual variant of the submit button.",control:"select",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}}}},C={args:{formContent:u,onSubmit:r},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/action-form";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},S={parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  completion: THEMED_SLIDER_DEFAULT_VALUE,
});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <BaseForm
      formContent={formContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);`}}},render:()=>n.jsx(rn,{})};function rn(){const[t,o]=l.useState({completion:ee}),a=l.useCallback((i,s)=>{o(m=>({...m,[i]:s}))},[]);return n.jsxs("div",{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current Form State:"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,(i,s)=>s instanceof File?`File: ${s.name}`:s,2)})]}),n.jsx(p,{formContent:u,formState:t,onFieldValueChange:a,onSubmit:r})]})}const an=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",fieldComponentProps:{}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{}}),e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote",fieldComponentProps:{}}),e({fieldKey:"availability",fieldComponent:"DATE_RANGE_INPUT",label:"Availability",isRequired:!0,fieldComponentProps:{}})],ln={name:{first:"Ada"},quantity:"42",startDate:"2026-11-19",isRemote:"false",availability:[]},b={parameters:{docs:{description:{story:"When a stored value has a shape the field component can't display, the field says what it expected in place of the component and offers to clear the value. These values don't block submit; they are submitted unchanged for server validation to report. Validation errors still show under such a field: the empty array in the required Availability field is both rejected by the date range field and empty to the required rule, so after a submit attempt it also shows the required error, which blocks submit."},source:{code:`const formContent = [
  field({ fieldKey: "name", fieldComponent: "TEXT_INPUT", label: "Name", fieldComponentProps: {} }),
  field({ fieldKey: "quantity", fieldComponent: "NUMBER_INPUT", label: "Quantity", fieldComponentProps: {} }),
  field({ fieldKey: "startDate", fieldComponent: "DATETIME_PICKER", label: "Start Date", fieldComponentProps: {} }),
  field({ fieldKey: "isRemote", fieldComponent: "SWITCH", label: "Remote", fieldComponentProps: {} }),
  field({ fieldKey: "availability", fieldComponent: "DATE_RANGE_INPUT", label: "Availability", isRequired: true, fieldComponentProps: {} }),
];

// Values these field components can't display
const [formState, setFormState] = useState({
  name: { first: "Ada" },
  quantity: "42",
  startDate: "2026-11-19",
  isRemote: "false",
  availability: [],
});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <BaseForm
    formContent={formContent}
    formState={formState}
    onFieldValueChange={handleFieldValueChange}
    onSubmit={(state) => console.log("Submitted:", state)}
  />
);`}}},render:()=>n.jsx(sn,{}),play:async({canvasElement:t})=>{const o=tn(t);$.mockClear(),await c(await o.findByText("Expected a number, received: string")).toBeInTheDocument(),await c(o.getByText("Expected 2 dates, received an empty array")).toBeInTheDocument(),await te.click(o.getByRole("button",{name:"Clear Quantity"})),await c(await o.findByRole("textbox",{name:/Quantity/u})).toHaveValue(""),await te.click(o.getByRole("button",{name:"Submit"})),await c(await o.findAllByText("This field is required")).not.toHaveLength(0),await c(o.getByText("1 issue")).toBeInTheDocument(),await c($).not.toHaveBeenCalled()}};function sn(){const[t,o]=l.useState(ln),a=l.useCallback((i,s)=>{o(m=>({...m,[i]:s}))},[]);return n.jsxs("div",{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current Form State:"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),n.jsx(p,{formContent:an,formState:t,onFieldValueChange:a,onSubmit:r})]})}const h={args:{formTitle:"Create New Order",formContent:u,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},y={args:{formContent:nn,isLoading:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},T={args:{formContent:u,isSubmitDisabled:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},mn={name:"Locked employee",description:"Locked multi-line description",quantity:42,priority:"Medium",tags:["Urgent","Pinned"],isActive:!0,isRemote:!0,scheduledAt:new Date(2026,0,15,9,30),vacationDates:[new Date(2026,0,15),new Date(2026,0,31)],custom:"Requires approval"},dn=["Requires approval","Ready to submit"];function pn(t){const o=t.value!=null?String(t.value):void 0;return n.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":t.disabled===!0||void 0,children:dn.map(a=>n.jsx("button",{type:"button",disabled:t.disabled,className:a===o?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var i;return(i=t.onChange)==null?void 0:i.call(t,a)},children:a},a))})}function cn(){const t=Z(),o=l.useMemo(()=>t(z),[t]),[a,i]=l.useState(mn),s=l.useCallback((J,G)=>{i(qt=>({...qt,[J]:G}))},[]),m=l.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",disabled:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",disabled:!0,fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",disabled:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority (select)",disabled:!0,fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (searchable multi-select)",disabled:!0,fieldComponentProps:{items:H,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",disabled:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",disabled:!0,fieldComponentProps:{}}),e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",disabled:!0,fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates",disabled:!0,fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",disabled:!0,fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",disabled:!0,fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",disabled:!0,fieldComponentProps:{value:o}}),e({fieldKey:"custom",fieldComponent:"CUSTOM",label:"Custom field",disabled:!0,fieldComponentProps:{customRenderer:pn}})],[o]);return n.jsx(p,{formTitle:"Disabled fields",formContent:m,formState:a,onFieldValueChange:s,onSubmit:r})}const g={render:()=>n.jsx(cn,{}),parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    disabled: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    disabled: true,
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  // Repeat disabled: true for TEXT_AREA, NUMBER_INPUT, RADIO_BUTTONS,
  // SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER,
  // OBJECT_SELECT, OBJECT_SET, and CUSTOM.
];

<BaseForm
  formTitle="Disabled fields"
  formContent={formContent}
  formState={formState}
  onFieldValueChange={handleFieldValueChange}
  onSubmit={handleSubmit}
/>`}}}},E={args:{formContent:u,isPending:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},P={args:{formContent:u,onSubmit:r,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},un=[e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",helperText:"Use a switch for boolean settings that map to on/off state.",fieldComponentProps:{}})],D={args:{formTitle:"Update employee",formContent:un,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    fieldComponentProps: {},
  },
];

<BaseForm
  formTitle="Update employee"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},fn=[e({fieldKey:"structPayload",fieldComponent:"UNSUPPORTED",label:"Struct payload",isRequired:!0,fieldComponentProps:{}}),e({fieldKey:"geoshape",fieldComponent:"UNSUPPORTED",label:"Geoshape",fieldComponentProps:{}})],F={args:{formTitle:"Unsupported field types",formContent:fn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  },
];

// Unsupported fields render a disabled message.
// Use fieldComponent: "CUSTOM" when you need to collect a value for these types.
<BaseForm
  formTitle="Unsupported field types"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Cn=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Required field"}}),e({fieldKey:"username",fieldComponent:"TEXT_INPUT",label:"Username",fieldComponentProps:{minLength:3,maxLength:20,placeholder:"3-20 characters"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:100,step:1,placeholder:"0-100"}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{min:new Date(2024,0,1),max:new Date(2026,11,31),placeholder:"2024-2026 only"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{maxSize:1048576}})],R={args:{formContent:Cn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Required field" },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: { minLength: 3, maxLength: 20 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: { min: 0, max: 100 },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { maxSize: 1048576 },
  },
];

// Validation fires on blur, revalidates on change.
// Submit button shows error summary tooltip when invalid.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Sn=/^[^\s@]+@[^\s@]+\.[^\s@]+$/u,bn=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,validate:async t=>{if(!(typeof t!="string"||t.length===0))return Sn.test(t)?void 0:"Enter a valid email address"},fieldComponentProps:{placeholder:"user@example.com"}})],_={args:{formContent:bn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value) => {
      if (typeof value !== "string" || value.length === 0) return undefined;
      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Enter a valid email address";
    },
    fieldComponentProps: { placeholder: "user@example.com" },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},hn=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,onValidationError:t=>{if(t.type==="required")return"Please provide your name"},fieldComponentProps:{placeholder:"Your name"}}),e({fieldKey:"age",fieldComponent:"NUMBER_INPUT",label:"Age",onValidationError:t=>{if(t.type==="min")return`You must be at least ${String(t.min)} years old`;if(t.type==="max")return`Age cannot exceed ${String(t.max)}`},fieldComponentProps:{min:18,max:120,placeholder:"18-120"}})],I={args:{formContent:hn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") return "Please provide your name";
      return undefined; // fall back to default
    },
    fieldComponentProps: { placeholder: "Your name" },
  },
  {
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") return \`You must be at least \${error.min} years old\`;
      if (error.type === "max") return \`Age cannot exceed \${error.max}\`;
      return undefined;
    },
    fieldComponentProps: { min: 18, max: 120 },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},N={parameters:{docs:{source:{code:`const client = useOsdkClient();
const employeeObjectSet = client(Employee);

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: { value: employeeObjectSet },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}},render:()=>n.jsx(yn,{})};function yn(){const t=Z(),o=l.useMemo(()=>t(z),[t]),a=l.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",fieldComponentProps:{value:o}})],[o]);return n.jsx(p,{formContent:a,onSubmit:r})}const Tn=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (Select)",fieldComponentProps:{items:d,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team (Searchable)",fieldComponentProps:{items:d,isSearchable:!0,placeholder:"Search teams..."}})],K={args:{formContent:Tn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      placeholder: "Select department...",
    },
  },
  {
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search teams...",
    },
  },
];

// Side-by-side comparison: plain Select vs searchable Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},gn=[e({fieldKey:"categories",fieldComponent:"DROPDOWN",label:"Categories (Select)",isRequired:!0,fieldComponentProps:{items:H,isMultiple:!0,placeholder:"Select categories..."}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (Searchable)",fieldComponentProps:{items:H,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}})],v={args:{formContent:gn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      placeholder: "Select categories...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  },
];

// Side-by-side comparison: plain multi-Select vs searchable multi-Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},En=[e({fieldKey:"assigneeUserId",fieldComponent:"DROPDOWN",label:"Assignee",fieldComponentProps:{items:ne,itemToStringLabel:oe,renderItemLabel:re,isSearchable:!0,placeholder:"Search users..."}}),e({fieldKey:"reviewerUserIds",fieldComponent:"DROPDOWN",label:"Reviewers",fieldComponentProps:{items:ne,itemToStringLabel:oe,renderItemLabel:re,isMultiple:!0,isSearchable:!0,placeholder:"Search reviewers..."}})],x={args:{formContent:En,onSubmit:r},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

const usersById = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent = [
  {
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => usersById[userId]?.name ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{usersById[userId]?.name ?? userId}</strong>
          <span>{usersById[userId]?.team}</span>
        </span>
      ),
      isSearchable: true,
      placeholder: "Search users...",
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Pn=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At (date + time)",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline (date only)",fieldComponentProps:{placeholder:"Select date"}})],O={args:{formContent:Pn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  },
];

// showTime: true adds a time picker alongside the date calendar.
// Without showTime, only the date is selectable.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Dn=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:d,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:d,isSearchable:!0,placeholder:"Search teams..."}})];function Fn(){const[t,o]=l.useState(!1),a=l.useCallback(()=>{o(!0)},[]),i=l.useCallback(()=>{o(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(kt,{text:"Open dialog",onClick:a}),n.jsx(Vt,{className:"osdkBlueprintDialogForm",isOpen:t,onClose:i,title:"Action form",children:n.jsx(p,{formContent:Dn,onSubmit:r})})]})}const U={render:()=>n.jsx(Fn,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},Rn=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:d,placeholder:"Select department..."}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:H,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function _n(){const[t,o]=l.useState(!1),a=l.useCallback(()=>{o(!0)},[]),i=l.useCallback(()=>{o(!1)},[]);return n.jsxs(n.Fragment,{children:[n.jsx(kt,{text:"Open dialog",onClick:a}),n.jsx(Vt,{className:"osdkBlueprintDialogForm",isOpen:t,onClose:i,title:"New employee",children:n.jsx(p,{formContent:Rn,onSubmit:r})})]})}const B={render:()=>n.jsx(_n,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}},In=[e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates (date only)",fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window (date + time)",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}})],A={args:{formContent:In,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  },
];

// DATE_RANGE_INPUT renders two inputs (start/end) with
// a shared calendar popover. showTime adds time pickers.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Nn=[e({fieldKey:"attachments",fieldComponent:"FILE_PICKER",label:"Attachments",fieldComponentProps:{isMulti:!0,accept:[".pdf",".png",".jpg"],maxSize:5242880,text:"No files selected",buttonText:"Choose Files"}}),e({fieldKey:"singleFile",fieldComponent:"FILE_PICKER",label:"Cover Image (single file)",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"}})],w={args:{formContent:Nn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,     // 5 MB
      text: "No files selected",
      buttonText: "Choose Files",
    },
  },
  {
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
    },
  },
];

// isMulti: true allows selecting multiple files.
// maxSize validates individual file sizes (in bytes).
// accept filters file types in the browser file dialog.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Kn=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,helperText:n.jsxs("span",{children:["We'll use this to send you a confirmation."," ",n.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",fieldComponentProps:{placeholder:"you@example.com"}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",helperText:n.jsxs("span",{children:["Write a short bio. ",n.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",fieldComponentProps:{items:d,placeholder:"Select department"}})],M={args:{formContent:Kn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy">Privacy policy</a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: { placeholder: "you@example.com" },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales"],
      placeholder: "Select department",
    },
  },
];

// helperText accepts React.ReactNode — plain strings, JSX with links,
// bold text, or any valid React node.
// "tooltip" (default) shows an info icon next to the label.
// "bottom" renders the text below the label, above the input.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},vn=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name",defaultValue:"Jane Doe"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:1e3,step:1,defaultValue:42}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}})],W={args:{formContent:vn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0, max: 1000, step: 1,
      defaultValue: 42,
    },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
];

// defaultValue inside fieldComponentProps pre-populates fields
// in uncontrolled mode. The "Priority" dropdown has no default
// for comparison.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},xn=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}})],On=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:d,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}]}}],L={args:{formContent:xn,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees…",
    },
  },
];

// OBJECT_SELECT renders a searchable dropdown that queries
// the Foundry ontology for objects matching the search term.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}};function Un(){const t=Z(),o=l.useMemo(()=>t(z).where({department:"Marketing"}),[t]),a=l.useMemo(()=>[e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Marketing employee",helperText:"This selector is scoped by an ObjectSet.",fieldComponentProps:{objectSet:o,placeholder:"Search Marketing employees…"}})],[o]);return n.jsx(p,{formContent:a,onSubmit:r})}const k={render:()=>n.jsx(Un,{}),parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );

  const formContent = [
    {
      type: "field",
      definition: {
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      },
    },
  ];

  return <BaseForm formContent={formContent} onSubmit={handleSubmit} />;
}`}}}},V={args:{formContent:On,onSubmit:r}},Bn=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],j={args:{formContent:Bn,onSubmit:r}},An=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:d,placeholder:"Select..."}}]}}],q={args:{formContent:An,onSubmit:r}};function oe(t){var o;return typeof t!="string"?String(t):((o=jt[t])==null?void 0:o.name)??t}function re(t){const o=String(t),a=jt[o];return n.jsxs("span",{className:"osdkRichDropdownLabel",children:[n.jsx("strong",{children:(a==null?void 0:a.name)??o}),(a==null?void 0:a.team)!=null?n.jsx("span",{className:"osdkRichDropdownDescription",children:a.team}):null]})}var ae,le,ie;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseForm } from "@osdk/react-components/action-form";
import {
  THEMED_SLIDER_DEFAULT_VALUE,
  ThemedSliderField,
} from "./ThemedSliderField";

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "description",
    fieldComponent: "TEXT_AREA",
    label: "Description",
    fieldComponentProps: { placeholder: "Enter a description", rows: 3 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    isRequired: true,
    fieldComponentProps: { min: 0, max: 1000, step: 1 },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  {
    fieldKey: "isActive",
    fieldComponent: "RADIO_BUTTONS",
    label: "Is Active",
    fieldComponentProps: {
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: { placeholder: "Select a date" },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { accept: ".pdf,.doc,.docx" },
  },
  {
    fieldKey: "completion",
    fieldComponent: "CUSTOM",
    label: "Completion",
    fieldComponentProps: {
      defaultValue: THEMED_SLIDER_DEFAULT_VALUE,
      customRenderer: (props) => <ThemedSliderField {...props} />,
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(ie=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var se,me,de;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [formState, setFormState] = useState({
  completion: THEMED_SLIDER_DEFAULT_VALUE,
});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <div>
    <div>
      <strong>Current State:</strong>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
    <BaseForm
      formContent={formContent}
      formState={formState}
      onFieldValueChange={handleFieldValueChange}
      onSubmit={(state) => console.log("Submitted:", state)}
    />
  </div>
);\`
      }
    }
  },
  render: () => <ControlledFormStory />
}`,...(de=(me=S.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ce,ue;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "When a stored value has a shape the field component can't display, the field says what it expected in place of the component and offers to clear the value. These values don't block submit; they are submitted unchanged for server validation to report. Validation errors still show under such a field: the empty array in the required Availability field is both rejected by the date range field and empty to the required rule, so after a submit attempt it also shows the required error, which blocks submit."
      },
      source: {
        code: \`const formContent = [
  field({ fieldKey: "name", fieldComponent: "TEXT_INPUT", label: "Name", fieldComponentProps: {} }),
  field({ fieldKey: "quantity", fieldComponent: "NUMBER_INPUT", label: "Quantity", fieldComponentProps: {} }),
  field({ fieldKey: "startDate", fieldComponent: "DATETIME_PICKER", label: "Start Date", fieldComponentProps: {} }),
  field({ fieldKey: "isRemote", fieldComponent: "SWITCH", label: "Remote", fieldComponentProps: {} }),
  field({ fieldKey: "availability", fieldComponent: "DATE_RANGE_INPUT", label: "Availability", isRequired: true, fieldComponentProps: {} }),
];

// Values these field components can't display
const [formState, setFormState] = useState({
  name: { first: "Ada" },
  quantity: "42",
  startDate: "2026-11-19",
  isRemote: "false",
  availability: [],
});

const handleFieldValueChange = (fieldKey, value) => {
  setFormState((prev) => ({ ...prev, [fieldKey]: value }));
};

return (
  <BaseForm
    formContent={formContent}
    formState={formState}
    onFieldValueChange={handleFieldValueChange}
    onSubmit={(state) => console.log("Submitted:", state)}
  />
);\`
      }
    }
  },
  render: () => <UnexpectedValuesFormStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    submitSpy.mockClear();

    // Each field says what it expected instead of hiding the value.
    await expect(await canvas.findByText("Expected a number, received: string")).toBeInTheDocument();
    await expect(canvas.getByText("Expected 2 dates, received an empty array")).toBeInTheDocument();

    // Clearing an unexpected value brings back the field component.
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear Quantity"
    }));
    await expect(await canvas.findByRole("textbox", {
      name: /Quantity/u
    })).toHaveValue("");

    // Only the required error blocks submit; unexpected values add no errors.
    await userEvent.click(canvas.getByRole("button", {
      name: "Submit"
    }));
    await expect(await canvas.findAllByText("This field is required")).not.toHaveLength(0);
    await expect(canvas.getByText("1 issue")).toBeInTheDocument();
    await expect(submitSpy).not.toHaveBeenCalled();
  }
}`,...(ue=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var fe,Ce,Se;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    formTitle: "Create New Order",
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Se=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var be,he,ye;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    formContent: EMPTY_FORM_CONTENT,
    isLoading: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(ye=(he=y.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Te,ge,Ee;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    formContent,
    isSubmitDisabled: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ee=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var Pe,De,Fe;g.parameters={...g.parameters,docs:{...(Pe=g.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <DisabledFieldsStory />,
  parameters: {
    docs: {
      description: {
        story: "Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."
      },
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    disabled: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    disabled: true,
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
  // Repeat disabled: true for TEXT_AREA, NUMBER_INPUT, RADIO_BUTTONS,
  // SWITCH, DATETIME_PICKER, DATE_RANGE_INPUT, FILE_PICKER,
  // OBJECT_SELECT, OBJECT_SET, and CUSTOM.
];

<BaseForm
  formTitle="Disabled fields"
  formContent={formContent}
  formState={formState}
  onFieldValueChange={handleFieldValueChange}
  onSubmit={handleSubmit}
/>\`
      }
    }
  }
}`,...(Fe=(De=g.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Re,_e,Ie;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    formContent,
    isPending: true,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ie=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Ne,Ke,ve;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit,
    submitButtonText: "Save employee",
    submitButtonVariant: "secondary"
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>\`
      }
    }
  }
}`,...(ve=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:ve.source}}};var xe,Oe,Ue;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee",
    formContent: switchFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "isRemote",
    fieldComponent: "SWITCH",
    label: "Remote employee",
    fieldComponentProps: {},
  },
];

<BaseForm
  formTitle="Update employee"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ue=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var Be,Ae,we;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    formTitle: "Unsupported field types",
    formContent: unsupportedFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "structPayload",
    fieldComponent: "UNSUPPORTED",
    label: "Struct payload",
    isRequired: true,
    fieldComponentProps: {},
  },
  {
    fieldKey: "geoshape",
    fieldComponent: "UNSUPPORTED",
    label: "Geoshape",
    fieldComponentProps: {},
  },
];

// Unsupported fields render a disabled message.
// Use fieldComponent: "CUSTOM" when you need to collect a value for these types.
<BaseForm
  formTitle="Unsupported field types"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(we=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var Me,We,Le;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    formContent: validationFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Required field" },
  },
  {
    fieldKey: "username",
    fieldComponent: "TEXT_INPUT",
    label: "Username",
    fieldComponentProps: { minLength: 3, maxLength: 20 },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: { min: 0, max: 100 },
  },
  {
    fieldKey: "startDate",
    fieldComponent: "DATETIME_PICKER",
    label: "Start Date",
    fieldComponentProps: {
      min: new Date(2024, 0, 1),
      max: new Date(2026, 11, 31),
    },
  },
  {
    fieldKey: "document",
    fieldComponent: "FILE_PICKER",
    label: "Document",
    fieldComponentProps: { maxSize: 1048576 },
  },
];

// Validation fires on blur, revalidates on change.
// Submit button shows error summary tooltip when invalid.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Le=(We=R.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var ke,Ve,je;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    formContent: customValidateFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    validate: async (value) => {
      if (typeof value !== "string" || value.length === 0) return undefined;
      const emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;
      return emailRegex.test(value) ? undefined : "Enter a valid email address";
    },
    fieldComponentProps: { placeholder: "user@example.com" },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(je=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:je.source}}};var qe,Xe,He;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    formContent: customErrorFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    onValidationError: (error) => {
      if (error.type === "required") return "Please provide your name";
      return undefined; // fall back to default
    },
    fieldComponentProps: { placeholder: "Your name" },
  },
  {
    fieldKey: "age",
    fieldComponent: "NUMBER_INPUT",
    label: "Age",
    onValidationError: (error) => {
      if (error.type === "min") return \\\`You must be at least \\\${error.min} years old\\\`;
      if (error.type === "max") return \\\`Age cannot exceed \\\${error.max}\\\`;
      return undefined;
    },
    fieldComponentProps: { min: 18, max: 120 },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(He=(Xe=I.parameters)==null?void 0:Xe.docs)==null?void 0:He.source}}};var Je,Ge,Qe;N.parameters={...N.parameters,docs:{...(Je=N.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const client = useOsdkClient();
const employeeObjectSet = client(Employee);

const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employees",
    fieldComponent: "OBJECT_SET",
    label: "Employees",
    fieldComponentProps: { value: employeeObjectSet },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  },
  render: () => <ObjectSetFieldStory />
}`,...(Qe=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ye,$e,ze;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    formContent: singleSelectDropdownFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (Select)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      placeholder: "Select department...",
    },
  },
  {
    fieldKey: "team",
    fieldComponent: "DROPDOWN",
    label: "Team (Searchable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      isSearchable: true,
      placeholder: "Search teams...",
    },
  },
];

// Side-by-side comparison: plain Select vs searchable Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(ze=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Ze,et,tt;v.parameters={...v.parameters,docs:{...(Ze=v.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    formContent: multiSelectDropdownFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "categories",
    fieldComponent: "DROPDOWN",
    label: "Categories (Select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      placeholder: "Select categories...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (Searchable)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      isSearchable: true,
      placeholder: "Search tags...",
    },
  },
];

// Side-by-side comparison: plain multi-Select vs searchable multi-Combobox.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(tt=(et=v.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,ot,rt;x.parameters={...x.parameters,docs:{...(nt=x.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    formContent: richDropdownLabelFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

const usersById = {
  usr_ada: { name: "Ada Lovelace", team: "Computation" },
  usr_grace: { name: "Grace Hopper", team: "Compilers" },
  usr_katherine: { name: "Katherine Johnson", team: "Flight dynamics" },
};

const formContent = [
  {
    fieldKey: "assigneeUserId",
    fieldComponent: "DROPDOWN",
    label: "Assignee",
    fieldComponentProps: {
      items: userIds,
      itemToStringLabel: (userId) => usersById[userId]?.name ?? userId,
      renderItemLabel: (userId) => (
        <span>
          <strong>{usersById[userId]?.name ?? userId}</strong>
          <span>{usersById[userId]?.team}</span>
        </span>
      ),
      isSearchable: true,
      placeholder: "Search users...",
    },
  },
];

<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(rt=(ot=x.parameters)==null?void 0:ot.docs)==null?void 0:rt.source}}};var at,lt,it;O.parameters={...O.parameters,docs:{...(at=O.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    formContent: dateTimeFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "scheduledAt",
    fieldComponent: "DATETIME_PICKER",
    label: "Scheduled At (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholder: "Select date and time",
    },
  },
  {
    fieldKey: "deadline",
    fieldComponent: "DATETIME_PICKER",
    label: "Deadline (date only)",
    fieldComponentProps: {
      placeholder: "Select date",
    },
  },
];

// showTime: true adds a time picker alongside the date calendar.
// Without showTime, only the date is selectable.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(it=(lt=O.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};var st,mt,dt;U.parameters={...U.parameters,docs:{...(st=U.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: () => <BlueprintDialogBaseForm />,
  parameters: {
    docs: {
      source: {
        code: \`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}\`
      }
    }
  }
}`,...(dt=(mt=U.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var pt,ct,ut;B.parameters={...B.parameters,docs:{...(pt=B.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => <ScrollableDialogBaseForm />,
  parameters: {
    docs: {
      description: {
        story: "When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."
      },
      source: {
        code: \`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>\`
      }
    }
  }
}`,...(ut=(ct=B.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var ft,Ct,St;A.parameters={...A.parameters,docs:{...(ft=A.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    formContent: dateRangeFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "vacationDates",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Vacation Dates (date only)",
    fieldComponentProps: {
      placeholderStart: "Start date",
      placeholderEnd: "End date",
    },
  },
  {
    fieldKey: "meetingWindow",
    fieldComponent: "DATE_RANGE_INPUT",
    label: "Meeting Window (date + time)",
    fieldComponentProps: {
      showTime: true,
      placeholderStart: "Start",
      placeholderEnd: "End",
    },
  },
];

// DATE_RANGE_INPUT renders two inputs (start/end) with
// a shared calendar popover. showTime adds time pickers.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(St=(Ct=A.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var bt,ht,yt;w.parameters={...w.parameters,docs:{...(bt=w.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    formContent: multiFilePickerFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "attachments",
    fieldComponent: "FILE_PICKER",
    label: "Attachments",
    fieldComponentProps: {
      isMulti: true,
      accept: [".pdf", ".png", ".jpg"],
      maxSize: 5242880,     // 5 MB
      text: "No files selected",
      buttonText: "Choose Files",
    },
  },
  {
    fieldKey: "singleFile",
    fieldComponent: "FILE_PICKER",
    label: "Cover Image (single file)",
    fieldComponentProps: {
      accept: ".png,.jpg",
    },
  },
];

// isMulti: true allows selecting multiple files.
// maxSize validates individual file sizes (in bytes).
// accept filters file types in the browser file dialog.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(yt=(ht=w.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var Tt,gt,Et;M.parameters={...M.parameters,docs:{...(Tt=M.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    formContent: helperTextFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "email",
    fieldComponent: "TEXT_INPUT",
    label: "Email",
    isRequired: true,
    helperText: (
      <span>
        We'll use this to send you a confirmation.{" "}
        <a href="#privacy">Privacy policy</a>
      </span>
    ),
    helperTextPlacement: "tooltip",
    fieldComponentProps: { placeholder: "you@example.com" },
  },
  {
    fieldKey: "bio",
    fieldComponent: "TEXT_AREA",
    label: "Bio",
    helperText: (
      <span>
        Write a short bio. <strong>Markdown</strong> is supported.
      </span>
    ),
    helperTextPlacement: "bottom",
    fieldComponentProps: { placeholder: "Tell us about yourself", rows: 3 },
  },
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department",
    helperText: "Select the department you belong to",
    helperTextPlacement: "tooltip",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales"],
      placeholder: "Select department",
    },
  },
];

// helperText accepts React.ReactNode — plain strings, JSX with links,
// bold text, or any valid React node.
// "tooltip" (default) shows an info icon next to the label.
// "bottom" renders the text below the label, above the input.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Et=(gt=M.parameters)==null?void 0:gt.docs)==null?void 0:Et.source}}};var Pt,Dt,Ft;W.parameters={...W.parameters,docs:{...(Pt=W.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  args: {
    formContent: defaultValueFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: {
      placeholder: "Enter a name",
      defaultValue: "Jane Doe",
    },
  },
  {
    fieldKey: "quantity",
    fieldComponent: "NUMBER_INPUT",
    label: "Quantity",
    fieldComponentProps: {
      min: 0, max: 1000, step: 1,
      defaultValue: 42,
    },
  },
  {
    fieldKey: "priority",
    fieldComponent: "DROPDOWN",
    label: "Priority",
    fieldComponentProps: {
      items: ["Low", "Medium", "High"],
      placeholder: "Select priority",
    },
  },
];

// defaultValue inside fieldComponentProps pre-populates fields
// in uncontrolled mode. The "Priority" dropdown has no default
// for comparison.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ft=(Dt=W.parameters)==null?void 0:Dt.docs)==null?void 0:Ft.source}}};var Rt,_t,It;L.parameters={...L.parameters,docs:{...(Rt=L.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    formContent: objectSelectFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`const formContent = [
  {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    label: "Name",
    isRequired: true,
    fieldComponentProps: { placeholder: "Enter a name" },
  },
  {
    fieldKey: "employee",
    fieldComponent: "OBJECT_SELECT",
    label: "Employee",
    fieldComponentProps: {
      objectType: { type: "object" as const, apiName: "Employee" },
      placeholder: "Search employees\\u2026",
    },
  },
];

// OBJECT_SELECT renders a searchable dropdown that queries
// the Foundry ontology for objects matching the search term.
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(It=(_t=L.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var Nt,Kt,vt;k.parameters={...k.parameters,docs:{...(Nt=k.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  render: () => <ScopedObjectSelectStory />,
  parameters: {
    docs: {
      source: {
        code: \`function ScopedEmployeeForm() {
  const client = useOsdkClient();
  const marketingEmployees = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );

  const formContent = [
    {
      type: "field",
      definition: {
        fieldKey: "employee",
        fieldComponent: "OBJECT_SELECT",
        label: "Marketing employee",
        helperText: "This selector is scoped by an ObjectSet.",
        fieldComponentProps: {
          objectSet: marketingEmployees,
          placeholder: "Search Marketing employees…",
        },
      },
    },
  ];

  return <BaseForm formContent={formContent} onSubmit={handleSubmit} />;
}\`
      }
    }
  }
}`,...(vt=(Kt=k.parameters)==null?void 0:Kt.docs)==null?void 0:vt.source}}};var xt,Ot,Ut;V.parameters={...V.parameters,docs:{...(xt=V.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Ut=(Ot=V.parameters)==null?void 0:Ot.docs)==null?void 0:Ut.source}}};var Bt,At,wt;j.parameters={...j.parameters,docs:{...(Bt=j.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(wt=(At=j.parameters)==null?void 0:At.docs)==null?void 0:wt.source}}};var Mt,Wt,Lt;q.parameters={...q.parameters,docs:{...(Mt=q.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Lt=(Wt=q.parameters)==null?void 0:Wt.docs)==null?void 0:Lt.source}}};const Ko=["Default","Controlled","WithUnexpectedValues","WithCustomTitle","Loading","SubmitDisabled","DisabledFields","Pending","WithCustomSubmitButton","WithSwitch","WithUnsupportedFields","WithValidation","WithCustomValidation","WithCustomErrorMessages","WithObjectSetField","WithDropdown","WithMultiSelectDropdown","WithRichDropdownLabels","WithDateTimePicker","InsideBlueprintDialog","ScrollableDialogForm","WithDateRangePicker","WithMultiFilePicker","WithHelperText","WithDefaultValues","WithObjectSelect","WithScopedObjectSelect","WithSections","WithMinimalSections","WithGridSection"];export{S as Controlled,C as Default,g as DisabledFields,U as InsideBlueprintDialog,y as Loading,E as Pending,B as ScrollableDialogForm,T as SubmitDisabled,I as WithCustomErrorMessages,P as WithCustomSubmitButton,h as WithCustomTitle,_ as WithCustomValidation,A as WithDateRangePicker,O as WithDateTimePicker,W as WithDefaultValues,K as WithDropdown,q as WithGridSection,M as WithHelperText,j as WithMinimalSections,w as WithMultiFilePicker,v as WithMultiSelectDropdown,L as WithObjectSelect,N as WithObjectSetField,x as WithRichDropdownLabels,k as WithScopedObjectSelect,V as WithSections,D as WithSwitch,b as WithUnexpectedValues,F as WithUnsupportedFields,R as WithValidation,Ko as __namedExportsOrder,No as default};
