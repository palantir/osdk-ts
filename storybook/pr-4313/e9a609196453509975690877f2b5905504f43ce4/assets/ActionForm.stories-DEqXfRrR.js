import{j as t,g as n}from"./iframe-CiI5PS6K.js";import{A as r}from"./action-form-BMpvG1oJ.js";import"./preload-helper-BScoV-ON.js";import"./DropdownField-D6IgbNva.js";import"./debounce-DI-y3SNs.js";import"./useOsdkClient-DO_qV40A.js";import"./index-DTPqzTra.js";import"./Input-gM0suFmQ.js";import"./useBaseUiId-DReynxDq.js";import"./useControlled-C0rSVFZc.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./PopoverPopup-CME_dwGk.js";import"./InternalBackdrop-Coh6cB6j.js";import"./composite-BrOoGgaN.js";import"./index-CPJzMmpG.js";import"./getDisabledMountTransitionStyles-CRmjgyTc.js";import"./ToolbarRootContext-CTDjgR90.js";import"./tick-NDqyjiXA.js";import"./svgIconContainer-tdqH8iqE.js";import"./small-cross-BvlJE0g7.js";import"./search-BRtPHFLM.js";import"./cross-DgjL-w3z.js";import"./useValueChanged-Dfh6smN1.js";import"./getPseudoElementBounds-CAN5gz0w.js";import"./CompositeItem-D4PTMtSQ.js";import"./makeExternalStore-BiFRWY5t.js";import"./BaseForm-DMu9twqj.js";import"./ActionButton-DmbyeOrm.js";import"./Button-BP56zFTn.js";import"./SkeletonBar-BNIt8FzO.js";import"./Tooltip-RikTdx9n.js";import"./info-sign-Bf3NyFAF.js";import"./chevron-up-JC5Qs0Jg.js";import"./chevron-down-F9mPI0PG.js";import"./useEventCallback-CyRG3rkJ.js";import"./iconLoader-C2ml_p9Z.js";import"./Switch-BzfnD_1f.js";import"./CompositeRoot-BSTwkYF7.js";import"./TimePicker-FC0cItZf.js";import"./CollapsiblePanel-CL4hIKDt.js";import"./error-Dp2Yeg1s.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRB4GNZb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
