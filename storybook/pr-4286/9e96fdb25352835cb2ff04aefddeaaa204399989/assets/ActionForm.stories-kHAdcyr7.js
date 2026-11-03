import{j as t,g as n}from"./iframe-CH27AqHZ.js";import{A as r}from"./action-form-Dy1WUsDC.js";import"./preload-helper-DGi0xS-h.js";import"./DropdownField-Xq1F_pI0.js";import"./debounce-DQvh5AcE.js";import"./useOsdkClient-DOGyfDWc.js";import"./index-D1s_GF0g.js";import"./Input-BZHUVJPq.js";import"./useBaseUiId-Bqw5UKiE.js";import"./useControlled-bZT9hVeg.js";import"./index-w-QWzjNw.js";import"./index-idKZoric.js";import"./PopoverPopup-dBkoEvm7.js";import"./InternalBackdrop-Evn3ET9-.js";import"./composite-C0QdjDW_.js";import"./index-lRC7FyDu.js";import"./getDisabledMountTransitionStyles-BC1jSC_a.js";import"./ToolbarRootContext-CS86aP8Z.js";import"./tick-BpVCvq9_.js";import"./svgIconContainer-CAAPLquq.js";import"./small-cross-20hmyH-H.js";import"./search-BvrU7tK_.js";import"./cross-wK4dNyGg.js";import"./useValueChanged-NcbXJrC1.js";import"./getPseudoElementBounds-CtFtcdYV.js";import"./CompositeItem-Bp-0qryG.js";import"./makeExternalStore-D2OeNChh.js";import"./BaseForm-CnO0CFrO.js";import"./ActionButton-D3WKqPWv.js";import"./Button-C_aQELrm.js";import"./SkeletonBar-B3ahzSk9.js";import"./Tooltip-Bz17X0U3.js";import"./info-sign-6N3B4uYT.js";import"./chevron-up-CCZRyy15.js";import"./chevron-down-BknLO_BB.js";import"./useEventCallback-BFq5H1RT.js";import"./iconLoader-IiNbiIXD.js";import"./Switch-CAo-gpDy.js";import"./CompositeRoot-Cft2Zrfg.js";import"./TimePicker-CoHYxKrh.js";import"./CollapsiblePanel-BPS1IKxI.js";import"./error-ADuRb4lm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-w7ir5H-Z.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
