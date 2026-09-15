import{j as t,g as n}from"./iframe-BNZD3xWg.js";import{A as r}from"./action-form-CE82nOfS.js";import"./preload-helper-C3FmIxER.js";import"./DropdownField-BAuDkUJ8.js";import"./debounce-7pf6IyfH.js";import"./useOsdkClient-GLyZrDFl.js";import"./index-DOv_cZ9G.js";import"./Input-QTs7hrar.js";import"./useBaseUiId-Dm_OUu_u.js";import"./useControlled-izS6CBB9.js";import"./index-D51f32rH.js";import"./index-CQVklmSU.js";import"./PopoverPopup-BpDE3RlV.js";import"./InternalBackdrop-BFsJkA1x.js";import"./composite-BtkXGRWa.js";import"./index-BtQYwxEN.js";import"./getDisabledMountTransitionStyles-DmpA5T4h.js";import"./ToolbarRootContext-CS1sgrs1.js";import"./tick-DVVaLwh_.js";import"./svgIconContainer-2ty1idXI.js";import"./small-cross-DBXsh9Ix.js";import"./search-B_H93lCU.js";import"./cross-CNjRLxpn.js";import"./useValueChanged-BbIQrdRC.js";import"./getPseudoElementBounds-BO8kaTMX.js";import"./CompositeItem-36LgHZ7r.js";import"./makeExternalStore-XG9GYQLa.js";import"./BaseForm-CzMuyvhd.js";import"./ActionButton-CuJpLSkR.js";import"./Button-S_R7mlWx.js";import"./SkeletonBar-DmSABcIx.js";import"./Tooltip-COOoNd0R.js";import"./info-sign-CpD4Oikv.js";import"./chevron-up-CJk4cKuz.js";import"./chevron-down-CH0o2x3k.js";import"./useEventCallback-Q_QbXmVH.js";import"./iconLoader-D8GXL6lx.js";import"./CompositeRoot-C0PrO6wr.js";import"./Switch-Bu8FSrx1.js";import"./TimePicker-Ds2EPLqQ.js";import"./CollapsiblePanel-D4Aw1Qj0.js";import"./error-_5L66YQC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-X-R-b_lc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
