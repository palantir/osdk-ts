import{j as t,g as n}from"./iframe-GU9uuCxz.js";import{A as r}from"./action-form-Bj9oILk9.js";import"./preload-helper-DiuBXggc.js";import"./DropdownField-DIOwQMdG.js";import"./debounce-CRbn1ibT.js";import"./useOsdkClient-Cw50fjDU.js";import"./index-wbqNQUCN.js";import"./Input-D7wHTW3A.js";import"./useBaseUiId-izgrlbm8.js";import"./useControlled-DeKlo4Fr.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./isObject-iIy0QNEy.js";import"./InternalBackdrop-JyM_yboG.js";import"./composite-D5bxH43Y.js";import"./getDisabledMountTransitionStyles-C9feCk9b.js";import"./ToolbarRootContext-CAN5koek.js";import"./tick-C-CpglM8.js";import"./svgIconContainer-lMVp7Q5D.js";import"./small-cross-CD2Qn0fR.js";import"./search-BwM3LpYv.js";import"./cross-lUtkcXvq.js";import"./useValueChanged-DwRKotGN.js";import"./getPseudoElementBounds-D5nIJXlV.js";import"./CompositeItem-Cx8rt4Os.js";import"./makeExternalStore-B8P6l5nx.js";import"./BaseForm-CKgx8XhI.js";import"./ActionButton-1COA3Sdw.js";import"./Button-BfmdkMAB.js";import"./SkeletonBar-DsaZzNM8.js";import"./Tooltip-T6_qKaR2.js";import"./info-sign-D8TEZi9H.js";import"./chevron-up-Cj-U_sFG.js";import"./chevron-down-TCTUxLeS.js";import"./useEventCallback-DbxWTdO3.js";import"./iconLoader-3o2v6LTK.js";import"./Switch-BZ3o154g.js";import"./CompositeRoot-kmIDf_th.js";import"./TimePicker-B3AX9ehZ.js";import"./CollapsiblePanel-BW9VYb1e.js";import"./error-BZwp4K-_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKdRrZP1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
