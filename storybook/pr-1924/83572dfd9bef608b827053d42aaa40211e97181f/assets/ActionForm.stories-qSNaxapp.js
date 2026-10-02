import{j as t,g as n}from"./iframe-dYZcY_yd.js";import{A as r}from"./action-form-zn8BvvXP.js";import"./preload-helper-nvTVJuZ0.js";import"./DropdownField-BCHipXvA.js";import"./debounce-0K7vkP1p.js";import"./useOsdkClient-B_kqpc0H.js";import"./index-DdpHHEag.js";import"./Input-2gIVp1J7.js";import"./useBaseUiId-BmHomGuM.js";import"./useControlled-BgrYkcgC.js";import"./index-D1qSefVk.js";import"./index-CTY9EHBj.js";import"./PopoverPopup-CzPa19Jo.js";import"./InternalBackdrop-B7SrXjlM.js";import"./composite-D7xb_xyv.js";import"./index-YYQZ3ova.js";import"./getDisabledMountTransitionStyles-CEfeB9r5.js";import"./ToolbarRootContext-DaQhWJhT.js";import"./tick-6CBeLfgO.js";import"./svgIconContainer-d4KiPlL-.js";import"./small-cross-BXDAngmo.js";import"./search-CDnnsnvp.js";import"./cross-Dy_Om33n.js";import"./useValueChanged-RbvDjp5x.js";import"./getPseudoElementBounds-MleGKnPQ.js";import"./CompositeItem-DIIkXBkk.js";import"./makeExternalStore-CHw5k_cg.js";import"./BaseForm-DgAut_xC.js";import"./ActionButton-oKML9K2p.js";import"./Button-lcjZj2UQ.js";import"./SkeletonBar-_1DWBUrN.js";import"./Tooltip-NXVN9pAS.js";import"./info-sign-Jqpu9lu_.js";import"./chevron-up-ChID50vc.js";import"./chevron-down-DS-zMT_I.js";import"./useEventCallback-DeO715E3.js";import"./iconLoader-CBK-cAs-.js";import"./Switch-BqH7Enq5.js";import"./CompositeRoot-BZ8JZtBk.js";import"./TimePicker-B2KD76cu.js";import"./CollapsiblePanel-B2EqHOMP.js";import"./error-D1PWFSVl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-7sRD0apQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
