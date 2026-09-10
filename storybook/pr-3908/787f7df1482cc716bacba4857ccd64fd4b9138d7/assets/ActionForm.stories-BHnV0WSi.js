import{j as t,g as n}from"./iframe-DF9DX5mw.js";import{A as r}from"./action-form-uUAEZ3tU.js";import"./preload-helper-DVnQ6duR.js";import"./DropdownField-BmYXknbz.js";import"./debounce-q3UzP_fO.js";import"./useOsdkClient-B5Lb5Fy6.js";import"./index-BmuLmEaC.js";import"./Input-XPtGFq-8.js";import"./useBaseUiId-Z5YEKe02.js";import"./useControlled-CD5ggXKk.js";import"./index-C_Rqkv-M.js";import"./index-BougzNP_.js";import"./PopoverPopup-3Jbs0f7w.js";import"./InternalBackdrop-B5Fo5nQu.js";import"./composite-DOTEZs57.js";import"./index-BKVwN-RR.js";import"./getDisabledMountTransitionStyles-et_-f1AH.js";import"./ToolbarRootContext-Cv5YqZmZ.js";import"./tick-BqC-lfvb.js";import"./svgIconContainer-BnUXZNAT.js";import"./small-cross-CMbApKIR.js";import"./search-C_UKWj2f.js";import"./cross-CNVJX-R0.js";import"./useValueChanged-COxiaf3w.js";import"./getPseudoElementBounds-D8S0eQR8.js";import"./CompositeItem-MLQ_GRVe.js";import"./makeExternalStore-DZe_6606.js";import"./BaseForm-btM5tAuz.js";import"./ActionButton-DYftQUfX.js";import"./Button-fzptvapi.js";import"./SkeletonBar-C4llJUuv.js";import"./Tooltip-D9EgpZ1u.js";import"./info-sign-BtCkng_3.js";import"./chevron-up-DPV2hUsw.js";import"./chevron-down-YPHBShAj.js";import"./useEventCallback-DEaFjfc0.js";import"./iconLoader-qvWBcuzP.js";import"./CompositeRoot-CmRSkQS-.js";import"./Switch-D91sD-Gs.js";import"./TimePicker-BhKyHU1Z.js";import"./CollapsiblePanel-BlNEuHSO.js";import"./error-CX7q-MIV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YJ6vrnTW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
