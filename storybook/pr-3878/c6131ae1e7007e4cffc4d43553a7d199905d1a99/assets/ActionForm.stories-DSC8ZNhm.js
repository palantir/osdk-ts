import{j as t,g as n}from"./iframe-i_9Nw0aL.js";import{A as r}from"./action-form-Cr5egLLx.js";import"./preload-helper-B6z7q6ev.js";import"./DropdownField-BOme1HDF.js";import"./debounce-Dt-hlKAZ.js";import"./useOsdkClient-1TtZSZAh.js";import"./index-xy7OH4WM.js";import"./Input-DSjQkga5.js";import"./useBaseUiId-BMuu8nEn.js";import"./useControlled-gY6NMr8Z.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./PopoverPopup-COfAsOM5.js";import"./InternalBackdrop-ChYWKohY.js";import"./composite-BEolDa-D.js";import"./index-DLeoqhRa.js";import"./getDisabledMountTransitionStyles-DwmQAXX5.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./tick-qmWuhCdU.js";import"./svgIconContainer-3Y9_T1l7.js";import"./small-cross-D-oeOHZb.js";import"./search-CEIky3LJ.js";import"./cross-QqYP1fee.js";import"./useValueChanged-DZGUtt_l.js";import"./getPseudoElementBounds-rsgn8lVn.js";import"./CompositeItem-CcQI67Uz.js";import"./makeExternalStore-DV-2pdTM.js";import"./BaseForm-Mi2CFrZg.js";import"./ActionButton-DoCWbHlm.js";import"./Button-Cqo_9NuU.js";import"./SkeletonBar-m7_oqjy5.js";import"./Tooltip-BXqI72Um.js";import"./info-sign-BGD4xemV.js";import"./chevron-up-C8kRn7e0.js";import"./chevron-down-D5tyPu8s.js";import"./useEventCallback-BWVM_xBp.js";import"./iconLoader-y1fuUVq-.js";import"./CompositeRoot-BeR-tiBg.js";import"./Switch-D_mq7yF3.js";import"./TimePicker-6uoKR-7s.js";import"./CollapsiblePanel-uhXZweix.js";import"./error-BtW_-Bd0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bn9NhK2D.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
