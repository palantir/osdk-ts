import{j as t,g as n}from"./iframe-DGqz47MG.js";import{A as r}from"./action-form-BZYnsib7.js";import"./preload-helper-Cim2rGXh.js";import"./DropdownField-Boby63HI.js";import"./debounce-xenDYozX.js";import"./useOsdkClient-DMdK1qJo.js";import"./index-Bd9LEkTw.js";import"./Input-74xcLqWb.js";import"./useBaseUiId-DUXwyBKc.js";import"./useControlled-CzYzgIWX.js";import"./index-D5J1M6Rk.js";import"./index-8Cs0qfIH.js";import"./isObject-lTxslFZd.js";import"./InternalBackdrop-CG21yzEz.js";import"./composite-Ba00gyVa.js";import"./index-CsvfS9SY.js";import"./getDisabledMountTransitionStyles-BhKGK1Dz.js";import"./ToolbarRootContext-CVWObsgJ.js";import"./tick-CRlk3QC6.js";import"./svgIconContainer-DOG7DxQy.js";import"./small-cross-DxaBc40t.js";import"./search-DRqVXkuQ.js";import"./cross-CEq_GdMU.js";import"./useValueChanged-DHjlJWOI.js";import"./getPseudoElementBounds-VHie68sa.js";import"./CompositeItem-DkRqlbxr.js";import"./makeExternalStore-B0og1Ieq.js";import"./BaseForm-CN7X-pi6.js";import"./ActionButton-DTp5BPtP.js";import"./Button-BbcMUrJ0.js";import"./SkeletonBar-D8Tdd3Oo.js";import"./Tooltip-BkDKAHSO.js";import"./info-sign-U0ucrGQD.js";import"./chevron-up-fQyvXoLg.js";import"./chevron-down-oASCfusG.js";import"./useEventCallback-DSfQYw-a.js";import"./iconLoader-BQr0cYjk.js";import"./Switch-TrYObX92.js";import"./CompositeRoot-DbRanLax.js";import"./TimePicker-C2OW8ISF.js";import"./CollapsiblePanel-D3JnwVn4.js";import"./error-CYx8FmP-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6EClZ-2k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
