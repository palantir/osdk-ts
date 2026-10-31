import{j as t,g as n}from"./iframe-B-Vichjj.js";import{A as r}from"./action-form-B8aQleTw.js";import"./preload-helper-Cti1Qb3M.js";import"./DropdownField-DR1IrwcL.js";import"./debounce-D27NbIqD.js";import"./useOsdkClient-DfCPaPDl.js";import"./index-BrQCMcFI.js";import"./Input-Dd8GNXSA.js";import"./useBaseUiId-BbqzJTxC.js";import"./useControlled-CyehoLEN.js";import"./index-CXmDZCit.js";import"./index-roXzNt2R.js";import"./PopoverPopup-DfSgOxBk.js";import"./InternalBackdrop-Chx6xO5M.js";import"./composite-Disga3Gv.js";import"./index-Dv4MxiBX.js";import"./getDisabledMountTransitionStyles-DwdzBcwv.js";import"./ToolbarRootContext-Gi45tW71.js";import"./tick-fjoIKIQ8.js";import"./svgIconContainer-DKifyIgl.js";import"./small-cross-CDE3T1VP.js";import"./search-DODYwrTJ.js";import"./cross-DLbo6j99.js";import"./useValueChanged-CWg72ruL.js";import"./getPseudoElementBounds-D1q0SwFG.js";import"./CompositeItem-nXpoZPrc.js";import"./makeExternalStore-CZ3SFYVb.js";import"./BaseForm-COOZWLJF.js";import"./ActionButton-3O7yiqt6.js";import"./Button-DhB4QIGX.js";import"./SkeletonBar-UxXYq5NI.js";import"./Tooltip-BiLClmh0.js";import"./info-sign-04UYLGnZ.js";import"./chevron-up-BQ6t7FBd.js";import"./chevron-down-BnTGK2z6.js";import"./useEventCallback-kNLNld48.js";import"./iconLoader-CEuKkXve.js";import"./Switch-DC5qli7t.js";import"./CompositeRoot-YMHOwtxM.js";import"./TimePicker-CuD7S_Il.js";import"./CollapsiblePanel-CW4q5lnM.js";import"./error-F0thqKPJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNKwevxI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
