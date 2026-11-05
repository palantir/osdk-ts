import{j as t,g as n}from"./iframe-s6qt4jCK.js";import{A as r}from"./action-form-BqgfAKcq.js";import"./preload-helper-9jiBPXEl.js";import"./DropdownField-COSvrKxl.js";import"./debounce-DH380oHP.js";import"./useOsdkClient-DGoGfdz1.js";import"./index-D6YAKeyS.js";import"./Input-DP0PAzjj.js";import"./useBaseUiId-BIc0eo6T.js";import"./useControlled-CTyuJ7Af.js";import"./index-DVF-9r8u.js";import"./index-BcLYVVr4.js";import"./isObject-CZ9Ec7qs.js";import"./InternalBackdrop-BYGdIn__.js";import"./composite-CPpi_uAC.js";import"./index-CQTw8n2D.js";import"./getDisabledMountTransitionStyles-Chz3YyJw.js";import"./ToolbarRootContext-nYUUEgez.js";import"./tick-YVdkfck4.js";import"./svgIconContainer-D4Tr3eBw.js";import"./small-cross-D0AIe3u5.js";import"./search-CwDPAivc.js";import"./cross-z12JNlD1.js";import"./useValueChanged-BZVZmlsN.js";import"./getPseudoElementBounds-DXe2aI7J.js";import"./CompositeItem-cbLDCwSH.js";import"./makeExternalStore-CRyGpLoG.js";import"./BaseForm-DzthoAei.js";import"./ActionButton-CjYFa-2U.js";import"./Button-Kk03FIZS.js";import"./SkeletonBar-D69vB7ej.js";import"./Tooltip-DjYQyP_H.js";import"./info-sign-B84lvTVy.js";import"./chevron-up-X0Zf8nEp.js";import"./chevron-down-nr5MnKpi.js";import"./useEventCallback-DNF3ylqB.js";import"./iconLoader-veh3LMUb.js";import"./Switch-2AIUiX73.js";import"./CompositeRoot-C2ct-Wg8.js";import"./TimePicker-COk5n4qt.js";import"./CollapsiblePanel-Du2JeiGm.js";import"./error-DrFA3py_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2Hl675L.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
