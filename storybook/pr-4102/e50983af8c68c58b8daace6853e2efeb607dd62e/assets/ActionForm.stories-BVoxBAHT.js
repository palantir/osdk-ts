import{j as t,g as n}from"./iframe-CdZ1-8VD.js";import{A as r}from"./action-form-B8XO3NJg.js";import"./preload-helper-BfsuwAVK.js";import"./DropdownField-D6ZvZlxb.js";import"./debounce-mQD2mSjp.js";import"./useOsdkClient-8doQ3A6W.js";import"./index-DyOp5UTf.js";import"./Input-KSBtG81T.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./useControlled-U2uKb9nR.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./PopoverPopup-DXgfGfh3.js";import"./InternalBackdrop-BIdMsz61.js";import"./composite-DXQ2UI8x.js";import"./index-CXL10vF5.js";import"./getDisabledMountTransitionStyles-BI1VlBVA.js";import"./ToolbarRootContext-2AFAS280.js";import"./tick-Ds5_YkYs.js";import"./svgIconContainer-BzSPbIbT.js";import"./small-cross-DR7ny8zU.js";import"./search-BZxjL_1A.js";import"./cross-D0Gcop_x.js";import"./useValueChanged-C1GpysCg.js";import"./getPseudoElementBounds-BdSlNVkb.js";import"./CompositeItem-yiTSbTdQ.js";import"./makeExternalStore-xgvF_Gz5.js";import"./BaseForm-BSOhpwXo.js";import"./ActionButton-Cru8Qy-m.js";import"./Button-Bt5t_54D.js";import"./SkeletonBar-8SPBEh-g.js";import"./Tooltip-DhGkKgsN.js";import"./info-sign-DlV2gxuQ.js";import"./chevron-up-D-YBkt24.js";import"./chevron-down-ElNoZV5X.js";import"./useEventCallback-Cu7C16-m.js";import"./iconLoader-Chtas8rG.js";import"./Switch-CyLWuA7c.js";import"./CompositeRoot-B43KT5d8.js";import"./TimePicker-DlPmRNQv.js";import"./CollapsiblePanel-CFarmLG5.js";import"./error-C5_AkzgF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bjc_co0T.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
