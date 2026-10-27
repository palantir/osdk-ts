import{j as t,g as n}from"./iframe-CEC11uQP.js";import{A as r}from"./action-form-COZ_l1bw.js";import"./preload-helper-DVVUuTHt.js";import"./DropdownField-D7RrB7x7.js";import"./debounce-DRRXJPFm.js";import"./useOsdkClient-_hJ9ISKZ.js";import"./index-PEoHNwfg.js";import"./Input-DBrhN4gs.js";import"./useBaseUiId-BjpGd3DR.js";import"./useControlled-DZwN9m8e.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./PopoverPopup-B-89m5SN.js";import"./InternalBackdrop-CwSZ3wqn.js";import"./composite-CmpMqd5k.js";import"./index-D7YNV7up.js";import"./getDisabledMountTransitionStyles-jPjQ6amA.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./tick-CrTzZGEG.js";import"./svgIconContainer-CbD2_3IP.js";import"./small-cross-vfExAlhb.js";import"./search-3jERTaIF.js";import"./cross-D6kuzFqN.js";import"./useValueChanged-DHCnr_zs.js";import"./getPseudoElementBounds-BITuD01w.js";import"./CompositeItem-Aj4qkjGh.js";import"./makeExternalStore-BiM7hkBW.js";import"./BaseForm-DJjktX-g.js";import"./ActionButton-D1g9DkB7.js";import"./Button-BJ7HsXYN.js";import"./SkeletonBar-CrVBs6Vj.js";import"./Tooltip-CErMPFwN.js";import"./info-sign-CIuWmzOu.js";import"./chevron-up-BZqtqOR-.js";import"./chevron-down-6kcuRK_B.js";import"./useEventCallback-KH16WOxt.js";import"./iconLoader-DIzOlhib.js";import"./Switch-CZfQoWtY.js";import"./CompositeRoot-lIII5Bh9.js";import"./TimePicker-D7PcjNkF.js";import"./CollapsiblePanel-DZwBeyX6.js";import"./error-BC-ullpf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHiNkmki.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
