import{j as t,g as n}from"./iframe-D8PhF-eH.js";import{A as r}from"./action-form-0fQvs7g7.js";import"./preload-helper-BAjhLXlD.js";import"./DropdownField-D1QY-U9Y.js";import"./debounce-DR7aSozX.js";import"./useOsdkClient-Bm-QDIWM.js";import"./index-GeJSxn-b.js";import"./Input-BVLD4pm0.js";import"./useBaseUiId-B7vHmMIX.js";import"./useControlled-Bb2LNbVb.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./isObject-Ebfvx2IJ.js";import"./InternalBackdrop-CDjt8EEZ.js";import"./composite-D3ANHq5C.js";import"./index-2ug0u_LS.js";import"./getDisabledMountTransitionStyles-CooKzbU3.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./tick-ChgibA9T.js";import"./svgIconContainer-B9myFr8z.js";import"./small-cross-BD-mjh3z.js";import"./search-CFo5JCpY.js";import"./cross-B-SWIjS0.js";import"./useValueChanged-ByyRkrNk.js";import"./getPseudoElementBounds-BQakqMd3.js";import"./CompositeItem-hs5t7L4r.js";import"./makeExternalStore-XQeLMI6O.js";import"./BaseForm-CN8XnYN9.js";import"./ActionButton-fOJ3EwAB.js";import"./Button-DJIgkoJK.js";import"./SkeletonBar-CAeyHB0y.js";import"./Tooltip-BhGdix3S.js";import"./info-sign-DEyZnVz4.js";import"./chevron-up-CfuzuH3q.js";import"./chevron-down-egnrEsvE.js";import"./useEventCallback-ajaCVaB8.js";import"./iconLoader-DYtyXAYb.js";import"./Switch-BQ5fnSGP.js";import"./CompositeRoot-BNpHuEUn.js";import"./TimePicker-OsfN_PO6.js";import"./CollapsiblePanel-D_tXI55U.js";import"./error-odhwE47h.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BIKp0vOQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
