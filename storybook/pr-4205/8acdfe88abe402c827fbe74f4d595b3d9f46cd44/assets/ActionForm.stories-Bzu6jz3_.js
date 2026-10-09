import{j as t,g as n}from"./iframe-CMfq1HPL.js";import{A as r}from"./action-form-ChffbgWC.js";import"./preload-helper-DoN82JnL.js";import"./DropdownField-6o7zN8fP.js";import"./debounce-BkXoP2me.js";import"./useOsdkClient-CosiI0hK.js";import"./index-ZtSJidyR.js";import"./Input-DAfCa_F_.js";import"./useBaseUiId-Doagaslz.js";import"./useControlled-DxbWxp5f.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./PopoverPopup-cKWzGieP.js";import"./InternalBackdrop-Dc-khzij.js";import"./composite-BMLB8REs.js";import"./index-C4fS6aHe.js";import"./getDisabledMountTransitionStyles-DqkNlWWo.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./tick-DhgpUjs3.js";import"./svgIconContainer-BrnRNdI4.js";import"./small-cross-CdfUGob6.js";import"./search-CFS1aLLr.js";import"./cross-DI771Rnq.js";import"./useValueChanged-DEnQRlze.js";import"./getPseudoElementBounds-CQ5YRcHT.js";import"./CompositeItem-4nYPF74E.js";import"./makeExternalStore-DbDNXFhx.js";import"./BaseForm-6ujz3w_D.js";import"./ActionButton-r16LsqMr.js";import"./Button-D9k27imK.js";import"./SkeletonBar-GGSFl_LP.js";import"./Tooltip-oJ90YrUX.js";import"./info-sign-C1o0PX5V.js";import"./chevron-up-CchJ2ft7.js";import"./chevron-down-BB1rr6dV.js";import"./useEventCallback-k47TyR1L.js";import"./iconLoader-B4iCSoWx.js";import"./Switch-CoFFp9St.js";import"./CompositeRoot-BjEAhuda.js";import"./TimePicker-COBAgEZI.js";import"./CollapsiblePanel-DYiqZ6YX.js";import"./error-CdY5cnSm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CzIhdDBm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
