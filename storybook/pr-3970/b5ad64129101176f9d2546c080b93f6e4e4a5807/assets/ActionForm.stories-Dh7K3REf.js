import{j as t,g as n}from"./iframe-DFSfQ_aP.js";import{A as r}from"./action-form-asjg6Rmc.js";import"./preload-helper-DJLQJiWb.js";import"./DropdownField-DcUwV0uD.js";import"./debounce-C679H-9B.js";import"./useOsdkClient-Cq2Nb_5Z.js";import"./index-CHPYvPwX.js";import"./Input-B4nqbncu.js";import"./useBaseUiId-DCyghABl.js";import"./useControlled-DXWD0Znz.js";import"./index-CQjeWbkR.js";import"./index-ASrgrlRW.js";import"./PopoverPopup-246_BZ4N.js";import"./InternalBackdrop-C3LI9WHn.js";import"./composite-BX_h9XZf.js";import"./index-BomX2u3n.js";import"./getDisabledMountTransitionStyles-vXpnLO87.js";import"./ToolbarRootContext-BpJBwGb-.js";import"./tick-B1n0K6Q7.js";import"./svgIconContainer-BpYc0jTS.js";import"./small-cross-Ck6yssSu.js";import"./search-HIhGbyYm.js";import"./cross-Ce3cqE51.js";import"./useValueChanged-DcWoVdTs.js";import"./getPseudoElementBounds-Bka1lmS1.js";import"./CompositeItem-CyzwHVke.js";import"./makeExternalStore-DeP1q7OZ.js";import"./BaseForm-C6ORozgM.js";import"./ActionButton-DNBUhcHU.js";import"./Button-BpGPHejG.js";import"./SkeletonBar-BXnis-nv.js";import"./Tooltip-CNCLPMyb.js";import"./info-sign-CNasLblL.js";import"./chevron-up-JLfL1A1a.js";import"./chevron-down-D8HcwDY0.js";import"./useEventCallback-CWkq5eG5.js";import"./iconLoader-DIpavS16.js";import"./CompositeRoot-CgZWLN7d.js";import"./Switch-D2cI_Rew.js";import"./TimePicker-DhllLsfG.js";import"./CollapsiblePanel-BsoK_9-k.js";import"./error-D7U43ngn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFtGdwbh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
