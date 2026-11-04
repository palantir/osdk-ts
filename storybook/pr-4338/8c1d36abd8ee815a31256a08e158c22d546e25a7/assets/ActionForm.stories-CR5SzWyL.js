import{j as t,g as n}from"./iframe-BdttGBHS.js";import{A as r}from"./action-form-BGeAgWMG.js";import"./preload-helper-D52nztRO.js";import"./DropdownField-C8hF0Jpu.js";import"./debounce-Qe34k2W1.js";import"./useOsdkClient-Bl7ygr-X.js";import"./index-fJrMVTua.js";import"./Input-DYv89jnk.js";import"./useBaseUiId-TpOnm0ph.js";import"./useControlled-BCWd1xNc.js";import"./index-DUfIyUAM.js";import"./index-CGhVKo7Q.js";import"./PopoverPopup-DwBF8-Mm.js";import"./InternalBackdrop-BKguS2Kk.js";import"./composite-D2FhvqPV.js";import"./index-_owIjaTD.js";import"./getDisabledMountTransitionStyles-B8ZFHD1C.js";import"./ToolbarRootContext-CKT8QuMl.js";import"./tick-BLwK45wE.js";import"./svgIconContainer-d3TxlLsS.js";import"./small-cross-BJGr41n-.js";import"./search-SHaXv7OY.js";import"./cross-B_ladZW0.js";import"./useValueChanged-D80KuDSO.js";import"./getPseudoElementBounds-CrUTQ61q.js";import"./CompositeItem-BUi6sRIo.js";import"./makeExternalStore-Ds9BSHVT.js";import"./BaseForm-WuP4SNVp.js";import"./ActionButton-Dmk_UwrT.js";import"./Button-DZ1LePF0.js";import"./SkeletonBar-qQ9RfzOd.js";import"./Tooltip-Ca055HLw.js";import"./info-sign-BOQipy_y.js";import"./chevron-up-CikR5MHm.js";import"./chevron-down-CX5I5Ird.js";import"./useEventCallback-4P5Ay0yC.js";import"./iconLoader-BjmoNjOI.js";import"./Switch-CgV5xhxT.js";import"./CompositeRoot-BXBOvLy7.js";import"./TimePicker-BS-icVQq.js";import"./CollapsiblePanel-C84l9NlQ.js";import"./error-CHI3XqLV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BQHwLSj1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
