import{j as t,g as n}from"./iframe-Z5B59nHv.js";import{A as r}from"./action-form-DkfNvovj.js";import"./preload-helper-B3LVR9LX.js";import"./DropdownField-CZiGi09a.js";import"./debounce-D-eTCzZU.js";import"./useOsdkClient-XgUCld_F.js";import"./index-cU0AVaQf.js";import"./Input-Bu230jB_.js";import"./useBaseUiId-DN7B2pea.js";import"./useControlled-BQV59h-A.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./PopoverPopup-CC0rhnhV.js";import"./InternalBackdrop-CT8QE5xx.js";import"./composite-Dna_oWev.js";import"./index-D5bko_OX.js";import"./getDisabledMountTransitionStyles-Ca4we0Dc.js";import"./ToolbarRootContext-Bs124fL_.js";import"./tick-C0PU8pW9.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./small-cross-CTkkul48.js";import"./search-CH0ng29D.js";import"./cross-Cwrmhou9.js";import"./useValueChanged-CM_W6cBg.js";import"./getPseudoElementBounds-CnpaCKEL.js";import"./CompositeItem-jpYgtvmQ.js";import"./makeExternalStore-rak7eNYQ.js";import"./BaseForm-BD-0fVRI.js";import"./ActionButton-CQFbOgwD.js";import"./Button-C8Wmmv8l.js";import"./SkeletonBar-CDx-ZXnH.js";import"./Tooltip-Cs-Vtp60.js";import"./info-sign-CCc5CPlu.js";import"./chevron-up-BraaQmq6.js";import"./chevron-down-nfT9szK9.js";import"./useEventCallback-BOlmFfw4.js";import"./iconLoader-C-D9t7Wo.js";import"./Switch-DHFr_Fdy.js";import"./CompositeRoot-eyJrG7SY.js";import"./TimePicker-Crw4i2cu.js";import"./CollapsiblePanel-CkovPae2.js";import"./error-DocjYaCq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DB3Tu-8Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
