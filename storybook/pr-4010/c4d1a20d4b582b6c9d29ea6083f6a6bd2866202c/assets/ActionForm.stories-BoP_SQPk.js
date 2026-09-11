import{j as t,g as n}from"./iframe-B8lzwm22.js";import{A as r}from"./action-form-BC6quuZO.js";import"./preload-helper-DZpogDck.js";import"./DropdownField-DzdO8ho7.js";import"./debounce-DS0sFmBW.js";import"./useOsdkClient-BOXKzBN3.js";import"./index-V8AdOqgd.js";import"./Input-CzpDwduI.js";import"./useBaseUiId-9i5seKgC.js";import"./useControlled-9IIZJlu3.js";import"./index-B1F9PCAn.js";import"./index-DA6AQTMf.js";import"./PopoverPopup-CAo52PJc.js";import"./InternalBackdrop-Dm3w5lyn.js";import"./composite-BgrU9ffv.js";import"./index-DKCrzgsd.js";import"./getDisabledMountTransitionStyles-CgeJIM6-.js";import"./ToolbarRootContext-8Dlenei2.js";import"./tick-CC6mSPPg.js";import"./svgIconContainer-CXVvUd5F.js";import"./small-cross-hDui4OeT.js";import"./search-CJEfvURK.js";import"./cross-BjwwvSsI.js";import"./useValueChanged-B5KtwkUp.js";import"./getPseudoElementBounds-CCplqQNV.js";import"./CompositeItem-DEvZ_JsZ.js";import"./makeExternalStore-BIgSRA9g.js";import"./BaseForm-DO1QiJWt.js";import"./ActionButton-CU9gdIlX.js";import"./Button-DINiSESc.js";import"./SkeletonBar-Bas3_Wlo.js";import"./Tooltip-B9fsMvs_.js";import"./info-sign-Dtxi8Rvr.js";import"./chevron-up-Cqb2zn9U.js";import"./chevron-down-98nms22W.js";import"./useEventCallback-DeeBfsBF.js";import"./iconLoader-C8JoOoxT.js";import"./CompositeRoot-B0fFzO_U.js";import"./Switch-9zOQc8bh.js";import"./TimePicker-CLxMRNuT.js";import"./CollapsiblePanel-Y638CsIO.js";import"./error-D8O5Gu9w.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRdTEDjT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
