import{r as a,j as o,f as Wn}from"./iframe-B918LNJv.js";import{E as Y}from"./Employee-BAk2o20h.js";import{F as Ln,S as kn}from"./SubmissionOutputPanel-C9y-VYTQ.js";import{B as p}from"./BaseForm-DFhVhJdG.js";import{u as $}from"./useOsdkClient-Dzh9EzvI.js";import{B as An,D as vn}from"./dialog-JRr5sXt-.js";import"./preload-helper-C38s4CUI.js";import"./index-B_P01xA3.js";import"./ActionButton-B92IpvRa.js";import"./Button-DfdrGLkG.js";import"./useBaseUiId-BTl9y6re.js";import"./SkeletonBar-B0zvJ79q.js";import"./Tooltip-BbMLuIqy.js";import"./index-fXEPz3SF.js";import"./index-DDOR1c1N.js";import"./InternalBackdrop-CKTbt8em.js";import"./composite-h6Zbgi7F.js";import"./index-CtmGBK31.js";import"./getDisabledMountTransitionStyles-Bzlq1xi4.js";import"./ToolbarRootContext-BZH61At9.js";import"./PopoverPopup-B1YkqBMJ.js";import"./info-sign-CId8WYvv.js";import"./svgIconContainer-BYiAy6p0.js";import"./DropdownField-BCZceCoy.js";import"./toNumber-CrVTUO-Y.js";import"./Input-98UmijnR.js";import"./useControlled-DNdvLczM.js";import"./tick-D8LQGLpc.js";import"./isObject-Dtt3dYTs.js";import"./search-D4u31a2J.js";import"./cross-27JxqPSS.js";import"./useValueChanged-g0m1_Jam.js";import"./getPseudoElementBounds-CYxc3ret.js";import"./CompositeItem-Be-t-AGf.js";import"./makeExternalStore-i_cH52O7.js";import"./chevron-up-D6Bl0fSc.js";import"./chevron-down-Cw1bkhVm.js";import"./useEventCallback-C2aenZzM.js";import"./Switch-CpcJh7cu.js";import"./iconLoader-BjyQzsXT.js";import"./CompositeRoot-Bi2v2o3F.js";import"./TimePicker-LP-uZmkT.js";import"./CollapsiblePanel-DeLpIozM.js";import"./error-DW-GsfBB.js";const jn="_sliderField_s5oyb_1",Vn="_sliderInput_s5oyb_7",qn="_sliderValue_s5oyb_19",H={sliderField:jn,sliderInput:Vn,sliderValue:qn},z=50,Xn=0,Jn=100,G=a.memo(function({disabled:t,id:l,onChange:i,value:s}){const d=Hn(s),X=a.useCallback(J=>{i==null||i(J.currentTarget.valueAsNumber)},[i]);return o.jsxs("div",{className:H.sliderField,children:[o.jsx("input",{"aria-valuetext":`${d}% complete`,className:H.sliderInput,disabled:t,id:l,max:Jn,min:Xn,onChange:X,type:"range",value:d}),o.jsxs("output",{className:H.sliderValue,htmlFor:l,children:[d,"% complete"]})]})});function Hn(n){return typeof n=="number"?n:z}try{G.displayName="ThemedSliderField",G.__docgenInfo={description:"",displayName:"ThemedSliderField",props:{}}}catch{}const{fn:Gn}=__STORYBOOK_MODULE_TEST__;function e(n){return{type:"field",definition:n}}const u=["Low","Medium","High"],m=["Engineering","Marketing","Sales","Finance","Operations","Legal"],q=["Urgent","Review","Follow-up","Archived","Pinned"],Q=["usr_ada","usr_grace","usr_katherine"],wn={usr_ada:{name:"Ada Lovelace",team:"Computation"},usr_grace:{name:"Grace Hopper",team:"Compilers"},usr_katherine:{name:"Katherine Johnson",team:"Flight dynamics"}},c=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",isRequired:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:u,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"completion",fieldComponent:"CUSTOM",label:"Completion",fieldComponentProps:{defaultValue:z,customRenderer:n=>o.jsx(G,{...n})}})],Yn=[],V={current:void 0},$n=Gn().mockName("onSubmit");function r(n){var t;$n(n),(t=V.current)==null||t.call(V,{status:"success",submittedValues:n,response:{message:"onSubmit completed"}})}function zn(){const[n,t]=a.useState({status:"idle"});return V.current=t,o.jsx(kn,{idleMessage:"Submit the form to see submitted values.",snapshot:n})}const ht={title:"Components/ActionForm/BaseForm",component:p,tags:["beta"],decorators:[n=>o.jsx(Ln,{output:o.jsx(zn,{}),children:o.jsx(n,{})})],parameters:{msw:{handlers:[...Wn.handlers]},controls:{expanded:!0},docs:{description:{component:"BaseForm is the lower-level form renderer used by ActionForm. Use it directly when you already have form content definitions or need custom form composition."}}},argTypes:{formTitle:{description:"Optional title displayed at the top of the form.",control:"text"},formContent:{description:"Ordered list of form content items (fields or sections) to render.",control:!1},onSubmit:{description:"Called when the form is submitted. Receives the current form state.",control:!1,table:{category:"Events"}},isSubmitDisabled:{description:"Whether the submit button is disabled.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isPending:{description:'Whether the form is in a pending state. Shows "Submitting…" and disables the button.',control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},isLoading:{description:"Whether the form is loading. Shows a loading message when true and no field definitions are provided.",control:"boolean",defaultValue:!1,table:{defaultValue:{summary:"false"}}},className:{description:"Additional CSS class name for the form.",control:"text"},submitButtonText:{description:"Text displayed in the submit button.",control:"text",table:{defaultValue:{summary:"Submit"}}},submitButtonVariant:{description:"Visual variant of the submit button.",control:"select",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}}}},f={args:{formContent:c,onSubmit:r},parameters:{docs:{source:{code:`import { BaseForm } from "@osdk/react-components/experimental";
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
);`}}},render:()=>o.jsx(Qn,{})};function Qn(){const[n,t]=a.useState({completion:z}),l=a.useCallback((i,s)=>{t(d=>({...d,[i]:s}))},[]);return o.jsxs("div",{children:[o.jsxs("div",{className:"osdkFormStorySpacing",children:[o.jsx("strong",{children:"Current Form State:"}),o.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(n,(i,s)=>s instanceof File?`File: ${s.name}`:s,2)})]}),o.jsx(p,{formContent:c,formState:n,onFieldValueChange:l,onSubmit:r})]})}const S={args:{formTitle:"Create New Order",formContent:c,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
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
/>`}}}},Zn={name:"Locked employee",description:"Locked multi-line description",quantity:42,priority:"Medium",tags:["Urgent","Pinned"],isActive:!0,isRemote:!0,scheduledAt:new Date(2026,0,15,9,30),vacationDates:[new Date(2026,0,15),new Date(2026,0,31)],custom:"Requires approval"},eo=["Requires approval","Ready to submit"];function no(n){const t=n.value!=null?String(n.value):void 0;return o.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":n.disabled===!0||void 0,children:eo.map(l=>o.jsx("button",{type:"button",disabled:n.disabled,className:l===t?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var i;return(i=n.onChange)==null?void 0:i.call(n,l)},children:l},l))})}function oo(){const n=$(),t=a.useMemo(()=>n(Y),[n]),[l,i]=a.useState(Zn),s=a.useCallback((X,J)=>{i(Mn=>({...Mn,[X]:J}))},[]),d=a.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",disabled:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",disabled:!0,fieldComponentProps:{placeholder:"Enter a description",rows:3}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",disabled:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority (select)",disabled:!0,fieldComponentProps:{items:u,placeholder:"Select priority"}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (searchable multi-select)",disabled:!0,fieldComponentProps:{items:q,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",disabled:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",disabled:!0,fieldComponentProps:{}}),e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",disabled:!0,fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates",disabled:!0,fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",disabled:!0,fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",disabled:!0,fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",disabled:!0,fieldComponentProps:{value:t}}),e({fieldKey:"custom",fieldComponent:"CUSTOM",label:"Custom field",disabled:!0,fieldComponentProps:{customRenderer:no}})],[t]);return o.jsx(p,{formTitle:"Disabled fields",formContent:d,formState:l,onFieldValueChange:s,onSubmit:r})}const y={render:()=>o.jsx(oo,{}),parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
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
/>`}}}},g={args:{formContent:c,onSubmit:r,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},to=[e({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",helperText:"Use a switch for boolean settings that map to on/off state.",fieldComponentProps:{}})],E={args:{formTitle:"Update employee",formContent:to,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ro=[e({fieldKey:"structPayload",fieldComponent:"UNSUPPORTED",label:"Struct payload",isRequired:!0,fieldComponentProps:{}}),e({fieldKey:"geoshape",fieldComponent:"UNSUPPORTED",label:"Geoshape",fieldComponentProps:{}})],P={args:{formTitle:"Unsupported field types",formContent:ro,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},lo=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Required field"}}),e({fieldKey:"username",fieldComponent:"TEXT_INPUT",label:"Username",fieldComponentProps:{minLength:3,maxLength:20,placeholder:"3-20 characters"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:100,step:1,placeholder:"0-100"}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{min:new Date(2024,0,1),max:new Date(2026,11,31),placeholder:"2024-2026 only"}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",fieldComponentProps:{maxSize:1048576}})],D={args:{formContent:lo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},ao=/^[^\s@]+@[^\s@]+\.[^\s@]+$/u,io=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,validate:async n=>{if(!(typeof n!="string"||n.length===0))return ao.test(n)?void 0:"Enter a valid email address"},fieldComponentProps:{placeholder:"user@example.com"}})],F={args:{formContent:io,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},so=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,onValidationError:n=>{if(n.type==="required")return"Please provide your name"},fieldComponentProps:{placeholder:"Your name"}}),e({fieldKey:"age",fieldComponent:"NUMBER_INPUT",label:"Age",onValidationError:n=>{if(n.type==="min")return`You must be at least ${String(n.min)} years old`;if(n.type==="max")return`Age cannot exceed ${String(n.max)}`},fieldComponentProps:{min:18,max:120,placeholder:"18-120"}})],_={args:{formContent:so,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}},render:()=>o.jsx(mo,{})};function mo(){const n=$(),t=a.useMemo(()=>n(Y),[n]),l=a.useMemo(()=>[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",fieldComponentProps:{value:t}})],[t]);return o.jsx(p,{formContent:l,onSubmit:r})}const po=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department (Select)",fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team (Searchable)",fieldComponentProps:{items:m,isSearchable:!0,placeholder:"Search teams..."}})],R={args:{formContent:po,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},co=[e({fieldKey:"categories",fieldComponent:"DROPDOWN",label:"Categories (Select)",isRequired:!0,fieldComponentProps:{items:q,isMultiple:!0,placeholder:"Select categories..."}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (Searchable)",fieldComponentProps:{items:q,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}})],N={args:{formContent:co,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},uo=[e({fieldKey:"assigneeUserId",fieldComponent:"DROPDOWN",label:"Assignee",fieldComponentProps:{items:Q,itemToStringLabel:Z,renderItemLabel:ee,isSearchable:!0,placeholder:"Search users..."}}),e({fieldKey:"reviewerUserIds",fieldComponent:"DROPDOWN",label:"Reviewers",fieldComponentProps:{items:Q,itemToStringLabel:Z,renderItemLabel:ee,isMultiple:!0,isSearchable:!0,placeholder:"Search reviewers..."}})],K={args:{formContent:uo,onSubmit:r},parameters:{docs:{source:{code:`const userIds = ["usr_ada", "usr_grace", "usr_katherine"];

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
/>`}}}},fo=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At (date + time)",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline (date only)",fieldComponentProps:{placeholder:"Select date"}})],O={args:{formContent:fo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Co=[e({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),e({fieldKey:"deadline",fieldComponent:"DATETIME_PICKER",label:"Deadline",fieldComponentProps:{placeholder:"Select date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",isRequired:!0,fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"team",fieldComponent:"DROPDOWN",label:"Team",fieldComponentProps:{items:m,isSearchable:!0,placeholder:"Search teams..."}})];function So(){const[n,t]=a.useState(!1),l=a.useCallback(()=>{t(!0)},[]),i=a.useCallback(()=>{t(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(An,{text:"Open dialog",onClick:l}),o.jsx(vn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"Action form",children:o.jsx(p,{formContent:Co,onSubmit:r})})]})}const x={render:()=>o.jsx(So,{}),parameters:{docs:{source:{code:`function BlueprintDialogBaseForm() {
  return (
    <Dialog isOpen={true} title="Action form">
      <BaseForm formContent={formContent} onSubmit={handleSubmit} />
    </Dialog>
  );
}`}}}},bo=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}}),e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,fieldComponentProps:{placeholder:"user@example.com"}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select department..."}}),e({fieldKey:"startDate",fieldComponent:"DATETIME_PICKER",label:"Start Date",fieldComponentProps:{placeholder:"Select a date"}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:u,placeholder:"Select priority"}}),e({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Status",fieldComponentProps:{options:[{label:"Active",value:!0},{label:"Inactive",value:!1}]}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags",fieldComponentProps:{items:q,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),e({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Resume",fieldComponentProps:{accept:".pdf,.doc,.docx"}}),e({fieldKey:"notes",fieldComponent:"TEXT_AREA",label:"Additional Notes",fieldComponentProps:{placeholder:"Any extra details",rows:2}})];function ho(){const[n,t]=a.useState(!1),l=a.useCallback(()=>{t(!0)},[]),i=a.useCallback(()=>{t(!1)},[]);return o.jsxs(o.Fragment,{children:[o.jsx(An,{text:"Open dialog",onClick:l}),o.jsx(vn,{className:"osdkBlueprintDialogForm",isOpen:n,onClose:i,title:"New employee",children:o.jsx(p,{formContent:bo,onSubmit:r})})]})}const U={render:()=>o.jsx(ho,{}),parameters:{docs:{description:{story:"When the form has many fields inside a height-constrained container like a dialog, the fields area scrolls while the footer stays pinned at the bottom."},source:{code:`// The footer pins automatically when the form overflows its container.
// No extra CSS or props needed — just place BaseForm inside a
// height-constrained parent (dialog, panel, sidebar).
<Dialog isOpen={true} title="New employee">
  <BaseForm formContent={manyFields} onSubmit={handleSubmit} />
</Dialog>`}}}},yo=[e({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates (date only)",fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),e({fieldKey:"meetingWindow",fieldComponent:"DATE_RANGE_INPUT",label:"Meeting Window (date + time)",fieldComponentProps:{showTime:!0,placeholderStart:"Start",placeholderEnd:"End"}})],B={args:{formContent:yo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},To=[e({fieldKey:"attachments",fieldComponent:"FILE_PICKER",label:"Attachments",fieldComponentProps:{isMulti:!0,accept:[".pdf",".png",".jpg"],maxSize:5242880,text:"No files selected",buttonText:"Choose Files"}}),e({fieldKey:"singleFile",fieldComponent:"FILE_PICKER",label:"Cover Image (single file)",fieldComponentProps:{accept:".png,.jpg",text:"No file chosen"}})],A={args:{formContent:To,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},go=[e({fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",isRequired:!0,helperText:o.jsxs("span",{children:["We'll use this to send you a confirmation."," ",o.jsx("a",{href:"#privacy",style:{color:"inherit"},children:"Privacy policy"})]}),helperTextPlacement:"tooltip",fieldComponentProps:{placeholder:"you@example.com"}}),e({fieldKey:"bio",fieldComponent:"TEXT_AREA",label:"Bio",helperText:o.jsxs("span",{children:["Write a short bio. ",o.jsx("strong",{children:"Markdown"})," is supported."]}),helperTextPlacement:"bottom",fieldComponentProps:{placeholder:"Tell us about yourself",rows:3}}),e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",helperText:"Select the department you belong to",helperTextPlacement:"tooltip",fieldComponentProps:{items:m,placeholder:"Select department"}})],v={args:{formContent:go,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Eo=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name",defaultValue:"Jane Doe"}}),e({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",fieldComponentProps:{min:0,max:1e3,step:1,defaultValue:42}}),e({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:u,placeholder:"Select priority"}})],w={args:{formContent:Eo,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}},Po=[e({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter a name"}}),e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}})],Do=[e({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:u,placeholder:"Select priority"}}]}}],M={args:{formContent:Po,onSubmit:r},parameters:{docs:{source:{code:`const formContent = [
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
/>`}}}};function Fo(){const n=$(),t=a.useMemo(()=>n(Y).where({department:"Marketing"}),[n]),l=a.useMemo(()=>[e({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Marketing employee",helperText:"This selector is scoped by an ObjectSet.",fieldComponentProps:{objectSet:t,placeholder:"Search Marketing employees…"}})],[t]);return o.jsx(p,{formContent:l,onSubmit:r})}const W={render:()=>o.jsx(Fo,{}),parameters:{docs:{source:{code:`function ScopedEmployeeForm() {
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
}`}}}},L={args:{formContent:Do,onSubmit:r}},_o=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],k={args:{formContent:_o,onSubmit:r}},Io=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:m,placeholder:"Select..."}}]}}],j={args:{formContent:Io,onSubmit:r}};function Z(n){var t;return typeof n!="string"?String(n):((t=wn[n])==null?void 0:t.name)??n}function ee(n){const t=String(n),l=wn[t];return o.jsxs("span",{className:"osdkRichDropdownLabel",children:[o.jsx("strong",{children:(l==null?void 0:l.name)??t}),(l==null?void 0:l.team)!=null?o.jsx("span",{className:"osdkRichDropdownDescription",children:l.team}):null]})}var ne,oe,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(Ie=(_e=E.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};var Re,Ne,Ke;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(tn=(on=x.parameters)==null?void 0:on.docs)==null?void 0:tn.source}}};var rn,ln,an;U.parameters={...U.parameters,docs:{...(rn=U.parameters)==null?void 0:rn.docs,source:{originalSource:`{
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
