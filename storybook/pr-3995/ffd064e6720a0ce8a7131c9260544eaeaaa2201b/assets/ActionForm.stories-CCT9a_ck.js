import{j as t,g as n}from"./iframe-CI9rENOr.js";import{A as r}from"./action-form-DDGl3-Xl.js";import"./preload-helper-C65H2kRp.js";import"./DropdownField-BtgmtoFd.js";import"./debounce-r7EOKfq-.js";import"./useOsdkClient-D_P69Zxs.js";import"./index-BaGMdRan.js";import"./Input-DVQjs6N1.js";import"./useBaseUiId-sOlDVMc5.js";import"./useControlled-Cem_rLXf.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./PopoverPopup-CdXPv9sE.js";import"./InternalBackdrop-BeCVxxfg.js";import"./composite-DmfEV9z-.js";import"./index-B9k7nzsO.js";import"./getDisabledMountTransitionStyles-DLh69aYy.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./tick-DYP7mVbi.js";import"./svgIconContainer-BcUTFG9y.js";import"./small-cross-CAdXuenP.js";import"./search-C3IyHFqm.js";import"./cross-DbBPFO7V.js";import"./useValueChanged-B6kyVGgr.js";import"./getPseudoElementBounds-Coe-9CHL.js";import"./CompositeItem-C1H6xqvv.js";import"./makeExternalStore-BWkGDDsC.js";import"./BaseForm-B-DSdiJY.js";import"./ActionButton-sBlmA4ya.js";import"./Button-DhFEEkGk.js";import"./SkeletonBar-DyVv9MEu.js";import"./Tooltip-BRvvJEEZ.js";import"./info-sign-GZksm1-c.js";import"./chevron-up-DS_sfcQU.js";import"./chevron-down-CcfRnQgG.js";import"./useEventCallback-DONfxHkp.js";import"./iconLoader-iSSzg2eh.js";import"./CompositeRoot-76lj2YVG.js";import"./Switch-Bvuyn8q8.js";import"./TimePicker-BDXZLES6.js";import"./CollapsiblePanel-C5gNOdt3.js";import"./error-DGU8szJe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCX_NY4O.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
