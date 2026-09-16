import{j as t,g as n}from"./iframe-BOatYE2J.js";import{A as r}from"./action-form-Y5oUFfZI.js";import"./preload-helper-Chit4ifE.js";import"./DropdownField-DbWikUpM.js";import"./debounce-CCaPPTId.js";import"./useOsdkClient-DdxPj0N7.js";import"./index-BTbb2drj.js";import"./Input-CNyJfF3s.js";import"./useBaseUiId-C3kAyh59.js";import"./useControlled-Gz1ZIwEo.js";import"./index-CYDTlvor.js";import"./index-B1tLDNpR.js";import"./PopoverPopup-BHiQJeAc.js";import"./InternalBackdrop-B0G1EUFd.js";import"./composite-Cutn8tDa.js";import"./index-CxfJdBYp.js";import"./getDisabledMountTransitionStyles-C5-4kkSQ.js";import"./ToolbarRootContext-DP6Z5eRQ.js";import"./tick-Dz18GSdv.js";import"./svgIconContainer-BIZPnmJE.js";import"./small-cross-Cr4POQeq.js";import"./search-DeiNtXAA.js";import"./cross-DZBv_JyD.js";import"./useValueChanged-DaoI3wNN.js";import"./getPseudoElementBounds-D7Flotzx.js";import"./CompositeItem-Cc_WknAx.js";import"./makeExternalStore-uURBDsal.js";import"./BaseForm-CTK_xxYH.js";import"./ActionButton-D0XX66qy.js";import"./Button-BPHruMxe.js";import"./SkeletonBar-DBIjsYWu.js";import"./Tooltip-BrfRi3aQ.js";import"./info-sign-ClqbYvyn.js";import"./chevron-up-OAGc0BuM.js";import"./chevron-down-qv6CxIZl.js";import"./useEventCallback-CHJ8IA9Z.js";import"./iconLoader-DinojEuP.js";import"./CompositeRoot-CU2tWu12.js";import"./Switch-HAMqYKtT.js";import"./TimePicker-riY-tI2m.js";import"./CollapsiblePanel-DuRPtwt5.js";import"./error-SJA0nUb8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C8K4o6bx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
