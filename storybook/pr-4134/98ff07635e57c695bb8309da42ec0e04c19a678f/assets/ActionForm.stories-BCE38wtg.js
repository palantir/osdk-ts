import{j as t,g as n}from"./iframe-CPvF6ZzM.js";import{A as r}from"./action-form-vt0FIv5q.js";import"./preload-helper-BI1t_NCm.js";import"./DropdownField-B4l5M5yD.js";import"./debounce-6I_M5ZGg.js";import"./useOsdkClient-DPiAHwl7.js";import"./index-DfPxhOot.js";import"./Input-Bc7_Uhxn.js";import"./useBaseUiId-XltkNyEi.js";import"./useControlled-C9Dlz_cg.js";import"./index-lsySavSd.js";import"./index-MWDzLIPR.js";import"./PopoverPopup-BxWvq6sk.js";import"./InternalBackdrop-BcLn-51b.js";import"./composite-BWoYEjdT.js";import"./index-DcKmVIZM.js";import"./getDisabledMountTransitionStyles-BjJuktUq.js";import"./ToolbarRootContext-CXaq262I.js";import"./tick-FC2fYi94.js";import"./svgIconContainer-DKpS56Vd.js";import"./small-cross-B4RneZ3b.js";import"./search-BLNtYnra.js";import"./cross-CmlX3m4X.js";import"./useValueChanged-CWss0hf4.js";import"./getPseudoElementBounds-6eTBtUcp.js";import"./CompositeItem-Hn04YYBd.js";import"./makeExternalStore-S4D4bUbQ.js";import"./BaseForm-b9xeAkh5.js";import"./ActionButton-DhYCkBu4.js";import"./Button-BOq8HNJy.js";import"./SkeletonBar-BMdJeUof.js";import"./Tooltip-DCy2r5z4.js";import"./info-sign-Bj56vZtB.js";import"./chevron-up-THwyyKMi.js";import"./chevron-down-eYoSNu4v.js";import"./useEventCallback-BWX8o1CN.js";import"./iconLoader-Bt-Dzc7q.js";import"./Switch-Cam910MC.js";import"./CompositeRoot-B4vETXff.js";import"./TimePicker-ZOzh3hLo.js";import"./CollapsiblePanel-BK_rHvoK.js";import"./error-B87OsGL8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRD3Y2PF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
