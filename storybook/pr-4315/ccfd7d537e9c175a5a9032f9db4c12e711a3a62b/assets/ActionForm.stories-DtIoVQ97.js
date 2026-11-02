import{j as t,g as n}from"./iframe-DDJWwqBY.js";import{A as r}from"./action-form-3loh7XfW.js";import"./preload-helper-DOjHdaCa.js";import"./DropdownField-6XnrFdNT.js";import"./debounce-B-ViHwUG.js";import"./useOsdkClient-BQG1YgSO.js";import"./index-C1ZTpjxr.js";import"./Input-DxhVC9Qb.js";import"./useBaseUiId-cxXVDzQK.js";import"./useControlled-CWWChH0p.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./PopoverPopup-9EDLzBq6.js";import"./InternalBackdrop-C9Vpy4n2.js";import"./composite-CGLo9xHo.js";import"./index-D9JRRyZT.js";import"./getDisabledMountTransitionStyles-CzkaxE6g.js";import"./ToolbarRootContext-CwaM14ur.js";import"./tick-nUpkpaC6.js";import"./svgIconContainer-CFPdoyWo.js";import"./small-cross-DfHs2ftm.js";import"./search-d3_uaTlG.js";import"./cross-B0JuOba7.js";import"./useValueChanged-IbZDGfz8.js";import"./getPseudoElementBounds-CUXD3vIq.js";import"./CompositeItem-BdeXH3Aq.js";import"./makeExternalStore-D6MI5hxD.js";import"./BaseForm-DRqWCTVc.js";import"./ActionButton-Dt65wsJu.js";import"./Button-HOAjx8sN.js";import"./SkeletonBar-DOvjgVAK.js";import"./Tooltip-DaL85JuH.js";import"./info-sign-gkZqnJ_d.js";import"./chevron-up-BuFZq_Ji.js";import"./chevron-down-CEmh4RKU.js";import"./useEventCallback-OeLjI0ls.js";import"./iconLoader-BOFx3npk.js";import"./Switch-DfqDK0Hr.js";import"./CompositeRoot-zt4Ih1Im.js";import"./TimePicker-B9Fg3smb.js";import"./CollapsiblePanel-DQh2Sft9.js";import"./error-DWlGgPFi.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCd9Mm8M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
