import{j as t,g as n}from"./iframe-qlavKhcC.js";import{A as r}from"./action-form-Da51MzFA.js";import"./preload-helper-C1Px9yiL.js";import"./DropdownField-TZaSBJ1a.js";import"./debounce-CvczMDGy.js";import"./useOsdkClient-ByR-C6Rs.js";import"./index-B67iUNS7.js";import"./Input-CtY9R5P4.js";import"./useBaseUiId-D99Is1tN.js";import"./useControlled-DfaRfuwf.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./PopoverPopup-Cm3EjpO-.js";import"./InternalBackdrop-CstziURT.js";import"./composite-BRoxV9_z.js";import"./index-DQnoF5JT.js";import"./getDisabledMountTransitionStyles-CQfW0Yzy.js";import"./ToolbarRootContext-CciloOLN.js";import"./tick-BlSBD_8E.js";import"./svgIconContainer-B4I2H2FD.js";import"./small-cross-BiYV0tez.js";import"./search-UuNwtUH-.js";import"./cross-_jhIc_Zd.js";import"./useValueChanged-BTXhrJc6.js";import"./getPseudoElementBounds-BG6WHPgG.js";import"./CompositeItem-DQfjGBA0.js";import"./makeExternalStore-DOTLplCc.js";import"./BaseForm-DQd7G3ku.js";import"./ActionButton-CnFjisnJ.js";import"./Button-r2aYddAL.js";import"./SkeletonBar-BIIetOih.js";import"./Tooltip-DipLFS6Y.js";import"./info-sign-IlIQO74F.js";import"./chevron-up-sxwRQlTI.js";import"./chevron-down-CeWg8uEU.js";import"./useEventCallback-BOOCKsQK.js";import"./iconLoader-BNWAZDYN.js";import"./Switch-Be036pvI.js";import"./CompositeRoot-BYTqPwEC.js";import"./TimePicker-DhbGF_d5.js";import"./CollapsiblePanel-c5DyBahg.js";import"./error-DGVK5Ulu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-EXt5SwEJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
