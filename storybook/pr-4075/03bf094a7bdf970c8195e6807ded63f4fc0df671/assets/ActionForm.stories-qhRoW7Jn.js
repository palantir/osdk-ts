import{j as t,g as n}from"./iframe-DkDai4TH.js";import{A as r}from"./action-form-RMKuZHoH.js";import"./preload-helper-JjUJzXXj.js";import"./DropdownField-tN5gNLvn.js";import"./debounce-q25jq-DY.js";import"./useOsdkClient-CDwu3CFW.js";import"./index-DY9rgq0e.js";import"./Input-Gi5Qq_w9.js";import"./useBaseUiId-BSkkBPAh.js";import"./useControlled-IY8Qa8dX.js";import"./index-BmkcSWO6.js";import"./index-Lc08usjZ.js";import"./PopoverPopup-D8lgugCY.js";import"./InternalBackdrop-BgXmZwAB.js";import"./composite-CiXUPQeJ.js";import"./index-BwIhbgz8.js";import"./getDisabledMountTransitionStyles-BtJBdJGG.js";import"./ToolbarRootContext-BkXkRhp8.js";import"./tick-BTFlyx2h.js";import"./svgIconContainer-Cn4a8-GP.js";import"./small-cross-DufbcP5m.js";import"./search-BHsfUlEN.js";import"./cross-CAMMsTtN.js";import"./useValueChanged-BTwI4cyE.js";import"./getPseudoElementBounds-C0JH-KZ8.js";import"./CompositeItem-CMeIJ5rV.js";import"./makeExternalStore-DYuRaPVt.js";import"./BaseForm-D2SDeHbX.js";import"./ActionButton-BfkacCWq.js";import"./Button-DKQFkDWL.js";import"./SkeletonBar-d-dHv_j1.js";import"./Tooltip-n8ZLzRPP.js";import"./info-sign-DxIJlYqF.js";import"./chevron-up-DVfjEu6P.js";import"./chevron-down-Do0LaDJ6.js";import"./useEventCallback-BdoVLZK3.js";import"./iconLoader-BfUjCESH.js";import"./Switch-BOsmZDT9.js";import"./CompositeRoot-6GXCG1ZY.js";import"./TimePicker-h3-bbBLb.js";import"./CollapsiblePanel-EPxbZj4y.js";import"./error-CLEog6-B.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNRukvHq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
