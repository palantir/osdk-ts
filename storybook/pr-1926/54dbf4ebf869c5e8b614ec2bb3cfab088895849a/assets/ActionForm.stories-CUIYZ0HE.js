import{j as t,g as n}from"./iframe-BwOWKgX_.js";import{A as r}from"./action-form-3uxEgboM.js";import"./preload-helper-CPR62PUH.js";import"./DropdownField-_qdVV4Xj.js";import"./debounce-CszU7kTQ.js";import"./useOsdkClient-C11OYUU2.js";import"./index-Cy1m0zFQ.js";import"./Input-C4nObfin.js";import"./useBaseUiId-CC40NyPk.js";import"./useControlled-DtkYswSw.js";import"./index-QbVRyvTG.js";import"./index-Br-OMOFz.js";import"./PopoverPopup-BaDiWd_V.js";import"./InternalBackdrop-B9JpRZ3R.js";import"./composite-5HVBLMjf.js";import"./index-BVlZlI2O.js";import"./getDisabledMountTransitionStyles-B_SgiG18.js";import"./ToolbarRootContext-NPZeJvMR.js";import"./tick-CkNrFL8X.js";import"./svgIconContainer-BN-frImW.js";import"./small-cross-BlP1jvir.js";import"./search-veFLhVSL.js";import"./cross-CCQqgwU7.js";import"./useValueChanged-C1Mc10OI.js";import"./getPseudoElementBounds-Bb0h12GR.js";import"./CompositeItem-yrOlfAbz.js";import"./makeExternalStore-CfZpatI5.js";import"./BaseForm-eRfNV7LN.js";import"./ActionButton-DkAR9cLt.js";import"./Button-DB73z_31.js";import"./SkeletonBar-Dc2AA-f6.js";import"./Tooltip-BE9jXJb8.js";import"./info-sign-CufW8OsE.js";import"./chevron-up-CJuep9KV.js";import"./chevron-down-C0sr0dH5.js";import"./useEventCallback-DrINjghl.js";import"./iconLoader-CBZbMVtO.js";import"./Switch-DdsTYSsE.js";import"./CompositeRoot-Dzlizevj.js";import"./TimePicker-DJRZfI6r.js";import"./CollapsiblePanel-BudykPig.js";import"./error-CH6xRFVZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B3eY7UZj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
