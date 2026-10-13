import{j as t,g as n}from"./iframe-DTTjhdqf.js";import{A as r}from"./action-form-CnnzRK3F.js";import"./preload-helper-DLuwwicB.js";import"./DropdownField-7-WH0W2E.js";import"./debounce-DybENE3y.js";import"./useOsdkClient-gEWansJz.js";import"./index-C_u0ZD76.js";import"./Input-DIq0Mf7R.js";import"./useBaseUiId-DAXCLwKK.js";import"./useControlled-DnFxapfF.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./PopoverPopup-B67nRi_h.js";import"./InternalBackdrop-DfoV1fwg.js";import"./composite-DmV5qlv-.js";import"./index-V7CuNiQt.js";import"./getDisabledMountTransitionStyles-2dTRJBXv.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./tick-CjabrPw4.js";import"./svgIconContainer-BQTxrAHk.js";import"./small-cross-q1eH4ZRy.js";import"./search-DqqzOunc.js";import"./cross-Biqxkz0W.js";import"./useValueChanged-hEMYJH-e.js";import"./getPseudoElementBounds-Ddv_miud.js";import"./CompositeItem-NevsqKCs.js";import"./makeExternalStore-FJoYAOnh.js";import"./BaseForm-CymGyX8G.js";import"./ActionButton-Be-L3Hsv.js";import"./Button-CVsxv-I0.js";import"./SkeletonBar-CkQh5tX-.js";import"./Tooltip-CYAeZ-OK.js";import"./info-sign-CvCA1f0_.js";import"./chevron-up-Bgd0bC6g.js";import"./chevron-down-DMQn8YNS.js";import"./useEventCallback-D0JHLFLo.js";import"./iconLoader-BBgp9EhI.js";import"./Switch-BnpSI-id.js";import"./CompositeRoot-C8ZgTfhF.js";import"./TimePicker-SLNTVodU.js";import"./CollapsiblePanel-BLwcFyFu.js";import"./error-9LOJa28H.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVdsAVYy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
