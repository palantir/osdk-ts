import{j as t,g as n}from"./iframe-CjpAd4U5.js";import{A as r}from"./action-form-SIxN5TBK.js";import"./preload-helper-BfNxESlv.js";import"./DropdownField-DCYZRjtJ.js";import"./debounce-DcMhn9AR.js";import"./useOsdkClient-C1vhGPX1.js";import"./index-CFyMtNDf.js";import"./Input-BMeqWiRY.js";import"./useBaseUiId-DtGYbhuk.js";import"./useControlled-DlmQuXZO.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./PopoverPopup-D3nKiinq.js";import"./InternalBackdrop-_y5D9f1C.js";import"./composite-CXKEjPEl.js";import"./index-6181skxy.js";import"./getDisabledMountTransitionStyles-DQtOlfYI.js";import"./ToolbarRootContext-pZWEREev.js";import"./tick-Dy5_FPax.js";import"./svgIconContainer-BfRjvWya.js";import"./small-cross-D9G7qUei.js";import"./search-CXQZDVwK.js";import"./cross-YCEgVYb5.js";import"./useValueChanged-C6MnAZ9a.js";import"./getPseudoElementBounds-VcyCM6_5.js";import"./CompositeItem-M0I4N5Qo.js";import"./makeExternalStore-m3vRiWo8.js";import"./BaseForm-C56PPNzm.js";import"./ActionButton-CpKjD_O3.js";import"./Button-B8Qahzmt.js";import"./SkeletonBar-C6jHBjWT.js";import"./Tooltip-BDKJdSJE.js";import"./info-sign-3nShD9pJ.js";import"./chevron-up-B4XpbNM_.js";import"./chevron-down-Dk_9PWbo.js";import"./useEventCallback-CJNt2kD4.js";import"./iconLoader-CRRl6aKq.js";import"./Switch-IgQuaiR6.js";import"./CompositeRoot-B27X4oaO.js";import"./TimePicker-BhcdSrKv.js";import"./CollapsiblePanel-DuW80WT3.js";import"./error-DP0C5EXb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-q9Wg1g7p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
