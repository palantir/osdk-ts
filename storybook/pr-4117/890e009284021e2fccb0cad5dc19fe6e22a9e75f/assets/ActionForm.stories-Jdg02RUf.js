import{j as t,g as n}from"./iframe-BNXnxiJa.js";import{A as r}from"./action-form-CWugB6N7.js";import"./preload-helper-CT8T0PJp.js";import"./DropdownField-7JT5lhAG.js";import"./debounce-Dw0w9syk.js";import"./useOsdkClient-CKYOKSIJ.js";import"./index-Ch-h42fp.js";import"./Input-BQdVPwVd.js";import"./useBaseUiId-BjmHkgmf.js";import"./useControlled-DBRd_jSA.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./PopoverPopup-C9jn2tje.js";import"./InternalBackdrop-PmKOV69k.js";import"./composite-Cinouu0K.js";import"./index-KZulTNIE.js";import"./getDisabledMountTransitionStyles-TqKYti97.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./tick-DtOuh9ys.js";import"./svgIconContainer-T3xea5l3.js";import"./small-cross-r42AjjlG.js";import"./search-DQwSGm2k.js";import"./cross-DNfPdLmM.js";import"./useValueChanged-BMp_-0Ka.js";import"./getPseudoElementBounds-C28IzjDZ.js";import"./CompositeItem-Ch_wyKgR.js";import"./makeExternalStore-C77jTvWN.js";import"./BaseForm-0T2NwnOu.js";import"./ActionButton-CuFNzu9O.js";import"./Button-CDesYXNY.js";import"./SkeletonBar-C4SZgVA_.js";import"./Tooltip-Depdrqez.js";import"./info-sign-BplwrG55.js";import"./chevron-up-dgHxhiX5.js";import"./chevron-down-CLu6_2JJ.js";import"./useEventCallback-BmB9ehFQ.js";import"./iconLoader-Dt2o8Zvv.js";import"./Switch-CWkV1oEV.js";import"./CompositeRoot-ZSwej2GF.js";import"./TimePicker-2JFq8vwB.js";import"./CollapsiblePanel-BKAENuDp.js";import"./error-BMUe0AWc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CGp4DYy1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
