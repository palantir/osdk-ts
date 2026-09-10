import{j as t,g as n}from"./iframe-vnKEgnca.js";import{A as r}from"./action-form-DPovMe3L.js";import"./preload-helper-sQW1CADx.js";import"./DropdownField-VOlhddjk.js";import"./debounce-D-YcwjSi.js";import"./useOsdkClient-3N-DZ2Jr.js";import"./index-BeGfthlJ.js";import"./Input-CWIjEhtY.js";import"./useBaseUiId-CgxqfjcM.js";import"./useControlled-Bxc3bdV1.js";import"./index-fmSw06oW.js";import"./index-CFCh4JjT.js";import"./PopoverPopup-BTMMw79y.js";import"./InternalBackdrop-83r7I1RI.js";import"./composite-C9k3QAIL.js";import"./index-CcuQRhTx.js";import"./getDisabledMountTransitionStyles-BwHnrPvs.js";import"./ToolbarRootContext-CwAo2bG9.js";import"./tick-0FUkR9Gc.js";import"./svgIconContainer-NsUuck07.js";import"./small-cross-CUYeKhnX.js";import"./search-DSYVPSfx.js";import"./cross-_8csVoP1.js";import"./useValueChanged-CDaiOFJe.js";import"./getPseudoElementBounds-CHJP1wr0.js";import"./CompositeItem-1_Yzr1XW.js";import"./makeExternalStore-CcMSZMO7.js";import"./BaseForm-CD7CoKuI.js";import"./ActionButton-D-nwGdVx.js";import"./Button-28NdSEt3.js";import"./SkeletonBar-Dk4nJLO-.js";import"./Tooltip-Cj_Idruq.js";import"./info-sign-DzJGmVNQ.js";import"./chevron-up-DKN-imNl.js";import"./chevron-down-DEu7XuhT.js";import"./useEventCallback-Dfml-rlK.js";import"./iconLoader-R26ziiqq.js";import"./CompositeRoot-C3fvDz1z.js";import"./Switch-wwtid7CB.js";import"./TimePicker-VhZijR9u.js";import"./CollapsiblePanel-snp8kNHN.js";import"./error-BV36DzgX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dh0bq2dQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
