import{j as t,g as n}from"./iframe-C-JZ09HL.js";import{A as r}from"./action-form-KZjxJp5D.js";import"./preload-helper-Btqf0-MW.js";import"./DropdownField-VLHRRTtJ.js";import"./debounce-DuRZaOgZ.js";import"./useOsdkClient-w30RoI3v.js";import"./index-BXkYmYaL.js";import"./Input-9fM_pp7v.js";import"./useBaseUiId-C6m1fY6X.js";import"./useControlled-BnCuZsdw.js";import"./index-B9W8VWla.js";import"./index-CWTT4E5c.js";import"./PopoverPopup-tZcqIDwv.js";import"./InternalBackdrop-DgDyp4Vo.js";import"./composite-BHrzkL3j.js";import"./index-DyndQNLM.js";import"./getDisabledMountTransitionStyles-BaR3xwN0.js";import"./ToolbarRootContext-CcljaRm4.js";import"./tick-BF72g7TU.js";import"./svgIconContainer-GnFqEV7J.js";import"./small-cross-CQkeoWBO.js";import"./search-CRF0d4U_.js";import"./cross-CDvt64dz.js";import"./useValueChanged-hvB4Sogv.js";import"./getPseudoElementBounds-DEDKJbcP.js";import"./CompositeItem-1x61Rlw0.js";import"./makeExternalStore-CHVbKC8p.js";import"./BaseForm-DRFpEzYB.js";import"./ActionButton-8JqznqV-.js";import"./Button-DnUlyK7a.js";import"./SkeletonBar-DHUwfY6j.js";import"./Tooltip-By6nOBFb.js";import"./info-sign-P69dour9.js";import"./chevron-up-C2A5w8a5.js";import"./chevron-down-l-lKjlka.js";import"./useEventCallback-Is75DRLj.js";import"./iconLoader-BueQ1KjH.js";import"./Switch-CcCcSfS8.js";import"./CompositeRoot-B4wMs_Aj.js";import"./TimePicker-N3gGEKfm.js";import"./CollapsiblePanel-BEbz9zc7.js";import"./error-jL4dzDGt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Das8js_L.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
