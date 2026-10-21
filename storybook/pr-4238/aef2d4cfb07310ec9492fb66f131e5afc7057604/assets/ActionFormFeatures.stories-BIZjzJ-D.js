import{j as i,u as Ee,r as m,s as De,a as Be}from"./iframe-CazyyGHD.js";import{A as R}from"./action-form-DCW0TSrn.js";import{F as I,S as U}from"./SubmissionOutputPanel-9k4VWCWd.js";import"./preload-helper-MgT8dc0X.js";import"./DropdownField-C5gHzoJd.js";import"./debounce-C5wZ6LH3.js";import"./useOsdkClient-D82r7lVV.js";import"./index-Bwh0Qzuq.js";import"./Input-BqWLM-qJ.js";import"./useBaseUiId-_VheOjS_.js";import"./useControlled-W6MY3ceN.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./PopoverPopup-Ctcy6mDh.js";import"./InternalBackdrop-B4za0H0s.js";import"./composite-eyAHIZy6.js";import"./index-B5m19dzZ.js";import"./getDisabledMountTransitionStyles-mlYUDhO6.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./tick-BlG7e-el.js";import"./svgIconContainer-D-fln-_9.js";import"./small-cross-DG5C9V4j.js";import"./search-CwjMn8PH.js";import"./cross-Cm-jIUuV.js";import"./useValueChanged-DBJ5aULu.js";import"./getPseudoElementBounds-9TC7yV4Y.js";import"./CompositeItem-rCpLyuDw.js";import"./makeExternalStore-CoBf-2QX.js";import"./BaseForm-bPX_-gP5.js";import"./ActionButton-CY0CRft6.js";import"./Button-ByiOliQr.js";import"./SkeletonBar-B_xaQIaw.js";import"./Tooltip-IDqRDs0x.js";import"./info-sign-KJ2bvM_H.js";import"./chevron-up-Dh6DsN47.js";import"./chevron-down-C2D_MUNL.js";import"./useEventCallback-UNd6PIzw.js";import"./iconLoader-CrxbPTZX.js";import"./Switch-dlRb8_Ze.js";import"./CompositeRoot-CXxN8NO7.js";import"./TimePicker-BZ4qlfTI.js";import"./CollapsiblePanel-Di7CgTfu.js";import"./error-0vET3H6E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C07As7Qh.js";const{expect:a,fn:f,userEvent:s,waitFor:d,within:u}=__STORYBOOK_MODULE_TEST__,Ae=Ee.actionDefinition,Ne=Be.actionDefinition,Re=1500,Ie=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Ue=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],y=f().mockName("onSuccess"),N=f().mockName("onError"),k=f().mockName("onSubmit"),O=f().mockName("onSubmit:slow"),W=f().mockName("onSubmit:failure");function Pe(t){y(t)}function P(t,e){return e(t)}function ke(t,e){return e(t)}const Oe=(t,e)=>(k(t),P(t,e)),We=async(t,e)=>(O(t),await xe(Re),P(t,e)),je=async t=>{throw W(t),await xe(300),new Error("Demo submission failed")};function xe(t){return new Promise(e=>setTimeout(e,t))}function j({applyStoryAction:t,onSubmit:e}){const[n,o]=m.useState({status:"idle"}),r=m.useCallback(async(l,p)=>{o({status:"submitting",submittedValues:l});try{let c;if(e==null){const H=await t(l,p);Pe(H),c=H}else c=await e(l,p);return o({status:"success",submittedValues:l,response:c}),c}catch(c){throw o({status:"error",submittedValues:l,error:c}),c}},[t,e]);return{handleStoryError:m.useCallback(l=>{o(p=>({...p,status:"error",error:l})),N(l)},[]),handleStorySubmit:r,submission:n}}function He({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onSubmit:o,showFormTitle:r}){const{handleStoryError:h,handleStorySubmit:l,submission:p}=j({applyStoryAction:P,onSubmit:o});return i.jsx(I,{output:i.jsx(U,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:i.jsx(R,{actionDefinition:Ae,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:n,onError:h,onSubmit:l,showFormTitle:r})})}function Ke(){const{handleStoryError:t,handleStorySubmit:e,submission:n}=j({applyStoryAction:ke});return i.jsx(I,{output:i.jsx(U,{idleMessage:"Submit the form to see the action response.",snapshot:n}),children:i.jsx(R,{actionDefinition:Ne,onError:t,onSubmit:e,showFormTitle:!0})})}const kt={title:"Components/ActionForm/Features",component:He,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},b={play:async({canvasElement:t})=>{y.mockClear();const e=u(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Ada Lovelace"),await s.click(o),await d(()=>a(y).toHaveBeenCalled()),await a(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await a(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Fills in the required field and submits, showing the success state and the serialized action response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>`}}}},S={args:{onSubmit:je},play:async({canvasElement:t})=>{N.mockClear(),W.mockClear();const e=u(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Margaret Hamilton"),await s.click(o),await d(()=>a(W).toHaveBeenCalled()),await d(()=>a(N).toHaveBeenCalled()),await a(await e.findByText("Submit failed.")).toBeInTheDocument(),await a(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},w={play:async({canvasElement:t})=>{y.mockClear();const e=u(t);await e.findByRole("textbox",{name:/^fullName/u});const n=await e.findByRole("button",{name:/submit/iu});await s.click(n),await a(await e.findByRole("alert")).toBeInTheDocument(),await a(y).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."},source:{code:`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>`}}}},F={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=u(t);await a(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>`}}}},v={args:{onSubmit:We},play:async({canvasElement:t})=>{O.mockClear();const e=u(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Katherine Johnson"),await s.click(o),await d(()=>a(O).toHaveBeenCalled()),await a(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},T={name:"Custom Submit Wrapper",args:{onSubmit:Oe},play:async({canvasElement:t})=>{k.mockClear();const e=u(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Grace Hopper"),await s.click(o),await d(()=>a(k).toHaveBeenCalledWith(a.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},g={args:{showFormTitle:!0},parameters:{docs:{description:{story:"Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},C={args:{formTitle:"Update employee profile",showFormTitle:!0},parameters:{docs:{description:{story:"Overrides the title text with formTitle. showFormTitle must also be true for the title to render."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>`}}}},A={args:{formFieldDefinitions:Ie},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},x={args:{formFieldDefinitions:Ue},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},E={render:()=>i.jsx(Ke,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},D={render:()=>i.jsx(Le,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Le(){const[t,e]=m.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:n,handleStorySubmit:o,submission:r}=j({applyStoryAction:P});return i.jsx(I,{output:i.jsx(U,{idleMessage:"Submit the form to see the action response.",snapshot:r}),children:i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"osdkFormStorySpacing",children:[i.jsx("strong",{children:"Current form state (JSON):"}),i.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),i.jsx(R,{actionDefinition:Ae,formState:t,onError:n,onFormStateChange:e,onSubmit:o})]})})}const Ve=De.actionDefinition;function _e(){const[t,e]=m.useState({status:"idle"}),n=m.useCallback(r=>{e({status:"success",submittedValues:{},response:r}),y(r)},[]),o=m.useCallback(r=>{e(h=>({...h,status:"error",error:r})),N(r)},[]);return i.jsx(I,{output:i.jsx(U,{idleMessage:"Submit the form to see the validation response.",snapshot:t}),children:i.jsx(R,{actionDefinition:Ve,onError:o,onSuccess:n,showFormTitle:!0})})}const B={render:()=>i.jsx(_e,{}),play:async({canvasElement:t})=>{const e=u(t),n=await e.findByRole("textbox",{name:/^fullName/u}),o=await e.findByRole("button",{name:/submit/iu});await s.type(n,"Ada Lovelace"),await s.click(o),await d(()=>a(e.getByText("2 issues")).toBeInTheDocument())},parameters:{docs:{description:{story:"Demonstrates server-side submission criteria validation. The action's validate endpoint returns INVALID submission criteria, which appear in the footer error indicator without applying the action."},source:{code:`// When the action has submission criteria configured in Foundry,
// ActionForm validates before applying. Failed criteria appear in the
// footer error indicator alongside any field-level errors.
<ActionForm
  actionDefinition={submissionCriteriaStoryAction}
  onError={(error) => console.log("Error", error)}
  onSuccess={(result) => console.log("Applied", result)}
/>`}}}};var K,L,V;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(L=b.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,M,q;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(M=S.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var G,X,Y;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var z,J,Q;F.parameters={...F.parameters,docs:{...(z=F.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=F.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ae,re;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,ue,pe;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,ye,fe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,be,Se;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(be=E.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var we,Fe,ve;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ve=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var Te,ge,Ce;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
  onError={(error) => console.log("Error", error)}
  onSuccess={(result) => console.log("Applied", result)}
/>\`
      }
    }
  }
}`,...(Ce=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const Ot=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState","SubmissionCriteriaFailure"];export{D as ControlledFormState,T as CustomSubmitHandler,v as SlowCustomSubmit,B as SubmissionCriteriaFailure,F as SubmitDisabled,S as SubmitFailure,b as SubmitSuccess,w as ValidationErrors,C as WithCustomTitle,A as WithDefaultValues,x as WithFieldOverrides,g as WithTitle,E as WithUnsupportedFields,Ot as __namedExportsOrder,kt as default};
