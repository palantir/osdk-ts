import{j as t,g as n}from"./iframe-DdFNuve9.js";import{A as r}from"./action-form-lQWOd2h7.js";import"./preload-helper-BF0zHEQ9.js";import"./DropdownField-CAgPW_N_.js";import"./debounce-D6YkW0bB.js";import"./useOsdkClient-DWubOs8f.js";import"./index-COFBYoj0.js";import"./Input-CnU8KDdl.js";import"./useBaseUiId-DrBZRYC3.js";import"./useControlled-S1lUya7y.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./PopoverPopup-DSz7COAo.js";import"./InternalBackdrop-B8Hewn_Z.js";import"./composite-C6KVf4LM.js";import"./index-D1P0vuc0.js";import"./getDisabledMountTransitionStyles-B_So2Fld.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./tick-DllXzrp2.js";import"./svgIconContainer-BqEjzz1q.js";import"./small-cross-CdiQ7hdd.js";import"./search-CL3Pgcnj.js";import"./cross-B7UPksVb.js";import"./useValueChanged-CEIVp2aj.js";import"./getPseudoElementBounds-DJL0g8Q1.js";import"./CompositeItem-D3i9R6e9.js";import"./makeExternalStore-C_cS4qu3.js";import"./BaseForm-DJ48t84F.js";import"./ActionButton-BvxY4KIJ.js";import"./Button-iraM8Bjb.js";import"./SkeletonBar-jb0OzX38.js";import"./Tooltip-DS6i2lfZ.js";import"./info-sign-BGDWhtee.js";import"./chevron-up-Cv6kqjc1.js";import"./chevron-down-BQgLyWBH.js";import"./useEventCallback-DY4RU0bI.js";import"./iconLoader-W-Oi7eTF.js";import"./Switch-7O-6bb-d.js";import"./CompositeRoot-2utz8fnL.js";import"./TimePicker-r83BJKHB.js";import"./CollapsiblePanel-CjIgVUOq.js";import"./error-BFEjzhDR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBiHNDc8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
