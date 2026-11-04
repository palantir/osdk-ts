import{j as t,g as n}from"./iframe-DSFJZDbB.js";import{A as r}from"./action-form-DcQ-vaxZ.js";import"./preload-helper-BXZsHDRp.js";import"./DropdownField-DYg7EKof.js";import"./debounce-BHFyCnbQ.js";import"./useOsdkClient-wklcT--g.js";import"./index-7paxFDvD.js";import"./Input-PKRWZfPT.js";import"./useBaseUiId-c3zUK5X5.js";import"./useControlled-C2eq60VR.js";import"./index-DZNGA6d-.js";import"./index-D6ZHe2_A.js";import"./PopoverPopup-CfSBk3Qn.js";import"./InternalBackdrop-DdORp9Q9.js";import"./composite-DxVQtdWX.js";import"./index-CAeppKO1.js";import"./getDisabledMountTransitionStyles-CwpF8ZPZ.js";import"./ToolbarRootContext-jXB37hMy.js";import"./tick-6JyAUDtT.js";import"./svgIconContainer-RNVtlkjd.js";import"./small-cross-B1kb7b-t.js";import"./search-CoFzowK4.js";import"./cross-BB9CVc-Q.js";import"./useValueChanged-b7YKzV-e.js";import"./getPseudoElementBounds-BWVx--r2.js";import"./CompositeItem-Dz7MzIvk.js";import"./makeExternalStore-CLq3a0rV.js";import"./BaseForm-D3mqPSkt.js";import"./ActionButton-kgYnBNqq.js";import"./Button-DQPbKfHN.js";import"./SkeletonBar-DQiEZV8C.js";import"./Tooltip-DWE64HaZ.js";import"./info-sign-BETyaglP.js";import"./chevron-up-hNV0beo3.js";import"./chevron-down-VJT3Mdig.js";import"./useEventCallback-DTCuInat.js";import"./iconLoader-BuVEHp8Q.js";import"./Switch-CbirDXNS.js";import"./CompositeRoot-CYwXzK9W.js";import"./TimePicker-DKHHhKhI.js";import"./CollapsiblePanel-DdKqq7dp.js";import"./error-uQwZC4G-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BTLO2asc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
