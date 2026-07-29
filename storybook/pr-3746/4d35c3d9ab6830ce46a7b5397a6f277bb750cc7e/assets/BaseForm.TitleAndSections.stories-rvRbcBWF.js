import{h as r,f as b,D as T,c as y,b as h,a as P}from"./baseFormStoryHelpers-dAyd2u9k.js";import"./iframe-Da42tfo0.js";import"./preload-helper-DAikJXZa.js";import"./SubmissionOutputPanel-DG4irKhJ.js";import"./BaseForm-BisQz914.js";import"./index-Bomen_f9.js";import"./ActionButton-BvqT7-oi.js";import"./Button-DNGlddJW.js";import"./useBaseUiId-BeAjw0Pz.js";import"./SkeletonBar-BqNP19Zt.js";import"./Tooltip-s5Zvo8l1.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-Dneb3Ic8.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./PopoverPopup-B2KF4r0_.js";import"./info-sign-Bw_bRdxv.js";import"./svgIconContainer-C1uFDFQ-.js";import"./DropdownField-lD6ZutwA.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./tick-Djt3HCnR.js";import"./isObject-GrzurbJg.js";import"./search-CMGFB0Gl.js";import"./cross-DG6Fu1MX.js";import"./useValueChanged-Cr9sCKBo.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./CompositeItem-BgwdEem5.js";import"./makeExternalStore-DY6l4t0Z.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./useEventCallback-DQIdBA5X.js";import"./Switch-CnAP0jNF.js";import"./iconLoader-CUqjgfX-.js";import"./CompositeRoot-4xhbfFIS.js";import"./TimePicker-CtZZuoEY.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./error-C20szSnY.js";const Ce={...h,title:"Components/ActionForm/Building Blocks/BaseForm/Title & Sections"},N=[P({fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:T,placeholder:"Select department..."}}),{type:"section",key:"personal",definition:{title:"Personal Information",description:"Basic details about the employee",fields:[{fieldKey:"name",fieldComponent:"TEXT_INPUT",label:"Full Name",isRequired:!0,fieldComponentProps:{placeholder:"Enter full name"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"settings",definition:{title:"Settings",collapsedByDefault:!0,fields:[{fieldKey:"isActive",fieldComponent:"RADIO_BUTTONS",label:"Active",fieldComponentProps:{options:[{label:"Yes",value:!0},{label:"No",value:!1}]}},{fieldKey:"priority",fieldComponent:"DROPDOWN",label:"Priority",fieldComponentProps:{items:y,placeholder:"Select priority"}}]}}],e={args:{formContent:N,onSubmit:r}},g=[{type:"section",key:"contact",definition:{title:"Contact Details",style:"minimal",description:"How to reach the employee",fields:[{fieldKey:"phone",fieldComponent:"TEXT_INPUT",label:"Phone",fieldComponentProps:{placeholder:"+1 (555) 000-0000"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}}]}},{type:"section",key:"address",definition:{title:"Address",style:"minimal",fields:[{fieldKey:"street",fieldComponent:"TEXT_INPUT",label:"Street",fieldComponentProps:{placeholder:"123 Main St"}},{fieldKey:"city",fieldComponent:"TEXT_INPUT",label:"City",fieldComponentProps:{placeholder:"Springfield"}}]}}],o={args:{formContent:g,onSubmit:r}},E=[{type:"section",key:"employee",definition:{title:"Employee Details",columnCount:2,fields:[{fieldKey:"firstName",fieldComponent:"TEXT_INPUT",label:"First Name",fieldComponentProps:{placeholder:"First"}},{fieldKey:"lastName",fieldComponent:"TEXT_INPUT",label:"Last Name",fieldComponentProps:{placeholder:"Last"}},{fieldKey:"email",fieldComponent:"TEXT_INPUT",label:"Email",fieldComponentProps:{placeholder:"user@example.com"}},{fieldKey:"department",fieldComponent:"DROPDOWN",label:"Department",fieldComponentProps:{items:T,placeholder:"Select..."}}]}}],t={args:{formContent:E,onSubmit:r}},i={args:{formTitle:"Create New Order",formContent:b,onSubmit:r},parameters:{docs:{source:{code:`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>`}}}};var n,m,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    formContent: sectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    formContent: minimalSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var d,c,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    formContent: gridSectionFormContent,
    onSubmit: handleSubmit
  }
}`,...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var C,u,S;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    formTitle: "Create New Order",
    formContent,
    onSubmit: handleSubmit
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseForm
  formTitle="Create New Order"
  formContent={formContent}
  onSubmit={(formState) => console.log("Submitted:", formState)}
/>\`
      }
    }
  }
}`,...(S=(u=i.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const ue=["WithSections","WithMinimalSections","WithGridSection","WithCustomTitle"];export{i as WithCustomTitle,t as WithGridSection,o as WithMinimalSections,e as WithSections,ue as __namedExportsOrder,Ce as default};
