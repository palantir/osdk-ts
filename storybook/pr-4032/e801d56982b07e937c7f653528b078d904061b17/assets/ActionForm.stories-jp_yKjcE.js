import{j as t,g as n}from"./iframe-2Mr1t1V8.js";import{A as r}from"./action-form-B-xxo_MZ.js";import"./preload-helper-C_t9encF.js";import"./DropdownField-BgK_Iadc.js";import"./debounce-Bx6R5QNY.js";import"./useOsdkClient-C22dfEiD.js";import"./index-4lXnLG4B.js";import"./Input-BAjujx0C.js";import"./useBaseUiId-k8zppgsU.js";import"./useControlled-BcBqikwr.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./PopoverPopup-CBvVWdt_.js";import"./InternalBackdrop-qRL7WfZ9.js";import"./composite-DgP8pe-I.js";import"./index-BLky91mi.js";import"./getDisabledMountTransitionStyles-QB61HrKH.js";import"./ToolbarRootContext-BbL0J01R.js";import"./tick-raGklPjk.js";import"./svgIconContainer-tMp-Mvzu.js";import"./small-cross-KP2o4lIf.js";import"./search-ysbzXeyh.js";import"./cross-BRuFKM6t.js";import"./useValueChanged-DDLB8duD.js";import"./getPseudoElementBounds-DgqbZcO_.js";import"./CompositeItem-C0DzT1s7.js";import"./makeExternalStore-B8Qdlr-8.js";import"./BaseForm-CPIBDgpB.js";import"./ActionButton-C7GEwUg1.js";import"./Button-C2c9HqHX.js";import"./SkeletonBar-BChVdeQ9.js";import"./Tooltip-DliQMsoz.js";import"./info-sign-Clh2XQdO.js";import"./chevron-up-BOsS9HEx.js";import"./chevron-down-DjlK2aIq.js";import"./useEventCallback-CP27jd0B.js";import"./iconLoader-Df8DPExo.js";import"./CompositeRoot-SxKHBNrD.js";import"./Switch-BRJLBwwX.js";import"./TimePicker-Ds6MtWAk.js";import"./CollapsiblePanel-B4xPmd-G.js";import"./error-ppckuRwj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-IIt9i7U1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
