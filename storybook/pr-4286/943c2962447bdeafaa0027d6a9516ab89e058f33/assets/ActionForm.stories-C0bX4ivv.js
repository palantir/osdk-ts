import{j as t,g as n}from"./iframe-BryHz5Df.js";import{A as r}from"./action-form-5uCglrPA.js";import"./preload-helper-ZuG0aKTk.js";import"./DropdownField-DwnJVj62.js";import"./debounce-CjDJ8-42.js";import"./useOsdkClient-BoBqYHPA.js";import"./index-iPKk9s3t.js";import"./Input-BJM0PLwp.js";import"./useBaseUiId-lqu4HseA.js";import"./useControlled-CylTdVLs.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./isObject-V0EIbVdK.js";import"./InternalBackdrop-BTDJowUB.js";import"./composite-BowJ7EVh.js";import"./index-kHo4L0CJ.js";import"./getDisabledMountTransitionStyles-Jl9aUEz_.js";import"./ToolbarRootContext-BjHx285v.js";import"./tick-Bz5bWrj2.js";import"./svgIconContainer-Bz8FzOTG.js";import"./small-cross-D3D35N0o.js";import"./search-BMoYocFy.js";import"./cross-ailj0yO2.js";import"./useValueChanged-D5dYuYpQ.js";import"./getPseudoElementBounds-uG2bpqSg.js";import"./CompositeItem-CUgXhRoj.js";import"./makeExternalStore-CxnQMREG.js";import"./BaseForm-PPAXzxzL.js";import"./ActionButton-BjzGaC9X.js";import"./Button-C6Ze9Rf1.js";import"./SkeletonBar-DbgbyCHj.js";import"./Tooltip-DXaG_Vux.js";import"./info-sign-BrLzanC8.js";import"./chevron-up-CWdDDD0T.js";import"./chevron-down-DjbeKg79.js";import"./useEventCallback-DNvqpEEj.js";import"./iconLoader-BpGP-LKg.js";import"./Switch-CHzM3u1f.js";import"./CompositeRoot-BvYm5qj3.js";import"./TimePicker-CRxCFFVR.js";import"./CollapsiblePanel-s1GFKw9E.js";import"./error-CL2fTgGo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dmyjllfi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
