import{j as t,g as n}from"./iframe-rrq8MZm7.js";import{A as r}from"./action-form-CvcLqu0A.js";import"./preload-helper-g_e3lUw3.js";import"./DropdownField-Bn4EfPzq.js";import"./debounce-Dx1hyhVT.js";import"./useOsdkClient-vYsi5oFr.js";import"./index-DgF7SkuQ.js";import"./Input-DomtRdeE.js";import"./useBaseUiId-Ck0oWSaP.js";import"./useControlled-CFE1onYy.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./PopoverPopup-BjrmRx1j.js";import"./InternalBackdrop-wSSvokvJ.js";import"./composite-Dz23lKV_.js";import"./index-BHKoX9xi.js";import"./getDisabledMountTransitionStyles-DeyZi_sY.js";import"./ToolbarRootContext-BX6aviUc.js";import"./tick-DUzn1Cvr.js";import"./svgIconContainer-DzRNCFzx.js";import"./small-cross-Db8ph2CD.js";import"./search-HS8jOdU9.js";import"./cross-Dx39xAnI.js";import"./useValueChanged-ClOYFuvx.js";import"./getPseudoElementBounds-Xt__cUKT.js";import"./CompositeItem-CfvMX9u5.js";import"./makeExternalStore-Ce8SSisl.js";import"./BaseForm-CkGIgCoh.js";import"./ActionButton-CGA8JUAJ.js";import"./Button-CR0VLtCt.js";import"./SkeletonBar-DbqU4wRS.js";import"./Tooltip-CWYgwcpt.js";import"./info-sign-Di30jIjZ.js";import"./chevron-up-DVKUDI8L.js";import"./chevron-down-wVslH90M.js";import"./useEventCallback-BHSzBPQv.js";import"./iconLoader-BGCJotDM.js";import"./Switch-DFVZ9BN9.js";import"./CompositeRoot-ClJgtuze.js";import"./TimePicker-CPj3kXwr.js";import"./CollapsiblePanel-Rs1qW30d.js";import"./error-Bcjq0Lff.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CkwBt4Ou.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
