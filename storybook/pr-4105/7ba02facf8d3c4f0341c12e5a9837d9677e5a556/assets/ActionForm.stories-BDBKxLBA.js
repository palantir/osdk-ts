import{j as t,g as n}from"./iframe-zfG254O_.js";import{A as r}from"./action-form-Dd1woLy-.js";import"./preload-helper-BVR1mWVD.js";import"./DropdownField-Bk22B-qN.js";import"./debounce-CDvtvBim.js";import"./useOsdkClient-CX8pU5qt.js";import"./index-Wj2BR0GO.js";import"./Input-DnoFtOsb.js";import"./useBaseUiId-DDNAeb_I.js";import"./useControlled-CYuH3Kw2.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./PopoverPopup-xGPdUl_L.js";import"./InternalBackdrop-CzqyYOYM.js";import"./composite-DJ7hFQoT.js";import"./index-CYmueTj6.js";import"./getDisabledMountTransitionStyles-DQWp1vNz.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./tick-BSe8OeQ4.js";import"./svgIconContainer-QVUVb6tE.js";import"./small-cross-BPAsGbUn.js";import"./search-C1O_20Mr.js";import"./cross-CetEVi0b.js";import"./useValueChanged-CfrpKOZJ.js";import"./getPseudoElementBounds-DaQ8_6-7.js";import"./CompositeItem-7b58zS75.js";import"./makeExternalStore-Br87Teca.js";import"./BaseForm-CoorMVSE.js";import"./ActionButton-C6sVQTm3.js";import"./Button-XkjDQhxK.js";import"./SkeletonBar-CZ4qcvgs.js";import"./Tooltip-1C_rhTkJ.js";import"./info-sign-CirQWaRP.js";import"./chevron-up-BEVl1Rnt.js";import"./chevron-down-omzDCKN7.js";import"./useEventCallback-CBXBr67p.js";import"./iconLoader-BhYg0B_q.js";import"./Switch-qjCQZkw3.js";import"./CompositeRoot-DiLvjzLz.js";import"./TimePicker-C82NiQCR.js";import"./CollapsiblePanel-7gx9FNyA.js";import"./error-CZvS_ur6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BSCahypJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
