import{j as n,u as Re,r as D,g as Pe,a as ke}from"./iframe-BrodOdVa.js";import{F as L,S as O}from"./SubmissionOutputPanel-BhbyRQeN.js";import{A as B}from"./action-form-DL9cV8zX.js";import"./preload-helper-BtXh37L-.js";import"./DropdownField-P2AbbCFB.js";import"./Combobox-De7QdF7N.js";import"./useOsdkClient-DDpROb7V.js";import"./small-cross-Br4CldP7.js";import"./svgIconContainer-B4AqVu0w.js";import"./index-nUEOyMBU.js";import"./Input-iiNc2naG.js";import"./useBaseUiId-BTSlrQJt.js";import"./useControlled-Cs7ltDfx.js";import"./index-c-nuxmn_.js";import"./index-BvXrNTm7.js";import"./PopoverPopup-BEwNTt9o.js";import"./InternalBackdrop-Bjvbe2IQ.js";import"./composite-B1APNlh4.js";import"./index-Btb8e17T.js";import"./getDisabledMountTransitionStyles-BVIpZ_My.js";import"./ToolbarRootContext-Ch6E_QUO.js";import"./search-DqsOFw0-.js";import"./tick-DNasZ5Uq.js";import"./cross-BpGLYQ9Z.js";import"./useValueChanged-Df2xctWW.js";import"./getPseudoElementBounds-CZj0yuu2.js";import"./CompositeItem-BiidShqS.js";import"./makeExternalStore-C91wvf2v.js";import"./BaseForm-RV6q-C7d.js";import"./ActionButton-6EKtVdWc.js";import"./Button-TfoAXQA0.js";import"./SkeletonBar--6NjKTds.js";import"./Tooltip-CNNDCbNt.js";import"./info-sign-BfME8ybm.js";import"./chevron-up-B7qMuFb_.js";import"./chevron-down-CncSp1oW.js";import"./useEventCallback-EWFzwAHE.js";import"./Switch-Bd869Ftn.js";import"./iconLoader-BPxxvloq.js";import"./CompositeRoot-COozFa_m.js";import"./TimePicker-DKJvt7V-.js";import"./CollapsiblePanel-D69D5MUo.js";import"./error-DFX2T5hJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CdZtg9n6.js";const{expect:i,fn:y,userEvent:l,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,De=Re.actionDefinition,Ie=Pe.actionDefinition,Ue=ke.actionDefinition,je=1500,Le=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Oe=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],u=y().mockName("onSuccess"),k=y().mockName("onError"),I=y().mockName("onSubmit"),U=y().mockName("onSubmit:slow"),j=y().mockName("onSubmit:failure");function He(e){u(e)}function R(e,t){return t(e)}function Ke(e,t){return t(e)}function We(e,t){return t(e)}const _e=(e,t)=>(I(e),R(e,t)),Ve=async(e,t)=>(U(e),await Be(je),R(e,t)),Me=async e=>{throw j(e),await Be(300),new Error("Demo submission failed")};function Be(e){return new Promise(t=>setTimeout(t,e))}function P({applyStoryAction:e,onSubmit:t}){const[o,a]=D.useState({status:"idle"}),p=D.useCallback(async(r,m)=>{a({status:"submitting",submittedValues:r});try{let s;if(t==null){const K=await e(r,m);He(K),s=K}else s=await t(r,m);return a({status:"success",submittedValues:r,response:s}),s}catch(s){throw a({status:"error",submittedValues:r,error:s}),s}},[e,t]);return{handleStoryError:D.useCallback(r=>{a(m=>({...m,status:"error",error:r})),k(r)},[]),handleStorySubmit:p,submission:o}}function qe({formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,labels:a,onSubmit:p,showFormTitle:H}){const{handleStoryError:r,handleStorySubmit:m,submission:s}=P({applyStoryAction:R,onSubmit:p});return n.jsx(L,{output:n.jsx(O,{idleMessage:"Submit the form to see the action response.",snapshot:s}),children:n.jsx(B,{actionDefinition:De,formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,labels:a,onError:r,onSubmit:m,showFormTitle:H})})}function Ge(){const{handleStoryError:e,handleStorySubmit:t}=P({applyStoryAction:Ke});return n.jsx("div",{className:"osdkFormCard",style:{marginInline:"auto"},children:n.jsx(B,{actionDefinition:Ie,onError:e,onSubmit:t,showFormTitle:!0})})}function Ye(){const{handleStoryError:e,handleStorySubmit:t,submission:o}=P({applyStoryAction:We});return n.jsx(L,{output:n.jsx(O,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(B,{actionDefinition:Ue,onError:e,onSubmit:t,showFormTitle:!0})})}const Kt={title:"Components/ActionForm/Usage",component:qe,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},labels:{control:!1,description:"Overrides for the form's user-facing strings. Any key left unset falls back to the built-in English default."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},f={render:()=>n.jsx(Ge,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
/>`}}}},h={play:async({canvasElement:e})=>{u.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Ada Lovelace"),await l.click(a),await d(()=>i(u).toHaveBeenCalled()),await i(await t.findByText("Submit succeeded.")).toBeInTheDocument(),await i(await t.findByText(/Ada Lovelace/u)).toBeInTheDocument()}},b={args:{onSubmit:Me},play:async({canvasElement:e})=>{k.mockClear(),j.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Margaret Hamilton"),await l.click(a),await d(()=>i(j).toHaveBeenCalled()),await d(()=>i(k).toHaveBeenCalled()),await i(await t.findByText("Submit failed.")).toBeInTheDocument(),await i(await t.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},S={play:async({canvasElement:e})=>{u.mockClear();const t=c(e);await t.findByRole("textbox",{name:/^fullName/u});const o=await t.findByRole("button",{name:/submit/iu});await l.click(o),await i(await t.findByRole("alert")).toBeInTheDocument(),await i(u).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},g={args:{isSubmitDisabled:!0},play:async({canvasElement:e})=>{const t=c(e);await i(await t.findByRole("button",{name:/submit/iu})).toBeDisabled()}},w={args:{onSubmit:Ve},play:async({canvasElement:e})=>{U.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Katherine Johnson"),await l.click(a),await d(()=>i(U).toHaveBeenCalled()),await i(await t.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},F={name:"Custom Submit Wrapper",args:{onSubmit:_e},play:async({canvasElement:e})=>{I.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Grace Hopper"),await l.click(a),await d(()=>i(I).toHaveBeenCalledWith(i.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},T={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},v={args:{formTitle:"Update employee profile",showFormTitle:!0}},C={args:{formFieldDefinitions:Le},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},N={args:{formFieldDefinitions:Oe},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},A={render:()=>n.jsx(Ye,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},x={render:()=>n.jsx(ze,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}},E={args:{labels:{submitButton:"Save changes",submitButtonPending:"Saving…",submitBlockedByValidation:"Fix the highlighted fields first",requiredIndicator:"must be filled in",editedTag:"Changed",validationRequired:"Please fill this in",validationMinLength:e=>`Needs at least ${e} characters`,issueCount:e=>e===1?"1 thing to fix":`${e} things to fix`,dropdownNoResults:"Nothing matches",dropdownSearchPlaceholder:"Start typing…",filePickerNoFileChosen:"Nothing attached yet",filePickerBrowse:"Attach"}},parameters:{docs:{description:{story:"Every user-facing string can be overridden through the `labels` prop. Any key left unset falls back to the built-in English default. Interpolated strings are functions, so the surrounding wording and argument order can change per locale. Pass the same object to `BaseForm` to localize a hand-authored form."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction.actionDefinition}
  labels={{
    submitButton: "Save changes",
    submitButtonPending: "Saving…",
    requiredIndicator: "must be filled in",
    editedTag: "Changed",
    validationRequired: "Please fill this in",
    validationMinLength: (minLength) =>
      \`Needs at least \${minLength} characters\`,
  }}
/>`}}}};function ze(){const[e,t]=D.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:a,submission:p}=P({applyStoryAction:R});return n.jsx(L,{output:n.jsx(O,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,null,2)})]}),n.jsx(B,{actionDefinition:De,formState:e,onError:o,onFormStateChange:t,onSubmit:a})]})})}var W,_,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var M,q,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  }
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,z,X;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(z=b.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var $,J,Q;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      }
    }
  }
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,te;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
  }
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,re,se;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(re=F.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,me,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,de,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ye,fe,he;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var be,Se,ge;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var we,Fe,Te;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var ve,Ce,Ne;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var Ae,xe,Ee;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    labels: {
      submitButton: "Save changes",
      submitButtonPending: "Saving…",
      submitBlockedByValidation: "Fix the highlighted fields first",
      requiredIndicator: "must be filled in",
      editedTag: "Changed",
      validationRequired: "Please fill this in",
      validationMinLength: minLength => \`Needs at least \${minLength} characters\`,
      issueCount: count => count === 1 ? "1 thing to fix" : \`\${count} things to fix\`,
      dropdownNoResults: "Nothing matches",
      dropdownSearchPlaceholder: "Start typing…",
      filePickerNoFileChosen: "Nothing attached yet",
      filePickerBrowse: "Attach"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Every user-facing string can be overridden through the \`labels\` " + "prop. Any key left unset falls back to the built-in English " + "default. Interpolated strings are functions, so the surrounding " + "wording and argument order can change per locale. Pass the same " + "object to \`BaseForm\` to localize a hand-authored form."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction.actionDefinition}
  labels={{
    submitButton: "Save changes",
    submitButtonPending: "Saving…",
    requiredIndicator: "must be filled in",
    editedTag: "Changed",
    validationRequired: "Please fill this in",
    validationMinLength: (minLength) =>
      \\\`Needs at least \\\${minLength} characters\\\`,
  }}
/>\`
      }
    }
  }
}`,...(Ee=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};const Wt=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState","LocalizedLabels"];export{x as ControlledFormState,F as CustomSubmitHandler,f as Default,E as LocalizedLabels,w as SlowCustomSubmit,g as SubmitDisabled,b as SubmitFailure,h as SubmitSuccess,S as ValidationErrors,v as WithCustomTitle,C as WithDefaultValues,N as WithFieldOverrides,T as WithTitle,A as WithUnsupportedFields,Wt as __namedExportsOrder,Kt as default};
