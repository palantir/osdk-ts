import{j as t,g as n}from"./iframe-BNLo1qEo.js";import{A as r}from"./action-form-CaoVK0e2.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-XjPQJ3lB.js";import"./debounce-DQBK7OpX.js";import"./useOsdkClient-uOgjqpaF.js";import"./index-BWXZWlZP.js";import"./Input-CQiU0obq.js";import"./useBaseUiId-LvnHplFk.js";import"./useControlled-CcPprz05.js";import"./index-Df3Yy7kp.js";import"./index-BSoYvY0P.js";import"./PopoverPopup-pMmoGPXE.js";import"./InternalBackdrop-CG66B4oQ.js";import"./composite-c-IzcIQu.js";import"./index-6ubKDyZX.js";import"./getDisabledMountTransitionStyles-APnNNLZm.js";import"./ToolbarRootContext-_EVP-k89.js";import"./tick-DLT-1uqo.js";import"./svgIconContainer-DNenegb-.js";import"./small-cross-Dh5ayvwP.js";import"./search-qRqfYCrN.js";import"./cross-BB9vD9ud.js";import"./useValueChanged-C0keAUqj.js";import"./getPseudoElementBounds-CQ5R3Z25.js";import"./CompositeItem-CQcPqlHd.js";import"./makeExternalStore-Bi3yZCYu.js";import"./BaseForm-waA3iJgg.js";import"./ActionButton-BO9JPDLL.js";import"./Button-LEGGZV5y.js";import"./SkeletonBar-DZBhWtFh.js";import"./Tooltip-CN30f2dN.js";import"./info-sign-QeYOJVTM.js";import"./chevron-up-D42n8nyx.js";import"./chevron-down-Cc8GiNOO.js";import"./useEventCallback-CJ49gR_Z.js";import"./iconLoader-abimzhBZ.js";import"./Switch-CstzFxeI.js";import"./CompositeRoot-BOCEGA7U.js";import"./TimePicker-BAPLCmdi.js";import"./CollapsiblePanel-oBM-mKD1.js";import"./error-D0RMWaYW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BI6Ebbvf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
