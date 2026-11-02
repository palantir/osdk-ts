import{j as t,g as n}from"./iframe-BITxIQXM.js";import{A as r}from"./action-form-haoil5cb.js";import"./preload-helper-CJCZF6BK.js";import"./DropdownField-8NieERJz.js";import"./debounce-BArBmm9m.js";import"./useOsdkClient-_qIeBz6R.js";import"./index-BXV9FcBB.js";import"./Input-DB8ShKaf.js";import"./useBaseUiId-DoTbd__l.js";import"./useControlled-Yy2fJI9L.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./PopoverPopup-PaNaO8o5.js";import"./InternalBackdrop-DCrVf-EE.js";import"./composite-CqBnb1yV.js";import"./index-EOsqRXOu.js";import"./getDisabledMountTransitionStyles-Dp8AXCtE.js";import"./ToolbarRootContext-Ddl053qU.js";import"./tick-Bshl7dq7.js";import"./svgIconContainer-4yskBugb.js";import"./small-cross-GSrdzjDe.js";import"./search-Bb0Ck9Ps.js";import"./cross-DYXRPDx7.js";import"./useValueChanged-CTDlXj4Q.js";import"./getPseudoElementBounds-BjyRTRRW.js";import"./CompositeItem-TvjrH8CY.js";import"./makeExternalStore-C_t-r-t8.js";import"./BaseForm-BRI-DN97.js";import"./ActionButton-D5dP9TnG.js";import"./Button-CrhbLtNZ.js";import"./SkeletonBar-DV7HgVRJ.js";import"./Tooltip-BAiOzlh0.js";import"./info-sign-DY9Vs9xM.js";import"./chevron-up-CoLjarCK.js";import"./chevron-down-DVE6tSD6.js";import"./useEventCallback-DZfqIGxY.js";import"./iconLoader-BnDYTfX8.js";import"./Switch-BxVe22A9.js";import"./CompositeRoot-BSUx5Jdj.js";import"./TimePicker-DrX-GSUC.js";import"./CollapsiblePanel-Bo_h6-tV.js";import"./error-DxPjfWes.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B04gc41f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
