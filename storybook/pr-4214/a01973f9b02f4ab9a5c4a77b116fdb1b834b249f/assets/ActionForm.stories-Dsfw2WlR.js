import{j as t,g as n}from"./iframe-DQ-Ez-qG.js";import{A as r}from"./action-form-BIhdBMMo.js";import"./preload-helper-DbSstiuK.js";import"./DropdownField-DYQWWJ9Y.js";import"./debounce-CqA-XlMm.js";import"./useOsdkClient-CFdl-q-C.js";import"./index-BXE1O0xs.js";import"./Input-DJaKEaOT.js";import"./useBaseUiId-SgVzRrNW.js";import"./useControlled-CTxFJ2Pw.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./PopoverPopup-rO1C9fPG.js";import"./InternalBackdrop-DMP_qe1B.js";import"./composite-BiRiw1GR.js";import"./index-D0HpUEtr.js";import"./getDisabledMountTransitionStyles-CADlu38g.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./tick-Co47VK84.js";import"./svgIconContainer-B-U6T-6a.js";import"./small-cross-BMEseqYj.js";import"./search-67zYXUAs.js";import"./cross-UZvPpSxI.js";import"./useValueChanged-Bp8kvkvX.js";import"./getPseudoElementBounds-fzrtgOLH.js";import"./CompositeItem-DdY16ynU.js";import"./makeExternalStore-JHGUKVEV.js";import"./BaseForm-D7ZPRYpS.js";import"./ActionButton-gGre5Rrx.js";import"./Button-CEhBDWA2.js";import"./SkeletonBar-DugVqGn-.js";import"./Tooltip-BPBaOiL7.js";import"./info-sign-DCrC39t3.js";import"./chevron-up-DL9Ek3XH.js";import"./chevron-down-COv6kIer.js";import"./useEventCallback-BIHXGnti.js";import"./iconLoader-CV_lmazv.js";import"./Switch-DHh26QNW.js";import"./CompositeRoot-DOtWACD6.js";import"./TimePicker-BvOj-VTu.js";import"./CollapsiblePanel-UEtpZfSu.js";import"./error-BvUwAVRc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CUCSCii1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
