import{j as t,g as n}from"./iframe-BK35Aetk.js";import{A as r}from"./action-form-Cy9MDmNe.js";import"./preload-helper-CSbGcA9T.js";import"./DropdownField-Bdh0YP6p.js";import"./debounce-DaJCVt97.js";import"./useOsdkClient-xrzUDYQQ.js";import"./index-CRoVE56T.js";import"./Input-BBffaDeP.js";import"./useBaseUiId-wzcWLuni.js";import"./useControlled-Dh0EQZ-9.js";import"./index-DW1QNimG.js";import"./index-CMsvzF6c.js";import"./PopoverPopup-DNHFOhuU.js";import"./InternalBackdrop-Ch6GACCQ.js";import"./composite-BC1NOOFJ.js";import"./index-CS1BdUz3.js";import"./getDisabledMountTransitionStyles-CWWRm8ZG.js";import"./ToolbarRootContext-BdRYVpKL.js";import"./tick-Cdslhrb5.js";import"./svgIconContainer-CSIx5hfy.js";import"./small-cross-BMXPDC9b.js";import"./search-BlafU9EC.js";import"./cross-B0y6D7Iy.js";import"./useValueChanged-Dhfv4x3U.js";import"./getPseudoElementBounds-Bmg_H6Mu.js";import"./CompositeItem-1I2WlbJ9.js";import"./makeExternalStore-CRBaxVJ6.js";import"./BaseForm-BhP5swcJ.js";import"./ActionButton-kIs-FADX.js";import"./Button-DM8aYBS9.js";import"./SkeletonBar-BmOvAKiB.js";import"./Tooltip-D-esBjUo.js";import"./info-sign-BNk_Fb9N.js";import"./chevron-up-CItaJGWq.js";import"./chevron-down-CyfgKJCg.js";import"./useEventCallback-BMEbCQj6.js";import"./iconLoader-C5UYSgO5.js";import"./Switch-BJubtTfh.js";import"./CompositeRoot-vaWJgZFv.js";import"./TimePicker-DKKJ82T1.js";import"./CollapsiblePanel-DrdyzccY.js";import"./error-DLnzRR-1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BZ06iEbV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
