import{j as t,g as n}from"./iframe-B5oWllHx.js";import{A as r}from"./action-form-BePmf5DX.js";import"./preload-helper-AL0pxeKM.js";import"./DropdownField-emaGDLLt.js";import"./debounce-D3faGUE7.js";import"./useOsdkClient-BfV2im4Z.js";import"./index-E8TGJhq9.js";import"./Input-CHGFhXTJ.js";import"./useBaseUiId-B80HrYnI.js";import"./useControlled-C1shr7sK.js";import"./index-DpBh8txy.js";import"./index-1oTvxXM7.js";import"./PopoverPopup-DZrQF8FG.js";import"./InternalBackdrop-DKUVP1zM.js";import"./composite-CxNKGIFj.js";import"./index-jVYij_3i.js";import"./getDisabledMountTransitionStyles-v16MeVM9.js";import"./ToolbarRootContext-CY1iwJN5.js";import"./tick-B3M0MzLY.js";import"./svgIconContainer-DmiPRoPR.js";import"./small-cross-BVwuTZcs.js";import"./search-CweXIS3_.js";import"./cross-D0UFXm2L.js";import"./useValueChanged-DRZa34Nq.js";import"./getPseudoElementBounds-CYSv1bOf.js";import"./CompositeItem-CBT7H_tD.js";import"./makeExternalStore-4UJfUQkh.js";import"./BaseForm-CRMujmod.js";import"./ActionButton-CdO9nLoY.js";import"./Button-DESnIp7_.js";import"./SkeletonBar-BNUNe2WU.js";import"./Tooltip-DRnqt9Qa.js";import"./info-sign-JE0_NMml.js";import"./chevron-up-COUYdAn5.js";import"./chevron-down-843gHNxT.js";import"./useEventCallback-DSNFNTa2.js";import"./iconLoader-Co_WfYhx.js";import"./CompositeRoot-DI1BocWH.js";import"./Switch-SiJ89mOi.js";import"./TimePicker-BcP5bub6.js";import"./CollapsiblePanel-CZdxwGFg.js";import"./error-FAfGOJk1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ct5oqpuP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
