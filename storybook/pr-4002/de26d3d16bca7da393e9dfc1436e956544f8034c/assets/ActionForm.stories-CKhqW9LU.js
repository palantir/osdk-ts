import{j as t,g as n}from"./iframe-CDKj6riZ.js";import{A as r}from"./action-form-DqaecI8s.js";import"./preload-helper-2bCQFHut.js";import"./DropdownField-CvpHFiWC.js";import"./debounce-BwcIUiDW.js";import"./useOsdkClient-DGLHrUME.js";import"./index-DetP7shj.js";import"./Input-BFZp6n3R.js";import"./useBaseUiId-_WJi2oWJ.js";import"./useControlled-XE9pZf79.js";import"./index-B2o7iGnK.js";import"./index-CjcUdmkL.js";import"./PopoverPopup-Cd1GWSO-.js";import"./InternalBackdrop-gfABYBaE.js";import"./composite-CqNHIi7L.js";import"./index-Crh_ASHH.js";import"./getDisabledMountTransitionStyles-RTgAaaG2.js";import"./ToolbarRootContext-BCzvZYHk.js";import"./tick-DFRTfwJn.js";import"./svgIconContainer-CbX48z79.js";import"./small-cross-5rAHwMU9.js";import"./search-DvJSVec5.js";import"./cross-BYAFUA7Y.js";import"./useValueChanged-Coru2arj.js";import"./getPseudoElementBounds-DABSHmAT.js";import"./CompositeItem-B3wPzhHU.js";import"./makeExternalStore-jqVUK_Pp.js";import"./BaseForm-DoiB0xe-.js";import"./ActionButton-BkP-JJoD.js";import"./Button-CG5FCWgZ.js";import"./SkeletonBar-Cssm9L3x.js";import"./Tooltip-CWLV-0q5.js";import"./info-sign-BRbh0Tjr.js";import"./chevron-up-BeMcZKJw.js";import"./chevron-down-BsLIY-zC.js";import"./useEventCallback-CDEXMXWY.js";import"./iconLoader-oFH23o-S.js";import"./CompositeRoot-B6gPBFF4.js";import"./Switch-ptZacr1Q.js";import"./TimePicker-Cx-An8CI.js";import"./CollapsiblePanel-zQS1BJ72.js";import"./error-RLt_WdpY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-RKhA3pS2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
