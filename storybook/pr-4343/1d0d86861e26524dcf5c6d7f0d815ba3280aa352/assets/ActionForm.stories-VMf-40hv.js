import{j as t,g as n}from"./iframe-DdqwQQfw.js";import{A as r}from"./action-form-C6is7jaI.js";import"./preload-helper-Do8DhNTP.js";import"./DropdownField-DSWv5JEX.js";import"./debounce-C-_Fx2Z2.js";import"./useOsdkClient-DRVnONzi.js";import"./index-BEo5fRZG.js";import"./Input-Ddm5AThx.js";import"./useBaseUiId-Bcpg3lGk.js";import"./useControlled-DlTcdMFR.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./PopoverPopup-CnpcTZxS.js";import"./InternalBackdrop-BI5ASDuz.js";import"./composite-BS7fyn0m.js";import"./index-DGo2jayS.js";import"./getDisabledMountTransitionStyles-BPMv8sxJ.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./tick-CVZaQjhe.js";import"./svgIconContainer-z_HFHagN.js";import"./small-cross-0mGWC0pa.js";import"./search-BAD3BF_p.js";import"./cross-D_2LRYUd.js";import"./useValueChanged-DXSqqnXt.js";import"./getPseudoElementBounds-CxeR3TvN.js";import"./CompositeItem-rVjlE15s.js";import"./makeExternalStore-C_arn_CF.js";import"./BaseForm-B2jejDjI.js";import"./ActionButton-ixUyXV1s.js";import"./Button-D31p01oo.js";import"./SkeletonBar-CxTwW2pN.js";import"./Tooltip-CBEbeLyL.js";import"./info-sign-BXPVW_wE.js";import"./chevron-up-CmCXNRx6.js";import"./chevron-down-RBc_HqKE.js";import"./useEventCallback-DRJH6OEM.js";import"./iconLoader-BSgrUIxC.js";import"./Switch-Dy-DBD0r.js";import"./CompositeRoot-CLlf3n7V.js";import"./TimePicker-B4REcf7o.js";import"./CollapsiblePanel-DoAzLAFA.js";import"./error-BE-sE7Te.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-VwlQjk8h.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
