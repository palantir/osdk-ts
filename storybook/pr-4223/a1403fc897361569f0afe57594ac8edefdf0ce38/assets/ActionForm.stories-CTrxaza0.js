import{j as t,g as n}from"./iframe-BkcR1iue.js";import{A as r}from"./action-form-GIx6qb-m.js";import"./preload-helper-DrQC6sAs.js";import"./DropdownField-Ddw27l5N.js";import"./debounce-BR3HCMrO.js";import"./useOsdkClient-BE9XndJ0.js";import"./index-C48hokBn.js";import"./Input-7EUJZBSZ.js";import"./useBaseUiId-CMez3yYq.js";import"./useControlled-DQuU9HTi.js";import"./index-BcdwcPhB.js";import"./index-B7w41dnZ.js";import"./PopoverPopup-BAQ5vkX7.js";import"./InternalBackdrop-BrNgLYU2.js";import"./composite-BvN8B2j0.js";import"./index-BKyA0SCA.js";import"./getDisabledMountTransitionStyles-hWWFi-qA.js";import"./ToolbarRootContext--E-pClz6.js";import"./tick-qW1a1XW7.js";import"./svgIconContainer-5EXbYaZG.js";import"./small-cross-BP75-g7J.js";import"./search--B6bPp9Q.js";import"./cross-Dq5JHURf.js";import"./useValueChanged-tSsYdvqu.js";import"./getPseudoElementBounds-C9SU6CHl.js";import"./CompositeItem-D6GgTBoR.js";import"./makeExternalStore-DjRLK8zO.js";import"./BaseForm-C7xscO5N.js";import"./ActionButton-CX5WcJy8.js";import"./Button-B40tdNrN.js";import"./SkeletonBar-BKmKsv8M.js";import"./Tooltip-C95BVVCQ.js";import"./info-sign-l1g8JYMr.js";import"./chevron-up-DBThE4il.js";import"./chevron-down-B8DDqxwj.js";import"./useEventCallback-D_30EqT4.js";import"./iconLoader-DBIQ1RFR.js";import"./Switch-0evCUWh2.js";import"./CompositeRoot-BRrzckH_.js";import"./TimePicker-BJMBtW7j.js";import"./CollapsiblePanel-BpfLB0ao.js";import"./error-Dqr8KpcY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DHpidme4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
