import{j as i}from"./iframe-BTVQ2MDu.js";import{O as p}from"./object-table-DVHeKRvV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cd7tPliN.js";import"./preload-helper-V8IN1a25.js";import"./Table-B8coxLT6.js";import"./index-De5UO2WD.js";import"./Dialog-CkCx041K.js";import"./cross-CiaqJ3Ct.js";import"./svgIconContainer-Z92KrpXF.js";import"./useBaseUiId-ageCLcwt.js";import"./InternalBackdrop-BVNbfTuG.js";import"./composite-j0A6Y-jy.js";import"./index-BQEu1zYD.js";import"./index-kvy3rFgR.js";import"./index-DjK2k_yv.js";import"./useEventCallback-D0vGqTKV.js";import"./SkeletonBar-DArXiFWj.js";import"./LoadingCell-B8bw26Hi.js";import"./ColumnConfigDialog-DRajYg12.js";import"./DraggableList-D0dDLjdf.js";import"./search-DG5bPe3Q.js";import"./Input-BfcaF7JW.js";import"./useControlled-BNBhFfAy.js";import"./Button-Ca-Rehkm.js";import"./small-cross-B4ROqysh.js";import"./ActionButton-B99TtfNQ.js";import"./Checkbox-BDKA0ajc.js";import"./useValueChanged-CdtMTrsN.js";import"./CollapsiblePanel-D03MnXQO.js";import"./MultiColumnSortDialog-D1Q8iyV4.js";import"./MenuTrigger-Ceua_S9s.js";import"./CompositeItem-BYdhC28O.js";import"./ToolbarRootContext-BKviL8sB.js";import"./getDisabledMountTransitionStyles-CTuqZlD-.js";import"./getPseudoElementBounds-CbDHbaqF.js";import"./chevron-down-B2iYughc.js";import"./index-DHPYKUwx.js";import"./error-B4_XiTjG.js";import"./BaseCbacBanner-DQ6y3_rq.js";import"./makeExternalStore-CteyryqD.js";import"./Tooltip-SOy8OEMI.js";import"./PopoverPopup-BDUoftIx.js";import"./debounce-BaTeW3Mf.js";import"./useOsdkClient-BUwzSBMN.js";import"./tick-C7MyDvxF.js";import"./DropdownField-DzdFfboE.js";import"./isEqual-VOjDnJLS.js";import"./withOsdkMetrics-sKDJTdCS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
