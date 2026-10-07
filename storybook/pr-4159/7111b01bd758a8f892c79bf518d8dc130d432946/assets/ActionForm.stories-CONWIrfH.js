import{j as t,g as n}from"./iframe-BnQn1FlY.js";import{A as r}from"./action-form-BuZ0qhVk.js";import"./preload-helper-BecbOaxr.js";import"./DropdownField-CBQ5hYY4.js";import"./debounce-C4XOemAw.js";import"./useOsdkClient-BOzHXDv_.js";import"./index-CfSflYMd.js";import"./Input-DoQKk1PO.js";import"./useBaseUiId-D_n7SQSX.js";import"./useControlled-i3XBhDi5.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./PopoverPopup-Dv1gHfMh.js";import"./InternalBackdrop-BK5BvcOi.js";import"./composite-D7QBQd-n.js";import"./index-BZF3QGqV.js";import"./getDisabledMountTransitionStyles-mUbg0fsY.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./tick-ByOfPxOM.js";import"./svgIconContainer-C8CWCK4h.js";import"./small-cross-CIlPARtt.js";import"./search-DRs0Pqxh.js";import"./cross-CQwrttsU.js";import"./useValueChanged-DCL6nLeD.js";import"./getPseudoElementBounds-Btt2eHQG.js";import"./CompositeItem-DQ-KZaEd.js";import"./makeExternalStore-CydlKeaD.js";import"./BaseForm-_V61vMSu.js";import"./ActionButton-D4YbdFWJ.js";import"./Button-DdWl47ZG.js";import"./SkeletonBar-DABOfyFg.js";import"./Tooltip-CZ3Eb1De.js";import"./info-sign-Df6_jKJt.js";import"./chevron-up-CPeZT1cr.js";import"./chevron-down-CBuocP3-.js";import"./useEventCallback-CFxdcXkp.js";import"./iconLoader-9h5EUAwN.js";import"./Switch-D4f-l8C3.js";import"./CompositeRoot-07GyAGRf.js";import"./TimePicker-XtLwCQ1M.js";import"./CollapsiblePanel-7pS-YmLY.js";import"./error-HPj_xS2_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BE7G7j9y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
