import{j as t,g as n}from"./iframe-D555MuJ0.js";import{A as r}from"./action-form-DSKkvc6i.js";import"./preload-helper-DI0YqJp4.js";import"./DropdownField-DRorYhAL.js";import"./debounce-7vABva-v.js";import"./useOsdkClient-BRTJpYwY.js";import"./index-Cg9uHUun.js";import"./Input-CueXhQ4V.js";import"./useBaseUiId-B4R9GsGS.js";import"./useControlled-BXEwoD5-.js";import"./index-CkTsdOkp.js";import"./index-BVyJBQqR.js";import"./PopoverPopup-w0tQerBi.js";import"./InternalBackdrop-D0WzfKwV.js";import"./composite-C3jNveZb.js";import"./index-BOqKZcef.js";import"./getDisabledMountTransitionStyles-NNQg5thc.js";import"./ToolbarRootContext-B_tLpux3.js";import"./tick-Dx26yCkG.js";import"./svgIconContainer-bAOTCoFN.js";import"./small-cross-DYYtvTQk.js";import"./search-B-aW4zGh.js";import"./cross-IYmx4x0m.js";import"./useValueChanged-DoyhwWSp.js";import"./getPseudoElementBounds-DkB34pum.js";import"./CompositeItem-B5t7ZVS0.js";import"./makeExternalStore-BcjkXJ5O.js";import"./BaseForm-BuRvHFit.js";import"./ActionButton-P4ce0KZA.js";import"./Button-B8XR24zN.js";import"./SkeletonBar-CDnvbMD_.js";import"./Tooltip-Bxzu-pAW.js";import"./info-sign-jABWfZMg.js";import"./chevron-up-C2UWqwyM.js";import"./chevron-down-CJd6fkFq.js";import"./useEventCallback-C_68HPnA.js";import"./iconLoader-CF18HBtN.js";import"./Switch-D1IZYIMG.js";import"./CompositeRoot-CACfkODK.js";import"./TimePicker-BO0h3Hcj.js";import"./CollapsiblePanel-DiuaiCTg.js";import"./error-DVePqkqY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bbt3lTlO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
