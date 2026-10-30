import{j as t,g as n}from"./iframe-D1LXFBxc.js";import{A as r}from"./action-form-VLTjHPSz.js";import"./preload-helper-BMGLbfqy.js";import"./DropdownField-PSQxNdU1.js";import"./debounce-CrOoXB7G.js";import"./useOsdkClient-CH0NV-pV.js";import"./index-1OI0nGkQ.js";import"./Input-Dcr7sH0u.js";import"./useBaseUiId-ps7HY4-v.js";import"./useControlled-BkSZr9vP.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./isObject-3yusRZvo.js";import"./InternalBackdrop-DEpP5i29.js";import"./composite-DuREibPe.js";import"./index-CvkHqUxC.js";import"./getDisabledMountTransitionStyles-CUYWOYI-.js";import"./ToolbarRootContext-BWtsBung.js";import"./tick-Dln8NHKp.js";import"./svgIconContainer-bswbKgoA.js";import"./small-cross-dlZFFK_z.js";import"./search-DbOA3UnO.js";import"./cross-fpuOrCid.js";import"./useValueChanged-B2y-z1AW.js";import"./getPseudoElementBounds-D052xtfe.js";import"./CompositeItem-TBc75DhR.js";import"./makeExternalStore-BkL46d6x.js";import"./BaseForm-B53gbWxv.js";import"./ActionButton-Bn6Tlxi1.js";import"./Button-DQBtx8tI.js";import"./SkeletonBar-BEUy3yco.js";import"./Tooltip-CXZWn5vA.js";import"./info-sign-DroIYa4J.js";import"./chevron-up-B0BFRWG2.js";import"./chevron-down-BcP7YmhL.js";import"./useEventCallback-BzJZUjXz.js";import"./iconLoader-aR8Z5jWt.js";import"./Switch-CIrSt1Hf.js";import"./CompositeRoot-987Pw8HT.js";import"./TimePicker-CpLxmCdI.js";import"./CollapsiblePanel-C5zeXEPd.js";import"./error-CxJnkhM-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BQyS4Ebn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
