import{j as t,g as n}from"./iframe-CNvI9eAL.js";import{A as r}from"./action-form-C_2Gog74.js";import"./preload-helper-CRF54Ery.js";import"./DropdownField-CYdvpVt_.js";import"./debounce-CkKjOcL_.js";import"./useOsdkClient-C0wuY3lu.js";import"./index-BTFSWIKz.js";import"./Input-CfSk64xN.js";import"./useBaseUiId-CxeAu3mm.js";import"./useControlled-pDp_EzUa.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./PopoverPopup-DGeh8xC_.js";import"./InternalBackdrop-CHq0uWTI.js";import"./composite-Db3opbub.js";import"./index-Deml3Efy.js";import"./getDisabledMountTransitionStyles-4DN3r7zh.js";import"./ToolbarRootContext-CTMDQSca.js";import"./tick-CpXHS_dg.js";import"./svgIconContainer-BBVMgJTA.js";import"./small-cross-BE9CMIjD.js";import"./search-BesbbJYF.js";import"./cross--RfUm2YZ.js";import"./useValueChanged-CrRD_2mc.js";import"./getPseudoElementBounds-D2n5rcQy.js";import"./CompositeItem-aRd3tSux.js";import"./makeExternalStore-DrmCh3vo.js";import"./BaseForm-H9GmeWEY.js";import"./ActionButton-BBpJXm_V.js";import"./Button-CfqXNV8N.js";import"./SkeletonBar-T6--w0gO.js";import"./Tooltip-BBjnREMn.js";import"./info-sign-Cks4I4zZ.js";import"./chevron-up-B9CyFkwK.js";import"./chevron-down-DEvcNxOi.js";import"./useEventCallback-BzDn9UNO.js";import"./iconLoader-DVERbHXW.js";import"./CompositeRoot-CPaC8xdK.js";import"./Switch-Dj-To2S9.js";import"./TimePicker-8Vo4nvQb.js";import"./CollapsiblePanel-BLod_JW_.js";import"./error-CG9g-M1f.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D4xumH8Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
