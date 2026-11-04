import{j as t,g as n}from"./iframe-CLFvQKtr.js";import{A as r}from"./action-form-pWfnwI_Y.js";import"./preload-helper-Dsl2rT4D.js";import"./DropdownField-BAmcAyNN.js";import"./debounce-Bd3sQolQ.js";import"./useOsdkClient-DmQ_JOA9.js";import"./index-Bc4ZDDw5.js";import"./Input-B0zGDDc7.js";import"./useBaseUiId-DGth5ZlH.js";import"./useControlled-BsSE4zKc.js";import"./index-BN1TScIw.js";import"./index-BVTx-0qU.js";import"./PopoverPopup-BFPb8tfO.js";import"./InternalBackdrop-ZpNJl5wc.js";import"./composite-BY1hAZzj.js";import"./index-CKBwhOxc.js";import"./getDisabledMountTransitionStyles-Dr_u9oB2.js";import"./ToolbarRootContext-DNG77-u2.js";import"./tick-BRgdE-Dn.js";import"./svgIconContainer-DDtGdFbP.js";import"./small-cross-CaRVi9zJ.js";import"./search-BBKcx3DL.js";import"./cross-B8sVMx5E.js";import"./useValueChanged-DKz6T4Hg.js";import"./getPseudoElementBounds-CTru0iiL.js";import"./CompositeItem-BgZVgO8p.js";import"./makeExternalStore-B1fZCef5.js";import"./BaseForm-D5oABa89.js";import"./ActionButton-20ezogam.js";import"./Button-BuhAuEGs.js";import"./SkeletonBar-BAMhpUp3.js";import"./Tooltip-CDEzkuYI.js";import"./info-sign-BkzodZqW.js";import"./chevron-up-CZ1FrQ6o.js";import"./chevron-down-GxDR_faA.js";import"./useEventCallback-PjLqcvTO.js";import"./iconLoader-BFvcIbeH.js";import"./Switch-YGQDxibq.js";import"./CompositeRoot-DxR4oMi5.js";import"./TimePicker-CWiYaEJK.js";import"./CollapsiblePanel-CtUCKNQH.js";import"./error-EDq0RnuF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DUg-sn-W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
