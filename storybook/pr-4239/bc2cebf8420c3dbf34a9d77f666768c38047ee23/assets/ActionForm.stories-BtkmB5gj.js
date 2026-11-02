import{j as t,g as n}from"./iframe-CtuQhrts.js";import{A as r}from"./action-form-UXe4cE_m.js";import"./preload-helper-E0wvFVRZ.js";import"./DropdownField-D4yZkWIJ.js";import"./debounce-bY2G5y8x.js";import"./useOsdkClient-DnuRiMiS.js";import"./index-DG_eNmx1.js";import"./Input-CN20E0rX.js";import"./useBaseUiId-CpQCHWr3.js";import"./useControlled-rQPfFHM_.js";import"./index-BqjCm1NV.js";import"./index-U7XLybOO.js";import"./PopoverPopup-Dh5q1nAE.js";import"./InternalBackdrop-BospgbT8.js";import"./composite-rVwQZIBy.js";import"./index-LE5ZN-pU.js";import"./getDisabledMountTransitionStyles-DeAQV4pF.js";import"./ToolbarRootContext-BcX0gFdV.js";import"./tick-CRwQwU7t.js";import"./svgIconContainer-Bnw8yYHV.js";import"./small-cross-CcRiv3Vk.js";import"./search-DiP8_a-2.js";import"./cross-Bdk_6Gl1.js";import"./useValueChanged-BbSU7-N0.js";import"./getPseudoElementBounds-6SIsw25g.js";import"./CompositeItem-BIxb8BdJ.js";import"./makeExternalStore-hGhxk8h7.js";import"./BaseForm-CXFACxI4.js";import"./ActionButton-TUlJKdYX.js";import"./Button-D7MvWHhh.js";import"./SkeletonBar-ZTa1S77e.js";import"./Tooltip-CIXf8der.js";import"./info-sign-BvFxJx7N.js";import"./chevron-up-BTak-BYF.js";import"./chevron-down-COFpbhrT.js";import"./useEventCallback-D_KcFdlG.js";import"./iconLoader-kIgYgcIs.js";import"./Switch-DJm8Jf1q.js";import"./CompositeRoot-itbOzaJI.js";import"./TimePicker-DwD1ZK9g.js";import"./CollapsiblePanel-Dec68hyl.js";import"./error-DEuUm4lv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-mpxIImLJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
