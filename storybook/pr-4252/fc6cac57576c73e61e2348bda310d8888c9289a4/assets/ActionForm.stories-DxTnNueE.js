import{j as t,g as n}from"./iframe-CvDCAeDH.js";import{A as r}from"./action-form-D-TZwh8G.js";import"./preload-helper-CySF3uCO.js";import"./DropdownField-C8RlYBV5.js";import"./debounce-zyyUUcoC.js";import"./useOsdkClient-CeLUd2a8.js";import"./index-nRFzHzzN.js";import"./Input-ALhJpCPl.js";import"./useBaseUiId-CERu-Mmn.js";import"./useControlled-C_KfRsXv.js";import"./index-RY0nU7lO.js";import"./index-DUHiZ1To.js";import"./PopoverPopup-D23pQWc3.js";import"./InternalBackdrop-Dnld41P_.js";import"./composite-DRBh063u.js";import"./index-C6zuoPb0.js";import"./getDisabledMountTransitionStyles-Bsgl2E4D.js";import"./ToolbarRootContext-DAFODDmt.js";import"./tick-DR6qavIZ.js";import"./svgIconContainer-BhfMRbBd.js";import"./small-cross-DlN3ZgDX.js";import"./search-dKzEJt7B.js";import"./cross-EFfC56XR.js";import"./useValueChanged-BoHTJvSv.js";import"./getPseudoElementBounds-qWUecOLW.js";import"./CompositeItem-DMUlrRz3.js";import"./makeExternalStore-feC-GRyZ.js";import"./BaseForm-x46PD8Tt.js";import"./ActionButton-DRoq9FTP.js";import"./Button-DisPssKu.js";import"./SkeletonBar-BPwyQ3k9.js";import"./Tooltip-B3z3Udmz.js";import"./info-sign-Cp3u_k-l.js";import"./chevron-up-QV-X91NM.js";import"./chevron-down-ZDn0-ls9.js";import"./useEventCallback-Dvnc1qQ_.js";import"./iconLoader-DhJNxaCI.js";import"./Switch-SZpTuvpw.js";import"./CompositeRoot-CuxPdnM0.js";import"./TimePicker-Nd9zKAei.js";import"./CollapsiblePanel-BoKAurlF.js";import"./error-DzLL_NpE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ck_CFDG4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
