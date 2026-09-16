import{j as t,g as n}from"./iframe-DV1yCMsw.js";import{A as r}from"./action-form-B7zMr9rP.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-ByQ7XVe-.js";import"./debounce-DPm4QGed.js";import"./useOsdkClient-KTkVgi-z.js";import"./index-azQz1-D1.js";import"./Input-PDMkMKii.js";import"./useBaseUiId-DOZms5KT.js";import"./useControlled-nUfbdO0a.js";import"./index--Byjp6h8.js";import"./index-CmQmrs9R.js";import"./PopoverPopup-CXIkOXNy.js";import"./InternalBackdrop-DdEug9RR.js";import"./composite-DfXvakAK.js";import"./index-EhU39UPy.js";import"./getDisabledMountTransitionStyles-CI5qk8fd.js";import"./ToolbarRootContext-0T6zDh9h.js";import"./tick-7CTVhgFt.js";import"./svgIconContainer-BeM6_7kW.js";import"./small-cross-DYpEQl9d.js";import"./search-CQsBxLkU.js";import"./cross-DNR9YQ3a.js";import"./useValueChanged-CJ0AX3Q5.js";import"./getPseudoElementBounds-DPHhSEhv.js";import"./CompositeItem-BUg5Nmhs.js";import"./makeExternalStore-0Z503ATJ.js";import"./BaseForm-CG7RdLLq.js";import"./ActionButton-LfdBhkgt.js";import"./Button-DPHupdFu.js";import"./SkeletonBar-D_eY-DTv.js";import"./Tooltip-T_V-Cw1B.js";import"./info-sign-BHUsHwtG.js";import"./chevron-up-XqimV38q.js";import"./chevron-down-GWsulQRf.js";import"./useEventCallback-COYwW9Ss.js";import"./iconLoader-BdoaD-Tm.js";import"./Switch-8pbRznDQ.js";import"./CompositeRoot-h-pSMY_x.js";import"./TimePicker-DyyJ8dHO.js";import"./CollapsiblePanel-BW2nV8fU.js";import"./error-t-4CnxKH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DNZcGQG2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
