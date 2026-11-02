import{j as t,g as n}from"./iframe-BOL4lmQu.js";import{A as r}from"./action-form-Duc_AdcT.js";import"./preload-helper-CF5y6P51.js";import"./DropdownField-B0yO1meX.js";import"./debounce-C7TgZToh.js";import"./useOsdkClient-CMRz05mU.js";import"./index-BlfYN_kO.js";import"./Input-CujqDLfg.js";import"./useBaseUiId-BpGNe3Eg.js";import"./useControlled-1K3KKLgI.js";import"./index-CmApk3zh.js";import"./index-DP_XR25E.js";import"./PopoverPopup-QDwqPc_0.js";import"./InternalBackdrop-LCz3M4jq.js";import"./composite-BV3ZD4mr.js";import"./index-DBaqiByX.js";import"./getDisabledMountTransitionStyles-CMRhZxrC.js";import"./ToolbarRootContext-DYZSmWFR.js";import"./tick-C5Qp1iIQ.js";import"./svgIconContainer-FVhL1hCA.js";import"./small-cross-B0XRPY8R.js";import"./search-Cv260GLX.js";import"./cross-C9_cN1cS.js";import"./useValueChanged-D-6eFv97.js";import"./getPseudoElementBounds-Td3ZX14H.js";import"./CompositeItem-D7t72lc9.js";import"./makeExternalStore-BaKwuUE-.js";import"./BaseForm-CFDLK909.js";import"./ActionButton-BSJylTXK.js";import"./Button-BQpmuek9.js";import"./SkeletonBar-BNX5gidE.js";import"./Tooltip-ipzaDerj.js";import"./info-sign-CkXUEinN.js";import"./chevron-up-B_PaWScM.js";import"./chevron-down-wPhaZYI3.js";import"./useEventCallback-ifDqPOAF.js";import"./iconLoader-7c6A4nin.js";import"./Switch-BV1J_jc_.js";import"./CompositeRoot-Clj1eK4b.js";import"./TimePicker-CFwRfP20.js";import"./CollapsiblePanel-ClIQPlSc.js";import"./error-DWdKle1J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8Pyw_HQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
