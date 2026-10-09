import{j as t,g as n}from"./iframe-BiR0bSaX.js";import{A as r}from"./action-form-B4UIi6tN.js";import"./preload-helper-CREsIwfv.js";import"./DropdownField-B2dUQyL4.js";import"./debounce-BGMgfz2I.js";import"./useOsdkClient-D2ZfX5sU.js";import"./index-D0Rro4ck.js";import"./Input-CR7mkMB4.js";import"./useBaseUiId-D3ocUoYR.js";import"./useControlled-BCuMNdH3.js";import"./index-CwYWk3f5.js";import"./index-CDTZ5otF.js";import"./PopoverPopup-By__3K0-.js";import"./InternalBackdrop-D6vDmGzB.js";import"./composite-Cg5vG0V3.js";import"./index-zHT7Hyt8.js";import"./getDisabledMountTransitionStyles-X1jqNQgo.js";import"./ToolbarRootContext-DZbYzNul.js";import"./tick-CS8KJb9P.js";import"./svgIconContainer-DdJYmAvv.js";import"./small-cross-DYB9MOPk.js";import"./search-BVH0nxuW.js";import"./cross-gKG73r0q.js";import"./useValueChanged-vxARVLtE.js";import"./getPseudoElementBounds-BKmEUxkJ.js";import"./CompositeItem-yCWRfwkd.js";import"./makeExternalStore-8TAGYWzx.js";import"./BaseForm-2rFs7FWR.js";import"./ActionButton-CLSAI2kW.js";import"./Button-BjLfCn0d.js";import"./SkeletonBar-CM8I5OIh.js";import"./Tooltip-4v0newPD.js";import"./info-sign-B4dQdDK-.js";import"./chevron-up-Bc72vOOm.js";import"./chevron-down-wSopSebG.js";import"./useEventCallback-BeraWIcy.js";import"./iconLoader-C9-dQrxE.js";import"./Switch-_oLTtuBg.js";import"./CompositeRoot-DQK_VK1F.js";import"./TimePicker-CvVQp4yT.js";import"./CollapsiblePanel-d6aPXtM4.js";import"./error-DI1HaZkw.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ft25XtI9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
