import{j as t,g as n}from"./iframe-DxVz5dus.js";import{A as r}from"./action-form-sP5EjohQ.js";import"./preload-helper-dij9S3RJ.js";import"./DropdownField-CXyq1EI7.js";import"./debounce-HK4ZQpWE.js";import"./useOsdkClient-DWdsPkLC.js";import"./index-C_W-VT0S.js";import"./Input-BLn4Lqlk.js";import"./useBaseUiId-BWXYzcoK.js";import"./useControlled-laJEGVBG.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./PopoverPopup-DDubBzbx.js";import"./InternalBackdrop-B1SYraZj.js";import"./composite-BDVlfNwN.js";import"./index-BiJTgGJY.js";import"./getDisabledMountTransitionStyles-jz6kYw7l.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./tick-B2s8zm1S.js";import"./svgIconContainer-ftSbGeci.js";import"./small-cross-DNkarUz2.js";import"./search-C5WRo3gI.js";import"./cross-IXW3xmZm.js";import"./useValueChanged-C6gCry8f.js";import"./getPseudoElementBounds-DLZHdgfT.js";import"./CompositeItem-DZxjvmIc.js";import"./makeExternalStore-6HRE-tXR.js";import"./BaseForm-Ti-4M6Nf.js";import"./ActionButton-B5XzNvTu.js";import"./Button-DkKQyNy7.js";import"./SkeletonBar-DERF-gsY.js";import"./Tooltip-CIQ48OAI.js";import"./info-sign-BEoyrZaG.js";import"./chevron-up-CumbAUZ6.js";import"./chevron-down-CJ_JWdST.js";import"./useEventCallback-CX0aAoan.js";import"./iconLoader-DNb2G6gm.js";import"./Switch-D1woljpH.js";import"./CompositeRoot-d5etySDx.js";import"./TimePicker-Cnry6kBE.js";import"./CollapsiblePanel-emSmjH55.js";import"./error-l8hi8NpA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BUQXNERU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
