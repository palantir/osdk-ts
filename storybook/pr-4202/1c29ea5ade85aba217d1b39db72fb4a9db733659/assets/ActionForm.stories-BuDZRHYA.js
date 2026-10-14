import{j as t,g as n}from"./iframe-CIXJ1U8N.js";import{A as r}from"./action-form-CyPqjvYu.js";import"./preload-helper-CgAbFwMM.js";import"./DropdownField-BjlvHhR7.js";import"./debounce--Eb71UVP.js";import"./useOsdkClient-hryzPEYC.js";import"./index-2fupTi2T.js";import"./Input-BNqEEzus.js";import"./useBaseUiId-CSHKQrix.js";import"./useControlled-Bxgh_fPL.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./PopoverPopup-SRPRdtkN.js";import"./InternalBackdrop-BB_NyzKQ.js";import"./composite-CkH4ezLi.js";import"./index-CMU6jwvj.js";import"./getDisabledMountTransitionStyles-Bdjcrdfd.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./tick-CbF9d7YO.js";import"./svgIconContainer-Huhb1Vpv.js";import"./small-cross-DqpTtCsd.js";import"./search-C5_KVz48.js";import"./cross-C_OpOp6J.js";import"./useValueChanged-9P5wqA7j.js";import"./getPseudoElementBounds-BIDolQ8Z.js";import"./CompositeItem-lWchzb2t.js";import"./makeExternalStore-Dq-OkEYB.js";import"./BaseForm-CSkx1GE6.js";import"./ActionButton-P6WNwUke.js";import"./Button-B0yxaPGE.js";import"./SkeletonBar-DWlwxS8c.js";import"./Tooltip-IZXR1Hew.js";import"./info-sign-DxwjJiZQ.js";import"./chevron-up-DpyT9iZI.js";import"./chevron-down-7pDp1Oma.js";import"./useEventCallback-BAb1tGXb.js";import"./iconLoader-xA7V2Yc5.js";import"./Switch-CDcMzKBF.js";import"./CompositeRoot-XC3vNNsu.js";import"./TimePicker-DuPEIE1t.js";import"./CollapsiblePanel-BvJiT584.js";import"./error-DmS7Y91z.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D0zzaBUz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
