import{j as t,g as n}from"./iframe-Cp1ziXca.js";import{A as r}from"./action-form-C9qlW70B.js";import"./preload-helper-Ca6LY0_H.js";import"./DropdownField-BX9F8fxz.js";import"./debounce-Rxf64P7W.js";import"./useOsdkClient-BehGkUju.js";import"./index-CCsyzFvm.js";import"./Input-BUxEsfiE.js";import"./useBaseUiId-Bt37xHZm.js";import"./useControlled-DfLwj8uM.js";import"./index-DSsYOOxm.js";import"./index-DFQVNtXJ.js";import"./PopoverPopup-CJh3mGTg.js";import"./InternalBackdrop-21zmjWfP.js";import"./composite-B4QegilG.js";import"./index-BCU2lpd0.js";import"./getDisabledMountTransitionStyles-BCOhgOHp.js";import"./ToolbarRootContext-C7YmkdWj.js";import"./tick-3VVcevUT.js";import"./svgIconContainer-DXlIscgi.js";import"./small-cross-DPfWhWYm.js";import"./search-DKOFfaqB.js";import"./cross-ByCUwATg.js";import"./useValueChanged-CImdLC5I.js";import"./getPseudoElementBounds-BiAN2Dz2.js";import"./CompositeItem-B97tQNhx.js";import"./makeExternalStore-UGtoi_Zp.js";import"./BaseForm-BZua4u7Y.js";import"./ActionButton-B-aL526Q.js";import"./Button-B9LauqrE.js";import"./SkeletonBar-CFBwD_lg.js";import"./Tooltip-Dhj5CmPc.js";import"./info-sign-Du_oefn6.js";import"./chevron-up-4-YUVEGg.js";import"./chevron-down-BiBmRA_9.js";import"./useEventCallback-CvDmftxl.js";import"./iconLoader-Dnjfatbl.js";import"./Switch-CHPiKq9A.js";import"./CompositeRoot-Dl9EI4kR.js";import"./TimePicker-Fs9ZF8DB.js";import"./CollapsiblePanel-Bwq_8Vuv.js";import"./error-Cklok7wh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CXAPHKM8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
