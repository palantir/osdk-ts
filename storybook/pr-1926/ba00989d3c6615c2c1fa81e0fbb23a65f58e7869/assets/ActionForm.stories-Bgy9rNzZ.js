import{j as t,g as n}from"./iframe-B0U1IQX4.js";import{A as r}from"./action-form-DGLuxyjt.js";import"./preload-helper-DiPVcWmm.js";import"./DropdownField-B4i07c_b.js";import"./debounce-Cx5RzNC6.js";import"./useOsdkClient-B7fDZnt9.js";import"./index-D1KZRywE.js";import"./Input-DxzIDyUo.js";import"./useBaseUiId-BYy3PLTZ.js";import"./useControlled-CRRNdgyj.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./PopoverPopup-CZIoD0Rp.js";import"./InternalBackdrop-CR_tzpk3.js";import"./composite-CsiVeWul.js";import"./index-cymf7Sk-.js";import"./getDisabledMountTransitionStyles-B-Kz2nRd.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./tick-C4uqHxqI.js";import"./svgIconContainer-C5UOcoAR.js";import"./small-cross-BpMsA5cq.js";import"./search-TA6KQkXz.js";import"./cross-DuFcQq4i.js";import"./useValueChanged-DjbPPhzb.js";import"./getPseudoElementBounds-CGPWBcaM.js";import"./CompositeItem-DHef4_L4.js";import"./makeExternalStore-f14_qRGB.js";import"./BaseForm-CdW2zFtu.js";import"./ActionButton-0i0W7jAV.js";import"./Button-xPZvVWHf.js";import"./SkeletonBar-DG8DA1lc.js";import"./Tooltip-B8U1i2GM.js";import"./info-sign-mJiC7klr.js";import"./chevron-up-Bqa7IRCK.js";import"./chevron-down-DeePtBa4.js";import"./useEventCallback-psrziwfU.js";import"./iconLoader-qlJjMwQN.js";import"./CompositeRoot-DsU-M2Ag.js";import"./Switch-CzJfB0W_.js";import"./TimePicker-VOfkp1P_.js";import"./CollapsiblePanel-CDvcpi1D.js";import"./error-jOboOslV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSt3jXAU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
