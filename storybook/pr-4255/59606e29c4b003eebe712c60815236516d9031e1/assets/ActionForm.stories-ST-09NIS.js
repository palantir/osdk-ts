import{j as t,g as n}from"./iframe-B_i7Ph77.js";import{A as r}from"./action-form-Cl-jmO6T.js";import"./preload-helper-DvjJ0SzX.js";import"./DropdownField-DuoCpizZ.js";import"./debounce-oLXmJ61g.js";import"./useOsdkClient-DdwrseQe.js";import"./index-COajzjZ8.js";import"./Input-Dl5sH1Q7.js";import"./useBaseUiId-CW69tl4R.js";import"./useControlled-CPBNOwGg.js";import"./index-BfVetZX7.js";import"./index-CKxO46Y-.js";import"./PopoverPopup-DZqF5shI.js";import"./InternalBackdrop-BWf_EDHi.js";import"./composite-uqQjgKuY.js";import"./index-ChNkp7Fd.js";import"./getDisabledMountTransitionStyles-1rLXg44K.js";import"./ToolbarRootContext-0-u9G15j.js";import"./tick-zFsHhUQl.js";import"./svgIconContainer-F3PywaHC.js";import"./small-cross-B6VZzdKR.js";import"./search-Ci82BY-M.js";import"./cross-r8gHAdxN.js";import"./useValueChanged-BtgVct8c.js";import"./getPseudoElementBounds-aFk6WU6_.js";import"./CompositeItem-EZxEWVoS.js";import"./makeExternalStore-Bzou7Lqu.js";import"./BaseForm-D_p9wH7s.js";import"./ActionButton-BElQCvpZ.js";import"./Button-D37UVdN3.js";import"./SkeletonBar-BE3AUhJe.js";import"./Tooltip-geVxKkMd.js";import"./info-sign-Cggrevsp.js";import"./chevron-up-DOh347jk.js";import"./chevron-down-BOncWiCm.js";import"./useEventCallback-C6UUjjRV.js";import"./iconLoader-BaL3Uvzw.js";import"./Switch-CEbrAga5.js";import"./CompositeRoot-WVP3R4rv.js";import"./TimePicker-Dsc9Mavq.js";import"./CollapsiblePanel-t-tCNPWx.js";import"./error-DMPOuvoW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGIAIiU_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
