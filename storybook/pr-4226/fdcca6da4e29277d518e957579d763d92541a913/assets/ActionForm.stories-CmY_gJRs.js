import{j as t,g as n}from"./iframe-B6ilqw57.js";import{A as r}from"./action-form-B_fJfYkE.js";import"./preload-helper-D-9CJsjA.js";import"./DropdownField-B2xi4c23.js";import"./debounce-Cr6ef7Zd.js";import"./useOsdkClient-CEMDVQcB.js";import"./index-DbyNdYIV.js";import"./Input-DWSs0FOD.js";import"./useBaseUiId-DHE-id5O.js";import"./useControlled-B3abm0PF.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./PopoverPopup-B6N4zjBr.js";import"./InternalBackdrop-CMe-Gh9-.js";import"./composite-DlL-mJ_3.js";import"./index-CVmOQE98.js";import"./getDisabledMountTransitionStyles-DpUjid9g.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./tick-DFqE3VKw.js";import"./svgIconContainer-cN2FPQGz.js";import"./small-cross-D3G7vTv6.js";import"./search-QZJd4Wc4.js";import"./cross-DPKuiR4p.js";import"./useValueChanged-D5nzYuqC.js";import"./getPseudoElementBounds-CU-tnlvo.js";import"./CompositeItem-C4j1wUUU.js";import"./makeExternalStore-C_9OaqSF.js";import"./BaseForm-BjXiCo8m.js";import"./ActionButton-BEqEK5Xi.js";import"./Button-dJtUFXII.js";import"./SkeletonBar-DpcdXqqq.js";import"./Tooltip-S82UM2K1.js";import"./info-sign-B-rJIlTv.js";import"./chevron-up-CoZprayK.js";import"./chevron-down-CMdh2Fjb.js";import"./useEventCallback-CpyAivRw.js";import"./iconLoader-DrNGzDmU.js";import"./Switch-B-J_6Ml6.js";import"./CompositeRoot-CuK8dVS1.js";import"./TimePicker-_biPe4aM.js";import"./CollapsiblePanel-B7_nvTjp.js";import"./error-DqxELFjs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D8k6BHrp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
