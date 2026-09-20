import{j as t,g as n}from"./iframe-B6HE8r1l.js";import{A as r}from"./action-form-TlBupZ0m.js";import"./preload-helper-EtA7hFCh.js";import"./DropdownField-BFB5iTsi.js";import"./debounce-CG2SWdkE.js";import"./useOsdkClient-Nacbi_ds.js";import"./index-BCMaRUjb.js";import"./Input-_s7MN3wC.js";import"./useBaseUiId-BzcE0Rie.js";import"./useControlled-D5sOiBif.js";import"./index-CJscuqzO.js";import"./index-BkMjc3Zz.js";import"./PopoverPopup-BVaD9-3k.js";import"./InternalBackdrop-Cf6OlXBD.js";import"./composite-djF9vkGv.js";import"./index-TwSuOpr6.js";import"./getDisabledMountTransitionStyles-BIBkvW7t.js";import"./ToolbarRootContext-BVpWK1U-.js";import"./tick-B6YXw7V4.js";import"./svgIconContainer-BsDMjwS6.js";import"./small-cross-C32KlYhe.js";import"./search-CcV-m7jj.js";import"./cross-BjZ44SU2.js";import"./useValueChanged-BBXwiEUw.js";import"./getPseudoElementBounds-DERUGPbz.js";import"./CompositeItem-DP3Bb3vo.js";import"./makeExternalStore-C0P5U_f9.js";import"./BaseForm-Cji2DE0q.js";import"./ActionButton-CWQiMZ6U.js";import"./Button-ResaMq3t.js";import"./SkeletonBar-QShiBHjp.js";import"./Tooltip-CJZAX-Va.js";import"./info-sign-b-sPP8bW.js";import"./chevron-up-CnHOOmID.js";import"./chevron-down-DKIz5-M-.js";import"./useEventCallback-D56Fb_o4.js";import"./iconLoader-BcP2KqSq.js";import"./Switch-DCRsIXJX.js";import"./CompositeRoot-BawgAxK0.js";import"./TimePicker-COiCrbo8.js";import"./CollapsiblePanel-BcHGrGjI.js";import"./error-BJZjh9bl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OQ6oomXn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
