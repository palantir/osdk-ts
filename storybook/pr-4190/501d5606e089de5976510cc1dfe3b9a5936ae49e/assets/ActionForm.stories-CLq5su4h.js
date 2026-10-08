import{j as t,g as n}from"./iframe-BaqisVl-.js";import{A as r}from"./action-form-CcwAO8Xi.js";import"./preload-helper-BNi0jLvn.js";import"./DropdownField-S_mE2t2D.js";import"./debounce-BYezYolD.js";import"./useOsdkClient-D7dXXw4f.js";import"./index-DsJxcxuD.js";import"./Input-CegZe646.js";import"./useBaseUiId-CZNOvWOX.js";import"./useControlled-CryTPf8E.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./PopoverPopup-BpgX9bSu.js";import"./InternalBackdrop-up968Klp.js";import"./composite-DaM8qI8D.js";import"./index-A62OeQPQ.js";import"./getDisabledMountTransitionStyles-CHGeqOic.js";import"./ToolbarRootContext-DvsCcilH.js";import"./tick-Sp8vA4eE.js";import"./svgIconContainer-TSbWa_lF.js";import"./small-cross-BYjsDC9b.js";import"./search-xoA6p7gs.js";import"./cross-NcNTP23a.js";import"./useValueChanged-CZOqhP_j.js";import"./getPseudoElementBounds-BGR3l_iX.js";import"./CompositeItem-oqc0csOw.js";import"./makeExternalStore-DaHYiupK.js";import"./BaseForm-FEMFyGe2.js";import"./ActionButton-Cn9rIuq9.js";import"./Button-BTfyWfru.js";import"./SkeletonBar-fHefpQx1.js";import"./Tooltip-Cy4Rx_YN.js";import"./info-sign-DCKH9sIr.js";import"./chevron-up-Bmq9Nv-b.js";import"./chevron-down-DUYAtgkB.js";import"./useEventCallback-DY-p_fZ5.js";import"./iconLoader-CKGoiI6s.js";import"./Switch-DZjm65yG.js";import"./CompositeRoot-TUnXLOhi.js";import"./TimePicker-Dhc2Fzvu.js";import"./CollapsiblePanel-D6lMZr7T.js";import"./error-USmwsDsu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQLdSUZI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
