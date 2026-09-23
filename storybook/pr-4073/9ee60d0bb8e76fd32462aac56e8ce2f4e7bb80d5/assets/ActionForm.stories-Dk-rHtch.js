import{j as t,g as n}from"./iframe-CWxH_eja.js";import{A as r}from"./action-form-DnlY_MHw.js";import"./preload-helper-BGM-FNNL.js";import"./DropdownField-BqLWLDk5.js";import"./debounce-CKUoy-ZY.js";import"./useOsdkClient-BEBx1G06.js";import"./index-rukiLk-t.js";import"./Input-CalfVJQO.js";import"./useBaseUiId-DjXwJ_4A.js";import"./useControlled-CaUffLu_.js";import"./index-CCBaaayX.js";import"./index-VZEG51bO.js";import"./PopoverPopup-B2PZtKL4.js";import"./InternalBackdrop-CCMfb0Ir.js";import"./composite--3W2QfLD.js";import"./index-BuFABUNN.js";import"./getDisabledMountTransitionStyles-BTSpAzLB.js";import"./ToolbarRootContext-BeUcIWq0.js";import"./tick-Bb30Qkcj.js";import"./svgIconContainer-BVjwrQj6.js";import"./small-cross-C5TdUP9V.js";import"./search-CCiYcsoJ.js";import"./cross-BUnzug5D.js";import"./useValueChanged-CNmcYNNi.js";import"./getPseudoElementBounds-D46R6mk6.js";import"./CompositeItem-ClK4GwxV.js";import"./makeExternalStore-MGpOOWzr.js";import"./BaseForm-CtsizRaG.js";import"./ActionButton-BHfyzR_2.js";import"./Button-xLQbkIr8.js";import"./SkeletonBar-C3fCQI88.js";import"./Tooltip-D1DLlEu4.js";import"./info-sign-C1Zz3WPO.js";import"./chevron-up-CQPb-X1m.js";import"./chevron-down-CtewQHTT.js";import"./useEventCallback-CM0vLoXJ.js";import"./iconLoader-CH6SorDH.js";import"./Switch-CSuGvM4f.js";import"./CompositeRoot-DE5qHj0D.js";import"./TimePicker-qCTJYSIE.js";import"./CollapsiblePanel-ZhX5L-lI.js";import"./error-4ibjlhF7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BxqDWVVo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
