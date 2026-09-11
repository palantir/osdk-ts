import{j as t,g as n}from"./iframe-DsGELu4T.js";import{A as r}from"./action-form-DmRlXbaY.js";import"./preload-helper-XA-VDU9h.js";import"./DropdownField-Bar5e3Pn.js";import"./debounce-CTNx07rU.js";import"./useOsdkClient-BHuTNu7Y.js";import"./index-FibZOxqI.js";import"./Input-BiHcxxvv.js";import"./useBaseUiId-Bgw27mqh.js";import"./useControlled-hcbn-QvT.js";import"./index-BAMqZ9uk.js";import"./index-D5CaD6SI.js";import"./PopoverPopup-B8yGkdSD.js";import"./InternalBackdrop-9Qoq3oRQ.js";import"./composite-CRl6169X.js";import"./index-Dn7r5zta.js";import"./getDisabledMountTransitionStyles-iYmZWD6l.js";import"./ToolbarRootContext-rEV65r5F.js";import"./tick-C3wj9HAZ.js";import"./svgIconContainer-CnDXZd3l.js";import"./small-cross-L2Eps0bY.js";import"./search-C-C2z-My.js";import"./cross-oXbqlTg1.js";import"./useValueChanged-CH7RDj0k.js";import"./getPseudoElementBounds-B7n1t-QY.js";import"./CompositeItem-0ZiilmCA.js";import"./makeExternalStore-B1xZJ4O7.js";import"./BaseForm-DFQway2z.js";import"./ActionButton-c8pCj5XE.js";import"./Button-CoSq253i.js";import"./SkeletonBar-CkVB7Otp.js";import"./Tooltip-Cv_DgBwb.js";import"./info-sign-BYkbrPTE.js";import"./chevron-up-sbUmcZSc.js";import"./chevron-down-BZA6QViL.js";import"./useEventCallback-EtST8PvD.js";import"./iconLoader-VPxNGLSd.js";import"./CompositeRoot-D3XGeTiI.js";import"./Switch-BGMx2h0Y.js";import"./TimePicker-DG8EO449.js";import"./CollapsiblePanel-B6Y0ESYf.js";import"./error-CKgv5Cwb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Q1C_QdTj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
