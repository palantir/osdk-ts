import{j as t,g as n}from"./iframe-Bz_J2W1Z.js";import{A as r}from"./action-form-CU7QDoaV.js";import"./preload-helper-ok-MzX3c.js";import"./DropdownField-ZxzfXiCm.js";import"./debounce--inhDJEJ.js";import"./useOsdkClient-DzVQoRZo.js";import"./index-FW_HsjU0.js";import"./Input-Bb2RIbvF.js";import"./useBaseUiId-BhmZfUtN.js";import"./useControlled-BuUO4LJj.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./isObject-MrG-9k2y.js";import"./InternalBackdrop-CF2prM0v.js";import"./composite-DlQjNEH4.js";import"./index-Bb43CzD2.js";import"./getDisabledMountTransitionStyles-Bi_e2akv.js";import"./ToolbarRootContext-D7Swefso.js";import"./tick-CbkclHuX.js";import"./svgIconContainer-CIyUQzFt.js";import"./small-cross-ZW30Jg6L.js";import"./search-LR9m9GUO.js";import"./cross-DddIN5az.js";import"./useValueChanged-DKxvjgDx.js";import"./getPseudoElementBounds-DL548pPm.js";import"./CompositeItem-BJ3s4VzC.js";import"./makeExternalStore-BAdkPAIU.js";import"./BaseForm-C5d1XhyA.js";import"./ActionButton-ChwYro4H.js";import"./Button-DvYR9GFC.js";import"./SkeletonBar-DPT4T968.js";import"./Tooltip-BHCbPk7Z.js";import"./info-sign-JT5DlQwP.js";import"./chevron-up-CZn9Cw4t.js";import"./chevron-down-Cd0pn5Sr.js";import"./useEventCallback-DE3O12F-.js";import"./iconLoader-DM9cpQfs.js";import"./Switch-BLiwMPf9.js";import"./CompositeRoot-BjCOeqd9.js";import"./TimePicker-Bsm_J9aG.js";import"./CollapsiblePanel-BDI3hYad.js";import"./error-Cf_kxNf8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-wwBOvirA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
