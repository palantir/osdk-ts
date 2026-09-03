import{j as a,u as ge,r as A,a as Ce}from"./iframe-DfNFuvd8.js";import{A as P}from"./action-form-D5BRiXp9.js";import{F as I,S as k}from"./SubmissionOutputPanel-CGXm7mfq.js";import"./preload-helper-B2A7KixS.js";import"./DropdownField-Bzzr4tIT.js";import"./debounce-R5M_pHII.js";import"./useOsdkClient-DrnSR9t9.js";import"./index-hJ034l85.js";import"./Input-DQxNJVQ9.js";import"./useBaseUiId-Bo6GSES5.js";import"./useControlled-P4f8RlVJ.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./PopoverPopup-YOckH7SE.js";import"./InternalBackdrop-C_nhbKJU.js";import"./composite-D6AWaxnU.js";import"./index-DiD4EhSO.js";import"./getDisabledMountTransitionStyles-BIM2Nojc.js";import"./ToolbarRootContext-BppEIMJO.js";import"./tick-zr2mL_AY.js";import"./svgIconContainer-B6TYwpfX.js";import"./small-cross-BYYoKwWX.js";import"./search-C0uD-Uv6.js";import"./cross-CBZgOvDJ.js";import"./useValueChanged-wyGRNMGl.js";import"./getPseudoElementBounds-DNQ_Lyqg.js";import"./CompositeItem-C2W2AWaC.js";import"./makeExternalStore-DLzSgHee.js";import"./BaseForm-DWFLM0Um.js";import"./ActionButton-JQL18lz7.js";import"./Button-BqZDxH8m.js";import"./SkeletonBar-CegOdRAd.js";import"./Tooltip-CDXk7Z_Y.js";import"./info-sign-DFgs2Fv5.js";import"./chevron-up-DPk2RPjn.js";import"./chevron-down-C8YJ1kBl.js";import"./useEventCallback-RjnLJur2.js";import"./iconLoader-U-2V_v-o.js";import"./CompositeRoot-SfYs0Up-.js";import"./Switch-D_UQZ28a.js";import"./TimePicker-J4YY0Ytn.js";import"./CollapsiblePanel-DRB_PNPV.js";import"./error-ThwmBgve.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJRcI3lK.js";const{expect:i,fn:f,userEvent:s,waitFor:p,within:c}=__STORYBOOK_MODULE_TEST__,Te=ge.actionDefinition,Ee=Ce.actionDefinition,xe=1500,Ae=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],De=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],d=f().mockName("onSuccess"),B=f().mockName("onError"),N=f().mockName("onSubmit"),R=f().mockName("onSubmit:slow"),U=f().mockName("onSubmit:failure");function Be(t){d(t)}function D(t,e){return e(t)}function Ne(t,e){return e(t)}const Re=(t,e)=>(N(t),D(t,e)),Ue=async(t,e)=>(R(t),await ve(xe),D(t,e)),Pe=async t=>{throw U(t),await ve(300),new Error("Demo submission failed")};function ve(t){return new Promise(e=>setTimeout(e,t))}function O({applyStoryAction:t,onSubmit:e}){const[n,o]=A.useState({status:"idle"}),u=A.useCallback(async(r,m)=>{o({status:"submitting",submittedValues:r});try{let l;if(e==null){const K=await t(r,m);Be(K),l=K}else l=await e(r,m);return o({status:"success",submittedValues:r,response:l}),l}catch(l){throw o({status:"error",submittedValues:r,error:l}),l}},[t,e]);return{handleStoryError:A.useCallback(r=>{o(m=>({...m,status:"error",error:r})),B(r)},[]),handleStorySubmit:u,submission:n}}function Ie({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onSubmit:o,showFormTitle:u}){const{handleStoryError:H,handleStorySubmit:r,submission:m}=O({applyStoryAction:D,onSubmit:o});return a.jsx(I,{output:a.jsx(k,{idleMessage:"Submit the form to see the action response.",snapshot:m}),children:a.jsx(P,{actionDefinition:Te,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onError:H,onSubmit:r,showFormTitle:u})})}function ke(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=O({applyStoryAction:Ne});return a.jsx(I,{output:a.jsx(k,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:a.jsx(P,{actionDefinition:Ee,onError:t,onSubmit:e,showFormTitle:!0})})}const Dt={title:"Components/ActionForm/Features",component:Ie,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},y={play:async({canvasElement:t})=>{d.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Ada Lovelace"),await s.click(o),await p(()=>i(d).toHaveBeenCalled()),await i(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await i(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Fills in the required field and submits, showing the success state and the serialized action response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>`}}}},h={args:{onSubmit:Pe},play:async({canvasElement:t})=>{B.mockClear(),U.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Margaret Hamilton"),await s.click(o),await p(()=>i(U).toHaveBeenCalled()),await p(()=>i(B).toHaveBeenCalled()),await i(await e.findByText("Submit failed.")).toBeInTheDocument(),await i(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},b={play:async({canvasElement:t})=>{d.mockClear();const e=c(t);await e.findByRole("textbox",{name:/^fullName/u});const n=await e.findByRole("button",{name:/submit/iu});await s.click(n),await i(await e.findByRole("alert")).toBeInTheDocument(),await i(d).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."},source:{code:`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>`}}}},S={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=c(t);await i(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>`}}}},w={args:{onSubmit:Ue},play:async({canvasElement:t})=>{R.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Katherine Johnson"),await s.click(o),await p(()=>i(R).toHaveBeenCalled()),await i(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},F={name:"Custom Submit Wrapper",args:{onSubmit:Re},play:async({canvasElement:t})=>{N.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Grace Hopper"),await s.click(o),await p(()=>i(N).toHaveBeenCalledWith(i.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},T={args:{showFormTitle:!0},parameters:{docs:{description:{story:"Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},v={args:{formTitle:"Update employee profile",showFormTitle:!0},parameters:{docs:{description:{story:"Overrides the title text with formTitle. showFormTitle must also be true for the title to render."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>`}}}},g={args:{formFieldDefinitions:Ae},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},C={args:{formFieldDefinitions:De},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},E={render:()=>a.jsx(ke,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},x={render:()=>a.jsx(Oe,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Oe(){const[t,e]=A.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:n,handleStorySubmit:o,submission:u}=O({applyStoryAction:D});return a.jsx(I,{output:a.jsx(k,{idleMessage:"Submit the form to see the action response.",snapshot:u}),children:a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"osdkFormStorySpacing",children:[a.jsx("strong",{children:"Current form state (JSON):"}),a.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),a.jsx(P,{actionDefinition:Te,formState:t,onError:n,onFormStateChange:e,onSubmit:o})]})})}var W,j,_;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(j=y.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var V,L,M;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(L=h.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var q,G,X;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(G=b.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,z,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(z=S.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,Z,$;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;F.parameters={...F.parameters,docs:{...(ee=F.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=F.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,ie;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,se,le;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(se=v.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var me,ce,ue;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,fe;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,he,be;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(he=E.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Se,we,Fe;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(we=x.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};const Bt=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState"];export{x as ControlledFormState,F as CustomSubmitHandler,w as SlowCustomSubmit,S as SubmitDisabled,h as SubmitFailure,y as SubmitSuccess,b as ValidationErrors,v as WithCustomTitle,g as WithDefaultValues,C as WithFieldOverrides,T as WithTitle,E as WithUnsupportedFields,Bt as __namedExportsOrder,Dt as default};
