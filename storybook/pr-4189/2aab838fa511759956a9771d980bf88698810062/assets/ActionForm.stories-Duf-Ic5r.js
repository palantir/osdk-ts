import{j as t,g as n}from"./iframe-CyyLqEr6.js";import{A as r}from"./action-form-C4GjlcQ4.js";import"./preload-helper-CLKx56fr.js";import"./DropdownField-77S-oXAU.js";import"./debounce-Kl0LOmqT.js";import"./useOsdkClient-TJGS2RfR.js";import"./index-CXVe_-qM.js";import"./Input-CGZ9tgdl.js";import"./useBaseUiId-DNRq1Vj2.js";import"./useControlled-SLbcZlz1.js";import"./index-Btxr5vyt.js";import"./index-DplZ--1V.js";import"./PopoverPopup-CjI5fBm4.js";import"./InternalBackdrop-VqPqEODt.js";import"./composite-Cu366ztE.js";import"./index-CIcqP63k.js";import"./getDisabledMountTransitionStyles-DqpTbrQs.js";import"./ToolbarRootContext-Dx3qy1zP.js";import"./tick-Bt0G-C4s.js";import"./svgIconContainer-BXEQoARc.js";import"./small-cross-CeBhb5K4.js";import"./search-9XevuXRY.js";import"./cross-aF3LHT_W.js";import"./useValueChanged-CfwgduQf.js";import"./getPseudoElementBounds-B0QwFzeX.js";import"./CompositeItem-4N3XpUmD.js";import"./makeExternalStore-B6005TWn.js";import"./BaseForm-ev317gHo.js";import"./ActionButton-5WAWMSR-.js";import"./Button-CE0RBh88.js";import"./SkeletonBar-hSnelWIw.js";import"./Tooltip-1zWBtBzZ.js";import"./info-sign-CbFsS1h_.js";import"./chevron-up-BjAPyZMM.js";import"./chevron-down-C0fFk26N.js";import"./useEventCallback-BkrIhA4F.js";import"./iconLoader-B1CGMWNa.js";import"./Switch-DMR9pxZL.js";import"./CompositeRoot-DZK8iigt.js";import"./TimePicker-DiOyQJTt.js";import"./CollapsiblePanel-DobbT5mN.js";import"./error-Dp6C50rF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D87Y42PU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
