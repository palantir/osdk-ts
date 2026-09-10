import{j as t,g as n}from"./iframe-BRGzDqju.js";import{A as r}from"./action-form-DeJojGFY.js";import"./preload-helper-5JQdMdM9.js";import"./DropdownField-YHeguodW.js";import"./debounce-BY0A57Za.js";import"./useOsdkClient-BD_HHGJ7.js";import"./index-En-TUnJd.js";import"./Input-DmzPzGey.js";import"./useBaseUiId-B3wooVnn.js";import"./useControlled-DJDqOS1V.js";import"./index-DPkAIY9Y.js";import"./index-Bad5TxyQ.js";import"./PopoverPopup-BjDJmrK2.js";import"./InternalBackdrop-DyMqQPSD.js";import"./composite-C-AGstI3.js";import"./index-CuXQ76Km.js";import"./getDisabledMountTransitionStyles-CIJBF-gX.js";import"./ToolbarRootContext-67BQ7bpF.js";import"./tick-B0-Xl9HF.js";import"./svgIconContainer-BQAEO-7W.js";import"./small-cross-B83ohrdP.js";import"./search-asFq5N8L.js";import"./cross-CQP7lInb.js";import"./useValueChanged-BU1nXjKr.js";import"./getPseudoElementBounds-Da6NSz-p.js";import"./CompositeItem-q2WRXYZP.js";import"./makeExternalStore-B-5KvZfn.js";import"./BaseForm-Ck-zUNVN.js";import"./ActionButton-dpWisjKE.js";import"./Button-0cGInffD.js";import"./SkeletonBar-DLjlHbja.js";import"./Tooltip-BinZmbGp.js";import"./info-sign-BfQkY_mx.js";import"./chevron-up-DRyL9cLD.js";import"./chevron-down-CLb4G2AF.js";import"./useEventCallback-C_Z8usTd.js";import"./iconLoader-CyakSNaQ.js";import"./CompositeRoot-C6sEfeh1.js";import"./Switch-_3bbdgPb.js";import"./TimePicker-BsfCz1mI.js";import"./CollapsiblePanel-BSyt4v6y.js";import"./error-CoQddkwW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DO5dBBXm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
