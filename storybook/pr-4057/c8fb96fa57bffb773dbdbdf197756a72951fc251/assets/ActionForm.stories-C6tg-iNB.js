import{j as t,g as n}from"./iframe-Bnq7KqyA.js";import{A as r}from"./action-form--xtnN-hN.js";import"./preload-helper-B3THyb-s.js";import"./DropdownField-C_c9mkH4.js";import"./debounce-B3lN2MVP.js";import"./useOsdkClient-DLVTWwhI.js";import"./index-Cp8jliQ7.js";import"./Input-DqyWCSM_.js";import"./useBaseUiId-BLC23AR8.js";import"./useControlled-lHaiJfgn.js";import"./index-BjxSMAWD.js";import"./index-CAaYrkDS.js";import"./PopoverPopup-CHUD5U3W.js";import"./InternalBackdrop-BNxRDTPk.js";import"./composite-DHkFKHco.js";import"./index-forTTHlP.js";import"./getDisabledMountTransitionStyles-DQbfHBKK.js";import"./ToolbarRootContext-BytsqpZq.js";import"./tick-BYRbYgVJ.js";import"./svgIconContainer-v0UJxJ5s.js";import"./small-cross-DHVafU_w.js";import"./search-BWQsUNEv.js";import"./cross-CZ44W-gs.js";import"./useValueChanged-DgUwSG6f.js";import"./getPseudoElementBounds-BJWXZAWi.js";import"./CompositeItem-kZs7JwNO.js";import"./makeExternalStore-0aoYVRXh.js";import"./BaseForm-DhtnW3gn.js";import"./ActionButton-kJY-Pi0n.js";import"./Button-DTZ1WQtp.js";import"./SkeletonBar-BH2Vcofq.js";import"./Tooltip-JLD8LHly.js";import"./info-sign-BubxnQ4i.js";import"./chevron-up-DJTnrM_I.js";import"./chevron-down-Der9zcUh.js";import"./useEventCallback-Cv-IdHMI.js";import"./iconLoader-CS7GdBOd.js";import"./Switch-Cq-0mVFg.js";import"./CompositeRoot-DASWpGLg.js";import"./TimePicker-DfmUSGtd.js";import"./CollapsiblePanel-DA0tn_f0.js";import"./error-CzhS-DQY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NPZms2--.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
