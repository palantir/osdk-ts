import{j as t,g as n}from"./iframe-B5ExBQzJ.js";import{A as r}from"./action-form-DgkmE2l1.js";import"./preload-helper-BKpiLxff.js";import"./DropdownField-CuMiPFGz.js";import"./debounce-nCAvZ_Bc.js";import"./useOsdkClient-B7gokOKi.js";import"./index-CitCcLFV.js";import"./Input-CsmEMiLS.js";import"./useBaseUiId-DRK3uSj0.js";import"./useControlled-CcsA4hDD.js";import"./index-BTZGq7CS.js";import"./index-Kx0JXijT.js";import"./PopoverPopup-BAey6XRt.js";import"./InternalBackdrop-CXeFT0x7.js";import"./composite-DB1LtyAr.js";import"./index-BlZrfUUz.js";import"./getDisabledMountTransitionStyles-Cah6dQkJ.js";import"./ToolbarRootContext-Cs8zUWV2.js";import"./tick-Cr4ru6YE.js";import"./svgIconContainer-BLHh5YtK.js";import"./small-cross-DS1fUEUb.js";import"./search-l8XKRmqF.js";import"./cross-DAA3CpVw.js";import"./useValueChanged-DuMoPshe.js";import"./getPseudoElementBounds-BKrQcy0D.js";import"./CompositeItem-BnzcVROn.js";import"./makeExternalStore-B8gDjOBd.js";import"./BaseForm-B_XQjeUN.js";import"./ActionButton-c7S57ORf.js";import"./Button-Dzl2Qrvs.js";import"./SkeletonBar-lTk1X37B.js";import"./Tooltip-C7hu51fY.js";import"./info-sign-CdkDsRVt.js";import"./chevron-up-BSqx_FSm.js";import"./chevron-down-DY2jF6xe.js";import"./useEventCallback-CC_Hvq0-.js";import"./iconLoader-BVQvYlwz.js";import"./Switch-BROVgda3.js";import"./CompositeRoot-CvbqH8vD.js";import"./TimePicker-DZs7lB46.js";import"./CollapsiblePanel-DJbTbmJG.js";import"./error-HO3Aksfc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CwxP9zXD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
