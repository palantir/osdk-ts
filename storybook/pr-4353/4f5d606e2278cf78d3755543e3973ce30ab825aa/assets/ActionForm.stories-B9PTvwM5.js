import{j as t,g as n}from"./iframe-DpQxl-G6.js";import{A as r}from"./action-form-BvSfmnN5.js";import"./preload-helper-mRXziM39.js";import"./DropdownField-BRSWnnTy.js";import"./debounce-CJywBWC4.js";import"./useOsdkClient-0Dxy99AS.js";import"./index-Cujp3sVp.js";import"./Input-D2U-2W4H.js";import"./useBaseUiId-Cl9-toeq.js";import"./useControlled-TG9q_V2m.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./PopoverPopup-DzI_buys.js";import"./InternalBackdrop-UGKYLNqj.js";import"./composite-wCOpmCUF.js";import"./index-LqhCF_-F.js";import"./getDisabledMountTransitionStyles-BUxjZvDR.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./tick-bXhfM5-a.js";import"./svgIconContainer-DamXBWaI.js";import"./small-cross-C1Iw8DgY.js";import"./search-n4OQKLJh.js";import"./cross-dB1xiAz0.js";import"./useValueChanged-CwTmp6si.js";import"./getPseudoElementBounds-11Yqxgjp.js";import"./CompositeItem-DSQrNM-7.js";import"./makeExternalStore-BUiRNREx.js";import"./BaseForm-C2Rz09Em.js";import"./ActionButton-fbLg4xtm.js";import"./Button-BpP7RQEd.js";import"./SkeletonBar-BlfHbAVT.js";import"./Tooltip-DE5PnA7D.js";import"./info-sign-DVYLLtnp.js";import"./chevron-up-GtjXVGXQ.js";import"./chevron-down-D-RM0tZ4.js";import"./useEventCallback-7bghjhj3.js";import"./iconLoader-CncX92B4.js";import"./Switch-C3W0YCFY.js";import"./CompositeRoot-BNPHJOkP.js";import"./TimePicker-BxdxB__9.js";import"./CollapsiblePanel-CWN4zyln.js";import"./error-DzvIefMA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9oeFlqw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
