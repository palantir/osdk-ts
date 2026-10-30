import{j as t,g as n}from"./iframe-D3mBTfqd.js";import{A as r}from"./action-form-YvsiVq9I.js";import"./preload-helper-RhNKQ2Pa.js";import"./DropdownField-BFO3Yx-p.js";import"./debounce-8v_G0MM7.js";import"./useOsdkClient-BXgSuM8y.js";import"./index-DCS7OdDx.js";import"./Input-eLGPTS9w.js";import"./useBaseUiId-hynuT-IP.js";import"./useControlled-k1vl1-pB.js";import"./index-YNTwsynL.js";import"./index-Ch5DNylK.js";import"./PopoverPopup-BlPyX7uT.js";import"./InternalBackdrop-DNSxnLlU.js";import"./composite-BE_H9BAX.js";import"./index-yxRsWDJt.js";import"./getDisabledMountTransitionStyles-CltXDkvP.js";import"./ToolbarRootContext-DKBBgUjn.js";import"./tick-Bdbhcehw.js";import"./svgIconContainer-CwmlAS-2.js";import"./small-cross-C_POnZQE.js";import"./search-CxMCC1Wj.js";import"./cross-Cs7mtZ7v.js";import"./useValueChanged-i2iant8L.js";import"./getPseudoElementBounds-uAR-4phM.js";import"./CompositeItem-20RMszAx.js";import"./makeExternalStore-D3BDuZOH.js";import"./BaseForm-OpkMYSRB.js";import"./ActionButton-y2sXfkTG.js";import"./Button-B0c6HnvU.js";import"./SkeletonBar-BORqTxsq.js";import"./Tooltip-D4jJN_ia.js";import"./info-sign-Hz--uWnD.js";import"./chevron-up-Cb_MMUkk.js";import"./chevron-down-CTo4p9pl.js";import"./useEventCallback-CEvZMKXh.js";import"./iconLoader-DGGI3PQQ.js";import"./Switch-DNcwrEMG.js";import"./CompositeRoot-Bj57iOM5.js";import"./TimePicker-C44YvRb4.js";import"./CollapsiblePanel-GMK9kxHe.js";import"./error-ifBqoXQc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Crg_ITzK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
