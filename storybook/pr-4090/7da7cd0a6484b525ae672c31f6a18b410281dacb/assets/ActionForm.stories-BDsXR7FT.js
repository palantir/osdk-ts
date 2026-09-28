import{j as t,g as n}from"./iframe-CzOIzVud.js";import{A as r}from"./action-form-BB8K_e5n.js";import"./preload-helper-CwMKM08Q.js";import"./DropdownField-CImlhZV3.js";import"./debounce-C1RT7wUt.js";import"./useOsdkClient-Cfr0VwOI.js";import"./index-CTmIGBdU.js";import"./Input-C7TpWAR_.js";import"./useBaseUiId-PA6AbvCv.js";import"./useControlled-Bl4FNa4w.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./PopoverPopup-lEB4hKfS.js";import"./InternalBackdrop-8vONEObA.js";import"./composite-CCnWWb1N.js";import"./index-CeqpJRDR.js";import"./getDisabledMountTransitionStyles-Dii4bpI2.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./tick-sKwgcsDW.js";import"./svgIconContainer-0bhWATaq.js";import"./small-cross-Cev--Ndg.js";import"./search-OylK7gf9.js";import"./cross-ChoO-hHZ.js";import"./useValueChanged-DAu4NU-7.js";import"./getPseudoElementBounds-B02vA_g5.js";import"./CompositeItem-A6EkfQUI.js";import"./makeExternalStore-BLR6RjGC.js";import"./BaseForm-CzBMQqfB.js";import"./ActionButton-BhhEiGs3.js";import"./Button-PAMPzLp5.js";import"./SkeletonBar-BM-didmo.js";import"./Tooltip-DObflQ9W.js";import"./info-sign-DemmQ2io.js";import"./chevron-up-C-Wjc271.js";import"./chevron-down-Cb1symQ7.js";import"./useEventCallback-e2owZAXd.js";import"./iconLoader-CEpioUxV.js";import"./Switch-BruSbKg5.js";import"./CompositeRoot-BXSLcrc9.js";import"./TimePicker-Cq8Rt0m3.js";import"./CollapsiblePanel-Cfd_4ZcG.js";import"./error-bNK0ajAf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2KUxQ8x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
