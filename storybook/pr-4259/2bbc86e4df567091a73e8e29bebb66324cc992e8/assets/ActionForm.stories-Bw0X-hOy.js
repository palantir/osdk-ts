import{j as t,g as n}from"./iframe-DgHq46dL.js";import{A as r}from"./action-form-Bx9uPuKk.js";import"./preload-helper-2OibLDKZ.js";import"./DropdownField-B3ISwKsz.js";import"./debounce-gBlNcefK.js";import"./useOsdkClient-Cx_VxcYG.js";import"./index-BhPwX7yA.js";import"./Input-o88S38RY.js";import"./useBaseUiId-DraHxLhq.js";import"./useControlled-C_PKKkAE.js";import"./index-pFDv9Z-0.js";import"./index-oCxycBs6.js";import"./PopoverPopup-Bpii6JB2.js";import"./InternalBackdrop-BUAi9chw.js";import"./composite-B03IEoiJ.js";import"./index-BRwM8whp.js";import"./getDisabledMountTransitionStyles-Ce2xSAU9.js";import"./ToolbarRootContext-CNYHni6P.js";import"./tick-BcwK5wdE.js";import"./svgIconContainer-D-eVzjwP.js";import"./small-cross-DhXPHsHQ.js";import"./search-DW3-Ki40.js";import"./cross-kmyKn-Hd.js";import"./useValueChanged-ENf__CxN.js";import"./getPseudoElementBounds-DBFuRRXN.js";import"./CompositeItem-BY7KoFBl.js";import"./makeExternalStore-D1CTkdeT.js";import"./BaseForm-DxWfw_L0.js";import"./ActionButton-DUzQV33t.js";import"./Button-CSx6Joum.js";import"./SkeletonBar-_tavPjlr.js";import"./Tooltip-b-GnJ4b5.js";import"./info-sign-BLCZHwqQ.js";import"./chevron-up-bX5ufkEA.js";import"./chevron-down-BFQTfWqg.js";import"./useEventCallback-xbbbX8qB.js";import"./iconLoader-BoOAH5ed.js";import"./Switch-BjdMhx0h.js";import"./CompositeRoot-DqUH0o6d.js";import"./TimePicker-DgVRKrQZ.js";import"./CollapsiblePanel-CZZTgzig.js";import"./error-D8zFMP2p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CAH3qcfi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
