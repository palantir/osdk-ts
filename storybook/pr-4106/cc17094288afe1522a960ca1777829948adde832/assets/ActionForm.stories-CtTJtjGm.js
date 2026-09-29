import{j as t,g as n}from"./iframe-cXUSCCB6.js";import{A as r}from"./action-form-BycIvw4s.js";import"./preload-helper-adOW_bmV.js";import"./DropdownField-DKMtjVPQ.js";import"./debounce-DUeQK-_L.js";import"./useOsdkClient-Cw1zJZ0U.js";import"./index-DBMlmXL0.js";import"./Input-CXM44AHw.js";import"./useBaseUiId-CRVXGosA.js";import"./useControlled-DboXIBjA.js";import"./index-DUupLJDG.js";import"./index-defWb760.js";import"./PopoverPopup-B1qYlCLn.js";import"./InternalBackdrop-D2TKBBWC.js";import"./composite-Do3saceV.js";import"./index-BoQ-yDKy.js";import"./getDisabledMountTransitionStyles-Dc3btUOj.js";import"./ToolbarRootContext-BXvi54FI.js";import"./tick-BOTkIjTY.js";import"./svgIconContainer-tVdoUfqY.js";import"./small-cross-CaWrlcpM.js";import"./search-CJIpoAKT.js";import"./cross-DLTJIT7_.js";import"./useValueChanged-btkvjNa5.js";import"./getPseudoElementBounds-B4b0mkX5.js";import"./CompositeItem-DJYWyjQd.js";import"./makeExternalStore-CLMwzEq6.js";import"./BaseForm-C7xy1Dp1.js";import"./ActionButton-DhzZi43U.js";import"./Button-0UL0G0NB.js";import"./SkeletonBar-C8cuZi-g.js";import"./Tooltip-EqI8EUoF.js";import"./info-sign-BmIkKEYR.js";import"./chevron-up-Cb6E6YjG.js";import"./chevron-down-CiiM93uJ.js";import"./useEventCallback-C8yKHfi2.js";import"./iconLoader-Bl5k7Wf9.js";import"./Switch-B0PMrQCC.js";import"./CompositeRoot-Biht4iko.js";import"./TimePicker-BjvPzQX0.js";import"./CollapsiblePanel-Bg1TLScK.js";import"./error-BiDYwilF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B49tYBTG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
