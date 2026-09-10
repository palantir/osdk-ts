import{j as t,g as n}from"./iframe-CJdhljqY.js";import{A as r}from"./action-form-gmzFLiqI.js";import"./preload-helper-Dt50QPrM.js";import"./DropdownField-BRJuo5am.js";import"./debounce-DmZlAZ0B.js";import"./useOsdkClient-DoLuxURC.js";import"./index-C_XWhVsk.js";import"./Input-MNhthrzu.js";import"./useBaseUiId-DhLXeG5Q.js";import"./useControlled-DxG1_BRX.js";import"./index-CiaROGr7.js";import"./index-PvN9PIAf.js";import"./PopoverPopup-JStXvDFZ.js";import"./InternalBackdrop-BZc-gUEh.js";import"./composite-CMxCP_fe.js";import"./index-B0u6fGpW.js";import"./getDisabledMountTransitionStyles-DjY5DFv9.js";import"./ToolbarRootContext-BUjzSc7s.js";import"./tick-9_KQHHd1.js";import"./svgIconContainer-DfUk_uW1.js";import"./small-cross-4RRmn2cJ.js";import"./search-KsJ5YUkQ.js";import"./cross-xpJwG0PM.js";import"./useValueChanged-WbLrwhHG.js";import"./getPseudoElementBounds-DjMkCYmI.js";import"./CompositeItem-D1aj4ASS.js";import"./makeExternalStore-JX4u0CWz.js";import"./BaseForm-C3pDPwLV.js";import"./ActionButton-NXakpU_-.js";import"./Button-BW0xuowo.js";import"./SkeletonBar-Do_BGkRf.js";import"./Tooltip-DXKWPKVU.js";import"./info-sign-H3hk3tCu.js";import"./chevron-up-C-egzvGQ.js";import"./chevron-down-HDas2nyI.js";import"./useEventCallback-BSb5aBsV.js";import"./iconLoader-B3-VuW93.js";import"./CompositeRoot-BAJ3naX0.js";import"./Switch-BJvqm6ym.js";import"./TimePicker-Wv_G6krr.js";import"./CollapsiblePanel-Cc53AZ9G.js";import"./error-De8eomlR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C23PGbte.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
