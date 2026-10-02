import{j as t,g as n}from"./iframe-Bjs833GT.js";import{A as r}from"./action-form-2RhUsePC.js";import"./preload-helper-BlVzQ63h.js";import"./DropdownField-CCWswJAt.js";import"./debounce-BQr-vi9c.js";import"./useOsdkClient-Bk2k7B_F.js";import"./index-ouW-uxFy.js";import"./Input-jDIiSSPg.js";import"./useBaseUiId-azhLq6E8.js";import"./useControlled-T6eskrKs.js";import"./index-Cd4CH7YJ.js";import"./index-BIIN4O4s.js";import"./PopoverPopup-D62GG8Vu.js";import"./InternalBackdrop-CSh59UaV.js";import"./composite-DAp8GgCU.js";import"./index-gqB7KI61.js";import"./getDisabledMountTransitionStyles-DbnX7M-z.js";import"./ToolbarRootContext-Gv05lgLU.js";import"./tick-ujL-DBFL.js";import"./svgIconContainer-B50GNB1l.js";import"./small-cross-4PvqsLte.js";import"./search-Bz3i30zB.js";import"./cross-odZi7HLt.js";import"./useValueChanged-BcoiLIU-.js";import"./getPseudoElementBounds-BYukSd76.js";import"./CompositeItem-BOsNn8o6.js";import"./makeExternalStore-DPdJKiEp.js";import"./BaseForm-CPcIerlv.js";import"./ActionButton-BV_FUyjV.js";import"./Button-Bi0CmGS9.js";import"./SkeletonBar-COXh_K_A.js";import"./Tooltip-Bjp4iv0K.js";import"./info-sign-5lLiCkJE.js";import"./chevron-up-GvP0eTV7.js";import"./chevron-down-DSKsXuZi.js";import"./useEventCallback-DAOuva_s.js";import"./iconLoader-KTdQP5sO.js";import"./Switch-rwp6lEgA.js";import"./CompositeRoot-EKerA01W.js";import"./TimePicker-BHg1KT5x.js";import"./CollapsiblePanel-CEYd-Yeh.js";import"./error-D5mhWRkN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CZSiJ0-9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
