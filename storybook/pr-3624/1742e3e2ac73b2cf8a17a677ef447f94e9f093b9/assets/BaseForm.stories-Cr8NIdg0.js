import{r as a,j as o,f as Wn}from"./iframe-BeCKStTi.js";import{E as Y}from"./Employee-BBLL99Vm.js";import{F as Ln,S as kn}from"./SubmissionOutputPanel-BG6Oess5.js";import{B as p}from"./BaseForm-Cd1RZ4Sm.js";import{u as $}from"./useOsdkClient-BYjQakhT.js";import{B as An,D as vn}from"./dialog-8NuOk8wF.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./ActionButton-BABms-rZ.js";import"./Button-to0u69wN.js";import"./useBaseUiId-COsIpFVh.js";import"./SkeletonBar-Cbjlo5SH.js";import"./Tooltip-CzbeK7mV.js";import"./index-BkJ0Lguu.js";import"./index-BPIvZm15.js";import"./InternalBackdrop--cXN5sjO.js";import"./composite-U2ojCD3f.js";import"./index-ya4S42ZF.js";import"./getDisabledMountTransitionStyles-CyUadLiF.js";import"./ToolbarRootContext-HD-Y_-jz.js";import"./PopoverPopup-eHRJK0-R.js";import"./info-sign-D87JDdJz.js";import"./svgIconContainer-D-9_AOAs.js";import"./DropdownField-DPTs74yS.js";import"./toNumber-DLFKNsjO.js";import"./Input-fr7UgVSn.js";import"./useControlled-5Cxw9uoZ.js";import"./tick-DR0G5XTI.js";import"./small-cross-BWK0DWdF.js";import"./search-CZf2_gwq.js";import"./cross-DDXI9CZ5.js";import"./useValueChanged-BYmOXC78.js";import"./getPseudoElementBounds-DW-1RV5o.js";import"./CompositeItem-DkAKuEhG.js";import"./makeExternalStore-WWCfiCZx.js";import"./chevron-up-BthBkyrK.js";import"./chevron-down-BtABU6Ff.js";import"./useEventCallback-g6xh18Ck.js";import"./Switch-BuVA-y6q.js";import"./iconLoader-ugjCaZ9S.js";import"./CompositeRoot-r5VPPZg3.js";import"./TimePicker-DGflNL9b.js";import"./CollapsiblePanel-DkIfNruL.js";import"./error-DvUULirA.js";const jn="_sliderField_s5oyb_1",Vn="_sliderInput_s5oyb_7",qn="_sliderValue_s5oyb_19",H={sliderField:jn,sliderInput:Vn,sliderValue:qn},z=50,Xn=0,Jn=100,G=a.memo(function({disabled:t,id:l,onChange:i,value:s}){const d=Hn(s),X=a.useCallback(J=>{i==null||i(J.currentTarget.valueAsNumber)},[i]);return o.jsxs("div",{className:H.sliderField,children:[o.jsx("input",{"aria-valuetext":`${d}% complete`,className:H.sliderInput,disabled:t,id:l,max:Jn,min:Xn,onChange:X,type:"range",value:d}),o.jsxs("output",{className:H.sliderValue,htmlFor:l,children:[d,"% complete"]})]})});function Hn(n){return typeof n=="number"?n:z}try{G.displayName="ThemedSliderField",G.__docgenInfo={description:"",displayName:"ThemedSliderField",props:{}}}catch{}const{fn:Gn}=__STORYBOOK_MODULE_TEST__;function e(n){return{definition:n,type:"field"}}const u=["Low","Medium","High"],m=["Engineering","Marketing","Sales","Finance","Operations","Legal"],q=["Urgent","Review","Follow-up","Archived","Pinned"],Q=["usr_ada","usr_grace","usr_katherine"],wn={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},c=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter a name"},fieldKey:"name",isRequired:!0,label:"Name"}),e({fieldComponent:"TEXT_AREA",fieldComponentProps:{placeholder:"Enter a description",rows:3},fieldKey:"description",label:"Description"}),e({fieldComponent:"NUMBER_INPUT",fieldComponentProps:{max:1e3,min:0,placeholder:"0",step:1},fieldKey:"quantity",isRequired:!0,label:"Quantity"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:u,placeholder:"Select priority"},fieldKey:"priority",label:"Priority"}),e({fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]},fieldKey:"isActive",label:"Is Active"}),e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select a date"},fieldKey:"startDate",label:"Start Date"}),e({fieldComponent:"FILE_PICKER",fieldComponentProps:{accept:".pdf,.doc,.docx"},fieldKey:"document",label:"Document"}),e({fieldComponent:"CUSTOM",fieldComponentProps:{customRenderer:n=>o.jsx(G,{...n}),defaultValue:z},fieldKey:"completion",label:"Completion"})],Yn=[],V={current:void 0},$n=Gn().mockName("onSubmit");function r(n){var t;$n(n),(t=V.current)==null||t.call(V,{response:{message:"onSubmit completed"},status:"success",submittedValues:n})}function zn(){const[n,t]=a.useState({status:"idle"});return V.current=t,o.jsx(kn,{idleMessage:"Submit the form to see submitted values.",snapshot:n})}const ht={argTypes:{className:{control:"text",description:"Additional CSS class name for the form."},formContent:{control:!1,description:"Ordered list of form content items (fields or sections) to render."},formTitle:{control:"text",description:"Optional title displayed at the top of the form."},isLoading:{control:"boolean",defaultValue:!1,description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",table:{defaultValue:{summary:"false"}}},isPending:{control:"boolean",defaultValue:!1,description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',table:{defaultValue:{summary:"false"}}},isSubmitDisabled:{control:"boolean",defaultValue:!1,description:"Whether the submit button is disabled.",table:{defaultValue:{summary:"false"}}},onSubmit:{control:!1,description:"Called when the form is submitted. Receives the current form state.",table:{category:"Events"}},submitButtonText:{control:"text",description:"Text displayed in the submit button.",table:{defaultValue:{summary:"Submit"}}},submitButtonVariant:{control:"select",description:"Visual variant of the submit button.",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}}},component:p,decorators:[n=>o.jsx(Ln,{output:o.jsx(zn,{}),children:o.jsx(n,{})})],parameters:{controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}},msw:{handlers:[...Wn.handlers]}},tags:["beta"],title:"Components/ActionForm/BaseForm"},f={args:{formContent:c,onSubmit:r},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";
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
/>`}}}},C={parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
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
);`}}},render:()=>o.jsx(Qn,{})};function Qn(){const[n,t]=a.useState({completion:z}),l=a.useCallback((i,s)=>{t(d=>({...d,[i]:s}))},[]);return o.jsxs("div",{children:[o.jsxs("div",{className:"osdkFormStorySpacing",children:[o.jsx("strong",{children:"Current Form State:"}),o.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(n,(i,s)=>s instanceof File?`File: ${s.name}`:s,2)})]}),o.jsx(p,{formContent:c,formState:n,onFieldValueChange:l,onSubmit:r})]})}const S={args:{formContent:c,formTitle:"Create New Order",onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},b={args:{formContent:Yn,isLoading:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},h={args:{formContent:c,isSubmitDisabled:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},Zn={custom:"Requires approval",description:"Locked multi-line description",isActive:!0,isRemote:!0,name:"Locked employee",priority:"Medium",quantity:42,scheduledAt:new Date(2026,0,15,9,30),tags:["Urgent","Pinned"],vacationDates:[new Date(2026,0,15),new Date(2026,0,31)]},eo=["Requires approval","Ready to submit"];function no(n){const t=n.value!=null?String(n.value):void 0;return o.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":n.disabled===!0||void 0,children:eo.map(l=>o.jsx("button",{type:"button",disabled:n.disabled,className:l===t?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var i;return(i=n.onChange)==null?void 0:i.call(n,l)},children:l},l))})}function oo(){const n=$(),t=a.useMemo(()=>n(Y),[n]),[l,i]=a.useState(Zn),s=a.useCallback((X,J)=>{i(Mn=>({...Mn,[X]:J}))},[]),d=a.useMemo(()=>[e({disabled:!0,fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter a name"},fieldKey:"name",label:"Name"}),e({disabled:!0,fieldComponent:"TEXT_AREA",fieldComponentProps:{placeholder:"Enter a description",rows:3},fieldKey:"description",label:"Description"}),e({disabled:!0,fieldComponent:"NUMBER_INPUT",fieldComponentProps:{max:1e3,min:0,placeholder:"0",step:1},fieldKey:"quantity",label:"Quantity"}),e({disabled:!0,fieldComponent:"DROPDOWN",fieldComponentProps:{items:u,placeholder:"Select priority"},fieldKey:"priority",label:"Priority (select)"}),e({disabled:!0,fieldComponent:"DROPDOWN",fieldComponentProps:{isMultiple:!0,isSearchable:!0,items:q,placeholder:"Search tags..."},fieldKey:"tags",label:"Tags (searchable multi-select)"}),e({disabled:!0,fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]},fieldKey:"isActive",label:"Is Active"}),e({disabled:!0,fieldComponent:"SWITCH",fieldComponentProps:{},fieldKey:"isRemote",label:"Remote employee"}),e({disabled:!0,fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select date and time",showTime:!0},fieldKey:"scheduledAt",label:"Scheduled At"}),e({disabled:!0,fieldComponent:"DATE_RANGE_INPUT",fieldComponentProps:{placeholderEnd:"End date",placeholderStart:"Start date"},fieldKey:"vacationDates",label:"Vacation Dates"}),e({disabled:!0,fieldComponent:"FILE_PICKER",fieldComponentProps:{accept:".pdf,.doc,.docx"},fieldKey:"document",label:"Document"}),e({disabled:!0,fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectType:{apiName:"Employee",type:"object"},placeholder:"Search employees…"},fieldKey:"employee",label:"Employee"}),e({disabled:!0,fieldComponent:"OBJECT_SET",fieldComponentProps:{value:t},fieldKey:"employees",label:"Employees"}),e({disabled:!0,fieldComponent:"CUSTOM",fieldComponentProps:{customRenderer:no},fieldKey:"custom",label:"Custom field"})],[t]);return o.jsx(p,{formTitle:"Disabled fields",formContent:d,formState:l,onFieldValueChange:s,onSubmit:r})}const y={parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
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
/>`}}},render:()=>o.jsx(oo,{})},T={args:{formContent:c,isPending:!0,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},g={args:{formContent:c,onSubmit:r,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},to=[e({fieldComponent:"SWITCH",fieldComponentProps:{},fieldKey:"isRemote",helperText:"Use a switch for boolean settings that map to on/off state.",label:"Remote employee"})],E={args:{formContent:to,formTitle:"Update employee",onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ro=[e({fieldComponent:"UNSUPPORTED",fieldComponentProps:{},fieldKey:"structPayload",isRequired:!0,label:"Struct payload"}),e({fieldComponent:"UNSUPPORTED",fieldComponentProps:{},fieldKey:"geoshape",label:"Geoshape"})],P={args:{formContent:ro,formTitle:"Unsupported field types",onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},lo=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Required field"},fieldKey:"name",isRequired:!0,label:"Name"}),e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{maxLength:20,minLength:3,placeholder:"3-20 characters"},fieldKey:"username",label:"Username"}),e({fieldComponent:"NUMBER_INPUT",fieldComponentProps:{max:100,min:0,placeholder:"0-100",step:1},fieldKey:"quantity",label:"Quantity"}),e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{max:new Date(2026,11,31),min:new Date(2024,0,1),placeholder:"2024-2026 only"},fieldKey:"startDate",label:"Start Date"}),e({fieldComponent:"FILE_PICKER",fieldComponentProps:{maxSize:1048576},fieldKey:"document",label:"Document"})],D={args:{formContent:lo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ao=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,io=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"user@example.com"},fieldKey:"email",isRequired:!0,label:"Email",validate:async n=>{if(!(typeof n!="string"||n.length===0))return ao.test(n)?void 0:"Enter a valid email address"}})],F={args:{formContent:io,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},so=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Your name"},fieldKey:"name",isRequired:!0,label:"Name",onValidationError:n=>{if(n.type==="required")return"Please provide your name"}}),e({fieldComponent:"NUMBER_INPUT",fieldComponentProps:{max:120,min:18,placeholder:"18-120"},fieldKey:"age",label:"Age",onValidationError:n=>{if(n.type==="min")return`You must be at least ${String(n.min)} years old`;if(n.type==="max")return`Age cannot exceed ${String(n.max)}`}})],_={args:{formContent:so,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},I={parameters:{docs:{source:{code:`const client = useOsdkClient();
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
/>`}}},render:()=>o.jsx(mo,{})};function mo(){const n=$(),t=a.useMemo(()=>n(Y),[n]),l=a.useMemo(()=>[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter a name"},fieldKey:"name",isRequired:!0,label:"Name"}),e({fieldComponent:"OBJECT_SET",fieldComponentProps:{value:t},fieldKey:"employees",label:"Employees"})],[t]);return o.jsx(p,{formContent:l,onSubmit:r})}const po=[e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select department..."},fieldKey:"department",label:"Department (Select)"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{isSearchable:!0,items:m,placeholder:"Search teams..."},fieldKey:"team",label:"Team (Searchable)"})],R={args:{formContent:po,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},co=[e({fieldComponent:"DROPDOWN",fieldComponentProps:{isMultiple:!0,items:q,placeholder:"Select categories..."},fieldKey:"categories",isRequired:!0,label:"Categories (Select)"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{isMultiple:!0,isSearchable:!0,items:q,placeholder:"Search tags..."},fieldKey:"tags",label:"Tags (Searchable)"})],N={args:{formContent:co,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},uo=[e({fieldComponent:"DROPDOWN",fieldComponentProps:{isSearchable:!0,itemToStringLabel:Z,items:Q,placeholder:"Search users...",renderItemLabel:ee},fieldKey:"assigneeUserId",label:"Assignee"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{isMultiple:!0,isSearchable:!0,itemToStringLabel:Z,items:Q,placeholder:"Search reviewers...",renderItemLabel:ee},fieldKey:"reviewerUserIds",label:"Reviewers"})],K={args:{formContent:uo,onSubmit:r},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

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
/>`}}}},fo=[e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select date and time",showTime:!0},fieldKey:"scheduledAt",label:"Scheduled At (date + time)"}),e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select date"},fieldKey:"deadline",label:"Deadline (date only)"})],O={args:{formContent:fo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Co=[e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select date and time",showTime:!0},fieldKey:"scheduledAt",label:"Scheduled At"}),e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select date"},fieldKey:"deadline",label:"Deadline"}),e({fieldComponent:"DATE_RANGE_INPUT",fieldComponentProps:{placeholderEnd:"End",placeholderStart:"Start",showTime:!0},fieldKey:"meetingWindow",label:"Meeting Window"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select department..."},fieldKey:"department",isRequired:!0,label:"Department"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{isSearchable:!0,items:m,placeholder:"Search teams..."},fieldKey:"team",label:"Team"})];function So(){const[n,t]=a.useState(!1),l=a.useCallback(()=>{t(!0)},[]),i=a.useCallback(()=>{t(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(An,{text:"Open dialog",onClick:l}),o.jsx(vn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"Action form",children:o.jsx(p,{formContent:Co,onSubmit:r})})]})}const x={parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}},render:()=>o.jsx(So,{})},bo=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter full name"},fieldKey:"name",isRequired:!0,label:"Full Name"}),e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"user@example.com"},fieldKey:"email",isRequired:!0,label:"Email"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select department..."},fieldKey:"department",label:"Department"}),e({fieldComponent:"DATETIME_PICKER",fieldComponentProps:{placeholder:"Select a date"},fieldKey:"startDate",label:"Start Date"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:u,placeholder:"Select priority"},fieldKey:"priority",label:"Priority"}),e({fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]},fieldKey:"isActive",label:"Status"}),e({fieldComponent:"TEXT_AREA",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3},fieldKey:"bio",label:"Bio"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{isMultiple:!0,isSearchable:!0,items:q,placeholder:"Search tags..."},fieldKey:"tags",label:"Tags"}),e({fieldComponent:"FILE_PICKER",fieldComponentProps:{accept:".pdf,.doc,.docx"},fieldKey:"document",label:"Resume"}),e({fieldComponent:"TEXT_AREA",fieldComponentProps:{placeholder:"Any extra details",rows:2},fieldKey:"notes",label:"Additional Notes"})];function ho(){const[n,t]=a.useState(!1),l=a.useCallback(()=>{t(!0)},[]),i=a.useCallback(()=>{t(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(An,{text:"Open dialog",onClick:l}),o.jsx(vn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"New employee",children:o.jsx(p,{formContent:bo,onSubmit:r})})]})}const U={parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}},render:()=>o.jsx(ho,{})},yo=[e({fieldComponent:"DATE_RANGE_INPUT",fieldComponentProps:{placeholderEnd:"End date",placeholderStart:"Start date"},fieldKey:"vacationDates",label:"Vacation Dates (date only)"}),e({fieldComponent:"DATE_RANGE_INPUT",fieldComponentProps:{placeholderEnd:"End",placeholderStart:"Start",showTime:!0},fieldKey:"meetingWindow",label:"Meeting Window (date + time)"})],B={args:{formContent:yo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},To=[e({fieldComponent:"FILE_PICKER",fieldComponentProps:{accept:[".pdf",".png",".jpg"],buttonText:"Choose Files",isMulti:!0,maxSize:5242880,text:"No files selected"},fieldKey:"attachments",label:"Attachments"}),e({fieldComponent:"FILE_PICKER",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"},fieldKey:"singleFile",label:"Cover Image (single file)"})],A={args:{formContent:To,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},go=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"you@example.com"},fieldKey:"email",helperText:o.jsxs("span",{children:["We'll use this to send you a confirmation."," ",o.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",isRequired:!0,label:"Email"}),e({fieldComponent:"TEXT_AREA",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3},fieldKey:"bio",helperText:o.jsxs("span",{children:["Write a short bio. ",o.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",label:"Bio"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select department"},fieldKey:"department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",label:"Department"})],v={args:{formContent:go,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Eo=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{defaultValue:"Jane Doe",placeholder:"Enter a name"},fieldKey:"name",isRequired:!0,label:"Name"}),e({fieldComponent:"NUMBER_INPUT",fieldComponentProps:{defaultValue:42,max:1e3,min:0,step:1},fieldKey:"quantity",label:"Quantity"}),e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:u,placeholder:"Select priority"},fieldKey:"priority",label:"Priority"})],w={args:{formContent:Eo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Po=[e({fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter a name"},fieldKey:"name",isRequired:!0,label:"Name"}),e({fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectType:{apiName:"Employee",type:"object"},placeholder:"Search employees…"},fieldKey:"employee",label:"Employee"})],Do=[e({fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select department..."},fieldKey:"department",label:"Department"}),{definition:{description:"Basic details about the employee",fields:[{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Enter full name"},fieldKey:"name",isRequired:!0,label:"Full Name"},{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"user@example.com"},fieldKey:"email",label:"Email"}],title:"Personal Information"},key:"personal",type:"section"},{definition:{collapsedByDefault:!0,fields:[{fieldComponent:"RADIO_BUTTONS",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]},fieldKey:"isActive",label:"Active"},{fieldComponent:"DROPDOWN",fieldComponentProps:{items:u,placeholder:"Select priority"},fieldKey:"priority",label:"Priority"}],title:"Settings"},key:"settings",type:"section"}],M={args:{formContent:Po,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}};function Fo(){const n=$(),t=a.useMemo(()=>n(Y).where({department:"Marketing"}),[n]),l=a.useMemo(()=>[e({fieldComponent:"OBJECT_SELECT",fieldComponentProps:{objectSet:t,placeholder:"Search Marketing employees…"},fieldKey:"employee",helperText:"This selector is scoped by an ObjectSet.",label:"Marketing employee"})],[t]);return o.jsx(p,{formContent:l,onSubmit:r})}const W={parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
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
}`}}},render:()=>o.jsx(Fo,{})},L={args:{formContent:Do,onSubmit:r}},_o=[{definition:{description:"How to reach the employee",fields:[{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"+1 (555) 000-0000"},fieldKey:"phone",label:"Phone"},{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"user@example.com"},fieldKey:"email",label:"Email"}],style:"minimal",title:"Contact Details"},key:"contact",type:"section"},{definition:{fields:[{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"123 Main St"},fieldKey:"street",label:"Street"},{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Springfield"},fieldKey:"city",label:"City"}],style:"minimal",title:"Address"},key:"address",type:"section"}],k={args:{formContent:_o,onSubmit:r}},Io=[{definition:{columnCount:2,fields:[{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"First"},fieldKey:"firstName",label:"First Name"},{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"Last"},fieldKey:"lastName",label:"Last Name"},{fieldComponent:"TEXT_INPUT",fieldComponentProps:{placeholder:"user@example.com"},fieldKey:"email",label:"Email"},{fieldComponent:"DROPDOWN",fieldComponentProps:{items:m,placeholder:"Select..."},fieldKey:"department",label:"Department"}],title:"Employee Details"},key:"employee",type:"section"}],j={args:{formContent:Io,onSubmit:r}};function Z(n){var t;return typeof n!="string"?String(n):((t=wn[n])==null?void 0:t.name)??n}function ee(n){const t=String(n),l=wn[t];return o.jsxs("span",{className:"osdkRichDropdownLabel",children:[o.jsx("strong",{children:(l==null?void 0:l.name)??t}),(l==null?void 0:l.team)!=null?o.jsx("span",{className:"osdkRichDropdownDescription",children:l.team}):null]})}var ne,oe,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,ae;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ie,se,me;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    formContent,
    formTitle: "Create New Order",
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
}`,...(me=(se=S.parameters)==null?void 0:se.docs)==null?void 0:me.source}}};var de,pe,ce;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,fe,Ce;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(Ce=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var Se,be,he;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
  },
  render: () => <DisabledFieldsStory />
}`,...(he=(be=y.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ye,Te,ge;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};var Ee,Pe,De;g.parameters={...g.parameters,docs:{...(Ee=g.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(Pe=g.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var Fe,_e,Ie;E.parameters={...E.parameters,docs:{...(Fe=E.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    formContent: switchFormContent,
    formTitle: "Update employee",
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
}`,...(Ie=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Re,Ne,Ke;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    formContent: unsupportedFormContent,
    formTitle: "Unsupported field types",
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
}`,...(Ke=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ke.source}}};var Oe,xe,Ue;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ue=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ue.source}}};var Be,Ae,ve;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ve=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var we,Me,We;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(We=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};var Le,ke,je;I.parameters={...I.parameters,docs:{...(Le=I.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(je=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var Ve,qe,Xe;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Xe=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Xe.source}}};var Je,He,Ge;N.parameters={...N.parameters,docs:{...(Je=N.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ge=(He=N.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Ye,$e,ze;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ze=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Qe,Ze,en;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(en=(Ze=O.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,on,tn;x.parameters={...x.parameters,docs:{...(nn=x.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
  },
  render: () => <BlueprintDialogBaseForm />
}`,...(tn=(on=x.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};var rn,ln,an;U.parameters={...U.parameters,docs:{...(rn=U.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
  },
  render: () => <ScrollableDialogBaseForm />
}`,...(an=(ln=U.parameters)==null?void 0:ln.docs)==null?void 0:an.source}}};var sn,mn,dn;B.parameters={...B.parameters,docs:{...(sn=B.parameters)==null?void 0:sn.docs,source:{originalSource:`{
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
}`,...(dn=(mn=B.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};var pn,cn,un;A.parameters={...A.parameters,docs:{...(pn=A.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(un=(cn=A.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};var fn,Cn,Sn;v.parameters={...v.parameters,docs:{...(fn=v.parameters)==null?void 0:fn.docs,source:{originalSource:`{
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
}`,...(Sn=(Cn=v.parameters)==null?void 0:Cn.docs)==null?void 0:Sn.source}}};var bn,hn,yn;w.parameters={...w.parameters,docs:{...(bn=w.parameters)==null?void 0:bn.docs,source:{originalSource:`{
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
}`,...(yn=(hn=w.parameters)==null?void 0:hn.docs)==null?void 0:yn.source}}};var Tn,gn,En;M.parameters={...M.parameters,docs:{...(Tn=M.parameters)==null?void 0:Tn.docs,source:{originalSource:`{
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
}`,...(En=(gn=M.parameters)==null?void 0:gn.docs)==null?void 0:En.source}}};var Pn,Dn,Fn;W.parameters={...W.parameters,docs:{...(Pn=W.parameters)==null?void 0:Pn.docs,source:{originalSource:`{
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
  },
  render: () => <ScopedObjectSelectStory />
}`,...(Fn=(Dn=W.parameters)==null?void 0:Dn.docs)==null?void 0:Fn.source}}};var _n,In,Rn;L.parameters={...L.parameters,docs:{...(_n=L.parameters)==null?void 0:_n.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Rn=(In=L.parameters)==null?void 0:In.docs)==null?void 0:Rn.source}}};var Nn,Kn,On;k.parameters={...k.parameters,docs:{...(Nn=k.parameters)==null?void 0:Nn.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(On=(Kn=k.parameters)==null?void 0:Kn.docs)==null?void 0:On.source}}};var xn,Un,Bn;j.parameters={...j.parameters,docs:{...(xn=j.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(Bn=(Un=j.parameters)==null?void 0:Un.docs)==null?void 0:Bn.source}}};const yt=["Default","Controlled","WithCustomTitle","Loading","SubmitDisabled","DisabledFields","Pending","WithCustomSubmitButton","WithSwitch","WithUnsupportedFields","WithValidation","WithCustomValidation","WithCustomErrorMessages","WithObjectSetField","WithDropdown","WithMultiSelectDropdown","WithRichDropdownLabels","WithDateTimePicker","InsideBlueprintDialog","ScrollableDialogForm","WithDateRangePicker","WithMultiFilePicker","WithHelperText","WithDefaultValues","WithObjectSelect","WithScopedObjectSelect","WithSections","WithMinimalSections","WithGridSection"];export{C as Controlled,f as Default,y as DisabledFields,x as InsideBlueprintDialog,b as Loading,T as Pending,U as ScrollableDialogForm,h as SubmitDisabled,_ as WithCustomErrorMessages,g as WithCustomSubmitButton,S as WithCustomTitle,F as WithCustomValidation,B as WithDateRangePicker,O as WithDateTimePicker,w as WithDefaultValues,R as WithDropdown,j as WithGridSection,v as WithHelperText,k as WithMinimalSections,A as WithMultiFilePicker,N as WithMultiSelectDropdown,M as WithObjectSelect,I as WithObjectSetField,K as WithRichDropdownLabels,W as WithScopedObjectSelect,L as WithSections,E as WithSwitch,P as WithUnsupportedFields,D as WithValidation,yt as __namedExportsOrder,ht as default};
