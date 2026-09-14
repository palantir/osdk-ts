import{j as t,g as n}from"./iframe-Uo3dslN8.js";import{A as r}from"./action-form-B_YeKf9T.js";import"./preload-helper-Di20YyVw.js";import"./DropdownField-S1rKLw4k.js";import"./debounce-BaKAl05r.js";import"./useOsdkClient-CZ5jAc54.js";import"./index-DM2i2mIv.js";import"./Input-COrEd_bS.js";import"./useBaseUiId-BMW1tYuT.js";import"./useControlled-DxDhJC_G.js";import"./index-BjmUJLrE.js";import"./index-DNOgt9xG.js";import"./PopoverPopup-BHKbeMsS.js";import"./InternalBackdrop-Cawem0xc.js";import"./composite-CJL7rGjP.js";import"./index-AMq3qfnV.js";import"./getDisabledMountTransitionStyles-DjGcX-z1.js";import"./ToolbarRootContext-CpVoG4Hd.js";import"./tick-W4zHdn4i.js";import"./svgIconContainer-CCPA44UG.js";import"./small-cross-23YS3Wdy.js";import"./search-DMwUXAz4.js";import"./cross-CtSgYx1A.js";import"./useValueChanged-DKndpPjF.js";import"./getPseudoElementBounds-B1qmsDI-.js";import"./CompositeItem-CwindMm_.js";import"./makeExternalStore-BoTJ6suj.js";import"./BaseForm-GgHlKbXw.js";import"./ActionButton-C5Zbzrcj.js";import"./Button-CVEJXnPN.js";import"./SkeletonBar-hMMVmlwX.js";import"./Tooltip-B4ethV14.js";import"./info-sign-DpfE0BAm.js";import"./chevron-up-C9IrMgVb.js";import"./chevron-down-CCfCID7b.js";import"./useEventCallback-DuKH2Kse.js";import"./iconLoader-CgeoPFcn.js";import"./CompositeRoot-DydVLWDJ.js";import"./Switch-BrfWb0Ag.js";import"./TimePicker-D9Cson_-.js";import"./CollapsiblePanel-BMUw2sen.js";import"./error-Suxt282O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BYDhROpI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
