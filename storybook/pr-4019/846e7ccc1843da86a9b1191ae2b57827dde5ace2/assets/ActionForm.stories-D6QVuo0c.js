import{j as t,g as n}from"./iframe-D3RGMnav.js";import{A as r}from"./action-form-DcrQPl9L.js";import"./preload-helper-BklmKIr_.js";import"./DropdownField-DifR4mWz.js";import"./debounce-DCoo-0F-.js";import"./useOsdkClient-B1LUMolX.js";import"./index-nSo8ObpB.js";import"./Input-BD3DYMGR.js";import"./useBaseUiId-BhJo7SoD.js";import"./useControlled-TK_e7a_Y.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./PopoverPopup-CgsNZx-r.js";import"./InternalBackdrop-DNhkpLhR.js";import"./composite-DtZsoZnS.js";import"./index-DkTcI7f6.js";import"./getDisabledMountTransitionStyles-CAL3aepw.js";import"./ToolbarRootContext-DVajx3A6.js";import"./tick-BFwYDZkg.js";import"./svgIconContainer-nHtSwbNR.js";import"./small-cross-I1SXQrv5.js";import"./search-DhStDycO.js";import"./cross-DJMZ2_VJ.js";import"./useValueChanged-BhgPHUED.js";import"./getPseudoElementBounds-BCjf5F4u.js";import"./CompositeItem-Bs8xPD2u.js";import"./makeExternalStore-DkQFuTyA.js";import"./BaseForm-TL9PL6qw.js";import"./ActionButton-LPM2maYQ.js";import"./Button-DybLmK6C.js";import"./SkeletonBar--V7bY1Hg.js";import"./Tooltip-xT35MYb5.js";import"./info-sign-DRNxFns6.js";import"./chevron-up-ghPT0Arp.js";import"./chevron-down-Cq6RCzUz.js";import"./useEventCallback-Bb_RfLNl.js";import"./iconLoader-Bqf4A9rA.js";import"./CompositeRoot-BTjrXehH.js";import"./Switch-DhnSiPZx.js";import"./TimePicker-Cmp-mUZr.js";import"./CollapsiblePanel-B5YKTTfg.js";import"./error-BtBmESuY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-q9Ci7M-s.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
