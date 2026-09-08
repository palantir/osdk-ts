import{j as t,g as n}from"./iframe-BrczSXWd.js";import{A as r}from"./action-form-A_TIHyIj.js";import"./preload-helper-C9BY0Y3l.js";import"./DropdownField-D1lbpORr.js";import"./debounce-DXJT-xl2.js";import"./useOsdkClient-CVk0RIIh.js";import"./index-DudA86qY.js";import"./Input-B6lE5n2S.js";import"./useBaseUiId-BAdjTZxi.js";import"./useControlled-rjkFsMU4.js";import"./index-BNKav9tw.js";import"./index-DjqiYrmI.js";import"./PopoverPopup-rbPcompC.js";import"./InternalBackdrop-985pZM4u.js";import"./composite-Bm0YB8hl.js";import"./index-O3AskpOE.js";import"./getDisabledMountTransitionStyles-BeD1AelW.js";import"./ToolbarRootContext-BTk5x8Vt.js";import"./tick-DqGJ_cyI.js";import"./svgIconContainer-CE-3RmSd.js";import"./small-cross-joSiLnnY.js";import"./search-BIr2ECst.js";import"./cross-Ru6xXr8E.js";import"./useValueChanged-BQ2NGAKU.js";import"./getPseudoElementBounds-PdvQmR0i.js";import"./CompositeItem-BJcTRkcm.js";import"./makeExternalStore-C7i3F044.js";import"./BaseForm-B0KWQiP1.js";import"./ActionButton-BArH-a0x.js";import"./Button-DCegplHy.js";import"./SkeletonBar-BrWUMOMm.js";import"./Tooltip-YOTilwd1.js";import"./info-sign-nSjN1K8f.js";import"./chevron-up-CohoVb5E.js";import"./chevron-down-Bqbgyapn.js";import"./useEventCallback-BQlx-yAT.js";import"./iconLoader-BqQU-3nr.js";import"./CompositeRoot-BSNg0blt.js";import"./Switch-BN_L29OK.js";import"./TimePicker-CzlqIFaP.js";import"./CollapsiblePanel-CsAiwkqy.js";import"./error-CUc0NJXd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGpmb3Iv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
