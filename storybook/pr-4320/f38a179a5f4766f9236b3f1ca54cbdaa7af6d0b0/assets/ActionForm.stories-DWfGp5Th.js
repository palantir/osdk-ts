import{j as t,g as n}from"./iframe-DvvsknHZ.js";import{A as r}from"./action-form-D8OAdiwS.js";import"./preload-helper-B7RcIo-x.js";import"./DropdownField-keYRULb0.js";import"./debounce-7jKtScuE.js";import"./useOsdkClient-COXkAQJS.js";import"./index-BXq-npjw.js";import"./Input-BoS4yQSc.js";import"./useBaseUiId-pUFvyVHu.js";import"./useControlled-DdoeZPFa.js";import"./index-BvLG983R.js";import"./index-B-EIevQb.js";import"./PopoverPopup-CUfcT_az.js";import"./InternalBackdrop-8CXRVLpP.js";import"./composite-B7vL0viI.js";import"./index-CjvFBH5-.js";import"./getDisabledMountTransitionStyles-Ndk95izG.js";import"./ToolbarRootContext-wkwm_H2V.js";import"./tick-DLmYlJNm.js";import"./svgIconContainer-B68gmxzG.js";import"./small-cross-CjoP5etI.js";import"./search-DO24WHTI.js";import"./cross-CVayjJ6n.js";import"./useValueChanged-C8_UfD93.js";import"./getPseudoElementBounds-CZDJgWkH.js";import"./CompositeItem-CPdzs_zJ.js";import"./makeExternalStore-tEc9bJ3H.js";import"./BaseForm-qinmgte9.js";import"./ActionButton-DPMqraix.js";import"./Button-D89LqMeP.js";import"./SkeletonBar-Bi99HG7c.js";import"./Tooltip-BFA62Jc4.js";import"./info-sign-DTNTRbgk.js";import"./chevron-up-DpCprlmH.js";import"./chevron-down-C_1zArjr.js";import"./useEventCallback-CnE_RJva.js";import"./iconLoader-BKt5yrEi.js";import"./Switch-BKueV-MK.js";import"./CompositeRoot-DIySxg7S.js";import"./TimePicker-D8KX2R_n.js";import"./CollapsiblePanel-Chc1gEI_.js";import"./error-b08krvJC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DvI-Ja_4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
