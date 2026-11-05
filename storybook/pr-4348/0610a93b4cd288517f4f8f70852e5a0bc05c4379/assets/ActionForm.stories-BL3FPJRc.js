import{j as t,g as n}from"./iframe-x4Y4VSHV.js";import{A as r}from"./action-form-D-QDY5SL.js";import"./preload-helper-wFwf1Z_7.js";import"./DropdownField-2L4uAddC.js";import"./debounce-FKkJspwT.js";import"./useOsdkClient-Bh27IzO_.js";import"./index-BTkF7OpO.js";import"./Input-RqZQ3gi6.js";import"./useBaseUiId-O7ZsVKwo.js";import"./useControlled-B1vBMtLm.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./PopoverPopup-CMpyIGzp.js";import"./InternalBackdrop-Bv0h497n.js";import"./composite-HDXk98Mo.js";import"./index-CfRBgTVy.js";import"./getDisabledMountTransitionStyles-cT_E1wd_.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./tick-DJgmKu8k.js";import"./svgIconContainer-BRq3fj7v.js";import"./small-cross-B7mLfu2a.js";import"./search-t_lGFyp_.js";import"./cross-34rpmbRR.js";import"./useValueChanged-B_Sqxe_h.js";import"./getPseudoElementBounds-DrAxvQVr.js";import"./CompositeItem-gQ_2jip-.js";import"./makeExternalStore-CRHmXcik.js";import"./BaseForm-DKUcGNbS.js";import"./ActionButton-Bufn2px0.js";import"./Button-D6WWCBJV.js";import"./SkeletonBar-IY8wlZ6P.js";import"./Tooltip-CIUrl65j.js";import"./info-sign-BLBL3KN8.js";import"./chevron-up-GROq8lE_.js";import"./chevron-down-DIIH-694.js";import"./useEventCallback-SHHnyPaE.js";import"./iconLoader-B2RIl7Lf.js";import"./Switch-kKGgbaNx.js";import"./CompositeRoot-DiSTgR-J.js";import"./TimePicker-CAIqzybg.js";import"./CollapsiblePanel-Dlts5kAq.js";import"./error-1h6EWorL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LnVAi8HB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
