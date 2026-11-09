import{j as t,g as n}from"./iframe-3OlCtOnX.js";import{A as r}from"./action-form-BbQkIiGk.js";import"./preload-helper-DmXfM5jO.js";import"./DropdownField-BIODsSJB.js";import"./debounce-ger8MaPs.js";import"./useOsdkClient--TOQCL4r.js";import"./index-yHmphh38.js";import"./Input-Du0sMknh.js";import"./useBaseUiId-DF4e_SYr.js";import"./useControlled-D4KKpMBk.js";import"./index-BIyck5Eo.js";import"./index-Dkb2coF2.js";import"./isObject-UhbsXXcU.js";import"./InternalBackdrop-DdQOJpo0.js";import"./composite-U0WuYJlx.js";import"./index-ByPauzBu.js";import"./getDisabledMountTransitionStyles-BR9XCEFs.js";import"./ToolbarRootContext-DhJDeVBv.js";import"./tick-JCXFlbLf.js";import"./svgIconContainer-BDwLYbew.js";import"./small-cross-Q6V4ucxv.js";import"./search-DDk_kDx9.js";import"./cross-BDST6L4k.js";import"./useValueChanged-BmFaeCuB.js";import"./getPseudoElementBounds-BX9nOk-V.js";import"./CompositeItem-CpBBjcG8.js";import"./makeExternalStore-C_bh9nYT.js";import"./BaseForm-CneN5Wjf.js";import"./ActionButton-X9C3Amb_.js";import"./Button-DvYWHdUE.js";import"./SkeletonBar-BXcGfT3d.js";import"./Tooltip-BN6uj7yR.js";import"./info-sign-0hkAGoTG.js";import"./chevron-up-Y1gB4P6K.js";import"./chevron-down-CgI6LlJc.js";import"./useEventCallback-D7je9L3S.js";import"./iconLoader-kAemDjxo.js";import"./Switch-DfHrCH6B.js";import"./CompositeRoot-DEHif5pC.js";import"./TimePicker-Bq6ezFdQ.js";import"./CollapsiblePanel-Cq5Vusdc.js";import"./error-CWwoWVCq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFm1sTgg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
