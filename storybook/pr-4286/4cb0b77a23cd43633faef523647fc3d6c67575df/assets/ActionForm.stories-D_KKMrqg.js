import{j as t,g as n}from"./iframe-C_ahFnte.js";import{A as r}from"./action-form-D_d661gi.js";import"./preload-helper-BHb0Injz.js";import"./DropdownField-vAKtIAD0.js";import"./debounce-WVnpB66O.js";import"./useOsdkClient-k2RdEafw.js";import"./index-CMAfnGax.js";import"./Input-BOmt55ak.js";import"./useBaseUiId-DyEK8-wC.js";import"./useControlled-D2HRL4Vd.js";import"./index-40HiEJ_t.js";import"./index-CQRjwZPk.js";import"./PopoverPopup-Ccomk73C.js";import"./InternalBackdrop-oaroN_vT.js";import"./composite-6kxzU8nP.js";import"./index-BwjPeIMJ.js";import"./getDisabledMountTransitionStyles-C6IdF26M.js";import"./ToolbarRootContext-QybI75uQ.js";import"./tick-R__fCdWc.js";import"./svgIconContainer-5iqtE3GT.js";import"./small-cross-CFiAlSxT.js";import"./search-WeJq5Jbj.js";import"./cross-BAtZIK6I.js";import"./useValueChanged-C2ULmJoA.js";import"./getPseudoElementBounds-C7DtJwGW.js";import"./CompositeItem-DebMdAlI.js";import"./makeExternalStore-lErXhsir.js";import"./BaseForm-CIgdD_U9.js";import"./ActionButton-BoswvknW.js";import"./Button-BF0zOcPV.js";import"./SkeletonBar-CBTex6KK.js";import"./Tooltip-BTsS5oFd.js";import"./info-sign-zF4QXe1j.js";import"./chevron-up-QLw1aneu.js";import"./chevron-down-Dzt44ETV.js";import"./useEventCallback-DtB3C9nL.js";import"./iconLoader-Dnn4l0pQ.js";import"./Switch-DGoL0R9h.js";import"./CompositeRoot-CtMRYRtk.js";import"./TimePicker-Dk6RsVNA.js";import"./CollapsiblePanel-whWth_0-.js";import"./error-DNwhr4rb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSpFQCY6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
