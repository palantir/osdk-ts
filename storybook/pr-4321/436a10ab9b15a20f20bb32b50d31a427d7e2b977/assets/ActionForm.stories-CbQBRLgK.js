import{j as t,g as n}from"./iframe-BlJB-hqv.js";import{A as r}from"./action-form-mwe0w1hM.js";import"./preload-helper-AMj6u5EH.js";import"./DropdownField-DOhdXC82.js";import"./debounce-Cy2hjM5h.js";import"./useOsdkClient-DYR-Y9ga.js";import"./index-B5X20bPi.js";import"./Input-DoCeanz4.js";import"./useBaseUiId-D_Y5M0eI.js";import"./useControlled-CETXoNMf.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./PopoverPopup-BJoZOrql.js";import"./InternalBackdrop-CnwxfMrX.js";import"./composite-DR-h0Lzn.js";import"./index-DVOW4T_z.js";import"./getDisabledMountTransitionStyles-D0uVHRDQ.js";import"./ToolbarRootContext-Br80IfNP.js";import"./tick-Cjvc8nAS.js";import"./svgIconContainer-LeVtNk5w.js";import"./small-cross-CpwYw5hd.js";import"./search-VsI7BQQc.js";import"./cross-DteZeQw8.js";import"./useValueChanged-BP2yugp1.js";import"./getPseudoElementBounds-DnmAl4RP.js";import"./CompositeItem-BMH16CTX.js";import"./makeExternalStore-CrrUaLlQ.js";import"./BaseForm-B_YEhzg3.js";import"./ActionButton-DPyl9ZnK.js";import"./Button-bd2H5948.js";import"./SkeletonBar-CHb4nNBx.js";import"./Tooltip-M7jHN8Vr.js";import"./info-sign-D5pdb4oJ.js";import"./chevron-up-DnaSmLZD.js";import"./chevron-down-CGFUoA8B.js";import"./useEventCallback-C5iZzYF4.js";import"./iconLoader-DmAZSsXy.js";import"./Switch-B2cSFiZs.js";import"./CompositeRoot-D9UGBj9Q.js";import"./TimePicker-B9NQx8AK.js";import"./CollapsiblePanel-1SWkbhUw.js";import"./error-DWdskqLp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BbC1R7NS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
