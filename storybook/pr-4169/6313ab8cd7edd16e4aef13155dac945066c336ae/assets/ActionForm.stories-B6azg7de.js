import{j as t,g as n}from"./iframe-Cwq9LQgh.js";import{A as r}from"./action-form-D2uOsGuq.js";import"./preload-helper-BwR6Pfp9.js";import"./DropdownField-pOrv2Wux.js";import"./debounce-VeRvPs6A.js";import"./useOsdkClient-CYpWzT_O.js";import"./index-CtMIqXL_.js";import"./Input-COyT4omE.js";import"./useBaseUiId-D-o9ssMY.js";import"./useControlled-BO63cc37.js";import"./index-DWCgAU1r.js";import"./index-BEyE-4n9.js";import"./PopoverPopup-CiWAYdx8.js";import"./InternalBackdrop-W9C_vQZ5.js";import"./composite-CN6FxDtP.js";import"./index-C6OOeUvK.js";import"./getDisabledMountTransitionStyles-EwNk7y8k.js";import"./ToolbarRootContext-nSskdiih.js";import"./tick-Stga4Wt2.js";import"./svgIconContainer-Dbb1xWM-.js";import"./small-cross-CmJytNPv.js";import"./search-DyrwlR15.js";import"./cross-Dfvafrcv.js";import"./useValueChanged-DfaWuJmu.js";import"./getPseudoElementBounds-coD1VMym.js";import"./CompositeItem-B62zciM4.js";import"./makeExternalStore-DDN6NSWJ.js";import"./BaseForm-DCMfcSiW.js";import"./ActionButton-DGHUEF7_.js";import"./Button-C7rjw-Q7.js";import"./SkeletonBar-ZRgqtK8J.js";import"./Tooltip-BfRGVA3r.js";import"./info-sign-K8DnoDLn.js";import"./chevron-up-CEljhweK.js";import"./chevron-down-Cm38Y6L5.js";import"./useEventCallback-Dvol8fVg.js";import"./iconLoader-Bzx4QHU5.js";import"./Switch-B30Lf3BK.js";import"./CompositeRoot-VOT1Yqu2.js";import"./TimePicker-BhF1ZPVV.js";import"./CollapsiblePanel-fliMZylf.js";import"./error-DXeSegvi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CKuskwhT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
