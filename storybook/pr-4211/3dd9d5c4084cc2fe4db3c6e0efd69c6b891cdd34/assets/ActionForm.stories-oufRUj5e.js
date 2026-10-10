import{j as t,g as n}from"./iframe-5u9ZtrJt.js";import{A as r}from"./action-form-CdaKgzE1.js";import"./preload-helper-CuQanuSU.js";import"./DropdownField-DBfFz7s7.js";import"./debounce-C_5CcOwA.js";import"./useOsdkClient-PPOhTHxO.js";import"./index-DavgBEP1.js";import"./Input-D8eW-et_.js";import"./useBaseUiId-CQYNNsxK.js";import"./useControlled-B5brBFEZ.js";import"./index-DMFEApmF.js";import"./index-C7XPHJ8o.js";import"./PopoverPopup-DeaoiWel.js";import"./InternalBackdrop-B3-fNuIA.js";import"./composite-CGw-Ihls.js";import"./index-CtwWL3Ux.js";import"./getDisabledMountTransitionStyles-v5M4alGV.js";import"./ToolbarRootContext-BdaDw2wr.js";import"./tick-CScWJoZM.js";import"./svgIconContainer-jQAOa3hY.js";import"./small-cross-AuWZbj58.js";import"./search-JNpB3WRd.js";import"./cross-BpzwhQi5.js";import"./useValueChanged-BuQNO87J.js";import"./getPseudoElementBounds-vB1bflfw.js";import"./CompositeItem-DF5M0Q62.js";import"./makeExternalStore-DT_DHHwN.js";import"./BaseForm-BPq0cKFF.js";import"./ActionButton-2ZAcI0x_.js";import"./Button-ChR8k8XV.js";import"./SkeletonBar-Kv76IGDP.js";import"./Tooltip-CTZfgpQD.js";import"./info-sign-Bgyuzkae.js";import"./chevron-up-erQLLJga.js";import"./chevron-down-B3Fv0w50.js";import"./useEventCallback-CX8B3d2_.js";import"./iconLoader-CCNw6lo8.js";import"./Switch-DypSU2Jp.js";import"./CompositeRoot-CktCCUBO.js";import"./TimePicker-BNUSZT2r.js";import"./CollapsiblePanel-D47Xkn4l.js";import"./error-CQ8cV0Cv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-evZV6vNo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
