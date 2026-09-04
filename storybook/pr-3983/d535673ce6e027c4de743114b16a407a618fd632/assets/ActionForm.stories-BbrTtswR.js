import{j as t,g as n}from"./iframe-DXaJ13QU.js";import{A as r}from"./action-form-B274_5t9.js";import"./preload-helper-BroFP_lE.js";import"./DropdownField-C6212O3_.js";import"./debounce-C3pc2scv.js";import"./useOsdkClient-B7wuXGjj.js";import"./index-DZFr4IUe.js";import"./Input-5PPkwes4.js";import"./useBaseUiId-rib_Fnun.js";import"./useControlled-DEmQR29N.js";import"./index-DRifIPLC.js";import"./index-Dw57ybl-.js";import"./PopoverPopup-BKrHCY-Q.js";import"./InternalBackdrop-Zj2BFMXg.js";import"./composite-BAacjU3A.js";import"./index-Cr1sYr80.js";import"./getDisabledMountTransitionStyles-BAol_-Lj.js";import"./ToolbarRootContext-Cz-twL-R.js";import"./tick-dOHg_t3C.js";import"./svgIconContainer-Cok1WmRf.js";import"./small-cross-BBUhfExp.js";import"./search-BhfCLASk.js";import"./cross-B9pf8KCz.js";import"./useValueChanged-CGfRbHou.js";import"./getPseudoElementBounds-DlPJcayw.js";import"./CompositeItem-UfCVn6ij.js";import"./makeExternalStore-YZAYYspW.js";import"./BaseForm-DjZlxuNO.js";import"./ActionButton-Cj_9HOV9.js";import"./Button-DN8eJVF0.js";import"./SkeletonBar-MGki9n80.js";import"./Tooltip-CkUCTSSv.js";import"./info-sign-Cfvax0c5.js";import"./chevron-up-Bqe3JmcU.js";import"./chevron-down-BggCntkx.js";import"./useEventCallback-DIhZQMlD.js";import"./iconLoader-j6SSFusF.js";import"./CompositeRoot-C6G_y4Q3.js";import"./Switch-D22AJT4M.js";import"./TimePicker-D1hD9RUf.js";import"./CollapsiblePanel-DPEWUotT.js";import"./error-Cm275nno.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hFb6ubqE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
