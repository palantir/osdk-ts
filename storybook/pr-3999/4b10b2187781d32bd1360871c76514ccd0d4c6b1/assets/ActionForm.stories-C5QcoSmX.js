import{j as t,g as n}from"./iframe-DBZ29Q89.js";import{A as r}from"./action-form-C-3W7iE-.js";import"./preload-helper-Cu7dcQLx.js";import"./DropdownField-ZZtn-RZ5.js";import"./debounce-B-C3MBB0.js";import"./useOsdkClient-Cjx5o-tv.js";import"./index-DBtD-XxF.js";import"./Input-BW9ftY3W.js";import"./useBaseUiId-RGrTJ31h.js";import"./useControlled-CAV9tSJk.js";import"./index-Bo8FiFc5.js";import"./index-Bc39kNYP.js";import"./PopoverPopup-vY89NdJ2.js";import"./InternalBackdrop-BHcPYEam.js";import"./composite-DRG53mMw.js";import"./index-jB4e8NNE.js";import"./getDisabledMountTransitionStyles-CJavuumC.js";import"./ToolbarRootContext-BDMXA8FN.js";import"./tick-6gOcudBG.js";import"./svgIconContainer-DNY9aQZJ.js";import"./small-cross-DoWs3x27.js";import"./search-DFnGvI6Z.js";import"./cross-B-xCEuKH.js";import"./useValueChanged-g3rU1sEt.js";import"./getPseudoElementBounds-CMANdjLh.js";import"./CompositeItem-CnzplN5I.js";import"./makeExternalStore-Dhyr5JD9.js";import"./BaseForm-BEkf4m6h.js";import"./ActionButton-tF-VFP1u.js";import"./Button-TF5qO5TO.js";import"./SkeletonBar-DCuWvPdX.js";import"./Tooltip-DIxNlKyb.js";import"./info-sign-D2_1VzFa.js";import"./chevron-up-DMb1an1a.js";import"./chevron-down-m8Go69fz.js";import"./useEventCallback-Bph5gx73.js";import"./iconLoader-CSNsImoo.js";import"./Switch-C3DK1j5f.js";import"./CompositeRoot-DKZZjXIy.js";import"./TimePicker-DmDlSpgb.js";import"./CollapsiblePanel-BuR1KRlC.js";import"./error-DYp6MgYM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DDr2NyM9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
