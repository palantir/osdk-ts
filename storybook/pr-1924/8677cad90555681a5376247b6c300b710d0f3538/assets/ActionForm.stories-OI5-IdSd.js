import{j as t,g as n}from"./iframe-CQyGqSJ2.js";import{A as r}from"./action-form-CtFAlLF3.js";import"./preload-helper-ClClUiX7.js";import"./DropdownField-CqsPWfQt.js";import"./debounce-BUg8UsLy.js";import"./useOsdkClient-DCaJw-IL.js";import"./index-CTpVcWtj.js";import"./Input-CCQVhRPw.js";import"./useBaseUiId-B26AdHtG.js";import"./useControlled-B7OjwH49.js";import"./index-BW6-nEus.js";import"./index-D1lXuc4_.js";import"./PopoverPopup-8yoX8IlU.js";import"./InternalBackdrop-DmLp5Gl4.js";import"./composite-C5TUu6hJ.js";import"./index-B3kybnc3.js";import"./getDisabledMountTransitionStyles-3Vc1pogz.js";import"./ToolbarRootContext-C3_9j6Sh.js";import"./tick-MOe4HZvJ.js";import"./svgIconContainer-Bbpye-X7.js";import"./small-cross-nxex0ZkC.js";import"./search-x6pHaO-A.js";import"./cross-BWGdF31s.js";import"./useValueChanged-DK0qo_26.js";import"./getPseudoElementBounds-Cj_uTRK0.js";import"./CompositeItem-BYWBWUfU.js";import"./makeExternalStore-D5YfmHD0.js";import"./BaseForm-Bh9NCKHi.js";import"./ActionButton-kDaP1zFI.js";import"./Button-BVydS5Yy.js";import"./SkeletonBar-B2QyIJUx.js";import"./Tooltip-D0ez9myK.js";import"./info-sign-CUqInYO8.js";import"./chevron-up-BXa8gD5H.js";import"./chevron-down-C10qSii-.js";import"./useEventCallback-CqxfjtdI.js";import"./iconLoader-BiwHzp4A.js";import"./CompositeRoot-CGnpIWpZ.js";import"./Switch-RLoA8Ltj.js";import"./TimePicker-BwGcRUtN.js";import"./CollapsiblePanel-BSMYMTBM.js";import"./error-DJLHZkng.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LQabL3nD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
