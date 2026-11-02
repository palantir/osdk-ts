import{j as t,g as n}from"./iframe-Cu1bkUV2.js";import{A as r}from"./action-form-CrRarusy.js";import"./preload-helper-ByBgFQo4.js";import"./DropdownField-Cx1jh9K8.js";import"./debounce-BB3252tl.js";import"./useOsdkClient-BSCp6sZ5.js";import"./index-D8Vgs137.js";import"./Input-DJ6MiMh_.js";import"./useBaseUiId-CsOE9eY7.js";import"./useControlled-ZBCcjOJi.js";import"./index-BJrnppPH.js";import"./index-B9_oej9c.js";import"./PopoverPopup-D2wQ8s1I.js";import"./InternalBackdrop-C8f9FJlV.js";import"./composite-CI-SY_Qx.js";import"./index-CUR5Eq6E.js";import"./getDisabledMountTransitionStyles-Butv2vF5.js";import"./ToolbarRootContext-BY5M87wV.js";import"./tick-BzU5rGKz.js";import"./svgIconContainer-Dtkj8beD.js";import"./small-cross-B1S7LnfD.js";import"./search-DrsueRnd.js";import"./cross-CpkrEpF5.js";import"./useValueChanged-DYWR0khf.js";import"./getPseudoElementBounds-BRoXmMe-.js";import"./CompositeItem-h8YISAEh.js";import"./makeExternalStore-3zKJ5_AP.js";import"./BaseForm-DudTJp3J.js";import"./ActionButton-DH9h44Al.js";import"./Button-DZYZZvZz.js";import"./SkeletonBar-Bq8PEonM.js";import"./Tooltip-CT4INsO4.js";import"./info-sign-BVldQEqZ.js";import"./chevron-up-3of3rui4.js";import"./chevron-down-BybrbSIU.js";import"./useEventCallback-BtQ8PHNi.js";import"./iconLoader-CarEqqDL.js";import"./Switch-Co_i2EGz.js";import"./CompositeRoot-DhJzBFkF.js";import"./TimePicker-BV1qCNbV.js";import"./CollapsiblePanel-zk9ZxzpR.js";import"./error-IUDeQ-Lf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DT7zQxuO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
