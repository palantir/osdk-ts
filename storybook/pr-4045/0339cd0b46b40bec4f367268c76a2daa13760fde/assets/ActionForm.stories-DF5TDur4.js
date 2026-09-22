import{j as t,g as n}from"./iframe-CEjFXQ7i.js";import{A as r}from"./action-form-C1gBo5LU.js";import"./preload-helper-DLeq1RMI.js";import"./DropdownField-vSNq3qus.js";import"./debounce-CTnh9aDY.js";import"./useOsdkClient-CvwDornw.js";import"./index-D6JFDMhk.js";import"./Input-CyL2x7p2.js";import"./useBaseUiId-DIsNXkIK.js";import"./useControlled-Bactb4pm.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./PopoverPopup-2vrtL-xw.js";import"./InternalBackdrop-cEsiiajq.js";import"./composite-YofervN4.js";import"./index-D4xdv--D.js";import"./getDisabledMountTransitionStyles-CCQ6XSw9.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./tick-lx03iSJA.js";import"./svgIconContainer-BmnNwyNQ.js";import"./small-cross-OzagSQJN.js";import"./search-BURF39r2.js";import"./cross-D6CNu_FK.js";import"./useValueChanged-BcDYkwEW.js";import"./getPseudoElementBounds-CVu5NcY5.js";import"./CompositeItem-B1vfMTcy.js";import"./makeExternalStore-79RiVGfc.js";import"./BaseForm-C6JDChZ6.js";import"./ActionButton-ChX-Jzpd.js";import"./Button-4xVurfNi.js";import"./SkeletonBar-DT9hE4gv.js";import"./Tooltip-BN52KZ5N.js";import"./info-sign-zacNVKGm.js";import"./chevron-up-BrswIa9v.js";import"./chevron-down-B26wW5MT.js";import"./useEventCallback-DO0KrF-A.js";import"./iconLoader-BJLmDGvG.js";import"./Switch-KLs4CswT.js";import"./CompositeRoot-Cs_ogeyT.js";import"./TimePicker-BqKrwanI.js";import"./CollapsiblePanel-fy30LupE.js";import"./error-Bcog9g9V.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DOR5d9wI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
