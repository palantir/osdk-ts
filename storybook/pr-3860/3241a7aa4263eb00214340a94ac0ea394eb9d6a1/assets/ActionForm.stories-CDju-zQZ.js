import{j as t,g as n}from"./iframe-gHIh_ABY.js";import{A as r}from"./action-form-CYER81-z.js";import"./preload-helper-C--wqxNR.js";import"./DropdownField-DoF6Yrgi.js";import"./debounce-BCvtfNN5.js";import"./useOsdkClient-BkL_6XFG.js";import"./index-DyPMxe-T.js";import"./Input-CphmVuHr.js";import"./useBaseUiId-dqf5kUOq.js";import"./useControlled-C8OoR1Ph.js";import"./index-CWxda7K-.js";import"./index-D1LhnjWM.js";import"./PopoverPopup-BMZcpAvB.js";import"./InternalBackdrop-DOc9dm1o.js";import"./composite-G9H6ILMG.js";import"./index-C34ZHf-K.js";import"./getDisabledMountTransitionStyles-BBrgI6Lb.js";import"./ToolbarRootContext-BaCzfuCb.js";import"./tick-BRMzqiwr.js";import"./svgIconContainer-BsQinfdF.js";import"./small-cross-BwADiSMm.js";import"./search-Blg9RF01.js";import"./cross-DecwR9UF.js";import"./useValueChanged-BBNrWnU1.js";import"./getPseudoElementBounds-AK_MaNof.js";import"./CompositeItem-ChBkH7yO.js";import"./makeExternalStore-DdIdXh98.js";import"./BaseForm-BS9J9H5D.js";import"./ActionButton-sMHQZDfc.js";import"./Button-bbhva_Wr.js";import"./SkeletonBar-BEzmBAg7.js";import"./Tooltip-BVVrGeU9.js";import"./info-sign-BrgHPmK4.js";import"./chevron-up-2ZPJJ6TC.js";import"./chevron-down-C9sYZ9oi.js";import"./useEventCallback-E1OVmXif.js";import"./iconLoader-kYgFavdn.js";import"./CompositeRoot-BfFT4DLO.js";import"./Switch-CaPYU7w_.js";import"./TimePicker-tWvB1TBm.js";import"./CollapsiblePanel-DgUiEhUm.js";import"./error-Bs-UYVj5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DoSr47Bs.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
