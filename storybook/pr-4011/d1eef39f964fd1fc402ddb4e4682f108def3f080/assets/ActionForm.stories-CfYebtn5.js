import{j as t,g as n}from"./iframe-CTo_Vzji.js";import{A as r}from"./action-form-BKS4fgKi.js";import"./preload-helper-DdmOa013.js";import"./DropdownField-ac3lkk8_.js";import"./debounce-B89wugMt.js";import"./useOsdkClient-B9u8vjAo.js";import"./index-Db0bQB9_.js";import"./Input-EzzRC5FT.js";import"./useBaseUiId-DRC8ORV_.js";import"./useControlled-BoNXrNA6.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./PopoverPopup-ChB2ddvw.js";import"./InternalBackdrop-B6_Ng-lQ.js";import"./composite-hvvr6RcJ.js";import"./index-1hzAV9CV.js";import"./getDisabledMountTransitionStyles-DJOlxGxJ.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./tick-YWI0wct4.js";import"./svgIconContainer-BrN7Rq3k.js";import"./small-cross-Bujce-By.js";import"./search-DYJawdx1.js";import"./cross-CFrNYW1-.js";import"./useValueChanged-ChX7As4m.js";import"./getPseudoElementBounds-B742Mdks.js";import"./CompositeItem-DzuUOttU.js";import"./makeExternalStore-MWbMkrip.js";import"./BaseForm-DNH4QHOp.js";import"./ActionButton-3lyzIepJ.js";import"./Button-C3RHmX63.js";import"./SkeletonBar-BWauSf1D.js";import"./Tooltip-BYL374NH.js";import"./info-sign-DJfb4lvn.js";import"./chevron-up-CrGOdmiH.js";import"./chevron-down-DsgPE9Kl.js";import"./useEventCallback-B2VUA3Ib.js";import"./iconLoader-Wciql66B.js";import"./CompositeRoot-BQ2lIX7u.js";import"./Switch-CqfULgWh.js";import"./TimePicker-CuFureOJ.js";import"./CollapsiblePanel-Bm45zRZW.js";import"./error-CDiUdq4p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CosmvfGt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
