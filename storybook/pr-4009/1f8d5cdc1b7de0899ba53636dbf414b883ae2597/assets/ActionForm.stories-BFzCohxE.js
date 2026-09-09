import{j as t,g as n}from"./iframe-YaS06hyW.js";import{A as r}from"./action-form-BXjKvFjB.js";import"./preload-helper-CHXu7ylM.js";import"./DropdownField-Do5PO4eK.js";import"./debounce-B7ZPV7rx.js";import"./useOsdkClient-BQhZ6hRm.js";import"./index-B-cO8d-Q.js";import"./Input-Dql0qM-e.js";import"./useBaseUiId-CjvUa8cY.js";import"./useControlled-Bm5M3oKq.js";import"./index-DbqTfLlX.js";import"./index-DXr_DK2g.js";import"./PopoverPopup-BOYvum7T.js";import"./InternalBackdrop-BO6eEqaF.js";import"./composite-BkFZzr2I.js";import"./index-De5BIU9t.js";import"./getDisabledMountTransitionStyles-DDMdB6wz.js";import"./ToolbarRootContext-D-k46Imi.js";import"./tick-BJJckPUf.js";import"./svgIconContainer-DLa4OU0n.js";import"./small-cross-sr4-rTD5.js";import"./search-DaYARQRb.js";import"./cross-AobcYagI.js";import"./useValueChanged-2sKWWR-R.js";import"./getPseudoElementBounds-CWoE1MIM.js";import"./CompositeItem-ClG1U4EV.js";import"./makeExternalStore-Cqyecvoe.js";import"./BaseForm-DXe-WRJ7.js";import"./ActionButton-BLeOA9QJ.js";import"./Button-BEru0DpJ.js";import"./SkeletonBar-DHk9E0H4.js";import"./Tooltip-Dp5Fjj_b.js";import"./info-sign-YOmVF59k.js";import"./chevron-up-kJrzu3TE.js";import"./chevron-down-CxKB5IcW.js";import"./useEventCallback-Ddj36AAG.js";import"./iconLoader-zVw7PJOR.js";import"./CompositeRoot-DvtlH5aJ.js";import"./Switch-CMfyiM6t.js";import"./TimePicker-C4NF4Lhv.js";import"./CollapsiblePanel-DoSREVMI.js";import"./error-irND_epE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-8M4HiVCC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
