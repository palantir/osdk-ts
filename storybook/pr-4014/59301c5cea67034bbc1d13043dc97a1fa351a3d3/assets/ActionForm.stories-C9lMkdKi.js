import{j as t,g as n}from"./iframe-B5xJqKl6.js";import{A as r}from"./action-form-BF0rDUKv.js";import"./preload-helper-Ne8FQQgc.js";import"./DropdownField-B-xEEli2.js";import"./debounce-DnGe1WPS.js";import"./useOsdkClient-tqT3GVR2.js";import"./index-CCjfPqEl.js";import"./Input-WDAACwdq.js";import"./useBaseUiId-Cotk4UXc.js";import"./useControlled-Cyv6PlBx.js";import"./index-D_ZLDl4o.js";import"./index-CGviHfV1.js";import"./PopoverPopup-D9OmGnX9.js";import"./InternalBackdrop-Dli4x5Y-.js";import"./composite-BjyS4v5o.js";import"./index-B9wtWaws.js";import"./getDisabledMountTransitionStyles-C7T2cCRj.js";import"./ToolbarRootContext-C6Gq0LMZ.js";import"./tick-CRsinXX8.js";import"./svgIconContainer-B69lMk25.js";import"./small-cross-c3hXIKIB.js";import"./search-DaqXKDSx.js";import"./cross-C5VNjLCx.js";import"./useValueChanged-CF6aBjQN.js";import"./getPseudoElementBounds-Ba9IoLmx.js";import"./CompositeItem-CLpB1ycb.js";import"./makeExternalStore-DLfdYAzs.js";import"./BaseForm-CApvrVoW.js";import"./ActionButton-g8wW2xvY.js";import"./Button-qyC1OAbF.js";import"./SkeletonBar-DS-T5Kqb.js";import"./Tooltip-CDTxO2q6.js";import"./info-sign-BvJgIKf8.js";import"./chevron-up-ChndvNYI.js";import"./chevron-down-Dbn0Vtw3.js";import"./useEventCallback-B6wls_4_.js";import"./iconLoader-DfvzJ5Cy.js";import"./CompositeRoot-seDd-uhE.js";import"./Switch-D3HJJcN3.js";import"./TimePicker-CvVY5wr8.js";import"./CollapsiblePanel-DsqAKcOa.js";import"./error-DFd4_H53.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DKzJkasc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
