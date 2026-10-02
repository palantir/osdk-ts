import{j as t,g as n}from"./iframe-826Gs96o.js";import{A as r}from"./action-form-DOVMJZbi.js";import"./preload-helper-Dy1PefeT.js";import"./DropdownField-D4QNZQ_M.js";import"./debounce-R32f75fq.js";import"./useOsdkClient-CAEYuMrw.js";import"./index-DxFbtAl2.js";import"./Input-DI6TXQQJ.js";import"./useBaseUiId-Dg5t7t_V.js";import"./useControlled-BpCUWNpJ.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./PopoverPopup-CAuY5cHw.js";import"./InternalBackdrop-xUOOm_9M.js";import"./composite-CfFzeQqA.js";import"./index-Bs21FMkz.js";import"./getDisabledMountTransitionStyles-DGBLiCd8.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./tick-Cz6w76NV.js";import"./svgIconContainer-C9llsudM.js";import"./small-cross-C8UmW7Hs.js";import"./search-BZHAnhvn.js";import"./cross-CGVnPFvE.js";import"./useValueChanged-DENmBLV7.js";import"./getPseudoElementBounds-K8yHl1as.js";import"./CompositeItem-CcW3IcXa.js";import"./makeExternalStore-vPmU5su8.js";import"./BaseForm-D4tqpbE9.js";import"./ActionButton-DDJP6dlY.js";import"./Button-DNoJUNAB.js";import"./SkeletonBar-B0AWztU4.js";import"./Tooltip-1a4YvbvY.js";import"./info-sign-BxN9F1nz.js";import"./chevron-up-BbKI9trV.js";import"./chevron-down-DTD0XUuq.js";import"./useEventCallback-BJHP1M_f.js";import"./iconLoader-B4snbenl.js";import"./Switch-fucxFGY2.js";import"./CompositeRoot-BNXinrTS.js";import"./TimePicker-Dt6asOqT.js";import"./CollapsiblePanel-DuQd7Yzu.js";import"./error-BRJ8RgcR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKsd8iS7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
