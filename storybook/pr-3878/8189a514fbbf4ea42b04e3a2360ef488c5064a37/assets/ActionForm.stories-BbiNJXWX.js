import{j as t,g as n}from"./iframe-56aCtkcZ.js";import{A as r}from"./action-form-B-u6LTrf.js";import"./preload-helper-DP50sY1P.js";import"./DropdownField-3Ad7m87u.js";import"./debounce-CmP_j_Q8.js";import"./useOsdkClient-jilUbAUE.js";import"./index-BM5nCcvA.js";import"./Input-BUSfhI-b.js";import"./useBaseUiId-D82-BIAj.js";import"./useControlled-BNAN5oeG.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./PopoverPopup-1nRwWEZN.js";import"./InternalBackdrop-BWk9Mij_.js";import"./composite-Bol_PDWG.js";import"./index-6JhW2qtZ.js";import"./getDisabledMountTransitionStyles-C3g2m2GA.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./tick-BVwIBB0x.js";import"./svgIconContainer-Da40OoQe.js";import"./small-cross-BScMbdWS.js";import"./search-Df5_6yBi.js";import"./cross-BkceNYXb.js";import"./useValueChanged-B9dcid5j.js";import"./getPseudoElementBounds-DhoqY1uL.js";import"./CompositeItem-CtIfORVC.js";import"./makeExternalStore-C8LtB6Bq.js";import"./BaseForm-C3LLFgjn.js";import"./ActionButton-juMisa4o.js";import"./Button-C0vE2bzb.js";import"./SkeletonBar-B6_sPXiY.js";import"./Tooltip-DPvc60vQ.js";import"./info-sign-gLcoeSVb.js";import"./chevron-up-DYlu6VWh.js";import"./chevron-down--SGqA3gF.js";import"./useEventCallback--SPa_rCD.js";import"./iconLoader-DMahZr-p.js";import"./CompositeRoot-C2a0nRxC.js";import"./Switch-ti7zToZI.js";import"./TimePicker-B5tMWiQ6.js";import"./CollapsiblePanel-BK9buE6t.js";import"./error-t-pHJ0in.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BQAZKQ7x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
