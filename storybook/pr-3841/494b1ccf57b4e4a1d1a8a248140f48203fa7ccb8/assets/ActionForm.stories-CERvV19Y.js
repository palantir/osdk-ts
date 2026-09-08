import{j as t,g as n}from"./iframe-hmluRZS5.js";import{A as r}from"./action-form-sT0XU2ID.js";import"./preload-helper-DlYZq8_X.js";import"./DropdownField-D2ft0pJb.js";import"./debounce-DA5oIsgA.js";import"./useOsdkClient-CWJVsVp6.js";import"./index-DlmwBpMI.js";import"./Input-uUNDzlAG.js";import"./useBaseUiId-Ce6hVQyf.js";import"./useControlled-CWtQ2etk.js";import"./index-eMB_Bo_f.js";import"./index-Bc2sNs6_.js";import"./PopoverPopup-CFU_wLXE.js";import"./InternalBackdrop-Di9g7CqC.js";import"./composite-Cz3P8fmc.js";import"./index-BK3acCXu.js";import"./getDisabledMountTransitionStyles-DeVJ0eo9.js";import"./ToolbarRootContext-BviESwyl.js";import"./tick-QOD6m0sZ.js";import"./svgIconContainer-Cr9UBTnz.js";import"./small-cross-DpGTHJxS.js";import"./search-CyNzQTjU.js";import"./cross-CF7Ek918.js";import"./useValueChanged-CzefFM-U.js";import"./getPseudoElementBounds-DrhntXY7.js";import"./CompositeItem-Bger7i4K.js";import"./makeExternalStore-DOooQeVW.js";import"./BaseForm-ZTogS8ny.js";import"./ActionButton-BKy_pzqj.js";import"./Button-UcoIXCLv.js";import"./SkeletonBar-BBfDZCsO.js";import"./Tooltip-CkY5JgKY.js";import"./info-sign--jseN0o1.js";import"./chevron-up-DmSp0BEp.js";import"./chevron-down-BV1ESAvw.js";import"./useEventCallback-BdILOtut.js";import"./iconLoader-Cbab-Uoa.js";import"./CompositeRoot-BlbBabfC.js";import"./Switch-BSsrBfk9.js";import"./TimePicker-CWKqhPmx.js";import"./CollapsiblePanel-D12S4ZDi.js";import"./error-B495uG_z.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BsviGqu5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
