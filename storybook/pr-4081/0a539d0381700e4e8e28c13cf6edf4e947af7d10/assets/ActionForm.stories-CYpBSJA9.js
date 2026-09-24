import{j as t,g as n}from"./iframe-n8xc1zmR.js";import{A as r}from"./action-form-Blro6STZ.js";import"./preload-helper-Bmsyery-.js";import"./DropdownField-CS8LcZCX.js";import"./debounce-DHLI8XQh.js";import"./useOsdkClient-CCi5QoY_.js";import"./index-BAcQGlbN.js";import"./Input-BlStQB_U.js";import"./useBaseUiId-eETnIy-K.js";import"./useControlled-D5Gxa7cz.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./PopoverPopup-CnDxdF7U.js";import"./InternalBackdrop-CCcuqGEC.js";import"./composite-DIEyOfVG.js";import"./index-Cv8iH0sa.js";import"./getDisabledMountTransitionStyles-BNw6DyHr.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./tick-Cgr5wt1D.js";import"./svgIconContainer-Cfmf2PdM.js";import"./small-cross-BNKugY-f.js";import"./search-CHlDi3Oa.js";import"./cross-CxpUurAd.js";import"./useValueChanged-BZIGOI0A.js";import"./getPseudoElementBounds-CLnV32FM.js";import"./CompositeItem-Bg5j4iyb.js";import"./makeExternalStore-DsKbnpVD.js";import"./BaseForm-GLYN5BYc.js";import"./ActionButton-CSMbtnor.js";import"./Button-xMD57DxE.js";import"./SkeletonBar-D74l1Ztx.js";import"./Tooltip-C0vBpqP0.js";import"./info-sign-Cfol4rRK.js";import"./chevron-up-C5UU2Oky.js";import"./chevron-down-ut1JXVy2.js";import"./useEventCallback-kGheuRwD.js";import"./iconLoader-Boi6NqEX.js";import"./Switch-CgvAcM-z.js";import"./CompositeRoot-aW8dXH_M.js";import"./TimePicker-CNvP9ukM.js";import"./CollapsiblePanel-BpdatoOf.js";import"./error-B1cmPXwp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BgaQEVHI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
