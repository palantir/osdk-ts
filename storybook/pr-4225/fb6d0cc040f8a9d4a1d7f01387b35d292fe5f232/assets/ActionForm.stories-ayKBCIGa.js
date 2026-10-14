import{j as t,g as n}from"./iframe-qsGhK2hq.js";import{A as r}from"./action-form-C8VewUDJ.js";import"./preload-helper-Dwtn-olX.js";import"./DropdownField-BOO-rrLR.js";import"./debounce-C8hPQAd_.js";import"./useOsdkClient-BSM4PxEw.js";import"./index-CajyUV5R.js";import"./Input-Czcl16E9.js";import"./useBaseUiId-BW-cbd-G.js";import"./useControlled-j-IY9Fng.js";import"./index-eqMoAQQt.js";import"./index-DEfkT-Bn.js";import"./PopoverPopup-Cacp8CjB.js";import"./InternalBackdrop-Bm1UVwp8.js";import"./composite-bfuNMaa5.js";import"./index-CyGx0SVK.js";import"./getDisabledMountTransitionStyles-C0XnpXFp.js";import"./ToolbarRootContext-BW1cRghw.js";import"./tick-BtVIuPON.js";import"./svgIconContainer-DZkDzvg0.js";import"./small-cross-DURYfzaP.js";import"./search-BylB4pvS.js";import"./cross-BtcvP4ej.js";import"./useValueChanged-uDhMfoFi.js";import"./getPseudoElementBounds-hxionTdV.js";import"./CompositeItem-DKwC-xxe.js";import"./makeExternalStore-DSB7eaqh.js";import"./BaseForm-CCXdWdH2.js";import"./ActionButton-DoivhFaa.js";import"./Button-DZOWyAnJ.js";import"./SkeletonBar-CSvI3jf6.js";import"./Tooltip-CB45Hw6t.js";import"./info-sign-CZxm_sED.js";import"./chevron-up-DgggHDT9.js";import"./chevron-down-Dy2G7ibG.js";import"./useEventCallback-DfezmX3F.js";import"./iconLoader-CLprCX4Z.js";import"./Switch-DkqLgXLy.js";import"./CompositeRoot-BUey8svy.js";import"./TimePicker-BmM1XzTP.js";import"./CollapsiblePanel-BzesRv68.js";import"./error-BE1KHtOw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cus8kp2l.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
