import{j as t,g as n}from"./iframe-CzN2QreI.js";import{A as r}from"./action-form-DSK9K6I7.js";import"./preload-helper-BXZu3mB8.js";import"./DropdownField-BHbHoXLN.js";import"./debounce-BSJqKk9p.js";import"./useOsdkClient-5OnXM-6H.js";import"./index-Bj6GQi9V.js";import"./Input-CegjBPQP.js";import"./useBaseUiId-XpXvVpGq.js";import"./useControlled-DC4k4z6-.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./isObject-BPoSeG26.js";import"./InternalBackdrop-t9svslOk.js";import"./composite-CvZGZMr_.js";import"./index-LOsE3mZd.js";import"./getDisabledMountTransitionStyles-qsFKgmF7.js";import"./ToolbarRootContext-CKTJAN59.js";import"./tick-Cvtd471A.js";import"./svgIconContainer-DJR2Y9nG.js";import"./small-cross-BfZaK0QA.js";import"./search-CBwzahSV.js";import"./cross-B7QKnjh-.js";import"./useValueChanged-CvEwy5iK.js";import"./getPseudoElementBounds-BxGUr7sx.js";import"./CompositeItem-C2xi6NQ8.js";import"./makeExternalStore-zsuQEbmY.js";import"./BaseForm-CDU-qSHe.js";import"./ActionButton-DTFbCjfZ.js";import"./Button-CdEdBbWo.js";import"./SkeletonBar-CLEVVnPB.js";import"./Tooltip-BoGe89IF.js";import"./info-sign-Blo8nXbr.js";import"./chevron-up-DQgGPusN.js";import"./chevron-down-CQ9C1iv5.js";import"./useEventCallback-Bm9HIaTl.js";import"./iconLoader-CZsRCzgW.js";import"./Switch-D3tHC1A0.js";import"./CompositeRoot-3N5Pesrn.js";import"./TimePicker-NxixKZzQ.js";import"./CollapsiblePanel-BUy1MqPT.js";import"./error-Ds-mn25o.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-2pGXUPgq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
