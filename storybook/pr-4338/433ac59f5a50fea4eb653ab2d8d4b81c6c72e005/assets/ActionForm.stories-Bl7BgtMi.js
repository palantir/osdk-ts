import{j as t,g as n}from"./iframe-CeUrNeS8.js";import{A as r}from"./action-form-DwYUKDUH.js";import"./preload-helper-kClf85ts.js";import"./DropdownField-Dgc8ONCk.js";import"./debounce-CVh5FHmf.js";import"./useOsdkClient-CtzBUCwK.js";import"./index-CNUBLdqm.js";import"./Input-C4TGes2g.js";import"./useBaseUiId-B6MLv2cX.js";import"./useControlled-BdXF-8vf.js";import"./index-CIe6uhG7.js";import"./index-UtGuVeZo.js";import"./PopoverPopup-DK71HW__.js";import"./InternalBackdrop-UqnCaGVN.js";import"./composite-JSaF2J1s.js";import"./index-BzC6OjRU.js";import"./getDisabledMountTransitionStyles-C3IU8gic.js";import"./ToolbarRootContext-U-LssyxT.js";import"./tick-1CibzV_P.js";import"./svgIconContainer-Zj5VM8lV.js";import"./small-cross-D8svfqd3.js";import"./search-D1UF5EaJ.js";import"./cross-DWoJVskS.js";import"./useValueChanged-0avqLTHA.js";import"./getPseudoElementBounds-BDhnbV4R.js";import"./CompositeItem-BTE8y1pl.js";import"./makeExternalStore-BahKFFla.js";import"./BaseForm-DrTPOoSX.js";import"./ActionButton-quaqHEPu.js";import"./Button-BKP5ADZQ.js";import"./SkeletonBar-CgVsJVv3.js";import"./Tooltip-1n8j-V5F.js";import"./info-sign-BwsopkRJ.js";import"./chevron-up-DE9YNH56.js";import"./chevron-down-DI7a3Uf5.js";import"./useEventCallback-Q2vk9PCY.js";import"./iconLoader-BO2yvudj.js";import"./Switch-Q5-v9xfC.js";import"./CompositeRoot-BQ6qOj-2.js";import"./TimePicker-CJwDyDOL.js";import"./CollapsiblePanel-DMLIpAbb.js";import"./error-BARMDzUn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BcIRH2mN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
