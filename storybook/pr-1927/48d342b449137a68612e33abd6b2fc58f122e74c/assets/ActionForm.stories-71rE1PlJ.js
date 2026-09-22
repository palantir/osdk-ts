import{j as t,g as n}from"./iframe-DbFL1YKD.js";import{A as r}from"./action-form-C6NCO2JE.js";import"./preload-helper-DPeLqFG0.js";import"./DropdownField-DzYuycL4.js";import"./debounce-B-7wdJBB.js";import"./useOsdkClient-CwS7VwCc.js";import"./index-BpVl4HIU.js";import"./Input-Z3iSNu5L.js";import"./useBaseUiId-DpJu2OQl.js";import"./useControlled-CC7pAFD9.js";import"./index-Dqg20C0A.js";import"./index-BusxuARM.js";import"./PopoverPopup-BpDStnyX.js";import"./InternalBackdrop-CWJBApus.js";import"./composite-DUwAvhnX.js";import"./index-pnTqVHDC.js";import"./getDisabledMountTransitionStyles-Co12HikA.js";import"./ToolbarRootContext-BGVeLiJB.js";import"./tick-C7lpv1d9.js";import"./svgIconContainer-DmqA5_t8.js";import"./small-cross-CXtNxeYe.js";import"./search-DfBNorlD.js";import"./cross-BbsbdKVz.js";import"./useValueChanged-rzn5oUi-.js";import"./getPseudoElementBounds-C-Gj9_OL.js";import"./CompositeItem-BFMnxKL4.js";import"./makeExternalStore-DCuWZO1g.js";import"./BaseForm-D0CHy6_f.js";import"./ActionButton-DojK71a-.js";import"./Button-DsQQlkgI.js";import"./SkeletonBar-C5Dm8uJU.js";import"./Tooltip-BnTll5Ro.js";import"./info-sign-qdLR_jIG.js";import"./chevron-up-BCN50pBM.js";import"./chevron-down-BFigfpWF.js";import"./useEventCallback-Dp_d2SUA.js";import"./iconLoader-Dlvc1nSC.js";import"./Switch-BM4sC5iu.js";import"./CompositeRoot-ArC1Ef0t.js";import"./TimePicker-rSKMVHrx.js";import"./CollapsiblePanel-rxa4K0IB.js";import"./error-B_or4gbN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CCBEdesf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
