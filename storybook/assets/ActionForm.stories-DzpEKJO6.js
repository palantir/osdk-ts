import{j as t,g as n}from"./iframe-tf0495v_.js";import{A as r}from"./action-form-BE0l33na.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-D7Y-P9Ep.js";import"./debounce-ChAJRBGQ.js";import"./useOsdkClient-BNBK5eBr.js";import"./index-D2AIaBAZ.js";import"./Input-DEfwNsC4.js";import"./useBaseUiId-CWsIXkuU.js";import"./useControlled-1fYDQt6k.js";import"./index-DcxI05po.js";import"./index-BDW4zxbF.js";import"./PopoverPopup-CrMFPZWz.js";import"./InternalBackdrop-DJyPzldm.js";import"./composite-Ba9ifDV9.js";import"./index-9oKwKnEm.js";import"./getDisabledMountTransitionStyles-BSjFObFI.js";import"./ToolbarRootContext-DPqmeZr5.js";import"./tick-BcpYaFi0.js";import"./svgIconContainer-C-fh6e97.js";import"./small-cross-DE-iog-f.js";import"./search-BWQUBjsa.js";import"./cross--xJKKgee.js";import"./useValueChanged-CPTd0fEe.js";import"./getPseudoElementBounds-DJjcZenL.js";import"./CompositeItem-D--GgbU9.js";import"./makeExternalStore-C_sk4jS_.js";import"./BaseForm-DoGdZ7hs.js";import"./ActionButton-DNbVxKUR.js";import"./Button-6k_Ayrrm.js";import"./SkeletonBar-DFrGLOcG.js";import"./Tooltip-CvL86HHa.js";import"./info-sign-DMIDyqDC.js";import"./chevron-up-BVt43LIw.js";import"./chevron-down-DSCp4Cy5.js";import"./useEventCallback-sbdHrv5E.js";import"./iconLoader-uu5_vGiM.js";import"./Switch-BiqH49E3.js";import"./CompositeRoot-DGNf-qU4.js";import"./TimePicker-ByjrLZXK.js";import"./CollapsiblePanel-B86Q-6Un.js";import"./error-DLfqe8ag.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B9UpkJYI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
