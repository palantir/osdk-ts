import{j as t,g as n}from"./iframe-zZuIx-c9.js";import{A as r}from"./action-form-CP4RVj_t.js";import"./preload-helper-XLtQClQl.js";import"./DropdownField-DCyylpdR.js";import"./debounce-BGzgo4FS.js";import"./useOsdkClient-BmjkDG1y.js";import"./index-DGgNHuzV.js";import"./Input-BD19hUvi.js";import"./useBaseUiId-QsYmwdFZ.js";import"./useControlled-B4CVwr3J.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./PopoverPopup-CVvRvgY6.js";import"./InternalBackdrop-B0ZUvn2o.js";import"./composite-Cx527Tyd.js";import"./index-DSSfDUcI.js";import"./getDisabledMountTransitionStyles-B0Omgaf7.js";import"./ToolbarRootContext-pNEiopTT.js";import"./tick-mF_xRJKy.js";import"./svgIconContainer-BVFcWySo.js";import"./small-cross-Ce2qYYjw.js";import"./search-CNuN0o2o.js";import"./cross-CI4w4_Jo.js";import"./useValueChanged-VVjI8tpd.js";import"./getPseudoElementBounds-Dw3d2TY6.js";import"./CompositeItem-DKDVMcoh.js";import"./makeExternalStore-BcA2BzRz.js";import"./BaseForm-DU9ec1CU.js";import"./ActionButton-CTnMDA00.js";import"./Button-Cv2L8neg.js";import"./SkeletonBar-BpofndJ7.js";import"./Tooltip-C-LiyBN2.js";import"./info-sign-DDsHI7Bt.js";import"./chevron-up-BezA9gj5.js";import"./chevron-down-BRlfcJdA.js";import"./useEventCallback-DuyscJu3.js";import"./iconLoader-Bsvza4To.js";import"./CompositeRoot-A5R3Pr0N.js";import"./Switch-D7aaHVvo.js";import"./TimePicker-e1GX4KiB.js";import"./CollapsiblePanel-CDMZ6agG.js";import"./error-C5gHLQAi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Y5EbkS67.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
