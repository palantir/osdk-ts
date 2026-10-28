import{j as t,g as n}from"./iframe-JML89ya1.js";import{A as r}from"./action-form-D9XNLcux.js";import"./preload-helper-CM_flLUX.js";import"./DropdownField-C9yxcGzD.js";import"./debounce-BR8LXPlV.js";import"./useOsdkClient-_gvl4Rg0.js";import"./index-Dc7pQO3f.js";import"./Input-BPVftMna.js";import"./useBaseUiId-ClxBcpvR.js";import"./useControlled-Dmeb-XiS.js";import"./index-DlPnlhaK.js";import"./index-BPJRAXu1.js";import"./PopoverPopup-DmwxW2Ka.js";import"./InternalBackdrop-21DC1z9N.js";import"./composite-lR6NpWTP.js";import"./index-BslB55NL.js";import"./getDisabledMountTransitionStyles-BiUI-Q9G.js";import"./ToolbarRootContext-CcT7wUi-.js";import"./tick-KkkII5Mi.js";import"./svgIconContainer-Cy1tbGmj.js";import"./small-cross-CmBmU6Im.js";import"./search-BoZa_HcP.js";import"./cross-CdcqVyzX.js";import"./useValueChanged--jLvROzt.js";import"./getPseudoElementBounds-Idti6r53.js";import"./CompositeItem-DNfCdbW9.js";import"./makeExternalStore-C3BRy9aQ.js";import"./BaseForm-DwXEZboS.js";import"./ActionButton-nJprY3R-.js";import"./Button-B2QAh7AV.js";import"./SkeletonBar-DaW4uBaB.js";import"./Tooltip-DuubpmlS.js";import"./info-sign-DEczZXKX.js";import"./chevron-up-BB4OzOUe.js";import"./chevron-down-CvzFuZ8A.js";import"./useEventCallback-3tK8gcTN.js";import"./iconLoader-DPN0y_P8.js";import"./Switch-hzGQ9hiI.js";import"./CompositeRoot-DzcW0TyE.js";import"./TimePicker-DQ9GawGD.js";import"./CollapsiblePanel-Dd_2bttq.js";import"./error-yEc2n_E2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DBKIKizN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
