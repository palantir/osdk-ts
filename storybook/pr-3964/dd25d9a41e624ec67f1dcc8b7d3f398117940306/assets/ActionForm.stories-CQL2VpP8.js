import{j as t,g as n}from"./iframe-5sgXXUq2.js";import{A as r}from"./action-form-vbm3XrV6.js";import"./preload-helper-Cbn9zcHA.js";import"./DropdownField-DDOypfNs.js";import"./debounce-D_ZNVjIE.js";import"./useOsdkClient-CvRRMyub.js";import"./index-CzwNxfu7.js";import"./Input-CwUkFVhs.js";import"./useBaseUiId-DG_QbP_U.js";import"./useControlled-siu4g8xe.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./PopoverPopup-BjatbugG.js";import"./InternalBackdrop-CjtV5ZAW.js";import"./composite-Ine8e3tf.js";import"./index-BBV34otm.js";import"./getDisabledMountTransitionStyles-CuDkESvM.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./tick-BcyhdjRi.js";import"./svgIconContainer-6O_QyJta.js";import"./small-cross-B4u9H8ya.js";import"./search-BYA2jSn3.js";import"./cross-Dl1YYoqq.js";import"./useValueChanged-C7csg4cA.js";import"./getPseudoElementBounds-DuTJjluI.js";import"./CompositeItem-CIAR7LV4.js";import"./makeExternalStore-D7x2N1Sq.js";import"./BaseForm-CtTTRAn9.js";import"./ActionButton-BO7jWeao.js";import"./Button-71PqqjpD.js";import"./SkeletonBar-BEL6Gir4.js";import"./Tooltip-Bz_qehDJ.js";import"./info-sign-B_OyjwXR.js";import"./chevron-up-BlsyuAls.js";import"./chevron-down-B4APaT5X.js";import"./useEventCallback-BdN49Cxy.js";import"./iconLoader-B0MXIvzL.js";import"./CompositeRoot-CNmt4m1i.js";import"./Switch-C7hZsIj9.js";import"./TimePicker-DBOtCftB.js";import"./CollapsiblePanel-Dcs-Jidu.js";import"./error-CIAmmsFo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dp93P8HI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
