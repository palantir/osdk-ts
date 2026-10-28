import{j as t,g as n}from"./iframe-Cs9u2FNJ.js";import{A as r}from"./action-form-BH2RJO3_.js";import"./preload-helper-DEnCUJIu.js";import"./DropdownField-BnI_unVW.js";import"./debounce-BPwk5KM9.js";import"./useOsdkClient-FerZNXE5.js";import"./index-DWrTTHxb.js";import"./Input-BxHTTwfQ.js";import"./useBaseUiId-B04InLuC.js";import"./useControlled-DWa2oiP8.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./PopoverPopup-CQEmEDo7.js";import"./InternalBackdrop-C4zV0J9w.js";import"./composite-DoMN_SNj.js";import"./index-BckuHIFJ.js";import"./getDisabledMountTransitionStyles-CdijohRN.js";import"./ToolbarRootContext-BXn8yWld.js";import"./tick-B-5PpNSR.js";import"./svgIconContainer-bmBt8PNs.js";import"./small-cross-w_QEugk7.js";import"./search-QgkUbhew.js";import"./cross-Jki0Zf7X.js";import"./useValueChanged-CG7ACMRq.js";import"./getPseudoElementBounds-Bbihz1Zu.js";import"./CompositeItem-D6sZhCIa.js";import"./makeExternalStore-CtNpDvOI.js";import"./BaseForm-Do2Nr-VX.js";import"./ActionButton-DJ3NK00Y.js";import"./Button-_OIC0QgO.js";import"./SkeletonBar-BfpfarXm.js";import"./Tooltip-DnZtYN8u.js";import"./info-sign-BSgymKKw.js";import"./chevron-up-DoSMFkZ5.js";import"./chevron-down-D0MyTtqt.js";import"./useEventCallback-BlrYGKuQ.js";import"./iconLoader-Cyc5ov7D.js";import"./Switch-jInIF3BB.js";import"./CompositeRoot-CvQyq0eu.js";import"./TimePicker-DvJnv4gJ.js";import"./CollapsiblePanel-DHVkTAOJ.js";import"./error-92AiuNPh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BHorCkdK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
