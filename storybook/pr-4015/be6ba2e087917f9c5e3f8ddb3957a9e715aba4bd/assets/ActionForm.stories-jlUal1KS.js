import{j as t,g as n}from"./iframe-BEJEJisA.js";import{A as r}from"./action-form-BVEtrB5I.js";import"./preload-helper-CTiopNJo.js";import"./DropdownField-ED9pk3ub.js";import"./debounce-r6XyHjgC.js";import"./useOsdkClient-Bpe-a7b_.js";import"./index-1N58UMzJ.js";import"./Input-Dc1pIxfK.js";import"./useBaseUiId-Ew8LxSgO.js";import"./useControlled-FA-c2Sau.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./PopoverPopup-Dj8W7Cn3.js";import"./InternalBackdrop-DL9JbYUF.js";import"./composite-KwTbpSJb.js";import"./index-B8J0Ow83.js";import"./getDisabledMountTransitionStyles-DfEIWT8z.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./tick-BPxV61Pe.js";import"./svgIconContainer-DsO6erGI.js";import"./small-cross-DdmfQPNc.js";import"./search-CrTCcvos.js";import"./cross-BjrVNHd5.js";import"./useValueChanged-acF7yMok.js";import"./getPseudoElementBounds-BcQdcw-B.js";import"./CompositeItem-B4OpLzis.js";import"./makeExternalStore-DJsapvxx.js";import"./BaseForm-B0fMQmjy.js";import"./ActionButton-2ogOV1x4.js";import"./Button-BNegRBwl.js";import"./SkeletonBar-BhyVfmzi.js";import"./Tooltip-BgKnrnJ_.js";import"./info-sign-BHPCmtl4.js";import"./chevron-up-D-Q_6_7V.js";import"./chevron-down-USDozdCe.js";import"./useEventCallback-iVAQTX4_.js";import"./iconLoader-QJ68SMAX.js";import"./Switch-vGeflUux.js";import"./CompositeRoot-C86FSW08.js";import"./TimePicker-DCdv3YP4.js";import"./CollapsiblePanel-DoZ_BIG5.js";import"./error-C4eZ36G4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cs8owx7q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
