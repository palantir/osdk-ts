import{j as t,g as n}from"./iframe-_lLrSj1r.js";import{A as r}from"./action-form-DUyT8y83.js";import"./preload-helper--K06I6bX.js";import"./DropdownField-D01ccTug.js";import"./debounce-CT5Ar2jy.js";import"./useOsdkClient-BGeTWEem.js";import"./index-u4LjU3wy.js";import"./Input-ByElj6b4.js";import"./useBaseUiId-Bc8GG6V8.js";import"./useControlled-ef7rEDgw.js";import"./index-DMVKgr18.js";import"./index-_W33FQQz.js";import"./PopoverPopup-DmehJnCH.js";import"./InternalBackdrop-Lf90Fmle.js";import"./composite-BZPxrUSk.js";import"./index-BbJyxAJY.js";import"./getDisabledMountTransitionStyles-5zflYeEg.js";import"./ToolbarRootContext-DHD80eI9.js";import"./tick-BhMF4eWB.js";import"./svgIconContainer-mBZD1oTc.js";import"./small-cross-MPNxrGPx.js";import"./search-BsFDT1OC.js";import"./cross-Cf8HUSkr.js";import"./useValueChanged-B2NcodEa.js";import"./getPseudoElementBounds-_MMb03QT.js";import"./CompositeItem-DQchaMiL.js";import"./makeExternalStore-CBJvRSBt.js";import"./BaseForm-C5LfE78v.js";import"./ActionButton-DkdffwG3.js";import"./Button-DtR0BNuF.js";import"./SkeletonBar-4yDHQYXq.js";import"./Tooltip-D9sqgv57.js";import"./info-sign-BFaOHxB4.js";import"./chevron-up-BuVKIe-6.js";import"./chevron-down-DeOYs4U6.js";import"./useEventCallback-r8S4G08J.js";import"./iconLoader-CaWTuCFT.js";import"./Switch-DMVbCn1o.js";import"./CompositeRoot-BLbkv49G.js";import"./TimePicker-CUNIuaIg.js";import"./CollapsiblePanel-DSAb5O_U.js";import"./error-po7axJSl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-cH-rirPE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
