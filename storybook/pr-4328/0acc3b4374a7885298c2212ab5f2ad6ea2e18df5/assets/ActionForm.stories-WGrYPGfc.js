import{j as t,g as n}from"./iframe-DhySATRv.js";import{A as r}from"./action-form-B2iAKB8R.js";import"./preload-helper-QnXVdlsZ.js";import"./DropdownField-CUm8Lr1l.js";import"./debounce-DycsTy32.js";import"./useOsdkClient-pvjD5f0f.js";import"./index-By0zFJXy.js";import"./Input-BQwljXsc.js";import"./useBaseUiId-CczNNmwY.js";import"./useControlled-C3JFQqTN.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./PopoverPopup-BgCnKoSq.js";import"./InternalBackdrop-CxgZaxwU.js";import"./composite-B7Q8k8Y1.js";import"./index-DxlsOiTd.js";import"./getDisabledMountTransitionStyles-PwdtwQyf.js";import"./ToolbarRootContext-COgLrlEX.js";import"./tick-CP0_BxF4.js";import"./svgIconContainer-DPn7rviW.js";import"./small-cross-CMpAYwo5.js";import"./search-3iLspLPL.js";import"./cross-dxd-Id56.js";import"./useValueChanged-Ct8XmU90.js";import"./getPseudoElementBounds-Csujpg1_.js";import"./CompositeItem-CfgwqBcM.js";import"./makeExternalStore-CM9PbEJi.js";import"./BaseForm-U96MC-_N.js";import"./ActionButton-DQQo_XtV.js";import"./Button-BnJ18iND.js";import"./SkeletonBar-BpKKsUbf.js";import"./Tooltip-bRJHJ7Na.js";import"./info-sign-Ci_m0MN1.js";import"./chevron-up-Duf7h6j4.js";import"./chevron-down-dCWUIGnY.js";import"./useEventCallback-DopCgfn9.js";import"./iconLoader-CKjEK2aM.js";import"./Switch-CWllIUuW.js";import"./CompositeRoot-D_X3yfRq.js";import"./TimePicker-CcObq_tF.js";import"./CollapsiblePanel-Ddch5XBZ.js";import"./error-DzMg1FzE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8-SwDYi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
