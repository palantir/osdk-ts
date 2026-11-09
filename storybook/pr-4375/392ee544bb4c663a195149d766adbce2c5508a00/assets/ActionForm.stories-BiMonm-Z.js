import{j as t,g as n}from"./iframe-HL5MQevY.js";import{A as r}from"./action-form-P1XxIsjv.js";import"./preload-helper-_Ar_KgCE.js";import"./DropdownField-8OaEx8Wn.js";import"./debounce-CBt-yOgZ.js";import"./useOsdkClient-BNLgdfP5.js";import"./index-CgN-SBJb.js";import"./Input-DgL7dTdA.js";import"./useBaseUiId-DySigJtL.js";import"./useControlled-BtrL0bqk.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./isObject-BqGyebfI.js";import"./InternalBackdrop-CKzg6RWA.js";import"./composite-DWznhUuB.js";import"./index-C5eyjoS4.js";import"./getDisabledMountTransitionStyles-BxwARY5V.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./tick-BndTvqfU.js";import"./svgIconContainer-BLMvF_H6.js";import"./small-cross-CMw0W6zl.js";import"./search-BmC04ZEV.js";import"./cross-peQbcr5N.js";import"./useValueChanged-B9yWsaBI.js";import"./getPseudoElementBounds-CHzRmgRw.js";import"./CompositeItem-BWnHlDKK.js";import"./makeExternalStore-CTUMxwBz.js";import"./BaseForm-BvrL76h8.js";import"./ActionButton-BLpeWzFG.js";import"./Button-CqmZF1Qg.js";import"./SkeletonBar-B-apZFZ9.js";import"./Tooltip-fPY7edYe.js";import"./info-sign-CDu4SJwV.js";import"./chevron-up-CpKkvq-o.js";import"./chevron-down-BP0kQuP_.js";import"./useEventCallback-DlHXQ56Q.js";import"./iconLoader-SiEvIRqn.js";import"./Switch-DtirTXdz.js";import"./CompositeRoot-DUWp4233.js";import"./TimePicker-Bu-7n4cE.js";import"./CollapsiblePanel-VgvJldOc.js";import"./error-CIfjiXVi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B6341jPo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
