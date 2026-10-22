import{j as t,g as n}from"./iframe-DmoMQzpD.js";import{A as r}from"./action-form-BiIC48Ob.js";import"./preload-helper-0xn3Nkw5.js";import"./DropdownField-Cz44kW52.js";import"./debounce-CM9X_VMN.js";import"./useOsdkClient-ZQ1sGaOD.js";import"./index-DPXokUby.js";import"./Input-CN7AavNu.js";import"./useBaseUiId-BxnyJA2P.js";import"./useControlled-C5PyKbe1.js";import"./index-DUz5HI9G.js";import"./index-BXiJ_67x.js";import"./PopoverPopup-7uRjXaTb.js";import"./InternalBackdrop-BsBLBzYe.js";import"./composite-RG7e36sI.js";import"./index-DmGCqnm3.js";import"./getDisabledMountTransitionStyles-CJwnQjun.js";import"./ToolbarRootContext-DyHioDsT.js";import"./tick-B2FvzgWn.js";import"./svgIconContainer-C0jxJ_1G.js";import"./small-cross-B5QHLenC.js";import"./search-g9MHYdyd.js";import"./cross-C9RHIJgp.js";import"./useValueChanged-BZ44jBcl.js";import"./getPseudoElementBounds-CFDjab3s.js";import"./CompositeItem-Drfjdgjy.js";import"./makeExternalStore-nzxHrE9v.js";import"./BaseForm-BfmcSlTY.js";import"./ActionButton-aUTPXbO1.js";import"./Button-DawQ6LNI.js";import"./SkeletonBar-BhdoBlry.js";import"./Tooltip-CjVXqByo.js";import"./info-sign-Lcz3LIAZ.js";import"./chevron-up-sdGwtyT8.js";import"./chevron-down-vzowt2v5.js";import"./useEventCallback-FACcLVn-.js";import"./iconLoader-DfTbjrB-.js";import"./Switch-C-Msz1l5.js";import"./CompositeRoot-Cs2hBylI.js";import"./TimePicker-CfIlBuRx.js";import"./CollapsiblePanel-C280Av3f.js";import"./error-CSsiItLy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGBLah1x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
