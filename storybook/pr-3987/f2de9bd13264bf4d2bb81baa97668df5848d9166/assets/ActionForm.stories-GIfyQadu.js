import{j as t,g as n}from"./iframe-rd5WAA9r.js";import{A as r}from"./action-form-Dc7cb7l4.js";import"./preload-helper-lrQOG99y.js";import"./DropdownField-CHVnKgEN.js";import"./debounce-to-gPRqa.js";import"./useOsdkClient-D69eR1Yy.js";import"./index-gTgVe7bx.js";import"./Input-DFVDug_7.js";import"./useBaseUiId-CEPsQLHg.js";import"./useControlled-C60801w-.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./PopoverPopup-BmvVKpJX.js";import"./InternalBackdrop-B3L5JllW.js";import"./composite-DkMWUUkG.js";import"./index-DmdH8ftz.js";import"./getDisabledMountTransitionStyles-BfSqpHOL.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./tick-BC2qBGHW.js";import"./svgIconContainer-CP_qsPw-.js";import"./small-cross-CD337zW0.js";import"./search-C5LSfE4t.js";import"./cross-D4_Lw_xT.js";import"./useValueChanged-Ed2hN9-0.js";import"./getPseudoElementBounds-CPoBq_PV.js";import"./CompositeItem-LJvlu5vM.js";import"./makeExternalStore-DLTAhcmE.js";import"./BaseForm-DO6Kn3DY.js";import"./ActionButton-BJYoXnNg.js";import"./Button-C07SmwTz.js";import"./SkeletonBar-m_pUDdbL.js";import"./Tooltip-BRPtYRya.js";import"./info-sign-CRtm_Osp.js";import"./chevron-up-C4m3pGn6.js";import"./chevron-down-Bd0HHDZf.js";import"./useEventCallback-BZZpTgJM.js";import"./iconLoader-2A6QwpAq.js";import"./CompositeRoot-CnmGaqva.js";import"./Switch-DX_8RawB.js";import"./TimePicker-DwdbOxim.js";import"./CollapsiblePanel-C9Mo0Rxt.js";import"./error-YfyqzF-q.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzBl_MBp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
