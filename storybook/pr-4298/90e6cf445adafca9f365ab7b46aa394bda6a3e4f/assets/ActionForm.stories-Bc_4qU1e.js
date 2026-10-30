import{j as t,g as n}from"./iframe-BUjiwBf5.js";import{A as r}from"./action-form-DFWf6bE-.js";import"./preload-helper-B6c2vp8P.js";import"./DropdownField-Cb0C-mKV.js";import"./debounce-66rESf0W.js";import"./useOsdkClient-CKRo4EpN.js";import"./index-CKk_335J.js";import"./Input-DrlS66iR.js";import"./useBaseUiId-C7GiG9Zo.js";import"./useControlled-u72cUfPk.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./PopoverPopup-DozBvSpZ.js";import"./InternalBackdrop-BzH1HGPT.js";import"./composite-DKWT5B2T.js";import"./index-DJII1UoI.js";import"./getDisabledMountTransitionStyles-C5iHJfar.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./tick-4j-y4QUt.js";import"./svgIconContainer-B-5qucwe.js";import"./small-cross-SPUOYKUf.js";import"./search-DWZ7jrir.js";import"./cross-DMwbX_xt.js";import"./useValueChanged-CLO0Bb-9.js";import"./getPseudoElementBounds-DtI19hhj.js";import"./CompositeItem-BuyG-Xnd.js";import"./makeExternalStore-DQVcY1um.js";import"./BaseForm-CDG2_ZPZ.js";import"./ActionButton-DU3dAhJf.js";import"./Button-DdiFhH1O.js";import"./SkeletonBar-Dhr5qRE5.js";import"./Tooltip-D3YkEYkV.js";import"./info-sign-26MJJIL1.js";import"./chevron-up-BIMbkWFm.js";import"./chevron-down-BxUE_6XI.js";import"./useEventCallback-CMhzkP6E.js";import"./iconLoader-BkUAfKKc.js";import"./Switch-D393c_do.js";import"./CompositeRoot-BvAusmZw.js";import"./TimePicker-UzPznwrh.js";import"./CollapsiblePanel-DQj3H5Sg.js";import"./error-Dm0kzNQU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DPL7FlTV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
