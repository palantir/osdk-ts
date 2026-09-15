import{j as t,g as n}from"./iframe-Dw2PjeaI.js";import{A as r}from"./action-form-B7h0_-E9.js";import"./preload-helper-BJaT6ZDB.js";import"./DropdownField-pycu6fvL.js";import"./debounce-B2VXBB9P.js";import"./useOsdkClient-C1y4H3RM.js";import"./index-0M7994Y_.js";import"./Input-DbWveyeA.js";import"./useBaseUiId-0TtGgIAG.js";import"./useControlled-Cz_GJLGD.js";import"./index-BPb9j9HY.js";import"./index-CGb9o7qe.js";import"./PopoverPopup-Dg_qhS7v.js";import"./InternalBackdrop-DJ2aMJ5Y.js";import"./composite-DWecAK_E.js";import"./index-COYYs5y4.js";import"./getDisabledMountTransitionStyles-Cttf6bUS.js";import"./ToolbarRootContext-DgoSljlg.js";import"./tick-vpRHL3-c.js";import"./svgIconContainer-CeXRiZtW.js";import"./small-cross-DnafLtCp.js";import"./search-ClBN3Er-.js";import"./cross-CLda9Fo1.js";import"./useValueChanged-B-pgRub2.js";import"./getPseudoElementBounds-C3FmlhF8.js";import"./CompositeItem-CeRclahQ.js";import"./makeExternalStore-DXns2UQ6.js";import"./BaseForm-DAW9aqYk.js";import"./ActionButton-BioyY_id.js";import"./Button-DVN9BG7e.js";import"./SkeletonBar-PF5whjmA.js";import"./Tooltip-CAM98dk7.js";import"./info-sign-CWo63nbF.js";import"./chevron-up-DNHYHbJS.js";import"./chevron-down-C1e4s47j.js";import"./useEventCallback-CctUb2O0.js";import"./iconLoader-D3-MxflL.js";import"./CompositeRoot-DKDE8cQa.js";import"./Switch-SvNRdHMB.js";import"./TimePicker-BPuri9XJ.js";import"./CollapsiblePanel-CK9cXofW.js";import"./error-DeMrwFkF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5Psz1d4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
