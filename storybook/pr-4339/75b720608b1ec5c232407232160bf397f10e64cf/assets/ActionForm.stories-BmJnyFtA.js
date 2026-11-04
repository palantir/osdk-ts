import{j as t,g as n}from"./iframe-DMbRIuDb.js";import{A as r}from"./action-form-DqLS6KZ6.js";import"./preload-helper-sYBSF0kM.js";import"./DropdownField-Dmp4Hyee.js";import"./debounce-IZu9ANTR.js";import"./useOsdkClient-CfV6cdO_.js";import"./index-Bu-1yS3f.js";import"./Input-D-dAAgmX.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./useControlled-CIwMJypC.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./PopoverPopup-LtTxVH8V.js";import"./InternalBackdrop-D0_D0B89.js";import"./composite-BbcTHbJw.js";import"./index-Bw2xP442.js";import"./getDisabledMountTransitionStyles-XoIoWCwu.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./tick-D2Wm6MFc.js";import"./svgIconContainer-DRmK9U-I.js";import"./small-cross-Bl_8sGCy.js";import"./search-0CHVsg6w.js";import"./cross-D-Gd3Z1L.js";import"./useValueChanged-6Z_1Wu5g.js";import"./getPseudoElementBounds-DP-4v2Ps.js";import"./CompositeItem-C_Zv4JbC.js";import"./makeExternalStore-H1BAkO0H.js";import"./BaseForm-DLmhbhb6.js";import"./ActionButton-BuZQ80QL.js";import"./Button-CD6kVtUc.js";import"./SkeletonBar-CSxcwHsY.js";import"./Tooltip-BwMVZzeJ.js";import"./info-sign-C0ZXs48I.js";import"./chevron-up-CQkTRFRH.js";import"./chevron-down-_C5sbwkb.js";import"./useEventCallback-B5DihS4I.js";import"./iconLoader-D0uNxCp5.js";import"./Switch-CCqc_CrY.js";import"./CompositeRoot-BQgljQc-.js";import"./TimePicker-DiHBSk52.js";import"./CollapsiblePanel-BRC6_1mg.js";import"./error-D_c53g1g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CiT1Znwa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
