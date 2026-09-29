import{j as t,g as n}from"./iframe-l_8eBvr6.js";import{A as r}from"./action-form-DyZsylRg.js";import"./preload-helper-CWo-haOY.js";import"./DropdownField-BsI2YIfo.js";import"./debounce-DGMy8DlN.js";import"./useOsdkClient-k3QwwWy-.js";import"./index-pTEOeQs1.js";import"./Input-b3HEdj9w.js";import"./useBaseUiId-GR3xcgzw.js";import"./useControlled-_ZKeS4Zg.js";import"./index-rFITWboZ.js";import"./index-CsnFWtbo.js";import"./PopoverPopup-D63UO-5k.js";import"./InternalBackdrop-BwRQmd5J.js";import"./composite-DKO9W0st.js";import"./index-BbfTT1Q9.js";import"./getDisabledMountTransitionStyles-Bv0Oi4hK.js";import"./ToolbarRootContext-D8m03rR2.js";import"./tick-BfV32k5E.js";import"./svgIconContainer-BE3MMvAi.js";import"./small-cross-eWReh8kV.js";import"./search-53j1pAYR.js";import"./cross-AIldtqcf.js";import"./useValueChanged-Dh9MsvOa.js";import"./getPseudoElementBounds-C0cGWyvs.js";import"./CompositeItem-DVcnG8tP.js";import"./makeExternalStore-DEwbFKap.js";import"./BaseForm-D5z2Sete.js";import"./ActionButton-DyHiHAz9.js";import"./Button-D_UBsIlq.js";import"./SkeletonBar-CDf6uP_r.js";import"./Tooltip-CyHw9hKc.js";import"./info-sign-BG9giwTA.js";import"./chevron-up-CtU8XA-H.js";import"./chevron-down-Dr_zm-jW.js";import"./useEventCallback-DAeskcdy.js";import"./iconLoader-D8V222bq.js";import"./Switch-DnfvfPpU.js";import"./CompositeRoot-C3hNuKPf.js";import"./TimePicker-C2qKlLU9.js";import"./CollapsiblePanel-YVCjpYyB.js";import"./error-BjQYuyH5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C36UZcw9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
