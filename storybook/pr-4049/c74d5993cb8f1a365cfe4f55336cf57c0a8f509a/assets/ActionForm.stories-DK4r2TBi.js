import{j as t,g as n}from"./iframe-Dqi9AKQ4.js";import{A as r}from"./action-form-vFwlNGnC.js";import"./preload-helper-Bt4Y1gaG.js";import"./DropdownField-DVa_ve9-.js";import"./debounce-dbUkf27z.js";import"./useOsdkClient-DJCPaoyl.js";import"./index-DUzHQ-g1.js";import"./Input-Bbb9NzYy.js";import"./useBaseUiId-D9DZyJv1.js";import"./useControlled-Bofva4ix.js";import"./index-BTd5eHZp.js";import"./index-B4xagMAY.js";import"./PopoverPopup-BpgdYdCn.js";import"./InternalBackdrop-9H6yZA48.js";import"./composite-BrE87LEg.js";import"./index-jzpzYf-A.js";import"./getDisabledMountTransitionStyles-CMb5T3sE.js";import"./ToolbarRootContext-D53iOUwp.js";import"./tick-C57Pc5oH.js";import"./svgIconContainer-DBFNWjmD.js";import"./small-cross-INTfkl0O.js";import"./search-DGlyxpi9.js";import"./cross-CViy1YB1.js";import"./useValueChanged-Cj0uRmyX.js";import"./getPseudoElementBounds-B6ybVaQm.js";import"./CompositeItem-D9oAX4d7.js";import"./makeExternalStore-Ckysxwb8.js";import"./BaseForm-IvHQovlh.js";import"./ActionButton-BQpCJoEa.js";import"./Button-qQ4ULf31.js";import"./SkeletonBar-BPH_PiMF.js";import"./Tooltip-B6UHjEmR.js";import"./info-sign-Cj5G75v6.js";import"./chevron-up-CXJTRYvq.js";import"./chevron-down-B-x5XAQs.js";import"./useEventCallback-CSNxuTtP.js";import"./iconLoader-QLKF3Sam.js";import"./Switch-XgRfqVmE.js";import"./CompositeRoot-B7naGCOz.js";import"./TimePicker-B7dvnml_.js";import"./CollapsiblePanel-B5Y_UxJj.js";import"./error-Bfb1Ifz6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-BQZlvM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
