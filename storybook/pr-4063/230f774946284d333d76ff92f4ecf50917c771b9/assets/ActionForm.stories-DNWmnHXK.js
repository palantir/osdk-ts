import{j as t,g as n}from"./iframe-DsP96Xjx.js";import{A as r}from"./action-form-rULZ3uZs.js";import"./preload-helper-DwitJgNj.js";import"./DropdownField-CIyOjqZ7.js";import"./debounce-DOMkCj-B.js";import"./useOsdkClient-DGSsfpPV.js";import"./index-CCZQyGW1.js";import"./Input-Bp3qfxHC.js";import"./useBaseUiId-CmljmHpR.js";import"./useControlled-OAEAKhSc.js";import"./index-DOmZP-tW.js";import"./index-B7ldO9Ow.js";import"./PopoverPopup-qu2sjpZ7.js";import"./InternalBackdrop-C3nPSiVQ.js";import"./composite-j1sQv_62.js";import"./index-BLLb1gnX.js";import"./getDisabledMountTransitionStyles-BYYMCiyL.js";import"./ToolbarRootContext-MS5BqpDI.js";import"./tick-DASReF7p.js";import"./svgIconContainer-DK5XvhMp.js";import"./small-cross-DqTpJXLx.js";import"./search-CHKIWokO.js";import"./cross-BeyCouG7.js";import"./useValueChanged-NP9GJqeg.js";import"./getPseudoElementBounds-Bi6nNbbr.js";import"./CompositeItem-Bt-RplsU.js";import"./makeExternalStore-m0KaaoZC.js";import"./BaseForm-D8zEesfW.js";import"./ActionButton-DdUHOyw7.js";import"./Button-D7SLUTAS.js";import"./SkeletonBar-BZJ5t8a8.js";import"./Tooltip-80snLRYh.js";import"./info-sign-B8LH5YBk.js";import"./chevron-up-Be4stfrE.js";import"./chevron-down-BXNKs90J.js";import"./useEventCallback-DFq_e--v.js";import"./iconLoader-DV4JWZ0q.js";import"./Switch-C3iXyaxL.js";import"./CompositeRoot-BdNmDMgU.js";import"./TimePicker-B1HCTt-P.js";import"./CollapsiblePanel-BSmym8_v.js";import"./error-BrJRNRov.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJFmOHw0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
