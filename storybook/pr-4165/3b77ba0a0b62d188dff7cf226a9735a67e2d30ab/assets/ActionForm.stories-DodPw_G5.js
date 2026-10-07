import{j as t,g as n}from"./iframe-DX49BiZ-.js";import{A as r}from"./action-form-DV1iyht0.js";import"./preload-helper-9LHBCYVI.js";import"./DropdownField-iEi1_u7m.js";import"./debounce-Bmue7bGU.js";import"./useOsdkClient-DE7ajC3A.js";import"./index-DxuHGCjB.js";import"./Input-BQDPJQM6.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./useControlled-C31TKFPE.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./PopoverPopup-CcyqtV2P.js";import"./InternalBackdrop-arkfzs0p.js";import"./composite-BTvCmLum.js";import"./index-Bdq2wKWL.js";import"./getDisabledMountTransitionStyles-DM4O4Z57.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./tick-kBh_PFVS.js";import"./svgIconContainer-B548BSI_.js";import"./small-cross-DOgxSwsw.js";import"./search-D15_q6tD.js";import"./cross-CauetHLv.js";import"./useValueChanged-oS_NGm3B.js";import"./getPseudoElementBounds-Dk11viJV.js";import"./CompositeItem-1DFf-U3D.js";import"./makeExternalStore-Ckt0eied.js";import"./BaseForm-CZiAUdRG.js";import"./ActionButton-fCGjoV2h.js";import"./Button-RYY6ZBF7.js";import"./SkeletonBar-MYvuqKYn.js";import"./Tooltip-CokKdHnx.js";import"./info-sign-Da9FekYf.js";import"./chevron-up-DAVFCRMo.js";import"./chevron-down-CPeorV8q.js";import"./useEventCallback-GV-Pgizz.js";import"./iconLoader-DukMIszg.js";import"./Switch-CPo-c49R.js";import"./CompositeRoot-C4mjLNI7.js";import"./TimePicker-C2UosAq-.js";import"./CollapsiblePanel-CofaTKq1.js";import"./error-DKDHu63B.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DxWj1HC0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
