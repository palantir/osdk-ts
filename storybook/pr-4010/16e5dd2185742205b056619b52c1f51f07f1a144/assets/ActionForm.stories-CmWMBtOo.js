import{j as t,g as n}from"./iframe-OLZMb4D5.js";import{A as r}from"./action-form-DjZCB2Oh.js";import"./preload-helper-RKY21aDn.js";import"./DropdownField-DsSXPUWR.js";import"./debounce-CJrA9wux.js";import"./useOsdkClient-pPuF8Xca.js";import"./index-uqrBuBmm.js";import"./Input-CNxC7OWq.js";import"./useBaseUiId-PcdFyC4z.js";import"./useControlled-D50eYvCK.js";import"./index-9pMWT7G3.js";import"./index-DzOZG8PU.js";import"./PopoverPopup-C66q4O0T.js";import"./InternalBackdrop-DPnwzQoA.js";import"./composite-ccxieFdd.js";import"./index-D9aYyFSG.js";import"./getDisabledMountTransitionStyles-Dp3MlQN6.js";import"./ToolbarRootContext-DulRS7Xf.js";import"./tick-Cof-csWx.js";import"./svgIconContainer-UQoXiqqi.js";import"./small-cross-DlQAt_1X.js";import"./search-DZcjiMHC.js";import"./cross-C6sWsdCt.js";import"./useValueChanged-DTUEgWiI.js";import"./getPseudoElementBounds-Dd9XPosA.js";import"./CompositeItem-DUyVPGMH.js";import"./makeExternalStore-BBNFskLs.js";import"./BaseForm-l78VOia0.js";import"./ActionButton-Dr-SMGaZ.js";import"./Button-CVZ672ZX.js";import"./SkeletonBar-UJ2KeehE.js";import"./Tooltip-D_ARL5hn.js";import"./info-sign-ETXBuOII.js";import"./chevron-up-DVCgUK4I.js";import"./chevron-down-CIukKbVS.js";import"./useEventCallback-Clkkc761.js";import"./iconLoader-BUGsAiTx.js";import"./CompositeRoot-BpRohMBH.js";import"./Switch-Pjd_gJNn.js";import"./TimePicker-ClEBwtAm.js";import"./CollapsiblePanel-CilVibKg.js";import"./error-CeyqzC3E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B3WIkRHJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
