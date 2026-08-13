import{j as n,u as Ie,r as B,g as Ue,a as ke}from"./iframe-CQFnHxTO.js";import{F as W,S as H}from"./SubmissionOutputPanel-DDhemUeA.js";import{A as R}from"./action-form-CNQKsdC5.js";import"./preload-helper-rK1dY1Ui.js";import"./DropdownField-BmQfSDBK.js";import"./toNumber-jxE6Z19Y.js";import"./useOsdkClient-Byc0C7aB.js";import"./index-D-SWpkps.js";import"./ActionButton-CiKP957w.js";import"./Button-Vd6i0l0Q.js";import"./useBaseUiId-DhEYJ7Lv.js";import"./Input-DVjUYO6G.js";import"./useControlled-DQq657mZ.js";import"./index-BwQs_oNu.js";import"./index-B7EcVcO3.js";import"./chevron-right-CjQseNaT.js";import"./svgIconContainer-DGlcHToS.js";import"./PopoverPopup-Bxfhqbd6.js";import"./InternalBackdrop-Wme1Pd-g.js";import"./composite-DDTIjh9a.js";import"./index-CmG1YU-z.js";import"./getDisabledMountTransitionStyles-BeozZc0x.js";import"./ToolbarRootContext-DJ0l6Br3.js";import"./tick-C-hv7xxG.js";import"./isObject-D9rv0iqM.js";import"./search-DLWP4Sau.js";import"./cross-BwcQfy8o.js";import"./useValueChanged-BOD5Ipb1.js";import"./getPseudoElementBounds-CcNhJNm5.js";import"./CompositeItem-B9-jPotu.js";import"./makeExternalStore-DkFvLNvv.js";import"./BaseForm-CasNn2Nj.js";import"./SkeletonBar-BDQSdXSb.js";import"./Tooltip-B4JCaEcf.js";import"./info-sign-bNDEfGVZ.js";import"./chevron-up-Dt0Og856.js";import"./chevron-down-CXwEWINw.js";import"./useEventCallback-BM2PZBH6.js";import"./Switch-C_4PQsuT.js";import"./iconLoader-CvStjbzY.js";import"./CompositeRoot-CEFgIT1q.js";import"./CollapsiblePanel-ByD8C8BM.js";import"./error-qjyqUuKF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BzKJ-zlS.js";const{expect:i,fn:y,userEvent:l,waitFor:u,within:c}=__STORYBOOK_MODULE_TEST__,Ee=Ie.actionDefinition,je=Ue.actionDefinition,Oe=ke.actionDefinition,We=1500,He=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Be=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],d=y().mockName("onSuccess"),U=y().mockName("onError"),k=y().mockName("onSubmit"),j=y().mockName("onSubmit:slow"),O=y().mockName("onSubmit:failure");function Ke(t){d(t)}function P(t,e){return e(t)}function _e(t,e){return e(t)}function Le(t,e){return e(t)}const Ve=(t,e)=>(k(t),P(t,e)),Re=async(t,e)=>(j(t),await Pe(We),P(t,e)),Me=async t=>{throw O(t),await Pe(300),new Error("Demo submission failed")};function Pe(t){return new Promise(e=>setTimeout(e,t))}function I({applyStoryAction:t,onSubmit:e}){const[o,a]=B.useState({status:"idle"}),p=B.useCallback(async(r,m)=>{a({status:"submitting",submittedValues:r});try{let s;if(e==null){const f=await t(r,m);Ke(f),s=f}else s=await e(r,m);return a({status:"success",submittedValues:r,response:s}),s}catch(s){throw a({status:"error",submittedValues:r,error:s}),s}},[t,e]);return{handleStoryError:B.useCallback(r=>{a(m=>({...m,status:"error",error:r})),U(r)},[]),handleStorySubmit:p,submission:o}}function qe({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:o,onSubmit:a,showFormTitle:p,submitButtonText:K,submittingText:r}){const{handleStoryError:m,handleStorySubmit:s,submission:f}=I({applyStoryAction:P,onSubmit:a});return n.jsx(W,{output:n.jsx(H,{idleMessage:"Submit the form to see the action response.",snapshot:f}),children:n.jsx(R,{actionDefinition:Ee,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:o,onError:m,onSubmit:s,showFormTitle:p,submitButtonText:K,submittingText:r})})}function Ge(){const{handleStoryError:t,handleStorySubmit:e}=I({applyStoryAction:_e});return n.jsx("div",{className:"osdkFormCard",style:{marginInline:"auto"},children:n.jsx(R,{actionDefinition:je,onError:t,onSubmit:e,showFormTitle:!0})})}function Ye(){const{handleStoryError:t,handleStorySubmit:e,submission:o}=I({applyStoryAction:Le});return n.jsx(W,{output:n.jsx(H,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(R,{actionDefinition:Oe,onError:t,onSubmit:e,showFormTitle:!0})})}const Kt={title:"Components/ActionForm/Usage",component:qe,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},submitButtonText:{control:"text",description:"Text displayed on the submit button."},submittingText:{control:"text",description:"Text displayed while the form is submitting."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},b={render:()=>n.jsx(Ge,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
/>`}}}},h={play:async({canvasElement:t})=>{d.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await l.type(o,"Ada Lovelace"),await l.click(a),await u(()=>i(d).toHaveBeenCalled()),await i(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await i(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()}},S={args:{onSubmit:Me},play:async({canvasElement:t})=>{U.mockClear(),O.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await l.type(o,"Margaret Hamilton"),await l.click(a),await u(()=>i(O).toHaveBeenCalled()),await u(()=>i(U).toHaveBeenCalled()),await i(await e.findByText("Submit failed.")).toBeInTheDocument(),await i(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},w={play:async({canvasElement:t})=>{d.mockClear();const e=c(t);await e.findByRole("textbox",{name:/^fullName/u});const o=await e.findByRole("button",{name:/submit/iu});await l.click(o),await i(await e.findByRole("alert")).toBeInTheDocument(),await i(d).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},T={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=c(t);await i(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()}},F={args:{onSubmit:Re},play:async({canvasElement:t})=>{j.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await l.type(o,"Katherine Johnson"),await l.click(a),await u(()=>i(j).toHaveBeenCalled()),await i(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},g={name:"Custom Submit Wrapper",args:{onSubmit:Ve},play:async({canvasElement:t})=>{k.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await l.type(o,"Grace Hopper"),await l.click(a),await u(()=>i(k).toHaveBeenCalledWith(i.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},v={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},x={args:{formTitle:"Update employee profile",showFormTitle:!0}},C={args:{formFieldDefinitions:He},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},A={args:{formFieldDefinitions:Be,onSubmit:Re,submitButtonText:"Save employee",submittingText:"Saving employee…"},parameters:{docs:{description:{story:"Shows custom submit and pending button copy."}}}},D={render:()=>n.jsx(Ye,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},E={render:()=>n.jsx(Xe,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Xe(){const[t,e]=B.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:a,submission:p}=I({applyStoryAction:P});return n.jsx(W,{output:n.jsx(H,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),n.jsx(R,{actionDefinition:Ee,formState:t,onError:o,onFormStateChange:e,onSubmit:a})]})})}var _,L,V;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(L=b.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var M,q,G;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(q=h.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var Y,X,J;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(X=S.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var z,Q,Z;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,te;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,re,se;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(re=g.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,me,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,de;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ye,fe,be;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Te,Fe,ge;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    formFieldDefinitions: actionFormOverrideFields,
    onSubmit: handleSlowSubmit,
    submitButtonText: "Save employee",
    submittingText: "Saving employee…"
  },
  parameters: {
    docs: {
      description: {
        story: "Shows custom submit and pending button copy."
      }
    }
  }
}`,...(ge=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:ge.source}}};var ve,xe,Ce;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ce=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ne,Ae,De;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(De=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};const _t=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithLabels","WithUnsupportedFields","ControlledFormState"];export{E as ControlledFormState,g as CustomSubmitHandler,b as Default,F as SlowCustomSubmit,T as SubmitDisabled,S as SubmitFailure,h as SubmitSuccess,w as ValidationErrors,x as WithCustomTitle,C as WithDefaultValues,N as WithFieldOverrides,A as WithLabels,v as WithTitle,D as WithUnsupportedFields,_t as __namedExportsOrder,Kt as default};
