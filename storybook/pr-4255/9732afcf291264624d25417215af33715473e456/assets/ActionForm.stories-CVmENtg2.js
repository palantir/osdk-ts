import{j as t,g as n}from"./iframe-D6y6_Ifg.js";import{A as r}from"./action-form-wZi73fO8.js";import"./preload-helper-DyU-boOC.js";import"./DropdownField-B-Y7S6ow.js";import"./debounce-CShglMk9.js";import"./useOsdkClient-CSuFL6LS.js";import"./index-BGSHUEgZ.js";import"./Input-yKev__cZ.js";import"./useBaseUiId-BqYaQHeS.js";import"./useControlled-BqujvQcb.js";import"./index-DCLjYuV8.js";import"./index-BgYri-U-.js";import"./PopoverPopup-GQEpG8wD.js";import"./InternalBackdrop-Ddo5KuLP.js";import"./composite-DjaGlwPS.js";import"./index-C3VTJ_3W.js";import"./getDisabledMountTransitionStyles-uDupN6Zi.js";import"./ToolbarRootContext-CGSlDNd6.js";import"./tick-3tfAK9_o.js";import"./svgIconContainer-kSsZGyO3.js";import"./small-cross-BJjPBosz.js";import"./search-Ds3QYjxm.js";import"./cross-DjwwagZM.js";import"./useValueChanged-DgtVOjIu.js";import"./getPseudoElementBounds-BpTbd1eR.js";import"./CompositeItem-DO83W1mC.js";import"./makeExternalStore-ITPdtG8P.js";import"./BaseForm-C93YXHLe.js";import"./ActionButton-Drswk3OR.js";import"./Button-CWXM-Cv5.js";import"./SkeletonBar-CDnWHSD6.js";import"./Tooltip-CiApLGcm.js";import"./info-sign-FpgXp94z.js";import"./chevron-up-B2dMjxiG.js";import"./chevron-down-tZEFHgnG.js";import"./useEventCallback-Ctt9oFuA.js";import"./iconLoader-TQ6N8ObB.js";import"./Switch-Tbl03zRy.js";import"./CompositeRoot-DumO2App.js";import"./TimePicker-BThZHaA2.js";import"./CollapsiblePanel-Cz_Uq3Uc.js";import"./error-kgzj6SX8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DLWDjTSp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
