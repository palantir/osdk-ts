import{j as t,g as n}from"./iframe-DsRLlUaX.js";import{A as r}from"./action-form-lrBR-TuZ.js";import"./preload-helper-C3_l2Hl0.js";import"./DropdownField-B8gE2PDv.js";import"./debounce-BdN6OVW0.js";import"./useOsdkClient-odhqC5VJ.js";import"./index-BjtlPBUb.js";import"./Input-DZ_xmuAk.js";import"./useBaseUiId-C4i6MKWL.js";import"./useControlled-DEedTOrX.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./PopoverPopup-C20EJZAo.js";import"./InternalBackdrop-nEq0F95e.js";import"./composite-DOMJJy3E.js";import"./index-BzAzXXv_.js";import"./getDisabledMountTransitionStyles-CuDFXdCB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./tick-Bf8GrdTl.js";import"./svgIconContainer-zp1B85KB.js";import"./small-cross-CPUMrn4k.js";import"./search-SgUD_ncl.js";import"./cross-BZKb8UMR.js";import"./useValueChanged-C110ouPx.js";import"./getPseudoElementBounds-BKZ8iNlw.js";import"./CompositeItem-DfeVObqB.js";import"./makeExternalStore-0t40E2-H.js";import"./BaseForm-DnT9Tutc.js";import"./ActionButton-DcRLI80N.js";import"./Button-DOnuCfPD.js";import"./SkeletonBar-RdAIK3SY.js";import"./Tooltip-Bb-4nM7_.js";import"./info-sign-DRi_--UW.js";import"./chevron-up-BmlmJwCX.js";import"./chevron-down-BpedfE0t.js";import"./useEventCallback-DmbMgs2A.js";import"./iconLoader-CQesIulO.js";import"./Switch-DFoV82C8.js";import"./CompositeRoot-27bpmOMq.js";import"./TimePicker-Bfnmbgyh.js";import"./CollapsiblePanel-Cs4tbvDj.js";import"./error-CaruzJxR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BDhrFxgU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
