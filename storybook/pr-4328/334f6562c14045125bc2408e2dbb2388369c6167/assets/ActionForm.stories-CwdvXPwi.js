import{j as t,g as n}from"./iframe-DxLxeeBD.js";import{A as r}from"./action-form-B9_Ztpvw.js";import"./preload-helper-B7NNhvj1.js";import"./DropdownField-D7QCNisd.js";import"./debounce-DCzHGjeF.js";import"./useOsdkClient-85GRc1g4.js";import"./index-DSM2Nmta.js";import"./Input-CFINwHSJ.js";import"./useBaseUiId-BEhgV5tS.js";import"./useControlled-DAtmThLw.js";import"./index-CKLl7OmG.js";import"./index-CwXC3XWN.js";import"./isObject-C1XnUciK.js";import"./InternalBackdrop-BCmz-HrC.js";import"./composite-D1h37npl.js";import"./index-DrEQLJsr.js";import"./getDisabledMountTransitionStyles-D_N2rHM3.js";import"./ToolbarRootContext-D7eywLcy.js";import"./tick-DWAS6W14.js";import"./svgIconContainer-B6Cb5ptS.js";import"./small-cross-CSyQLWSj.js";import"./search-BuJ4cv5l.js";import"./cross-Z_oHrjIu.js";import"./useValueChanged-O7ZxSsjb.js";import"./getPseudoElementBounds-CE6PXmfu.js";import"./CompositeItem-IyZEpEpW.js";import"./makeExternalStore--BkPrjsd.js";import"./BaseForm-CEF8kNu2.js";import"./ActionButton-RMHpWcLm.js";import"./Button-BOLOFIFE.js";import"./SkeletonBar-D7VTi4iG.js";import"./Tooltip-CIkzHwPr.js";import"./info-sign-vFs1Na8F.js";import"./chevron-up-3YeceyR6.js";import"./chevron-down-DqhD85JK.js";import"./useEventCallback-CpuXukHA.js";import"./iconLoader-BPO53kLK.js";import"./Switch-CwTxSPVe.js";import"./CompositeRoot-jr6_nVtw.js";import"./TimePicker-Cpioo9bn.js";import"./CollapsiblePanel-Cba0R3PM.js";import"./error-B99vb4Y2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJ_tbfj8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
