import{j as t,g as n}from"./iframe-C-tkmioo.js";import{A as r}from"./action-form-DoPHVOFS.js";import"./preload-helper-DfuNKgCp.js";import"./DropdownField-Cbsq4sP1.js";import"./debounce-CzHRNvfy.js";import"./useOsdkClient-CJta-8BD.js";import"./index-mhh8JEg6.js";import"./Input-DLE-7B-W.js";import"./useBaseUiId-Cm7MFvra.js";import"./useControlled-C9aUqxO7.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./PopoverPopup-Dh8bwyRK.js";import"./InternalBackdrop-D_Y9aPDh.js";import"./composite-C8fhvEre.js";import"./index-B2RSfjfJ.js";import"./getDisabledMountTransitionStyles-BxVfE1UN.js";import"./ToolbarRootContext-BgWudj9O.js";import"./tick-C0oAE1Ij.js";import"./svgIconContainer-CWpp_2jS.js";import"./small-cross-CsUjbm9n.js";import"./search-i-B1QBlz.js";import"./cross-C44ftUHc.js";import"./useValueChanged-o5jZZ60n.js";import"./getPseudoElementBounds-DRiaJ7G-.js";import"./CompositeItem-Byuaai_8.js";import"./makeExternalStore-Bksv4soB.js";import"./BaseForm-DJvgulZq.js";import"./ActionButton-CSf7aDsX.js";import"./Button-CGB2DjlW.js";import"./SkeletonBar-BiIW-GDj.js";import"./Tooltip-B6Q61cjD.js";import"./info-sign-r4UZ_XUA.js";import"./chevron-up-0X7OS9a0.js";import"./chevron-down-CDLMbCJ_.js";import"./useEventCallback-CUGSbf6p.js";import"./iconLoader-B5DXa4o-.js";import"./Switch-CEZ9ttcR.js";import"./CompositeRoot-CG7HGsV7.js";import"./TimePicker-fS3W0WJ0.js";import"./CollapsiblePanel-BS6YIswr.js";import"./error-CXAWYJfd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vqDit70J.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
