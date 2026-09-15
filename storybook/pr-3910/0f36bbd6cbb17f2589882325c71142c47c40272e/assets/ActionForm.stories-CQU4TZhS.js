import{j as t,g as n}from"./iframe-BJHQLm8B.js";import{A as r}from"./action-form-K86j021f.js";import"./preload-helper-DNJi6hnI.js";import"./DropdownField-BmtwaVlS.js";import"./debounce-DLKN_1JY.js";import"./useOsdkClient-DHzp8GFD.js";import"./index-BUqmovkS.js";import"./Input--rxzAq78.js";import"./useBaseUiId-DFBTpUkK.js";import"./useControlled-91vTGa_9.js";import"./index-CY3jAq3i.js";import"./index-BXhIsTqo.js";import"./PopoverPopup-VghyVGFq.js";import"./InternalBackdrop-Ddz1w5Zi.js";import"./composite-BjkOmkjK.js";import"./index-nUnNg1dx.js";import"./getDisabledMountTransitionStyles-CygFqHiI.js";import"./ToolbarRootContext-0Z3xHtAl.js";import"./tick-pYb3XQje.js";import"./svgIconContainer-CExwBPXa.js";import"./small-cross-BaIKTF8-.js";import"./search-CBF8qcQD.js";import"./cross-DyhJ0eVv.js";import"./useValueChanged-Cznn-vr_.js";import"./getPseudoElementBounds-CLRJGPDW.js";import"./CompositeItem-BhxoDlh7.js";import"./makeExternalStore-CZ09MAHK.js";import"./BaseForm-DiTZMq-2.js";import"./ActionButton-B06o1rGg.js";import"./Button-hiBWk-nL.js";import"./SkeletonBar-BE2-lLRV.js";import"./Tooltip-DzCNOI3d.js";import"./info-sign-dVsJ6yZU.js";import"./chevron-up-CxnX8a3a.js";import"./chevron-down-DOmpjpbt.js";import"./useEventCallback-Dk3ZagH_.js";import"./iconLoader-Cy7HZelF.js";import"./CompositeRoot-BoAD_eAE.js";import"./Switch-Bw_01chd.js";import"./TimePicker-ZYF8tGVv.js";import"./CollapsiblePanel-BzpOhWpv.js";import"./error-msvagv_9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQ4A9sKP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
