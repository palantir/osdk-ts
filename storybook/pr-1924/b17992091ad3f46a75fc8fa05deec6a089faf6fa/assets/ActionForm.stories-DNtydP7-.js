import{j as t,g as n}from"./iframe-BJzVVo3C.js";import{A as r}from"./action-form-BFsARBO4.js";import"./preload-helper-BGo6yCWR.js";import"./DropdownField-C9P6RcpY.js";import"./debounce-DqxAIWi9.js";import"./useOsdkClient-C7mnWl4M.js";import"./index-jYeXRVJt.js";import"./Input-D8VZz3qg.js";import"./useBaseUiId-aWvq-Ojy.js";import"./useControlled-BU_ZAQ-v.js";import"./index-Cu3TSrS7.js";import"./index-DY-H4zuh.js";import"./PopoverPopup-CbiEHiO_.js";import"./InternalBackdrop-LaTt__SN.js";import"./composite-DVXx00LN.js";import"./index-CGlZ0CTP.js";import"./getDisabledMountTransitionStyles-DruUCqOL.js";import"./ToolbarRootContext-BS8U1N_y.js";import"./tick-C1AZecKl.js";import"./svgIconContainer-BafRnCSe.js";import"./small-cross-CIrD0bDh.js";import"./search-CNzRQSLi.js";import"./cross-BODoIHG7.js";import"./useValueChanged-CnANt21_.js";import"./getPseudoElementBounds-BuOaNQX4.js";import"./CompositeItem-UocH3YCc.js";import"./makeExternalStore-c77j8ZZC.js";import"./BaseForm-DLQHeiqI.js";import"./ActionButton-DNcn8P02.js";import"./Button-CtA29Am0.js";import"./SkeletonBar-CmmIOnV3.js";import"./Tooltip-DwG0NqTz.js";import"./info-sign-0JfaRRmC.js";import"./chevron-up-nb-c8NGW.js";import"./chevron-down-GN6eodao.js";import"./useEventCallback-CPVPsHDE.js";import"./iconLoader-BVDcQbD9.js";import"./Switch-DjJZ4-Fn.js";import"./CompositeRoot-Ciu_bIcY.js";import"./TimePicker-FOarJjRz.js";import"./CollapsiblePanel-BbVSWDIY.js";import"./error-B0Rx4D9Q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BD3BFsPk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
