import{j as t,g as n}from"./iframe-VFEBMkmT.js";import{A as r}from"./action-form-53Mh47zE.js";import"./preload-helper-07eHVQFi.js";import"./DropdownField-DKVPGok9.js";import"./debounce-DG8oBSlI.js";import"./useOsdkClient-Ei_DMZLP.js";import"./index-BNFDG_ll.js";import"./Input-CRGuLcp8.js";import"./useBaseUiId-vs4tfZGS.js";import"./useControlled-C_z4AA7y.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./PopoverPopup-V-gR9AA8.js";import"./InternalBackdrop-DhQAR8x3.js";import"./composite-DW9K0ypD.js";import"./index-Cd122yTi.js";import"./getDisabledMountTransitionStyles-CABZJUx0.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./tick-DWG5Mpvy.js";import"./svgIconContainer-CrmB8eAh.js";import"./small-cross-CDtSPCYR.js";import"./search-VMyVN87B.js";import"./cross-klKqW7pD.js";import"./useValueChanged-BqBGjayP.js";import"./getPseudoElementBounds-DyGmu2aD.js";import"./CompositeItem-CC1BkCel.js";import"./makeExternalStore-C0Q3dAYA.js";import"./BaseForm-BzTORV1f.js";import"./ActionButton-BWwL0ZTE.js";import"./Button-CSWptMiw.js";import"./SkeletonBar-C37LxB-t.js";import"./Tooltip-CkehKfR2.js";import"./info-sign-CHH1oFo6.js";import"./chevron-up-jxPXNp-0.js";import"./chevron-down-DVKmbjNv.js";import"./useEventCallback-C41z4BOu.js";import"./iconLoader-4HqIh5j-.js";import"./Switch-ARr9OZPo.js";import"./CompositeRoot-O9dh-36j.js";import"./TimePicker-DVinumrp.js";import"./CollapsiblePanel-BIXleHAm.js";import"./error-BAVEcOGP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVlvQats.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
