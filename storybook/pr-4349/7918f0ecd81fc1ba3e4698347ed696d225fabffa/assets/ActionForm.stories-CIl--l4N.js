import{j as t,g as n}from"./iframe-DZSjsAiP.js";import{A as r}from"./action-form-DN3MgXLc.js";import"./preload-helper-DRp4yq1n.js";import"./DropdownField-DScFQheE.js";import"./debounce-BY9LZGam.js";import"./useOsdkClient-Dqm5L56v.js";import"./index-CfG6lRDS.js";import"./Input-D45tcUlW.js";import"./useBaseUiId-DqEZVBYJ.js";import"./useControlled-CW4hq1Ru.js";import"./index-BKSH5ZIy.js";import"./index-CPoJpgxQ.js";import"./PopoverPopup-BB3NXsKU.js";import"./InternalBackdrop-ctv3Ze3z.js";import"./composite-C_s-Ej-L.js";import"./index-CLFNZu11.js";import"./getDisabledMountTransitionStyles-DuVbYN_c.js";import"./ToolbarRootContext-DC4x9xJZ.js";import"./tick-DuDzm3Ok.js";import"./svgIconContainer-oLZG0PXz.js";import"./small-cross-DZyRXeJ7.js";import"./search-BIZEGKYQ.js";import"./cross-DuxYv-Qd.js";import"./useValueChanged-BwN-noW6.js";import"./getPseudoElementBounds-BIjCqLho.js";import"./CompositeItem-BdQ_Qgkw.js";import"./makeExternalStore-BvoRFHwl.js";import"./BaseForm-B_VEfO94.js";import"./ActionButton-DXV2VJ-U.js";import"./Button-DFAegWDw.js";import"./SkeletonBar-BxwS5lxe.js";import"./Tooltip-DnOhR-9t.js";import"./info-sign-6V6wLMeb.js";import"./chevron-up-C7PgrgSz.js";import"./chevron-down-Cf7GCw_E.js";import"./useEventCallback-CzHnZD9n.js";import"./iconLoader-Dqtu0X2u.js";import"./Switch-DTOuBkF1.js";import"./CompositeRoot-B6oBrjAd.js";import"./TimePicker-DaK92oVd.js";import"./CollapsiblePanel-CEmxw9fT.js";import"./error-w1f9WiTY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DwbEPMEH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
