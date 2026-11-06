import{j as t,g as n}from"./iframe-BX25vaaY.js";import{A as r}from"./action-form-BRPzT7QI.js";import"./preload-helper-B4fqOqCe.js";import"./DropdownField-BMURQ1aW.js";import"./debounce-CJILhTW-.js";import"./useOsdkClient-BMWDxtmb.js";import"./index-cHBOMeEB.js";import"./Input-B7_1OxfG.js";import"./useBaseUiId-CcSHD2go.js";import"./useControlled-CncYrOIz.js";import"./index-CwTTdI6G.js";import"./index-3gZ9GYf_.js";import"./PopoverPopup-BlgnwBvy.js";import"./InternalBackdrop-DAZjwhZx.js";import"./composite-CR6ea9de.js";import"./index-Z6EGSFM5.js";import"./getDisabledMountTransitionStyles-DhBpb285.js";import"./ToolbarRootContext-aY85yZom.js";import"./tick-D6Q1wyk4.js";import"./svgIconContainer-CdYxDvot.js";import"./small-cross-ua1KNA1W.js";import"./search-Cq3hJNRT.js";import"./cross-DYoAuDNi.js";import"./useValueChanged-B5wvfKOk.js";import"./getPseudoElementBounds-CIQTJ_fk.js";import"./CompositeItem-CmMVOFT8.js";import"./makeExternalStore-M7acJIlW.js";import"./BaseForm-BkuoSDY8.js";import"./ActionButton-YaVL47EC.js";import"./Button-_HXzGyBt.js";import"./SkeletonBar-iUlUOGnb.js";import"./Tooltip-CQ8DNFV6.js";import"./info-sign-as5nRQwQ.js";import"./chevron-up-CB4ety78.js";import"./chevron-down-EEZ-gmtO.js";import"./useEventCallback-rCSZBNnH.js";import"./iconLoader-Bf3M--B1.js";import"./Switch-BJkXqqXC.js";import"./CompositeRoot-DppAllgP.js";import"./TimePicker-CplVPn8q.js";import"./CollapsiblePanel-DUxCMy3H.js";import"./error-CJ3zu-Fv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-WVBxLOJx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
