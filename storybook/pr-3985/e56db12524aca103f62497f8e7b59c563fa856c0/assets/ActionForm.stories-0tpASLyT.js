import{j as t,g as n}from"./iframe-kpUBKcBo.js";import{A as r}from"./action-form-B7Kdi3Wo.js";import"./preload-helper-CEFfxAxV.js";import"./DropdownField-BrydZO3u.js";import"./debounce-ClFDaysW.js";import"./useOsdkClient-BcqrqAzc.js";import"./index-CzIfSD2x.js";import"./Input-xZVHbMZj.js";import"./useBaseUiId-eq47N9Yh.js";import"./useControlled-C4e8W1YD.js";import"./index-Cg38QLat.js";import"./index-nssiJGD2.js";import"./PopoverPopup-D3WckLAC.js";import"./InternalBackdrop-DVlojBH2.js";import"./composite-DqwQEgXz.js";import"./index-6t1ngEdK.js";import"./getDisabledMountTransitionStyles-_MqiT5fI.js";import"./ToolbarRootContext-CcFhYs5t.js";import"./tick-BmvMnIBg.js";import"./svgIconContainer-D1XUyLZc.js";import"./small-cross-CiRkoian.js";import"./search-D4qHiAMZ.js";import"./cross-CsmLqXcs.js";import"./useValueChanged-DJoTowgi.js";import"./getPseudoElementBounds-DZf2g3Nn.js";import"./CompositeItem-ChylY6HS.js";import"./makeExternalStore-DQTLFAQr.js";import"./BaseForm-BLD9_b1i.js";import"./ActionButton-Ro556bBe.js";import"./Button-IGB5Y7yU.js";import"./SkeletonBar-DS70zOH6.js";import"./Tooltip-uU_kBQ9q.js";import"./info-sign-CiQc7E-z.js";import"./chevron-up-B0nfTL52.js";import"./chevron-down-CeKigphE.js";import"./useEventCallback-BdQ28hwQ.js";import"./iconLoader-DhL-CW9T.js";import"./CompositeRoot-sFbKk6XD.js";import"./Switch-2fa833Qo.js";import"./TimePicker-CDe-hObx.js";import"./CollapsiblePanel-BOpgrZXx.js";import"./error-DS4cKU2L.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DpMhi7xT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
