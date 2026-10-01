import{j as t,g as n}from"./iframe-BBS1bhxz.js";import{A as r}from"./action-form-C_2-QAci.js";import"./preload-helper-DbqFABQK.js";import"./DropdownField-Br5LnCsz.js";import"./debounce-EWPwneHB.js";import"./useOsdkClient-JNX9ytGe.js";import"./index-BwzBBeai.js";import"./Input-xVXK2Roi.js";import"./useBaseUiId-CYB9Dsir.js";import"./useControlled-0gW62wDn.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./PopoverPopup-DRjPHcEC.js";import"./InternalBackdrop-CCOzVtc1.js";import"./composite-6tiSR5Xk.js";import"./index-CnkYP-F4.js";import"./getDisabledMountTransitionStyles-C8xFS_dz.js";import"./ToolbarRootContext-COBR2HeU.js";import"./tick-WrvbSOaH.js";import"./svgIconContainer-DkabfjQp.js";import"./small-cross-Ch3xmnh1.js";import"./search-DcQmB7Y_.js";import"./cross-CNiIBNRR.js";import"./useValueChanged-DRgrYEiY.js";import"./getPseudoElementBounds-C9THLdDk.js";import"./CompositeItem-BGGFMuw6.js";import"./makeExternalStore-CzAndpId.js";import"./BaseForm-CeEJT62g.js";import"./ActionButton-DGhxQdJx.js";import"./Button-BB3rVnV9.js";import"./SkeletonBar-BUB4_ue2.js";import"./Tooltip-IRK0CKSi.js";import"./info-sign-S1wJV58i.js";import"./chevron-up-9Or_TKC1.js";import"./chevron-down-CHLXsa5V.js";import"./useEventCallback-B33OkFzu.js";import"./iconLoader-CUCoyHNK.js";import"./Switch-wrSLza9v.js";import"./CompositeRoot-reepbBt8.js";import"./TimePicker-Dr3D87T9.js";import"./CollapsiblePanel-CLoilge1.js";import"./error-D-l7GhZN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BcsPvRcs.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
