import{j as i}from"./iframe-B0nz0RxR.js";import{O as p}from"./object-table-CP0p9slM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3l480U62.js";import"./preload-helper-CF-MyLPB.js";import"./Table-BrJDxDiJ.js";import"./index-DW-ZtONF.js";import"./Dialog-Cr2A3kQz.js";import"./cross-f1j6tGxU.js";import"./svgIconContainer-BcZsRKUx.js";import"./useBaseUiId-Ghzmj7pG.js";import"./InternalBackdrop-rSHqMVGe.js";import"./composite-BzNBSeWl.js";import"./index-BMFV8-ce.js";import"./index-DeqT0Eb7.js";import"./index-B7gxoaLi.js";import"./useEventCallback-B4vbSQLp.js";import"./SkeletonBar-B5jtfUel.js";import"./LoadingCell-Bug_BUuO.js";import"./ColumnConfigDialog-BWJ5IN2M.js";import"./DraggableList-DHM4mlSv.js";import"./search-TA_vispt.js";import"./Input-D4YoHp_x.js";import"./useControlled-DRdL5BBf.js";import"./Button-oaCKos6Q.js";import"./small-cross-Zw7wlfAE.js";import"./ActionButton-CkF9PQ4R.js";import"./Checkbox-CIoLBrmc.js";import"./useValueChanged-DgmYsZA0.js";import"./CollapsiblePanel-Crj0pcOH.js";import"./MultiColumnSortDialog-D3gwJIcd.js";import"./MenuTrigger-CwjJKmwj.js";import"./CompositeItem-gUbeOnNS.js";import"./ToolbarRootContext-C9pMoC1w.js";import"./getDisabledMountTransitionStyles-Bt_08xQS.js";import"./getPseudoElementBounds-Dyl6SLRJ.js";import"./chevron-down-CvQujDzB.js";import"./index-B5Cb_2HF.js";import"./error-mP_--TcG.js";import"./BaseCbacBanner-DHxGb0MF.js";import"./makeExternalStore-_fQcqJ1G.js";import"./Tooltip-DbVNHIKo.js";import"./PopoverPopup-DQ08RGHM.js";import"./debounce-DisvDzGy.js";import"./useOsdkClient-CPckGSeZ.js";import"./tick-CAF8Q4Se.js";import"./DropdownField-DsagADFX.js";import"./isEqual-DBj3OHQt.js";import"./withOsdkMetrics-loWoDH6-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
