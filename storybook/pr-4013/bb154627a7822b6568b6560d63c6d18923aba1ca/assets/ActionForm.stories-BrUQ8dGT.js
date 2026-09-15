import{j as t,g as n}from"./iframe-DUDgTVFJ.js";import{A as r}from"./action-form-CbEBVDDx.js";import"./preload-helper-BVnI7eCi.js";import"./DropdownField-C0q1F6hz.js";import"./debounce-BtF1TExq.js";import"./useOsdkClient-CjQ9m3w5.js";import"./index-BmzW3lpk.js";import"./Input-BDNTdkOr.js";import"./useBaseUiId-HT4h8TUv.js";import"./useControlled-CmefEzCZ.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./PopoverPopup-DYDRvlYs.js";import"./InternalBackdrop-orJ-1rnF.js";import"./composite-CECNeh7S.js";import"./index-5E34Oclp.js";import"./getDisabledMountTransitionStyles-PDb0y-1q.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./tick-DynTPC9F.js";import"./svgIconContainer-ZlCTpn06.js";import"./small-cross-C1-JOpz-.js";import"./search-Bwn6tzKV.js";import"./cross-BTajFNgg.js";import"./useValueChanged-0LeWa10K.js";import"./getPseudoElementBounds-BcqNmoHZ.js";import"./CompositeItem-DvLeoEHv.js";import"./makeExternalStore-Dj0x5GDa.js";import"./BaseForm-C3ohzRft.js";import"./ActionButton-Cm6sCZem.js";import"./Button-CYnqWeJV.js";import"./SkeletonBar-BmHP5YBu.js";import"./Tooltip-DHx44fzb.js";import"./info-sign-B-MrM2c-.js";import"./chevron-up-BTxKZ4Su.js";import"./chevron-down-uyo8SlXE.js";import"./useEventCallback-RvE4_tE9.js";import"./iconLoader-DflyrRA1.js";import"./CompositeRoot-D4jzBbh6.js";import"./Switch-CZ7INKuo.js";import"./TimePicker-Rvf-R9LY.js";import"./CollapsiblePanel-U3s49rkR.js";import"./error-BKqtxFEE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BxFc9ce-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
