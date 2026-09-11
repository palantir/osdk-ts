import{j as t,g as n}from"./iframe-CUqJoiyS.js";import{A as r}from"./action-form-ucVY3_DJ.js";import"./preload-helper-CqOWo9Kq.js";import"./DropdownField-DFoQOfPb.js";import"./debounce-BVDXVoV0.js";import"./useOsdkClient-B74Rz75W.js";import"./index-DhW4888P.js";import"./Input-CRJI3PzK.js";import"./useBaseUiId-BZb7TWDk.js";import"./useControlled-BMDtEhI-.js";import"./index-DAzmwTik.js";import"./index-BBo0v-HH.js";import"./PopoverPopup-Crglkfe6.js";import"./InternalBackdrop-Dq_kPC_w.js";import"./composite-TXFEMlyS.js";import"./index-BJ9da-D9.js";import"./getDisabledMountTransitionStyles-D-aggpUt.js";import"./ToolbarRootContext-DkHEjN7J.js";import"./tick-CLiQuWYA.js";import"./svgIconContainer-B7WKcrMM.js";import"./small-cross-Cpb8kTzQ.js";import"./search-DIQou5oL.js";import"./cross-GG3fOgP3.js";import"./useValueChanged-MoKiEcJY.js";import"./getPseudoElementBounds-CL_A93Bv.js";import"./CompositeItem-Zdmcbf9r.js";import"./makeExternalStore-DVkGjBto.js";import"./BaseForm-DyMNzegB.js";import"./ActionButton-EApO2EOv.js";import"./Button-BNd5oumq.js";import"./SkeletonBar-Dw2EozU6.js";import"./Tooltip-CJfjtiJ9.js";import"./info-sign-CBuyKY74.js";import"./chevron-up-B5QrUkr_.js";import"./chevron-down-BfkwxApB.js";import"./useEventCallback-Dz2Wo-yx.js";import"./iconLoader-BrEBphRp.js";import"./CompositeRoot-WLxYlhMX.js";import"./Switch-DdLeBMnk.js";import"./TimePicker-vi4PB_Y-.js";import"./CollapsiblePanel-DixO6tjx.js";import"./error-l4XIFlvt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPGEJQZq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
