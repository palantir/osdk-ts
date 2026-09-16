import{j as t,g as n}from"./iframe-C-TWQ9Dj.js";import{A as r}from"./action-form-DVAD9iCF.js";import"./preload-helper-SRiQ6y29.js";import"./DropdownField-HMVghVOX.js";import"./debounce-CYsfIW2P.js";import"./useOsdkClient-WmdAhq3S.js";import"./index-PmPY8NSw.js";import"./Input-C724ccD9.js";import"./useBaseUiId-C7aOOgXJ.js";import"./useControlled-CySHXj1X.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./PopoverPopup-BFE0pvVh.js";import"./InternalBackdrop-C7xc3x3s.js";import"./composite-D--SIj9q.js";import"./index-D6WX8M0U.js";import"./getDisabledMountTransitionStyles-CEUeKr3J.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./tick-C4vQIE4T.js";import"./svgIconContainer-lMlNb8_m.js";import"./small-cross-Djhljs2G.js";import"./search-CPuRKLWN.js";import"./cross-BVZ0tu48.js";import"./useValueChanged-BgM1xj6e.js";import"./getPseudoElementBounds-qfUTeo2P.js";import"./CompositeItem-Dko6wR9I.js";import"./makeExternalStore-Lt703n6D.js";import"./BaseForm-B_XHUkOL.js";import"./ActionButton-LwJEJXUG.js";import"./Button-CBan_F_X.js";import"./SkeletonBar-Dw_l2Y16.js";import"./Tooltip-BcTTfVEh.js";import"./info-sign-DGjpMQy6.js";import"./chevron-up-Sqfpy2Po.js";import"./chevron-down-gXZSSvnY.js";import"./useEventCallback-WJc4Eyq9.js";import"./iconLoader-B8nsFLot.js";import"./Switch-CB7R8JwQ.js";import"./CompositeRoot-BO5byAO0.js";import"./TimePicker-p9KFqPg9.js";import"./CollapsiblePanel-UW9yX8mw.js";import"./error-C4q3M3Sg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIyUXY1U.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
