import{j as t,g as n}from"./iframe-CJbOBKBh.js";import{A as r}from"./action-form-Dh8MqNFK.js";import"./preload-helper-BLHdcgal.js";import"./DropdownField-Ig58Wcdc.js";import"./debounce-2qg7QCVU.js";import"./useOsdkClient-BLe4A4YY.js";import"./index-BZGK6RAy.js";import"./Input-B6hCJoOA.js";import"./useBaseUiId-BLfqnsnM.js";import"./useControlled-CZ4YcEAU.js";import"./index-De6fjuAQ.js";import"./index-B_6VUgxJ.js";import"./PopoverPopup-BrpFbh7n.js";import"./InternalBackdrop-I-coYiRS.js";import"./composite-C9nRcOzN.js";import"./index-BIEbhHvU.js";import"./getDisabledMountTransitionStyles-ClJ44Vqv.js";import"./ToolbarRootContext-DRMcjCuu.js";import"./tick-CDcAZVlx.js";import"./svgIconContainer-nMosQuRN.js";import"./small-cross-DJuRoaKr.js";import"./search-BiEjqGXz.js";import"./cross-DXZ7nfx1.js";import"./useValueChanged-DMI7G-AI.js";import"./getPseudoElementBounds-D2bAA-Mc.js";import"./CompositeItem-CstBZeOc.js";import"./makeExternalStore-BjeVU-bl.js";import"./BaseForm-BFG6rAA9.js";import"./ActionButton-DP8E2oQU.js";import"./Button-ChlDUqJf.js";import"./SkeletonBar-Dag5WjEc.js";import"./Tooltip-CLlrYrN9.js";import"./info-sign-BODPWLIm.js";import"./chevron-up-uNgbMAJC.js";import"./chevron-down-Cy1gcHm4.js";import"./useEventCallback-BXLXlKzm.js";import"./iconLoader-COhK13DL.js";import"./CompositeRoot-9pHNxhvX.js";import"./Switch-DkjsP8tq.js";import"./TimePicker-F3IwEeiU.js";import"./CollapsiblePanel-CQvGKC7K.js";import"./error-SsNWn793.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-PeDqWSVe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
