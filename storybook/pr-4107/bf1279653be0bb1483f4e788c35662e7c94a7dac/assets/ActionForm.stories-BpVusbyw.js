import{j as t,g as n}from"./iframe-BBbz1AL9.js";import{A as r}from"./action-form-B9z-R4RL.js";import"./preload-helper-LktJP5uP.js";import"./DropdownField-ye8n36Ni.js";import"./debounce-BrRPn5q2.js";import"./useOsdkClient-CWYpxt6E.js";import"./index-BOgOZGVm.js";import"./Input-DMWAeir1.js";import"./useBaseUiId-D4UJyJ9J.js";import"./useControlled-BAncaeLN.js";import"./index-CA8g9ho5.js";import"./index-Db4moevd.js";import"./PopoverPopup-dMiMS_iS.js";import"./InternalBackdrop-CJ0Y8Kog.js";import"./composite-MiODqQmu.js";import"./index-D3NdQmE7.js";import"./getDisabledMountTransitionStyles-Md2PJyBx.js";import"./ToolbarRootContext-CDIUf1p8.js";import"./tick-DzipYJGn.js";import"./svgIconContainer-DFesH5dO.js";import"./small-cross-JgZQe-XJ.js";import"./search-DnvQFbf5.js";import"./cross-D2ow8c2-.js";import"./useValueChanged-CwyCbx99.js";import"./getPseudoElementBounds-OF4rLga5.js";import"./CompositeItem-DV0DAQDv.js";import"./makeExternalStore-D3rO5u3I.js";import"./BaseForm-BoC1X26S.js";import"./ActionButton-eGdQnCQC.js";import"./Button-DI71fvab.js";import"./SkeletonBar-EV7-VIf-.js";import"./Tooltip-VoV22dJs.js";import"./info-sign-CAMYZdld.js";import"./chevron-up-BDwyfSZq.js";import"./chevron-down-DxqKQR7L.js";import"./useEventCallback-H5LWbmVP.js";import"./iconLoader-C5q-b1MH.js";import"./Switch-FXYEarPU.js";import"./CompositeRoot-2jUXapro.js";import"./TimePicker-CY8un7XO.js";import"./CollapsiblePanel-Dr5UHTv0.js";import"./error-BG3KjKN_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tTo2SGpZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
