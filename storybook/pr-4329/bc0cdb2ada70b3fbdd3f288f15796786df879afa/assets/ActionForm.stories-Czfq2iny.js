import{j as t,g as n}from"./iframe-D9LEKPHA.js";import{A as r}from"./action-form-CTz1R0Ec.js";import"./preload-helper-Dxzd1OZD.js";import"./DropdownField-BGcI4SWd.js";import"./debounce-BbpvLq-c.js";import"./useOsdkClient-CcWL-FKN.js";import"./index-DzK_y6C8.js";import"./Input-D7T3_Ui_.js";import"./useBaseUiId-CBbaApFb.js";import"./useControlled-3uaONOlZ.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./isObject-D93Vzkd_.js";import"./InternalBackdrop-GJoSUQP4.js";import"./composite-CGRnG1Ww.js";import"./index-DsxzOZNt.js";import"./getDisabledMountTransitionStyles-CBkqgZFm.js";import"./ToolbarRootContext-CATQRVeE.js";import"./tick-CbRcQjZj.js";import"./svgIconContainer-e-ufemnI.js";import"./small-cross-suCAhOQB.js";import"./search-CA19qJZK.js";import"./cross-C3SLdrCX.js";import"./useValueChanged-CGf07a8j.js";import"./getPseudoElementBounds-BqSDvjTD.js";import"./CompositeItem-C_PTfcmx.js";import"./makeExternalStore-CH14MzlW.js";import"./BaseForm-DbJpZrrX.js";import"./ActionButton-Bf8hi2D9.js";import"./Button-CFsy2fIN.js";import"./SkeletonBar-Dyau828r.js";import"./Tooltip-BTJQl-Kl.js";import"./info-sign-Dmh8GTXv.js";import"./chevron-up-BXiNTq90.js";import"./chevron-down-5k8pvBL_.js";import"./useEventCallback-DDtAALNo.js";import"./iconLoader-pI2Pl6_L.js";import"./Switch-A6BJDlN9.js";import"./CompositeRoot-pJmJhLIb.js";import"./TimePicker-C-jE-1y0.js";import"./CollapsiblePanel-D4Wj2a6a.js";import"./error-CuQM1-tZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQaJkAGj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
