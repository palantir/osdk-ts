import{j as t,g as n}from"./iframe-4Ny8APPO.js";import{A as r}from"./action-form-Cv3KMKC3.js";import"./preload-helper-DHWrfsom.js";import"./DropdownField-B1diitiQ.js";import"./debounce-DergXY_u.js";import"./useOsdkClient-CvNMVACY.js";import"./index-BDa5owMw.js";import"./Input-BJD6b5K7.js";import"./useBaseUiId-Cylkv8_6.js";import"./useControlled-CDmZbK63.js";import"./index-DZ12fAcl.js";import"./index-C2QpJmDZ.js";import"./PopoverPopup-BfwdSH7F.js";import"./InternalBackdrop-CNPXl5Xz.js";import"./composite-rxIlBuDW.js";import"./index-ZaefoN4K.js";import"./getDisabledMountTransitionStyles-PyWvPrXs.js";import"./ToolbarRootContext-4zNRwQbb.js";import"./tick-DqjruMR1.js";import"./svgIconContainer-CI9V091I.js";import"./small-cross-DU1OkuNU.js";import"./search-DqDmcAMp.js";import"./cross-CeVI-uk1.js";import"./useValueChanged-llMKBcc6.js";import"./getPseudoElementBounds-B8rT1ff7.js";import"./CompositeItem-BlU9UJGi.js";import"./makeExternalStore-DpCV1D9e.js";import"./BaseForm-BhtV2uJJ.js";import"./ActionButton-DnZkMncX.js";import"./Button-DLJHtyJi.js";import"./SkeletonBar-ByXHMYiN.js";import"./Tooltip-CpfYCKb0.js";import"./info-sign-BNtRxqfj.js";import"./chevron-up-C5OFQAYY.js";import"./chevron-down-UQ0goxb7.js";import"./useEventCallback-DATLyuw9.js";import"./iconLoader-D94pwo4d.js";import"./Switch-DQlOtp-X.js";import"./CompositeRoot-o5CDeCcX.js";import"./TimePicker-CflsnT47.js";import"./CollapsiblePanel-DDWqfvdj.js";import"./error-al8La3lG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CwVVh_LX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
