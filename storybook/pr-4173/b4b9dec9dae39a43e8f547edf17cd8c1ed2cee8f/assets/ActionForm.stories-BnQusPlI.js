import{j as t,g as n}from"./iframe-CQxG3cCC.js";import{A as r}from"./action-form-DS7Iy1lp.js";import"./preload-helper-BQhDaTv1.js";import"./DropdownField-9ziBfdgv.js";import"./debounce-BJEoAQfk.js";import"./useOsdkClient-rcUQfTvQ.js";import"./index-DxGOzCTx.js";import"./Input-IKU9NsaD.js";import"./useBaseUiId-Dt5sayHU.js";import"./useControlled-DBmpvbx5.js";import"./index-srIEGZLU.js";import"./index-B8ySRxPM.js";import"./PopoverPopup-eKDhhN4E.js";import"./InternalBackdrop-BDvtcNtG.js";import"./composite-UnoLR2xI.js";import"./index-CevcsHHZ.js";import"./getDisabledMountTransitionStyles-BMquo6lw.js";import"./ToolbarRootContext-Dp2y2zy-.js";import"./tick-gN8njJQM.js";import"./svgIconContainer-BhtEOhwo.js";import"./small-cross-Di7hpAGJ.js";import"./search-XsOT8fX6.js";import"./cross-csp5HbTE.js";import"./useValueChanged-BuXo7lzh.js";import"./getPseudoElementBounds-DyrNCMLJ.js";import"./CompositeItem-D3C5uQt7.js";import"./makeExternalStore-ez4Tjxbk.js";import"./BaseForm-H3KbclvV.js";import"./ActionButton-DEiZAioH.js";import"./Button-D1svI8Md.js";import"./SkeletonBar-D53oWcoz.js";import"./Tooltip-Ci2fxdP1.js";import"./info-sign-DajfUG0T.js";import"./chevron-up-C2bbOhFH.js";import"./chevron-down-C-j45_ex.js";import"./useEventCallback-BWLI-kIT.js";import"./iconLoader-Bf9QSfX4.js";import"./Switch-CS-XkQ8j.js";import"./CompositeRoot-UaBOTu3G.js";import"./TimePicker-DdjQEWyk.js";import"./CollapsiblePanel-DXkCbcz8.js";import"./error-DvI5aFF7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CA86lKjW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
