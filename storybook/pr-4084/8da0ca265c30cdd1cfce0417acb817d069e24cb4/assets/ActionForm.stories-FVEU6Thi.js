import{j as t,g as n}from"./iframe-C52xRtUi.js";import{A as r}from"./action-form-R0adrQ0O.js";import"./preload-helper-VoitBlG4.js";import"./DropdownField-BHSO6XDZ.js";import"./debounce-tVcKeVmr.js";import"./useOsdkClient-vXZmMAP8.js";import"./index-C7u1bqdX.js";import"./Input-BgQuQrPL.js";import"./useBaseUiId-DJafaxQ0.js";import"./useControlled-DX7cxw4N.js";import"./index-DzK9GJWU.js";import"./index-pyzUPPmp.js";import"./PopoverPopup-B7RCm-bJ.js";import"./InternalBackdrop-CPnudeT9.js";import"./composite-B5eZIT_T.js";import"./index-NQfdPmWP.js";import"./getDisabledMountTransitionStyles-DvEu8SWi.js";import"./ToolbarRootContext-CVcuXFio.js";import"./tick-DcEx61V3.js";import"./svgIconContainer-BCVv-_g-.js";import"./small-cross-BTfaurxn.js";import"./search-dgHR1_2q.js";import"./cross-a7kzaFsa.js";import"./useValueChanged-C6ayBYnA.js";import"./getPseudoElementBounds-Di3MTnX5.js";import"./CompositeItem-DAwBJWeq.js";import"./makeExternalStore-Km1yOtHY.js";import"./BaseForm-UFuSO8gd.js";import"./ActionButton-BnaJtBw6.js";import"./Button-B-u0RyTK.js";import"./SkeletonBar-C9Im5d1S.js";import"./Tooltip-DHaZ_9Uj.js";import"./info-sign-BxXTcW1g.js";import"./chevron-up-CwlSNKkd.js";import"./chevron-down-C2zgY8nG.js";import"./useEventCallback-B2UfFI64.js";import"./iconLoader-4TRkJsYl.js";import"./Switch-DqM0zDZC.js";import"./CompositeRoot-CW0AwatW.js";import"./TimePicker-C33A2p7m.js";import"./CollapsiblePanel-BotBzwtD.js";import"./error-COI_mt5G.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Csym3CTn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
