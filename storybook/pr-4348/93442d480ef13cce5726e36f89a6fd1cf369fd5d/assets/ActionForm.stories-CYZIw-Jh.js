import{j as t,g as n}from"./iframe-DsqGSzyQ.js";import{A as r}from"./action-form-Dgfxxwtc.js";import"./preload-helper-C2TDGnFx.js";import"./DropdownField-Hwe25ldg.js";import"./debounce--Ga5NP20.js";import"./useOsdkClient-BfsVu55M.js";import"./index-CVVe8LYW.js";import"./Input-DxF0Wzlw.js";import"./useBaseUiId-CLwdfekz.js";import"./useControlled-DnGJzKUi.js";import"./index-BUfWM760.js";import"./index-CQfkRNgK.js";import"./PopoverPopup-DDE-QaKN.js";import"./InternalBackdrop-Bcj0VMJA.js";import"./composite-KVqYkGkg.js";import"./index-DFzEYbU7.js";import"./getDisabledMountTransitionStyles-DTGPpCwR.js";import"./ToolbarRootContext-Bbhq9Lsc.js";import"./tick-BSaw4Ihw.js";import"./svgIconContainer-BTnUylTl.js";import"./small-cross-yxECI3O6.js";import"./search-Dp0YAnmc.js";import"./cross-OIVk5Jqz.js";import"./useValueChanged-DmOLE1TI.js";import"./getPseudoElementBounds-DHuKM7P-.js";import"./CompositeItem-D_FxDdAh.js";import"./makeExternalStore-CwrRFGw-.js";import"./BaseForm-DRpkvazD.js";import"./ActionButton-DOoFHg12.js";import"./Button-CG3H6I69.js";import"./SkeletonBar-OWdeOMzd.js";import"./Tooltip-C8RXxpoJ.js";import"./info-sign-CFLtPvvr.js";import"./chevron-up-BTMbOP3i.js";import"./chevron-down-DbLJwh-Y.js";import"./useEventCallback-BUxfyhL3.js";import"./iconLoader-DldzId6K.js";import"./Switch-Bn8CpDXB.js";import"./CompositeRoot-CNLokZ0d.js";import"./TimePicker-C6al8n-O.js";import"./CollapsiblePanel-CENIho0X.js";import"./error-CSEdl-5d.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-nmEcK_Vs.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
