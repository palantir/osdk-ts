import{j as t,g as n}from"./iframe-C0-x1FP0.js";import{A as r}from"./action-form-D3Q1V2jQ.js";import"./preload-helper-DCX9k7ir.js";import"./DropdownField-CN-ggOq5.js";import"./debounce-BdQw7iZx.js";import"./useOsdkClient-B74sjWML.js";import"./index-DV22TdK8.js";import"./Input-BXkRChlq.js";import"./useBaseUiId-CA7uGIeg.js";import"./useControlled-Dp-jMyqd.js";import"./index-DUQSD1NB.js";import"./index-C7QUHUmQ.js";import"./PopoverPopup-CbjVo92q.js";import"./InternalBackdrop-brHMeUVe.js";import"./composite-Dy-B8Ijy.js";import"./index-Bo-o19rY.js";import"./getDisabledMountTransitionStyles-Btbbq1bs.js";import"./ToolbarRootContext-DthEPhMn.js";import"./tick-D7IllXvz.js";import"./svgIconContainer-BSxvLIZD.js";import"./small-cross-DvHjGkkh.js";import"./search-Vl3MAPNS.js";import"./cross-yFQp_D_Z.js";import"./useValueChanged-ByiOoXtD.js";import"./getPseudoElementBounds-DzHxX6wm.js";import"./CompositeItem-D0Pwm5JG.js";import"./makeExternalStore-C9rMI5OP.js";import"./BaseForm-D1ZF6zQ2.js";import"./ActionButton-DT15JGE9.js";import"./Button-CvK_tZY2.js";import"./SkeletonBar-C2MOvv6_.js";import"./Tooltip-CA4Uvv6q.js";import"./info-sign-Bc9gwZnN.js";import"./chevron-up-B1ujpv-A.js";import"./chevron-down-Tbopdf5u.js";import"./useEventCallback-CKs1ld83.js";import"./iconLoader-iHlj7upS.js";import"./Switch-DoaJZL7-.js";import"./CompositeRoot-BxKznIJC.js";import"./TimePicker-g1f_WcKI.js";import"./CollapsiblePanel-0BooQOGv.js";import"./error-VkCpPEhJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dw6CTACt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
