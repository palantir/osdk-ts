import{j as t,g as n}from"./iframe-B4a1M7YQ.js";import{A as r}from"./action-form-CLPuayIy.js";import"./preload-helper-DKPqJros.js";import"./DropdownField-DgXTbQeA.js";import"./debounce-CJ5ryzx7.js";import"./useOsdkClient-DD3NhrHw.js";import"./index-CEnsUSRk.js";import"./Input-CQ1CPhUS.js";import"./useBaseUiId-BdmpNM9R.js";import"./useControlled-BwTzIPm3.js";import"./index-BGoKHZOt.js";import"./index-Bzr9bqEh.js";import"./PopoverPopup-COmRgKxn.js";import"./InternalBackdrop-BtAeuuiJ.js";import"./composite-DYFcQXK_.js";import"./index-XdpKPQSA.js";import"./getDisabledMountTransitionStyles-DeBE4Hc-.js";import"./ToolbarRootContext-BOcgfqza.js";import"./tick-B-sbOJgF.js";import"./svgIconContainer-dKO81zeU.js";import"./small-cross-CY8ArLck.js";import"./search-ByNZE4lU.js";import"./cross-DdxU_GSh.js";import"./useValueChanged-ZI0WYR1b.js";import"./getPseudoElementBounds-Bbqo73FW.js";import"./CompositeItem-DufHQAne.js";import"./makeExternalStore-bi4xmOXE.js";import"./BaseForm-Cc5Y7P-g.js";import"./ActionButton-DV-INWIy.js";import"./Button-aRzyNEAE.js";import"./SkeletonBar-CoaC5jIf.js";import"./Tooltip-D5NT58HG.js";import"./info-sign-DtIIqld3.js";import"./chevron-up-CcQ54ayo.js";import"./chevron-down-DCl-dnpE.js";import"./useEventCallback-DbS-KTli.js";import"./iconLoader-CfS6Ihwj.js";import"./Switch-DbzP9Rvh.js";import"./CompositeRoot-C9GneDFH.js";import"./TimePicker-BaLDfeU5.js";import"./CollapsiblePanel-CDlqlorI.js";import"./error-B-p2MHss.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BXRIKmAl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
