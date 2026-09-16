import{j as t,g as n}from"./iframe-DsISivmL.js";import{A as r}from"./action-form-CBnnOvhY.js";import"./preload-helper-BzOTEX4h.js";import"./DropdownField-CvZQLsdV.js";import"./debounce-X_5agJaU.js";import"./useOsdkClient-zAtHZEwL.js";import"./index-CA9KUbCW.js";import"./Input-C-IYkLA_.js";import"./useBaseUiId-CMSPxGM5.js";import"./useControlled-B8XvalbJ.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./PopoverPopup-Cxkx2QUZ.js";import"./InternalBackdrop-B7T_UWK7.js";import"./composite-0zr51VGP.js";import"./index-ji8x1IHY.js";import"./getDisabledMountTransitionStyles-DyXUV0ZO.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./tick-Ccm3lDvW.js";import"./svgIconContainer-Dp3EEAal.js";import"./small-cross-DPV9Jc_E.js";import"./search-BjXP8SQo.js";import"./cross-BGShLWmS.js";import"./useValueChanged-CEyGGyfc.js";import"./getPseudoElementBounds-D8rG3FVx.js";import"./CompositeItem-DPkp3H9j.js";import"./makeExternalStore-Bj-L88f8.js";import"./BaseForm-aIKIPily.js";import"./ActionButton-DYgFtpFn.js";import"./Button-CSztET3k.js";import"./SkeletonBar-c-f45sOv.js";import"./Tooltip-DWpaGJhu.js";import"./info-sign-Cdy0e1jW.js";import"./chevron-up-DsKGUyjQ.js";import"./chevron-down-CGSFBjuL.js";import"./useEventCallback-COAm-0TE.js";import"./iconLoader-Bvzxy7wN.js";import"./Switch-_jfbCYLq.js";import"./CompositeRoot-DtRaXi0v.js";import"./TimePicker-DVTIPts8.js";import"./CollapsiblePanel-DeMaCQ59.js";import"./error-33DrpFja.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6_E0WHa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
