import{j as t,g as n}from"./iframe-DlVDy023.js";import{A as r}from"./action-form-DFGCiyPU.js";import"./preload-helper-DJFhMTqE.js";import"./DropdownField-fDoWtAsS.js";import"./debounce-Hj0VluNc.js";import"./useOsdkClient-De-2KVrO.js";import"./index-B3fXiAQb.js";import"./Input-DaMbbLWO.js";import"./useBaseUiId-BKw8YauT.js";import"./useControlled-Dii3KKCf.js";import"./index-LVqexgrH.js";import"./index-C3j1YyMW.js";import"./PopoverPopup-Cv9ybNd5.js";import"./InternalBackdrop-D_CBn7dT.js";import"./composite-BLhg11U-.js";import"./index-BjgwtoXC.js";import"./getDisabledMountTransitionStyles-Cn73GRue.js";import"./ToolbarRootContext--DNvLQWo.js";import"./tick-geEvKQPJ.js";import"./svgIconContainer-s-JQVLQ9.js";import"./small-cross-yv-Uq6dQ.js";import"./search-Dlo_g8mx.js";import"./cross-mcjuSBTc.js";import"./useValueChanged-LxRYviJx.js";import"./getPseudoElementBounds-BIvWT8t6.js";import"./CompositeItem-CCYoAgW2.js";import"./makeExternalStore-DF_bocEY.js";import"./BaseForm-DiTpa94F.js";import"./ActionButton-B_l7y5Oe.js";import"./Button-CPiBfc-M.js";import"./SkeletonBar-B2rGYxr9.js";import"./Tooltip-bH5NED12.js";import"./info-sign-BIBb_hnd.js";import"./chevron-up-6Kle_mZ0.js";import"./chevron-down-CjY3inSa.js";import"./useEventCallback-SgtlW3mH.js";import"./iconLoader-Dt_O9xmK.js";import"./CompositeRoot-D9bNowkf.js";import"./Switch-B4kGzxvc.js";import"./TimePicker-zoIdy8vG.js";import"./CollapsiblePanel-lLYHy2Fj.js";import"./error-DOacZup1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-zKe3req1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
