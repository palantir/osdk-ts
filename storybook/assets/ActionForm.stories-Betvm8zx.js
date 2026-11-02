import{j as t,g as n}from"./iframe-BTVc0NfO.js";import{A as r}from"./action-form-cSF664uI.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-MAluBn4S.js";import"./debounce-BLlsJYXr.js";import"./useOsdkClient-DKSqD0Ve.js";import"./index-CHKL9w9V.js";import"./Input-C8rOi6ap.js";import"./useBaseUiId-CZsgbpdM.js";import"./useControlled-CtWOXhfs.js";import"./index-C2BuQfAN.js";import"./index-NKm1JDXX.js";import"./PopoverPopup-iSPlQ-dm.js";import"./InternalBackdrop-qIbZ781e.js";import"./composite-C9Vb183y.js";import"./index-BEIXqWzC.js";import"./getDisabledMountTransitionStyles-CZF91-Uw.js";import"./ToolbarRootContext-BluceK63.js";import"./tick-CJV0pt-z.js";import"./svgIconContainer-CnMTzFv5.js";import"./small-cross-i8OgMQru.js";import"./search-F6eLyO1Y.js";import"./cross-B5VTNSsk.js";import"./useValueChanged-CizP1i5b.js";import"./getPseudoElementBounds-BSVSOuNM.js";import"./CompositeItem-Ccapx6OP.js";import"./makeExternalStore-DQnWSZhz.js";import"./BaseForm-NBIrNqFr.js";import"./ActionButton-Cz4aqbXW.js";import"./Button-wiKLARtU.js";import"./SkeletonBar-C9fEJaD9.js";import"./Tooltip-BcXwlhoB.js";import"./info-sign-S9XOR89i.js";import"./chevron-up-CFoSF6ZV.js";import"./chevron-down-Dp9CmW78.js";import"./useEventCallback-D7W_6xJc.js";import"./iconLoader-EzY3REoG.js";import"./Switch-CSMPEKAp.js";import"./CompositeRoot-D1Q97Q2-.js";import"./TimePicker-BA3VEAkU.js";import"./CollapsiblePanel-Blb2Hulw.js";import"./error-wP2V0esL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-WJQAY5-z.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
