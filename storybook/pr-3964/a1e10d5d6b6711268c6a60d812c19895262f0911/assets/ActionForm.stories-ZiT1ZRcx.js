import{j as t,g as n}from"./iframe-BtTN4BQB.js";import{A as r}from"./action-form-maapX-kv.js";import"./preload-helper-C2hFUd6N.js";import"./DropdownField-BLdkGkAU.js";import"./debounce-BHOQ-Rki.js";import"./useOsdkClient-DEjT27KS.js";import"./index-pxWT2dwl.js";import"./Input-BP96gLBp.js";import"./useBaseUiId-lIY47ohq.js";import"./useControlled-BY2aVBy7.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./PopoverPopup-DWl2W-_4.js";import"./InternalBackdrop-dYX83tvG.js";import"./composite-CdDRlQtM.js";import"./index-DOgMvsUP.js";import"./getDisabledMountTransitionStyles-CN6FaNLi.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./tick-DcJBbOnL.js";import"./svgIconContainer-Ck-gVtGn.js";import"./small-cross-C5ga7063.js";import"./search-B3tYggTx.js";import"./cross-q76qzbb-.js";import"./useValueChanged-fmp-pLJF.js";import"./getPseudoElementBounds-8uy80WiE.js";import"./CompositeItem-Dm5rFUvO.js";import"./makeExternalStore-Djs-AWxx.js";import"./BaseForm-BBxSOHe1.js";import"./ActionButton-CM0ktcvu.js";import"./Button-BLq1-le0.js";import"./SkeletonBar-BEHzB_kl.js";import"./Tooltip-H3WuRadb.js";import"./info-sign-ByHXDuc7.js";import"./chevron-up-CPUlXJJh.js";import"./chevron-down-BcmFYUSl.js";import"./useEventCallback-BtkhBx2l.js";import"./iconLoader-HB8Ptiz4.js";import"./CompositeRoot-BSRv4Qnc.js";import"./Switch-ghUpHUlQ.js";import"./TimePicker-DmU8D_6o.js";import"./CollapsiblePanel-hvpVpf_T.js";import"./error-eGAnK2yX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMwNEK1o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
