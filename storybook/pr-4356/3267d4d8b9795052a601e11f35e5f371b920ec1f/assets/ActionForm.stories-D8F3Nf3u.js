import{j as t,g as n}from"./iframe-DlzpeYey.js";import{A as r}from"./action-form-BWc7JLFH.js";import"./preload-helper-D49cnuzB.js";import"./DropdownField-Bg0Jakwy.js";import"./debounce-DsTd2nve.js";import"./useOsdkClient-B09kdwnn.js";import"./index-CLOJWpvR.js";import"./Input-BI9FrHdv.js";import"./useBaseUiId-0fwu-5sC.js";import"./useControlled-fZuEx10T.js";import"./index-Dp-4F4Kh.js";import"./index-B42S07sI.js";import"./PopoverPopup-B006mch8.js";import"./InternalBackdrop-BdCqNoVQ.js";import"./composite-CPVo-XsX.js";import"./index-D3s6HNJ8.js";import"./getDisabledMountTransitionStyles-BEQmNbl0.js";import"./ToolbarRootContext-DdMsogNF.js";import"./tick-DFD3L9EA.js";import"./svgIconContainer-s_VNNREI.js";import"./small-cross-BcmD9yuk.js";import"./search-DvttvRVv.js";import"./cross-C9f-NEvt.js";import"./useValueChanged-CQX5dJbx.js";import"./getPseudoElementBounds-CXg8W_NX.js";import"./CompositeItem-B1K0j6t8.js";import"./makeExternalStore-BPbjLuQ9.js";import"./BaseForm-DojoSex0.js";import"./ActionButton-BiduotiH.js";import"./Button-D-qtDRYT.js";import"./SkeletonBar-D3xHVWjV.js";import"./Tooltip-BkSwqWQp.js";import"./info-sign-Da0QDhPZ.js";import"./chevron-up-DrfB9smu.js";import"./chevron-down-wlUp9z9T.js";import"./useEventCallback-CaMWJsnE.js";import"./iconLoader-CWCDCMZQ.js";import"./Switch-CEbX4JLI.js";import"./CompositeRoot-D2Db5Di6.js";import"./TimePicker-C-CKOWgg.js";import"./CollapsiblePanel-C1C1qN6R.js";import"./error-DWCk07vu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bqhu_QPV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
