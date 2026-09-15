import{j as t,g as n}from"./iframe-CvtjOOTU.js";import{A as r}from"./action-form-CsjHFXNx.js";import"./preload-helper-YYdL2GVs.js";import"./DropdownField-ClAk7Vc2.js";import"./debounce-DcZETNZe.js";import"./useOsdkClient-BXT2chcO.js";import"./index-CO5W4Pg7.js";import"./Input-LvpeWry1.js";import"./useBaseUiId-3JVt3VnJ.js";import"./useControlled-TIKyE_eU.js";import"./index-DzATK-9N.js";import"./index-B4MsJewH.js";import"./PopoverPopup-CgxcL0ZR.js";import"./InternalBackdrop-Be9B27zu.js";import"./composite-po6w4N65.js";import"./index-CKTvbjkc.js";import"./getDisabledMountTransitionStyles-CKrI2rr8.js";import"./ToolbarRootContext-XjPDKw4l.js";import"./tick-cNgeLKWA.js";import"./svgIconContainer-lpqUMm2E.js";import"./small-cross-CEHkrMeL.js";import"./search-B0EmnwB3.js";import"./cross-BpzF3zqH.js";import"./useValueChanged-Dx7gNUOP.js";import"./getPseudoElementBounds-BFiPvh4n.js";import"./CompositeItem-B90xhnGL.js";import"./makeExternalStore-BmjUzr6O.js";import"./BaseForm-hJ8zYpnD.js";import"./ActionButton-DyVOLyNI.js";import"./Button-CirHg6K_.js";import"./SkeletonBar-CafwHPpr.js";import"./Tooltip-9ewxrDzq.js";import"./info-sign-Dx4toDQy.js";import"./chevron-up-DgoHPTYl.js";import"./chevron-down-DEPGbWzo.js";import"./useEventCallback-D1uiA1rY.js";import"./iconLoader-CGDed42m.js";import"./CompositeRoot-q06cPn3G.js";import"./Switch-BKa0MQ4s.js";import"./TimePicker-DnX3BtJb.js";import"./CollapsiblePanel-BWOQg1wv.js";import"./error-CdHEMgDN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DL5qkExK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
