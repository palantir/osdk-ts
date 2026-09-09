import{j as t,g as n}from"./iframe-CSNnL1Y0.js";import{A as r}from"./action-form-BD08cuhG.js";import"./preload-helper-PMc3ZHFF.js";import"./DropdownField-QGFslIVN.js";import"./debounce-BzipLUSU.js";import"./useOsdkClient-CLYLA36V.js";import"./index-DNTkQvxm.js";import"./Input-bh0XwuT_.js";import"./useBaseUiId-pX-EM4Dz.js";import"./useControlled-CLpZ-2U1.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./PopoverPopup-DtGqPexC.js";import"./InternalBackdrop-B8dtNrQn.js";import"./composite-BlH-_uKm.js";import"./index-sKOwD7Lf.js";import"./getDisabledMountTransitionStyles-CxBhjcps.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./tick-Cl0RaH8k.js";import"./svgIconContainer-CM8I1f8r.js";import"./small-cross-D9O7TL9e.js";import"./search-BPPJCzpv.js";import"./cross-Bg_IlbQu.js";import"./useValueChanged-DcOG8dba.js";import"./getPseudoElementBounds-DvtLYcgZ.js";import"./CompositeItem-DxYljjwU.js";import"./makeExternalStore-19MZWFoq.js";import"./BaseForm-DHJ-tFbt.js";import"./ActionButton-B5fjrdh8.js";import"./Button-B6Txaqgo.js";import"./SkeletonBar-CzJzlOLW.js";import"./Tooltip-59zWJjq9.js";import"./info-sign-DLidAX2f.js";import"./chevron-up-CiJx7nH2.js";import"./chevron-down-BBAfQF9b.js";import"./useEventCallback-D15AXOzW.js";import"./iconLoader-C_MF86bN.js";import"./CompositeRoot-DxihqWUU.js";import"./Switch-BuFcDo1K.js";import"./TimePicker-BOIx9qEC.js";import"./CollapsiblePanel-QQw2ylt-.js";import"./error-BFicHv-u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DmF4idxC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
