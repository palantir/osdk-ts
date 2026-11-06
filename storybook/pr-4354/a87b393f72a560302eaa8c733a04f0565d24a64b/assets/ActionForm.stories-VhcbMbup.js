import{j as t,g as n}from"./iframe-CMoZd53O.js";import{A as r}from"./action-form-D97svCJW.js";import"./preload-helper-Bvb7-fL5.js";import"./DropdownField-BmedYyFU.js";import"./debounce-Dcl3ILN3.js";import"./useOsdkClient-Bd2KZ-42.js";import"./index-BRB1GWD7.js";import"./Input-M24j8YBw.js";import"./useBaseUiId-Qhb38DP0.js";import"./useControlled-BxfFaTP6.js";import"./index-D19nvIzc.js";import"./index-C8cm2zeY.js";import"./isObject-CebNioKg.js";import"./InternalBackdrop-CI4NflJZ.js";import"./composite-ltKATKpa.js";import"./index-r2odiPSn.js";import"./getDisabledMountTransitionStyles-Dcud9JWR.js";import"./ToolbarRootContext-dQ-vGvin.js";import"./tick-Fvi9O2LX.js";import"./svgIconContainer-SBUhRCLt.js";import"./small-cross-DxRqsWYU.js";import"./search-DX4bcztW.js";import"./cross-CaFf6aAK.js";import"./useValueChanged-DM2V32Pl.js";import"./getPseudoElementBounds-D2DVxAFX.js";import"./CompositeItem-Djz6OTaL.js";import"./makeExternalStore-BA3QwJHc.js";import"./BaseForm-BbMBOsih.js";import"./ActionButton-Da5m8m-t.js";import"./Button-BA8xBSZI.js";import"./SkeletonBar-Bb_eLXH3.js";import"./Tooltip-Bop0VDhD.js";import"./info-sign-BZp3Hdv8.js";import"./chevron-up-CzwRLd6e.js";import"./chevron-down-BCXbJ6WN.js";import"./useEventCallback-DmmmsQD4.js";import"./iconLoader-DkJjSd6o.js";import"./Switch-BS-gtrBw.js";import"./CompositeRoot-CKDuVr7-.js";import"./TimePicker-Bz_SDHkH.js";import"./CollapsiblePanel-Dd0lgXNb.js";import"./error-CjE7xCZl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DG_FiXeR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
