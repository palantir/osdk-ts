import{j as t,g as n}from"./iframe-UMA_W4zg.js";import{A as r}from"./action-form-DclmAuby.js";import"./preload-helper-DaWmOC6j.js";import"./DropdownField-CPG2IfxA.js";import"./debounce-DbOnd40f.js";import"./useOsdkClient-DJyPXQs4.js";import"./index-DErLZjti.js";import"./Input-B7UvCAbi.js";import"./useBaseUiId-DrNqzCDV.js";import"./useControlled-CE_jt1bn.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./PopoverPopup-9-F50C0V.js";import"./InternalBackdrop-Cv-jCIPc.js";import"./composite-cvyf7rpJ.js";import"./index-B3bK0vsc.js";import"./getDisabledMountTransitionStyles-BxLbi0RQ.js";import"./ToolbarRootContext-BoABXtXA.js";import"./tick-0wfK4xfn.js";import"./svgIconContainer-9DAz-xsT.js";import"./small-cross-CzUurzMY.js";import"./search-DDqiAHNJ.js";import"./cross-uHksr5pp.js";import"./useValueChanged-BNApxWdw.js";import"./getPseudoElementBounds-DNHUImXR.js";import"./CompositeItem-CW8dWwRY.js";import"./makeExternalStore-Cw5EimAG.js";import"./BaseForm-JGhY6OSM.js";import"./ActionButton-B7RzNoqN.js";import"./Button-CX0KG7k8.js";import"./SkeletonBar-C7upQ1oN.js";import"./Tooltip-CRExDwDA.js";import"./info-sign-AOGMLrZN.js";import"./chevron-up-CL38ih1s.js";import"./chevron-down-Bl-z4KIc.js";import"./useEventCallback-BylinRJz.js";import"./iconLoader-Carg7nXL.js";import"./Switch-CuE0aXuy.js";import"./CompositeRoot-B5e6HIoO.js";import"./TimePicker-D5ChQJAV.js";import"./CollapsiblePanel-CrqQkYc4.js";import"./error-CSAcfTyc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-SDJh6Z2p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
