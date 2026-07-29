import{j as o,r as s}from"./iframe-Da42tfo0.js";import{E as x}from"./Employee-BAk2o20h.js";import{h as l,E as k,f,b as j,e as W,a as t,c as w,T as J}from"./baseFormStoryHelpers-dAyd2u9k.js";import{u as H}from"./useOsdkClient-BxBRpG4B.js";import{B as U}from"./BaseForm-BisQz914.js";import"./preload-helper-DAikJXZa.js";import"./SubmissionOutputPanel-DG4irKhJ.js";import"./index-Bomen_f9.js";import"./ActionButton-BvqT7-oi.js";import"./Button-DNGlddJW.js";import"./useBaseUiId-BeAjw0Pz.js";import"./SkeletonBar-BqNP19Zt.js";import"./Tooltip-s5Zvo8l1.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-Dneb3Ic8.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./PopoverPopup-B2KF4r0_.js";import"./info-sign-Bw_bRdxv.js";import"./svgIconContainer-C1uFDFQ-.js";import"./DropdownField-lD6ZutwA.js";import"./toNumber-B2CaCxn8.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./tick-Djt3HCnR.js";import"./isObject-GrzurbJg.js";import"./search-CMGFB0Gl.js";import"./cross-DG6Fu1MX.js";import"./useValueChanged-Cr9sCKBo.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./CompositeItem-BgwdEem5.js";import"./makeExternalStore-DY6l4t0Z.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./useEventCallback-DQIdBA5X.js";import"./Switch-CnAP0jNF.js";import"./iconLoader-CUqjgfX-.js";import"./CompositeRoot-4xhbfFIS.js";import"./TimePicker-CtZZuoEY.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./error-C20szSnY.js";const je={...j,title:"Components/ActionForm/Building Blocks/BaseForm/States & Submission"};function X(){const[e,i]=s.useState({completion:W}),n=s.useCallback((r,a)=>{i(b=>({...b,[r]:a}))},[]);return o.jsxs("div",{children:[o.jsxs("div",{className:"osdkFormStorySpacing",children:[o.jsx("strong",{children:"Current Form State:"}),o.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,(r,a)=>a instanceof File?`File: ${a.name}`:a,2)})]}),o.jsx(U,{formContent:f,formState:e,onFieldValueChange:n,onSubmit:l})]})}const m={parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
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
);`}}},render:()=>o.jsx(X,{})},d={args:{formContent:k,isLoading:!0,onSubmit:l},parameters:{docs:{source:{code:`<BaseForm
  formContent={[]}
  isLoading={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},u={args:{formContent:f,isSubmitDisabled:!0,onSubmit:l},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isSubmitDisabled={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},c={args:{formContent:f,isPending:!0,onSubmit:l},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  isPending={true}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}},p={args:{formContent:f,onSubmit:l,submitButtonText:"Save employee",submitButtonVariant:"secondary"},parameters:{docs:{source:{code:`<BaseForm
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
  submitButtonText="Save employee"
  submitButtonVariant="secondary"
/>`}}}},G={name:"Locked employee",description:"Locked multi-line description",quantity:42,priority:"Medium",tags:["Urgent","Pinned"],isActive:!0,isRemote:!0,scheduledAt:new Date(2026,0,15,9,30),vacationDates:[new Date(2026,0,15),new Date(2026,0,31)],custom:"Requires approval"},q=["Requires approval","Ready to submit"];function Y(e){const i=e.value!=null?String(e.value):void 0;return o.jsx("div",{className:"osdkCustomChoiceGroup",role:"group","aria-label":"Custom status","aria-disabled":e.disabled===!0||void 0,children:q.map(n=>o.jsx("button",{type:"button",disabled:e.disabled,className:n===i?"osdkCustomChoiceButton osdkCustomChoiceButtonSelected":"osdkCustomChoiceButton",onClick:()=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},children:n},n))})}function Q(){const e=H(),i=s.useMemo(()=>e(x),[e]),[n,r]=s.useState(G),a=s.useCallback((M,L)=>{r(V=>({...V,[M]:L}))},[]),b=s.useMemo(()=>[t({fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Name",disabled:!0,fieldComponentProps:{placeholder:"Enter a name"}}),t({fieldKey:"description",fieldComponent:"TEXT_AREA",label:"Description",disabled:!0,fieldComponentProps:{placeholder:"Enter a description",rows:3}}),t({fieldKey:"quantity",fieldComponent:"NUMBER_INPUT",label:"Quantity",disabled:!0,fieldComponentProps:{min:0,max:1e3,step:1,placeholder:"0"}}),t({fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority (select)",disabled:!0,fieldComponentProps:{items:w,placeholder:"Select priority"}}),t({fieldKey:"tags",fieldComponent:"DROPDOWN",label:"Tags (searchable multi-select)",disabled:!0,fieldComponentProps:{items:J,isMultiple:!0,isSearchable:!0,placeholder:"Search tags..."}}),t({fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Is Active",disabled:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}}),t({fieldKey:"isRemote",fieldComponent:"SWITCH",label:"Remote employee",disabled:!0,fieldComponentProps:{}}),t({fieldKey:"scheduledAt",fieldComponent:"DATETIME_PICKER",label:"Scheduled At",disabled:!0,fieldComponentProps:{showTime:!0,placeholder:"Select date and time"}}),t({fieldKey:"vacationDates",fieldComponent:"DATE_RANGE_INPUT",label:"Vacation Dates",disabled:!0,fieldComponentProps:{placeholderStart:"Start date",placeholderEnd:"End date"}}),t({fieldKey:"document",fieldComponent:"FILE_PICKER",label:"Document",disabled:!0,fieldComponentProps:{accept:".pdf,.doc,.docx"}}),t({fieldKey:"employee",fieldComponent:"OBJECT_SELECT",label:"Employee",disabled:!0,fieldComponentProps:{objectType:{type:"object",apiName:"Employee"},placeholder:"Search employees…"}}),t({fieldKey:"employees",fieldComponent:"OBJECT_SET",label:"Employees",disabled:!0,fieldComponentProps:{value:i}}),t({fieldKey:"custom",fieldComponent:"CUSTOM",label:"Custom field",disabled:!0,fieldComponentProps:{customRenderer:Y}})],[i]);return o.jsx(U,{formTitle:"Disabled fields",formContent:b,formState:n,onFieldValueChange:a,onSubmit:l})}const S={render:()=>o.jsx(Q,{}),parameters:{docs:{description:{story:"Shows every BaseForm field renderer in a disabled state. Disabled fields keep their current values in form state but block user edits."},source:{code:`const formContent = [
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
/>`}}}};var C,T,E;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var g,h,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var F,D,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(D=u.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var _,B,v;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(v=(B=c.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var N,O,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,A,K;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(K=(A=S.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};const We=["Controlled","Loading","SubmitDisabled","Pending","WithCustomSubmitButton","DisabledFields"];export{m as Controlled,S as DisabledFields,d as Loading,c as Pending,u as SubmitDisabled,p as WithCustomSubmitButton,We as __namedExportsOrder,je as default};
