import{j as t,g as n}from"./iframe-5lzZwYPj.js";import{A as r}from"./action-form-DpN_hVLr.js";import"./preload-helper-WKlZEuzV.js";import"./DropdownField-CNBl1CJk.js";import"./debounce-CCS3RbBn.js";import"./useOsdkClient-i1o2THdE.js";import"./index-DmpQA2dp.js";import"./Input-DcJ3J1h2.js";import"./useBaseUiId-DfIUF55c.js";import"./useControlled-DHTN_Qw2.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./PopoverPopup-BvZ2qG_8.js";import"./InternalBackdrop-CSogwMiw.js";import"./composite-PZIUxoU6.js";import"./index-BynFqe0V.js";import"./getDisabledMountTransitionStyles-D1fP0s8e.js";import"./ToolbarRootContext-BU433tXf.js";import"./tick-CdsCMYrr.js";import"./svgIconContainer-gxAyVnRe.js";import"./small-cross-Bb7OStik.js";import"./search-XZcqoY-Q.js";import"./cross-Be5djBeG.js";import"./useValueChanged-CtekWBgz.js";import"./getPseudoElementBounds-B4sKXzPK.js";import"./CompositeItem-DJOIGuOW.js";import"./makeExternalStore-DzXze8D7.js";import"./BaseForm-BfKacxjI.js";import"./ActionButton-DgVQ6zLW.js";import"./Button-bfW4GHY6.js";import"./SkeletonBar-CZuPbSrW.js";import"./Tooltip-eiDm927K.js";import"./info-sign-0vQNNaHU.js";import"./chevron-up-DWfPBGf0.js";import"./chevron-down-Djuiqxwk.js";import"./useEventCallback-DFkI_Wkj.js";import"./iconLoader-Ddw13gIS.js";import"./Switch-durPavgz.js";import"./CompositeRoot-BOASmM8_.js";import"./TimePicker-D09OUkHB.js";import"./CollapsiblePanel-Dc0aGLPo.js";import"./error-BAoHpMsF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzXqb59o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
