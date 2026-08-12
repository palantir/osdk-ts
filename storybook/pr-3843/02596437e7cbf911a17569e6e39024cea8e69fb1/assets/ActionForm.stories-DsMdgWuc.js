import{j as n,u as Pe,r as E,g as Ue,a as Le}from"./iframe-BzgeOfJo.js";import{F as k,S as j}from"./SubmissionOutputPanel-yEFK05BR.js";import{A as B}from"./action-form-DXamful2.js";import"./preload-helper-Bkrr1btE.js";import"./DropdownField-DhpZ0Ims.js";import"./toNumber-B6i1rSxO.js";import"./useOsdkClient-DcUrkyFT.js";import"./index-0sS4DK38.js";import"./Input-uW-V73Ym.js";import"./useBaseUiId-CXJNSrJM.js";import"./useControlled-CCMODMjy.js";import"./index-CGtuAssr.js";import"./index-BF9eciPM.js";import"./PopoverPopup-lz77nYOE.js";import"./InternalBackdrop-BayFq1HO.js";import"./composite-B4xmkZhl.js";import"./index-Do1t6yvi.js";import"./getDisabledMountTransitionStyles-CKX8M7fA.js";import"./ToolbarRootContext-BPdZZUMs.js";import"./tick-BblDtOqU.js";import"./svgIconContainer-DfG8sdKE.js";import"./isObject-WM2S0FIl.js";import"./search-D0znHoB0.js";import"./cross-CDPJxVBK.js";import"./useValueChanged-CsD6JbCM.js";import"./getPseudoElementBounds-mxfkqN-r.js";import"./CompositeItem-hxBAdSix.js";import"./makeExternalStore-Bo_8jKeh.js";import"./BaseForm-z8xkFgPq.js";import"./ActionButton-CzlEqbU-.js";import"./Button-CMlQCxNr.js";import"./SkeletonBar-DtVWZo4V.js";import"./Tooltip-DaUXTYBe.js";import"./assertUnreachable-tCT10eXl.js";import"./info-sign-5Z5FUywb.js";import"./chevron-up-Dccv2pYd.js";import"./chevron-down-DWn-RMzw.js";import"./useEventCallback-DoNQJm52.js";import"./Switch-tKKE_dzG.js";import"./iconLoader-DIVjjwiM.js";import"./CompositeRoot-BU9pFS9K.js";import"./TimePicker-DHPLaPqs.js";import"./CollapsiblePanel-nnSQYfou.js";import"./error-B2aj7L5W.js";import"./withOsdkMetrics-C1N_Pny7.js";const{expect:i,fn:y,userEvent:l,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,Ee=Pe.actionDefinition,Oe=Ue.actionDefinition,ke=Le.actionDefinition,je=1500,We=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Be=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:e=>e===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],u=y().mockName("onSuccess"),P=y().mockName("onError"),U=y().mockName("onSubmit"),L=y().mockName("onSubmit:slow"),O=y().mockName("onSubmit:failure");function He(e){u(e)}function R(e,t){return t(e)}function Ke(e,t){return t(e)}function _e(e,t){return t(e)}const Ve=(e,t)=>(U(e),R(e,t)),Re=async(e,t)=>(L(e),await Ie(je),R(e,t)),Me=async e=>{throw O(e),await Ie(300),new Error("Demo submission failed")};function Ie(e){return new Promise(t=>setTimeout(t,e))}function I({applyStoryAction:e,onSubmit:t}){const[o,a]=E.useState({status:"idle"}),p=E.useCallback(async(r,m)=>{a({status:"submitting",submittedValues:r});try{let s;if(t==null){const H=await e(r,m);He(H),s=H}else s=await t(r,m);return a({status:"success",submittedValues:r,response:s}),s}catch(s){throw a({status:"error",submittedValues:r,error:s}),s}},[e,t]);return{handleStoryError:E.useCallback(r=>{a(m=>({...m,status:"error",error:r})),P(r)},[]),handleStorySubmit:p,submission:o}}function qe({formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,labels:a,onSubmit:p,showFormTitle:W}){const{handleStoryError:r,handleStorySubmit:m,submission:s}=I({applyStoryAction:R,onSubmit:p});return n.jsx(k,{output:n.jsx(j,{idleMessage:"Submit the form to see the action response.",snapshot:s}),children:n.jsx(B,{actionDefinition:Ee,formFieldDefinitions:e,formTitle:t,isSubmitDisabled:o,labels:a,onError:r,onSubmit:m,showFormTitle:W})})}function Ge(){const{handleStoryError:e,handleStorySubmit:t}=I({applyStoryAction:Ke});return n.jsx("div",{className:"osdkFormCard",style:{marginInline:"auto"},children:n.jsx(B,{actionDefinition:Oe,onError:e,onSubmit:t,showFormTitle:!0})})}function Ye(){const{handleStoryError:e,handleStorySubmit:t,submission:o}=I({applyStoryAction:_e});return n.jsx(k,{output:n.jsx(j,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(B,{actionDefinition:ke,onError:e,onSubmit:t,showFormTitle:!0})})}const Ht={title:"Components/ActionForm/Usage",component:qe,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},labels:{control:!1,description:"Overrides user-facing strings in BaseForm, FormField, and built-in field components."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},f={render:()=>n.jsx(Ge,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
/>`}}}},b={play:async({canvasElement:e})=>{u.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Ada Lovelace"),await l.click(a),await d(()=>i(u).toHaveBeenCalled()),await i(await t.findByText("Submit succeeded.")).toBeInTheDocument(),await i(await t.findByText(/Ada Lovelace/u)).toBeInTheDocument()}},h={args:{onSubmit:Me},play:async({canvasElement:e})=>{P.mockClear(),O.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Margaret Hamilton"),await l.click(a),await d(()=>i(O).toHaveBeenCalled()),await d(()=>i(P).toHaveBeenCalled()),await i(await t.findByText("Submit failed.")).toBeInTheDocument(),await i(await t.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},S={play:async({canvasElement:e})=>{u.mockClear();const t=c(e);await t.findByRole("textbox",{name:/^fullName/u});const o=await t.findByRole("button",{name:/submit/iu});await l.click(o),await i(await t.findByRole("alert")).toBeInTheDocument(),await i(u).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},w={args:{isSubmitDisabled:!0},play:async({canvasElement:e})=>{const t=c(e);await i(await t.findByRole("button",{name:/submit/iu})).toBeDisabled()}},F={args:{onSubmit:Re},play:async({canvasElement:e})=>{L.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Katherine Johnson"),await l.click(a),await d(()=>i(L).toHaveBeenCalled()),await i(await t.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},T={name:"Custom Submit Wrapper",args:{onSubmit:Ve},play:async({canvasElement:e})=>{U.mockClear();const t=c(e),o=await t.findByRole("textbox",{name:/^fullName/u}),a=await t.findByRole("button",{name:/submit/iu});await l.type(o,"Grace Hopper"),await l.click(a),await d(()=>i(U).toHaveBeenCalledWith(i.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},g={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},v={args:{formTitle:"Update employee profile",showFormTitle:!0}},C={args:{formFieldDefinitions:We},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},N={args:{formFieldDefinitions:Be},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},D={args:{formFieldDefinitions:Be,onSubmit:Re,labels:{submitting:"Saving employee…",fieldLabels:{editedLabel:"Changed",requiredIndicatorAriaLabel:"Required field",renderInfoTipAriaLabel:e=>e==null?"Field details":`Details about ${e}`},fieldComponentLabels:{DROPDOWN:{clearButtonLabel:"Clear employment type",renderRemoveButtonLabel:e=>`Remove ${e}`},NUMBER_INPUT:{incrementButtonLabel:"Increase experience",decrementButtonLabel:"Decrease experience"}}}},parameters:{docs:{description:{story:"Shows form-level, FormField, and leaf-field label overrides. Change a field to see the edited label, inspect the info-tip and stepper buttons for their accessible labels, then submit to see the pending button copy."}}}},A={render:()=>n.jsx(Ye,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},x={render:()=>n.jsx(Xe,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Xe(){const[e,t]=E.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:a,submission:p}=I({applyStoryAction:R});return n.jsx(k,{output:n.jsx(j,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(e,null,2)})]}),n.jsx(B,{actionDefinition:Ee,formState:e,onError:o,onFormStateChange:t,onSubmit:a})]})})}var K,_,V;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var M,q,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,X,J;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=h.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var $,z,Q;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(Q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Z,ee,te;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,re,se;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,me,ce;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(me=g.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,de,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ye,fe,be;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var he,Se,we;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Fe,Te,ge;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    formFieldDefinitions: actionFormOverrideFields,
    onSubmit: handleSlowSubmit,
    labels: {
      submitting: "Saving employee…",
      fieldLabels: {
        editedLabel: "Changed",
        requiredIndicatorAriaLabel: "Required field",
        renderInfoTipAriaLabel: label => label == null ? "Field details" : \`Details about \${label}\`
      },
      fieldComponentLabels: {
        DROPDOWN: {
          clearButtonLabel: "Clear employment type",
          renderRemoveButtonLabel: label => \`Remove \${label}\`
        },
        NUMBER_INPUT: {
          incrementButtonLabel: "Increase experience",
          decrementButtonLabel: "Decrease experience"
        }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Shows form-level, FormField, and leaf-field label overrides. Change a field to see the edited label, inspect the info-tip and stepper buttons for their accessible labels, then submit to see the pending button copy."
      }
    }
  }
}`,...(ge=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};var ve,Ce,Ne;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ne=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var De,Ae,xe;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(xe=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source}}};const Kt=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithLabels","WithUnsupportedFields","ControlledFormState"];export{x as ControlledFormState,T as CustomSubmitHandler,f as Default,F as SlowCustomSubmit,w as SubmitDisabled,h as SubmitFailure,b as SubmitSuccess,S as ValidationErrors,v as WithCustomTitle,C as WithDefaultValues,N as WithFieldOverrides,D as WithLabels,g as WithTitle,A as WithUnsupportedFields,Kt as __namedExportsOrder,Ht as default};
