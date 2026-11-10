import{j as t,g as n}from"./iframe-B4QLcSZV.js";import{A as r}from"./action-form-fywbPmoL.js";import"./preload-helper-Bo3Ha5vh.js";import"./DropdownField-DIllcogd.js";import"./debounce-B9U4OBQQ.js";import"./useOsdkClient-B-uzLvHR.js";import"./index-CU2p5LDV.js";import"./Input-CSlKlom8.js";import"./useBaseUiId-BSZdLkOo.js";import"./useControlled-BC3YGi64.js";import"./index-B8xzy7Yy.js";import"./index-CX5vZraN.js";import"./isObject-DJnDAPtu.js";import"./InternalBackdrop-uUiSI24W.js";import"./composite-CgB6Of8a.js";import"./index-gAGpFD5r.js";import"./getDisabledMountTransitionStyles-DmmMgL1o.js";import"./ToolbarRootContext-CQfevRIV.js";import"./tick-f-G-5w7P.js";import"./svgIconContainer-Dh-Zaef4.js";import"./small-cross-DCQk5yBJ.js";import"./search-eHSn6FPQ.js";import"./cross-DnvIeiSW.js";import"./useValueChanged-VkzDJT1T.js";import"./getPseudoElementBounds-B-_TxDI7.js";import"./CompositeItem-CpoTinek.js";import"./makeExternalStore-Dm5zWOFv.js";import"./BaseForm-BqxCsfhQ.js";import"./ActionButton-d6fkUWG8.js";import"./Button-Buk5h-ut.js";import"./SkeletonBar-BC4f_AtB.js";import"./Tooltip-yCjMXIIG.js";import"./info-sign-BWaf5kxo.js";import"./chevron-up-NfVrVn1o.js";import"./chevron-down-DwcY0-Tx.js";import"./useEventCallback-DPBUZYhA.js";import"./iconLoader-CTOpEV7D.js";import"./Switch-DJEkNC7v.js";import"./CompositeRoot-Crpmrhtq.js";import"./TimePicker-BndpaY8a.js";import"./CollapsiblePanel-BG51YQ8C.js";import"./error-DsKpT3Ih.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BGZuYz8s.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
