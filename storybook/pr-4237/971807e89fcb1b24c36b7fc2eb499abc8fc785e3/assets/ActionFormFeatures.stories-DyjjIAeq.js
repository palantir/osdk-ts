import{j as n,u as xe,r as N,a as De}from"./iframe-BH9-Vfs1.js";import{A as B}from"./action-form-CKLxt6Kw.js";import{F as R,S as P}from"./SubmissionOutputPanel-DQ4nypHv.js";import"./preload-helper-CoJdsvxJ.js";import"./DropdownField-BPBBYIiE.js";import"./debounce-CErsKOIl.js";import"./useOsdkClient-B78DQJmL.js";import"./index-_6Q5jVBK.js";import"./Input-CYVECsi-.js";import"./useBaseUiId-CdU1pKU6.js";import"./useControlled-UCeQQNPP.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./PopoverPopup-Diu6AqpB.js";import"./InternalBackdrop-C4RHDXX9.js";import"./composite-aDEaeN1m.js";import"./index-D_GYi7KZ.js";import"./getDisabledMountTransitionStyles-Bavl1m2r.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./tick-sRS91U9j.js";import"./svgIconContainer-BPyIUPO5.js";import"./small-cross-Ws2nfjsL.js";import"./search-CaTzsfhK.js";import"./cross-HuW5yWPa.js";import"./useValueChanged-C51YJ2lo.js";import"./getPseudoElementBounds-fo53-Bfk.js";import"./CompositeItem-D5PXOQkD.js";import"./makeExternalStore-Cax4wnWM.js";import"./BaseForm-irPD53Hy.js";import"./ActionButton-CgXb0xmm.js";import"./Button-DJTiAyTL.js";import"./SkeletonBar-DUzCarP5.js";import"./Tooltip-D8UPmHEX.js";import"./info-sign-BjJtiiZ8.js";import"./chevron-up-CyXdAHIW.js";import"./chevron-down-SngEWHwD.js";import"./useEventCallback-BM_lCHBk.js";import"./iconLoader-B6nfzpFb.js";import"./Switch-DUvigo_W.js";import"./CompositeRoot-C4LeCwy8.js";import"./TimePicker-TVKDfKXV.js";import"./CollapsiblePanel-b7brQAbP.js";import"./error-BMBrp2lF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DsCWHvB2.js";const{expect:a,fn:f,userEvent:s,waitFor:u,within:c}=__STORYBOOK_MODULE_TEST__,W=xe.actionDefinition,Ne=De.actionDefinition,Be=1500,Re=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Pe=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],d=f().mockName("onSuccess"),U=f().mockName("onError"),k=f().mockName("onSubmit"),K=f().mockName("onSubmit:slow"),O=f().mockName("onSubmit:failure");function Ie(e){d(e)}function y(e,t){return t(e)}function Ue(e,t){return t(e)}const ke=(e,t)=>(k(e),y(e,t)),Ke=async(e,t)=>(K(e),await Ae(Be),y(e,t)),Oe=async e=>{throw O(e),await Ae(300),new Error("Demo submission failed")};function Ae(e){return new Promise(t=>setTimeout(t,e))}function I({applyStoryAction:e,onSubmit:t}){const[o,i]=N.useState({status:"idle"}),p=N.useCallback(async(r,m)=>{i({status:"submitting",submittedValues:r});try{let l;if(t==null){const _=await e(r,m);Ie(_),l=_}else l=await t(r,m);return i({status:"success",submittedValues:r,response:l}),l}catch(l){throw i({status:"error",submittedValues:r,error:l}),l}},[e,t]);return{handleStoryError:N.useCallback(r=>{i(m=>({...m,status:"error",error:r})),U(r)},[]),handleStorySubmit:p,submission:o}}function We({formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,onSubmit:i,showFormTitle:p}){const{handleStoryError:H,handleStorySubmit:r,submission:m}=I({applyStoryAction:y,onSubmit:i});return n.jsx(R,{output:n.jsx(P,{idleMessage:"Submit the form to see the action response.",snapshot:m}),children:n.jsx(B,{actionDefinition:W,formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,onError:H,onSubmit:r,showFormTitle:p})})}function He(){const{handleStoryError:e,handleStorySubmit:t,submission:o}=I({applyStoryAction:Ue});return n.jsx(R,{output:n.jsx(P,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(B,{actionDefinition:Ne,onError:e,onSubmit:t,showFormTitle:!0})})}const Ut={title:"Components/ActionForm/Features",component:We,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},h={play:async({canvasElement:e})=>{d.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await s.type(o,"Ada Lovelace"),await s.click(i),await u(()=>a(d).toHaveBeenCalled()),await a(await t.findByText("Submit succeeded.")).toBeInTheDocument(),await a(await t.findByText(/Ada Lovelace/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Fills in the required field and submits, showing the success state and the serialized action response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>`}}}},b={args:{onSubmit:Oe},play:async({canvasElement:e})=>{U.mockClear(),O.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await s.type(o,"Margaret Hamilton"),await s.click(i),await u(()=>a(O).toHaveBeenCalled()),await u(()=>a(U).toHaveBeenCalled()),await a(await t.findByText("Submit failed.")).toBeInTheDocument(),await a(await t.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},S={play:async({canvasElement:e})=>{d.mockClear();const t=c(e);await t.findByRole("textbox",{name:/^fullName/u});const o=await t.findByRole("button",{name:/submit/iu});await s.click(o),await a(await t.findByRole("alert")).toBeInTheDocument(),await a(d).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."},source:{code:`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>`}}}},w={args:{isSubmitDisabled:!0},play:async({canvasElement:e})=>{const t=c(e);await a(await t.findByRole("button",{name:/submit/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>`}}}},F={args:{onSubmit:Ke},play:async({canvasElement:e})=>{K.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await s.type(o,"Katherine Johnson"),await s.click(i),await u(()=>a(K).toHaveBeenCalled()),await a(await t.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},T={name:"Custom Submit Wrapper",args:{onSubmit:ke},play:async({canvasElement:e})=>{k.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await s.type(o,"Grace Hopper"),await s.click(i),await u(()=>a(k).toHaveBeenCalledWith(a.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},C={args:{showFormTitle:!0},parameters:{docs:{description:{story:"Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},v={args:{formTitle:"Update employee profile",showFormTitle:!0},parameters:{docs:{description:{story:"Overrides the title text with formTitle. showFormTitle must also be true for the title to render."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>`}}}},E={args:{formFieldDefinitions:Re},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},g={args:{formFieldDefinitions:Pe},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},A={render:()=>n.jsx(He,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},x={render:()=>n.jsx(Le,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}},D={render:()=>n.jsx(je,{}),parameters:{docs:{description:{story:"Groups related fields into collapsible sections using `formContentDefinitions`. Standalone fields and sections can be interleaved freely."},source:{code:`import type { ActionFormContentItem } from "@osdk/react-components/action-form";

const content: Array<ActionFormContentItem<typeof myAction>> = [
  {
    type: "field",
    definition: {
      fieldKey: "fullName",
      label: "Full name",
      fieldComponent: "TEXT_INPUT",
      fieldComponentProps: {},
    },
  },
  {
    type: "section",
    key: "employment",
    definition: {
      title: "Employment details",
      description: "Information about the employee's role and schedule.",
      fields: [
        {
          fieldKey: "yearsExperience",
          label: "Years of experience",
          fieldComponent: "NUMBER_INPUT",
          fieldComponentProps: { min: 0 },
        },
        {
          fieldKey: "isRemote",
          label: "Remote employee",
          fieldComponent: "SWITCH",
          fieldComponentProps: {},
        },
      ],
    },
  },
];

<ActionForm
  actionDefinition={myAction}
  formContentDefinitions={content}
  showFormTitle={true}
/>`}}}},_e=[{type:"field",definition:{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",fieldComponentProps:{}}},{type:"section",key:"employment",definition:{title:"Employment details",description:"Information about the employee's role and schedule.",fields:[{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],columnCount:1}}];function je(){const{handleStoryError:e,handleStorySubmit:t,submission:o}=I({applyStoryAction:y});return n.jsx(R,{output:n.jsx(P,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(B,{actionDefinition:W,formContentDefinitions:_e,onError:e,onSubmit:t,showFormTitle:!0})})}function Le(){const[e,t]=N.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:i,submission:p}=I({applyStoryAction:y});return n.jsx(R,{output:n.jsx(P,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,null,2)})]}),n.jsx(B,{actionDefinition:W,formState:e,onError:o,onFormStateChange:t,onSubmit:i})]})})}var j,L,V;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Ada Lovelace");
    await userEvent.click(submitButton);
    await waitFor(() => expect(successSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit succeeded.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Ada Lovelace/u)).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: "Fills in the required field and submits, showing the success state and the serialized action response."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>\`
      }
    }
  }
}`,...(V=(L=h.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var M,q,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Margaret Hamilton");
    await userEvent.click(submitButton);
    await waitFor(() => expect(failingSubmitSpy).toHaveBeenCalled());
    await waitFor(() => expect(errorSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit failed.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Demo submission failed/u)).toBeInTheDocument();
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
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var X,Y,z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.click(submitButton);
    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(successSpy).not.toHaveBeenCalled();
  },
  parameters: {
    docs: {
      description: {
        story: "Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."
      },
      source: {
        code: \`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>\`
      }
    }
  }
}`,...(z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var J,Q,Z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isSubmitDisabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: /submit/iu
    })).toBeDisabled();
  },
  parameters: {
    docs: {
      description: {
        story: "Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>\`
      }
    }
  }
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,te;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSlowSubmit
  },
  play: async ({
    canvasElement
  }) => {
    slowSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Katherine Johnson");
    await userEvent.click(submitButton);
    await waitFor(() => expect(slowSubmitSpy).toHaveBeenCalled());
    await expect(await canvas.findByRole("button", {
      name: /submitting/iu
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
}`,...(te=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ie;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
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
}`,...(ie=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,re,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    showFormTitle: true
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,me,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  },
  parameters: {
    docs: {
      description: {
        story: "Overrides the title text with formTitle. showFormTitle must also be true for the title to render."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(ce=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,de;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var fe,ye,he;g.parameters={...g.parameters,docs:{...(fe=g.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(he=(ye=g.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,Se,we;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Fe,Te,Ce;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ve,Ee,ge;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <SectionsActionFormStory />,
  parameters: {
    docs: {
      description: {
        story: "Groups related fields into collapsible sections using \`formContentDefinitions\`. Standalone fields and sections can be interleaved freely."
      },
      source: {
        code: \`import type { ActionFormContentItem } from "@osdk/react-components/action-form";

const content: Array<ActionFormContentItem<typeof myAction>> = [
  {
    type: "field",
    definition: {
      fieldKey: "fullName",
      label: "Full name",
      fieldComponent: "TEXT_INPUT",
      fieldComponentProps: {},
    },
  },
  {
    type: "section",
    key: "employment",
    definition: {
      title: "Employment details",
      description: "Information about the employee's role and schedule.",
      fields: [
        {
          fieldKey: "yearsExperience",
          label: "Years of experience",
          fieldComponent: "NUMBER_INPUT",
          fieldComponentProps: { min: 0 },
        },
        {
          fieldKey: "isRemote",
          label: "Remote employee",
          fieldComponent: "SWITCH",
          fieldComponentProps: {},
        },
      ],
    },
  },
];

<ActionForm
  actionDefinition={myAction}
  formContentDefinitions={content}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(ge=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:ge.source}}};const kt=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState","WithSections"];export{x as ControlledFormState,T as CustomSubmitHandler,F as SlowCustomSubmit,w as SubmitDisabled,b as SubmitFailure,h as SubmitSuccess,S as ValidationErrors,v as WithCustomTitle,E as WithDefaultValues,g as WithFieldOverrides,D as WithSections,C as WithTitle,A as WithUnsupportedFields,kt as __namedExportsOrder,Ut as default};
