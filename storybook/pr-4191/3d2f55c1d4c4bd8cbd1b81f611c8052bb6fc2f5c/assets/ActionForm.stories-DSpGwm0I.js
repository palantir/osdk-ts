import{j as t,g as n}from"./iframe-B1-dVNhS.js";import{A as r}from"./action-form-F4o2ZRU-.js";import"./preload-helper-C2ProuBv.js";import"./DropdownField-DFuV0D7k.js";import"./debounce-Cr9XR4am.js";import"./useOsdkClient-2-pImquH.js";import"./index-WzbH8_Sp.js";import"./Input-DcCcX-hv.js";import"./useBaseUiId-B6R5LUY3.js";import"./useControlled-CY-lWJZk.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./PopoverPopup-x43Mxd5d.js";import"./InternalBackdrop-BOiIRLua.js";import"./composite-GFxhGtPY.js";import"./index-xcHgmafl.js";import"./getDisabledMountTransitionStyles-Ekj_ahAn.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./tick-DdK_sq_c.js";import"./svgIconContainer-wdLWihrJ.js";import"./small-cross-BbKGzC12.js";import"./search-D_Yyj-29.js";import"./cross-DSyUk5jg.js";import"./useValueChanged-DJpQ9JpS.js";import"./getPseudoElementBounds-CdXmde03.js";import"./CompositeItem-BkBiNRQD.js";import"./makeExternalStore-WUBDRAE1.js";import"./BaseForm-80sbc8sP.js";import"./ActionButton-DYfOCnDA.js";import"./Button-B1lo8D22.js";import"./SkeletonBar-BhH-zFkC.js";import"./Tooltip-DTMQ2lEm.js";import"./info-sign-BeW5r7sd.js";import"./chevron-up-7DWG-eXg.js";import"./chevron-down-DucaWjk_.js";import"./useEventCallback-B1rXS-nA.js";import"./iconLoader-SBp_dp7p.js";import"./Switch-CloeFLAj.js";import"./CompositeRoot-Cj8dSouc.js";import"./TimePicker-CNqF9IKA.js";import"./CollapsiblePanel-C7cdbtZi.js";import"./error-mrqVIVBz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ijmPCvgt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
