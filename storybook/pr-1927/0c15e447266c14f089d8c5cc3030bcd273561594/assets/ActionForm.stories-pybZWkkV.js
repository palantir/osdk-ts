import{j as t,g as n}from"./iframe-QQ9Fs_tc.js";import{A as r}from"./action-form-86aKKz6u.js";import"./preload-helper-B4fYryDC.js";import"./DropdownField-B-kw3xxE.js";import"./debounce-Ds7iogVo.js";import"./useOsdkClient-DtjCwYRE.js";import"./index-DkrQDtS2.js";import"./Input-CucLW42P.js";import"./useBaseUiId-1r5VJFrp.js";import"./useControlled-36aB-sGp.js";import"./index-D63-R6ut.js";import"./index-DsjkNNfA.js";import"./PopoverPopup-LQKhjub2.js";import"./InternalBackdrop-CV3kvSS-.js";import"./composite-2UwVI9RX.js";import"./index-DN5mWcju.js";import"./getDisabledMountTransitionStyles-2ojh7cGB.js";import"./ToolbarRootContext-YsoXVLyq.js";import"./tick-fiXJSjT8.js";import"./svgIconContainer-DTxq_i5h.js";import"./small-cross-CwQDMn6h.js";import"./search-BSq4Mlrv.js";import"./cross-DmvM--6P.js";import"./useValueChanged-zGcUW3kI.js";import"./getPseudoElementBounds-DXdFGrw3.js";import"./CompositeItem-Bl0uQaQG.js";import"./makeExternalStore-kQ-0-i1V.js";import"./BaseForm-D2Cv3ToW.js";import"./ActionButton-D_tYhxEf.js";import"./Button-DJziOx5S.js";import"./SkeletonBar-bIWrP7Fa.js";import"./Tooltip-BPNAr5X_.js";import"./info-sign-CjJ34hdX.js";import"./chevron-up-Dba1kWyK.js";import"./chevron-down-Bgnu4jc9.js";import"./useEventCallback-UDwFt7_R.js";import"./iconLoader-CSlo4Rzd.js";import"./CompositeRoot-B0X_7QWj.js";import"./Switch-BG7CW6D6.js";import"./TimePicker-BeJcp8o2.js";import"./CollapsiblePanel-B9w9s6OF.js";import"./error-DTTckfDx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-MEpQgkcH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
