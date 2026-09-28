import{j as t,g as n}from"./iframe-vWRqqmX-.js";import{A as r}from"./action-form-BmPtdVWJ.js";import"./preload-helper-rcEVmD-8.js";import"./DropdownField-DfFvOzAq.js";import"./debounce-UXxVW676.js";import"./useOsdkClient-B6lrTeDC.js";import"./index-CHsUa7_U.js";import"./Input-CDZCyUSS.js";import"./useBaseUiId-DqVebmsP.js";import"./useControlled-C4H7EWzs.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./PopoverPopup-D7-JPOKG.js";import"./InternalBackdrop-Bj_asFWJ.js";import"./composite-D97u5UoY.js";import"./index-sVUrmcsW.js";import"./getDisabledMountTransitionStyles-C2Knmcgg.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./tick-BtAbSo2V.js";import"./svgIconContainer-B_rEL3k8.js";import"./small-cross-DgmUASg5.js";import"./search-C9O70xSJ.js";import"./cross-BIItHWLB.js";import"./useValueChanged-aefsk5NO.js";import"./getPseudoElementBounds-B9pvaRUu.js";import"./CompositeItem-C9y1P_Q2.js";import"./makeExternalStore-D3utWwkK.js";import"./BaseForm-DDUcO8hg.js";import"./ActionButton-BPD_E_Z-.js";import"./Button-C6bK3SUF.js";import"./SkeletonBar-CqBoYZ8U.js";import"./Tooltip-BADmUJIy.js";import"./info-sign-D7XnDmXE.js";import"./chevron-up-CHiC9sgH.js";import"./chevron-down-CgEqRVri.js";import"./useEventCallback-DMVnoZ3z.js";import"./iconLoader-DQJ0xXSH.js";import"./Switch-L3ZU_7aP.js";import"./CompositeRoot-N_brukBH.js";import"./TimePicker-Dve1pkYb.js";import"./CollapsiblePanel-2hkcDRMt.js";import"./error-C1w4OL1G.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfKbJ4sV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
