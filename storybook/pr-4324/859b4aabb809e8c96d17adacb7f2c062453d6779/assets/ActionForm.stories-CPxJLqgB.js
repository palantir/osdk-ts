import{j as t,g as n}from"./iframe-C_eR_-FB.js";import{A as r}from"./action-form-MrU6fCsG.js";import"./preload-helper-D-iMj1JN.js";import"./DropdownField-BuvpvRO7.js";import"./debounce-BNBceRVR.js";import"./useOsdkClient-UY9KdTa_.js";import"./index-B5oDC2JQ.js";import"./Input-DTI33c7U.js";import"./useBaseUiId-DHfbjF6K.js";import"./useControlled-BEI1fcJ3.js";import"./index-JDCvzA9U.js";import"./index-C5Q3HutH.js";import"./PopoverPopup-BaCYp8dE.js";import"./InternalBackdrop-CtVeclCs.js";import"./composite-CRpQuKDa.js";import"./index-C-Ct-Q1O.js";import"./getDisabledMountTransitionStyles-DyVQfBpM.js";import"./ToolbarRootContext-MiWSvMtv.js";import"./tick-C_kX7tnK.js";import"./svgIconContainer-CBJV4Tnn.js";import"./small-cross-CwIjWKJl.js";import"./search-BSm0Tn1z.js";import"./cross-6THvcyRY.js";import"./useValueChanged-D_PYMBeT.js";import"./getPseudoElementBounds-DFY51yDa.js";import"./CompositeItem-DORzwzYw.js";import"./makeExternalStore-DsUjsZj2.js";import"./BaseForm-Jv9OHS8J.js";import"./ActionButton-C4NITY81.js";import"./Button-D3eF3jJ4.js";import"./SkeletonBar-Dfyf_j8b.js";import"./Tooltip-BO3iXvgP.js";import"./info-sign-BquhSJ3U.js";import"./chevron-up-CGdcB0AV.js";import"./chevron-down-CYhIscH3.js";import"./useEventCallback-BSdQRjPY.js";import"./iconLoader-C6oXop7y.js";import"./Switch-BokCMGHz.js";import"./CompositeRoot-Du8ZldYT.js";import"./TimePicker-Zz5_Vydm.js";import"./CollapsiblePanel-5toXnu5d.js";import"./error-BIKnaXwT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D4cys7NY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
