import{j as t,g as n}from"./iframe-DXehzrLy.js";import{A as r}from"./action-form-z17YeQEs.js";import"./preload-helper-kK_P88Zt.js";import"./DropdownField-CNXn3QuQ.js";import"./debounce-Bq9WTc_K.js";import"./useOsdkClient-DcXtZI_6.js";import"./index-CXAIDCBV.js";import"./Input-CpfpiQM-.js";import"./useBaseUiId-DZnCUGwj.js";import"./useControlled-Dzo11YgF.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./PopoverPopup-BMj9dgf7.js";import"./InternalBackdrop-CT6Wdma2.js";import"./composite-DYr_GRHn.js";import"./index-Dnoineba.js";import"./getDisabledMountTransitionStyles-DTMwFgZF.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./tick-D67MiW11.js";import"./svgIconContainer-DQDL5XU9.js";import"./small-cross-VrEzkJ3d.js";import"./search-DeuEp5ow.js";import"./cross-CRuTMTSr.js";import"./useValueChanged-CFb9BlJL.js";import"./getPseudoElementBounds-CdE3xhre.js";import"./CompositeItem-B8unsUL4.js";import"./makeExternalStore-CXnsRNRI.js";import"./BaseForm-Cet6iWri.js";import"./ActionButton-t4tgv0qW.js";import"./Button-arOEvFAs.js";import"./SkeletonBar-DJmf5vx2.js";import"./Tooltip-D3vpqYyy.js";import"./info-sign-BCYGPnCH.js";import"./chevron-up-CdeLDbJF.js";import"./chevron-down-D0FRwBSH.js";import"./useEventCallback-CZG_LILO.js";import"./iconLoader-BKCdkV0M.js";import"./Switch-BO_KyRsK.js";import"./CompositeRoot-IrgHa_Dk.js";import"./TimePicker-DRreGK1g.js";import"./CollapsiblePanel-Cc67GzP9.js";import"./error-DuLOR7GK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CA3oK6ip.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
