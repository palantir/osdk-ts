import{j as t,g as n}from"./iframe-Cidbd9U_.js";import{A as r}from"./action-form-Cu6pF39E.js";import"./preload-helper-CDZ9ml3u.js";import"./DropdownField-DiOH_8ae.js";import"./debounce-DvHpY4Ou.js";import"./useOsdkClient-BgKg3-oj.js";import"./index-DHtVl5lr.js";import"./Input-DOViwQP-.js";import"./useBaseUiId-qBbflN1T.js";import"./useControlled-CD8kHrNC.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./PopoverPopup-Bs69cHyF.js";import"./InternalBackdrop-CRTpZ3Mc.js";import"./composite-wQgj7E4E.js";import"./index-ZSi5hxUD.js";import"./getDisabledMountTransitionStyles-DeD1w0n_.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./tick-C2hQsqLU.js";import"./svgIconContainer-BRrBCQQQ.js";import"./small-cross-DlRvHu10.js";import"./search-d8u8t1Cm.js";import"./cross-BTGq5cWg.js";import"./useValueChanged-DYHqJuk7.js";import"./getPseudoElementBounds-BvCzK4YA.js";import"./CompositeItem-RBkj06fN.js";import"./makeExternalStore-Cw6sOONN.js";import"./BaseForm-X8_KOUxe.js";import"./ActionButton-CipDVnp9.js";import"./Button-B5k9EJ-k.js";import"./SkeletonBar-DL5xvDTN.js";import"./Tooltip-DjjgX0Td.js";import"./info-sign-C-lHm00W.js";import"./chevron-up-CM55ykMJ.js";import"./chevron-down-gf2GhVLl.js";import"./useEventCallback-CO_HzDJy.js";import"./iconLoader-DOixTroK.js";import"./Switch-DmT-CDTs.js";import"./CompositeRoot-7EDOhLfq.js";import"./TimePicker-BXLUFg1H.js";import"./CollapsiblePanel-CDei_9JY.js";import"./error-CLTZOyUS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFH71nhb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
