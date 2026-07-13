import{j as n,u as Ne,r as D,g as De,a as Ee}from"./iframe-QZGqQqFJ.js";import{F as E,S as B}from"./SubmissionOutputPanel-CDncbIo1.js";import{A as R}from"./action-form-D_EwxATO.js";import"./preload-helper-DZTf9Ont.js";import"./DropdownField-DslxhPjC.js";import"./toNumber-B3QUmuzX.js";import"./useOsdkClient-BvDWRE6n.js";import"./index-Dx6gu5iB.js";import"./Input-7teiks9U.js";import"./useBaseUiId-CVTOqwoy.js";import"./useControlled-67o-dGk_.js";import"./index-QC2cTZfA.js";import"./index-C4ionURF.js";import"./PopoverPopup-xAw6P7bF.js";import"./InternalBackdrop-CrRcoSZQ.js";import"./composite-9KmCGXzC.js";import"./index-BqvZ2dcL.js";import"./getDisabledMountTransitionStyles-BKf0PBHu.js";import"./ToolbarRootContext-BmU1NWlK.js";import"./tick-9LRhaaPy.js";import"./svgIconContainer-Br9kWo4N.js";import"./small-cross-COAKMV-L.js";import"./search-Dng-PszH.js";import"./cross-BWVUmifp.js";import"./useValueChanged-LGkD9Iss.js";import"./getPseudoElementBounds-Bt3QKxin.js";import"./CompositeItem-BOrf-lKd.js";import"./makeExternalStore-DLOCRsN_.js";import"./BaseForm-pWeTWW2i.js";import"./ActionButton-DaZ9Y-aa.js";import"./Button-BCIOuPdP.js";import"./SkeletonBar-DnAPil0M.js";import"./Tooltip-TqZ3nheA.js";import"./info-sign-BGmLmRK8.js";import"./chevron-up-DtPiN81n.js";import"./chevron-down-bVzoGnRr.js";import"./useEventCallback-DlT5WW6s.js";import"./Switch-CVaVdqWI.js";import"./iconLoader-BBpNGsGX.js";import"./CompositeRoot-Cdyq6_1C.js";import"./TimePicker-CHGKa1aG.js";import"./CollapsiblePanel-Dk-fWydH.js";import"./error--gw7SX2V.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBV_3f5Y.js";const{expect:i,fn:y,userEvent:s,waitFor:u,within:c}=__STORYBOOK_MODULE_TEST__,xe=Ne.actionDefinition,Be=De.actionDefinition,Re=Ee.actionDefinition,Pe=1500,Ie=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Ue=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],d=y().mockName("onSuccess"),U=y().mockName("onError"),k=y().mockName("onSubmit"),j=y().mockName("onSubmit:slow"),O=y().mockName("onSubmit:failure");function ke(t){d(t)}function P(t,e){return e(t)}function je(t,e){return e(t)}function Oe(t,e){return e(t)}const He=(t,e)=>(k(t),P(t,e)),Ke=async(t,e)=>(j(t),await Ae(Pe),P(t,e)),We=async t=>{throw O(t),await Ae(300),new Error("Demo submission failed")};function Ae(t){return new Promise(e=>setTimeout(e,t))}function I({applyStoryAction:t,onSubmit:e}){const[o,a]=D.useState({status:"idle"}),p=D.useCallback(async(r,m)=>{a({status:"submitting",submittedValues:r});try{let l;if(e==null){const K=await t(r,m);ke(K),l=K}else l=await e(r,m);return a({status:"success",submittedValues:r,response:l}),l}catch(l){throw a({status:"error",submittedValues:r,error:l}),l}},[t,e]);return{handleStoryError:D.useCallback(r=>{a(m=>({...m,status:"error",error:r})),U(r)},[]),handleStorySubmit:p,submission:o}}function _e({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:o,onSubmit:a,showFormTitle:p}){const{handleStoryError:H,handleStorySubmit:r,submission:m}=I({applyStoryAction:P,onSubmit:a});return n.jsx(E,{output:n.jsx(B,{idleMessage:"Submit the form to see the action response.",snapshot:m}),children:n.jsx(R,{actionDefinition:xe,formFieldDefinitions:t,formTitle:e,isSubmitDisabled:o,onError:H,onSubmit:r,showFormTitle:p})})}function Le(){const{handleStoryError:t,handleStorySubmit:e,submission:o}=I({applyStoryAction:je});return n.jsx(E,{output:n.jsx(B,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(R,{actionDefinition:Be,onError:t,onSubmit:e,showFormTitle:!0})})}function Ve(){const{handleStoryError:t,handleStorySubmit:e,submission:o}=I({applyStoryAction:Oe});return n.jsx(E,{output:n.jsx(B,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(R,{actionDefinition:Re,onError:t,onSubmit:e,showFormTitle:!0})})}const jt={title:"Components/ActionForm/Usage",component:_e,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},f={render:()=>n.jsx(Le,{}),parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
/>`}}}},h={play:async({canvasElement:t})=>{d.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Ada Lovelace"),await s.click(a),await u(()=>i(d).toHaveBeenCalled()),await i(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await i(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()}},b={args:{onSubmit:We},play:async({canvasElement:t})=>{U.mockClear(),O.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Margaret Hamilton"),await s.click(a),await u(()=>i(O).toHaveBeenCalled()),await u(()=>i(U).toHaveBeenCalled()),await i(await e.findByText("Submit failed.")).toBeInTheDocument(),await i(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},S={play:async({canvasElement:t})=>{d.mockClear();const e=c(t);await e.findByRole("textbox",{name:/^fullName/u});const o=await e.findByRole("button",{name:/submit/iu});await s.click(o),await i(await e.findByRole("alert")).toBeInTheDocument(),await i(d).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},w={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=c(t);await i(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()}},F={args:{onSubmit:Ke},play:async({canvasElement:t})=>{j.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Katherine Johnson"),await s.click(a),await u(()=>i(j).toHaveBeenCalled()),await i(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},T={name:"Custom Submit Wrapper",args:{onSubmit:He},play:async({canvasElement:t})=>{k.mockClear();const e=c(t),o=await e.findByRole("textbox",{name:/^fullName/u}),a=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Grace Hopper"),await s.click(a),await u(()=>i(k).toHaveBeenCalledWith(i.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},v={args:{showFormTitle:!0},parameters:{docs:{source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},g={args:{formTitle:"Update employee profile",showFormTitle:!0}},C={args:{formFieldDefinitions:Ie},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},A={render:()=>n.jsx(Ve,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},N={render:()=>n.jsx(Me,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};function Me(){const[t,e]=D.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:a,submission:p}=I({applyStoryAction:P});return n.jsx(E,{output:n.jsx(B,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),n.jsx(R,{actionDefinition:xe,formState:t,onError:o,onFormStateChange:e,onSubmit:a})]})})}var W,_,L;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(_=f.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var V,M,q;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(M=h.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var G,Y,X;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,z,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var Z,$,ee;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=w.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,ie,re;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,le,me;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(me=(le=v.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ce,pe,ue;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    formTitle: "Update employee profile",
    showFormTitle: true
  }
}`,...(ue=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,ye,fe;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var he,be,Se;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Se=(be=x.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var we,Fe,Te;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var ve,ge,Ce;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ce=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const Ot=["Default","SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState"];export{N as ControlledFormState,T as CustomSubmitHandler,f as Default,F as SlowCustomSubmit,w as SubmitDisabled,b as SubmitFailure,h as SubmitSuccess,S as ValidationErrors,g as WithCustomTitle,C as WithDefaultValues,x as WithFieldOverrides,v as WithTitle,A as WithUnsupportedFields,Ot as __namedExportsOrder,jt as default};
