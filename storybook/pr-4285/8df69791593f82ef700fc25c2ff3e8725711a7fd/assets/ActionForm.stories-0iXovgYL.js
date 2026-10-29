import{j as t,g as n}from"./iframe-YB9hqlg8.js";import{A as r}from"./action-form-Dh0mrKLe.js";import"./preload-helper-CTcVL9dw.js";import"./DropdownField-CxqUSWcN.js";import"./debounce-CVTcs3d9.js";import"./useOsdkClient-ZayO5M1-.js";import"./index-jQAJu0aU.js";import"./Input-ZdgKVRhe.js";import"./useBaseUiId-BmL79WrH.js";import"./useControlled-XI3b4Slf.js";import"./index-BFeXeiP0.js";import"./index-Bs1x_wg2.js";import"./PopoverPopup-DjR6kB2g.js";import"./InternalBackdrop-BivpzZuB.js";import"./composite-DeqrZPcw.js";import"./index-D3K0AaGz.js";import"./getDisabledMountTransitionStyles-CYvPsy0U.js";import"./ToolbarRootContext-DKnQVXJ0.js";import"./tick-DcZMyZDK.js";import"./svgIconContainer-BewESC0Y.js";import"./small-cross-hcSISMg2.js";import"./search-BY-8te7i.js";import"./cross-CqHbx82J.js";import"./useValueChanged-D9HByNMz.js";import"./getPseudoElementBounds-h_436N-i.js";import"./CompositeItem-DRhQIZ9t.js";import"./makeExternalStore-BXT9IRaw.js";import"./BaseForm-BoQdkjOG.js";import"./ActionButton-XVSeG5b2.js";import"./Button-BgGo20Fo.js";import"./SkeletonBar-jlasmcfA.js";import"./Tooltip-DZo35c7C.js";import"./info-sign-BT-GGfLI.js";import"./chevron-up-BPnKWxDY.js";import"./chevron-down-CLNGzp69.js";import"./useEventCallback-CATv0rju.js";import"./iconLoader-CE-engq9.js";import"./Switch-CQ-9or6R.js";import"./CompositeRoot-oV4NngM_.js";import"./TimePicker-Cc3rN6vc.js";import"./CollapsiblePanel-g_xhSVun.js";import"./error-C1jwt9uB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CyJ1msfC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
