import{j as t,g as n}from"./iframe-VyYU4_vz.js";import{A as r}from"./action-form-QECfNqET.js";import"./preload-helper-BuqLdsok.js";import"./DropdownField-BEcIoxEz.js";import"./debounce-C3KWhkea.js";import"./useOsdkClient-Yo8cLSm5.js";import"./index-Ds9RaOEw.js";import"./Input-Ck1mtXHC.js";import"./useBaseUiId-oAJGM4T3.js";import"./useControlled-DF-V1JcA.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./PopoverPopup-WQ_0bkhD.js";import"./InternalBackdrop-Ks9C_KBp.js";import"./composite-D-GMalcD.js";import"./index-8WSLTY8y.js";import"./getDisabledMountTransitionStyles-CZqTqyjY.js";import"./ToolbarRootContext-DNatahNZ.js";import"./tick-Fs7Tv_3o.js";import"./svgIconContainer-RHuD6B4X.js";import"./small-cross-BhR-tKKW.js";import"./search-Cp9T6kDH.js";import"./cross-B8BSPVsW.js";import"./useValueChanged-BlhavTes.js";import"./getPseudoElementBounds-CGw1_hUQ.js";import"./CompositeItem-BpcnF50U.js";import"./makeExternalStore-fugyGUCm.js";import"./BaseForm-VlghGtRH.js";import"./ActionButton-BaZ1pakt.js";import"./Button-BO4-XA9w.js";import"./SkeletonBar-pyPg3O_J.js";import"./Tooltip-BKVen5s5.js";import"./info-sign-BXSp--jz.js";import"./chevron-up-x31k7xut.js";import"./chevron-down-C6hF1wmk.js";import"./useEventCallback-LhuC7cwi.js";import"./iconLoader-BDBjQijR.js";import"./Switch-B0uPF7q2.js";import"./CompositeRoot-Bsj6Vv3e.js";import"./TimePicker-Dptfu-dF.js";import"./CollapsiblePanel-6lTx7MnB.js";import"./error-D4hrAgPV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iTeYpiSH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
