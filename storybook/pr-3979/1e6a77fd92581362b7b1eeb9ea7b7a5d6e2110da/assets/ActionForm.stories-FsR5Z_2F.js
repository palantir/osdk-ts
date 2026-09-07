import{j as t,g as n}from"./iframe-E5iWaRrU.js";import{A as r}from"./action-form-q9cABUNl.js";import"./preload-helper-Dqk_s4rt.js";import"./DropdownField-Cjcq2217.js";import"./debounce-B9bcrHjS.js";import"./useOsdkClient-CYVurRKB.js";import"./index-C3_SZq7Z.js";import"./Input-C3CP2H26.js";import"./useBaseUiId-D4npvdT-.js";import"./useControlled-Df4M33J1.js";import"./index-DceoitFi.js";import"./index-BbXCDRNC.js";import"./PopoverPopup-CPj_RJ75.js";import"./InternalBackdrop-DDD6NSDl.js";import"./composite-Bz9wP40Z.js";import"./index-D75HgB7Y.js";import"./getDisabledMountTransitionStyles-yQAdsL-J.js";import"./ToolbarRootContext-CBnKcEyp.js";import"./tick-BpTe-h6v.js";import"./svgIconContainer-DEuUBUqq.js";import"./small-cross-WUKc4wzh.js";import"./search-ChBTd86p.js";import"./cross-JL-akl7t.js";import"./useValueChanged-EVQifgYs.js";import"./getPseudoElementBounds-CQAue5bo.js";import"./CompositeItem-DMa2K3iN.js";import"./makeExternalStore-HEA345T9.js";import"./BaseForm-BYS36AaV.js";import"./ActionButton-CxLb80et.js";import"./Button-Cat6_J_5.js";import"./SkeletonBar-YbzI2HU-.js";import"./Tooltip-BMHXT91H.js";import"./info-sign-Cg-5q3rR.js";import"./chevron-up-R6w8nLhJ.js";import"./chevron-down-BkyonfV4.js";import"./useEventCallback-CyXvLOTQ.js";import"./iconLoader-YZXMCBQU.js";import"./CompositeRoot-MwrLvCAJ.js";import"./Switch-CWJj6yRD.js";import"./TimePicker-CJOaF1Vd.js";import"./CollapsiblePanel-BrkpisiN.js";import"./error-DXOYczi7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-h-AdLa11.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
