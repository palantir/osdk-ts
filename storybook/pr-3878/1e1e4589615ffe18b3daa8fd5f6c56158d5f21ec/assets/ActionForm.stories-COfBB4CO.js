import{j as t,g as n}from"./iframe-D3DqoIpf.js";import{A as r}from"./action-form-6_VT9wpn.js";import"./preload-helper-Bur1EzB5.js";import"./DropdownField-CwjqwoqN.js";import"./debounce-QvYOae8J.js";import"./useOsdkClient-BZ2Q6Hqc.js";import"./index-BThkDgxi.js";import"./Input-Ba9sqiE-.js";import"./useBaseUiId-BOGuxokK.js";import"./useControlled-R3QnTpFh.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./PopoverPopup-Cv0Kt1cr.js";import"./InternalBackdrop-CX5pFpyQ.js";import"./composite-DOJBzh5B.js";import"./index-CLu7smVU.js";import"./getDisabledMountTransitionStyles-MKKxqo0-.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./tick-C5EOZ80L.js";import"./svgIconContainer-CoUDa19N.js";import"./small-cross-Cx3vpP8Z.js";import"./search-DzOWxMYj.js";import"./cross-CAMhptAD.js";import"./useValueChanged-h8m0Y_Ok.js";import"./getPseudoElementBounds-DoOAyvUg.js";import"./CompositeItem-DmhK9sjv.js";import"./makeExternalStore-CWigMI40.js";import"./BaseForm-gj5kZKc-.js";import"./ActionButton-BmFxbrY9.js";import"./Button-D1m-bnZN.js";import"./SkeletonBar-DhPBeMf1.js";import"./Tooltip-BFQd_OrJ.js";import"./info-sign-B7-Xttaq.js";import"./chevron-up-815Id4Y3.js";import"./chevron-down-BYhG0KSh.js";import"./useEventCallback-BwRfc_LO.js";import"./iconLoader-Co3NrvOY.js";import"./CompositeRoot-BwtDdD6K.js";import"./Switch-BiT8wRSr.js";import"./TimePicker-CcrkTP0q.js";import"./CollapsiblePanel-CvE2FJWC.js";import"./error-DmP3oCyF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dzhtom8t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
