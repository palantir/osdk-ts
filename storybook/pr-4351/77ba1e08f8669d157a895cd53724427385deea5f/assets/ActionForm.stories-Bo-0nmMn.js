import{j as t,g as n}from"./iframe-D3hBsnsj.js";import{A as r}from"./action-form-HnTqqvX8.js";import"./preload-helper-DMLOvsmI.js";import"./DropdownField-DgWMbQ5Q.js";import"./debounce-4gosawj0.js";import"./useOsdkClient-CSiMh-gG.js";import"./index-BFoG3y9f.js";import"./Input-DbDZgezU.js";import"./useBaseUiId-Bk-faTDV.js";import"./useControlled-D75sOh0K.js";import"./index-CCkpr9rO.js";import"./index-BPny8RHi.js";import"./isObject-DTGaRAh3.js";import"./InternalBackdrop-CS-KNpxJ.js";import"./composite-DWlrqv2G.js";import"./index-CeAiM1qG.js";import"./getDisabledMountTransitionStyles-DsHQCkew.js";import"./ToolbarRootContext-CMXlPgPk.js";import"./tick-X_jDyEUZ.js";import"./svgIconContainer-Bz0YpGKi.js";import"./small-cross-BH03RGEV.js";import"./search-CE7lhKVr.js";import"./cross-zcrYkWBY.js";import"./useValueChanged-Dbp_U3FV.js";import"./getPseudoElementBounds-BXFF9d0t.js";import"./CompositeItem-DxaSaYkw.js";import"./makeExternalStore-CKN6mP8s.js";import"./BaseForm-B9FdkbLX.js";import"./ActionButton-P3mRJLVa.js";import"./Button-Z7wlB8te.js";import"./SkeletonBar-DI0g9AHe.js";import"./Tooltip-BF8YE5eC.js";import"./info-sign-DujuswyB.js";import"./chevron-up-DfLkcbVO.js";import"./chevron-down-i4CyxBDw.js";import"./useEventCallback-BP_wGY7x.js";import"./iconLoader-DSJ9i47T.js";import"./Switch-DPyBA9T6.js";import"./CompositeRoot-WtkNKfno.js";import"./TimePicker-BHKRQQyz.js";import"./CollapsiblePanel-By1TCkBA.js";import"./error-BUxN-ftl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQ22kB-k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
