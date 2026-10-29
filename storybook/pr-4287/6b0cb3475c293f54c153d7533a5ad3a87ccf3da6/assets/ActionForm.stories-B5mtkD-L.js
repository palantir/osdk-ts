import{j as t,g as n}from"./iframe-B4MgyMWl.js";import{A as r}from"./action-form-Dbli2RJh.js";import"./preload-helper-BUOdkVYn.js";import"./DropdownField-ksl0RW3R.js";import"./debounce-CCX8N0To.js";import"./useOsdkClient-D1uuFUvl.js";import"./index-CWrwK-HJ.js";import"./Input-DyGREfir.js";import"./useBaseUiId-cePy-Fka.js";import"./useControlled-CqJ99-8o.js";import"./index-fmJhNd3L.js";import"./index-CyhRYA9d.js";import"./PopoverPopup-Cokuf9G4.js";import"./InternalBackdrop-DCdVc_fO.js";import"./composite-CAyP_TTE.js";import"./index-DqbVp-Pn.js";import"./getDisabledMountTransitionStyles-CXsfR7z_.js";import"./ToolbarRootContext-BOMUT60A.js";import"./tick-xz3SeBYf.js";import"./svgIconContainer-DSK9BMKz.js";import"./small-cross-DDNekb4S.js";import"./search-DD9Ps7Xi.js";import"./cross-DeZ5LgCs.js";import"./useValueChanged-Dv5oraiV.js";import"./getPseudoElementBounds-DxzYEc8w.js";import"./CompositeItem-Brr5mEPn.js";import"./makeExternalStore-DUbcYQez.js";import"./BaseForm-CnLoUTtB.js";import"./ActionButton-C6ToF_1u.js";import"./Button-CpaCdx-9.js";import"./SkeletonBar-cG_KH1yq.js";import"./Tooltip-D9C0Qo0s.js";import"./info-sign-6VX0Q5PB.js";import"./chevron-up-7jhO8h_Q.js";import"./chevron-down-ie3vWH8s.js";import"./useEventCallback-D3NXkfC-.js";import"./iconLoader-DbjSzz-B.js";import"./Switch-CalHPHyo.js";import"./CompositeRoot-B5mQ1tSS.js";import"./TimePicker-BrxGGT8F.js";import"./CollapsiblePanel-ECfDnot5.js";import"./error-6geuwXkd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DM07Q-qZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
