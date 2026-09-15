import{j as t,g as n}from"./iframe-BqmsmROC.js";import{A as r}from"./action-form-DO_hhVqJ.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-8ctGfF9y.js";import"./debounce-DL2qpSTk.js";import"./useOsdkClient-D-sadKnS.js";import"./index-DE_4plrx.js";import"./Input-C3AYJYVI.js";import"./useBaseUiId-C8C4OFgB.js";import"./useControlled-DXWlWATE.js";import"./index-DFyqPKTO.js";import"./index-CWE85mCR.js";import"./PopoverPopup-k-Hpnjxy.js";import"./InternalBackdrop-Cy1aLXhF.js";import"./composite-CiV_UR9j.js";import"./index-Bey-y-w6.js";import"./getDisabledMountTransitionStyles-yrOwfUkE.js";import"./ToolbarRootContext--CuPwDjZ.js";import"./tick-BOnCrQFY.js";import"./svgIconContainer-DwHFgry-.js";import"./small-cross-Bk6bCekb.js";import"./search-BBGycv-1.js";import"./cross-DfmyAU8B.js";import"./useValueChanged-BkcQ3FBO.js";import"./getPseudoElementBounds-CbKhuRFY.js";import"./CompositeItem-C1DMYRuJ.js";import"./makeExternalStore-jkqHHCtl.js";import"./BaseForm-REnW44LA.js";import"./ActionButton-Lq8BIY2Z.js";import"./Button-zbZf0J9i.js";import"./SkeletonBar-CniGFXhP.js";import"./Tooltip-DHQwjn4a.js";import"./info-sign-BPnpzbsh.js";import"./chevron-up-CNRhOTMZ.js";import"./chevron-down-s5zpD1xF.js";import"./useEventCallback-fsvAZTzq.js";import"./iconLoader-cyv-EvG1.js";import"./CompositeRoot-B1QanstE.js";import"./Switch-wSAOHyj_.js";import"./TimePicker-D2gL_yMD.js";import"./CollapsiblePanel-VNdFnwVY.js";import"./error-DKXNqTp4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DVk1cW14.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
