import{j as t,g as n}from"./iframe-70ZuGjkJ.js";import{A as r}from"./action-form-DfRpUGJr.js";import"./preload-helper-DK4xKHY4.js";import"./DropdownField-B1h3MVUP.js";import"./debounce-B50OUnXf.js";import"./useOsdkClient-D5Q8UXIy.js";import"./index-CckhOj8-.js";import"./Input-sBtVPl75.js";import"./useBaseUiId-CqgzcpTd.js";import"./useControlled-0e2XrUt8.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./PopoverPopup-Cy9eVAix.js";import"./InternalBackdrop-BAIsbWIF.js";import"./composite-E4mw46H8.js";import"./index-CPgNI8HV.js";import"./getDisabledMountTransitionStyles-DjkGWHfc.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./tick-eYRv4TLQ.js";import"./svgIconContainer-CtTs4nyb.js";import"./small-cross-CYwlKW4r.js";import"./search-_UcRnrjw.js";import"./cross-CO8zitM2.js";import"./useValueChanged-CQFhtmgn.js";import"./getPseudoElementBounds-CmYlGZ2P.js";import"./CompositeItem-A9SMjz1N.js";import"./makeExternalStore-Vi6b8A7J.js";import"./BaseForm-hXQpEM0F.js";import"./ActionButton-B4h22XNy.js";import"./Button-D2KYgMT_.js";import"./SkeletonBar-t3va8Dsz.js";import"./Tooltip-I-YOK7jy.js";import"./info-sign-DmG5wBk0.js";import"./chevron-up-Bc4KJtHs.js";import"./chevron-down-BPIjaHnC.js";import"./useEventCallback-Cl-1X7df.js";import"./iconLoader-BXwkbCcH.js";import"./Switch-B2rZM8Gz.js";import"./CompositeRoot-B4pg0K7R.js";import"./TimePicker-BMKRPMXi.js";import"./CollapsiblePanel-2ZNF-ZYn.js";import"./error-Ho0rrjia.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DyYS57kA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
