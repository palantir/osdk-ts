import{j as t,g as n}from"./iframe-BLH-rzjX.js";import{A as r}from"./action-form-BZdoGKxy.js";import"./preload-helper-Boseizqx.js";import"./DropdownField-DKQdUIUg.js";import"./debounce-7gj880Zc.js";import"./useOsdkClient-B89sr5Rr.js";import"./index-BshiJ0vb.js";import"./Input-ChiRpiSd.js";import"./useBaseUiId-_L7E6isP.js";import"./useControlled-DoMCNvxt.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./PopoverPopup-C1mq6siy.js";import"./InternalBackdrop-DJXpTlYo.js";import"./composite-CJF2SW-C.js";import"./index-DhrrZED7.js";import"./getDisabledMountTransitionStyles-D801SK_0.js";import"./ToolbarRootContext-N5PisKcU.js";import"./tick-Do25CLpe.js";import"./svgIconContainer-ClFD8O3h.js";import"./small-cross-CxW1zdvK.js";import"./search-Dcpgl82t.js";import"./cross-CjxN7NXy.js";import"./useValueChanged-BtzRyrp7.js";import"./getPseudoElementBounds-DPi59aQg.js";import"./CompositeItem-tv6DhAGC.js";import"./makeExternalStore-VNm4xFie.js";import"./BaseForm-DV6U4lN3.js";import"./ActionButton-CNmUd466.js";import"./Button-Cb7__wFY.js";import"./SkeletonBar-2jCSSfIk.js";import"./Tooltip-CNF5wHNx.js";import"./info-sign-CzDdeKLw.js";import"./chevron-up-CHdoJCyJ.js";import"./chevron-down-gdTU0sCy.js";import"./useEventCallback-CvA-dmQo.js";import"./iconLoader-BZ-DodNb.js";import"./Switch-CV3wIT0M.js";import"./CompositeRoot-h8Sldw2w.js";import"./TimePicker-DXdl0Onq.js";import"./CollapsiblePanel-D2wDAZ7-.js";import"./error-CxjKCqiV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNvw97j4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
