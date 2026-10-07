import{j as t,g as n}from"./iframe-Dc7sxM32.js";import{A as r}from"./action-form-mxuLmAnY.js";import"./preload-helper-CM7tzFvC.js";import"./DropdownField-DjNhNazw.js";import"./debounce-BCcRr2wZ.js";import"./useOsdkClient-DqACciKT.js";import"./index-IZwYZumw.js";import"./Input-C0cMc9zy.js";import"./useBaseUiId-CH01Yaez.js";import"./useControlled-CAz0cW4V.js";import"./index-BWWceLi5.js";import"./index-BPTBY4qT.js";import"./PopoverPopup-CDeJDWbE.js";import"./InternalBackdrop-CdgMX2OS.js";import"./composite-BoHCITiY.js";import"./index-7jp2fSwL.js";import"./getDisabledMountTransitionStyles-CeArVJQO.js";import"./ToolbarRootContext-DVEPWNiK.js";import"./tick-C0UHVHiV.js";import"./svgIconContainer-C-2lOjfc.js";import"./small-cross-BtHf4A8K.js";import"./search-CtqsOWX2.js";import"./cross-DB407VGu.js";import"./useValueChanged-LFwat5aB.js";import"./getPseudoElementBounds-BvdzEwkz.js";import"./CompositeItem-hDzKKSGM.js";import"./makeExternalStore-CKmXRF_o.js";import"./BaseForm-BcUSnYfM.js";import"./ActionButton-7gTODAoI.js";import"./Button-D0LwqFFz.js";import"./SkeletonBar-CQMTmIpY.js";import"./Tooltip-Ce7TXbJ9.js";import"./info-sign-CXvrBUO2.js";import"./chevron-up-8ie03w_1.js";import"./chevron-down-BlnQ68Oi.js";import"./useEventCallback-D6HBkFfp.js";import"./iconLoader-PnKNjOvQ.js";import"./Switch-B_y8W2HT.js";import"./CompositeRoot-CnsYnMkz.js";import"./TimePicker-1yyf8HSz.js";import"./CollapsiblePanel-CHgHDq3b.js";import"./error-ritcfIW_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CI_RMXn8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
