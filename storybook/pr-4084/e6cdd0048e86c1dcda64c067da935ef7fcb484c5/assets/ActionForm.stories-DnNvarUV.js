import{j as t,g as n}from"./iframe-DopY1iFB.js";import{A as r}from"./action-form-Cxq9T5VW.js";import"./preload-helper-vT8POVDR.js";import"./DropdownField-hIeQcSW8.js";import"./debounce-B5Mx60fy.js";import"./useOsdkClient-BB4N8s6G.js";import"./index-CCfIWMGJ.js";import"./Input-DdA-yANI.js";import"./useBaseUiId-z-VkK_Xn.js";import"./useControlled-ClnCU8CR.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./PopoverPopup-CUxKzeOX.js";import"./InternalBackdrop-DaE_AKxd.js";import"./composite-BGFtTgn-.js";import"./index-C_zMkdHf.js";import"./getDisabledMountTransitionStyles-DGXlslWy.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./tick-_PIvioO0.js";import"./svgIconContainer-DKL3lG_j.js";import"./small-cross-B8texXT0.js";import"./search-CxfNGXVV.js";import"./cross-y3ZfqzAA.js";import"./useValueChanged-3u49EqeQ.js";import"./getPseudoElementBounds-_OfctKy9.js";import"./CompositeItem-D98VU1_Q.js";import"./makeExternalStore-B0UtzOn_.js";import"./BaseForm--YV7ecl1.js";import"./ActionButton-BHuru14O.js";import"./Button-BegRP6Wf.js";import"./SkeletonBar-DK89tHws.js";import"./Tooltip-qqUuKaYI.js";import"./info-sign-DdrF7ZFQ.js";import"./chevron-up-D3orJZRH.js";import"./chevron-down-Cn7sl9Ua.js";import"./useEventCallback-D2MDEmYo.js";import"./iconLoader-BrFw86jv.js";import"./Switch-Dj3b_9Lz.js";import"./CompositeRoot-1iYFDpbP.js";import"./TimePicker-iNS4XmOm.js";import"./CollapsiblePanel-BqNboL-f.js";import"./error-CTe9ttET.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BFGwpRHC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
