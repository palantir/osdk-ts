import{j as t,g as n}from"./iframe-BfxMX6cT.js";import{A as r}from"./action-form-DFnux7sb.js";import"./preload-helper-BPDao22J.js";import"./DropdownField-D9jSS7VG.js";import"./debounce-BMvGLHn1.js";import"./useOsdkClient-B0mdKYcq.js";import"./index-D5QdHG6c.js";import"./Input-C-zjcWJd.js";import"./useBaseUiId-Diys5Rd8.js";import"./useControlled-AEJbE5Jc.js";import"./index-CgOKnRwH.js";import"./index-DGcqs1ai.js";import"./PopoverPopup-BTJRWa40.js";import"./InternalBackdrop-CzfUVdiw.js";import"./composite-CX7YV8L_.js";import"./index-CxMUUWdA.js";import"./getDisabledMountTransitionStyles-CUDtZPwG.js";import"./ToolbarRootContext-DYeN6dWB.js";import"./tick-BZki_9Xu.js";import"./svgIconContainer-B11i6ssl.js";import"./small-cross-DukaMdQz.js";import"./search-D1ZDVnFF.js";import"./cross-BQzi9cCY.js";import"./useValueChanged-MAwDQy-M.js";import"./getPseudoElementBounds-CDkHDgNY.js";import"./CompositeItem-BPbSYDgv.js";import"./makeExternalStore-Cp6FC4H6.js";import"./BaseForm-WEpPrWTM.js";import"./ActionButton-DDdXpm0C.js";import"./Button-4wSek2R3.js";import"./SkeletonBar-CcSf93cH.js";import"./Tooltip-CALVvbNy.js";import"./info-sign-ChJvsPvk.js";import"./chevron-up-DXYJxj0k.js";import"./chevron-down-3tdgVjjI.js";import"./useEventCallback-CBWmqZQL.js";import"./iconLoader-BH9jo64C.js";import"./Switch-BWm4hs8e.js";import"./CompositeRoot-BnpeQnUg.js";import"./TimePicker-CesO8dOb.js";import"./CollapsiblePanel-DC0pzIEf.js";import"./error-Cw0OZsfU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DLVxiL_Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
