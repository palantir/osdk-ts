import{j as t,g as n}from"./iframe-BatTRwfa.js";import{A as r}from"./action-form-MU-Amouw.js";import"./preload-helper-1dO9BeYB.js";import"./DropdownField-CnB7jcM7.js";import"./debounce-BtG4PIwW.js";import"./useOsdkClient-xL_Zv1WO.js";import"./index-DOW0CwQC.js";import"./Input-C5LDgX9X.js";import"./useBaseUiId-DvfpcKJo.js";import"./useControlled-STn9JHtw.js";import"./index-CjHrbaV9.js";import"./index-zVbC2njb.js";import"./PopoverPopup-D35Mz83O.js";import"./InternalBackdrop-Zmd-LiLm.js";import"./composite-BBv4613M.js";import"./index-H8QjAumC.js";import"./getDisabledMountTransitionStyles-OE1kchG2.js";import"./ToolbarRootContext-DNGFWytt.js";import"./tick-DUFPZnzG.js";import"./svgIconContainer-BEJ8Uc8u.js";import"./small-cross-BPhAxJ8u.js";import"./search-CZvhHXAJ.js";import"./cross-BDeJmnrY.js";import"./useValueChanged-EUrHxfvD.js";import"./getPseudoElementBounds-BD9k5WkF.js";import"./CompositeItem-5Yv0-9Y-.js";import"./makeExternalStore-CnkPGtRT.js";import"./BaseForm-Dcivmt1Z.js";import"./ActionButton-BpZcQi9r.js";import"./Button-Du5jWjff.js";import"./SkeletonBar-qWyKnZi_.js";import"./Tooltip-IQeYH35x.js";import"./info-sign-C14BFBHf.js";import"./chevron-up-CQaqaItd.js";import"./chevron-down-DrwZYKMn.js";import"./useEventCallback-YevN6u6r.js";import"./iconLoader-DNDSdBmF.js";import"./Switch-ihIEecI8.js";import"./CompositeRoot-DYz2YvtC.js";import"./TimePicker-QYncQiHp.js";import"./CollapsiblePanel--VPjmuy-.js";import"./error-D_Nf9rBh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5QyIn2v.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
