import{j as t,g as n}from"./iframe-CHAjmeRW.js";import{A as r}from"./action-form-D9EMaA7Q.js";import"./preload-helper-Bnd8YX8b.js";import"./DropdownField-BPlhMtVD.js";import"./debounce-C6gik47c.js";import"./useOsdkClient-BcmsLoqQ.js";import"./index-uehY9gxK.js";import"./Input-CEDKmeIa.js";import"./useBaseUiId-CrKq0iow.js";import"./useControlled-DIGLnSxk.js";import"./index-0JEFRERF.js";import"./index-DItNlf6T.js";import"./PopoverPopup-Bik_j545.js";import"./InternalBackdrop-DDjeD9sW.js";import"./composite-DrWVaKH_.js";import"./index-DZ1xMNy0.js";import"./getDisabledMountTransitionStyles-DPAhfDy1.js";import"./ToolbarRootContext-DT7PezqV.js";import"./tick-DLKt3574.js";import"./svgIconContainer-C6bTix-V.js";import"./small-cross-COGTOage.js";import"./search-C-PuNkbt.js";import"./cross-21maCkVo.js";import"./useValueChanged-BEK9ykM9.js";import"./getPseudoElementBounds-Dc0AZ8zh.js";import"./CompositeItem-C3TCOkoR.js";import"./makeExternalStore-DZYGiDNi.js";import"./BaseForm-D7r5ZEvf.js";import"./ActionButton-DV8Kf2gb.js";import"./Button-BrV62231.js";import"./SkeletonBar-BvPOXO85.js";import"./Tooltip-gPwLingQ.js";import"./info-sign-D_m76xOp.js";import"./chevron-up-DIqZHR-j.js";import"./chevron-down-BhaNHOdV.js";import"./useEventCallback-BmA5_VIX.js";import"./iconLoader-Bry7LfaZ.js";import"./CompositeRoot-HR3mJi7N.js";import"./Switch-ig3JgWro.js";import"./TimePicker-C38spQNA.js";import"./CollapsiblePanel-CQ1IUkVg.js";import"./error-D546O215.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BAwWDEWh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
