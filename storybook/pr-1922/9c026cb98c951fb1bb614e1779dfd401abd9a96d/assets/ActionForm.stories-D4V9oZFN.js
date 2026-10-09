import{j as t,g as n}from"./iframe-DX-l5oxf.js";import{A as r}from"./action-form-DLgTsB5o.js";import"./preload-helper-BOWhuEYI.js";import"./DropdownField-BbcYs9HM.js";import"./debounce-C3gGtxAY.js";import"./useOsdkClient-PSxxWjKh.js";import"./index-hUdVkOSF.js";import"./Input-CqfuiCDH.js";import"./useBaseUiId-BTelihs1.js";import"./useControlled-CE0B1UP9.js";import"./index-CvzBQu91.js";import"./index-DKU9qBjC.js";import"./PopoverPopup-D_QYRjKS.js";import"./InternalBackdrop-DD9gAX9c.js";import"./composite-DHW7DpWZ.js";import"./index-BDesfFDk.js";import"./getDisabledMountTransitionStyles-CoQlRch0.js";import"./ToolbarRootContext-PE3H7k4f.js";import"./tick-B4vi0CcG.js";import"./svgIconContainer-DSaf8hGr.js";import"./small-cross-uN8t5TW7.js";import"./search-DT7eSnzT.js";import"./cross-DToDNxNQ.js";import"./useValueChanged-Daouhnb_.js";import"./getPseudoElementBounds-Ifrg8lN5.js";import"./CompositeItem-BsouXCK9.js";import"./makeExternalStore-Djn3Ds7r.js";import"./BaseForm-y3_dCT3a.js";import"./ActionButton-C9oV7lmY.js";import"./Button-Bia0gDW5.js";import"./SkeletonBar-Dxx28Vqn.js";import"./Tooltip-DVY46vFo.js";import"./info-sign-DFUEB2QV.js";import"./chevron-up-H_CuS6sk.js";import"./chevron-down-D6qpfBFJ.js";import"./useEventCallback-lUzYahFI.js";import"./iconLoader-M3nMs9GH.js";import"./Switch-DqkSIsI-.js";import"./CompositeRoot-DcsvZKv9.js";import"./TimePicker-BJlTioUQ.js";import"./CollapsiblePanel-BHApUmp_.js";import"./error-BJoLJTeb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEq0VNPe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
