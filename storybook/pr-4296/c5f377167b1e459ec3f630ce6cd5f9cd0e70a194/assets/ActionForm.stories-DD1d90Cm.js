import{j as t,g as n}from"./iframe-X83lPBeu.js";import{A as r}from"./action-form-BHesqsA6.js";import"./preload-helper-B2sKPI8B.js";import"./DropdownField-D0HzhIcj.js";import"./debounce-CJcmUv4x.js";import"./useOsdkClient-CMlwPsT9.js";import"./index-BQDctdoe.js";import"./Input-C5377Qeu.js";import"./useBaseUiId-CXpBK7Xe.js";import"./useControlled-CRW8vka0.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./PopoverPopup-G2s0F852.js";import"./InternalBackdrop-CPq4-grn.js";import"./composite-C3KQbPWK.js";import"./index-DJhqSZmI.js";import"./getDisabledMountTransitionStyles-DAbmYawC.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./tick-ClK8H8tK.js";import"./svgIconContainer-CrLLWaC0.js";import"./small-cross-BGOiG0gJ.js";import"./search-CGhIjKAK.js";import"./cross-DESSfx8f.js";import"./useValueChanged-CpfWf914.js";import"./getPseudoElementBounds-Mr0Voovu.js";import"./CompositeItem-DmkSf1ho.js";import"./makeExternalStore-D0mNPEg-.js";import"./BaseForm-mlOTlaKz.js";import"./ActionButton-CA6MrVcg.js";import"./Button-C6LVoI3t.js";import"./SkeletonBar-C-PQinYo.js";import"./Tooltip-BTG2SIH8.js";import"./info-sign-Bv7hWEiL.js";import"./chevron-up-B0W0A1fi.js";import"./chevron-down-C6VkVqqF.js";import"./useEventCallback-BzkW8p-_.js";import"./iconLoader-CSYDfW-E.js";import"./Switch-ByxA-cv7.js";import"./CompositeRoot-Bsa-yt3y.js";import"./TimePicker-6vYU_2Xl.js";import"./CollapsiblePanel-CrXH_pxU.js";import"./error-gzJnjayk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWVSjT_8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
