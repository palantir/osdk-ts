import{j as t,g as n}from"./iframe-RR2p5XOS.js";import{A as r}from"./action-form-DB2wb-x5.js";import"./preload-helper-BOhV1rHy.js";import"./DropdownField-BhQ_noy4.js";import"./debounce-C5ix3ZOK.js";import"./useOsdkClient-BpUTBA14.js";import"./index-DnsNcod6.js";import"./Input-e_TaAvAj.js";import"./useBaseUiId-C9ZH8_C_.js";import"./useControlled-CigCjjeU.js";import"./index-HN-AhAeO.js";import"./index-DKLD7YVV.js";import"./PopoverPopup-DAEl5eG3.js";import"./InternalBackdrop-BxeUUCts.js";import"./composite-p_UpWlex.js";import"./index-DgWiLO56.js";import"./getDisabledMountTransitionStyles-BCr5Qv_S.js";import"./ToolbarRootContext-BDIbARai.js";import"./tick-CcC4crvR.js";import"./svgIconContainer-u0oJjKFx.js";import"./small-cross-BtGjVAe0.js";import"./search-DcbJPUOn.js";import"./cross-CR4LSxOQ.js";import"./useValueChanged-CGaBoYZG.js";import"./getPseudoElementBounds-uKSjW76O.js";import"./CompositeItem-suN-dd_e.js";import"./makeExternalStore-CT6Maj4O.js";import"./BaseForm-CsO55mwk.js";import"./ActionButton-BmrzLlcQ.js";import"./Button-Fi5pU_nf.js";import"./SkeletonBar-DK4NsRE-.js";import"./Tooltip-YxXLOr_X.js";import"./info-sign-DpsBdLtx.js";import"./chevron-up-CTeXYASG.js";import"./chevron-down-CB1UmGgK.js";import"./useEventCallback-DUUjHCf-.js";import"./iconLoader-sSlM4Ojs.js";import"./CompositeRoot-Ch6KSj3o.js";import"./Switch-Ccrr6Tzv.js";import"./TimePicker-Cda1X-qf.js";import"./CollapsiblePanel-lZY_ExWV.js";import"./error-CMBIrR-E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRbYLGlL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
