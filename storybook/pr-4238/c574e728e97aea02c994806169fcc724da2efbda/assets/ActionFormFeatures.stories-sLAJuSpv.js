import{j as i,u as Ee,r as D,s as De,a as Be}from"./iframe-D0tV0cI9.js";import{A as B}from"./action-form-BjyWx0t9.js";import{F as N,S as R}from"./SubmissionOutputPanel-Dj3syeSw.js";import"./preload-helper-BMejyDSI.js";import"./DropdownField-C2c-svQN.js";import"./debounce-CQ8ktfpw.js";import"./useOsdkClient-BHqJSoPG.js";import"./index--X-dIIbK.js";import"./Input-COsc6IX5.js";import"./useBaseUiId-DOX0bj2Y.js";import"./useControlled-LJkicshM.js";import"./index-PxTuLgQ7.js";import"./index--qRovy9Z.js";import"./PopoverPopup-CgzNWAqf.js";import"./InternalBackdrop-8s1L6ptE.js";import"./composite-eLTYJf7x.js";import"./index-B0E7m3m7.js";import"./getDisabledMountTransitionStyles-CU_JeY5i.js";import"./ToolbarRootContext-BrObQQEc.js";import"./tick-O8NB6F9G.js";import"./svgIconContainer-D4vQ8nMV.js";import"./small-cross-hHO5mdkn.js";import"./search-Cnl0jIoS.js";import"./cross-D1A4Ur2n.js";import"./useValueChanged-DUSHD8U9.js";import"./getPseudoElementBounds-B-8LJsE_.js";import"./CompositeItem-Ch1OySWF.js";import"./makeExternalStore-CczQoVJf.js";import"./BaseForm-B6PMWiSE.js";import"./ActionButton-nMCNHSER.js";import"./Button-DgOszdIa.js";import"./SkeletonBar-BXKY95YJ.js";import"./Tooltip-su0Z3mzC.js";import"./info-sign-D3LP_k7e.js";import"./chevron-up-C-76tjxf.js";import"./chevron-down-BYHSUQw3.js";import"./useEventCallback-BU2eLzaP.js";import"./iconLoader-KnRm0ulF.js";import"./Switch-u_28PkNm.js";import"./CompositeRoot-Tol4TLHR.js";import"./TimePicker-Bx6XMsfw.js";import"./CollapsiblePanel-C_dUzpsn.js";import"./error-BLp0q_TC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1pmSZXh.js";const{expect:a,fn:y,userEvent:r,waitFor:p,within:c}=__STORYBOOK_MODULE_TEST__,Ae=Ee.actionDefinition,Ne=Be.actionDefinition,Re=1500,Ie=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Ue=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],d=y().mockName("onSuccess"),P=y().mockName("onError"),k=y().mockName("onSubmit"),O=y().mockName("onSubmit:slow"),W=y().mockName("onSubmit:failure");function Pe(t){d(t)}function I(t,e){return e(t)}function ke(t,e){return e(t)}const Oe=(t,e)=>(k(t),I(t,e)),We=async(t,e)=>(O(t),await xe(Re),I(t,e)),je=async t=>{throw W(t),await xe(300),new Error("Demo submission failed")};function xe(t){return new Promise(e=>setTimeout(e,t))}function U({applyStoryAction:t,onSubmit:e}){const[n,o]=D.useState({status:"idle"}),l=D.useCallback(async(s,u)=>{o({status:"submitting",submittedValues:s});try{let m;if(e==null){const H=await t(s,u);Pe(H),m=H}else m=await e(s,u);return o({status:"success",submittedValues:s,response:m}),m}catch(m){throw o({status:"error",submittedValues:s,error:m}),m}},[t,e]);return{handleStoryError:D.useCallback(s=>{o(u=>({...u,status:"error",error:s})),P(s)},[]),handleStorySubmit:l,submission:n}}function He({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onSubmit:o,showFormTitle:l}){const{handleStoryError:j,handleStorySubmit:s,submission:u}=U({applyStoryAction:I,onSubmit:o});return i.jsx(N,{output:i.jsx(R,{idleMessage:"Submit the form to see the action response.",snapshot:u}),children:i.jsx(B,{actionDefinition:Ae,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onError:j,onSubmit:s,showFormTitle:l})})}function Ke(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=U({applyStoryAction:ke});return i.jsx(N,{output:i.jsx(R,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:i.jsx(B,{actionDefinition:Ne,onError:t,onSubmit:e,showFormTitle:!0})})}const kt={title:"Components/ActionForm/Features",component:He,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},f={play:async({canvasElement:t})=>{d.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await r.type(n,"Ada Lovelace"),await r.click(o),await p(()=>a(d).toHaveBeenCalled()),await a(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await a(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Fills in the required field and submits, showing the success state and the serialized action response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>`}}}},h={args:{onSubmit:je},play:async({canvasElement:t})=>{P.mockClear(),W.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await r.type(n,"Margaret Hamilton"),await r.click(o),await p(()=>a(W).toHaveBeenCalled()),await p(()=>a(P).toHaveBeenCalled()),await a(await e.findByText("Submit failed.")).toBeInTheDocument(),await a(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},b={play:async({canvasElement:t})=>{d.mockClear();const e=c(t);await e.findByRole("textbox",{name:/^fullName/u});const n=await e.findByRole("button",{name:/submit/iu});await r.click(n),await a(await e.findByRole("alert")).toBeInTheDocument(),await a(d).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."},source:{code:`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>`}}}},S={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=c(t);await a(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>`}}}},w={args:{onSubmit:We},play:async({canvasElement:t})=>{O.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await r.type(n,"Katherine Johnson"),await r.click(o),await p(()=>a(O).toHaveBeenCalled()),await a(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},F={name:"Custom Submit Wrapper",args:{onSubmit:Oe},play:async({canvasElement:t})=>{k.mockClear();const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await r.type(n,"Grace Hopper"),await r.click(o),await p(()=>a(k).toHaveBeenCalledWith(a.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},v={args:{showFormTitle:!0},parameters:{docs:{description:{story:"Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},T={args:{formTitle:"Update employee profile",showFormTitle:!0},parameters:{docs:{description:{story:"Overrides the title text with formTitle. showFormTitle must also be true for the title to render."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>`}}}},g={args:{formFieldDefinitions:Ie},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},C={args:{formFieldDefinitions:Ue},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},A={render:()=>i.jsx(Ke,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},x={render:()=>i.jsx(Ve,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Ve(){const[t,e]=D.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:n,handleStorySubmit:o,submission:l}=U({applyStoryAction:I});return i.jsx(N,{output:i.jsx(R,{idleMessage:"Submit the form to see the action response.",snapshot:l}),children:i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"osdkFormStorySpacing",children:[i.jsx("strong",{children:"Current form state (JSON):"}),i.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),i.jsx(B,{actionDefinition:Ae,formState:t,onError:n,onFormStateChange:e,onSubmit:o})]})})}const Le=De.actionDefinition;function _e(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=U({applyStoryAction:(o,l)=>l(o)});return i.jsx(N,{output:i.jsx(R,{idleMessage:"Submit the form to see the validation response.",snapshot:n}),children:i.jsx(B,{actionDefinition:Le,onError:t,onSubmit:e,showFormTitle:!0})})}const E={render:()=>i.jsx(_e,{}),play:async({canvasElement:t})=>{const e=c(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await r.type(n,"Ada Lovelace"),await r.click(o),await p(()=>a(e.getByText("2 issues")).toBeInTheDocument())},parameters:{docs:{description:{story:"Demonstrates server-side submission criteria validation. The action's validate endpoint returns INVALID submission criteria, which appear in the footer error indicator without applying the action."},source:{code:`// When the action has submission criteria configured in Foundry,
// ActionForm validates before applying. Failed criteria appear in the
// footer error indicator alongside any field-level errors.
<ActionForm
  actionDefinition={submissionCriteriaStoryAction}
  onValidationResponse={(response) =>
    console.log("Validation result", response)
  }
/>`}}}};var K,V,L;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(L=(V=f.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var _,M,q;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var G,X,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,J,Q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ae,re;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,me;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(me=(le=T.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ce,ue,pe;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,ye,fe;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,be,Se;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var we,Fe,ve;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var Te,ge,Ce;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <SubmissionCriteriaActionFormStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Ada Lovelace");
    await userEvent.click(submitButton);
    await waitFor(() => expect(canvas.getByText("2 issues")).toBeInTheDocument());
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates server-side submission criteria validation. The action's validate endpoint returns INVALID submission criteria, which appear in the footer error indicator without applying the action."
      },
      source: {
        code: \`// When the action has submission criteria configured in Foundry,
// ActionForm validates before applying. Failed criteria appear in the
// footer error indicator alongside any field-level errors.
<ActionForm
  actionDefinition={submissionCriteriaStoryAction}
  onValidationResponse={(response) =>
    console.log("Validation result", response)
  }
/>\`
      }
    }
  }
}`,...(Ce=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const Ot=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState","SubmissionCriteriaFailure"];export{x as ControlledFormState,F as CustomSubmitHandler,w as SlowCustomSubmit,E as SubmissionCriteriaFailure,S as SubmitDisabled,h as SubmitFailure,f as SubmitSuccess,b as ValidationErrors,T as WithCustomTitle,g as WithDefaultValues,C as WithFieldOverrides,v as WithTitle,A as WithUnsupportedFields,Ot as __namedExportsOrder,kt as default};
