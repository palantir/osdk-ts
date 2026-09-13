import{j as t,g as n}from"./iframe-DBDT7cai.js";import{A as r}from"./action-form-3-a93M4I.js";import"./preload-helper-CZUIUplp.js";import"./DropdownField-CCG2cNMr.js";import"./debounce-COvZkwXR.js";import"./useOsdkClient-zmFqX8ua.js";import"./index-DNPTs4g2.js";import"./Input-CitZWzLR.js";import"./useBaseUiId-PRKCGqGz.js";import"./useControlled-BkrcSri5.js";import"./index-BsC2sM8x.js";import"./index-kRLOqZpZ.js";import"./PopoverPopup-BgEfDDqS.js";import"./InternalBackdrop-BF5e8bQ9.js";import"./composite-L0L9oW-4.js";import"./index-DCbu_JVG.js";import"./getDisabledMountTransitionStyles-BrqcKlYq.js";import"./ToolbarRootContext-CsenKUBi.js";import"./tick-C4TGfFfS.js";import"./svgIconContainer-DGCHmuI4.js";import"./small-cross-DnW6JuIQ.js";import"./search-CWHw7Uqg.js";import"./cross-DXxcDe7j.js";import"./useValueChanged-IVDgNvAJ.js";import"./getPseudoElementBounds-Nk1mGNF0.js";import"./CompositeItem-LxcE4aIz.js";import"./makeExternalStore-CP2a49qE.js";import"./BaseForm-ChrwqQ_r.js";import"./ActionButton-DWWhEIcJ.js";import"./Button-DP4lNjcp.js";import"./SkeletonBar-DkOilBCf.js";import"./Tooltip-Dhugh288.js";import"./info-sign-xcZSBcto.js";import"./chevron-up-C3mNsh_9.js";import"./chevron-down-BPXQkSQg.js";import"./useEventCallback-Dl-swTIN.js";import"./iconLoader-Cos6DTDD.js";import"./CompositeRoot-COrMMVoC.js";import"./Switch-CllBNbdq.js";import"./TimePicker-Ds98S5Lq.js";import"./CollapsiblePanel-lWl1OUcH.js";import"./error-OvuTWF-e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C04fN_3L.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
