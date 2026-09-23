import{j as t,g as n}from"./iframe-DoZpKAuy.js";import{A as r}from"./action-form-CYM0U-tJ.js";import"./preload-helper-VWDIqFcw.js";import"./DropdownField-5YM5_cwC.js";import"./debounce-TKcLqlSn.js";import"./useOsdkClient-BD-YRINd.js";import"./index-DI9gHjQw.js";import"./Input-DA4z6leT.js";import"./useBaseUiId-DGOpwqqR.js";import"./useControlled-Dtv5pYI4.js";import"./index-CJ3t3vUm.js";import"./index-D3VbgQBY.js";import"./PopoverPopup-C_2AHMFH.js";import"./InternalBackdrop-CXaIk_fc.js";import"./composite-BwuXi3Qd.js";import"./index-DsGBi-gt.js";import"./getDisabledMountTransitionStyles-DiIXvqNo.js";import"./ToolbarRootContext-CkYvN6qQ.js";import"./tick-ChJIONOw.js";import"./svgIconContainer-DaZ9l-Xt.js";import"./small-cross-B5Wvka-s.js";import"./search-D2oluobe.js";import"./cross-BOIWmSa8.js";import"./useValueChanged-D34j0py5.js";import"./getPseudoElementBounds-DVZ5aDyN.js";import"./CompositeItem-JZBFttqy.js";import"./makeExternalStore-A-gxfiQg.js";import"./BaseForm-BoxBMbfR.js";import"./ActionButton-rr5yoRIG.js";import"./Button-Bx4A8oJL.js";import"./SkeletonBar-COaLIR3K.js";import"./Tooltip-B3gh8s19.js";import"./info-sign-6XKDcVyB.js";import"./chevron-up-ChZQ0y89.js";import"./chevron-down-Chs2Nvxl.js";import"./useEventCallback-q8sTQiWB.js";import"./iconLoader-7YU_qH5j.js";import"./Switch-Bekuh1l6.js";import"./CompositeRoot-DPPeigpD.js";import"./TimePicker-BaMFyCv4.js";import"./CollapsiblePanel-CjPIi1du.js";import"./error-vQUKN10-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-wa8YRQpQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
