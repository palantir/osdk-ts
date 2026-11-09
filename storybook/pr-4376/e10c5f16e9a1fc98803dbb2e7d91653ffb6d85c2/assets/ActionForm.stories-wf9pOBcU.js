import{j as t,g as n}from"./iframe-tk5AUZuQ.js";import{A as r}from"./action-form-DnczKr3G.js";import"./preload-helper-CINJU3SU.js";import"./DropdownField-Dsmc1z3i.js";import"./debounce-Cf1xBobb.js";import"./useOsdkClient-B-_8O7Wa.js";import"./index-DuoNBOcE.js";import"./Input-CZRpfSVM.js";import"./useBaseUiId-DSKlezyU.js";import"./useControlled-BzYqp0YL.js";import"./index-BoTbZ6Eb.js";import"./index-BCbjIOTn.js";import"./isObject-Bt_3d07L.js";import"./InternalBackdrop-B1AcuPvD.js";import"./composite-LaLb1mLt.js";import"./index-Coh0vjFh.js";import"./getDisabledMountTransitionStyles-DcBMmwJ-.js";import"./ToolbarRootContext-C3aNx3mE.js";import"./tick-BxfSV4pS.js";import"./svgIconContainer-C5eLdvbo.js";import"./small-cross-B6tNLRU3.js";import"./search-CAMWt4DD.js";import"./cross-C-_HClWz.js";import"./useValueChanged-Qi24qjjR.js";import"./getPseudoElementBounds-C8QTD5NE.js";import"./CompositeItem-CQdT7qYH.js";import"./makeExternalStore-DFFv7LCN.js";import"./BaseForm-MfQ_GRi9.js";import"./ActionButton-CSRDKJzd.js";import"./Button-B5FtVpF4.js";import"./SkeletonBar-YPfduG_R.js";import"./Tooltip-_BU6PSEL.js";import"./info-sign-CMXgRwo6.js";import"./chevron-up-CKyl3VcN.js";import"./chevron-down-D4rOKL_0.js";import"./useEventCallback-BbRxqcyb.js";import"./iconLoader-DgNLGvp4.js";import"./Switch-Dk_j-BFv.js";import"./CompositeRoot-BGFQLHW0.js";import"./TimePicker-IO--57LV.js";import"./CollapsiblePanel-BgTDE-ug.js";import"./error-CfTX2H1b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-4LSmwfdk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
