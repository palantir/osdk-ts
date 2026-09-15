import{j as t,g as n}from"./iframe-DP2XT2Ax.js";import{A as r}from"./action-form-yc_bworA.js";import"./preload-helper-MSxHh9cg.js";import"./DropdownField-CtHib4R8.js";import"./debounce-Dj81RInU.js";import"./useOsdkClient-CAkDS70D.js";import"./index-CZwfuIm2.js";import"./Input-1UPAFlWH.js";import"./useBaseUiId-FZoWw8m8.js";import"./useControlled-C4scXiay.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./PopoverPopup-C_ncCoFL.js";import"./InternalBackdrop-BhboBOxC.js";import"./composite-CmPQztny.js";import"./index-DbIKPCqv.js";import"./getDisabledMountTransitionStyles-DDs7xAlw.js";import"./ToolbarRootContext-BZtQONnf.js";import"./tick-C2-r-ZD3.js";import"./svgIconContainer-CYYVNj4c.js";import"./small-cross-CtLGGmA4.js";import"./search-DHZrW8_w.js";import"./cross-BST2eW_7.js";import"./useValueChanged-RoL-GB64.js";import"./getPseudoElementBounds-QeoJL95h.js";import"./CompositeItem-AXDbFh92.js";import"./makeExternalStore-Db1GWq1p.js";import"./BaseForm-CmFJR-5e.js";import"./ActionButton-uv8s5IRm.js";import"./Button-BVtJyzoK.js";import"./SkeletonBar-DH4NDkMn.js";import"./Tooltip-aqIVw1KW.js";import"./info-sign-5GjSjFQm.js";import"./chevron-up-B8bW0ZvP.js";import"./chevron-down-CzZnZ__S.js";import"./useEventCallback-Dg6K2X_Q.js";import"./iconLoader-B1_yAxv4.js";import"./CompositeRoot-DYAU3vjN.js";import"./Switch-BkgpJPFr.js";import"./TimePicker-B54jNrok.js";import"./CollapsiblePanel-DPIs0k4c.js";import"./error-BbJX9_-G.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-l-VjWGrr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
