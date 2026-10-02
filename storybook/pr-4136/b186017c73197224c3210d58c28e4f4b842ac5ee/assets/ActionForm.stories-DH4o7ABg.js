import{j as t,g as n}from"./iframe-J9lCjP1k.js";import{A as r}from"./action-form-BDeBRVTh.js";import"./preload-helper-BXO0w5mF.js";import"./DropdownField-HoWLtdUo.js";import"./debounce-DDbncj5R.js";import"./useOsdkClient-DkjXMcnc.js";import"./index-xbscF9ue.js";import"./Input-Ba7RqXqy.js";import"./useBaseUiId-BbYI3Fho.js";import"./useControlled-DItBXz5T.js";import"./index-BcwSN1Tg.js";import"./index-DQUI6WyQ.js";import"./PopoverPopup-BG_PpWHa.js";import"./InternalBackdrop-DxiO-ikG.js";import"./composite-DI_eiBD4.js";import"./index-DJ2o0-9_.js";import"./getDisabledMountTransitionStyles-BgGFzdkL.js";import"./ToolbarRootContext-DRYgzWjU.js";import"./tick-BYtBOYaj.js";import"./svgIconContainer-CLwoVSXr.js";import"./small-cross-DiEF7RM6.js";import"./search-Bzg3xwEF.js";import"./cross-D1CxmRAM.js";import"./useValueChanged-hS01fJLb.js";import"./getPseudoElementBounds-CMNlX2Q2.js";import"./CompositeItem-C-k99tdq.js";import"./makeExternalStore-j1jcO9d9.js";import"./BaseForm-BGGX1y8z.js";import"./ActionButton-rPtQIhsU.js";import"./Button-VEce61GE.js";import"./SkeletonBar-Cr_Ejt-L.js";import"./Tooltip-BLJkCuf9.js";import"./info-sign-s0PApRaA.js";import"./chevron-up-wekAADiQ.js";import"./chevron-down-C5IBZF4F.js";import"./useEventCallback-CJtT_lpI.js";import"./iconLoader-CA-ppIA9.js";import"./Switch-4Iz9rzMq.js";import"./CompositeRoot-iW1fmmod.js";import"./TimePicker-DrHRhc4s.js";import"./CollapsiblePanel-CDBi8wiI.js";import"./error-XzIXc-ko.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6QFCRSF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
