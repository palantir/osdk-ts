import{j as t,g as n}from"./iframe-3pBmeYFT.js";import{A as r}from"./action-form-Vx2TScs5.js";import"./preload-helper-vBjj0fkZ.js";import"./DropdownField-vPiacE-M.js";import"./debounce-BUj2tWGy.js";import"./useOsdkClient-DBkdWm96.js";import"./index-HXkjhg6z.js";import"./Input-BQ6oicvc.js";import"./useBaseUiId-BX_7JiSc.js";import"./useControlled-MqJ_-6UI.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./PopoverPopup-DWqfD9XE.js";import"./InternalBackdrop-Bf5bS0-N.js";import"./composite-D407pmHd.js";import"./index-CNtaAiKb.js";import"./getDisabledMountTransitionStyles-BzXEt7kT.js";import"./ToolbarRootContext-BROspXHg.js";import"./tick-BvsLxO6_.js";import"./svgIconContainer-oYexr0c7.js";import"./small-cross-4xzNgjst.js";import"./search-CQOti8kz.js";import"./cross-Cw8SpRPo.js";import"./useValueChanged-Dv4NLcIJ.js";import"./getPseudoElementBounds-VW5wliGx.js";import"./CompositeItem-BAzi-4_X.js";import"./makeExternalStore-B9tQcCLS.js";import"./BaseForm-ssG_-JPz.js";import"./ActionButton-CSRC1G7d.js";import"./Button-DVJw32Da.js";import"./SkeletonBar-DcraF9ed.js";import"./Tooltip-DFKKdGeu.js";import"./info-sign-BQ4G2R8P.js";import"./chevron-up-DAQKOLvL.js";import"./chevron-down-CPXZLq0t.js";import"./useEventCallback-QikBKoT3.js";import"./iconLoader-C-AAVwhf.js";import"./Switch-Zl5CqyAo.js";import"./CompositeRoot-CNMgY8gW.js";import"./TimePicker-BbBv8oPh.js";import"./CollapsiblePanel-DN3NPDIL.js";import"./error-oFoemtYn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CZjqmY54.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
