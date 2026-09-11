import{j as t,g as n}from"./iframe-BOlAF3V1.js";import{A as r}from"./action-form-bKIOfTcC.js";import"./preload-helper-B8-M1e1R.js";import"./DropdownField-DLvbQCQI.js";import"./debounce-CFrhvngH.js";import"./useOsdkClient-BgqOjygd.js";import"./index-DHGHpbde.js";import"./Input-DPiHLqc9.js";import"./useBaseUiId-DKEtUdQs.js";import"./useControlled-XB4dOcfe.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./PopoverPopup-ISkaWBxN.js";import"./InternalBackdrop-jjkmgKoA.js";import"./composite-uQCx7Ami.js";import"./index-VFcxoHMB.js";import"./getDisabledMountTransitionStyles-BU9dKP1z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./tick-BB9vOuei.js";import"./svgIconContainer-BI7oIE-s.js";import"./small-cross-DwQ2wey-.js";import"./search-dtRuG4ZW.js";import"./cross-4uTXI33L.js";import"./useValueChanged-DlyBj6rd.js";import"./getPseudoElementBounds-Bzk92_UN.js";import"./CompositeItem-DUqi3n0Z.js";import"./makeExternalStore-WrNjm8L9.js";import"./BaseForm-BK0EY24c.js";import"./ActionButton-D_sarqsj.js";import"./Button-C_Kq6X6A.js";import"./SkeletonBar-5GsvCwd_.js";import"./Tooltip-ncr-ughp.js";import"./info-sign-DEMGBz8P.js";import"./chevron-up-CZxdzJsY.js";import"./chevron-down-1Vj4zZ-s.js";import"./useEventCallback-CMYz6_v4.js";import"./iconLoader-DmYM2jJL.js";import"./CompositeRoot-BwIZsC1Y.js";import"./Switch-DSYv4-iL.js";import"./TimePicker-DeBaaI7U.js";import"./CollapsiblePanel-CvEpNxRR.js";import"./error-mE4pvPha.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCE-Yi3C.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
