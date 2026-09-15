import{j as t,g as n}from"./iframe-DcCQS0_6.js";import{A as r}from"./action-form-Cp2s2h62.js";import"./preload-helper-xWYT_d-N.js";import"./DropdownField-D9LBoico.js";import"./debounce-CV8PblDi.js";import"./useOsdkClient-DjIuCtk_.js";import"./index-CbMk7YoF.js";import"./Input-DQQsT43v.js";import"./useBaseUiId-Dh-QEy1V.js";import"./useControlled-DjePpHNj.js";import"./index-DV2Nx4iz.js";import"./index-DH8eBQ7L.js";import"./PopoverPopup-4ZQ0qIW9.js";import"./InternalBackdrop-Cjy1b8s5.js";import"./composite-CzrpQp13.js";import"./index-B12KGdMo.js";import"./getDisabledMountTransitionStyles-hcUT6CF_.js";import"./ToolbarRootContext-Bj_28nw4.js";import"./tick-B04vkzTg.js";import"./svgIconContainer-DW0Yd1WX.js";import"./small-cross-J9_U438b.js";import"./search-I8gByOwV.js";import"./cross-CUczp16a.js";import"./useValueChanged-LgJH2RSM.js";import"./getPseudoElementBounds-hK_15JJS.js";import"./CompositeItem-f5BJQE98.js";import"./makeExternalStore-D7kaYs9c.js";import"./BaseForm-6m5RgFZt.js";import"./ActionButton-DUjUq-0F.js";import"./Button-9wNHK-eW.js";import"./SkeletonBar-D5ep4ew5.js";import"./Tooltip-BhO1PItx.js";import"./info-sign-YgU2tj4X.js";import"./chevron-up-BLQgg8Pb.js";import"./chevron-down-lL-kgNIS.js";import"./useEventCallback-uOZ5ZH80.js";import"./iconLoader-C95KWfUN.js";import"./CompositeRoot-DjPVJlxR.js";import"./Switch-Bv_2Jqfm.js";import"./TimePicker-7N59mPah.js";import"./CollapsiblePanel-Bw4GjZXS.js";import"./error-DZqUEnyZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CT48WTCf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
