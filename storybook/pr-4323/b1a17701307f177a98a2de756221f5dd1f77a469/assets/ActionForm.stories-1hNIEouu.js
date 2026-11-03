import{j as t,g as n}from"./iframe--rHM778H.js";import{A as r}from"./action-form-DbUn7wM-.js";import"./preload-helper-DpVBsV2L.js";import"./DropdownField-2stvnYri.js";import"./debounce-CUpiJ6Vz.js";import"./useOsdkClient-CuCdO7SN.js";import"./index-BElFIwyB.js";import"./Input-DqZJVW1Y.js";import"./useBaseUiId-BT7Lgjzv.js";import"./useControlled-BERkl8jy.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./PopoverPopup-DL06cZLQ.js";import"./InternalBackdrop-DHyESATu.js";import"./composite-CaRBo0mp.js";import"./index-CtcclfAS.js";import"./getDisabledMountTransitionStyles-DLn2tUEn.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./tick-Bcv5PjwQ.js";import"./svgIconContainer-CjX9_w9R.js";import"./small-cross-C70aYTmZ.js";import"./search-ZsY-Nyc_.js";import"./cross-CHXgNJax.js";import"./useValueChanged-DvGNLe7a.js";import"./getPseudoElementBounds-e0hNXxT9.js";import"./CompositeItem-5osJRFVq.js";import"./makeExternalStore-CUNRgSrC.js";import"./BaseForm-CKqDKemm.js";import"./ActionButton-DK8p2X8j.js";import"./Button-BOD28ASd.js";import"./SkeletonBar-CS_pei9f.js";import"./Tooltip-DkjIu7bG.js";import"./info-sign-CIESZLDO.js";import"./chevron-up-TTOku_SS.js";import"./chevron-down-BlvURY3l.js";import"./useEventCallback-CtvvOJjW.js";import"./iconLoader-D8DF4X3Q.js";import"./Switch-Cxk0oGr_.js";import"./CompositeRoot-Bvt1bQsi.js";import"./TimePicker-8jdrx51T.js";import"./CollapsiblePanel-BPc-B49G.js";import"./error-CPHhJfnm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWwTgGIe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
