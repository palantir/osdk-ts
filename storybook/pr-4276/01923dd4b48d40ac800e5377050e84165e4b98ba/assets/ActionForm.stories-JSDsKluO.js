import{j as t,g as n}from"./iframe-CvtnXpWI.js";import{A as r}from"./action-form-YcpkU-ES.js";import"./preload-helper-CRqjKMTV.js";import"./DropdownField-BsbKwjfj.js";import"./debounce-BFHp0zYR.js";import"./useOsdkClient-DVkylxA-.js";import"./index-jeLRGmVS.js";import"./Input-zhgReKbn.js";import"./useBaseUiId-Dw1uN2EV.js";import"./useControlled-D1NesXJk.js";import"./index-BtiKNh2b.js";import"./index-D-06_23q.js";import"./isObject-CrBKpQd0.js";import"./InternalBackdrop-BoC-Z1Bo.js";import"./composite-E-ohJHTb.js";import"./index-CqGesz-z.js";import"./getDisabledMountTransitionStyles-6caJPnGT.js";import"./ToolbarRootContext-ChZi5vEo.js";import"./tick-B7O-16gu.js";import"./svgIconContainer-C107_u4J.js";import"./small-cross-Db9ebHG-.js";import"./search-BIqi2et5.js";import"./cross-CaW9jTLZ.js";import"./useValueChanged-CoEu5z_v.js";import"./getPseudoElementBounds-Cv8mXtVl.js";import"./CompositeItem-C6nFI7h_.js";import"./makeExternalStore-DHDRqvun.js";import"./BaseForm-CstG19hw.js";import"./ActionButton-CafTjkNJ.js";import"./Button-UnInDvPq.js";import"./SkeletonBar-BFsAtTQ9.js";import"./Tooltip-BazKam0z.js";import"./info-sign-BQyeMs73.js";import"./chevron-up-C7G3TpCS.js";import"./chevron-down-C3-hEeSa.js";import"./useEventCallback-CTWgCbj5.js";import"./iconLoader-Bliks84o.js";import"./Switch-DRTLdJYI.js";import"./CompositeRoot-D2A6dkaJ.js";import"./TimePicker-DYMgpXnx.js";import"./CollapsiblePanel-DbP5aWCf.js";import"./error-BIezve7k.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRjxXxf-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
