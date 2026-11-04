import{j as t,g as n}from"./iframe-DrF4uDXw.js";import{A as r}from"./action-form-DmiMewFL.js";import"./preload-helper-u_zBXynr.js";import"./DropdownField-D6v5zaPU.js";import"./debounce-CWgpGISZ.js";import"./useOsdkClient-DIPpS90p.js";import"./index-CVI5kV9I.js";import"./Input-CdEHyPrX.js";import"./useBaseUiId-C9RyiOK8.js";import"./useControlled-CZU-WiQ8.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./PopoverPopup-g1OrYGZg.js";import"./InternalBackdrop-DofvZUsK.js";import"./composite-Bq13iBNY.js";import"./index-BnGuicAT.js";import"./getDisabledMountTransitionStyles-BEvFk-mr.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./tick-DD1ZkEBA.js";import"./svgIconContainer-DTs7PmKd.js";import"./small-cross-CJbFFKn2.js";import"./search-CELVamy6.js";import"./cross-CpHoxb52.js";import"./useValueChanged-zSpMIuHM.js";import"./getPseudoElementBounds-D-ciol2Y.js";import"./CompositeItem-D46vdXYg.js";import"./makeExternalStore-DYuKTott.js";import"./BaseForm-DHk2V2vg.js";import"./ActionButton-BLh9uJNd.js";import"./Button-YLbQ9ZAy.js";import"./SkeletonBar-0N9X2Eze.js";import"./Tooltip-cvIFboQ2.js";import"./info-sign-BGmHFtrz.js";import"./chevron-up-Dq83_18J.js";import"./chevron-down-DrKAguLe.js";import"./useEventCallback-BTghxZoS.js";import"./iconLoader-BKa63g22.js";import"./Switch-C1DrFUF9.js";import"./CompositeRoot-DEfZtucj.js";import"./TimePicker-DBkkC8rH.js";import"./CollapsiblePanel-C9eazrfz.js";import"./error-LoVtbcsO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CRS-8bKl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
