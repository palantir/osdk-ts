import{j as t,g as n}from"./iframe-DM1KpbCL.js";import{A as r}from"./action-form-Dg9jIa1k.js";import"./preload-helper-B5lE_CeJ.js";import"./DropdownField-ByM8k4kQ.js";import"./debounce-CcYDWLT0.js";import"./useOsdkClient-2PfnP7RQ.js";import"./index-CcTzWx10.js";import"./Input-rJPz8yLN.js";import"./useBaseUiId-BS0ydcCd.js";import"./useControlled-BpM5Znsw.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./PopoverPopup-B7nGMxdA.js";import"./InternalBackdrop-BafR-jVe.js";import"./composite-UHbWR1-V.js";import"./index-DzseGhFT.js";import"./getDisabledMountTransitionStyles-BnK3lh8Z.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./tick-Dp0UZtnJ.js";import"./svgIconContainer-D9_cFA2L.js";import"./small-cross-D217SYw1.js";import"./search-CDaKZsSd.js";import"./cross-CnFtk43X.js";import"./useValueChanged-BvcJAZcs.js";import"./getPseudoElementBounds-CmPQacu1.js";import"./CompositeItem-DEphRU8b.js";import"./makeExternalStore-ZdV9YzEC.js";import"./BaseForm-DhcYxI2F.js";import"./ActionButton-CWh3vKDS.js";import"./Button-DbYUMIvf.js";import"./SkeletonBar-CIbWgRcz.js";import"./Tooltip-DJZfHa2w.js";import"./info-sign-DV-VVw-K.js";import"./chevron-up-CL4mdyy-.js";import"./chevron-down-B55CqhSV.js";import"./useEventCallback-CPGZvpaV.js";import"./iconLoader-CAYRbBy9.js";import"./Switch-C9QObWM0.js";import"./CompositeRoot-C-13SY6Q.js";import"./TimePicker-ghONVSH2.js";import"./CollapsiblePanel-BCYCJ6Xx.js";import"./error-BpWcPv0-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dzlv9-Px.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
