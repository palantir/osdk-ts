import{j as t,g as n}from"./iframe-B7GNjqYa.js";import{A as r}from"./action-form-DFV6d5V1.js";import"./preload-helper-BAlwY9vI.js";import"./DropdownField-GQBEnXYB.js";import"./debounce-CoJau0dS.js";import"./useOsdkClient-B28z3bbk.js";import"./index-BS_kYp2J.js";import"./Input-COrKdsAC.js";import"./useBaseUiId-CFM8-ppd.js";import"./useControlled-qLlPw49u.js";import"./index-fPGG7RjX.js";import"./index-BCluv78G.js";import"./PopoverPopup-Knmtng0E.js";import"./InternalBackdrop-bYiUgvs9.js";import"./composite-C3LspNj0.js";import"./index-DYS5ByOf.js";import"./getDisabledMountTransitionStyles-DONXlArz.js";import"./ToolbarRootContext-m_MjqPd8.js";import"./tick-Chptb_Eu.js";import"./svgIconContainer-DoNcIMx3.js";import"./small-cross-oDjSfOr6.js";import"./search-BPhnv7M1.js";import"./cross-BiueRdx7.js";import"./useValueChanged-DzwuESFx.js";import"./getPseudoElementBounds-BHnWaw3k.js";import"./CompositeItem-Bd_Q9u8B.js";import"./makeExternalStore-BhSOqX6p.js";import"./BaseForm-C3lz41B4.js";import"./ActionButton-B5nt0qaz.js";import"./Button-CuSrXijd.js";import"./SkeletonBar-hQaFCQal.js";import"./Tooltip-CjWFJAs6.js";import"./info-sign-ChbOenXE.js";import"./chevron-up-DMzJCt7D.js";import"./chevron-down-DB4mVzp_.js";import"./useEventCallback-BpccMG2J.js";import"./iconLoader-BvEER1EX.js";import"./Switch-DVDP0Xmc.js";import"./CompositeRoot-C5fO4sWV.js";import"./TimePicker-DT15nQez.js";import"./CollapsiblePanel-B68_k9PR.js";import"./error-zFyncHCE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYcwkBzp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
