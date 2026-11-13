import{j as n,u as Re,r as c,s as Ie,a as Pe}from"./iframe-DAHj67mi.js";import{A as d}from"./action-form-0IFI2s8z.js";import{F as b,S as h}from"./SubmissionOutputPanel-CUfPp0CP.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-C7UP5udY.js";import"./useEventCallback-B1gHHm4j.js";import"./isEqual-B_3QYyrr.js";import"./_baseIsEqual-1hDRXEi_.js";import"./PopoverPopup-UX8-cCYh.js";import"./InternalBackdrop-BZgwOFWU.js";import"./useBaseUiId-C8n2JbgI.js";import"./composite-BjTY1dgM.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./index-BoBv6Oh5.js";import"./getDisabledMountTransitionStyles-DLcvNa0d.js";import"./ToolbarRootContext-D0N5miEu.js";import"./Select-D2Soavwn.js";import"./useOsdkClient-DSpnlmuA.js";import"./index-jtr0hjnV.js";import"./Input-BqNeXUfN.js";import"./useControlled-wTpIHr1L.js";import"./tick-tJ7_3KbK.js";import"./svgIconContainer-R6fLsDAI.js";import"./small-cross-DGpFJ7WA.js";import"./search-DlMMVas5.js";import"./cross-BvmJ2kUU.js";import"./useValueChanged-K_Rdj1zl.js";import"./getPseudoElementBounds-DVEYMREJ.js";import"./CompositeItem-ylUTChcd.js";import"./DropdownField-FJYu2uWa.js";import"./makeExternalStore-CclpbdPf.js";import"./BaseForm-CRKxyBgA.js";import"./ActionButton-bdH5SZoM.js";import"./Button-D3ukGqLV.js";import"./SkeletonBar-DhFCtk-U.js";import"./Tooltip-DigvRnDG.js";import"./info-sign-CUCn8Xf9.js";import"./chevron-up-DmqXspWv.js";import"./chevron-down-CDzCov52.js";import"./iconLoader-CJ052seW.js";import"./Switch-9BznIMTy.js";import"./CompositeRoot-CqS98yWV.js";import"./TimePicker-BuQtrMIJ.js";import"./CollapsiblePanel-rgTr9UFW.js";import"./error-kGSlj1sb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRVx42Qf.js";const{expect:a,fn:S,userEvent:s,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,H=Re.actionDefinition,Ue=Pe.actionDefinition,ke=1500,Ke=[{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",defaultValue:"Grace Hopper",fieldComponentProps:{}},{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",defaultValue:42,fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"RADIO_BUTTONS",defaultValue:!0,fieldComponentProps:{options:[{label:"True",value:!0},{label:"False",value:!1}]}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",defaultValue:!0,fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],Oe=[{fieldKey:"fullName",label:"Employee legal name",fieldComponent:"TEXT_INPUT",helperText:"Use the name that should appear in HR records.",fieldComponentProps:{placeholder:"Ada Lovelace",minLength:2}},{fieldKey:"yearsExperience",label:"Relevant experience",fieldComponent:"NUMBER_INPUT",helperText:"Whole years only.",fieldComponentProps:{min:0,max:80}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",helperText:"Turn on when the employee is not assigned to an office.",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",helperText:"Choose whether this employee is full-time or a contractor.",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],y=S().mockName("onSuccess"),k=S().mockName("onError"),O=S().mockName("onSubmit"),W=S().mockName("onSubmit:slow"),j=S().mockName("onSubmit:failure");function We(t){y(t)}function w(t,e){return e(t)}function je(t,e){return e(t)}const He=(t,e)=>(O(t),w(t,e)),_e=async(t,e)=>(W(t),await Be(ke),w(t,e)),Le=async t=>{throw j(t),await Be(300),new Error("Demo submission failed")};function Be(t){return new Promise(e=>setTimeout(e,t))}function K({applyStoryAction:t,onSubmit:e}){const[o,i]=c.useState({status:"idle"}),r=c.useCallback(async(l,u)=>{i({status:"submitting",submittedValues:l});try{let m;if(e==null){const _=await t(l,u);We(_),m=_}else m=await e(l,u);return i({status:"success",submittedValues:l,response:m}),m}catch(m){throw i({status:"error",submittedValues:l,error:m}),m}},[t,e]);return{handleStoryError:c.useCallback(l=>{i(u=>({...u,status:"error",error:l})),k(l)},[]),handleStorySubmit:r,submission:o}}function Ve({formFieldDefinitions:t,formTitle:e,isSubmitDisabled:o,onSubmit:i,showFormTitle:r}){const{handleStoryError:F,handleStorySubmit:l,submission:u}=K({applyStoryAction:w,onSubmit:i}),m={actionDefinition:H,formTitle:e,isSubmitDisabled:o,onError:F,onSubmit:l,showFormTitle:r};return n.jsx(b,{output:n.jsx(h,{idleMessage:"Submit the form to see the action response.",snapshot:u}),children:t!=null?n.jsx(d,{...m,formFieldDefinitions:t}):n.jsx(d,{...m})})}function Me(){const{handleStoryError:t,handleStorySubmit:e,submission:o}=K({applyStoryAction:je});return n.jsx(b,{output:n.jsx(h,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(d,{actionDefinition:Ue,onError:t,onSubmit:e,showFormTitle:!0})})}const Mt={title:"Components/ActionForm/Features",component:Ve,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{formFieldDefinitions:{control:!1,description:"Complete replacement for generated fields. Include every action parameter that should appear in the form."},formTitle:{control:"text",description:"Optional title used when showFormTitle is true."},isSubmitDisabled:{control:"boolean",description:"Disables the submit button before validation runs."},onSubmit:{control:!1,table:{category:"Events"}},showFormTitle:{control:"boolean",description:"Shows the form title above the generated fields."}},args:{isSubmitDisabled:!1,showFormTitle:!1}},T={play:async({canvasElement:t})=>{y.mockClear();const e=p(t),o=await e.findByRole("textbox",{name:/^fullName/u}),i=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Ada Lovelace"),await s.click(i),await f(()=>a(y).toHaveBeenCalled()),await a(await e.findByText("Submit succeeded.")).toBeInTheDocument(),await a(await e.findByText(/Ada Lovelace/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Fills in the required field and submits, showing the success state and the serialized action response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSuccess={(response) => console.log("Applied", response)}
/>`}}}},C={args:{onSubmit:Le},play:async({canvasElement:t})=>{k.mockClear(),j.mockClear();const e=p(t),o=await e.findByRole("textbox",{name:/^fullName/u}),i=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Margaret Hamilton"),await s.click(i),await f(()=>a(j).toHaveBeenCalled()),await f(()=>a(k).toHaveBeenCalled()),await a(await e.findByText("Submit failed.")).toBeInTheDocument(),await a(await e.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},v={play:async({canvasElement:t})=>{y.mockClear();const e=p(t);await e.findByRole("textbox",{name:/^fullName/u});const o=await e.findByRole("button",{name:/submit/iu});await s.click(o),await a(await e.findByRole("alert")).toBeInTheDocument(),await a(y).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."},source:{code:`// Required parameters are validated before the action is applied, so no
// extra configuration is needed to get the validation summary.
<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onError={(error) => console.log("Validation blocked submit", error)}
/>`}}}},g={args:{isSubmitDisabled:!0},play:async({canvasElement:t})=>{const e=p(t);await a(await e.findByRole("button",{name:/submit/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Disables the submit button regardless of validation state. Use this while an external precondition, such as a permission check, is unmet."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  isSubmitDisabled={true}
/>`}}}},A={args:{onSubmit:_e},play:async({canvasElement:t})=>{W.mockClear();const e=p(t),o=await e.findByRole("textbox",{name:/^fullName/u}),i=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Katherine Johnson"),await s.click(i),await f(()=>a(W).toHaveBeenCalled()),await a(await e.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},E={name:"Custom Submit Wrapper",args:{onSubmit:He},play:async({canvasElement:t})=>{O.mockClear();const e=p(t),o=await e.findByRole("textbox",{name:/^fullName/u}),i=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Grace Hopper"),await s.click(i),await f(()=>a(O).toHaveBeenCalledWith(a.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},x={args:{showFormTitle:!0},parameters:{docs:{description:{story:"Shows the action's display name above the fields. Use this when the form is not already labelled by its surrounding container."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  showFormTitle={true}
/>`}}}},D={args:{formTitle:"Update employee profile",showFormTitle:!0},parameters:{docs:{description:{story:"Overrides the title text with formTitle. showFormTitle must also be true for the title to render."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formTitle="Update employee profile"
  showFormTitle={true}
/>`}}}},N={args:{formFieldDefinitions:Ke},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},B={args:{formFieldDefinitions:Oe},parameters:{docs:{source:{code:`const fields = [
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
/>`}}}},R={render:()=>n.jsx(Me,{}),parameters:{docs:{source:{code:`// This story uses an action with parameter types that ActionForm does
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
/>`}}}},I={render:()=>n.jsx(Xe,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}},P={render:()=>n.jsx(Ge,{}),parameters:{docs:{description:{story:"Groups related fields into collapsible sections using `formContentDefinitions`. Standalone fields and sections can be interleaved freely."},source:{code:`import type { ActionFormContentItem } from "@osdk/react-components/action-form";

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
/>`}}}},qe=[{type:"field",definition:{fieldKey:"fullName",label:"Full name",fieldComponent:"TEXT_INPUT",fieldComponentProps:{}}},{type:"section",key:"employment",definition:{title:"Employment details",description:"Information about the employee's role and schedule.",fields:[{fieldKey:"yearsExperience",label:"Years of experience",fieldComponent:"NUMBER_INPUT",fieldComponentProps:{min:0}},{fieldKey:"isRemote",label:"Remote employee",fieldComponent:"SWITCH",fieldComponentProps:{}},{fieldKey:"isFullTime",label:"Employment type",fieldComponent:"DROPDOWN",fieldComponentProps:{items:[!0,!1],itemToStringLabel:t=>t===!0?"Full-time":"Contractor",placeholder:"Select employment type"}}],columnCount:1}}];function Ge(){const{handleStoryError:t,handleStorySubmit:e,submission:o}=K({applyStoryAction:w});return n.jsx(b,{output:n.jsx(h,{idleMessage:"Submit the form to see the action response.",snapshot:o}),children:n.jsx(d,{actionDefinition:H,formContentDefinitions:qe,onError:t,onSubmit:e,showFormTitle:!0})})}function Xe(){const[t,e]=c.useState({fullName:"Ada Lovelace",yearsExperience:5,isRemote:!0,isFullTime:!0}),{handleStoryError:o,handleStorySubmit:i,submission:r}=K({applyStoryAction:w});return n.jsx(b,{output:n.jsx(h,{idleMessage:"Submit the form to see the action response.",snapshot:r}),children:n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"osdkFormStorySpacing",children:[n.jsx("strong",{children:"Current form state (JSON):"}),n.jsx("pre",{className:"osdkCodeOutput",children:JSON.stringify(t,null,2)})]}),n.jsx(d,{actionDefinition:H,formState:t,onError:o,onFormStateChange:e,onSubmit:i})]})})}const Ye=Ie.actionDefinition;function ze(){const[t,e]=c.useState({status:"idle"}),o=c.useCallback(r=>{e({status:"success",submittedValues:{},response:r}),y(r)},[]),i=c.useCallback(r=>{e(F=>({...F,status:"error",error:r})),k(r)},[]);return n.jsx(b,{output:n.jsx(h,{idleMessage:"Submit the form to see the validation response.",snapshot:t}),children:n.jsx(d,{actionDefinition:Ye,onError:i,onSuccess:o,showFormTitle:!0})})}const U={render:()=>n.jsx(ze,{}),play:async({canvasElement:t})=>{const e=p(t),o=await e.findByRole("textbox",{name:/^fullName/u}),i=await e.findByRole("button",{name:/submit/iu});await s.type(o,"Ada Lovelace"),await s.click(i),await f(()=>a(e.getByText("2 issues")).toBeInTheDocument())},parameters:{docs:{description:{story:"Demonstrates server-side submission criteria validation. The action's validate endpoint returns INVALID submission criteria, which appear in the footer error indicator without applying the action."},source:{code:`// When the action has submission criteria configured in Foundry,
// ActionForm validates before applying. Failed criteria appear in the
// footer error indicator alongside any field-level errors.
<ActionForm
  actionDefinition={submissionCriteriaStoryAction}
  onError={(error) => console.log("Error", error)}
  onSuccess={(result) => console.log("Applied", result)}
/>`}}}};var L,V,M;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(V=T.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var q,G,X;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(X=(G=C.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,z,J;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(z=v.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,Z,$;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ie,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var re,se,le;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(se=x.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var me,ce,pe;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,de,fe;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(de=N.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var ye,be,he;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(be=B.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var Se,we,Fe;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(we=R.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Te,Ce,ve;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ve=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var ge,Ae,Ee;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Ee=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var xe,De,Ne;U.parameters={...U.parameters,docs:{...(xe=U.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ne=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};const qt=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","WithTitle","WithCustomTitle","WithDefaultValues","WithFieldOverrides","WithUnsupportedFields","ControlledFormState","WithSections","SubmissionCriteriaFailure"];export{I as ControlledFormState,E as CustomSubmitHandler,A as SlowCustomSubmit,U as SubmissionCriteriaFailure,g as SubmitDisabled,C as SubmitFailure,T as SubmitSuccess,v as ValidationErrors,D as WithCustomTitle,N as WithDefaultValues,B as WithFieldOverrides,P as WithSections,x as WithTitle,R as WithUnsupportedFields,qt as __namedExportsOrder,Mt as default};
