import{j as t,g as n}from"./iframe-CC2ptI8P.js";import{A as r}from"./action-form-DmkiS2Sj.js";import"./preload-helper-DJhSNMV6.js";import"./DropdownField-DH29rfQh.js";import"./debounce-Ba7F9S5L.js";import"./useOsdkClient-CyK88aLW.js";import"./index-84SYJq0E.js";import"./Input-_srjMwb1.js";import"./useBaseUiId-BCidQo4j.js";import"./useControlled-DQuDgCM-.js";import"./index-DamSmk8t.js";import"./index-DyTGXUkB.js";import"./PopoverPopup-DW-tLpwu.js";import"./InternalBackdrop-BYfcK4gR.js";import"./composite-BKy8zjFJ.js";import"./index-EB8pHHv1.js";import"./getDisabledMountTransitionStyles-MYkNe9cm.js";import"./ToolbarRootContext-DJFAvWHQ.js";import"./tick-tjdhehOt.js";import"./svgIconContainer-aq_zJjvF.js";import"./small-cross-BgV8ZaTM.js";import"./search-CUgQ5xTX.js";import"./cross-6eZZZefX.js";import"./useValueChanged-DuD7hXBK.js";import"./getPseudoElementBounds-C_dkJ1tF.js";import"./CompositeItem-CDqASXyT.js";import"./makeExternalStore-LEyTDUuD.js";import"./BaseForm-B6GOr2RZ.js";import"./ActionButton-BYu3NJY8.js";import"./Button-CefAX4Ei.js";import"./SkeletonBar-DyZk7EQt.js";import"./Tooltip-S4cmKOsn.js";import"./info-sign-BZnMbYzm.js";import"./chevron-up-CmV_L84U.js";import"./chevron-down-CoZSOIuk.js";import"./useEventCallback-9nnFNI3V.js";import"./iconLoader-DhehGOTG.js";import"./Switch-lnoR6GVO.js";import"./CompositeRoot-CedMkBE8.js";import"./TimePicker-CI1-NUzk.js";import"./CollapsiblePanel-BWf4fg_T.js";import"./error-CdNmuOhr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-dqavG6zz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
