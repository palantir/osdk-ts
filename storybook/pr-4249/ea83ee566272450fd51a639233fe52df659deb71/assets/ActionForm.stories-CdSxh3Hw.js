import{j as t,g as n}from"./iframe-BbjXXJe8.js";import{A as r}from"./action-form-B72xMB0X.js";import"./preload-helper-Dey0rnvM.js";import"./DropdownField-DrlUCotf.js";import"./debounce-CmbjsLVd.js";import"./useOsdkClient-DsMfreJs.js";import"./index-T8M7MoCf.js";import"./Input-DcHjunbi.js";import"./useBaseUiId-mbBdJtd6.js";import"./useControlled-bFhbJ_tP.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./PopoverPopup-DHqupTDU.js";import"./InternalBackdrop-_rPH4zEA.js";import"./composite-CkO02i_E.js";import"./getDisabledMountTransitionStyles-GlMe9-WZ.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./tick-C8S8ITqk.js";import"./svgIconContainer-CXj_KM32.js";import"./small-cross-DBHZv8Q4.js";import"./search-DjptGMSz.js";import"./cross-Dp3ZYAZC.js";import"./useValueChanged-BKhoHR0i.js";import"./getPseudoElementBounds-BMRxbPLa.js";import"./CompositeItem-BvxDZQma.js";import"./makeExternalStore-BCfu_aRm.js";import"./BaseForm-C2-liAe6.js";import"./ActionButton-Bl1GvY0Q.js";import"./Button-BYNpk4v8.js";import"./SkeletonBar-u6tF3ULb.js";import"./Tooltip-D3vptghS.js";import"./info-sign-BfnJCy82.js";import"./chevron-up-Q0aiLlko.js";import"./chevron-down-5PwEHI-v.js";import"./useEventCallback-X7nCdW-s.js";import"./iconLoader-B7hEq6LO.js";import"./Switch-iMyE5FwQ.js";import"./CompositeRoot-BQ9tkny0.js";import"./TimePicker-BKE9Z9h_.js";import"./CollapsiblePanel-BmSgtCoP.js";import"./error-B5EEo1NC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cy91uTto.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const Z={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
