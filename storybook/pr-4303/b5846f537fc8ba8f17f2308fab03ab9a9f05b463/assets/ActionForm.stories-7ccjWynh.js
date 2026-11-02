import{j as t,g as n}from"./iframe-gvVvTYdX.js";import{A as r}from"./action-form-BimOdlHa.js";import"./preload-helper-C4B8pL_K.js";import"./DropdownField-CySas3qf.js";import"./debounce-NgHrS01x.js";import"./useOsdkClient-Bxmva0H0.js";import"./index-BKV8xI6r.js";import"./Input-B5s_ufnw.js";import"./useBaseUiId-fY3jSIio.js";import"./useControlled-Cz01Hj64.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./PopoverPopup-BLoCic10.js";import"./InternalBackdrop-CNqwZwO_.js";import"./composite-U12YfSVj.js";import"./index-DCXWz-bU.js";import"./getDisabledMountTransitionStyles-By9d2gS-.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./tick-DcPidvDM.js";import"./svgIconContainer-CbGtxYsB.js";import"./small-cross-BV4qub4t.js";import"./search-BpBkWvYy.js";import"./cross-DXV_E_3w.js";import"./useValueChanged-C3nivXet.js";import"./getPseudoElementBounds-VG4Ji2N1.js";import"./CompositeItem-Ceyb7lxq.js";import"./makeExternalStore-eDqNkvsc.js";import"./BaseForm-BHRBFttA.js";import"./ActionButton-BgSv7ShY.js";import"./Button-CM6iPOlW.js";import"./SkeletonBar-CVnxkGMs.js";import"./Tooltip-gD2N15mM.js";import"./info-sign-BFragFp4.js";import"./chevron-up-B4NFnp6f.js";import"./chevron-down-DNhCoDCr.js";import"./useEventCallback-DfimSMM1.js";import"./iconLoader-2I16RZr0.js";import"./Switch-hhIWzVUV.js";import"./CompositeRoot-BcFTMRAd.js";import"./TimePicker-DixeOTH8.js";import"./CollapsiblePanel-nOE5zCVh.js";import"./error-oahmhnhI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DQiolCAA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
