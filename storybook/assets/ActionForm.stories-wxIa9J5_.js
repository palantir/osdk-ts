import{j as t,g as n}from"./iframe-Bhux-jL2.js";import{A as r}from"./action-form-wo8lgKbK.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-D_Ub0nmh.js";import"./debounce-C9UrikDA.js";import"./useOsdkClient-B-RCP7CA.js";import"./index-CqpPyV6t.js";import"./Input-Cz3DPiZR.js";import"./useBaseUiId-De8pklpX.js";import"./useControlled-B8x__iZM.js";import"./index-Dq01vjvQ.js";import"./index-DbS2jUPU.js";import"./PopoverPopup-C9A-63Ov.js";import"./InternalBackdrop-1Uep-6OD.js";import"./composite-pG-5UHC0.js";import"./index-DkYiUypd.js";import"./getDisabledMountTransitionStyles-DSrXhE1l.js";import"./ToolbarRootContext-BAnbUtNA.js";import"./tick-BGANEUAQ.js";import"./svgIconContainer-DLxw3PxE.js";import"./small-cross-Dc7PW3MT.js";import"./search-jbt_qsn3.js";import"./cross-CUQYhxA4.js";import"./useValueChanged-CSfjLy1S.js";import"./getPseudoElementBounds-B5CqKbrh.js";import"./CompositeItem-x-GueMXE.js";import"./makeExternalStore-fmuI2lu4.js";import"./BaseForm-07D54kei.js";import"./ActionButton-D5iMXjgf.js";import"./Button-CMvjR2Al.js";import"./SkeletonBar-D1FlFldy.js";import"./Tooltip-CmR5c3KM.js";import"./info-sign-DJCpgYhI.js";import"./chevron-up-DmzAlWEp.js";import"./chevron-down-_Dmt60i4.js";import"./useEventCallback-Cjzrema4.js";import"./iconLoader-CEOWNGvm.js";import"./Switch-wlj2ggM6.js";import"./CompositeRoot-nEFRKI7G.js";import"./TimePicker-BJG1bIdu.js";import"./CollapsiblePanel-DGcKBfeQ.js";import"./error-mg2-r6Xs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D-lmPy0A.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
