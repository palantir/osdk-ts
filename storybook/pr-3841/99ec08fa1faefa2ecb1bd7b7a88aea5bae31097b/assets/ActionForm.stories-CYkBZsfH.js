import{j as t,g as n}from"./iframe-B9azDZlz.js";import{A as r}from"./action-form-CAB1qW3w.js";import"./preload-helper-Bm0hX83b.js";import"./DropdownField-B0WGKaAs.js";import"./debounce-B2RJoylZ.js";import"./useOsdkClient-DfxUO55U.js";import"./index-Gnn4IAPK.js";import"./Input-6Xi2oRl5.js";import"./useBaseUiId-B5AQ3HFN.js";import"./useControlled-CIIQ6AdN.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./PopoverPopup-BoIWrT_I.js";import"./InternalBackdrop-CVYwGey5.js";import"./composite-DG0rNHFY.js";import"./index-0NY8KgBX.js";import"./getDisabledMountTransitionStyles-D26pQLY4.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./tick-BDEOlM-s.js";import"./svgIconContainer-BSqh8zzQ.js";import"./small-cross-BErTRTeO.js";import"./search-D-Pd3u3n.js";import"./cross-DH7Phj5l.js";import"./useValueChanged-YxrolQP8.js";import"./getPseudoElementBounds-DOsvVJTW.js";import"./CompositeItem-23Xg-PrO.js";import"./makeExternalStore-Sb074CVY.js";import"./BaseForm-CWFWc62w.js";import"./ActionButton-CtxrjN50.js";import"./Button-ByY1VR_F.js";import"./SkeletonBar-QxJNYOQi.js";import"./Tooltip-BiRF5TgT.js";import"./info-sign-D1zFVOuk.js";import"./chevron-up-9By6ydbO.js";import"./chevron-down-CDhI7Cg9.js";import"./useEventCallback-CKNYTi7U.js";import"./iconLoader-DcDWtIqB.js";import"./CompositeRoot-1CAO4-C5.js";import"./Switch-BcQlFmqN.js";import"./TimePicker-B4gGMotS.js";import"./CollapsiblePanel-BWH5sgwq.js";import"./error-B89KPxvz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCygmhUI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
