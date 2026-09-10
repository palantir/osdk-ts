import{j as t,g as n}from"./iframe-B-80Mkm7.js";import{A as r}from"./action-form-CwjmGkk3.js";import"./preload-helper-CqWsSCnZ.js";import"./DropdownField-BkuadXbK.js";import"./debounce-BzHKeVby.js";import"./useOsdkClient-CqkTlt94.js";import"./index-AUifcsh0.js";import"./Input-DSreAQ9Z.js";import"./useBaseUiId-7EkOsbTl.js";import"./useControlled-BL4sDI8Q.js";import"./index-C1oNvpYj.js";import"./index-CdT_AVM0.js";import"./PopoverPopup-rPbNRW11.js";import"./InternalBackdrop-Df9XtON3.js";import"./composite-BvjfwejW.js";import"./index-C18AT3O2.js";import"./getDisabledMountTransitionStyles-7E1Dxexi.js";import"./ToolbarRootContext-C019PK9Y.js";import"./tick-BEF_RXe7.js";import"./svgIconContainer-CCfq-fpw.js";import"./small-cross-KsVnY-WY.js";import"./search-B3LLLRfT.js";import"./cross-BVjH4vnv.js";import"./useValueChanged-iPInYZDI.js";import"./getPseudoElementBounds-BJiS3phJ.js";import"./CompositeItem-tArM5MUt.js";import"./makeExternalStore-BgRq75tG.js";import"./BaseForm-D1n2WjDr.js";import"./ActionButton-BLc6kuh0.js";import"./Button-BhiWz6E2.js";import"./SkeletonBar-BJMxpIod.js";import"./Tooltip-j-8eocE7.js";import"./info-sign-GS9FqmE7.js";import"./chevron-up-dfyt_-51.js";import"./chevron-down-D6ZF1kx7.js";import"./useEventCallback-xTkopZf4.js";import"./iconLoader-DbCh4EMu.js";import"./CompositeRoot-ect_8gxa.js";import"./Switch-DwS_la6p.js";import"./TimePicker-Cni9zyDJ.js";import"./CollapsiblePanel-JpYsP8Zr.js";import"./error-D-y1nCx5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8oz1zlb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
