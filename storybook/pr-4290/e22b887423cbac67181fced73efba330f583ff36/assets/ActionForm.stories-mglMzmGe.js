import{j as t,g as n}from"./iframe-CWg4NKfU.js";import{A as r}from"./action-form-Bm2AOk6N.js";import"./preload-helper-CbUGxpFK.js";import"./DropdownField-D5fuGTjd.js";import"./debounce-gYlsUq6V.js";import"./useOsdkClient-DkhSPEoO.js";import"./index-BqvDfMBr.js";import"./Input-CkLJO43y.js";import"./useBaseUiId-DspZ6BgH.js";import"./useControlled-CxeE38RI.js";import"./index-BwmCKmIG.js";import"./index-Dcq7c99I.js";import"./PopoverPopup-DhNWwJ6-.js";import"./InternalBackdrop-DmUAlLlN.js";import"./composite-BZR9RT0J.js";import"./index-Du_LEjCQ.js";import"./getDisabledMountTransitionStyles-CEpea57p.js";import"./ToolbarRootContext-DB3lOv4Z.js";import"./tick-CXe62fkm.js";import"./svgIconContainer-CfhV0gWc.js";import"./small-cross-BOD3G0f7.js";import"./search-Csa8UJRl.js";import"./cross-C4B5H0O1.js";import"./useValueChanged-BTUZT3Bs.js";import"./getPseudoElementBounds-gNG5aSRj.js";import"./CompositeItem-B-7NNP1P.js";import"./makeExternalStore-PjLZ2rt4.js";import"./BaseForm-BF4AnrWo.js";import"./ActionButton-B764oDl2.js";import"./Button-BMAG39_Z.js";import"./SkeletonBar-CQQLBMCI.js";import"./Tooltip-Dc8Bmckm.js";import"./info-sign-CtE3EabG.js";import"./chevron-up-GSj8drqA.js";import"./chevron-down-GiI9wTRT.js";import"./useEventCallback-DypMXnSj.js";import"./iconLoader-ru_Famlw.js";import"./Switch-Beun9R1_.js";import"./CompositeRoot-D9K-LMLC.js";import"./TimePicker-CRT_5j1L.js";import"./CollapsiblePanel-BTrc7yy9.js";import"./error-DpR2m3gK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cl-t5p_W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
