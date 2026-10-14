import{j as t,g as n}from"./iframe-DxocSyIf.js";import{A as r}from"./action-form-CZAri8FA.js";import"./preload-helper-D56zqST7.js";import"./DropdownField-Db8DvsDi.js";import"./debounce-CCWQ0KNo.js";import"./useOsdkClient-BXG88ARm.js";import"./index-DfYEtxmC.js";import"./Input-Bw3XbqGk.js";import"./useBaseUiId--lgIG0_P.js";import"./useControlled-BTWGqHDE.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./PopoverPopup-YsdX51sf.js";import"./InternalBackdrop-Cut_mBk7.js";import"./composite-Cghpi3uk.js";import"./index-BEy5XIjA.js";import"./getDisabledMountTransitionStyles-RTvY0Tj_.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./tick-CWU5bp-x.js";import"./svgIconContainer-Bj1sIzvv.js";import"./small-cross-hL-3WDGp.js";import"./search-CQuVvSo7.js";import"./cross-CVx988bJ.js";import"./useValueChanged-g_jUR8Y4.js";import"./getPseudoElementBounds-DVmQFPdP.js";import"./CompositeItem-idLXSPQh.js";import"./makeExternalStore-C5-_T4ZS.js";import"./BaseForm-DsdOTsYp.js";import"./ActionButton-CpdJTM7K.js";import"./Button-wSc2Yx62.js";import"./SkeletonBar-BaBNWfHB.js";import"./Tooltip-CAu8kBHh.js";import"./info-sign-C85cUt4O.js";import"./chevron-up-BSkLi7Xh.js";import"./chevron-down-myOLqEz6.js";import"./useEventCallback-DXHICVTo.js";import"./iconLoader-R1hzrmZA.js";import"./Switch-BkImImZB.js";import"./CompositeRoot-Bh71PsqW.js";import"./TimePicker-CmpbaCLf.js";import"./CollapsiblePanel-Cy7Zihw3.js";import"./error-CCnxuUsF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CH0zpjho.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
