import{j as t,g as n}from"./iframe-Dku1rot2.js";import{A as r}from"./action-form-DqYMGasn.js";import"./preload-helper-B1jRvLNW.js";import"./DropdownField-Dhuq6WVc.js";import"./debounce-CA9_8DL0.js";import"./useOsdkClient-DYuiBPOo.js";import"./index-CpbATsh6.js";import"./Input-DJRIt2l4.js";import"./useBaseUiId-BUKWDElb.js";import"./useControlled-DwMnSwB6.js";import"./index-rdZNlnOZ.js";import"./index--u9NxfUY.js";import"./PopoverPopup-D-Gbzl8J.js";import"./InternalBackdrop-Bv67AAf2.js";import"./composite-BePe6hVW.js";import"./index-CQ7Gwlen.js";import"./getDisabledMountTransitionStyles-CDJ1MLHW.js";import"./ToolbarRootContext-CXEqftjp.js";import"./tick-CVroU8tN.js";import"./svgIconContainer--MRhEEk0.js";import"./small-cross-QiwT5l_B.js";import"./search-UFTU3MKj.js";import"./cross-CYdU8q6K.js";import"./useValueChanged-B2781QBM.js";import"./getPseudoElementBounds-BpVmGFE2.js";import"./CompositeItem-BreNqiOh.js";import"./makeExternalStore-rRh8-oZl.js";import"./BaseForm-DGjNa9L3.js";import"./ActionButton-D1LuQOA7.js";import"./Button-CGaTAwDT.js";import"./SkeletonBar-PabXS6Px.js";import"./Tooltip-Dwc5k9lz.js";import"./info-sign-7MudUd8G.js";import"./chevron-up-Dzh4oNVQ.js";import"./chevron-down-B4TAPheD.js";import"./useEventCallback-DbRXf3-_.js";import"./iconLoader-_yH1k0Bj.js";import"./Switch-QybE1pHc.js";import"./CompositeRoot-3Aq8sZem.js";import"./TimePicker-BQ5FHauK.js";import"./CollapsiblePanel-piFpbce9.js";import"./error-setnCXRk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-n7CfGLfD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
