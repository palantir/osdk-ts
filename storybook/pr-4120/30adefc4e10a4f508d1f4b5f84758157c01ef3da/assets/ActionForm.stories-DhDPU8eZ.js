import{j as t,g as n}from"./iframe-Dua4ajQH.js";import{A as r}from"./action-form--V-4zEo_.js";import"./preload-helper-TWiFBZiW.js";import"./DropdownField-BHc6qe6w.js";import"./debounce-CGnJH3Kx.js";import"./useOsdkClient-kLLc3fFG.js";import"./index-B5QPpnt_.js";import"./Input-CWXiSgRy.js";import"./useBaseUiId-BiStwtEQ.js";import"./useControlled-jEZs-eRF.js";import"./index-DfHqmq9q.js";import"./index-X9-XOgeq.js";import"./PopoverPopup-DqsKdDvA.js";import"./InternalBackdrop-LR3Q-MAi.js";import"./composite-C1niPINm.js";import"./index-Bj03qASY.js";import"./getDisabledMountTransitionStyles-D--ljA0s.js";import"./ToolbarRootContext-jICZlJZR.js";import"./tick-C8Mo77j_.js";import"./svgIconContainer-BndmJKKI.js";import"./small-cross-CErn4ZoN.js";import"./search-BpzzW9g6.js";import"./cross-Dk_ZgApr.js";import"./useValueChanged-Dl2xjnKi.js";import"./getPseudoElementBounds-ruL93tCB.js";import"./CompositeItem-BwhFHjMK.js";import"./makeExternalStore-C1Ti9SLi.js";import"./BaseForm-CrxjLYNQ.js";import"./ActionButton-6icQAY27.js";import"./Button--2vsDgC3.js";import"./SkeletonBar-BtuMnAJN.js";import"./Tooltip-B0A5ZHrA.js";import"./info-sign-B98Wftpe.js";import"./chevron-up-DdFHnGNP.js";import"./chevron-down-CBHx2nKD.js";import"./useEventCallback-DZJs1tu0.js";import"./iconLoader-CR9aTZqe.js";import"./Switch-CcHH6e0f.js";import"./CompositeRoot-BXtLIDni.js";import"./TimePicker-6LvTpz1g.js";import"./CollapsiblePanel-Pt5pzLj1.js";import"./error-B8MXwNx9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPBDIPLq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
