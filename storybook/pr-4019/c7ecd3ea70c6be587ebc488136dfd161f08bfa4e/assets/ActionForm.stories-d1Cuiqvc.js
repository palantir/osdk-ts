import{j as t,g as n}from"./iframe-1Dw8hxFb.js";import{A as r}from"./action-form-BXY4_xmo.js";import"./preload-helper-CV62D7uV.js";import"./DropdownField-BQ7eO3O0.js";import"./debounce-aPhAAe4A.js";import"./useOsdkClient-B0vBm4Kq.js";import"./index-BA__U3Gv.js";import"./Input-DAIYzExG.js";import"./useBaseUiId-D9Uc1gUI.js";import"./useControlled-BPQdQUzw.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./PopoverPopup-UQJaLJOh.js";import"./InternalBackdrop-DfOcQBOz.js";import"./composite-DMMpwO4Y.js";import"./index-CZwrVmPB.js";import"./getDisabledMountTransitionStyles-LDeu4Eg7.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./tick-DkycAfLr.js";import"./svgIconContainer-D7jaIK1U.js";import"./small-cross-BTH7BlRY.js";import"./search-D_WMSsbB.js";import"./cross-D8760vWj.js";import"./useValueChanged-CY-MG59r.js";import"./getPseudoElementBounds-BR8haHch.js";import"./CompositeItem-wJjKayF5.js";import"./makeExternalStore-BxvWPf6c.js";import"./BaseForm-DSOeYAdD.js";import"./ActionButton-JzwOBgff.js";import"./Button-Dz_i3O8s.js";import"./SkeletonBar-JCt3RZbD.js";import"./Tooltip-Cuzk6KX0.js";import"./info-sign-B3CR4864.js";import"./chevron-up-TnAUDv3K.js";import"./chevron-down-CctmHm9l.js";import"./useEventCallback-Ba_Pm_qQ.js";import"./iconLoader-Ce5qQI9t.js";import"./Switch-DUn939hP.js";import"./CompositeRoot-Td0rk9fp.js";import"./TimePicker-D2YSHpsM.js";import"./CollapsiblePanel-BdgCVUfb.js";import"./error-CQRvTwte.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DttttaWM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
