import{j as t,g as n}from"./iframe-DuWBrnX6.js";import{A as r}from"./action-form-CyAVxZ0i.js";import"./preload-helper-DrgdFKpA.js";import"./DropdownField-BG1ZRgQZ.js";import"./debounce-Jnl0OpEZ.js";import"./useOsdkClient-DJmRQ5Mp.js";import"./index-OYdh6lUD.js";import"./Input-BkO3X1te.js";import"./useBaseUiId-CdjTAmdC.js";import"./useControlled-CfhHYIWN.js";import"./index-BL6aYYYG.js";import"./index-CVjf0aQc.js";import"./PopoverPopup-xFmMVW0q.js";import"./InternalBackdrop-qsctjG9Y.js";import"./composite-CJJfU9AF.js";import"./index-D_3yv_eh.js";import"./getDisabledMountTransitionStyles-Di8yZzl5.js";import"./ToolbarRootContext-rla5WBjp.js";import"./tick-BLa43JG6.js";import"./svgIconContainer-DbzEfa2V.js";import"./small-cross-CA-Fa8Tl.js";import"./search-D_dtCoIW.js";import"./cross-C8yX_l8v.js";import"./useValueChanged-z4RYagBJ.js";import"./getPseudoElementBounds-BpxRKDt_.js";import"./CompositeItem-BMOplAgs.js";import"./makeExternalStore-CjwtTBHZ.js";import"./BaseForm-Fjd52ZH5.js";import"./ActionButton-BA89Y5HO.js";import"./Button-_WXHae0p.js";import"./SkeletonBar-D0aUZjHc.js";import"./Tooltip-QYTL3AIS.js";import"./info-sign-Bl7NBfKF.js";import"./chevron-up-D5CWgtqe.js";import"./chevron-down-C1ZcStCW.js";import"./useEventCallback-myN755vz.js";import"./iconLoader-2WVTU6Z9.js";import"./Switch-BJLThEG_.js";import"./CompositeRoot-DXY1uypv.js";import"./TimePicker-C8ZgH_5l.js";import"./CollapsiblePanel-nkH1KYbY.js";import"./error-Ch_37QlI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGxRrW5c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
