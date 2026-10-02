import{j as t,g as n}from"./iframe-CgaQrvJX.js";import{A as r}from"./action-form-Dl1QYmKO.js";import"./preload-helper-B2Xmrc95.js";import"./DropdownField-CwkJQmwG.js";import"./debounce-BrOWPCnK.js";import"./useOsdkClient-DwCcA5xy.js";import"./index-Bzmlqe5w.js";import"./Input-DQR44Pu5.js";import"./useBaseUiId-CIjmtvYO.js";import"./useControlled-A1Soqi4e.js";import"./index-BwSc5cdS.js";import"./index-D_yqZm0V.js";import"./PopoverPopup-CZsknx9j.js";import"./InternalBackdrop-BkdT6um9.js";import"./composite-B-SLP__V.js";import"./index-DUXtr9cN.js";import"./getDisabledMountTransitionStyles-BSI6iR4W.js";import"./ToolbarRootContext-YVP2LXfw.js";import"./tick-Q1XgvJo3.js";import"./svgIconContainer-DNetVQYr.js";import"./small-cross-CClz0VbI.js";import"./search-BUTYKFlQ.js";import"./cross-IeILlXDu.js";import"./useValueChanged-BNtiYy3l.js";import"./getPseudoElementBounds-BD_yj4W1.js";import"./CompositeItem-Dxj4Vwhq.js";import"./makeExternalStore-BVbHcjBk.js";import"./BaseForm-oz0Ecgom.js";import"./ActionButton-B7LnHlzj.js";import"./Button-BWSgruJ1.js";import"./SkeletonBar-DLIA_RTq.js";import"./Tooltip-C2TlaiS-.js";import"./info-sign-BoIeYEJy.js";import"./chevron-up-D3XsRzvV.js";import"./chevron-down-BU6VTUzE.js";import"./useEventCallback-CByTzmdM.js";import"./iconLoader-CdJIlyKl.js";import"./Switch-_75etiuv.js";import"./CompositeRoot-CTq6S3ih.js";import"./TimePicker-D-vZzSoO.js";import"./CollapsiblePanel-B7VLrLlP.js";import"./error-DP9sVVUg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C3kX09Hw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
