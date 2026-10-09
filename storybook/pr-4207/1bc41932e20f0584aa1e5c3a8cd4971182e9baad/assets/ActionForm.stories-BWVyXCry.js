import{j as t,g as n}from"./iframe-CZ6kIwVs.js";import{A as r}from"./action-form-B5FC8kS-.js";import"./preload-helper-7ZMJfvLO.js";import"./DropdownField-CWvFDQGS.js";import"./debounce-ZXxDT22C.js";import"./useOsdkClient-D_Xa4Rm7.js";import"./index-DI8fXOjY.js";import"./Input-BNiQQ7Yq.js";import"./useBaseUiId-C8GyANar.js";import"./useControlled-DYYKJrdL.js";import"./index-D-O5Mu3x.js";import"./index-CeIvWQQV.js";import"./PopoverPopup-5xXF3ZfI.js";import"./InternalBackdrop-CG-AIdNq.js";import"./composite-ZguSvKQK.js";import"./index-Sa9k0vw4.js";import"./getDisabledMountTransitionStyles-bhu6Mdmh.js";import"./ToolbarRootContext-DwX-_42A.js";import"./tick-ClDAkRZz.js";import"./svgIconContainer-DnYA5NkM.js";import"./small-cross-BRCq_Kda.js";import"./search-BEog5Q0_.js";import"./cross-D1S37vKD.js";import"./useValueChanged-BFS0ZGwF.js";import"./getPseudoElementBounds-BCP_KMb6.js";import"./CompositeItem-C5Mndviw.js";import"./makeExternalStore-CcH4sGc5.js";import"./BaseForm-Daxt1Q8Z.js";import"./ActionButton-CCbXIhyD.js";import"./Button-D2YNSXqx.js";import"./SkeletonBar-DirsOHoC.js";import"./Tooltip-CWcrOYKW.js";import"./info-sign-an-l6LYs.js";import"./chevron-up-COLb3SCC.js";import"./chevron-down-CfJcExH9.js";import"./useEventCallback-AXc9OhMC.js";import"./iconLoader-CkbdlEnZ.js";import"./Switch-DHf0qxih.js";import"./CompositeRoot-DTmlx2xW.js";import"./TimePicker-CmSZqLOG.js";import"./CollapsiblePanel-lqHD1Tly.js";import"./error-Be3f2oAD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJa04cyG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
