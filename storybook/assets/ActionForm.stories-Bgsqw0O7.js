import{j as t,g as n}from"./iframe-BFbL1Gdy.js";import{A as r}from"./action-form-BnGoCwV8.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-Clj3Dq5C.js";import"./useEventCallback-C9L2xivg.js";import"./isEqual-C3incRMf.js";import"./_baseIsEqual-BUpM9Ple.js";import"./PopoverPopup-Dy-HzyQe.js";import"./InternalBackdrop-CgS-H1_5.js";import"./useBaseUiId-B_dYCIar.js";import"./composite-CD4lktG6.js";import"./index-DDIAvSNo.js";import"./index-B-e29tx4.js";import"./index-D8oWUzRK.js";import"./getDisabledMountTransitionStyles-DQZbsbN5.js";import"./ToolbarRootContext-DJCNS1t_.js";import"./Select-Ca8OZlWh.js";import"./useOsdkClient-CwGjW6j8.js";import"./index-B-4LJO37.js";import"./Input-CYN8k52N.js";import"./useControlled-ToeGQqG-.js";import"./tick-DI-jk0OK.js";import"./svgIconContainer-0lXizkcA.js";import"./small-cross-Cx_rak8E.js";import"./search-C8I8REFJ.js";import"./cross-CiiI7JQR.js";import"./useValueChanged-CGdMW2jm.js";import"./getPseudoElementBounds-CAtkH-xO.js";import"./CompositeItem-Du8ycWHV.js";import"./DropdownField-DnpT5rdQ.js";import"./makeExternalStore-Cttn8Ubc.js";import"./BaseForm-VusG0d9D.js";import"./ActionButton-CvItV4wZ.js";import"./Button-B0F0CQLE.js";import"./SkeletonBar-CaDduvDQ.js";import"./Tooltip-BzUCPYl_.js";import"./info-sign-BTWKKIbk.js";import"./chevron-up-CTJ0ou0d.js";import"./chevron-down-BNkVC-pe.js";import"./iconLoader-YOaxK0LF.js";import"./Switch-CjHLdE3O.js";import"./CompositeRoot-AIUHGmEz.js";import"./TimePicker-B0fEGlNk.js";import"./CollapsiblePanel-dt7gQwV1.js";import"./error-CA9h5Tsj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ru8uoXDU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
