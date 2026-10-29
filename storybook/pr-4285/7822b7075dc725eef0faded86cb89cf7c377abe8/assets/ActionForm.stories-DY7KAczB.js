import{j as t,g as n}from"./iframe-CVDpL90O.js";import{A as r}from"./action-form-CiAwbLhx.js";import"./preload-helper-CIPjJPKp.js";import"./DropdownField-BM5OcVuZ.js";import"./debounce-C-oR-6vV.js";import"./useOsdkClient-BiLmRsAv.js";import"./index-BF0HWBEB.js";import"./Input-j-X_dej_.js";import"./useBaseUiId-BCC_HzQ6.js";import"./useControlled-DZoipFBP.js";import"./index-Ds1Aymw0.js";import"./index-CULs0xL-.js";import"./PopoverPopup-D4SYJzOZ.js";import"./InternalBackdrop-BZZ5bQIp.js";import"./composite-lCZw7hw2.js";import"./index-Dtg66FsS.js";import"./getDisabledMountTransitionStyles-B9VELkTQ.js";import"./ToolbarRootContext-ibPgpNdZ.js";import"./tick-BMFIqZXK.js";import"./svgIconContainer-XCs7jcMS.js";import"./small-cross-DZOaDD7A.js";import"./search-DRW19Kos.js";import"./cross-vYjtUHUt.js";import"./useValueChanged-DXsPmKg2.js";import"./getPseudoElementBounds-Die0kok9.js";import"./CompositeItem-Cv4L9909.js";import"./makeExternalStore-fRsFu06A.js";import"./BaseForm-BMVW2Gzt.js";import"./ActionButton-C7QU8r5M.js";import"./Button-BH6PW13i.js";import"./SkeletonBar-CqE5Ixfq.js";import"./Tooltip-CqTiZ4gu.js";import"./info-sign-Byt57_dc.js";import"./chevron-up-BUJfcqle.js";import"./chevron-down-h1ntsUGU.js";import"./useEventCallback-srOVomUh.js";import"./iconLoader-UJafeqj1.js";import"./Switch-DjRRjAgy.js";import"./CompositeRoot-DymiOgXh.js";import"./TimePicker-CssBnobu.js";import"./CollapsiblePanel-Cp-hOTel.js";import"./error-DF2Qy4tB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bl2KNckA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
