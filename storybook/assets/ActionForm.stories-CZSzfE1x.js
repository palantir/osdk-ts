import{j as t,g as n}from"./iframe-DYtUFfpV.js";import{A as r}from"./action-form-xd_7cGZ-.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-0kxHenat.js";import"./debounce-DoOyh8jW.js";import"./useOsdkClient-BdXrEp_e.js";import"./index-B_B03ZgQ.js";import"./Input-Rz5gB3-F.js";import"./useBaseUiId-DGMDSr1w.js";import"./useControlled-CTXIF64s.js";import"./index-ByCETvNt.js";import"./index-DLk7paK9.js";import"./PopoverPopup-DZoDE-qB.js";import"./InternalBackdrop-Cq3aXNy6.js";import"./composite-5PJSFBR3.js";import"./index-Dh6PcIHr.js";import"./getDisabledMountTransitionStyles-BbPZ6Y-H.js";import"./ToolbarRootContext-DcFxLx-B.js";import"./tick-C7X186oI.js";import"./svgIconContainer-DFzm68WI.js";import"./small-cross-DUMNP9nm.js";import"./search-DZ2fRThm.js";import"./cross-BnbnB9qW.js";import"./useValueChanged-BXTPeGrG.js";import"./getPseudoElementBounds-BIAPaGxa.js";import"./CompositeItem-BjuvjbZw.js";import"./makeExternalStore-ByCDRZNg.js";import"./BaseForm-C2BYjfQC.js";import"./ActionButton-gd9T6Q6m.js";import"./Button-CBBF9I1J.js";import"./SkeletonBar-tfS1beTf.js";import"./Tooltip-BlCaFm9g.js";import"./info-sign-Ds-2JHgo.js";import"./chevron-up-BITAyD3g.js";import"./chevron-down-tphWLm1B.js";import"./useEventCallback-DGyohyoy.js";import"./iconLoader-BkL13zSZ.js";import"./Switch-k6CVGYG-.js";import"./CompositeRoot-B32B850V.js";import"./TimePicker-CytC8zxe.js";import"./CollapsiblePanel-DsmHbGwh.js";import"./error-B2G3Ssl-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSoHl_un.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
