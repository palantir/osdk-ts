import{j as t,g as n}from"./iframe-BDPC3MGU.js";import{A as r}from"./action-form-Ck7KyMBh.js";import"./preload-helper-DqLc1wpe.js";import"./DropdownField-zGmV-Acf.js";import"./debounce-Dm3_movg.js";import"./useOsdkClient-D8d5JuS7.js";import"./index-wr-Wa-rJ.js";import"./Input-q3l62r8C.js";import"./useBaseUiId-98Vlp7TA.js";import"./useControlled-BH2-CGJ0.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./PopoverPopup-Dx8llI49.js";import"./InternalBackdrop-Cgbf8eQA.js";import"./composite-BmeraXkj.js";import"./index-BRzzcBKu.js";import"./getDisabledMountTransitionStyles-Ca5SDU94.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./tick-Csqr7cIl.js";import"./svgIconContainer-BbA1ZoWr.js";import"./small-cross-Cmb1RV_x.js";import"./search-CHOuY8gu.js";import"./cross-DYURuHsA.js";import"./useValueChanged-CMbbAfeq.js";import"./getPseudoElementBounds-1wBk6-FK.js";import"./CompositeItem-Glk6Ljpg.js";import"./makeExternalStore-zlVMHsWj.js";import"./BaseForm-C2DXfXJ4.js";import"./ActionButton-B2xYsKtl.js";import"./Button-BuWPanNZ.js";import"./SkeletonBar-CsWliIs4.js";import"./Tooltip-B8W6XcXq.js";import"./info-sign-DeKF4T9R.js";import"./chevron-up-BRYc7wLQ.js";import"./chevron-down-B2ocyj_k.js";import"./useEventCallback-ButC9m8B.js";import"./iconLoader-CPyIBgfv.js";import"./Switch-Ct_ctDhq.js";import"./CompositeRoot-CRYYgIff.js";import"./TimePicker-Bg6wMKPe.js";import"./CollapsiblePanel-hce81KCR.js";import"./error-BZbzk8xv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dge8_qYA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
