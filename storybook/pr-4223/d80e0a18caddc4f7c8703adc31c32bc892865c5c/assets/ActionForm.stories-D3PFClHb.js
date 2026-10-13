import{j as t,g as n}from"./iframe-CBRNe0Dg.js";import{A as r}from"./action-form-C3Ppt8EX.js";import"./preload-helper-DJi7bbUl.js";import"./DropdownField-BFeUwC4l.js";import"./debounce-B56v9xFw.js";import"./useOsdkClient-AKuj0MEq.js";import"./index-BSRDLVEM.js";import"./Input-DE2kadHj.js";import"./useBaseUiId-D_HMOfD5.js";import"./useControlled-DvLu4sEA.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./PopoverPopup-09yaNLgW.js";import"./InternalBackdrop-KEsOgzDz.js";import"./composite-BuD5KbGT.js";import"./index-BiTypZqh.js";import"./getDisabledMountTransitionStyles-BaZsOBxZ.js";import"./ToolbarRootContext-DULN64W3.js";import"./tick-B2SeXnIY.js";import"./svgIconContainer-BBVFHmV2.js";import"./small-cross-PLNqiuOL.js";import"./search-vRSw7SVB.js";import"./cross-DAsoWhzO.js";import"./useValueChanged-CFTTzEg_.js";import"./getPseudoElementBounds-B95LpML9.js";import"./CompositeItem-Di3J0NmB.js";import"./makeExternalStore-BNcpWlh9.js";import"./BaseForm-DZAbpzQD.js";import"./ActionButton-DKIq8eOB.js";import"./Button-BwFbzqgO.js";import"./SkeletonBar-olnbAch4.js";import"./Tooltip--QZaQjFA.js";import"./info-sign-CyVcU32V.js";import"./chevron-up-Cv2oPjUI.js";import"./chevron-down-B0oPEK-O.js";import"./useEventCallback-D4SpnnAU.js";import"./iconLoader-Df9KaVr0.js";import"./Switch-BkTOy9kU.js";import"./CompositeRoot-C920c645.js";import"./TimePicker-BGhobaP-.js";import"./CollapsiblePanel-B4faU3Bh.js";import"./error-BdLYnG0k.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BL4vab8_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
