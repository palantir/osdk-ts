import{j as t,g as n}from"./iframe-DFY8VJiA.js";import{A as r}from"./action-form-DFOhPdJS.js";import"./preload-helper-DYQPoB0a.js";import"./DropdownField-C-2cnHee.js";import"./debounce-UmgWFeKf.js";import"./useOsdkClient-BM_GsjtL.js";import"./index-Cyh0BAGo.js";import"./Input-ZKaLnGto.js";import"./useBaseUiId-munBw4hb.js";import"./useControlled-DlDk3rjW.js";import"./index-CFOVWCD1.js";import"./index-DkOv0cie.js";import"./PopoverPopup-CR5gUu4I.js";import"./InternalBackdrop-CDbJypH3.js";import"./composite-DERqHqf8.js";import"./index-1rFIUwlz.js";import"./getDisabledMountTransitionStyles-DDDCI_7I.js";import"./ToolbarRootContext-C-PsSYTx.js";import"./tick-CbAy2oWE.js";import"./svgIconContainer-BC0JvcAN.js";import"./small-cross-9So2KQCe.js";import"./search-DmLazW2P.js";import"./cross-DhwePusw.js";import"./useValueChanged-BzxLxRS9.js";import"./getPseudoElementBounds-jNlhs2VS.js";import"./CompositeItem-DHHY_NUU.js";import"./makeExternalStore-Beeee7G7.js";import"./BaseForm-JvaNtZna.js";import"./ActionButton-CIEBqQXT.js";import"./Button-Dd-6Wm_t.js";import"./SkeletonBar-S-OgC9v2.js";import"./Tooltip-CDkwFccO.js";import"./info-sign-DCM36BMA.js";import"./chevron-up-CNM2w3h5.js";import"./chevron-down-C0e9hGKt.js";import"./useEventCallback-rvfsLwbm.js";import"./iconLoader-DUYTJjR3.js";import"./Switch-Bg7TIMHl.js";import"./CompositeRoot-BIdCaiM_.js";import"./TimePicker-CKXDKvUe.js";import"./CollapsiblePanel-DTjhJsLZ.js";import"./error-RuEwtCs3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-US1iMNLV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
