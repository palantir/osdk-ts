import{j as t,g as n}from"./iframe-DzAVrHJ1.js";import{A as r}from"./action-form-tyve1XqO.js";import"./preload-helper-ty-K3PMW.js";import"./DropdownField-DPtluWvH.js";import"./debounce-BdQCzqPM.js";import"./useOsdkClient-CMKwPtVZ.js";import"./index-C292Gvtl.js";import"./Input-BlhxiPuo.js";import"./useBaseUiId-C1k_ZcgS.js";import"./useControlled-P8ZVsLoA.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./PopoverPopup-BfNxXbJo.js";import"./InternalBackdrop-BDeEY7y8.js";import"./composite-CMwdngwB.js";import"./index-BITESRA3.js";import"./getDisabledMountTransitionStyles-BvYKup6L.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./tick-kpTktDfZ.js";import"./svgIconContainer-Cjn3QLE6.js";import"./small-cross-BSn3VnZ1.js";import"./search-Bq5r2eJD.js";import"./cross-CwuqZdL9.js";import"./useValueChanged-DsB7tdZ5.js";import"./getPseudoElementBounds-BHcHYgUs.js";import"./CompositeItem-DvTwYr0k.js";import"./makeExternalStore-DMxEFrb0.js";import"./BaseForm-6doo1BCE.js";import"./ActionButton-OV3tGcjp.js";import"./Button-G6bICRGy.js";import"./SkeletonBar-CCisd-VN.js";import"./Tooltip-QlEg8iZs.js";import"./info-sign-CQMo0eXA.js";import"./chevron-up-DidJDvhy.js";import"./chevron-down-BLhnWXgc.js";import"./useEventCallback-ClRDKuB_.js";import"./iconLoader-Dl0WhNS2.js";import"./Switch-B2oyQq79.js";import"./CompositeRoot-f8bEw9LB.js";import"./TimePicker-yvKdsHGs.js";import"./CollapsiblePanel-DZRV367u.js";import"./error-BRilv6DJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C01mqZCt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
