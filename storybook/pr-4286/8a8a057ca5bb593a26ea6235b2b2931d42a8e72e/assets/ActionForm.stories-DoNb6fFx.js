import{j as t,g as n}from"./iframe-BtrE9oAk.js";import{A as r}from"./action-form-BB5U95H8.js";import"./preload-helper-Ck9jHBT4.js";import"./DropdownField-dLbZrCEg.js";import"./debounce-nhdj0_a1.js";import"./useOsdkClient-Cng8MMf4.js";import"./index-DTswWCN-.js";import"./Input-DP5nsCAr.js";import"./useBaseUiId-DZ_AJh1G.js";import"./useControlled-BzxnQPZx.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./isObject-BsxAo1Me.js";import"./InternalBackdrop-DBd41QYf.js";import"./composite-DJfjq7Qz.js";import"./index-B0IzT3xV.js";import"./getDisabledMountTransitionStyles-BPDURfHU.js";import"./ToolbarRootContext-CiVShHn0.js";import"./tick-C2899HhT.js";import"./svgIconContainer-CMgWIhhO.js";import"./small-cross-BEsKiWDj.js";import"./search-DH4c7KHc.js";import"./cross-BpApkSFN.js";import"./useValueChanged-BUerDF1m.js";import"./getPseudoElementBounds-DJUliXcW.js";import"./CompositeItem-KY2ZDv1b.js";import"./makeExternalStore-iXyWkOaZ.js";import"./BaseForm-C0uUOYYI.js";import"./ActionButton-D8YPh8JC.js";import"./Button-Dt_Nxhrh.js";import"./SkeletonBar-FkO2CaFD.js";import"./Tooltip-CLiO1emX.js";import"./info-sign-BRyuXbw5.js";import"./chevron-up-BpdlEtXH.js";import"./chevron-down-CGlt-RaH.js";import"./useEventCallback-CRqKCUPu.js";import"./iconLoader-DKr1D6mA.js";import"./Switch-B4Lq7PMq.js";import"./CompositeRoot-eACoPGGZ.js";import"./TimePicker-FzdtxbGR.js";import"./CollapsiblePanel-CVBxOGW4.js";import"./error-CWqhrvJ7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BliYF0M9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
