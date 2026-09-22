import{j as t,g as n}from"./iframe-8DMGEq06.js";import{A as r}from"./action-form-DzNaAIUp.js";import"./preload-helper-BjAl-lK2.js";import"./DropdownField-Bu7UETX6.js";import"./debounce-D_Y9TVaa.js";import"./useOsdkClient-C_eIZF2J.js";import"./index-DRq4gjPq.js";import"./Input-dydaNapo.js";import"./useBaseUiId-B2FWNhGQ.js";import"./useControlled-Khc0ddfA.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./PopoverPopup-CRsLokny.js";import"./InternalBackdrop-CWiPG24p.js";import"./composite-CY_QXMLo.js";import"./index-Dx7C8aHO.js";import"./getDisabledMountTransitionStyles-Dw-8Jwwa.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./tick-IbzJph_T.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./small-cross-CfjvRjN5.js";import"./search-CvifUsIK.js";import"./cross-DYaZw4Am.js";import"./useValueChanged-N306h0K2.js";import"./getPseudoElementBounds-C27BHV4s.js";import"./CompositeItem-Bb2gn4Bj.js";import"./makeExternalStore-NZ3mh5Ti.js";import"./BaseForm-Bct0RWJb.js";import"./ActionButton-BmVKHj0Y.js";import"./Button-CraGbNXA.js";import"./SkeletonBar-Dc166Tvt.js";import"./Tooltip-CJOrSGc2.js";import"./info-sign--0y3f7Ne.js";import"./chevron-up-C862Oldf.js";import"./chevron-down-F_95MoSJ.js";import"./useEventCallback-3GlyZw2_.js";import"./iconLoader-BSusCwkA.js";import"./CompositeRoot-CXeDCZsV.js";import"./Switch-sYgCkzkO.js";import"./TimePicker-Dpm3Z2EW.js";import"./CollapsiblePanel-BE0AM26B.js";import"./error-CiLZ8SWq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCPVCTJZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
