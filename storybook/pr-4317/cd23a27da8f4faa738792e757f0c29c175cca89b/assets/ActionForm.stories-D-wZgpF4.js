import{j as t,g as n}from"./iframe-C_ysWNhq.js";import{A as r}from"./action-form-CzPmAiCO.js";import"./preload-helper-B0JwDfT_.js";import"./DropdownField-DNkGYaLi.js";import"./debounce-CIEAz8C3.js";import"./useOsdkClient-BbU_1F98.js";import"./index-D8k-dqCc.js";import"./Input-BrUW9GIt.js";import"./useBaseUiId-B8q5gmFn.js";import"./useControlled-B4G6FObT.js";import"./index-BT7QjpST.js";import"./index-1cFlDnPE.js";import"./PopoverPopup-CcARrEno.js";import"./InternalBackdrop-DqvtyXTc.js";import"./composite-PAhMiX3w.js";import"./index-1eqntDw1.js";import"./getDisabledMountTransitionStyles-Dc1W8hh3.js";import"./ToolbarRootContext-DfBDsER3.js";import"./tick-CPHUZoWi.js";import"./svgIconContainer-DPwpyqoW.js";import"./small-cross-Dk7JcshC.js";import"./search-xeTrpNpN.js";import"./cross-Cks-uTaq.js";import"./useValueChanged-piBol0Lc.js";import"./getPseudoElementBounds-BMpXcTKf.js";import"./CompositeItem-DiTioOKz.js";import"./makeExternalStore-B5fwAHq7.js";import"./BaseForm-C1wCt70U.js";import"./ActionButton-B5_maKSp.js";import"./Button-BKcb8JBm.js";import"./SkeletonBar-BFhlXhJF.js";import"./Tooltip-BehVKe_w.js";import"./info-sign-B1GJ3QeR.js";import"./chevron-up-F1JrvPWd.js";import"./chevron-down-Cj8R-hIH.js";import"./useEventCallback-DPd3byDr.js";import"./iconLoader-hk6YkdiH.js";import"./Switch-B_NDEn85.js";import"./CompositeRoot-CrpyU9cb.js";import"./TimePicker-CsIW0q7Z.js";import"./CollapsiblePanel-B8zrkzOu.js";import"./error-DcGiqau0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-FlvAdwaB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
