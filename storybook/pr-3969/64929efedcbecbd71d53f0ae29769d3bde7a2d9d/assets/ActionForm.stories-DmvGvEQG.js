import{j as t,g as n}from"./iframe-Cha5bzcQ.js";import{A as r}from"./action-form-DfgNVeWz.js";import"./preload-helper-DTIBEWF3.js";import"./DropdownField-CLg5FybE.js";import"./debounce-CCWjtmn1.js";import"./useOsdkClient-BW0sTjCm.js";import"./index-Bm3NhGlH.js";import"./Input-CS3x1fIq.js";import"./useBaseUiId-CoAf4zJ1.js";import"./useControlled-BsFUux1R.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./PopoverPopup-DLpPXX4a.js";import"./InternalBackdrop-5-0DlwQk.js";import"./composite-DwMGYBdi.js";import"./index-BLVvXBm0.js";import"./getDisabledMountTransitionStyles-DtsqVZlu.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./tick-ADT_jvRp.js";import"./svgIconContainer-DA_Ed81f.js";import"./small-cross-Cqpx81EU.js";import"./search-LEzBZeqH.js";import"./cross-sYD9GiNz.js";import"./useValueChanged-DX1fsVrr.js";import"./getPseudoElementBounds-BL7IKUOX.js";import"./CompositeItem-CI63tMYo.js";import"./makeExternalStore-DIkaw39a.js";import"./BaseForm-BsUahxcm.js";import"./ActionButton-DQjspSLx.js";import"./Button-KiGmPYx_.js";import"./SkeletonBar-B6h9Ova2.js";import"./Tooltip-COCG5jN8.js";import"./info-sign-Dd2tVR_q.js";import"./chevron-up-8p9sc37z.js";import"./chevron-down-BImkdPvb.js";import"./useEventCallback-C_dAqdfF.js";import"./iconLoader-ByFPY4Fu.js";import"./CompositeRoot-BBj7b1_y.js";import"./Switch-CiLiZHWi.js";import"./TimePicker-BR__JV7d.js";import"./CollapsiblePanel-Dal__8LV.js";import"./error-JfmuoEvN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5Xu_aVjO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
