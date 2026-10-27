import{j as t,g as n}from"./iframe-C4dizZ36.js";import{A as r}from"./action-form-CqWYm10p.js";import"./preload-helper-yVPvR8z3.js";import"./DropdownField-BfEb6RcP.js";import"./debounce-DpNok1rz.js";import"./useOsdkClient-DYefkPsN.js";import"./index-CFT7unnD.js";import"./Input-DPBssrp3.js";import"./useBaseUiId-k_5E4sc5.js";import"./useControlled-CUKEEG6I.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./PopoverPopup-DjEzPR4r.js";import"./InternalBackdrop-ConLyfAg.js";import"./composite-BKXJ61hE.js";import"./index-B0IHZgxT.js";import"./getDisabledMountTransitionStyles-DSExnO14.js";import"./ToolbarRootContext-cilGYW-z.js";import"./tick-9qx9fXAT.js";import"./svgIconContainer-DfcgCVjr.js";import"./small-cross-yc2rW1h-.js";import"./search-D-SP9Yj6.js";import"./cross-drbNV1T7.js";import"./useValueChanged-DCy4_NVv.js";import"./getPseudoElementBounds-BTkeKk10.js";import"./CompositeItem-Deat6XJ7.js";import"./makeExternalStore-BsFJZbFX.js";import"./BaseForm-Ds1qMFgv.js";import"./ActionButton-CrXRFnK7.js";import"./Button-B3WKdDfx.js";import"./SkeletonBar-Dt_A_Oo6.js";import"./Tooltip-CcaOWhED.js";import"./info-sign-zI3FDbX2.js";import"./chevron-up-1nGzqBay.js";import"./chevron-down-B_DWNPfU.js";import"./useEventCallback-BEbBXTDA.js";import"./iconLoader-miDpQhLH.js";import"./Switch-_tpgfZnR.js";import"./CompositeRoot-Ca7fO5C3.js";import"./TimePicker-CWWZfhKZ.js";import"./CollapsiblePanel-TS6XPwGw.js";import"./error-j1AChp6N.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CrG5BOev.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
