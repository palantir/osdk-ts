import{j as t,g as n}from"./iframe-gl1D0cYu.js";import{A as r}from"./action-form-DC9TKOhU.js";import"./preload-helper-DqgH6sT8.js";import"./DropdownField-CUCj8DNZ.js";import"./debounce-C5VfxwkA.js";import"./useOsdkClient-BBR-XdUj.js";import"./index-D5PLyZrU.js";import"./Input-DikxtY8U.js";import"./useBaseUiId-DaNXLH9o.js";import"./useControlled-D-vu1Iu-.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./PopoverPopup-OUHi2kGW.js";import"./InternalBackdrop-B2oQrtyL.js";import"./composite-mmowW-5S.js";import"./index-DpfgomRZ.js";import"./getDisabledMountTransitionStyles-CEC9IPnY.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./tick-CMBEryyP.js";import"./svgIconContainer-D2ylg-hx.js";import"./small-cross-BShBRTCB.js";import"./search-DuJOx_mq.js";import"./cross-nvwlJ43b.js";import"./useValueChanged-B5BKkZsH.js";import"./getPseudoElementBounds-1Yev2lnF.js";import"./CompositeItem-hGM9YKcr.js";import"./makeExternalStore-mCeZ-qAv.js";import"./BaseForm-DCYeaJUY.js";import"./ActionButton-CTRf1gwO.js";import"./Button-Dyc2i6Ov.js";import"./SkeletonBar-Djy6KVIi.js";import"./Tooltip-TuG8zUYZ.js";import"./info-sign-C7wVtiR1.js";import"./chevron-up-D5XUevhq.js";import"./chevron-down-B--bqcM3.js";import"./useEventCallback-BMDTzt3U.js";import"./iconLoader-BH1LZYpe.js";import"./Switch-Dg3EKDgr.js";import"./CompositeRoot-Clqxj38a.js";import"./TimePicker-Prag4kk9.js";import"./CollapsiblePanel-BQtLzhJx.js";import"./error-CF31ifZ8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-qXzvdtsT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
