import{j as t,g as n}from"./iframe-B9NaG1GB.js";import{A as r}from"./action-form-CfsJZP0M.js";import"./preload-helper-udZSqlM2.js";import"./DropdownField-DqeXn4qa.js";import"./debounce-CI4bJKTw.js";import"./useOsdkClient-B2RCpAbM.js";import"./index-yUq6Iven.js";import"./Input-BjAUxC1s.js";import"./useBaseUiId-DgxXXPsW.js";import"./useControlled-CxdGo8Ww.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./PopoverPopup-BR9ZiCCw.js";import"./InternalBackdrop-C2K99UQF.js";import"./composite-B_1l4wbr.js";import"./index-C7m4ZQHb.js";import"./getDisabledMountTransitionStyles-B67W8wHq.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./tick-CPo9xZcx.js";import"./svgIconContainer-Ch9sOYGG.js";import"./small-cross-DoygMeI4.js";import"./search-C7EjfmAX.js";import"./cross-BaJlm1ee.js";import"./useValueChanged-C_9cZZ-H.js";import"./getPseudoElementBounds-EQT2lv3A.js";import"./CompositeItem-D9-3_2mb.js";import"./makeExternalStore-Ct-9sVSe.js";import"./BaseForm-D1s_B_9v.js";import"./ActionButton-D6kiLQVM.js";import"./Button-D3MlS94Q.js";import"./SkeletonBar-B3WZD8B_.js";import"./Tooltip-DuqyUHxp.js";import"./info-sign-64vQ7_iI.js";import"./chevron-up-McO66pj9.js";import"./chevron-down-CsyXd9Xe.js";import"./useEventCallback-C-nAfNT0.js";import"./iconLoader-DZmxWXr8.js";import"./CompositeRoot-CojgliJq.js";import"./Switch-BhQ9CEJ5.js";import"./TimePicker-COxRXlCI.js";import"./CollapsiblePanel-CwGD0sZF.js";import"./error-BcUNHOKh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1M7RvxJT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
