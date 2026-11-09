import{j as t,g as n}from"./iframe-BwKzjaO_.js";import{A as r}from"./action-form-DMQwzNa2.js";import"./preload-helper-Cw3PuEWm.js";import"./DropdownField-CfFskAQQ.js";import"./debounce-F8ygRT2p.js";import"./useOsdkClient-DMp68QLo.js";import"./index-jEwj8y1B.js";import"./Input-4hInwvvu.js";import"./useBaseUiId-BGPb7m92.js";import"./useControlled-DYaNtfGY.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./isObject-CfracQ9h.js";import"./InternalBackdrop-DCVAdZPe.js";import"./composite-Az3dyPdd.js";import"./index-4q7PhTeO.js";import"./getDisabledMountTransitionStyles-BdphTWCa.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./tick-D4wK5tyJ.js";import"./svgIconContainer-BwQ9ehgu.js";import"./small-cross-BWwYEXIu.js";import"./search-DdHvONrb.js";import"./cross-1lQqZabN.js";import"./useValueChanged-m0H_6TBE.js";import"./getPseudoElementBounds-4gbF3_cn.js";import"./CompositeItem-Cp7s4593.js";import"./makeExternalStore-GJQDziWf.js";import"./BaseForm-CMBMZTr8.js";import"./ActionButton-8eBbMlAk.js";import"./Button-Cz27x8wi.js";import"./SkeletonBar-LISMmzYx.js";import"./Tooltip-Dr8Setpm.js";import"./info-sign-CnbLT0XX.js";import"./chevron-up-DzumeE9d.js";import"./chevron-down-BTGBlQFb.js";import"./useEventCallback-DjZC-G9S.js";import"./iconLoader-f3cCHPPZ.js";import"./Switch-BoupCuLr.js";import"./CompositeRoot-BP1E_eJl.js";import"./TimePicker-Cg4LGU70.js";import"./CollapsiblePanel-D68KQNQi.js";import"./error-Nw58INx5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3WubJygy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
