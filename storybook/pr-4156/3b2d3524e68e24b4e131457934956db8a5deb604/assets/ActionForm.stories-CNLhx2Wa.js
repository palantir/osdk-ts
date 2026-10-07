import{j as t,g as n}from"./iframe-BzHLIdAf.js";import{A as r}from"./action-form-DdTRkLfY.js";import"./preload-helper-C5EK4nFx.js";import"./DropdownField-DXwIrhJq.js";import"./debounce-B7Bw7NEb.js";import"./useOsdkClient-Dieuw0cs.js";import"./index-tkfEcbGy.js";import"./Input-DD8tFxDd.js";import"./useBaseUiId-DulnEBx2.js";import"./useControlled-BUD4_K19.js";import"./index-BTFfBOqo.js";import"./index-B3AMqERT.js";import"./PopoverPopup-DottMH45.js";import"./InternalBackdrop-BJGg8Bd5.js";import"./composite-C-vnMrHU.js";import"./index-CZRv-oVY.js";import"./getDisabledMountTransitionStyles-BMhngEHI.js";import"./ToolbarRootContext-DfZ85ISE.js";import"./tick-qy3966gs.js";import"./svgIconContainer-yN9N03QS.js";import"./small-cross-BOLwRIx5.js";import"./search-BBdM6dRe.js";import"./cross-DFzeXQKN.js";import"./useValueChanged-BsO1IbSa.js";import"./getPseudoElementBounds-DzacU-6p.js";import"./CompositeItem-DoI0Nlr7.js";import"./makeExternalStore-CzyuozHX.js";import"./BaseForm-uvQyeQxy.js";import"./ActionButton-CMQ5G7Nn.js";import"./Button-oOxpuNBl.js";import"./SkeletonBar-NMHUoGf4.js";import"./Tooltip-D66jiuuz.js";import"./info-sign-BcSnmpmw.js";import"./chevron-up-CwvYcK9B.js";import"./chevron-down-C3-VW8uJ.js";import"./useEventCallback-D-Rcflfy.js";import"./iconLoader-C3RJgr-t.js";import"./Switch-Ci2BHCzy.js";import"./CompositeRoot-CjXegX49.js";import"./TimePicker-PSl1LmEX.js";import"./CollapsiblePanel-D5VJxf2v.js";import"./error-DnjCL8vD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C6AsUlOu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
