import{j as t,g as n}from"./iframe-BBEsiyhw.js";import{A as r}from"./action-form-D5SYQvxC.js";import"./preload-helper-BmblPu1v.js";import"./DropdownField-BOu_gmsx.js";import"./debounce-CpTZuqbj.js";import"./useOsdkClient-Dj0AF7_N.js";import"./index-ClnGgge0.js";import"./Input-BCyCFswy.js";import"./useBaseUiId-B3oGhb6T.js";import"./useControlled-BD3zVyK-.js";import"./index-BjsoHb5F.js";import"./index-DalDu3QI.js";import"./PopoverPopup-CuSOAdrR.js";import"./InternalBackdrop-ChnKIul8.js";import"./composite-CotiRSPy.js";import"./index--qEH9jKV.js";import"./getDisabledMountTransitionStyles-BdiTBQkJ.js";import"./ToolbarRootContext-BkzilyRu.js";import"./tick-kQvs8Sxv.js";import"./svgIconContainer-BftRkbDY.js";import"./small-cross-CYF_B5Lg.js";import"./search-CUaj7sUK.js";import"./cross-D8hf1lyL.js";import"./useValueChanged-B8GX47Ef.js";import"./getPseudoElementBounds-Cdat2o12.js";import"./CompositeItem-BDqi7Zsx.js";import"./makeExternalStore-oMnnQc1q.js";import"./BaseForm-CZCrMTqo.js";import"./ActionButton-i2asGAmE.js";import"./Button-C37aiOXg.js";import"./SkeletonBar-CnHRJgGL.js";import"./Tooltip-CwE-ESs7.js";import"./info-sign-CYEGVXnz.js";import"./chevron-up-Ds91aZIB.js";import"./chevron-down-DqgLlLlb.js";import"./useEventCallback-B1mH3cgs.js";import"./iconLoader-EmK6OfLl.js";import"./Switch-DpAp5BVv.js";import"./CompositeRoot-CnObT3Kn.js";import"./TimePicker-Cx8And4Z.js";import"./CollapsiblePanel-BBI2Wh35.js";import"./error-DhmHSkrO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-J9vpDrpe.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
