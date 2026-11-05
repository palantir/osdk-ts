import{j as t,g as n}from"./iframe-Dhwk5ITi.js";import{A as r}from"./action-form-DhEEIetG.js";import"./preload-helper-DXH7Ji2G.js";import"./DropdownField-CNKhRnuu.js";import"./debounce-D0JC05Tw.js";import"./useOsdkClient-Cu4fdH1j.js";import"./index-CqrX2hSZ.js";import"./Input-BHNHysVZ.js";import"./useBaseUiId-CN9ap6QA.js";import"./useControlled-BzFCle-k.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./isObject-COnjlVPb.js";import"./InternalBackdrop-B16TXcDZ.js";import"./composite-Q4thQ8nQ.js";import"./index-D-uqDeUc.js";import"./getDisabledMountTransitionStyles-DrXurUP0.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./tick-cIKEoG11.js";import"./svgIconContainer-DRo39Sdm.js";import"./small-cross-BCB9roFn.js";import"./search-Be1zlQKz.js";import"./cross-BCTjTq5q.js";import"./useValueChanged-BE0789MN.js";import"./getPseudoElementBounds-BrIYTXPl.js";import"./CompositeItem-fUd5V9Oq.js";import"./makeExternalStore-3kaAWetO.js";import"./BaseForm-OExFtAF6.js";import"./ActionButton-BKUAvIZF.js";import"./Button-DQ5CRvak.js";import"./SkeletonBar-BNjj6R1f.js";import"./Tooltip-B-otFcUC.js";import"./info-sign-amTWCwZJ.js";import"./chevron-up-DeVZ5pga.js";import"./chevron-down-Bi9ECMIR.js";import"./useEventCallback-CtBf5HaK.js";import"./iconLoader-BSdyAruu.js";import"./Switch-CPfrjA4K.js";import"./CompositeRoot-BWFqHTeA.js";import"./TimePicker-DBvj3MpL.js";import"./CollapsiblePanel-DYfViWWc.js";import"./error--SrXy3UU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cikn35t1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
