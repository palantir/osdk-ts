import{j as t,g as n}from"./iframe-CwfFVXYm.js";import{A as r}from"./action-form-CmbtiQF2.js";import"./preload-helper-B0i1Ccv8.js";import"./DropdownField-B644qOm6.js";import"./debounce-T3lrOezK.js";import"./useOsdkClient-D4ODTHFx.js";import"./index-12mUJC8n.js";import"./Input-B3BLVjbw.js";import"./useBaseUiId-D7i-0lUl.js";import"./useControlled-CBv31JWZ.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./PopoverPopup-C1H_pV3d.js";import"./InternalBackdrop-DOJpSrKf.js";import"./composite-B35ndqHm.js";import"./index-Crk-izdP.js";import"./getDisabledMountTransitionStyles-C_Pdyoj5.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./tick-CBvk4wqY.js";import"./svgIconContainer-CGFZMhJS.js";import"./small-cross-Kn0-K05A.js";import"./search-CXyOr2KE.js";import"./cross-vHANk4GA.js";import"./useValueChanged-DnLqpX89.js";import"./getPseudoElementBounds-nE2iYe28.js";import"./CompositeItem-BPiFovJv.js";import"./makeExternalStore-D75zw0dv.js";import"./BaseForm-C1WNkrKf.js";import"./ActionButton-B9_iyqEc.js";import"./Button-BEoayh3H.js";import"./SkeletonBar-BTELcMSt.js";import"./Tooltip-ChZSMVBv.js";import"./info-sign-rHYZBUGh.js";import"./chevron-up-DFx_f40v.js";import"./chevron-down-CYWunexi.js";import"./useEventCallback-YTEY1SDl.js";import"./iconLoader-CEDgdzKJ.js";import"./Switch-DH8oa7Wj.js";import"./CompositeRoot-DnxEXpos.js";import"./TimePicker-_ofxirge.js";import"./CollapsiblePanel-shOVr1N_.js";import"./error-BbOajjO4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ojccrccx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
