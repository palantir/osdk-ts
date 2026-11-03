import{j as t,g as n}from"./iframe-CRdsH5HZ.js";import{A as r}from"./action-form-B7yLsE4A.js";import"./preload-helper-CKZQslH7.js";import"./DropdownField-DNlPXkBE.js";import"./debounce-t2Bd0wd0.js";import"./useOsdkClient-DpUzM88Y.js";import"./index-DTd5KXcK.js";import"./Input-C5MZZ2uA.js";import"./useBaseUiId-CclOULO6.js";import"./useControlled-DWxXLpHB.js";import"./index-Cn4z51Ds.js";import"./index-CF0tZzS5.js";import"./PopoverPopup-B-cadNgq.js";import"./InternalBackdrop-DJrTMBsF.js";import"./composite-83cwJd-q.js";import"./index-DvUsnOXq.js";import"./getDisabledMountTransitionStyles-C6LNjQ6D.js";import"./ToolbarRootContext-CqwjH-y3.js";import"./tick-vhMtzz2I.js";import"./svgIconContainer-B82w1dNX.js";import"./small-cross-BreRJzoU.js";import"./search-BLamqbky.js";import"./cross-Ck_cirtk.js";import"./useValueChanged-CX0FVdOs.js";import"./getPseudoElementBounds-CvnVVkY1.js";import"./CompositeItem-2Hw_8anp.js";import"./makeExternalStore-DkeRNmA2.js";import"./BaseForm-Ccb3xYmX.js";import"./ActionButton-D-BsxzSk.js";import"./Button-DC0lWoOP.js";import"./SkeletonBar-DYF5X8SW.js";import"./Tooltip-BJFUBzvs.js";import"./info-sign-B-cyXCDP.js";import"./chevron-up-CUHtYWh-.js";import"./chevron-down-0O9k5DT8.js";import"./useEventCallback-C0Ta6sLF.js";import"./iconLoader-7byYO8dO.js";import"./Switch-BHmMO1Fj.js";import"./CompositeRoot-DBS3cJLp.js";import"./TimePicker-DTrST9YX.js";import"./CollapsiblePanel-0dVMjFgS.js";import"./error-Cy0mbDhX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CI0orLhd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
