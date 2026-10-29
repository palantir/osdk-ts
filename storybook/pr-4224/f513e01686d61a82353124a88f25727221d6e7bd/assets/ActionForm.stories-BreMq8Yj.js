import{j as t,g as n}from"./iframe-niEbczVm.js";import{A as r}from"./action-form-DvFwO0fJ.js";import"./preload-helper-CUjUb6yR.js";import"./DropdownField-BnoXJlhp.js";import"./debounce-BEX_S5I4.js";import"./useOsdkClient-BrHXTXJ2.js";import"./index-BEFpPyEu.js";import"./Input-B4FHDv-3.js";import"./useBaseUiId-CH7YIJgS.js";import"./useControlled-CUyHc-Js.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./PopoverPopup-Dc4OKlIj.js";import"./InternalBackdrop-v7weAe9K.js";import"./composite-DGaJRBaQ.js";import"./index-BqQiJ2_G.js";import"./getDisabledMountTransitionStyles-BJk4B9MV.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./tick-CiAF04hP.js";import"./svgIconContainer-9VsGkNZz.js";import"./small-cross-CjBKsPzJ.js";import"./search-ChyEY49Q.js";import"./cross-Bcr8pGuL.js";import"./useValueChanged-DPnKyoXq.js";import"./getPseudoElementBounds-KgJkaKhr.js";import"./CompositeItem-CsOBUX0g.js";import"./makeExternalStore-CCkssviL.js";import"./BaseForm-CB-4W9X6.js";import"./ActionButton-B8kWvQVe.js";import"./Button-CFI_-pRJ.js";import"./SkeletonBar-CkUb_6G3.js";import"./Tooltip-CcPCpeng.js";import"./info-sign-HK7TlakE.js";import"./chevron-up-C56QwOCl.js";import"./chevron-down-BBE32uOg.js";import"./useEventCallback-BgYsgH1g.js";import"./iconLoader-DHizA4xm.js";import"./Switch-DQ2h1iqr.js";import"./CompositeRoot-BoOEKYl_.js";import"./TimePicker-CGt41zK6.js";import"./CollapsiblePanel-DDu9LnWB.js";import"./error-mxcJOglh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DWUucJCc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
