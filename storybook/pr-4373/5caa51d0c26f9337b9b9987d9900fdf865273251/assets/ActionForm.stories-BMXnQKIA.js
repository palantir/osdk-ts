import{j as t,g as n}from"./iframe-DLzx97EJ.js";import{A as r}from"./action-form-BKGNlV42.js";import"./preload-helper-CmYTg0Pf.js";import"./DropdownField-K5yYb8ch.js";import"./debounce-De8aR-i4.js";import"./useOsdkClient-CSee95DU.js";import"./index-BEQknSG7.js";import"./Input-qCKZZo4z.js";import"./useBaseUiId-CAg2kwlj.js";import"./useControlled-BbqDqbUq.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./isObject-CVaKVVla.js";import"./InternalBackdrop-mcEx2LQV.js";import"./composite-TVTsKD6c.js";import"./index-AfoCt9lG.js";import"./getDisabledMountTransitionStyles-WIr647eh.js";import"./ToolbarRootContext-N07wipSz.js";import"./tick-OXHUkGbE.js";import"./svgIconContainer-C-g24xF0.js";import"./small-cross-CYyVIp2I.js";import"./search-C5FqELUQ.js";import"./cross-DRLacgjp.js";import"./useValueChanged-C73KFNzj.js";import"./getPseudoElementBounds-D5V_JJVH.js";import"./CompositeItem-zOuWTjc0.js";import"./makeExternalStore-BTZjjXmJ.js";import"./BaseForm-ByKNHIkd.js";import"./ActionButton-BW3xtD-H.js";import"./Button-CdJ05kOF.js";import"./SkeletonBar-Dkadgbgq.js";import"./Tooltip-CyfA5k5X.js";import"./info-sign-CJ0cPB1O.js";import"./chevron-up-Ce58O9Gj.js";import"./chevron-down-C33gMPot.js";import"./useEventCallback-DbTNteze.js";import"./iconLoader-CWaW_xyG.js";import"./Switch-DK3fk0n0.js";import"./CompositeRoot-Ba8Rcn-3.js";import"./TimePicker-SLSOhMaD.js";import"./CollapsiblePanel-CBgwT-zE.js";import"./error-DMQmvEXe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iNTrmMm4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
