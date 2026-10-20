import{j as t,g as n}from"./iframe-DTW0zbJg.js";import{A as r}from"./action-form-CFmYcAzb.js";import"./preload-helper-CHqtrcoH.js";import"./DropdownField-BUpFr6O7.js";import"./debounce-AmCXqNPb.js";import"./useOsdkClient-BE_aYXwA.js";import"./index-C19Cbd9w.js";import"./Input-9Y-Iasoe.js";import"./useBaseUiId-pXEfVnMq.js";import"./useControlled-B9BNpkGu.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./PopoverPopup-BhSRrebE.js";import"./InternalBackdrop-4VqQwQv1.js";import"./composite-Ch_TQxW6.js";import"./index-5qBmfdlD.js";import"./getDisabledMountTransitionStyles-BbG3pxx_.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./tick-CoEPOCTW.js";import"./svgIconContainer-C_NUwc74.js";import"./small-cross-Bf21DHmz.js";import"./search-DeSIHMGj.js";import"./cross-DUPbOXnx.js";import"./useValueChanged-Cbl0UOUH.js";import"./getPseudoElementBounds-9ob2YQd8.js";import"./CompositeItem-B8f4EvZj.js";import"./makeExternalStore-Cd_b6BPY.js";import"./BaseForm-Bj4bA-GE.js";import"./ActionButton-BmVlmB5r.js";import"./Button-Bl_fb9NZ.js";import"./SkeletonBar-CDOQsslB.js";import"./Tooltip-zKVmMRSO.js";import"./info-sign-DHGiKuGn.js";import"./chevron-up-By6wdVuW.js";import"./chevron-down-B_r9FktR.js";import"./useEventCallback-cQNzf77G.js";import"./iconLoader-ZtaDfCdj.js";import"./Switch-A38EPwWs.js";import"./CompositeRoot-CdTRmNxi.js";import"./TimePicker-CDpO8aHD.js";import"./CollapsiblePanel-Cd-HUXxd.js";import"./error-DehDfWea.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BhopaHNu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
