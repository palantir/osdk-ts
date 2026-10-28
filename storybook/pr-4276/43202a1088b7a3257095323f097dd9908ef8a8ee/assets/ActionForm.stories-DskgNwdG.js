import{j as t,g as n}from"./iframe-BeH6Kgtk.js";import{A as r}from"./action-form-BKp-6n3x.js";import"./preload-helper-DIEhRyUP.js";import"./DropdownField-BjkAOtL1.js";import"./debounce-DQFTeh52.js";import"./useOsdkClient-8GVphyRP.js";import"./index-DFSFBHkF.js";import"./Input-RgiEvmaC.js";import"./useBaseUiId-CtZE3HDc.js";import"./useControlled-Bdo1gXa6.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./isObject-raxYKDb4.js";import"./InternalBackdrop-tGSxu3X-.js";import"./composite-oEq7yTUS.js";import"./index-B83GxJH9.js";import"./getDisabledMountTransitionStyles-TI3kKTby.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./tick-CnxOlA-z.js";import"./svgIconContainer-Bb-RAJkY.js";import"./small-cross-BIL5QE4b.js";import"./search-CAOX7A7K.js";import"./cross-CX4SHNo3.js";import"./useValueChanged-GpyRtBxV.js";import"./getPseudoElementBounds-XJNejySA.js";import"./CompositeItem-BFteZ_HC.js";import"./makeExternalStore-CtDF7lCi.js";import"./BaseForm-DHkST7ct.js";import"./ActionButton-Dn_I3vRk.js";import"./Button-Cy9t27DN.js";import"./SkeletonBar-Cef5YzUY.js";import"./Tooltip-BqIx27JT.js";import"./info-sign-ybgVUzyW.js";import"./chevron-up-Ctu-RjXk.js";import"./chevron-down-BQRyOpPG.js";import"./useEventCallback-C6Ywg3fj.js";import"./iconLoader-BI-1_6q1.js";import"./Switch-kJoUEQtR.js";import"./CompositeRoot-D-s14YLf.js";import"./TimePicker-HvuPW5y-.js";import"./CollapsiblePanel-DEBXY80q.js";import"./error-Dyg0hO9Y.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dy2obrep.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
