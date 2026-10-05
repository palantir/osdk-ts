import{j as t,g as n}from"./iframe-D4DE_xCy.js";import{A as r}from"./action-form-D4qFc_Dq.js";import"./preload-helper-B6-3aPT9.js";import"./DropdownField-CN5yaMV7.js";import"./debounce-zunEXKGq.js";import"./useOsdkClient-Dq4Nep3C.js";import"./index-D326T4JO.js";import"./Input-BdkDXHFP.js";import"./useBaseUiId-BXESL0ei.js";import"./useControlled-C35ONjfY.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./PopoverPopup-s43YRtvQ.js";import"./InternalBackdrop-LoBq40Ym.js";import"./composite-Dnv2BJfH.js";import"./index-BGyff1g6.js";import"./getDisabledMountTransitionStyles-BKMXDL5b.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./tick-BC_4-l9I.js";import"./svgIconContainer-jzN4JDBP.js";import"./small-cross-CNDGm87l.js";import"./search-DMWfSMTs.js";import"./cross-DXk5c3Hx.js";import"./useValueChanged-f4hwQLIJ.js";import"./getPseudoElementBounds-mvlACyB9.js";import"./CompositeItem-Dl-hENiN.js";import"./makeExternalStore-BrutYjE5.js";import"./BaseForm-AKC46T-n.js";import"./ActionButton-D5oyS5dM.js";import"./Button-ByxF5usp.js";import"./SkeletonBar-DOfR0REZ.js";import"./Tooltip-BR6r3LZL.js";import"./info-sign-D7PWXj69.js";import"./chevron-up-BjG9V2Qh.js";import"./chevron-down-9HoUrmLz.js";import"./useEventCallback-Z4zWj0DE.js";import"./iconLoader-Bn8BtPOw.js";import"./Switch-D8-4c2U5.js";import"./CompositeRoot-R3vCpSS2.js";import"./TimePicker-BQadh6cx.js";import"./CollapsiblePanel-A6BmXTdr.js";import"./error-BbjQgfT9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DNRznGfV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
