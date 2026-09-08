import{j as t,g as n}from"./iframe-JhP61fmQ.js";import{A as r}from"./action-form-f1fzFwaG.js";import"./preload-helper-Dv4AHPyi.js";import"./DropdownField-DhCekDmi.js";import"./debounce-Bze7pKAd.js";import"./useOsdkClient-DvwuNmgk.js";import"./index-BSmeSe50.js";import"./Input-CRfOnocM.js";import"./useBaseUiId-CA99nDKM.js";import"./useControlled-CmxJ51VA.js";import"./index-D3ENcNCA.js";import"./index-hdo2lGgd.js";import"./PopoverPopup-CA9gw9sj.js";import"./InternalBackdrop-C5yqQ4th.js";import"./composite-BB4dZRYR.js";import"./index-D7wU48Sj.js";import"./getDisabledMountTransitionStyles-Ckk4q5Pv.js";import"./ToolbarRootContext-D0sVvk8L.js";import"./tick-CP7Ao593.js";import"./svgIconContainer-DKp8J6V9.js";import"./small-cross-oBgym-zX.js";import"./search-CT7W-ise.js";import"./cross-Dsbhsz94.js";import"./useValueChanged-CkObsYLU.js";import"./getPseudoElementBounds-B6I1n0Dl.js";import"./CompositeItem-9QryHf4D.js";import"./makeExternalStore-CSQl7Sbm.js";import"./BaseForm-BhvA6Y_w.js";import"./ActionButton-qgx9p82l.js";import"./Button-CndCZNKo.js";import"./SkeletonBar-Dhm6G2dC.js";import"./Tooltip-CmSYJPe_.js";import"./info-sign-S9XS-ZED.js";import"./chevron-up-zn51GN14.js";import"./chevron-down-B0H-_dR_.js";import"./useEventCallback-DZNv6pry.js";import"./iconLoader-DrHqZ4zP.js";import"./CompositeRoot-B5L22UnF.js";import"./Switch-qXlX9iln.js";import"./TimePicker-B-NnSBJ1.js";import"./CollapsiblePanel-AJl5CmxO.js";import"./error-Cz6c6olR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BFR4d_uj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
