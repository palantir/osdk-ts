import{j as t,g as n}from"./iframe-CSjrP8vI.js";import{A as r}from"./action-form-BlYK1xxT.js";import"./preload-helper-Cx2hoj0m.js";import"./DropdownField-DG8Fepg7.js";import"./debounce-BFRee1ws.js";import"./useOsdkClient-DS20s_-p.js";import"./index-CqYglBD0.js";import"./Input-DG23LIw2.js";import"./useBaseUiId-DcgW2BGe.js";import"./useControlled-W118GxB4.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./PopoverPopup-BsQv3X8u.js";import"./InternalBackdrop-DRh1UujG.js";import"./composite-CAXBU4pD.js";import"./index-B4CwIOCa.js";import"./getDisabledMountTransitionStyles-Cc4xA-eS.js";import"./ToolbarRootContext-Skd8opG_.js";import"./tick-BEtFRrY5.js";import"./svgIconContainer-B7BQRztY.js";import"./small-cross-B5v1tapE.js";import"./search-BM_j1Cww.js";import"./cross-Ds3xYnVZ.js";import"./useValueChanged-Bqlwrqtn.js";import"./getPseudoElementBounds-D0jv3We1.js";import"./CompositeItem-C2wpcQLE.js";import"./makeExternalStore-DptFAV08.js";import"./BaseForm-DL1pb4IU.js";import"./ActionButton-DYIYoWW6.js";import"./Button-nWxTMLuc.js";import"./SkeletonBar-CUZm-PKw.js";import"./Tooltip-Cg04CKbW.js";import"./info-sign-C4euIwxQ.js";import"./chevron-up-CvwBzOgX.js";import"./chevron-down-xJOpychc.js";import"./useEventCallback-CRfAaycK.js";import"./iconLoader-BebYPMav.js";import"./Switch-BRu3qClt.js";import"./CompositeRoot-CTCX69DK.js";import"./TimePicker-BC3-XBG9.js";import"./CollapsiblePanel-B6tadX4-.js";import"./error-Du9W1yMi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-sMcDJBip.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
