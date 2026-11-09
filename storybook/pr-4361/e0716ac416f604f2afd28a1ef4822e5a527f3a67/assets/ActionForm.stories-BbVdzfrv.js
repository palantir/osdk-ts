import{j as t,g as n}from"./iframe-BUHzazL7.js";import{A as r}from"./action-form-X-beA20S.js";import"./preload-helper-7pS0gMeE.js";import"./DropdownField-D0emNnpT.js";import"./debounce-BJH6rtO8.js";import"./useOsdkClient-Bpfa90-6.js";import"./index-DAbvms11.js";import"./Input-BfjcqwT4.js";import"./useBaseUiId-C-XGHDUu.js";import"./useControlled-Bi-hDwUg.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./isObject-DQHZLkoR.js";import"./InternalBackdrop-DWQUsD_D.js";import"./composite-CJH_Fsm0.js";import"./index-D9_tmeH_.js";import"./getDisabledMountTransitionStyles-Br83RBIR.js";import"./ToolbarRootContext-CSl7A__z.js";import"./tick-Cy-wk92W.js";import"./svgIconContainer-BXxi0rpR.js";import"./small-cross-GD98Wxpt.js";import"./search-DMRlY3rF.js";import"./cross-7sgOHlSE.js";import"./useValueChanged--IkhdHLc.js";import"./getPseudoElementBounds-DXs-chLM.js";import"./CompositeItem-DKAPVnml.js";import"./makeExternalStore-9kWZAU-l.js";import"./BaseForm-DLWUNmeP.js";import"./ActionButton-C74KTwzB.js";import"./Button-DSLJNPkR.js";import"./SkeletonBar-0L9eM8bs.js";import"./Tooltip-Ov0ymwIX.js";import"./info-sign-B3qu-mLm.js";import"./chevron-up-BX1AyASN.js";import"./chevron-down-B-LRa2LO.js";import"./useEventCallback-DJI-8f_A.js";import"./iconLoader-C9ZVz9vQ.js";import"./Switch-7PL93Z-x.js";import"./CompositeRoot-D6qmuIsD.js";import"./TimePicker-CzvAPee5.js";import"./CollapsiblePanel-BSe5eWOg.js";import"./error-yaL4IHLV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BXf-ymjN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
