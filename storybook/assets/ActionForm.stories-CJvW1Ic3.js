import{j as t,g as n}from"./iframe-DW0pXrl1.js";import{A as r}from"./action-form-BlU1NszK.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Cdnzgg6h.js";import"./debounce-BxUvnR7-.js";import"./useOsdkClient-d2bN7B2D.js";import"./index-DnR9sAsk.js";import"./Input-Bw5OahtG.js";import"./useBaseUiId-C-Q4_wXv.js";import"./useControlled-DHwMcBbK.js";import"./index-Dqs-eX79.js";import"./index-CXBUMHcq.js";import"./PopoverPopup-DP21wBfL.js";import"./InternalBackdrop-BluWwehb.js";import"./composite-xGDnWfXU.js";import"./index-CKqF8zbs.js";import"./getDisabledMountTransitionStyles-BtEjnFuL.js";import"./ToolbarRootContext-Bl9OtRZB.js";import"./tick-BYqbPGZh.js";import"./svgIconContainer-ClnaI19G.js";import"./small-cross-lYSE0QnW.js";import"./search-3LJjcIJ7.js";import"./cross-f1t5SerR.js";import"./useValueChanged-DrIs_yVV.js";import"./getPseudoElementBounds-Bb3qgbg4.js";import"./CompositeItem-DTleMZzr.js";import"./makeExternalStore-D-CdOqwo.js";import"./BaseForm-Qm7uDeY1.js";import"./ActionButton-CTtqOwIe.js";import"./Button-LBvMHfI5.js";import"./SkeletonBar-BpEqfrSc.js";import"./Tooltip-CnMi1Qb4.js";import"./info-sign-CHSYLeYg.js";import"./chevron-up-9GdUyghl.js";import"./chevron-down-DdU7H-NS.js";import"./useEventCallback-DL9-47i7.js";import"./iconLoader-uNqnF4bl.js";import"./Switch-DQJhk01a.js";import"./CompositeRoot-Dp3w4xhc.js";import"./TimePicker-BurJdlPS.js";import"./CollapsiblePanel-B1iD119e.js";import"./error-Dy3r5qvO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DX22MNhQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
