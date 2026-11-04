import{j as t,g as n}from"./iframe-BbZZXiGk.js";import{A as r}from"./action-form-Dmh0Yu7e.js";import"./preload-helper-CeJCQ8zy.js";import"./DropdownField-v3cEN56r.js";import"./debounce-CjaLM3Rn.js";import"./useOsdkClient-BfVtNRTC.js";import"./index-CZbf2fy9.js";import"./Input-Dg2k6Vdc.js";import"./useBaseUiId-DJIunILb.js";import"./useControlled-DQq0royT.js";import"./index-D53mexCV.js";import"./index-Bz754pyr.js";import"./PopoverPopup-DNp54wST.js";import"./InternalBackdrop-Cbjv4LYd.js";import"./composite-DhB3hKwn.js";import"./index-IygjZw6i.js";import"./getDisabledMountTransitionStyles-D4i8pPNj.js";import"./ToolbarRootContext-CLYVvxH8.js";import"./tick-C_vFiyHk.js";import"./svgIconContainer-DdiK9vAR.js";import"./small-cross-DtcbYqVr.js";import"./search-C7y_2xxv.js";import"./cross-CrdY7Kh8.js";import"./useValueChanged-BK-w6RqQ.js";import"./getPseudoElementBounds-Cbzb4WBf.js";import"./CompositeItem-Ond9knTH.js";import"./makeExternalStore-DcV0xPVd.js";import"./BaseForm-BS_ivAhH.js";import"./ActionButton-23xZ25Q2.js";import"./Button-is2LXBbi.js";import"./SkeletonBar-gxgKc7X3.js";import"./Tooltip-B4XteE65.js";import"./info-sign-BI4zWxrX.js";import"./chevron-up-ckQMmym0.js";import"./chevron-down-1BEbhpzA.js";import"./useEventCallback-CuURf1p5.js";import"./iconLoader-BmNpYTbt.js";import"./Switch-wZTZTZwE.js";import"./CompositeRoot-DoauOm5d.js";import"./TimePicker-Ban952rc.js";import"./CollapsiblePanel-CopIOFuI.js";import"./error-BZHgnJR4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D_eGSjjb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
