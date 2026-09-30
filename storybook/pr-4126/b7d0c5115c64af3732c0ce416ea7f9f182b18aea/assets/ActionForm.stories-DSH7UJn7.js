import{j as t,g as n}from"./iframe-ByGhu7Rs.js";import{A as r}from"./action-form-DSHmMzF9.js";import"./preload-helper-CovqUMwC.js";import"./DropdownField-uya8Zzk7.js";import"./debounce-DsqtKIvY.js";import"./useOsdkClient-WMaGmtpN.js";import"./index-D9CH1iu6.js";import"./Input-CPzfsq5Q.js";import"./useBaseUiId-BtV3BRGt.js";import"./useControlled-BMq25ryS.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./PopoverPopup-CJYpnk7I.js";import"./InternalBackdrop-BZh54V-b.js";import"./composite-5pEQHoFG.js";import"./index-w0bHng9i.js";import"./getDisabledMountTransitionStyles-NHd85YGu.js";import"./ToolbarRootContext--ybsc-5r.js";import"./tick-COxZ6M1z.js";import"./svgIconContainer-BM73F7-1.js";import"./small-cross-DnaBmHYJ.js";import"./search-CqZJJM3l.js";import"./cross--Vb8zQ9y.js";import"./useValueChanged-B31lb46w.js";import"./getPseudoElementBounds-wyGE4tZv.js";import"./CompositeItem-DOTYC0vy.js";import"./makeExternalStore-Bi9EmxuC.js";import"./BaseForm-BJ8GrzNu.js";import"./ActionButton-DeQetOWP.js";import"./Button-FdiR0YBj.js";import"./SkeletonBar-C48VFTJF.js";import"./Tooltip-C99_Q-RE.js";import"./info-sign-Dq1wZ2bS.js";import"./chevron-up-CTnvYEiR.js";import"./chevron-down-CVFp5ZF3.js";import"./useEventCallback-D3_oYaV2.js";import"./iconLoader-B4k3yC4K.js";import"./Switch-BOFI0ImO.js";import"./CompositeRoot-DnFUjQUd.js";import"./TimePicker-Bxn-mOdO.js";import"./CollapsiblePanel-DKKHH52r.js";import"./error-BtdAILjI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Y0bjdApQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
