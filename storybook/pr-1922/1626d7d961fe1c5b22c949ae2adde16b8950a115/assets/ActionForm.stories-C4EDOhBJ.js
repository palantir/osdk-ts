import{j as t,g as n}from"./iframe-CxT5Jan_.js";import{A as r}from"./action-form-CR9_Qu6W.js";import"./preload-helper-B2aJWYzQ.js";import"./DropdownField-j_jVFNln.js";import"./debounce-BM3c7HzB.js";import"./useOsdkClient-BdjKd_qM.js";import"./index-Dtz5PgLF.js";import"./Input-uXNf_zLb.js";import"./useBaseUiId-B-OQdXnZ.js";import"./useControlled-HfGVJvVO.js";import"./index-DMUTvrAf.js";import"./index-odz-bzs8.js";import"./PopoverPopup-BEr_vAbM.js";import"./InternalBackdrop-BNvBplbQ.js";import"./composite-DGmZ6kEt.js";import"./index-VTk_L-CK.js";import"./getDisabledMountTransitionStyles-BDF0Bffw.js";import"./ToolbarRootContext-BXaU4Z9h.js";import"./tick-B08JakEq.js";import"./svgIconContainer-hCqCvGhu.js";import"./small-cross-DOBtvqtk.js";import"./search-CDYNfwYQ.js";import"./cross-CN6xf_dQ.js";import"./useValueChanged-B-mq1KuU.js";import"./getPseudoElementBounds-WZiK9BcL.js";import"./CompositeItem-DLM-dgwp.js";import"./makeExternalStore-z4BPzaiv.js";import"./BaseForm-CYds-DKX.js";import"./ActionButton-Drinm68p.js";import"./Button-g3dA2T-X.js";import"./SkeletonBar-DO5a1Cj6.js";import"./Tooltip-BCH3arb9.js";import"./info-sign-BfrjET3W.js";import"./chevron-up-DSPUQjSQ.js";import"./chevron-down-CJ808Qtk.js";import"./useEventCallback-DJgEXQnv.js";import"./iconLoader-CgL0Lpc-.js";import"./Switch-DhfpXXMW.js";import"./CompositeRoot-C4Oy7lR0.js";import"./TimePicker-4qmfkAy-.js";import"./CollapsiblePanel-CS3WD6U4.js";import"./error-ABOYqx1m.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dv_WEx2y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
