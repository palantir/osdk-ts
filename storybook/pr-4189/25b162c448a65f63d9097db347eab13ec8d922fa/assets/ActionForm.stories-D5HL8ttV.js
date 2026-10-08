import{j as t,g as n}from"./iframe-DLMfgjtf.js";import{A as r}from"./action-form-VGAsxJgA.js";import"./preload-helper-FISTic5h.js";import"./DropdownField-B8372XYt.js";import"./debounce-BYUquqzk.js";import"./useOsdkClient-D7npx1Qd.js";import"./index-C1uNoD_P.js";import"./Input-CGlQdmV9.js";import"./useBaseUiId-CGPqK7A_.js";import"./useControlled-Ez2RzIi9.js";import"./index-DvE967r1.js";import"./index-DhmZxaNJ.js";import"./PopoverPopup-klUplfQO.js";import"./InternalBackdrop-C7q6nAny.js";import"./composite-Bh8RLzcK.js";import"./index-CFnzh0go.js";import"./getDisabledMountTransitionStyles-_aaTD8lp.js";import"./ToolbarRootContext-CaevGzPm.js";import"./tick-CGKINZ-e.js";import"./svgIconContainer-D9kLSjbx.js";import"./small-cross-7o4IoMCW.js";import"./search-DB3dPpwY.js";import"./cross-DEP3bJaL.js";import"./useValueChanged-Bv09lgLM.js";import"./getPseudoElementBounds-DkTsw7BA.js";import"./CompositeItem-BPE6MZwc.js";import"./makeExternalStore-Cjl19IuZ.js";import"./BaseForm-VXT0FQkC.js";import"./ActionButton-CcYUwrwa.js";import"./Button-BcB4SrWe.js";import"./SkeletonBar-Bp5lMfT1.js";import"./Tooltip-C08-8DFh.js";import"./info-sign-Dd4WgejS.js";import"./chevron-up-BA2ng333.js";import"./chevron-down-Cl75LzTR.js";import"./useEventCallback-OFhWUTIn.js";import"./iconLoader-BT5jyXX2.js";import"./Switch-D_hlqEME.js";import"./CompositeRoot-BKMZhTES.js";import"./TimePicker-M1sK9_fr.js";import"./CollapsiblePanel-CvB7QNB1.js";import"./error-CgJf6mJC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C4pScUTY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
