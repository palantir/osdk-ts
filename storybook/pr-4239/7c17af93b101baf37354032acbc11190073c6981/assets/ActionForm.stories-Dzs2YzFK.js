import{j as t,g as n}from"./iframe-BXMaRU6d.js";import{A as r}from"./action-form-BJXBsW2y.js";import"./preload-helper-m1fl9yzx.js";import"./DropdownField-lw-NWBQn.js";import"./debounce-Cu2khlmU.js";import"./useOsdkClient-D2KP4OFp.js";import"./index-D34UCeFi.js";import"./Input-B62f65LS.js";import"./useBaseUiId-CnVJ9pTQ.js";import"./useControlled-CqKbYNY-.js";import"./index-C36yrfOW.js";import"./index-BtCN2h1R.js";import"./PopoverPopup-mvEM4RXX.js";import"./InternalBackdrop-Cr2zqXSQ.js";import"./composite-CTlCsHkl.js";import"./index-Cy-78AF4.js";import"./getDisabledMountTransitionStyles-BvsTv5-I.js";import"./ToolbarRootContext-01ULS3om.js";import"./tick-D0-iauHd.js";import"./svgIconContainer-M8lsqLmU.js";import"./small-cross-DKwt6Bqu.js";import"./search-B6DdGciv.js";import"./cross-MZH7NFlC.js";import"./useValueChanged-CcVyEc1Q.js";import"./getPseudoElementBounds-ChoJiaDP.js";import"./CompositeItem-CxCbcCcw.js";import"./makeExternalStore-DZLA8zoV.js";import"./BaseForm-DlTF2mOY.js";import"./ActionButton-CE9KfMfn.js";import"./Button-DtbuXO0-.js";import"./SkeletonBar-Bq1t_P3v.js";import"./Tooltip-Bn2GpGak.js";import"./info-sign-BRaS43hb.js";import"./chevron-up-BO5CjPvB.js";import"./chevron-down-ByBb-_AI.js";import"./useEventCallback-Rp-dYNNH.js";import"./iconLoader-kLHFiiuX.js";import"./Switch-H7akeAdF.js";import"./CompositeRoot-Di_RzIT3.js";import"./TimePicker-DcnU3onz.js";import"./CollapsiblePanel-D3ddVpva.js";import"./error-DqaLhFsi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DErkFYVR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
