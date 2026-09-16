import{j as t,g as n}from"./iframe-xdaTYGRj.js";import{A as r}from"./action-form-BOo0b-qn.js";import"./preload-helper-DZUDwwCn.js";import"./DropdownField-C6ZSBKPJ.js";import"./debounce-DBf5uZYv.js";import"./useOsdkClient-CrpVNgyy.js";import"./index-BdPDvpnl.js";import"./Input-CVYxdw6a.js";import"./useBaseUiId-CxUh_Q__.js";import"./useControlled-BvC-sVWY.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./PopoverPopup-BKjDaV96.js";import"./InternalBackdrop-POEzz6gH.js";import"./composite-BBMq-zQx.js";import"./index-BvtF8lSO.js";import"./getDisabledMountTransitionStyles-B16LXGKh.js";import"./ToolbarRootContext-5SJeTWub.js";import"./tick-C88F2OoG.js";import"./svgIconContainer-exvQzp4T.js";import"./small-cross-BW9BpdHj.js";import"./search-Ba1wUlyN.js";import"./cross-CSoA2ZQa.js";import"./useValueChanged-Ch5z-mkh.js";import"./getPseudoElementBounds-Dy-Bisec.js";import"./CompositeItem-Cl6_46jA.js";import"./makeExternalStore-DYC4j6Cy.js";import"./BaseForm-S3RI-hp3.js";import"./ActionButton-asvmdyUj.js";import"./Button-DhIcXnSN.js";import"./SkeletonBar-B8t_W87W.js";import"./Tooltip-CW0n3yWY.js";import"./info-sign-FRgYoOZh.js";import"./chevron-up-Bbf1YR7J.js";import"./chevron-down-aagd7exO.js";import"./useEventCallback-BzvhssYV.js";import"./iconLoader-CSwaqaxt.js";import"./Switch-CWXntnHJ.js";import"./CompositeRoot-Bs6SmXSZ.js";import"./TimePicker-BagQCJ4V.js";import"./CollapsiblePanel-ClYrkXoI.js";import"./error-CApwHpph.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5YFfTwH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
