import{j as t,g as n}from"./iframe-gIP5vbeg.js";import{A as r}from"./action-form-bjf-3fNk.js";import"./preload-helper-DCg2y8p9.js";import"./DropdownField-B1srtEQF.js";import"./debounce-I28cmmgy.js";import"./useOsdkClient-DkjZXsOx.js";import"./index-Wi5AWfmM.js";import"./Input-BP15Y0-R.js";import"./useBaseUiId-Dr1rdLlf.js";import"./useControlled-Ch-R23iR.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./PopoverPopup-BRrodumS.js";import"./InternalBackdrop-CCoswTJ_.js";import"./composite-DMSJBqo2.js";import"./index-9oyPmpRn.js";import"./getDisabledMountTransitionStyles-9Dn4HHWl.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./tick-Dx25vGYA.js";import"./svgIconContainer-DxHht3SG.js";import"./small-cross-BtgfJF3w.js";import"./search-CUlcmVhj.js";import"./cross-B_HnIjdo.js";import"./useValueChanged-PwGMfD57.js";import"./getPseudoElementBounds-BNdUGtxd.js";import"./CompositeItem-GAdV3l7-.js";import"./makeExternalStore-CwiGseBr.js";import"./BaseForm-Df7ArbYW.js";import"./ActionButton-DOUTcJvC.js";import"./Button-CcxNlLiB.js";import"./SkeletonBar-jY_IAvUh.js";import"./Tooltip-xk86MvJJ.js";import"./info-sign-BX3tGCro.js";import"./chevron-up-Fc7IP0ti.js";import"./chevron-down-DCLBAa3z.js";import"./useEventCallback-N163Ubom.js";import"./iconLoader-CBj6QCyR.js";import"./CompositeRoot-vh8LJivO.js";import"./Switch-DpPDLOuV.js";import"./TimePicker-D_IlHXry.js";import"./CollapsiblePanel-DLO1bg9n.js";import"./error-3Pj1FJ1e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CUsP9g0j.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
