import{j as t,g as n}from"./iframe-BLF6zRqG.js";import{A as r}from"./action-form-DG7YX5Ey.js";import"./preload-helper-BDaxV4R2.js";import"./DropdownField-D-l1iVFe.js";import"./debounce-B91OJyBP.js";import"./useOsdkClient-1axdfMxV.js";import"./index-BLFrbzvg.js";import"./Input-CCDmeNBI.js";import"./useBaseUiId-Zjs0lNV0.js";import"./useControlled-CoQlBX4R.js";import"./index-CLYhFphF.js";import"./index-ByFfno_8.js";import"./PopoverPopup-B7UZBa1s.js";import"./InternalBackdrop-CyIeJrcr.js";import"./composite-CcKV35Kr.js";import"./index-Bl_HIsRn.js";import"./getDisabledMountTransitionStyles-ARetRnAA.js";import"./ToolbarRootContext-2-p_DBQP.js";import"./tick-28tjcfUj.js";import"./svgIconContainer-B1hh76l8.js";import"./small-cross-BqECmGEj.js";import"./search-9jU6Q1us.js";import"./cross-BA9FjJ9G.js";import"./useValueChanged-BKw1I0EK.js";import"./getPseudoElementBounds-4DmUh_rK.js";import"./CompositeItem-DtwY3yqS.js";import"./makeExternalStore-GX9DdVy4.js";import"./BaseForm-BzAS9OkO.js";import"./ActionButton-DbZE13mN.js";import"./Button-9qWiKKY-.js";import"./SkeletonBar-C1CYbmJA.js";import"./Tooltip-8Jei4W6Q.js";import"./info-sign-DKnbgkwe.js";import"./chevron-up-63sGUHDL.js";import"./chevron-down-D3B34KT6.js";import"./useEventCallback-DH0i-Vx2.js";import"./iconLoader-DbpUPDn6.js";import"./Switch-DC1a3j7_.js";import"./CompositeRoot-ChKLWTSW.js";import"./TimePicker-O2L2CVqW.js";import"./CollapsiblePanel-Dda8YuQy.js";import"./error-CBG8l0PN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRvkKsTN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
