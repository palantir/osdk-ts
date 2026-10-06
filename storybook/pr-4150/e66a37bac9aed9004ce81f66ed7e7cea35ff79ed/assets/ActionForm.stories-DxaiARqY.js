import{j as t,g as n}from"./iframe-BZeHWWBM.js";import{A as r}from"./action-form-CTX5z51c.js";import"./preload-helper-BMO_GDYl.js";import"./DropdownField-D8jUrmhI.js";import"./debounce-cOw_HdqP.js";import"./useOsdkClient-GuN9YFRq.js";import"./index-BghiDG-K.js";import"./Input-d8OQBydu.js";import"./useBaseUiId-DiD1p4wn.js";import"./useControlled-BuZ3yaTV.js";import"./index-ssl2u5fL.js";import"./index-Demepb3A.js";import"./PopoverPopup-DUzxW_R3.js";import"./InternalBackdrop-7kOTzaTU.js";import"./composite-BY8Pgpco.js";import"./index-CDPIdeSA.js";import"./getDisabledMountTransitionStyles-CzV6u0eN.js";import"./ToolbarRootContext-Uoj_ihh4.js";import"./tick-DpfMUnCE.js";import"./svgIconContainer-P70a1ca6.js";import"./small-cross-dSt8HMXx.js";import"./search-MR2i21ku.js";import"./cross-DAs0FyHT.js";import"./useValueChanged-DSSRu0uz.js";import"./getPseudoElementBounds-BoNdsgY-.js";import"./CompositeItem-DFk3jTw_.js";import"./makeExternalStore-COW8GNP_.js";import"./BaseForm-DivZBGzw.js";import"./ActionButton-D2_3iW1e.js";import"./Button-SYhaaomn.js";import"./SkeletonBar-O3cIgH1_.js";import"./Tooltip-gQ7xzq_d.js";import"./info-sign-WJ0TzHqf.js";import"./chevron-up-Dw1HlDJ8.js";import"./chevron-down-C-j3k1fh.js";import"./useEventCallback-CaF-XjRW.js";import"./iconLoader-DJGe4BEg.js";import"./Switch-BQZQyCn4.js";import"./CompositeRoot-oRfK9LBg.js";import"./TimePicker-CrVGVw63.js";import"./CollapsiblePanel-CXOTz_Ao.js";import"./error-Bpqu1oQt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BwLrqkyr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
