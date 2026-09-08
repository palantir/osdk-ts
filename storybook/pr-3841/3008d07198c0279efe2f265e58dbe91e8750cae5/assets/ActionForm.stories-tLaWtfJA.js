import{j as t,g as n}from"./iframe-D-uQiAEU.js";import{A as r}from"./action-form-CNitlSGD.js";import"./preload-helper-p4UgLAci.js";import"./DropdownField-CAzO2VqE.js";import"./debounce-CRIH8IRe.js";import"./useOsdkClient-B1rGRzo8.js";import"./index-BAcJFtsj.js";import"./Input-DgsAa7tc.js";import"./useBaseUiId-ChN6vCz4.js";import"./useControlled-CCwQc26W.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./PopoverPopup-oWHkAC_s.js";import"./InternalBackdrop-DOf7Wbxd.js";import"./composite-DTJJNp0D.js";import"./index-DGCwle_4.js";import"./getDisabledMountTransitionStyles-BWrmK3Yb.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./tick-BL7yIHsf.js";import"./svgIconContainer-BwquE4X7.js";import"./small-cross-BVZp2NPW.js";import"./search-C_-XZuxq.js";import"./cross-Cxa7qZ4s.js";import"./useValueChanged-B5Exoyob.js";import"./getPseudoElementBounds-CEbtWgTD.js";import"./CompositeItem-gF6WPsof.js";import"./makeExternalStore-BRy1NQ_S.js";import"./BaseForm-BZvtmgTh.js";import"./ActionButton-CSIdFpLA.js";import"./Button-DI6776iG.js";import"./SkeletonBar-fhPn3StW.js";import"./Tooltip-DKGKb6ew.js";import"./info-sign-JzqlIu-7.js";import"./chevron-up-CHHQGUfp.js";import"./chevron-down-BwXU5HA0.js";import"./useEventCallback-Dl207dUq.js";import"./iconLoader-CT51b7ZA.js";import"./CompositeRoot-B5ftoauG.js";import"./Switch-CmffjyTK.js";import"./TimePicker-0ieo-ekN.js";import"./CollapsiblePanel-BRn0DhId.js";import"./error-CnFMhHrw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DnhB_JkA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
