import{j as t,g as n}from"./iframe-DpLKkykb.js";import{A as r}from"./action-form-DbnYQmGy.js";import"./preload-helper-B-LnzVrM.js";import"./DropdownField-CLNenIwJ.js";import"./debounce-C-RRrtJp.js";import"./useOsdkClient-DOvJ8crf.js";import"./index-CGUYPJOd.js";import"./Input-BRg86MD8.js";import"./useBaseUiId-exgAqZMu.js";import"./useControlled-DGS0wgFX.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./isObject-DIeIJOdU.js";import"./InternalBackdrop-DcJ6yFxi.js";import"./composite-B2s1GcRp.js";import"./index-4T6xY16C.js";import"./getDisabledMountTransitionStyles-C2Wnkcdr.js";import"./ToolbarRootContext-9nybivRl.js";import"./tick-BzN4aODk.js";import"./svgIconContainer-CZQsWSbp.js";import"./small-cross-CtsQGPXk.js";import"./search-DHqp7hab.js";import"./cross-CXiMlBtd.js";import"./useValueChanged-Bq5vV2O3.js";import"./getPseudoElementBounds-CEgSfOsV.js";import"./CompositeItem-iDk6P1qU.js";import"./makeExternalStore-CIehlGBq.js";import"./BaseForm-DFXaAMLg.js";import"./ActionButton-SnW7FFWH.js";import"./Button-CWQ4920K.js";import"./SkeletonBar-Dy4BjWyK.js";import"./Tooltip-B8_rEhlp.js";import"./info-sign-_7wHZJPk.js";import"./chevron-up-DUMYhYIg.js";import"./chevron-down-C95_Fq08.js";import"./useEventCallback-Vl5Y4MSh.js";import"./iconLoader-EyPoSYeV.js";import"./Switch-CFY1pNDR.js";import"./CompositeRoot-iLqwmgoG.js";import"./TimePicker-BInPq0Xw.js";import"./CollapsiblePanel-iZ3dIyoM.js";import"./error-B4GY5Ke1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DU1BWRzI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
