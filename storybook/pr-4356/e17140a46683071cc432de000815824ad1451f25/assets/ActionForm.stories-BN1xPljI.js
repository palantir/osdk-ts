import{j as t,g as n}from"./iframe-wBrbDET_.js";import{A as r}from"./action-form-CtKXgEqo.js";import"./preload-helper-DyV1jABv.js";import"./DropdownField-zauvOy2L.js";import"./debounce-WlMj0UwE.js";import"./useOsdkClient-b3KRZKG8.js";import"./index-Ncx2k3s4.js";import"./Input-DFbvIuq-.js";import"./useBaseUiId-eK3I3qsA.js";import"./useControlled-2_Rn_F3e.js";import"./index-CHgCkFBn.js";import"./index-CmelBQvM.js";import"./PopoverPopup-B9ZQX_rh.js";import"./InternalBackdrop-DejoUS48.js";import"./composite-SIfyViZe.js";import"./index-D0qJZt22.js";import"./getDisabledMountTransitionStyles-tFuKCJy7.js";import"./ToolbarRootContext-BxvlpQpy.js";import"./tick-DBtGJBOW.js";import"./svgIconContainer-Ct8cN05_.js";import"./small-cross-Dckp6UXX.js";import"./search-CoFWb8gE.js";import"./cross-Df39fOvA.js";import"./useValueChanged-FeK06T4Y.js";import"./getPseudoElementBounds-DXS1RVbT.js";import"./CompositeItem-BNWpWAX_.js";import"./makeExternalStore-gYwFGl5I.js";import"./BaseForm-BRTCDm2b.js";import"./ActionButton-DFvb9baL.js";import"./Button-DtJK54aF.js";import"./SkeletonBar-DyKvxgvp.js";import"./Tooltip-sYOln3gS.js";import"./info-sign-GxDUZDHF.js";import"./chevron-up-iImrXYl6.js";import"./chevron-down-Dz6vupYI.js";import"./useEventCallback-CqTheTWA.js";import"./iconLoader-lDCO-O1M.js";import"./Switch-Dm7rGwFO.js";import"./CompositeRoot-CE8MHmA0.js";import"./TimePicker-DBI1m-s2.js";import"./CollapsiblePanel-C3k19iJ9.js";import"./error-lMxpxIBb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-mhV8EPst.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
