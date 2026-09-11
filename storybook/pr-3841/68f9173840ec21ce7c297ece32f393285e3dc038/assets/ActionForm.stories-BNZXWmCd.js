import{j as t,g as n}from"./iframe-BFm_OPcJ.js";import{A as r}from"./action-form-amvZb_xE.js";import"./preload-helper-D-hWMdww.js";import"./DropdownField-CN6SZeut.js";import"./debounce-D8DxzbxV.js";import"./useOsdkClient-mRsBldvP.js";import"./index-D6OldzKg.js";import"./Input-EUSvaA_S.js";import"./useBaseUiId-Bdo2oKJK.js";import"./useControlled-DARaGIjq.js";import"./index-D0NN2v4g.js";import"./index-D_unebpF.js";import"./PopoverPopup-BEMdzx0_.js";import"./InternalBackdrop-BDKMpH4Z.js";import"./composite-ClIBPGgl.js";import"./index-CGbcIBw9.js";import"./getDisabledMountTransitionStyles-BgUKa7Jc.js";import"./ToolbarRootContext-B9b_DGi_.js";import"./tick-zhT1lai6.js";import"./svgIconContainer-DFBJL56Q.js";import"./small-cross-DHkBCmiu.js";import"./search-JGyx4lc7.js";import"./cross-DAfVMEHB.js";import"./useValueChanged-C7A3m1Bn.js";import"./getPseudoElementBounds-CneiYeVp.js";import"./CompositeItem-Dv9cYPny.js";import"./makeExternalStore-C1VxggOZ.js";import"./BaseForm-C9PiHcal.js";import"./ActionButton-ylSGNg3V.js";import"./Button-C_avm1ie.js";import"./SkeletonBar-CLIzo5Xt.js";import"./Tooltip-BKDnPOlI.js";import"./info-sign-C50fEU7G.js";import"./chevron-up-DNPbFXgy.js";import"./chevron-down-DYcOsbsP.js";import"./useEventCallback-Don2-mEM.js";import"./iconLoader-RQVxD1N2.js";import"./CompositeRoot-BY7YOAiK.js";import"./Switch-iGKBoojf.js";import"./TimePicker-BZfM6yDZ.js";import"./CollapsiblePanel-kwBiLUkd.js";import"./error-BSGKVmqD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1bFznkGS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
