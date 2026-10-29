import{j as t,g as n}from"./iframe-DrkKxiw5.js";import{A as r}from"./action-form-DK-b9-Dn.js";import"./preload-helper-CoexQg1D.js";import"./DropdownField-BgPaKr2p.js";import"./debounce-tRqZT1XJ.js";import"./useOsdkClient-2K-Ebyul.js";import"./index-9bu5FaWD.js";import"./Input-DOgtVus-.js";import"./useBaseUiId-NPWMEoN9.js";import"./useControlled-BCrFB87J.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./PopoverPopup-6cHsVbHZ.js";import"./InternalBackdrop-BHnmo_mI.js";import"./composite-BHNDyYYF.js";import"./index-B1tVzWT5.js";import"./getDisabledMountTransitionStyles-C3Z8Tksw.js";import"./ToolbarRootContext-C8q64USb.js";import"./tick-DLXEDZLW.js";import"./svgIconContainer-BwjWYJj_.js";import"./small-cross-DmpTk7iL.js";import"./search-D4-R-e8V.js";import"./cross-CNIYbi9C.js";import"./useValueChanged-oqHjTNH5.js";import"./getPseudoElementBounds-BZjeQhGg.js";import"./CompositeItem-C5ekTE5F.js";import"./makeExternalStore-D4NtYiCX.js";import"./BaseForm-Bon99kIH.js";import"./ActionButton-87-LtZRT.js";import"./Button-CF-FMXcU.js";import"./SkeletonBar-DxwKfUAL.js";import"./Tooltip-DL2AUsJC.js";import"./info-sign-C0Ro4v9J.js";import"./chevron-up-SZpzcDbD.js";import"./chevron-down-DsVdM_C_.js";import"./useEventCallback-d78tTu5e.js";import"./iconLoader-uORiEc3t.js";import"./Switch-D7BVJprY.js";import"./CompositeRoot-WPBDk70c.js";import"./TimePicker-D2RmLTuX.js";import"./CollapsiblePanel-QmgD0n_V.js";import"./error-C2HVZj6I.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LuraraC5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
