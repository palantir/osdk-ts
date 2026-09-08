import{j as i}from"./iframe-DGAYn9ah.js";import{O as p}from"./object-table-DTUrmLz6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BooexLuD.js";import"./preload-helper-ChgL7y96.js";import"./Table-CiTkYzU2.js";import"./index-DTqlvJGy.js";import"./Dialog-BR3MuwWf.js";import"./cross-DupLKvqJ.js";import"./svgIconContainer-CgzcDTkc.js";import"./useBaseUiId-gHWBFpJw.js";import"./InternalBackdrop-8fzF_Cdw.js";import"./composite-B3z1s4Xv.js";import"./index-dFa0PhkU.js";import"./index-Bk-RkwxC.js";import"./index-CapGV1gT.js";import"./useEventCallback-C6GT1c1Y.js";import"./SkeletonBar-CsMuW56O.js";import"./LoadingCell-D7dlBHe2.js";import"./ColumnConfigDialog-Kr94ft5n.js";import"./DraggableList-BaQ59nTC.js";import"./search-CbK0B2vo.js";import"./Input-CmwSiSQg.js";import"./useControlled-DxF1qebn.js";import"./Button-C1GOspFh.js";import"./small-cross-Bjxpstym.js";import"./ActionButton-m1ZenSyP.js";import"./Checkbox-D1fsw7z_.js";import"./useValueChanged-B0j61wn1.js";import"./CollapsiblePanel-CAIby94r.js";import"./MultiColumnSortDialog-CjVn09J2.js";import"./MenuTrigger-BMttNTtu.js";import"./CompositeItem-BcZSNonj.js";import"./ToolbarRootContext-YWaMXSM6.js";import"./getDisabledMountTransitionStyles-D_EkCujd.js";import"./getPseudoElementBounds-DyXfIW7_.js";import"./chevron-down-CyN2TB6T.js";import"./index-NqnPNXJw.js";import"./error-BI4ZLamB.js";import"./BaseCbacBanner-Do_pGqh7.js";import"./makeExternalStore-BpmHT-XO.js";import"./Tooltip-CAfs-bUF.js";import"./PopoverPopup-RjV8v81n.js";import"./debounce-DwT09eQG.js";import"./useOsdkClient-CSSWGxvW.js";import"./tick-B-M2pQzS.js";import"./DropdownField-DgkNnSiH.js";import"./isEqual-BnHcjJHs.js";import"./withOsdkMetrics-DFTpKrdr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
