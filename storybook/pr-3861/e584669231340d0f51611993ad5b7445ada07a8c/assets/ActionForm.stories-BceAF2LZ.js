import{j as t,g as n}from"./iframe-CtGIC4wf.js";import{A as r}from"./action-form-BCOr02tH.js";import"./preload-helper-Ch20KRc2.js";import"./DropdownField-Cfkapk5B.js";import"./debounce-l8hrNpo8.js";import"./useOsdkClient-MCjUhV1U.js";import"./index-D-8enqIL.js";import"./Input-CpszBXLO.js";import"./useBaseUiId-DmITm_fg.js";import"./useControlled-Dn14MKUN.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./PopoverPopup-Br8L-Z3H.js";import"./InternalBackdrop-C6_oJFVY.js";import"./composite-BpxrOvE9.js";import"./index-AbkXWi4D.js";import"./getDisabledMountTransitionStyles-GHCQL6h5.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./tick-BOhfL1zL.js";import"./svgIconContainer-CIwPC-KF.js";import"./small-cross-BW3uw9Pp.js";import"./search-w1jm1zVn.js";import"./cross-7ld4MA3o.js";import"./useValueChanged-hcUETskz.js";import"./getPseudoElementBounds-BIuGb1kA.js";import"./CompositeItem-Blb9OYTf.js";import"./makeExternalStore-WvYcSVhg.js";import"./BaseForm-CBpzdo1m.js";import"./ActionButton-9nlxbcnf.js";import"./Button-Bzw6-RIC.js";import"./SkeletonBar--zC5Nde7.js";import"./Tooltip-BlDgcFqM.js";import"./info-sign-CaG2Gzp2.js";import"./chevron-up-Bd3-i9IO.js";import"./chevron-down-kLepJLrY.js";import"./useEventCallback-oTKJ3xMt.js";import"./iconLoader-B3F8YMNb.js";import"./CompositeRoot-om5jhTSf.js";import"./Switch-DJhDlbos.js";import"./TimePicker-CZcBY1p5.js";import"./CollapsiblePanel-Bsia-ST0.js";import"./error-C6MzmjpC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ozl4Wy9n.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
