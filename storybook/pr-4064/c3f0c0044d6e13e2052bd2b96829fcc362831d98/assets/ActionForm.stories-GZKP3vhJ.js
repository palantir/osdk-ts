import{j as t,g as n}from"./iframe-KfcHTeg1.js";import{A as r}from"./action-form-DhmhG2eA.js";import"./preload-helper-Bb9isu9Z.js";import"./DropdownField-vOLnZeMB.js";import"./debounce-2PRfpVgw.js";import"./useOsdkClient-B3A79I8Y.js";import"./index-R7bO3Ag2.js";import"./Input-CN3mZMt5.js";import"./useBaseUiId-BkW36jG5.js";import"./useControlled-BGj-689N.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./PopoverPopup-BMw0y_rW.js";import"./InternalBackdrop-tVRu2lpW.js";import"./composite-SXE3lJSt.js";import"./index-BcYBVJtM.js";import"./getDisabledMountTransitionStyles-kkxHQkYj.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./tick-DVTuPHTD.js";import"./svgIconContainer-Bg10ywbV.js";import"./small-cross-Cn9FtNXX.js";import"./search-srmRE2lv.js";import"./cross-CsyJ80xs.js";import"./useValueChanged-Dz43bSNR.js";import"./getPseudoElementBounds-CH0zahJv.js";import"./CompositeItem-D4098fQy.js";import"./makeExternalStore-Dw3huE5n.js";import"./BaseForm-J92p_ADS.js";import"./ActionButton-Btyaoa61.js";import"./Button-DOEhPeJL.js";import"./SkeletonBar-DDrD9EIz.js";import"./Tooltip-BQBI28hZ.js";import"./info-sign-BFqJQxtd.js";import"./chevron-up-m63Rpbjo.js";import"./chevron-down-Vk4ljz0Y.js";import"./useEventCallback-BLr_WVRC.js";import"./iconLoader-Dm4NBjnN.js";import"./Switch-CHYIhm05.js";import"./CompositeRoot-qV1MXk6I.js";import"./TimePicker-CjL2_o9z.js";import"./CollapsiblePanel-Dv-wcfHr.js";import"./error-BE8S7DUo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7xTPOdu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
