import{j as i}from"./iframe-CbVdry27.js";import{O as p}from"./object-table-BHKLVqxj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7R5nrUv.js";import"./preload-helper-tfmV0fps.js";import"./Table-BDNwiQrh.js";import"./index-To_tBHh-.js";import"./Dialog-DeQIruMM.js";import"./cross-DITFSMmT.js";import"./svgIconContainer-BE-Q5NLe.js";import"./useBaseUiId-COEKHJ4V.js";import"./InternalBackdrop-DzVUNVwc.js";import"./composite-D1RCmFrB.js";import"./index-CxQzO9vT.js";import"./index-CWuwxy99.js";import"./index-DI-JxeEE.js";import"./useEventCallback-CB-snxQm.js";import"./SkeletonBar-VQk2FTMC.js";import"./LoadingCell-B9Hm7MHR.js";import"./ColumnConfigDialog-sHevPC2C.js";import"./DraggableList-oyI6be4x.js";import"./search-CAyyPjGK.js";import"./Input-9Z_p8AjW.js";import"./useControlled-O5_ibcww.js";import"./Button-CXv2Sbo7.js";import"./small-cross-DsN_jioI.js";import"./ActionButton-CEgoaKzv.js";import"./Checkbox-BWqnsoev.js";import"./useValueChanged-DxXNbX15.js";import"./CollapsiblePanel-DXtTBiZC.js";import"./MultiColumnSortDialog-C87bRuLF.js";import"./MenuTrigger-CzVk5AZS.js";import"./CompositeItem-C6kwzUcw.js";import"./ToolbarRootContext-CkFGLvLN.js";import"./getDisabledMountTransitionStyles-CivHSC6Y.js";import"./getPseudoElementBounds-DEFhov4L.js";import"./chevron-down-DXTT43su.js";import"./index-DD2XUJOf.js";import"./error-DofjuNB7.js";import"./BaseCbacBanner-YASPMYkx.js";import"./makeExternalStore-BnMLaNWe.js";import"./Tooltip-DpkIEOMr.js";import"./PopoverPopup-BEEkZmVP.js";import"./toNumber-CDHVRjp-.js";import"./useOsdkClient-DpGyv36v.js";import"./tick-C6DVbt_F.js";import"./DropdownField-BZb13ucB.js";import"./withOsdkMetrics-CBasv5wc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
