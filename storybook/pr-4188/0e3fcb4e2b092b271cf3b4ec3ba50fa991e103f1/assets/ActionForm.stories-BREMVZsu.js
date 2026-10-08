import{j as t,g as n}from"./iframe-BgM5ILJD.js";import{A as r}from"./action-form-BECND3Uq.js";import"./preload-helper-D1sAdP5a.js";import"./DropdownField-7t-kwafh.js";import"./debounce-8yqP3aY_.js";import"./useOsdkClient-EIls4xNE.js";import"./index-ah8Na9h1.js";import"./Input-DL79KIMl.js";import"./useBaseUiId-CzAuSX_4.js";import"./useControlled-COnm-wVi.js";import"./index-DAXSmbbp.js";import"./index-YnWjipca.js";import"./PopoverPopup-BBlagmYo.js";import"./InternalBackdrop-B3lJ8A-i.js";import"./composite-BS7dFqvY.js";import"./index-BtZ9XuP3.js";import"./getDisabledMountTransitionStyles-7N3HMxRW.js";import"./ToolbarRootContext-CjwaP5zw.js";import"./tick-B5Dk5gWg.js";import"./svgIconContainer-De6gxcHK.js";import"./small-cross-R2Kh-d3N.js";import"./search-C2iFy_Yx.js";import"./cross-B5mOqZwT.js";import"./useValueChanged-Deeelsz_.js";import"./getPseudoElementBounds-CdSGgRcD.js";import"./CompositeItem-B6xGoOu0.js";import"./makeExternalStore-CkeVFEY-.js";import"./BaseForm-BoQH3cFS.js";import"./ActionButton-4Ees6e5q.js";import"./Button-KrMtAmhv.js";import"./SkeletonBar-c3-BssZC.js";import"./Tooltip-nFXiDwkG.js";import"./info-sign-CDcQUk6v.js";import"./chevron-up-BmD_0m4w.js";import"./chevron-down-D1QYpBiI.js";import"./useEventCallback-ED2yFhLZ.js";import"./iconLoader-CJW1ZIFO.js";import"./Switch-B6zMEtNL.js";import"./CompositeRoot-UzRD7iZ2.js";import"./TimePicker-CgXy6TW5.js";import"./CollapsiblePanel-IXMutafc.js";import"./error-BFuWQWXY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYzG-urA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
