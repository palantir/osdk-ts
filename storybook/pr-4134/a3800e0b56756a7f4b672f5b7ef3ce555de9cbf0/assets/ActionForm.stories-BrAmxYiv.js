import{j as t,g as n}from"./iframe-SRdlKq9b.js";import{A as r}from"./action-form-stBIo-jr.js";import"./preload-helper-s1eLnSv0.js";import"./DropdownField-BkOAd7gw.js";import"./debounce-wqarF4Vc.js";import"./useOsdkClient-jZoOvTCC.js";import"./index-DD8FCudr.js";import"./Input-DAJATtsq.js";import"./useBaseUiId-B4J9k2RX.js";import"./useControlled-wCYPw1x7.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./PopoverPopup-qEnUheAt.js";import"./InternalBackdrop-DZ5UfCCc.js";import"./composite-CZ2o_96f.js";import"./index-Cn9jOaaC.js";import"./getDisabledMountTransitionStyles-Bgi2j66A.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./tick-DneUhZ2Q.js";import"./svgIconContainer-BcXM3VSp.js";import"./small-cross-L_-ELWme.js";import"./search-BIvi-2TY.js";import"./cross-CXZKrh1h.js";import"./useValueChanged-BTouMuh0.js";import"./getPseudoElementBounds-CJTp5fJ0.js";import"./CompositeItem-CxO1LzKy.js";import"./makeExternalStore-gzodh6iV.js";import"./BaseForm-CR1bqG6D.js";import"./ActionButton-C63e1YEm.js";import"./Button-D5IcZbYw.js";import"./SkeletonBar-2487SD1x.js";import"./Tooltip-CWTCUjbr.js";import"./info-sign-nBkS1BPR.js";import"./chevron-up-C59nTuy_.js";import"./chevron-down--GHDODIE.js";import"./useEventCallback-DlExu_x9.js";import"./iconLoader-d2SQ87Ge.js";import"./Switch-CX1haGII.js";import"./CompositeRoot-ClqTf6kG.js";import"./TimePicker-D7wPSLag.js";import"./CollapsiblePanel-B-UdhI4G.js";import"./error-DFAQrfbx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jgsXWTD0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
