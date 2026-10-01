import{j as t,g as n}from"./iframe-BTVQ2MDu.js";import{A as r}from"./action-form-BugaJCNY.js";import"./preload-helper-V8IN1a25.js";import"./DropdownField-DzdFfboE.js";import"./debounce-BaTeW3Mf.js";import"./useOsdkClient-BUwzSBMN.js";import"./index-De5UO2WD.js";import"./Input-BfcaF7JW.js";import"./useBaseUiId-ageCLcwt.js";import"./useControlled-BNBhFfAy.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./PopoverPopup-BDUoftIx.js";import"./InternalBackdrop-BVNbfTuG.js";import"./composite-j0A6Y-jy.js";import"./index-DjK2k_yv.js";import"./getDisabledMountTransitionStyles-CTuqZlD-.js";import"./ToolbarRootContext-BKviL8sB.js";import"./tick-C7MyDvxF.js";import"./svgIconContainer-Z92KrpXF.js";import"./small-cross-B4ROqysh.js";import"./search-DG5bPe3Q.js";import"./cross-CiaqJ3Ct.js";import"./useValueChanged-CdtMTrsN.js";import"./getPseudoElementBounds-CbDHbaqF.js";import"./CompositeItem-BYdhC28O.js";import"./makeExternalStore-CteyryqD.js";import"./BaseForm-Cp-RbvrJ.js";import"./ActionButton-B99TtfNQ.js";import"./Button-Ca-Rehkm.js";import"./SkeletonBar-DArXiFWj.js";import"./Tooltip-SOy8OEMI.js";import"./info-sign-C5ZyqXRl.js";import"./chevron-up-BUeM2TE9.js";import"./chevron-down-B2iYughc.js";import"./useEventCallback-D0vGqTKV.js";import"./iconLoader-DqfY0GAX.js";import"./Switch-DrO_uUJ2.js";import"./CompositeRoot-mRv2Eqz3.js";import"./TimePicker-CFacuYnL.js";import"./CollapsiblePanel-D03MnXQO.js";import"./error-B4_XiTjG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-sKDJTdCS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
