import{j as t,g as n}from"./iframe-BTufhzDU.js";import{A as r}from"./action-form-CLXf1iG5.js";import"./preload-helper-18tKsGVi.js";import"./DropdownField-Y24yrVFb.js";import"./debounce-BhoGA986.js";import"./useOsdkClient-tOUmwv_4.js";import"./index-Bgh_kCmT.js";import"./Input-GDvhao2V.js";import"./useBaseUiId-B_rOieJo.js";import"./useControlled-B8odZqt5.js";import"./index-COZLl5wP.js";import"./index-B-UiCFnv.js";import"./PopoverPopup-vY6UzFEA.js";import"./InternalBackdrop-BOulsSWB.js";import"./composite-C_GDjy5Q.js";import"./index-D_PI1Th3.js";import"./getDisabledMountTransitionStyles-CJ4mZ_K7.js";import"./ToolbarRootContext-c-VxwH3T.js";import"./tick-DEzBGa0_.js";import"./svgIconContainer-CIDYFOR4.js";import"./small-cross-DeBGztGD.js";import"./search-DSjsSTcq.js";import"./cross-CDJmthjs.js";import"./useValueChanged-yHO5JJpr.js";import"./getPseudoElementBounds-BRhWDMTt.js";import"./CompositeItem-C2mdT24u.js";import"./makeExternalStore-CzdIOkHP.js";import"./BaseForm-dVuy9W05.js";import"./ActionButton-CDYSucfC.js";import"./Button-C08Dl8zL.js";import"./SkeletonBar-ymkmzl6c.js";import"./Tooltip-CqNQQfxr.js";import"./info-sign-ClKysTL4.js";import"./chevron-up-BFfVKnbk.js";import"./chevron-down-CqOeUkb7.js";import"./useEventCallback-D-COXZHZ.js";import"./iconLoader-Cvu6IWuZ.js";import"./CompositeRoot-BMPWQJNL.js";import"./Switch-BiaSsi89.js";import"./TimePicker-CVOeZteI.js";import"./CollapsiblePanel-DnLCtJrZ.js";import"./error-DOFx9qT5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BNGLvviV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
