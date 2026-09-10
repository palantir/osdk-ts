import{j as t,g as n}from"./iframe-0hzt8uI9.js";import{A as r}from"./action-form-BuvfBqUd.js";import"./preload-helper-DYpcx0vb.js";import"./DropdownField-Cy9YIgDd.js";import"./debounce-yaorJZAj.js";import"./useOsdkClient-EQHkO782.js";import"./index-B8ey7LBN.js";import"./Input-B6yL1HnH.js";import"./useBaseUiId-Dq5-ot3p.js";import"./useControlled-CR71uT_f.js";import"./index-Dz32LMbM.js";import"./index-B5xQNHde.js";import"./PopoverPopup-Qod0bVLX.js";import"./InternalBackdrop-BcHu6G-7.js";import"./composite-DM9rU2PJ.js";import"./index-D6V2RAHr.js";import"./getDisabledMountTransitionStyles-CbRqGhyd.js";import"./ToolbarRootContext-DMiVgANq.js";import"./tick-BoDudvKH.js";import"./svgIconContainer-DbVM6MQd.js";import"./small-cross-zefBxPtr.js";import"./search-DT_KCJGf.js";import"./cross-DjAvUIeX.js";import"./useValueChanged-CYfVIZzo.js";import"./getPseudoElementBounds-ChpkT6mB.js";import"./CompositeItem-B4wf29Ba.js";import"./makeExternalStore-DblTGXsz.js";import"./BaseForm-KfxnU0T3.js";import"./ActionButton-B2lno6-g.js";import"./Button-xLAmrvCU.js";import"./SkeletonBar-gCCYUalJ.js";import"./Tooltip-dz2N5tg8.js";import"./info-sign-Ddg3QpLZ.js";import"./chevron-up-FZsPsJr-.js";import"./chevron-down-EB3ta9K0.js";import"./useEventCallback-BlRZj7C1.js";import"./iconLoader-BEDUk7aw.js";import"./CompositeRoot-DX6iOnyK.js";import"./Switch-Dt_O90Jr.js";import"./TimePicker-DZ43IF70.js";import"./CollapsiblePanel-BJYiJbwQ.js";import"./error-CvvhWrfu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-udXbveSG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
