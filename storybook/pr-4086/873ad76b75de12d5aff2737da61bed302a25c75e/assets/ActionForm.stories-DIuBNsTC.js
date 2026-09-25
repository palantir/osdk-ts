import{j as t,g as n}from"./iframe-DaD-kZgD.js";import{A as r}from"./action-form-CkeW2z0P.js";import"./preload-helper-B5rjj0RW.js";import"./DropdownField-To6MSkSU.js";import"./debounce-Ry2gNXo0.js";import"./useOsdkClient-BpNsbtIJ.js";import"./index-BunTbxSe.js";import"./Input-DoThMFAr.js";import"./useBaseUiId-D_mAJVOg.js";import"./useControlled-DETcBtyj.js";import"./index-BLudVFJt.js";import"./index-CibRS9EP.js";import"./PopoverPopup-COghbQef.js";import"./InternalBackdrop-D9rvDhcY.js";import"./composite-CvSGc8uG.js";import"./index-EjKiPaYv.js";import"./getDisabledMountTransitionStyles-uJHk-LBD.js";import"./ToolbarRootContext-BppVD4NW.js";import"./tick-BlrBnSjV.js";import"./svgIconContainer-BuHjzoHd.js";import"./small-cross-3C_RgODH.js";import"./search-Ba2RAVKf.js";import"./cross-VN_C6F1c.js";import"./useValueChanged-BpD_v2NO.js";import"./getPseudoElementBounds-DYbJ4f7q.js";import"./CompositeItem-vvOtpWtM.js";import"./makeExternalStore-DiTJ7dI9.js";import"./BaseForm-lsouN2jV.js";import"./ActionButton-CGL0xlBn.js";import"./Button-DIAY5YBq.js";import"./SkeletonBar-CMKv95YA.js";import"./Tooltip-DSYkY7dD.js";import"./info-sign-BE4TTQcx.js";import"./chevron-up-DDjq6qX6.js";import"./chevron-down-CvKLjMsu.js";import"./useEventCallback-DZwsnGgj.js";import"./iconLoader-DWCG-pI6.js";import"./Switch-DwUb0kVC.js";import"./CompositeRoot-DW9R-AQV.js";import"./TimePicker-B_1_qMNq.js";import"./CollapsiblePanel-DUX36nEl.js";import"./error-CF8X_kHA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6sZIqzZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
