import{j as t,g as n}from"./iframe-Crrq_V9a.js";import{A as r}from"./action-form-CUsJgye0.js";import"./preload-helper-B0KSNMSf.js";import"./DropdownField-CvoKEn-m.js";import"./debounce-BqrQQHrt.js";import"./useOsdkClient-CQzSF8cZ.js";import"./index-BUK6uge5.js";import"./Input-BB-wuDqG.js";import"./useBaseUiId-G0RhfiSE.js";import"./useControlled-7_WCnHC_.js";import"./index-LdB11F_t.js";import"./index-BhOk5BKE.js";import"./PopoverPopup-CBuM0R4V.js";import"./InternalBackdrop-Cb-39vNM.js";import"./composite-DFN7AbeA.js";import"./index-dPrJwc88.js";import"./getDisabledMountTransitionStyles-DsVgkYmN.js";import"./ToolbarRootContext-UM565H_l.js";import"./tick-C-BN17pt.js";import"./svgIconContainer-CBsIZ9u2.js";import"./small-cross-2Itdgd_Q.js";import"./search-UIxXkiNx.js";import"./cross-BfUth1rr.js";import"./useValueChanged-Mq4YQWWw.js";import"./getPseudoElementBounds-BJj-LpqP.js";import"./CompositeItem-COkq6uGE.js";import"./makeExternalStore-DqEHGNcf.js";import"./BaseForm-Bhghlg86.js";import"./ActionButton-B7zHu77T.js";import"./Button-rjMzAizh.js";import"./SkeletonBar-B0oezpwK.js";import"./Tooltip-CmGtxQmE.js";import"./info-sign-COYDDwvG.js";import"./chevron-up-C3haDphm.js";import"./chevron-down-33yPdK7L.js";import"./useEventCallback-DZL9KXuR.js";import"./iconLoader-njjB2YAs.js";import"./Switch-C1_bs0fr.js";import"./CompositeRoot-BMZZMLl-.js";import"./TimePicker-RzR_K8d6.js";import"./CollapsiblePanel-DMABQszi.js";import"./error-FZelDdZI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BUiVXfiJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
