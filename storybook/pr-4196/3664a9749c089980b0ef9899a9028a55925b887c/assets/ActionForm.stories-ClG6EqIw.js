import{j as t,g as n}from"./iframe-fQxG4Lg8.js";import{A as r}from"./action-form-BBSKawYS.js";import"./preload-helper-C3S-rczw.js";import"./DropdownField-eogQl421.js";import"./debounce-Dj_e_6kC.js";import"./useOsdkClient-BlaEh5Bi.js";import"./index-ltdpE_X9.js";import"./Input-CaYmWuD7.js";import"./useBaseUiId-BLPigAyn.js";import"./useControlled-DqDDQqjZ.js";import"./index-BJBu7OXz.js";import"./index-B903ktB6.js";import"./PopoverPopup-C4texbP0.js";import"./InternalBackdrop-Cf_yJEvo.js";import"./composite-DDCMOEB3.js";import"./index-B1XnrnSa.js";import"./getDisabledMountTransitionStyles-BfSk2v82.js";import"./ToolbarRootContext-CBJvqLZU.js";import"./tick-aJ0nLTgk.js";import"./svgIconContainer-DiG6bowi.js";import"./small-cross-DndD1mKm.js";import"./search-Cty6Jhmh.js";import"./cross-DCa3-fIn.js";import"./useValueChanged-0fxI-YLf.js";import"./getPseudoElementBounds-DnfsNe5i.js";import"./CompositeItem-DICXTkJC.js";import"./makeExternalStore-bm_X3lw2.js";import"./BaseForm-CJCzTiPh.js";import"./ActionButton-9_9jfXoV.js";import"./Button-BifFo4zB.js";import"./SkeletonBar-wwhzG1v0.js";import"./Tooltip-DuEVyIet.js";import"./info-sign-b9oUKxF1.js";import"./chevron-up-BOgYKdwN.js";import"./chevron-down-C1z-grQd.js";import"./useEventCallback-DIfP3h4k.js";import"./iconLoader-BWzl2bea.js";import"./Switch-BKGHMIn4.js";import"./CompositeRoot-0p2XXahR.js";import"./TimePicker-BnVXLsZT.js";import"./CollapsiblePanel-D6URl5lo.js";import"./error-DITUlsDB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-M9jqBL_m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
