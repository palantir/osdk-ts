import{j as t,g as n}from"./iframe-CYk-VOyX.js";import{A as r}from"./action-form-CFIKoWDS.js";import"./preload-helper-SkgcqAwO.js";import"./DropdownField-B-M_qxJL.js";import"./debounce-BLRPrO6Z.js";import"./useOsdkClient-CpgQqUq5.js";import"./index-SBfcRZ8A.js";import"./Input-D-JL81JO.js";import"./useBaseUiId-DaFkg2Hs.js";import"./useControlled-C7TGm_r4.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./PopoverPopup-MmB-vCo2.js";import"./InternalBackdrop-Boo6A0xA.js";import"./composite-BKwpvwkR.js";import"./index-DPxe0aBZ.js";import"./getDisabledMountTransitionStyles-CPFd5Dgv.js";import"./ToolbarRootContext--t9DiEt8.js";import"./tick-sF3dW88A.js";import"./svgIconContainer-jVuUMFBU.js";import"./small-cross-G7_j2zv8.js";import"./search-cR64-3Tm.js";import"./cross-DMsanrWV.js";import"./useValueChanged-DrnGNbKP.js";import"./getPseudoElementBounds-BtB_IhPs.js";import"./CompositeItem-CaDSOm5y.js";import"./makeExternalStore-B8yIQpmX.js";import"./BaseForm-BhqRQyio.js";import"./ActionButton-D8hPawwc.js";import"./Button-CExSo-UX.js";import"./SkeletonBar-62HfS3Nk.js";import"./Tooltip-DygePy8y.js";import"./info-sign-CjtlI5FR.js";import"./chevron-up-Dk7oDl7e.js";import"./chevron-down-Bs06bZ_z.js";import"./useEventCallback-BY8DoVsR.js";import"./iconLoader-CPye7cF1.js";import"./Switch-DWSyswiV.js";import"./CompositeRoot-CZBch66U.js";import"./TimePicker-Dokt7GAq.js";import"./CollapsiblePanel-D0zrAQ08.js";import"./error-zC5vfcSr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BJbglULT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
