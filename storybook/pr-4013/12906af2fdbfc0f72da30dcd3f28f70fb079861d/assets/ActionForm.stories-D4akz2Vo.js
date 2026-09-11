import{j as t,g as n}from"./iframe-CmbQZ_H0.js";import{A as r}from"./action-form-D9GoM6UJ.js";import"./preload-helper-Ecu5FnuN.js";import"./DropdownField-B46cTE2Y.js";import"./debounce-CqRFkPfJ.js";import"./useOsdkClient-xLtiSbvO.js";import"./index-QKQySa8F.js";import"./Input-B5NiOwJX.js";import"./useBaseUiId-M00ioKA7.js";import"./useControlled-CF22MFs5.js";import"./index-DlNrqWid.js";import"./index-CnDEnPo5.js";import"./PopoverPopup-Do5Thirt.js";import"./InternalBackdrop-CpiUjw4e.js";import"./composite-Cb2is0DJ.js";import"./index-DCPZZ569.js";import"./getDisabledMountTransitionStyles-nKH94PKf.js";import"./ToolbarRootContext-B1xhX1z_.js";import"./tick-C2UWJ6pc.js";import"./svgIconContainer-CUFAWoTA.js";import"./small-cross-BIkNXmJL.js";import"./search-CVqyjRk8.js";import"./cross-6T8h1X1A.js";import"./useValueChanged-sq-Bi9MD.js";import"./getPseudoElementBounds-1u2TW9bY.js";import"./CompositeItem-ByYHjWLD.js";import"./makeExternalStore-BB3Iwwej.js";import"./BaseForm-CGfJi_-O.js";import"./ActionButton-BK-luMEu.js";import"./Button-CDF-lBwk.js";import"./SkeletonBar-BXbXBzB8.js";import"./Tooltip-DwJa0Vj6.js";import"./info-sign-D7_35vvU.js";import"./chevron-up-DJsx5Vpk.js";import"./chevron-down-BhlVnWsI.js";import"./useEventCallback-DpC9eqeR.js";import"./iconLoader-17_fHyNr.js";import"./CompositeRoot-DAnOUuwB.js";import"./Switch-DaFcOSy1.js";import"./TimePicker-RhqtkjBM.js";import"./CollapsiblePanel-COC1FjJY.js";import"./error-Beqgpujq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DoacziBi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
