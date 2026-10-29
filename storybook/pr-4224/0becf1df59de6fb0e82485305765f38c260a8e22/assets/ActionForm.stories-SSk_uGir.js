import{j as t,g as n}from"./iframe-civNld3i.js";import{A as r}from"./action-form-DROGt2xs.js";import"./preload-helper-DGob3pd3.js";import"./DropdownField-C-J6dPze.js";import"./debounce-_kg4QHxF.js";import"./useOsdkClient-CDLe6B2D.js";import"./index-Bkk9aIG7.js";import"./Input-CzHf5EpN.js";import"./useBaseUiId-DfebwqrC.js";import"./useControlled-DSRlTv1D.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./PopoverPopup-mFug3adh.js";import"./InternalBackdrop-BDeg4tmF.js";import"./composite-C8tN05lQ.js";import"./index-BU14isbu.js";import"./getDisabledMountTransitionStyles-CoXeXbxe.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./tick-wP3FdKpg.js";import"./svgIconContainer-Cbt7mtvH.js";import"./small-cross-DpA5lC9j.js";import"./search-ulrdH098.js";import"./cross-Bl6bAFo8.js";import"./useValueChanged-BjzJCsWw.js";import"./getPseudoElementBounds-BeYCQidE.js";import"./CompositeItem-CyFsxOTP.js";import"./makeExternalStore-2tdSo-BF.js";import"./BaseForm-BFfmdtT0.js";import"./ActionButton-D27VwrOt.js";import"./Button-_66b78aL.js";import"./SkeletonBar-ePOHNcXa.js";import"./Tooltip-BBz15K44.js";import"./info-sign-CLVyW_Ny.js";import"./chevron-up-DlEjIu5F.js";import"./chevron-down-Cc8MdjVP.js";import"./useEventCallback-BbngQcPL.js";import"./iconLoader-CuJ_uEp0.js";import"./Switch-7Wp6mamk.js";import"./CompositeRoot-DOU_4ZY5.js";import"./TimePicker-CR19Q1tR.js";import"./CollapsiblePanel--7f6zkon.js";import"./error-9MfXm3EE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-VkQ2PjHN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
