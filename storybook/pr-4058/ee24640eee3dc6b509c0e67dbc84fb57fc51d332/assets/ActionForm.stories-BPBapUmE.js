import{j as t,g as n}from"./iframe-Ee2tiFng.js";import{A as r}from"./action-form-DZiMoWc8.js";import"./preload-helper-CtRzgCKY.js";import"./DropdownField-Cn7UYlie.js";import"./debounce-mCmNNuAo.js";import"./useOsdkClient-B-Ywo9RD.js";import"./index-BycdD30l.js";import"./Input-QNUgM8xD.js";import"./useBaseUiId-Be0iYuTZ.js";import"./useControlled-BncLGICw.js";import"./index-JJBCSCXl.js";import"./index-BedpPbbM.js";import"./PopoverPopup-DQm-H_D6.js";import"./InternalBackdrop-CVHBMFpq.js";import"./composite-DV6J8ilo.js";import"./index-Dk4tKx0P.js";import"./getDisabledMountTransitionStyles-BMpNISPy.js";import"./ToolbarRootContext-DJCzTPIr.js";import"./tick-vr1mqfrV.js";import"./svgIconContainer-DBeRHNA7.js";import"./small-cross-DuTxQXWE.js";import"./search-CiSU3HM-.js";import"./cross-Brhn2tbY.js";import"./useValueChanged-PsyQRqEw.js";import"./getPseudoElementBounds-BmhfqGEc.js";import"./CompositeItem-CLuGmXNA.js";import"./makeExternalStore-BrNx43tP.js";import"./BaseForm-lRKeAxRR.js";import"./ActionButton-CxqAcUWU.js";import"./Button-CwIbjmyl.js";import"./SkeletonBar-DHXhmo2J.js";import"./Tooltip-B-8atzAY.js";import"./info-sign-BZ0ILT2f.js";import"./chevron-up-abKIDFMi.js";import"./chevron-down-CvL73yqq.js";import"./useEventCallback-BNXOMRrJ.js";import"./iconLoader-BvAZ3bcW.js";import"./Switch-CxkzvTYj.js";import"./CompositeRoot-BAu7qMLr.js";import"./TimePicker-DLzTD1GB.js";import"./CollapsiblePanel-BuxKyO81.js";import"./error-DM4M2_Dk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D0H1MUTi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
