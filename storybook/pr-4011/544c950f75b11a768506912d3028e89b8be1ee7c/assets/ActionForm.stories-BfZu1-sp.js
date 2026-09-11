import{j as t,g as n}from"./iframe-CUvi9RCV.js";import{A as r}from"./action-form-DZDibOcA.js";import"./preload-helper-GqmuGD1I.js";import"./DropdownField-B-lq3-Qt.js";import"./debounce-Cv2dODgM.js";import"./useOsdkClient-BgZD9TyH.js";import"./index-Z2IvR_t6.js";import"./Input-gjvR1UgW.js";import"./useBaseUiId-D-6poyG0.js";import"./useControlled-CGiicoDL.js";import"./index-COsMkiIW.js";import"./index-Cn-BGg-w.js";import"./PopoverPopup-BbwvRm54.js";import"./InternalBackdrop-CIMfO5y8.js";import"./composite-BnXsOcTt.js";import"./index-B95PX811.js";import"./getDisabledMountTransitionStyles-DyOCVWdJ.js";import"./ToolbarRootContext-B6eeQfxM.js";import"./tick-CHlHLJu2.js";import"./svgIconContainer-BiFTkGqE.js";import"./small-cross-ojaGdjNx.js";import"./search-DljzsUQ1.js";import"./cross-BswioSgU.js";import"./useValueChanged-CVvpPlQH.js";import"./getPseudoElementBounds-Cvp7B3_m.js";import"./CompositeItem-BOheTBRU.js";import"./makeExternalStore-CRTDTaWN.js";import"./BaseForm-BajCtmmR.js";import"./ActionButton-DDSl0ABg.js";import"./Button-DN8sAUol.js";import"./SkeletonBar-r6LXjWHA.js";import"./Tooltip-_cTW755E.js";import"./info-sign-yA6aHFSC.js";import"./chevron-up-SHcKAqZD.js";import"./chevron-down-DG0ceM1k.js";import"./useEventCallback-CG8tP2N4.js";import"./iconLoader-Dsy8Diiy.js";import"./CompositeRoot-Byy54_27.js";import"./Switch-D9R2--ly.js";import"./TimePicker-g7t_n7Ti.js";import"./CollapsiblePanel-DqM5CzQ9.js";import"./error-nPJR1KaJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B0yRqBdO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
