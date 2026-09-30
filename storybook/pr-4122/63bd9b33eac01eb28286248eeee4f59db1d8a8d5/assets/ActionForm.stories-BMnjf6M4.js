import{j as t,g as n}from"./iframe-CUZRoNNv.js";import{A as r}from"./action-form-DmpgIdO9.js";import"./preload-helper-CrAnAkNd.js";import"./DropdownField-ChFA6G-L.js";import"./debounce-0YKxs7_M.js";import"./useOsdkClient-BzUYs6XV.js";import"./index-DyJF2RgL.js";import"./Input-Db-zmbeF.js";import"./useBaseUiId-BjYXt-Y8.js";import"./useControlled-SgSnNk_-.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./PopoverPopup-VaXrb5EK.js";import"./InternalBackdrop-B1oT2L8M.js";import"./composite-LGakJTZC.js";import"./index-DyQ1LTEo.js";import"./getDisabledMountTransitionStyles-CKffQk5p.js";import"./ToolbarRootContext-8UU7wnms.js";import"./tick-BB3AulHS.js";import"./svgIconContainer-grpv7WkD.js";import"./small-cross-DkU4qrA6.js";import"./search-XLYepbmJ.js";import"./cross-CSe3kma4.js";import"./useValueChanged-QEA79Kem.js";import"./getPseudoElementBounds-C_t6F_mK.js";import"./CompositeItem-BcoPKNgT.js";import"./makeExternalStore-BolJxNvY.js";import"./BaseForm-D_5T2jlx.js";import"./ActionButton-Fv9YojAp.js";import"./Button-C0zF-FQF.js";import"./SkeletonBar-Cs_FVwUF.js";import"./Tooltip-DSblGONh.js";import"./info-sign-Cqf3kJr5.js";import"./chevron-up-B7QWA6ZV.js";import"./chevron-down-GCVDTzTT.js";import"./useEventCallback-CRtaVkZD.js";import"./iconLoader-BmgzQ5gV.js";import"./Switch-CV_ovCE-.js";import"./CompositeRoot-CGLJgUzA.js";import"./TimePicker-Ir7yrRJj.js";import"./CollapsiblePanel-CQdqgiNL.js";import"./error-DiHuZvPy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CXfpKFLb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
