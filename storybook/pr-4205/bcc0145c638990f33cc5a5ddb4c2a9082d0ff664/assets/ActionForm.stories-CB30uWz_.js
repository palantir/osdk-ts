import{j as t,g as n}from"./iframe-Dmb-mlzV.js";import{A as r}from"./action-form-kvhSZ9z0.js";import"./preload-helper-MIGgaMld.js";import"./DropdownField-DuGjp-tV.js";import"./debounce-DOzDLznc.js";import"./useOsdkClient-DIHMDKUR.js";import"./index-Ds3o4atQ.js";import"./Input-CBzkX4z8.js";import"./useBaseUiId-Bl-3cYCN.js";import"./useControlled-BM7SnBgs.js";import"./index-CP5aixwn.js";import"./index-qj8WLeK2.js";import"./PopoverPopup-CXUJ3lCx.js";import"./InternalBackdrop-Ckq1He5X.js";import"./composite-6EKatbQT.js";import"./index-BSTL75vv.js";import"./getDisabledMountTransitionStyles-CxV8SjgV.js";import"./ToolbarRootContext-pJcR2hxd.js";import"./tick-CFwIKfat.js";import"./svgIconContainer-DAFeyB5Y.js";import"./small-cross-CQzmVcPc.js";import"./search-DMyFpELI.js";import"./cross-_swrXFsE.js";import"./useValueChanged-DaiSG_CT.js";import"./getPseudoElementBounds-ZV-MtXgM.js";import"./CompositeItem-BWXXLF3M.js";import"./makeExternalStore-gkjC6p4e.js";import"./BaseForm-orBjjFRu.js";import"./ActionButton-BcxqHeYY.js";import"./Button-8xVTVGsk.js";import"./SkeletonBar-Cl_UfBJ6.js";import"./Tooltip-DA3P9wam.js";import"./info-sign-Df7Y3Hfj.js";import"./chevron-up-BvfLEj3k.js";import"./chevron-down-BZ7oFKmu.js";import"./useEventCallback-BF2Zplqh.js";import"./iconLoader-CLjObHt1.js";import"./Switch-BoCWaliw.js";import"./CompositeRoot-DjAH1BTs.js";import"./TimePicker-DREVgPcJ.js";import"./CollapsiblePanel-TUHNx-2l.js";import"./error-XRi8aH0l.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CiUTqFkS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
