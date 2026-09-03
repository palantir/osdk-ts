import{j as t,g as n}from"./iframe-BZrMvNjH.js";import{A as r}from"./action-form-BL2o_XvO.js";import"./preload-helper-hIhWcbk1.js";import"./DropdownField-CBvpYEAv.js";import"./debounce-DNzZdSc8.js";import"./useOsdkClient-Cc19J1k8.js";import"./index-DS2flFfG.js";import"./Input-nfoLLdye.js";import"./useBaseUiId-CswL1btF.js";import"./useControlled-Bj7UVyPM.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./PopoverPopup-bwa0KoYC.js";import"./InternalBackdrop-CoHxh-ms.js";import"./composite-Bvd7iHGV.js";import"./index-JV3nPluQ.js";import"./getDisabledMountTransitionStyles-DAqLr02q.js";import"./ToolbarRootContext-CSb78eVd.js";import"./tick-DlglnSJ9.js";import"./svgIconContainer-CY0qYkeS.js";import"./small-cross-BHthMG8B.js";import"./search-DxeR06nu.js";import"./cross-iphUExt8.js";import"./useValueChanged-BA_Uq0OY.js";import"./getPseudoElementBounds-BdZebYSH.js";import"./CompositeItem-Dintp2Bw.js";import"./makeExternalStore-DqJxB7HS.js";import"./BaseForm-DnsU161V.js";import"./ActionButton-CKfsqSSC.js";import"./Button-DnumB7pL.js";import"./SkeletonBar-Xz-ijpwF.js";import"./Tooltip-DVr0E3LF.js";import"./info-sign-BnorchMO.js";import"./chevron-up-zNQyrXtG.js";import"./chevron-down-Cbk6ruv5.js";import"./useEventCallback-CAOOmdIa.js";import"./iconLoader-BCRwoz7D.js";import"./CompositeRoot-BpXetu1C.js";import"./Switch-D7jHi2pc.js";import"./TimePicker-DmeE3yMK.js";import"./CollapsiblePanel-CA4hGbc8.js";import"./error-C4YZPalR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9uhYNX4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
