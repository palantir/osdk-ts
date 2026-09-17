import{j as t,g as n}from"./iframe-CMm4N1y0.js";import{A as r}from"./action-form-AIKNxKoJ.js";import"./preload-helper-DPdS5gYT.js";import"./DropdownField-Dpg0H91Q.js";import"./debounce-e_CiYFMe.js";import"./useOsdkClient-DhcRZ6oq.js";import"./index-mc6WZDuQ.js";import"./Input-WLnnNcib.js";import"./useBaseUiId-DSNrt-U2.js";import"./useControlled-BNALToTQ.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./PopoverPopup-COua6oiQ.js";import"./InternalBackdrop-C3wXessL.js";import"./composite-BoQ1iNnl.js";import"./index-TDPUwOnJ.js";import"./getDisabledMountTransitionStyles-WnHy71z6.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./tick-Blq7nSqP.js";import"./svgIconContainer-zPF7HvxF.js";import"./small-cross-Bzj4KzKP.js";import"./search-CiZI6CH-.js";import"./cross-w0K8LNSt.js";import"./useValueChanged-BAb8DN1s.js";import"./getPseudoElementBounds-CbILzRJ8.js";import"./CompositeItem-BwL5uNEu.js";import"./makeExternalStore-C-_FdC6k.js";import"./BaseForm-BtT-qBCA.js";import"./ActionButton-C1HDW1tb.js";import"./Button-RJLOnGs4.js";import"./SkeletonBar-BX6mbipF.js";import"./Tooltip-B56bZ38u.js";import"./info-sign-CZikr1K2.js";import"./chevron-up-bl1UBo05.js";import"./chevron-down-BWoDSlPa.js";import"./useEventCallback-C1kO7wJe.js";import"./iconLoader-btreWMJN.js";import"./Switch-DkWSTMqn.js";import"./CompositeRoot-D5NknQ_q.js";import"./TimePicker-Dket0z-X.js";import"./CollapsiblePanel-CKo7WZyd.js";import"./error-BNe6vl6a.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CWiHOjas.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
