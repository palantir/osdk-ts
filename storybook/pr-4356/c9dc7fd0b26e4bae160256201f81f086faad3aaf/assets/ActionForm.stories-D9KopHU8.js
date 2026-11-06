import{j as t,g as n}from"./iframe-V97s0gAW.js";import{A as r}from"./action-form-DHpFDVzZ.js";import"./preload-helper-3HSTeFHP.js";import"./DropdownField-Beas9bGg.js";import"./debounce-BepasE64.js";import"./useOsdkClient-8pQnCGJ8.js";import"./index-DpgCkzdC.js";import"./Input-C6RT56dE.js";import"./useBaseUiId-Bab3TUT0.js";import"./useControlled-CturneKY.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./PopoverPopup-DT3NfX8h.js";import"./InternalBackdrop-DON14_Jh.js";import"./composite-CbcGiMzv.js";import"./index-DiDYqxft.js";import"./getDisabledMountTransitionStyles-C0GpbwGk.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./tick-DuScy4TP.js";import"./svgIconContainer-DcsfwCI6.js";import"./small-cross-xW5wyF61.js";import"./search-B7TbVw6W.js";import"./cross-D1lQCJW7.js";import"./useValueChanged-7VQbrE2E.js";import"./getPseudoElementBounds-BZTN0a4u.js";import"./CompositeItem-Dp8TKMUS.js";import"./makeExternalStore-CCWCHpFp.js";import"./BaseForm-DmfIA4wq.js";import"./ActionButton-B4eNZhjq.js";import"./Button-BO5_Znwd.js";import"./SkeletonBar-BJfs4zM-.js";import"./Tooltip-pzXiOa2u.js";import"./info-sign-D54dm8AD.js";import"./chevron-up-h5sAfkDO.js";import"./chevron-down-D6e3j0_s.js";import"./useEventCallback-CdaXvWI6.js";import"./iconLoader-CWM7nrFr.js";import"./Switch-BK7wFBZe.js";import"./CompositeRoot-DXoEOf9m.js";import"./TimePicker-BO6uaqmK.js";import"./CollapsiblePanel-DzQCvcLA.js";import"./error-3rN_CcIw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OMK47pZ9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
