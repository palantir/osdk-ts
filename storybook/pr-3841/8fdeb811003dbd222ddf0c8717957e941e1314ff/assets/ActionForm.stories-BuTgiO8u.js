import{j as t,g as n}from"./iframe-DmKkedGZ.js";import{A as r}from"./action-form-COSy5PYa.js";import"./preload-helper-V3mfUD4w.js";import"./DropdownField-NmOMpXPV.js";import"./debounce-BZWL05Yy.js";import"./useOsdkClient-BXLUOpZn.js";import"./index-5w_QhudL.js";import"./Input-jwVhWV6R.js";import"./useBaseUiId-DNfqz0_E.js";import"./useControlled-DU4z2hem.js";import"./index-CPiWOVlX.js";import"./index-CNJ8NeHE.js";import"./PopoverPopup-Bb1qebqW.js";import"./InternalBackdrop-D7bVfifz.js";import"./composite-COYZrTxF.js";import"./index-D9KyFoqb.js";import"./getDisabledMountTransitionStyles-DNkc-xRC.js";import"./ToolbarRootContext-DEQXnygN.js";import"./tick-Ehn2MHYk.js";import"./svgIconContainer-DvNCuvEs.js";import"./small-cross-DvlEqh4P.js";import"./search-xXbvdTMv.js";import"./cross-CpmvhUuW.js";import"./useValueChanged-LDpI-6kA.js";import"./getPseudoElementBounds-CijrryJg.js";import"./CompositeItem-D1JLw8xz.js";import"./makeExternalStore-EEoAsRvH.js";import"./BaseForm-CvRIsERx.js";import"./ActionButton-Co1jb0ag.js";import"./Button-D6JtrfeD.js";import"./SkeletonBar-fZ5yiNKx.js";import"./Tooltip-C62L9zHh.js";import"./info-sign-D8L3IcEu.js";import"./chevron-up-aDYxr8z-.js";import"./chevron-down-BfRThbY_.js";import"./useEventCallback-CsLxej8y.js";import"./iconLoader-C0qa0-Zu.js";import"./CompositeRoot-C86n7YeI.js";import"./Switch-CKFHrhyl.js";import"./TimePicker-CyJcjuap.js";import"./CollapsiblePanel-Boi6zITp.js";import"./error-ByC5dNyY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Benbq0c_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
