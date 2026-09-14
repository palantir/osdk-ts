import{j as t,g as n}from"./iframe-CQYW_eB-.js";import{A as r}from"./action-form-BVtyYIk8.js";import"./preload-helper-D9TT_d3h.js";import"./DropdownField-DVT_1-ko.js";import"./debounce-iahYFdXe.js";import"./useOsdkClient-CtP0GIsC.js";import"./index-T0VZSE-0.js";import"./Input-BafxkRHB.js";import"./useBaseUiId-CLAYvn4B.js";import"./useControlled-Z2EDTbBt.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./PopoverPopup-DiKMNXk7.js";import"./InternalBackdrop-C-z8SZHZ.js";import"./composite-BSIyIiZo.js";import"./index-DhxqciGT.js";import"./getDisabledMountTransitionStyles-BIEIO7LI.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./tick-DZRxM9qV.js";import"./svgIconContainer-BqHGQtsP.js";import"./small-cross-JF11sM_d.js";import"./search-Dr6j30rS.js";import"./cross-4hmynEDT.js";import"./useValueChanged-CM5Va8yd.js";import"./getPseudoElementBounds-B7H73yVG.js";import"./CompositeItem-B2O_tBvb.js";import"./makeExternalStore-3GXsIke7.js";import"./BaseForm-LMIqAVeL.js";import"./ActionButton-C0r1BUIm.js";import"./Button-CYh2Cp69.js";import"./SkeletonBar-C0p74Cj2.js";import"./Tooltip-C-8DSvp1.js";import"./info-sign-BWvh689o.js";import"./chevron-up-Cucjq9dM.js";import"./chevron-down-3SfwSm8L.js";import"./useEventCallback-C3RBUCaT.js";import"./iconLoader-5CKrBqJR.js";import"./CompositeRoot-RzKBvRBE.js";import"./Switch-CtGLdvFM.js";import"./TimePicker-DpiVCmIJ.js";import"./CollapsiblePanel-B0DUDYqS.js";import"./error-Cu14UhDr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jD7Q4XnW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
