import{j as t,g as n}from"./iframe-B41lgdKN.js";import{A as r}from"./action-form-CYwrde3f.js";import"./preload-helper-DI5m88JW.js";import"./DropdownField-BKkvVjBl.js";import"./debounce-UdAL_ybq.js";import"./useOsdkClient-D00y5DQT.js";import"./index-C2q613GL.js";import"./Input-C5V0yZmk.js";import"./useBaseUiId-BgB3Fx_y.js";import"./useControlled-COiD_eR7.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./PopoverPopup-DAEUfrcq.js";import"./InternalBackdrop-BILEvSbn.js";import"./composite-B54UYmeO.js";import"./index-DdsQXbay.js";import"./getDisabledMountTransitionStyles-vQmeQXHd.js";import"./ToolbarRootContext-DaqyENip.js";import"./tick-jRfkJ3jM.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./small-cross-BiIUW-iP.js";import"./search-D5xcli0X.js";import"./cross-C9BOtq1y.js";import"./useValueChanged-uNqrEDBx.js";import"./getPseudoElementBounds-S244zxdS.js";import"./CompositeItem-DKeB6UbW.js";import"./makeExternalStore-BkjE2Bfi.js";import"./BaseForm-2kvdyfId.js";import"./ActionButton-BUTqoq-Q.js";import"./Button-CLPb2Ul9.js";import"./SkeletonBar-CGdxBAF7.js";import"./Tooltip-9yKLS0Jj.js";import"./info-sign-6XabAXJj.js";import"./chevron-up-Btp4j1eu.js";import"./chevron-down-DPEakPZ3.js";import"./useEventCallback-xWqpVog3.js";import"./iconLoader-D6n1IlBA.js";import"./Switch-BsbvZDaJ.js";import"./CompositeRoot-DcMohphO.js";import"./TimePicker-6Eo4yEo7.js";import"./CollapsiblePanel-m4kdZM0i.js";import"./error-DxQUrNdP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BJYPVZ1i.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
