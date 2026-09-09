import{j as t,g as n}from"./iframe-JXLKLe4j.js";import{A as r}from"./action-form-kQXOkIGh.js";import"./preload-helper-KxhExJZe.js";import"./DropdownField-DgrKVFWZ.js";import"./debounce-CiOfWDDO.js";import"./useOsdkClient-Bd8Cmg0y.js";import"./index-CxCVEUEK.js";import"./Input-Cp2KEsjw.js";import"./useBaseUiId-D2ECG8pj.js";import"./useControlled-BlJ0csd0.js";import"./index-CU7Uodcw.js";import"./index-KYXcc3Yr.js";import"./PopoverPopup-CvtiR2Lg.js";import"./InternalBackdrop-BAhO0rZ6.js";import"./composite-B1xcP3KB.js";import"./index-D0eNlerC.js";import"./getDisabledMountTransitionStyles-rcpG9bQ-.js";import"./ToolbarRootContext-Dtg0Oro0.js";import"./tick-g-QdmJj0.js";import"./svgIconContainer-39ufch0k.js";import"./small-cross-Bm-1zFL_.js";import"./search-3vsZ9AKM.js";import"./cross-DOXYOKC7.js";import"./useValueChanged-76jQ3f4t.js";import"./getPseudoElementBounds-Bnkuh_Gq.js";import"./CompositeItem-CHr0cHjc.js";import"./makeExternalStore-CPv_2K4j.js";import"./BaseForm-CozNZkMS.js";import"./ActionButton-DABDZfMp.js";import"./Button-Cg6Es2oR.js";import"./SkeletonBar-BO4kxP3D.js";import"./Tooltip-DVRBwT79.js";import"./info-sign-7pEdozuK.js";import"./chevron-up-CHf3zV96.js";import"./chevron-down-OJuk8g-X.js";import"./useEventCallback-CwcpFxjU.js";import"./iconLoader-DLrpMJyA.js";import"./CompositeRoot-CKoF8Ofd.js";import"./Switch-H-5_Kv0i.js";import"./TimePicker-DhTcYb5N.js";import"./CollapsiblePanel-BetHwBDr.js";import"./error-CCMzsuJP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OXe-gHpY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
