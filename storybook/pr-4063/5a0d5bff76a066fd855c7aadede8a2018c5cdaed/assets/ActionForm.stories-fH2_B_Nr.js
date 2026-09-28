import{j as t,g as n}from"./iframe-BtV5Bfbi.js";import{A as r}from"./action-form-CYPVtzi2.js";import"./preload-helper-BaD02CxS.js";import"./DropdownField-BC7NVBoz.js";import"./debounce-BqJT0k2X.js";import"./useOsdkClient-CpnotctQ.js";import"./index-DAzHyxws.js";import"./Input-C3DTMAEb.js";import"./useBaseUiId-BC3a2pkv.js";import"./useControlled-DlTCUtzh.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./PopoverPopup-BWHAgMN7.js";import"./InternalBackdrop-B_jFUajW.js";import"./composite-C3xTmSSO.js";import"./index-C0jKnzN3.js";import"./getDisabledMountTransitionStyles-BU2CuFg5.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./tick-DOCZRs2u.js";import"./svgIconContainer-CFzNfVqM.js";import"./small-cross-DPjobAyw.js";import"./search-mBeXzQE2.js";import"./cross-BHH5GCet.js";import"./useValueChanged-CHWZQbm_.js";import"./getPseudoElementBounds-UM2c8Uko.js";import"./CompositeItem-Byxrj2vM.js";import"./makeExternalStore-1ZTuUud2.js";import"./BaseForm-6GmzTW4i.js";import"./ActionButton-BlgkxXyS.js";import"./Button-CysZ3JPI.js";import"./SkeletonBar-B4vnzvdw.js";import"./Tooltip-D8NuVw6n.js";import"./info-sign-lUqieD5M.js";import"./chevron-up-Dr62dO2v.js";import"./chevron-down-CdxAFrGc.js";import"./useEventCallback-ebp9vHiV.js";import"./iconLoader-i6xSwWJr.js";import"./Switch-9awnr9jy.js";import"./CompositeRoot-Bz64cv1t.js";import"./TimePicker-z777eXNO.js";import"./CollapsiblePanel-CD3W91SM.js";import"./error-h7XYysQz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jSZ_Ki0a.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
