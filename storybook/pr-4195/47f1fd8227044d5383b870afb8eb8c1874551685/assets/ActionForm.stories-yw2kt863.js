import{j as t,g as n}from"./iframe-Brmfbmz5.js";import{A as r}from"./action-form-CD1_JXTt.js";import"./preload-helper-DOndN82M.js";import"./DropdownField-C8ZOeSWx.js";import"./debounce-7VY6siZ3.js";import"./useOsdkClient-L9Axw6J7.js";import"./index-CdHtMllz.js";import"./Input-BEXhNqGp.js";import"./useBaseUiId-DOGmrDtt.js";import"./useControlled-B9XW-ROk.js";import"./index-DIAM2hNo.js";import"./index-Dr0L57xQ.js";import"./PopoverPopup-C2QBGYEY.js";import"./InternalBackdrop-BBaC-oN-.js";import"./composite-RDVcdR-R.js";import"./index-CiHCZajJ.js";import"./getDisabledMountTransitionStyles-DnHbaKev.js";import"./ToolbarRootContext-DJZTCp8t.js";import"./tick-CC58sMYT.js";import"./svgIconContainer-Cy0NnLfo.js";import"./small-cross-CYkGPall.js";import"./search-DtsbzCVy.js";import"./cross-fGiz3Rjs.js";import"./useValueChanged-Dxcrt-LB.js";import"./getPseudoElementBounds-DBTAfkRQ.js";import"./CompositeItem-CAOvInfw.js";import"./makeExternalStore-BLoslo8k.js";import"./BaseForm-Dg13t0HO.js";import"./ActionButton-DhxyDZhK.js";import"./Button-BUGtRXvM.js";import"./SkeletonBar-Ctx3x6Sq.js";import"./Tooltip-DTsAOBOi.js";import"./info-sign-BCnfNpWD.js";import"./chevron-up-CzrM3MPI.js";import"./chevron-down-Bstv9WV1.js";import"./useEventCallback-C-UQ4FkC.js";import"./iconLoader-XhZ7IgXQ.js";import"./Switch-sEk8TOGZ.js";import"./CompositeRoot-CuDRvtQN.js";import"./TimePicker-XzlEaX2j.js";import"./CollapsiblePanel-CxH7OGUx.js";import"./error-CqVZQ730.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-By8VTH2x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
