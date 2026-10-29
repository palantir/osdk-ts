import{j as t,g as n}from"./iframe-BUAKey-b.js";import{A as r}from"./action-form-kAAFKm-x.js";import"./preload-helper-8ONSILo-.js";import"./DropdownField-wtjKeadJ.js";import"./debounce-TB1Vypf1.js";import"./useOsdkClient-De86zlhT.js";import"./index-C_XWLLnL.js";import"./Input-XOa6KB6m.js";import"./useBaseUiId-C8Y4NjI4.js";import"./useControlled-DbbiJxEI.js";import"./index-0X59r-jL.js";import"./index-BVUJd12s.js";import"./PopoverPopup-B29eQZ64.js";import"./InternalBackdrop-DBedaqK2.js";import"./composite-B5eojsZ9.js";import"./index-BOoWcbcQ.js";import"./getDisabledMountTransitionStyles-Ckfz4xV-.js";import"./ToolbarRootContext-CFT1kSbY.js";import"./tick-DdBTMVZy.js";import"./svgIconContainer-R7EcdMMS.js";import"./small-cross-CsGj_6WB.js";import"./search-BpOSeHLA.js";import"./cross-DIKNxaCS.js";import"./useValueChanged-CJ3EpaVI.js";import"./getPseudoElementBounds-CEULC0ey.js";import"./CompositeItem-D3aderF4.js";import"./makeExternalStore-BoGnPwwN.js";import"./BaseForm-B5QYI-4d.js";import"./ActionButton-DbyswEM_.js";import"./Button-BiKKO9jr.js";import"./SkeletonBar-DGJh5kUn.js";import"./Tooltip-CAd6Fq_j.js";import"./info-sign-CIxSR4SI.js";import"./chevron-up-CwcsU2Qp.js";import"./chevron-down-B1umsHcu.js";import"./useEventCallback-DB_YKX3R.js";import"./iconLoader-BTMi8cM2.js";import"./Switch-DGhvRY9u.js";import"./CompositeRoot-DIrCbZh9.js";import"./TimePicker-Duc1WCQh.js";import"./CollapsiblePanel-CJyeuEr2.js";import"./error-K70cMOqt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CgOQk5ql.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
