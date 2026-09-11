import{j as t,g as n}from"./iframe-IYYJd2m9.js";import{A as r}from"./action-form-BUVxuBN7.js";import"./preload-helper-BFRTU8XL.js";import"./DropdownField-Cb58jruB.js";import"./debounce-lUqXN7vV.js";import"./useOsdkClient-BfouKB8F.js";import"./index-Db-eG3LN.js";import"./Input-0frZHORa.js";import"./useBaseUiId-gMGlPD7U.js";import"./useControlled-2w2YfNvU.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./PopoverPopup-J11dr7bo.js";import"./InternalBackdrop-6rPcc_n0.js";import"./composite-CvcKSveb.js";import"./index-cmlbejKx.js";import"./getDisabledMountTransitionStyles-58Y24a1v.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./tick-ChhTG65X.js";import"./svgIconContainer-B0Zw0e2B.js";import"./small-cross-D1iJnykI.js";import"./search-CUDcYcS5.js";import"./cross-KJA2o58Q.js";import"./useValueChanged-BOlMICo1.js";import"./getPseudoElementBounds-CCefMmxm.js";import"./CompositeItem-B-bfj5TP.js";import"./makeExternalStore-DEaKK2Sx.js";import"./BaseForm-pEWGeS7S.js";import"./ActionButton-HX3-dAro.js";import"./Button-DQEdYpKK.js";import"./SkeletonBar-C63LV7Rk.js";import"./Tooltip-CGjryGi2.js";import"./info-sign-CQ22Bpc0.js";import"./chevron-up-Cay2t7o7.js";import"./chevron-down-B1MpC4Hz.js";import"./useEventCallback-BRAtMScW.js";import"./iconLoader-BndMvOR0.js";import"./CompositeRoot-DgVuP1d7.js";import"./Switch-AYMGyFS7.js";import"./TimePicker-BIi423bb.js";import"./CollapsiblePanel-aw6L5bfc.js";import"./error-B-Yx8VFp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DxXSp5TR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
