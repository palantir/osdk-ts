import{j as t,g as n}from"./iframe-DRBbLQEP.js";import{A as r}from"./action-form-DIXuTxNj.js";import"./preload-helper-Bt1-OzgM.js";import"./DropdownField-Dwy3SrHP.js";import"./debounce-F863pl25.js";import"./useOsdkClient-4YE_Fd5v.js";import"./index-DKGchVF5.js";import"./Input-DCqgylfG.js";import"./useBaseUiId-0Fcyn-Yx.js";import"./useControlled-D-0ahwbd.js";import"./index-6P3gaHhW.js";import"./index-DRFL7mOG.js";import"./PopoverPopup-BNl-xY3a.js";import"./InternalBackdrop-TfRvWb5r.js";import"./composite-BQ1GsMvw.js";import"./index-BXLTNv1i.js";import"./getDisabledMountTransitionStyles-CRFpWsUL.js";import"./ToolbarRootContext-Dq5VhD1u.js";import"./tick-N613LFVJ.js";import"./svgIconContainer-DUoraq0-.js";import"./small-cross-Qpn-pdOm.js";import"./search-DM25wUgq.js";import"./cross-CUrCvhqT.js";import"./useValueChanged-B9a9bBNB.js";import"./getPseudoElementBounds-CEq_ua0q.js";import"./CompositeItem-DHU6LUkY.js";import"./makeExternalStore-DUU8gKNu.js";import"./BaseForm-BuWL1LE1.js";import"./ActionButton-xScfZGhC.js";import"./Button-YsHjEWcc.js";import"./SkeletonBar-CkkbWTlQ.js";import"./Tooltip-BokzoO6e.js";import"./info-sign-pr70YbO9.js";import"./chevron-up-MpGDbAku.js";import"./chevron-down-D9sfivXL.js";import"./useEventCallback-D23WH7I3.js";import"./iconLoader-C8gJ9Du9.js";import"./Switch-DBYjJyjC.js";import"./CompositeRoot-B4P7Z91p.js";import"./TimePicker-CzoUtPkM.js";import"./CollapsiblePanel-CfADBTSn.js";import"./error-Bly5Bi76.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BqMyyD8f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
