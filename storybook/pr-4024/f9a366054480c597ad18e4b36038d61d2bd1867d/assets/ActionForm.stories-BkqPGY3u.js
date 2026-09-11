import{j as t,g as n}from"./iframe-jMwYipi7.js";import{A as r}from"./action-form-Cjr4MIdv.js";import"./preload-helper-DuATZxWQ.js";import"./DropdownField-lNbdtwFm.js";import"./debounce-DcYvAVr6.js";import"./useOsdkClient-BdINNOYX.js";import"./index-Dz_M8fMm.js";import"./Input-yW4xW1y2.js";import"./useBaseUiId-CowvthfG.js";import"./useControlled-CkNav0ZD.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./PopoverPopup-DiKkC9qL.js";import"./InternalBackdrop-DMfDH2vS.js";import"./composite-CY5glQip.js";import"./index-B-GHK9XU.js";import"./getDisabledMountTransitionStyles-CkP6dO--.js";import"./ToolbarRootContext-CyHNucoq.js";import"./tick-B4Iihx0z.js";import"./svgIconContainer-C67djf6q.js";import"./small-cross-fIpnPilt.js";import"./search-CZYRjLGu.js";import"./cross-D4s078tN.js";import"./useValueChanged-DU8GXm_T.js";import"./getPseudoElementBounds-Iu6zkRHv.js";import"./CompositeItem-BFcshnAb.js";import"./makeExternalStore-DpRr9t8b.js";import"./BaseForm-Dnf4gaK6.js";import"./ActionButton-DoLv7Bc0.js";import"./Button-CQ-F38oG.js";import"./SkeletonBar-B0rvX527.js";import"./Tooltip-CSvM8AX_.js";import"./info-sign-D7XzErHH.js";import"./chevron-up-CGto-75e.js";import"./chevron-down-DoTJVfbo.js";import"./useEventCallback-BWoB4Eoe.js";import"./iconLoader-mxCF_sZH.js";import"./CompositeRoot-D8EJH4jI.js";import"./Switch-CakaOxVD.js";import"./TimePicker-DQaS9ItF.js";import"./CollapsiblePanel--Covd7Se.js";import"./error-D1FCJ2D3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CY_PsP6V.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
