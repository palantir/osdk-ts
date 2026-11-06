import{j as t,g as n}from"./iframe-Y7AblKoo.js";import{A as r}from"./action-form-DFfgxGPo.js";import"./preload-helper-CK7oVkVW.js";import"./DropdownField-BMfgbVSv.js";import"./debounce-Isp2HaEB.js";import"./useOsdkClient-Dq_ItsJG.js";import"./index-D2h1-o7T.js";import"./Input-CJLZHe4E.js";import"./useBaseUiId-BuabQztq.js";import"./useControlled-kT-I11in.js";import"./index-BVzBDJE3.js";import"./index-CAOvocee.js";import"./isObject-DheuFrAG.js";import"./InternalBackdrop-H9HqFIS2.js";import"./composite-DhLfKT7-.js";import"./index-BH7XzZTW.js";import"./getDisabledMountTransitionStyles-DHnmC01T.js";import"./ToolbarRootContext-Dcch5f3c.js";import"./tick-HfDmvRCv.js";import"./svgIconContainer-DrxH4qgx.js";import"./small-cross-tPJDy73P.js";import"./search-DtmxDMt7.js";import"./cross-EOw4MIdf.js";import"./useValueChanged-DqMWnrli.js";import"./getPseudoElementBounds-7Teyr0Nw.js";import"./CompositeItem-DBKT_2ic.js";import"./makeExternalStore-CPSblPES.js";import"./BaseForm-BYoz2DFL.js";import"./ActionButton-Bt0BBh48.js";import"./Button-DCccMYap.js";import"./SkeletonBar-RBq0mpfB.js";import"./Tooltip-DcDIeYDv.js";import"./info-sign-Cd7PS2su.js";import"./chevron-up-AiwV9X6q.js";import"./chevron-down-CwpvKa_6.js";import"./useEventCallback-DWticQIx.js";import"./iconLoader-eeD8EaY7.js";import"./Switch-DxwZNhSC.js";import"./CompositeRoot-CMgz5cWv.js";import"./TimePicker-Cb6m5u7b.js";import"./CollapsiblePanel-DN3ZprZ0.js";import"./error-G0IfSF5E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DpuFL858.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
