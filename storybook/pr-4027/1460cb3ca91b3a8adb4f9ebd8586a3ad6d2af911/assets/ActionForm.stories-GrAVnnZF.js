import{j as t,g as n}from"./iframe-CFQ9G3uO.js";import{A as r}from"./action-form-BdA4qhaV.js";import"./preload-helper-B1ZvWZ1B.js";import"./DropdownField-DOW2Yrq8.js";import"./debounce-CjSFYMGi.js";import"./useOsdkClient-B973Ur3i.js";import"./index-BrTT1QYM.js";import"./Input-DXZODgk0.js";import"./useBaseUiId-DR9MpHDU.js";import"./useControlled-CZXT8yrt.js";import"./index-ByJ4X6uH.js";import"./index-B2hmf6ar.js";import"./PopoverPopup-D2AzS4JP.js";import"./InternalBackdrop-BYUzzxg5.js";import"./composite-CcP6OIrf.js";import"./index-Dlk-dVgZ.js";import"./getDisabledMountTransitionStyles-VkjRSqjD.js";import"./ToolbarRootContext-DzjMBLGA.js";import"./tick-C6f5jokZ.js";import"./svgIconContainer-UNIpHB70.js";import"./small-cross-BEf2AWPD.js";import"./search-2qv0O4T5.js";import"./cross-Th924Xj2.js";import"./useValueChanged-BKOHDyr1.js";import"./getPseudoElementBounds-C-ZD0-Sf.js";import"./CompositeItem-Dm-ge3S4.js";import"./makeExternalStore-Dcan_kEv.js";import"./BaseForm-CoyZp_JH.js";import"./ActionButton-DNlorvJl.js";import"./Button-CE7esyC3.js";import"./SkeletonBar-BZja4E16.js";import"./Tooltip-Chj9n8Fk.js";import"./info-sign-BaP1hQtl.js";import"./chevron-up-BNt754fO.js";import"./chevron-down-Cu6k6Z5N.js";import"./useEventCallback-D2dYS9c-.js";import"./iconLoader-D_iDWvKL.js";import"./CompositeRoot-DYLe3Mef.js";import"./Switch-C7qHm9_2.js";import"./TimePicker-DUtS2AKG.js";import"./CollapsiblePanel-C0s5Hv5w.js";import"./error-CP69BMiN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BOULM9w0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
