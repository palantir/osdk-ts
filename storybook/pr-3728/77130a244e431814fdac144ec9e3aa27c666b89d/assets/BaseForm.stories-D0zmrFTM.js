import{r as a,j as t,f as qn}from"./iframe-CeONtGYE.js";import{E as Y}from"./Employee-BAk2o20h.js";import{F as Xn,S as Jn}from"./SubmissionOutputPanel-gT0ZIGpp.js";import{B as p}from"./BaseForm-cNvdNf1K.js";import{u as $}from"./useOsdkClient-Cb3NTTyB.js";import{B as Ln,D as kn}from"./dialog-C1kb8V3E.js";import"./preload-helper-DvBXsFR0.js";import"./index-bFgDLkru.js";import"./ActionButton-AFO9eSpU.js";import"./Button-ChHvGo4U.js";import"./useBaseUiId-Dx7XmX8N.js";import"./SkeletonBar-Di-FKU_W.js";import"./Tooltip-DBPhmiDX.js";import"./index-DxRvRo72.js";import"./index-C4EeMnB3.js";import"./InternalBackdrop-CxNVhvRT.js";import"./composite-BsZkzPht.js";import"./index-K450AsIM.js";import"./getDisabledMountTransitionStyles-DPlOhD36.js";import"./ToolbarRootContext-uLaFcH8c.js";import"./PopoverPopup-BGU653ug.js";import"./info-sign-4l3MuHoM.js";import"./svgIconContainer-CQgzwcHS.js";import"./DropdownField-CYKO4B5H.js";import"./toNumber-BO345wWH.js";import"./Input-D0sau520.js";import"./useControlled-CG2mEVzV.js";import"./tick-B6DaleAW.js";import"./isObject-BmhJRh0P.js";import"./search-CVSxuCGC.js";import"./cross-CNEWv4-m.js";import"./useValueChanged-B1xeCjzy.js";import"./getPseudoElementBounds-C5I4UJ-M.js";import"./CompositeItem-Cj5a69yU.js";import"./makeExternalStore-RXvhCFRl.js";import"./chevron-up-BPXUv96k.js";import"./chevron-down-2yZeoid0.js";import"./useEventCallback-CjvTvM1n.js";import"./Switch-CzKI7oLy.js";import"./iconLoader-WAzo3PDT.js";import"./CompositeRoot-CXESh-4O.js";import"./TimePicker-BRTxDajr.js";import"./CollapsiblePanel-Bgt_TMxz.js";import"./error-DarXGylQ.js";const Qn="_sliderField_s5oyb_1",Hn="_sliderInput_s5oyb_7",Gn="_sliderValue_s5oyb_19",H={sliderField:Qn,sliderInput:Hn,sliderValue:Gn},z=50,Yn=0,$n=100,G=a.memo(function({disabled:o,id:l,onChange:i,value:s}){const d=zn(s),J=a.useCallback(Q=>{i==null||i(Q.currentTarget.valueAsNumber)},[i]);return t.jsxs("div",{className:H.sliderField,children:[t.jsx("input",{"aria-valuetext":`${d}% complete`,className:H.sliderInput,disabled:o,id:l,max:$n,min:Yn,onChange:J,type:"range",value:d}),t.jsxs("output",{className:H.sliderValue,htmlFor:l,children:[d,"% complete"]})]})});function zn(n){return typeof n=="number"?n:z}try{G.displayName="ThemedSliderField",G.__docgenInfo={description:"",displayName:"ThemedSliderField",props:{}}}catch{}const{fn:Zn}=__STORYBOOK_MODULE_TEST__;function e(n){return{type:"field",definition:n}}const f=["Low","Medium","High"],m=["Engineering","Marketing","Sales","Finance","Operations","Legal"],u=["Urgent","Review","Follow-up","Archived","Pinned"],Z=["usr_ada","usr_grace","usr_katherine"],jn={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},c=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",isRequired:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"completion",fieldComponent:"CUSTOM",label:"Completion",fieldComponentProps:{defaultValue:z,customRenderer:n=>t.jsx(G,{...n})}})],et=[],X={current:void 0},nt=Zn().mockName("onSubmit");function r(n){var o;nt(n),(o=X.current)==null||o.call(X,{status:"success",submittedValues:n,response:{message:"onSubmit completed"}})}function tt(){const[n,o]=a.useState({status:"idle"});return X.current=o,t.jsx(Jn,{idleMessage:"Submit the form to see submitted values.",snapshot:n})}const Do={title:"Components/ActionForm/BaseForm",component:p,tags:["beta"],decorators:[n=>t.jsx(Xn,{output:t.jsx(tt,{}),children:t.jsx(n,{})})],parameters:{msw:{handlers:[...qn.handlers]},controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}}},argTypes:{formTitle:{description:"Optional title displayed at the top of the form.",control:"text"},formContent:{description:"Ordered list of form content items (fields or sections) to render.",control:!1},onSubmit:{description:"Called when the form is submitted. Receives the current form state.",control:!1,table:{category:"Events"}},isSubmitDisabled:{description:"Whether the submit button is disabled.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isPending:{description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isLoading:{description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},className:{description:"Additional CSS class name for the form.",control:"text"},submitButtonText:{description:"Text displayed in the submit button.",control:"text",table:{defaultValue:{summary:"Submit"}}},submitButtonVariant:{description:"Visual variant of the submit button.",control:"select",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}}}},C={args:{formContent:c,onSubmit:r},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";
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
);`}}},render:()=>t.jsx(ot,{})};function ot(){const[n,o]=a.useState({completion:z}),l=a.useCallback((i,s)=>{o(d=>({...d,[i]:s}))},[]);return t.jsxs("div",{children:[t.jsxs("div",{className:"osdkFormStorySpacing",children:[t.jsx("strong",{children:"Current Form State:"}),t.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(n,(i,s)=>s instanceof File?`File: ${s.name}`:s,2)})]}),t.jsx(p,{formContent:c,formState:n,onFieldValueChange:l,onSubmit:r})]})}const b={args:{formTitle:"Create New Order",formContent:c,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},h={args:{formContent:et,isLoading:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},y={args:{formContent:c,isSubmitDisabled:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},rt={name:"Locked employee",description:"Locked multi-line description",quantity:42,priority:"Medium",tags:["Urgent","Pinned"],isActive:!0,isRemote:!0,scheduledAt:new Date(2026,0,15,9,30),vacationDates:[new Date(2026,0,15),new Date(2026,0,31)],custom:"Requires approval"},lt=["Requires approval","Ready to submit"];function at(n){const o=n.value!=null?String(n.value):void 0;return t.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":n.disabled===!0||void 0,children:lt.map(l=>t.jsx("button",{type:"button",disabled:n.disabled,className:l===o?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var i;return(i=n.onChange)==null?void 0:i.call(n,l)},children:l},l))})}function it(){const n=$(),o=a.useMemo(()=>n(Y),[n]),[l,i]=a.useState(rt),s=a.useCallback((J,Q)=>{i(Vn=>({...Vn,[J]:Q}))},[]),d=a.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",disabled:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",disabled:!0,fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",disabled:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority (select)",disabled:!0,fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (searchable multi-select)",disabled:!0,fieldComponentProps:{items:u,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",disabled:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",disabled:!0,fieldComponentProps:{}}),e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",disabled:!0,fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates",disabled:!0,fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",disabled:!0,fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",disabled:!0,fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",disabled:!0,fieldComponentProps:{value:o}}),e({fieldKey:"custom",fieldComponent:"CUSTOM",label:"Custom field",disabled:!0,fieldComponentProps:{customRenderer:at}})],[o]);return t.jsx(p,{formTitle:"Disabled fields",formContent:d,formState:l,onFieldValueChange:s,onSubmit:r})}const g={render:()=>t.jsx(it,{}),parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
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
/>`}}}},T={args:{formContent:c,isPending:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},P={args:{formContent:c,onSubmit:r,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},st=[e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",helperText:"Use a switch for boolean settings that map to on/off state.",fieldComponentProps:{}})],E={args:{formTitle:"Update employee",formContent:st,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},mt=[e({fieldKey:"structPayload",fieldComponent:"UNSUPPORTED",label:"Struct payload",isRequired:!0,fieldComponentProps:{}}),e({fieldKey:"geoshape",fieldComponent:"UNSUPPORTED",label:"Geoshape",fieldComponentProps:{}})],D={args:{formTitle:"Unsupported field types",formContent:mt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},dt=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Required field"}}),e({fieldKey:"username",fieldComponent:"TEXT_INPUT",label:"Username",fieldComponentProps:{minLength:3,maxLength:20,placeholder:"3-20 characters"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:100,step:1,placeholder:"0-100"}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{min:new Date(2024,0,1),max:new Date(2026,11,31),placeholder:"2024-2026 only"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{maxSize:1048576}})],F={args:{formContent:dt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},pt=/^[^\s@]+@[^\s@]+\.[^\s@]+$/u,ct=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,validate:async n=>{if(!(typeof n!="string"||n.length===0))return pt.test(n)?void 0:"Enter a valid email address"},fieldComponentProps:{placeholder:"user@example.com"}})],N={args:{formContent:ct,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ut=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,onValidationError:n=>{if(n.type==="required")return"Please provide your name"},fieldComponentProps:{placeholder:"Your name"}}),e({fieldKey:"age",fieldComponent:"NUMBER_INPUT",label:"Age",onValidationError:n=>{if(n.type==="min")return`You must be at least ${String(n.min)} years old`;if(n.type==="max")return`Age cannot exceed ${String(n.max)}`},fieldComponentProps:{min:18,max:120,placeholder:"18-120"}})],I={args:{formContent:ut,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},R={parameters:{docs:{source:{code:`const client = useOsdkClient();
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
/>`}}},render:()=>t.jsx(ft,{})};function ft(){const n=$(),o=a.useMemo(()=>n(Y),[n]),l=a.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",fieldComponentProps:{value:o}})],[o]);return t.jsx(p,{formContent:l,onSubmit:r})}const Ct=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (Select)",fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team (Searchable)",fieldComponentProps:{items:m,isSearchable:!0,placeholder:"Search teams..."}})],_={args:{formContent:Ct,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},St=[e({fieldKey:"categories",fieldComponent:"DROPDOWN",label:"Categories (Select)",isRequired:!0,fieldComponentProps:{items:u,isMultiple:!0,placeholder:"Select categories..."}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (Searchable)",fieldComponentProps:{items:u,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}})],K={args:{formContent:St,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},bt=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (creatable)",fieldComponentProps:{items:m,createNewItemFromQuery:ee,placeholder:"Search or create a department..."}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (creatable multi-select)",fieldComponentProps:{items:u,isMultiple:!0,createNewItemFromQuery:ee,placeholder:"Search or create tags..."}})],O={args:{formContent:bt,onSubmit:r},parameters:{docs:{description:{story:'Passing `createNewItemFromQuery` turns a dropdown into a creatable combobox: typing a value that matches no existing item offers a "Create …" option that commits the typed value (by click or by pressing Enter). Works for single-select and multi-select, where it behaves like a tag input.'},source:{code:`const coerceStringQuery = (query) => query.trim();

const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (creatable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      createNewItemFromQuery: coerceStringQuery,
      placeholder: "Search or create a department...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (creatable multi-select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      createNewItemFromQuery: coerceStringQuery,
      placeholder: "Search or create tags...",
    },
  },
];

// createNewItemFromQuery coerces the raw query into an item value.
// Return undefined to reject a query (no create option shown).
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},ht=[e({fieldKey:"assigneeUserId",fieldComponent:"DROPDOWN",label:"Assignee",fieldComponentProps:{items:Z,itemToStringLabel:ne,renderItemLabel:te,isSearchable:!0,placeholder:"Search users..."}}),e({fieldKey:"reviewerUserIds",fieldComponent:"DROPDOWN",label:"Reviewers",fieldComponentProps:{items:Z,itemToStringLabel:ne,renderItemLabel:te,isMultiple:!0,isSearchable:!0,placeholder:"Search reviewers..."}})],x={args:{formContent:ht,onSubmit:r},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

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
/>`}}}},yt=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At (date + time)",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline (date only)",fieldComponentProps:{placeholder:"Select date"}})],U={args:{formContent:yt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},gt=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:m,isSearchable:!0,placeholder:"Search teams..."}})];function Tt(){const[n,o]=a.useState(!1),l=a.useCallback(()=>{o(!0)},[]),i=a.useCallback(()=>{o(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Ln,{text:"Open dialog",onClick:l}),t.jsx(kn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"Action form",children:t.jsx(p,{formContent:gt,onSubmit:r})})]})}const w={render:()=>t.jsx(Tt,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},Pt=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:u,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function Et(){const[n,o]=a.useState(!1),l=a.useCallback(()=>{o(!0)},[]),i=a.useCallback(()=>{o(!1)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(Ln,{text:"Open dialog",onClick:l}),t.jsx(kn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"New employee",children:t.jsx(p,{formContent:Pt,onSubmit:r})})]})}const v={render:()=>t.jsx(Et,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}},Dt=[e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates (date only)",fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window (date + time)",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}})],B={args:{formContent:Dt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Ft=[e({fieldKey:"attachments",fieldComponent:"FILE_PICKER",label:"Attachments",fieldComponentProps:{isMulti:!0,accept:[".pdf",".png",".jpg"],maxSize:5242880,text:"No files selected",buttonText:"Choose Files"}}),e({fieldKey:"singleFile",fieldComponent:"FILE_PICKER",label:"Cover Image (single file)",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"}})],A={args:{formContent:Ft,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Nt=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,helperText:t.jsxs("span",{children:["We'll use this to send you a confirmation."," ",t.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",fieldComponentProps:{placeholder:"you@example.com"}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",helperText:t.jsxs("span",{children:["Write a short bio. ",t.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",fieldComponentProps:{items:m,placeholder:"Select department"}})],M={args:{formContent:Nt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},It=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name",defaultValue:"Jane Doe"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:1e3,step:1,defaultValue:42}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}})],W={args:{formContent:It,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Rt=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}})],_t=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:f,placeholder:"Select priority"}}]}}],L={args:{formContent:Rt,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}};function Kt(){const n=$(),o=a.useMemo(()=>n(Y).where({department:"Marketing"}),[n]),l=a.useMemo(()=>[e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Marketing employee",helperText:"This selector is scoped by an ObjectSet.",fieldComponentProps:{objectSet:o,placeholder:"Search Marketing employees…"}})],[o]);return t.jsx(p,{formContent:l,onSubmit:r})}const k={render:()=>t.jsx(Kt,{}),parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
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
}`}}}},j={args:{formContent:_t,onSubmit:r}},Ot=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],V={args:{formContent:Ot,onSubmit:r}},xt=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select..."}}]}}],q={args:{formContent:xt,onSubmit:r}};function ee(n){return n.trim()}function ne(n){var o;return typeof n!="string"?String(n):((o=jn[n])==null?void 0:o.name)??n}function te(n){const o=String(n),l=jn[o];return t.jsxs("span",{className:"osdkRichDropdownLabel",children:[t.jsx("strong",{children:(l==null?void 0:l.name)??o}),(l==null?void 0:l.team)!=null?t.jsx("span",{className:"osdkRichDropdownDescription",children:l.team}):null]})}var oe,re,le;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseForm } from "@osdk/react-components/experimental";
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
}`,...(le=(re=C.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,ie,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var me,de,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,fe;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(fe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var Ce,Se,be;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var he,ye,ge;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var Te,Pe,Ee;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Ee.source}}};var De,Fe,Ne;P.parameters={...P.parameters,docs:{...(De=P.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ne=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var Ie,Re,_e;E.parameters={...E.parameters,docs:{...(Ie=E.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(_e=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var Ke,Oe,xe;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(xe=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:xe.source}}};var Ue,we,ve;F.parameters={...F.parameters,docs:{...(Ue=F.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(ve=(we=F.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Be,Ae,Me;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Me=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var We,Le,ke;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ke=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var je,Ve,qe;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(qe=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};var Xe,Je,Qe;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var He,Ge,Ye;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=K.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var $e,ze,Ze;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    formContent: creatableDropdownFormContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      description: {
        story: 'Passing \`createNewItemFromQuery\` turns a dropdown into a creatable combobox: typing a value that matches no existing item offers a "Create …" option that commits the typed value (by click or by pressing Enter). Works for single-select and multi-select, where it behaves like a tag input.'
      },
      source: {
        code: \`const coerceStringQuery = (query) => query.trim();

const formContent = [
  {
    fieldKey: "department",
    fieldComponent: "DROPDOWN",
    label: "Department (creatable)",
    fieldComponentProps: {
      items: ["Engineering", "Marketing", "Sales", "Finance", "Operations", "Legal"],
      createNewItemFromQuery: coerceStringQuery,
      placeholder: "Search or create a department...",
    },
  },
  {
    fieldKey: "tags",
    fieldComponent: "DROPDOWN",
    label: "Tags (creatable multi-select)",
    fieldComponentProps: {
      items: ["Urgent", "Review", "Follow-up", "Archived", "Pinned"],
      isMultiple: true,
      createNewItemFromQuery: coerceStringQuery,
      placeholder: "Search or create tags...",
    },
  },
];

// createNewItemFromQuery coerces the raw query into an item value.
// Return undefined to reject a query (no create option shown).
<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(Ze=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Ze.source}}};var en,nn,tn;x.parameters={...x.parameters,docs:{...(en=x.parameters)==null?void 0:en.docs,source:{originalSource:`{
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
}`,...(tn=(nn=x.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var on,rn,ln;U.parameters={...U.parameters,docs:{...(on=U.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(ln=(rn=U.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var an,sn,mn;w.parameters={...w.parameters,docs:{...(an=w.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(mn=(sn=w.parameters)==null?void 0:sn.docs)==null?void 0:mn.source}}};var dn,pn,cn;v.parameters={...v.parameters,docs:{...(dn=v.parameters)==null?void 0:dn.docs,source:{originalSource:`{
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
}`,...(cn=(pn=v.parameters)==null?void 0:pn.docs)==null?void 0:cn.source}}};var un,fn,Cn;B.parameters={...B.parameters,docs:{...(un=B.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(Cn=(fn=B.parameters)==null?void 0:fn.docs)==null?void 0:Cn.source}}};var Sn,bn,hn;A.parameters={...A.parameters,docs:{...(Sn=A.parameters)==null?void 0:Sn.docs,source:{originalSource:`{
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
}`,...(hn=(bn=A.parameters)==null?void 0:bn.docs)==null?void 0:hn.source}}};var yn,gn,Tn;M.parameters={...M.parameters,docs:{...(yn=M.parameters)==null?void 0:yn.docs,source:{originalSource:`{
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
}`,...(Tn=(gn=M.parameters)==null?void 0:gn.docs)==null?void 0:Tn.source}}};var Pn,En,Dn;W.parameters={...W.parameters,docs:{...(Pn=W.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
}`,...(Dn=(En=W.parameters)==null?void 0:En.docs)==null?void 0:Dn.source}}};var Fn,Nn,In;L.parameters={...L.parameters,docs:{...(Fn=L.parameters)==null?void 0:Fn.docs,source:{originalSource:`{
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
}`,...(In=(Nn=L.parameters)==null?void 0:Nn.docs)==null?void 0:In.source}}};var Rn,_n,Kn;k.parameters={...k.parameters,docs:{...(Rn=k.parameters)==null?void 0:Rn.docs,source:{originalSource:`{
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
}`,...(Kn=(_n=k.parameters)==null?void 0:_n.docs)==null?void 0:Kn.source}}};var On,xn,Un;j.parameters={...j.parameters,docs:{...(On=j.parameters)==null?void 0:On.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Un=(xn=j.parameters)==null?void 0:xn.docs)==null?void 0:Un.source}}};var wn,vn,Bn;V.parameters={...V.parameters,docs:{...(wn=V.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Bn=(vn=V.parameters)==null?void 0:vn.docs)==null?void 0:Bn.source}}};var An,Mn,Wn;q.parameters={...q.parameters,docs:{...(An=q.parameters)==null?void 0:An.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Wn=(Mn=q.parameters)==null?void 0:Mn.docs)==null?void 0:Wn.source}}};const Fo=["Default","Controlled","WithCustomTitle","Loading","SubmitDisabled","DisabledFields","Pending","WithCustomSubmitButton","WithSwitch","WithUnsupportedFields","WithValidation","WithCustomValidation","WithCustomErrorMessages","WithObjectSetField","WithDropdown","WithMultiSelectDropdown","WithCreatableDropdown","WithRichDropdownLabels","WithDateTimePicker","InsideBlueprintDialog","ScrollableDialogForm","WithDateRangePicker","WithMultiFilePicker","WithHelperText","WithDefaultValues","WithObjectSelect","WithScopedObjectSelect","WithSections","WithMinimalSections","WithGridSection"];export{S as Controlled,C as Default,g as DisabledFields,w as InsideBlueprintDialog,h as Loading,T as Pending,v as ScrollableDialogForm,y as SubmitDisabled,O as WithCreatableDropdown,I as WithCustomErrorMessages,P as WithCustomSubmitButton,b as WithCustomTitle,N as WithCustomValidation,B as WithDateRangePicker,U as WithDateTimePicker,W as WithDefaultValues,_ as WithDropdown,q as WithGridSection,M as WithHelperText,V as WithMinimalSections,A as WithMultiFilePicker,K as WithMultiSelectDropdown,L as WithObjectSelect,R as WithObjectSetField,x as WithRichDropdownLabels,k as WithScopedObjectSelect,j as WithSections,E as WithSwitch,D as WithUnsupportedFields,F as WithValidation,Fo as __namedExportsOrder,Do as default};
