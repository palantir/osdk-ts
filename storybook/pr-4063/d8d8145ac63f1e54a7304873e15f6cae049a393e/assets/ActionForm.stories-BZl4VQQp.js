import{j as t,g as n}from"./iframe-Bhffutgo.js";import{A as r}from"./action-form-CQ1KcJSd.js";import"./preload-helper-CijB9Qe5.js";import"./DropdownField-CuxPlTct.js";import"./debounce-SIEms-6v.js";import"./useOsdkClient-25Kii0Nm.js";import"./index-Cy8HD2CD.js";import"./Input-OY1OZr6O.js";import"./useBaseUiId--v1O0VA1.js";import"./useControlled-B1I8CTdR.js";import"./index-JMjhMIpk.js";import"./index-DRActumb.js";import"./PopoverPopup-BVUMi5tg.js";import"./InternalBackdrop-BkF4CyJK.js";import"./composite-DtoUIyyt.js";import"./index-D-zTWlPE.js";import"./getDisabledMountTransitionStyles-Bh7kTFsz.js";import"./ToolbarRootContext-CmYX2cG0.js";import"./tick-Cb1TF6t_.js";import"./svgIconContainer-Cic0cef0.js";import"./small-cross-DELXwmlb.js";import"./search-IXw9ma12.js";import"./cross-B-UQ3Jxc.js";import"./useValueChanged-CXt43HWH.js";import"./getPseudoElementBounds-0bpQxymW.js";import"./CompositeItem-BZDrB-0o.js";import"./makeExternalStore-NyFQcR5i.js";import"./BaseForm-nrsbWmdf.js";import"./ActionButton-BsZDi0RP.js";import"./Button-_SLvpwek.js";import"./SkeletonBar-ZDVpKAdj.js";import"./Tooltip-C-_NZOL1.js";import"./info-sign-iI7VfsyI.js";import"./chevron-up-Bipj_s4U.js";import"./chevron-down-BcqETG9N.js";import"./useEventCallback-Bd38vKKP.js";import"./iconLoader-Bxl3jT1D.js";import"./Switch-CV41pe8z.js";import"./CompositeRoot-DLWouLsD.js";import"./TimePicker-D82kco1u.js";import"./CollapsiblePanel-BdEsZMnJ.js";import"./error-IjGqGtmT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DAy7jDWc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
