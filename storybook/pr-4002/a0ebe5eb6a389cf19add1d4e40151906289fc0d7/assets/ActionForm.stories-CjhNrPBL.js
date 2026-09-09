import{j as t,g as n}from"./iframe-Ccapaqae.js";import{A as r}from"./action-form-CC1Kkg4H.js";import"./preload-helper-B0fDxzOV.js";import"./DropdownField-BincnoLP.js";import"./debounce-DqeA49PZ.js";import"./useOsdkClient-BB4EEIlx.js";import"./index-CAc_fcE_.js";import"./Input-Cmwk-bsi.js";import"./useBaseUiId-BD8gqrlU.js";import"./useControlled-OeZ6f7Nb.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./PopoverPopup-Bdu2GGRB.js";import"./InternalBackdrop-BN-hTzRo.js";import"./composite-D5uZkbga.js";import"./index-C-nQHSmy.js";import"./getDisabledMountTransitionStyles-CX7DWXGm.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./tick-B2UO1Zse.js";import"./svgIconContainer-usxw3tZ0.js";import"./small-cross-BCCk6ZGS.js";import"./search-gfBqCBGK.js";import"./cross-DVe-hkuB.js";import"./useValueChanged-fMEzhjAD.js";import"./getPseudoElementBounds-3hF2b042.js";import"./CompositeItem-BQ56iutS.js";import"./makeExternalStore-g6LhMIcg.js";import"./BaseForm-B6lEL7nh.js";import"./ActionButton-BU9tJHwz.js";import"./Button-YLU6pcy0.js";import"./SkeletonBar-CxVZ2dgM.js";import"./Tooltip-OyMbgjjf.js";import"./info-sign-DaXdeOq6.js";import"./chevron-up-Cvp81iEj.js";import"./chevron-down-NuPa8cs3.js";import"./useEventCallback-B8B0zh1F.js";import"./iconLoader-BTN_KfWj.js";import"./CompositeRoot-fv4Yi9n7.js";import"./Switch-DLrMfouW.js";import"./TimePicker-D796oNt0.js";import"./CollapsiblePanel-BRx4L-gI.js";import"./error-rF1GSzue.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Clo6yw-m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
