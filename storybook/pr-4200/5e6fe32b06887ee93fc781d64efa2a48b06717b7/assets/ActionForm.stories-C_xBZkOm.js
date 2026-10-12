import{j as t,g as n}from"./iframe-BIQDpA0w.js";import{A as r}from"./action-form-VF4wMMeY.js";import"./preload-helper-CAkujj7t.js";import"./DropdownField-7skf6f3x.js";import"./debounce-1gOgvEv_.js";import"./useOsdkClient-CTsijBB9.js";import"./index-QJcQchwi.js";import"./Input-C1BIZDwN.js";import"./useBaseUiId-HWzj2ccw.js";import"./useControlled-JCzKMRhN.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./PopoverPopup-CbUhKq8w.js";import"./InternalBackdrop-DMwmGhme.js";import"./composite-DWMEotDY.js";import"./index-BIXocC3w.js";import"./getDisabledMountTransitionStyles-DLEuvAo9.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./tick-CECUkR10.js";import"./svgIconContainer-Beiwk1zG.js";import"./small-cross-CBUOmFXX.js";import"./search-BU70SvPR.js";import"./cross-BhokxWW9.js";import"./useValueChanged-C1ElPd55.js";import"./getPseudoElementBounds-DI-soIk4.js";import"./CompositeItem-k0wax-H2.js";import"./makeExternalStore-DY4la4Jo.js";import"./BaseForm-Ds4nSkbe.js";import"./ActionButton-DMzTeECz.js";import"./Button-CwWS2Nno.js";import"./SkeletonBar-B43s3nN1.js";import"./Tooltip-DtFYkYWu.js";import"./info-sign-B0MRn2eQ.js";import"./chevron-up-9nvyOGkG.js";import"./chevron-down-C5in3kf4.js";import"./useEventCallback-BzVAB-mp.js";import"./iconLoader-C7pQSgnY.js";import"./Switch-Gi45xVq-.js";import"./CompositeRoot-DzG4Vn95.js";import"./TimePicker-hcRYUVJI.js";import"./CollapsiblePanel-DHXJGM_8.js";import"./error-D2lGBY9x.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMxdO0Ca.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
