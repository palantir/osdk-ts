import{j as t,g as n}from"./iframe-CWNCqF8m.js";import{A as r}from"./action-form-CMMTJNCp.js";import"./preload-helper-CP42LvtG.js";import"./DropdownField-DDTkuItE.js";import"./debounce-BZ-57v4W.js";import"./useOsdkClient-GAIR_yvP.js";import"./index-C_BFGzEW.js";import"./Input-CnULVynl.js";import"./useBaseUiId-Cbti5FZV.js";import"./useControlled-COgqWOOu.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./PopoverPopup-D4_ZYeYA.js";import"./InternalBackdrop-C7lR6q4Y.js";import"./composite-Bv2UjceH.js";import"./index-BZ2HMWSK.js";import"./getDisabledMountTransitionStyles-Jk0dBvhz.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./tick-DYdyuQqX.js";import"./svgIconContainer-BD1yvJod.js";import"./small-cross-0qXddkOp.js";import"./search-D8ew1nZH.js";import"./cross-Gf4Gi1Zs.js";import"./useValueChanged-Bd1tAroA.js";import"./getPseudoElementBounds-CGw_wpw2.js";import"./CompositeItem-Bb-U7Uoq.js";import"./makeExternalStore-CJVHwj3d.js";import"./BaseForm-B2iYN25Z.js";import"./ActionButton-CN25wp6X.js";import"./Button-DyTPsUeB.js";import"./SkeletonBar-qv53td8s.js";import"./Tooltip-BDpg5RtK.js";import"./info-sign-OhAoPSDc.js";import"./chevron-up-B-9EQSwW.js";import"./chevron-down-CKxmHC3q.js";import"./useEventCallback-DBGM7t4z.js";import"./iconLoader-DpReBLJc.js";import"./Switch-GbR_Xnj2.js";import"./CompositeRoot-BUFS30GS.js";import"./TimePicker-BIBnZbp1.js";import"./CollapsiblePanel-Djn_6tzS.js";import"./error-BFVZCDZ0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C-RUZtQv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
