import{j as t,g as n}from"./iframe-CXrJqDi7.js";import{A as r}from"./action-form-6ez_pzYg.js";import"./preload-helper-jkRaFgLU.js";import"./DropdownField-Be1p7WjB.js";import"./debounce-DfSTdNM2.js";import"./useOsdkClient-DBydK2k_.js";import"./index-CIjDsdU0.js";import"./Input-CvxpQ6Xp.js";import"./useBaseUiId-DRTWV3IQ.js";import"./useControlled-BrDZ81ve.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./PopoverPopup-DE4OVcAD.js";import"./InternalBackdrop-ZhhoRitJ.js";import"./composite-BIMYEycB.js";import"./index-DCDlBCaZ.js";import"./getDisabledMountTransitionStyles-D6coONqb.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./tick-BKMBX6oh.js";import"./svgIconContainer-BzSV1llx.js";import"./small-cross-FSbZyUiS.js";import"./search-Dyn6N2H3.js";import"./cross-BukSyOKz.js";import"./useValueChanged-5Z86VqGU.js";import"./getPseudoElementBounds-BFV0DdWn.js";import"./CompositeItem-CyZPBPBK.js";import"./makeExternalStore-Bxt_lPGm.js";import"./BaseForm-CX1Ho-VT.js";import"./ActionButton-C9HLEbBL.js";import"./Button-BnGcPvMs.js";import"./SkeletonBar-BwxqUkGA.js";import"./Tooltip-DdLaENUl.js";import"./info-sign-CGcPQDlQ.js";import"./chevron-up-jgcO2esY.js";import"./chevron-down-vVCEooOb.js";import"./useEventCallback-JwHO2nyR.js";import"./iconLoader-B8FJ47fS.js";import"./Switch-DeYH2nFE.js";import"./CompositeRoot-BrsESzgy.js";import"./TimePicker-D3PREbIy.js";import"./CollapsiblePanel-BopoqNCU.js";import"./error-bx5NADv9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dl4aNlWl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
