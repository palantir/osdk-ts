import{j as t,g as n}from"./iframe-_xCtEPM4.js";import{A as r}from"./action-form-D7ma0fKh.js";import"./preload-helper-BvkLr_T8.js";import"./DropdownField-DARaJilg.js";import"./debounce-BLKiEPm1.js";import"./useOsdkClient-CsHMVj33.js";import"./index-BBF2nMyv.js";import"./Input-CbxbAG1i.js";import"./useBaseUiId-qq3Q_R-A.js";import"./useControlled-BqnjfWyt.js";import"./index-Ch2OG5I0.js";import"./index-oRHr0Ey_.js";import"./isObject-BjXVlsmF.js";import"./InternalBackdrop-Dhb2Gme1.js";import"./composite-RG9aVNdC.js";import"./index-Czl8XPIs.js";import"./getDisabledMountTransitionStyles-DbKz4kaQ.js";import"./ToolbarRootContext-B_pkS0jH.js";import"./tick-BpxRmUp6.js";import"./svgIconContainer-5YMx1lyC.js";import"./small-cross-CbC-3xN6.js";import"./search-EgEnIgJy.js";import"./cross-YJjC_kdM.js";import"./useValueChanged-MMHfjh9x.js";import"./getPseudoElementBounds-FFlb83uV.js";import"./CompositeItem-C0afETt6.js";import"./makeExternalStore-DP7fUFlc.js";import"./BaseForm-d0-ECi39.js";import"./ActionButton-C2zs3wiy.js";import"./Button-B5hG9nBO.js";import"./SkeletonBar-BWH5Ax4a.js";import"./Tooltip-CRHJdF88.js";import"./info-sign-Kpjstcue.js";import"./chevron-up-UTj1N2qv.js";import"./chevron-down-Dgi1lUDW.js";import"./useEventCallback-jAZccFQT.js";import"./iconLoader-BCit92zm.js";import"./Switch-loKBtm-L.js";import"./CompositeRoot-BPGEspbY.js";import"./TimePicker-kFPP4rVm.js";import"./CollapsiblePanel-ZHKipLnY.js";import"./error-CPk-KRIB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Sswq0Wu_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
