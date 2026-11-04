import{j as t,g as n}from"./iframe-BJ8SXgdR.js";import{A as r}from"./action-form-BARfuicv.js";import"./preload-helper-V6nC4EeU.js";import"./DropdownField-BHqZuFPG.js";import"./debounce-Hk7rnih5.js";import"./useOsdkClient-Dj34DS5Y.js";import"./index-Bw4Jw5oO.js";import"./Input-Bx9J3YZM.js";import"./useBaseUiId-M7m_99-n.js";import"./useControlled-CjUkOTZX.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./PopoverPopup-DomnOyt_.js";import"./InternalBackdrop-CabKfl1h.js";import"./composite-BEEWgOuz.js";import"./index-ssIrkCkG.js";import"./getDisabledMountTransitionStyles-tfkHieO2.js";import"./ToolbarRootContext-r3sR1laS.js";import"./tick-p2qDXWT_.js";import"./svgIconContainer-CsUfQGRN.js";import"./small-cross-P3lS_YZs.js";import"./search-Dw_fxnZ-.js";import"./cross-Cg7DwYSC.js";import"./useValueChanged-CUJ7FvbC.js";import"./getPseudoElementBounds-Dbt1NZMt.js";import"./CompositeItem-ehmW8yGD.js";import"./makeExternalStore-CufKkCEE.js";import"./BaseForm-BXvMHpf2.js";import"./ActionButton-D89xaVN-.js";import"./Button-DRmMomPf.js";import"./SkeletonBar-DpuQzJmF.js";import"./Tooltip-DOYwrPSE.js";import"./info-sign-Bj2gMY8W.js";import"./chevron-up-BfwT6KUO.js";import"./chevron-down-oM9ZgJIx.js";import"./useEventCallback-CinkpAtu.js";import"./iconLoader-CBNJTc4N.js";import"./Switch-C3gdQ969.js";import"./CompositeRoot-mA4aiOB2.js";import"./TimePicker-B_UmyiPn.js";import"./CollapsiblePanel-WrEQ8Aj1.js";import"./error-C-Q6AIHf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CteTFdb3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
