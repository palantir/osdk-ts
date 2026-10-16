import{j as t,g as n}from"./iframe-DCDy9VYS.js";import{A as r}from"./action-form-Dwim19QU.js";import"./preload-helper-DYzeOhdi.js";import"./DropdownField-CGJbjv2M.js";import"./debounce-C0GenXTw.js";import"./useOsdkClient-DE_N4tYE.js";import"./index-As1ywJYE.js";import"./Input-1IBLw1l4.js";import"./useBaseUiId-BwVm2U7U.js";import"./useControlled-Ck2v8yj-.js";import"./index-CvF6o7Ro.js";import"./index-Dg2YILHW.js";import"./PopoverPopup-C3K-ljQu.js";import"./InternalBackdrop-ijCyx1er.js";import"./composite-c9aHe9jO.js";import"./index-DqVXKAlF.js";import"./getDisabledMountTransitionStyles-BooTnCUs.js";import"./ToolbarRootContext-cMntifXn.js";import"./tick-CxNHTulf.js";import"./svgIconContainer-D9qShJuw.js";import"./small-cross-uadXp9F-.js";import"./search-Nu3soqfg.js";import"./cross-BJlA6QIm.js";import"./useValueChanged-CPtG6vDl.js";import"./getPseudoElementBounds-Dbq8OiTZ.js";import"./CompositeItem-DLLGFuyo.js";import"./makeExternalStore-BQWaZP2I.js";import"./BaseForm-CjoG4VIY.js";import"./ActionButton-DqA_w_SP.js";import"./Button-CEFR6_SV.js";import"./SkeletonBar-DroWMPlj.js";import"./Tooltip-C_BJoEQ_.js";import"./info-sign-D3pUYpv6.js";import"./chevron-up-f_d5u9Gd.js";import"./chevron-down-hGs_IVeQ.js";import"./useEventCallback-BpL75y-I.js";import"./iconLoader-D0-JHEOU.js";import"./Switch-nOVnJ7el.js";import"./CompositeRoot-ClZxIwF5.js";import"./TimePicker-mh1YgMBX.js";import"./CollapsiblePanel-BzeOsHAl.js";import"./error-5cMYD3vI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5GlFsUX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
