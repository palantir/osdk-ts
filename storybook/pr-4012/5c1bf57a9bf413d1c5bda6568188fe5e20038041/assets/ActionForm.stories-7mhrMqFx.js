import{j as t,g as n}from"./iframe-Szo9Zkn-.js";import{A as r}from"./action-form-DHlZkF6m.js";import"./preload-helper-Dhbsewg0.js";import"./DropdownField-DLes8wgB.js";import"./debounce-Dy82AU_7.js";import"./useOsdkClient-BATbP90A.js";import"./index-w7MyO4j0.js";import"./Input-CZ0TTU7d.js";import"./useBaseUiId-sDWiAP1v.js";import"./useControlled-eHJHqQYa.js";import"./index-BaSJaIuK.js";import"./index-BZZ6jb1f.js";import"./PopoverPopup-DkhCYwO7.js";import"./InternalBackdrop--YqpQigY.js";import"./composite-BNkcDv4u.js";import"./index-BObVAdZh.js";import"./getDisabledMountTransitionStyles-BdfTLDtY.js";import"./ToolbarRootContext-Bfqc1Rf4.js";import"./tick-DFIcijiQ.js";import"./svgIconContainer-CC53kbHO.js";import"./small-cross-BHZFoiT4.js";import"./search-BfldJRDn.js";import"./cross-Bg9KGljm.js";import"./useValueChanged-DGZyaree.js";import"./getPseudoElementBounds-CTJEQtrc.js";import"./CompositeItem-BHJmqDb8.js";import"./makeExternalStore-C62oCblT.js";import"./BaseForm-DBC76m17.js";import"./ActionButton-2gMpYRX6.js";import"./Button-CEu9_vPj.js";import"./SkeletonBar-BgMTxHDr.js";import"./Tooltip-_z1tCu5W.js";import"./info-sign-Cm2WhOlI.js";import"./chevron-up-DMkim50r.js";import"./chevron-down-B2_IYtaL.js";import"./useEventCallback-CnaPuMH4.js";import"./iconLoader-DlL6zsf2.js";import"./CompositeRoot-XsUo5U8Y.js";import"./Switch-NN47Aaq7.js";import"./TimePicker-D-r7xIwO.js";import"./CollapsiblePanel-BGMdvSg-.js";import"./error-3jlDe3tK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DNdzNBP7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
