import{j as t,g as n}from"./iframe-weo2ftOt.js";import{A as r}from"./action-form-U4HibwOR.js";import"./preload-helper-CccATkyg.js";import"./DropdownField-DBrFB89T.js";import"./debounce-C2Mlteaf.js";import"./useOsdkClient-DWTjpIGp.js";import"./index-BzFNlzeA.js";import"./Input-DDH0znUE.js";import"./useBaseUiId-Ca9MSPeN.js";import"./useControlled-BR3V1Gxk.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./PopoverPopup-B1Tf3m9o.js";import"./InternalBackdrop-CuieHGY6.js";import"./composite-CXbXQTWA.js";import"./index-BdXrAkiS.js";import"./getDisabledMountTransitionStyles-CJygm4kF.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./tick-2nC9-KBm.js";import"./svgIconContainer-4wqza-Yn.js";import"./small-cross-DMF81cbr.js";import"./search-D7AcF35x.js";import"./cross-DFxtUTH2.js";import"./useValueChanged-47o-AHo4.js";import"./getPseudoElementBounds-B7YRzaVu.js";import"./CompositeItem-tLUZG1Hv.js";import"./makeExternalStore-CGRq4C4C.js";import"./BaseForm-diyO6Vne.js";import"./ActionButton-yOO-hwGF.js";import"./Button-DTZufqgI.js";import"./SkeletonBar-CDPR9pBR.js";import"./Tooltip-BZAy0DbI.js";import"./info-sign-uSLMOMZI.js";import"./chevron-up-DOxm5O-b.js";import"./chevron-down-BqDjxAzh.js";import"./useEventCallback-CDd5n6gg.js";import"./iconLoader-Dpn4LwSG.js";import"./Switch-yjLMbEou.js";import"./CompositeRoot-BVmunixJ.js";import"./TimePicker-BjDX1G6v.js";import"./CollapsiblePanel-MUmgFy3O.js";import"./error-LA7kedRF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-td22ADns.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
