import{j as t,g as n}from"./iframe-BNVJywF1.js";import{A as r}from"./action-form-C8ut6YID.js";import"./preload-helper-DWuXY-GF.js";import"./DropdownField-C8Q0gJVk.js";import"./debounce-8B-CyNyC.js";import"./useOsdkClient-CyccGXDI.js";import"./index-C4EkKaF7.js";import"./Input-Da27pVQq.js";import"./useBaseUiId-Bpu1Oowx.js";import"./useControlled-B2RztQtr.js";import"./index-LJRfcAtw.js";import"./index-BQqTqN1m.js";import"./PopoverPopup-DaNrxJqx.js";import"./InternalBackdrop-C0D2fQXF.js";import"./composite-DiO_GxNw.js";import"./index-BA6LoZ5G.js";import"./getDisabledMountTransitionStyles-D5wjcBBn.js";import"./ToolbarRootContext-D79zfuWP.js";import"./tick-BeYRsnSN.js";import"./svgIconContainer-BcZCykGH.js";import"./small-cross-Ccbug_SU.js";import"./search-C7WqGDQC.js";import"./cross-CyiMpI_1.js";import"./useValueChanged-Bkw0nzgB.js";import"./getPseudoElementBounds-u1YKpqoa.js";import"./CompositeItem-BXGINh9c.js";import"./makeExternalStore-DfPTVVvN.js";import"./BaseForm-DKtsYCt_.js";import"./ActionButton-C-7a2u10.js";import"./Button-DMlU0zK6.js";import"./SkeletonBar-CTp2bd9M.js";import"./Tooltip-Bp6EFdh0.js";import"./info-sign-BBtBrkoV.js";import"./chevron-up-7CzGWdJA.js";import"./chevron-down-D9ALcooV.js";import"./useEventCallback-CAiy3etF.js";import"./iconLoader-BhrGPbIB.js";import"./Switch-DxYPanWH.js";import"./CompositeRoot-7lir25TR.js";import"./TimePicker-BfqD_h9O.js";import"./CollapsiblePanel-CCdfWJRe.js";import"./error-Kq-QRHM8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BZA_bd9Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
