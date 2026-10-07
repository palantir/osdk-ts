import{j as t,g as n}from"./iframe-CDX-NTfD.js";import{A as r}from"./action-form-DMuWQYHI.js";import"./preload-helper-CSvLju02.js";import"./DropdownField-CQBpCIOv.js";import"./debounce-D1B6swv0.js";import"./useOsdkClient-ZKN6ZGl4.js";import"./index-D6xAz9PB.js";import"./Input-Dz-cSGCu.js";import"./useBaseUiId-CM3Yhx5P.js";import"./useControlled-CLUlXrHb.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./PopoverPopup-BLtOX9gX.js";import"./InternalBackdrop-DiaJjHCs.js";import"./composite-CpWLo2c3.js";import"./index-B2Z1_nfV.js";import"./getDisabledMountTransitionStyles-DJOApo6o.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./tick-BHhyW78u.js";import"./svgIconContainer-99TPvqBc.js";import"./small-cross-5qXULdiz.js";import"./search-DvrI77MS.js";import"./cross-CUWzhEFb.js";import"./useValueChanged-CsNJxGB2.js";import"./getPseudoElementBounds-Dfao8WFR.js";import"./CompositeItem-nsBHK6f-.js";import"./makeExternalStore-DXrOIATy.js";import"./BaseForm-BKzRITF_.js";import"./ActionButton-bEISj8yJ.js";import"./Button-CscfG-hh.js";import"./SkeletonBar-Dt_qbNYC.js";import"./Tooltip-BVBB5Hov.js";import"./info-sign-BLHJQJ-G.js";import"./chevron-up-CWV7V4BU.js";import"./chevron-down-r7sEOhf_.js";import"./useEventCallback-Cd_Dk0li.js";import"./iconLoader-QXmScIk2.js";import"./Switch-BUS44qff.js";import"./CompositeRoot-G0IwBiJo.js";import"./TimePicker-DwmZvve7.js";import"./CollapsiblePanel-OIYRVxIj.js";import"./error-BplB6VbP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CUdmlJda.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
