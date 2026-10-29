import{j as t,g as n}from"./iframe-CzBdkE8j.js";import{A as r}from"./action-form-DYDb6Orf.js";import"./preload-helper-DAcIQxKV.js";import"./DropdownField-2s0unNiS.js";import"./debounce-Da2LiWyo.js";import"./useOsdkClient-JXogxqf0.js";import"./index-nrSAC82l.js";import"./Input-C91PS3np.js";import"./useBaseUiId-DYoSQlXN.js";import"./useControlled-CvawZQ67.js";import"./index-DxeeQ0ql.js";import"./index-DjEUrq-J.js";import"./isObject-Cd8fWrM7.js";import"./InternalBackdrop-BX1TzKYN.js";import"./composite-NGmoik8z.js";import"./index-C1mzUzFI.js";import"./getDisabledMountTransitionStyles-DVtht9dj.js";import"./ToolbarRootContext-B8cFWt1N.js";import"./tick-bUnIpS28.js";import"./svgIconContainer-vvQ2H1Kh.js";import"./small-cross-BTjUTHgC.js";import"./search-G4OheDlQ.js";import"./cross-DJGmKxbL.js";import"./useValueChanged-B4Hgf5Tp.js";import"./getPseudoElementBounds-RzDWICHu.js";import"./CompositeItem-6yW-EHF-.js";import"./makeExternalStore-oT7e1se-.js";import"./BaseForm-Di1AygMF.js";import"./ActionButton-s9UbQrV0.js";import"./Button-BbinMP78.js";import"./SkeletonBar-CxjV6sy3.js";import"./Tooltip-kjlyHoV2.js";import"./info-sign-C5_t3Z8-.js";import"./chevron-up-DUuWiXbH.js";import"./chevron-down-BMeIm_My.js";import"./useEventCallback-CE4dkAWk.js";import"./iconLoader-C62Y2mH5.js";import"./Switch-CfFE2sw2.js";import"./CompositeRoot-BcgsZG99.js";import"./TimePicker-BoEJ366J.js";import"./CollapsiblePanel-Datx7g9u.js";import"./error-BChTcIQI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BruKftXq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
