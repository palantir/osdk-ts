import{j as i}from"./iframe-BbGTTDAj.js";import{O as p}from"./object-table-BDL8CTE7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BbqF1jEo.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BnxT1wyu.js";import"./index-IgulouNK.js";import"./Dialog-nlhw3diw.js";import"./cross-DhMDfvf2.js";import"./svgIconContainer-CVfAB6vd.js";import"./useBaseUiId-CQunNH1M.js";import"./InternalBackdrop-Hm20khzg.js";import"./composite-CR123KzM.js";import"./index-C8Uf5ELJ.js";import"./index-Df7q0QUE.js";import"./index-BUXx6su9.js";import"./useEventCallback-B2gRlxXx.js";import"./SkeletonBar-Ds_YvgAw.js";import"./LoadingCell-kYVMT4tS.js";import"./ColumnConfigDialog-CtClxv69.js";import"./DraggableList-DNiVSkcY.js";import"./search-CnT_vxoB.js";import"./Input-DnyVFM7E.js";import"./useControlled-BHPRGL2o.js";import"./Button-CN3p9mDI.js";import"./small-cross-Drx8-h4e.js";import"./ActionButton-DyvnNkxo.js";import"./Checkbox-BdyDWm05.js";import"./useValueChanged-CBTjuxmu.js";import"./CollapsiblePanel-Dga8aJEk.js";import"./MultiColumnSortDialog-D2nXUlx0.js";import"./MenuTrigger-DrbldR93.js";import"./CompositeItem-DyOo-XaB.js";import"./ToolbarRootContext-YNljF2Js.js";import"./getDisabledMountTransitionStyles-eCx2DT2T.js";import"./getPseudoElementBounds-CqmJdcHl.js";import"./chevron-down-wz6-g0K-.js";import"./index-Bjc-9Q8Y.js";import"./error-BllpxWel.js";import"./BaseCbacBanner-C7sNo_hZ.js";import"./makeExternalStore-B_7bdAjg.js";import"./Tooltip-CUzSWWIO.js";import"./PopoverPopup-x705-9aP.js";import"./debounce-DgBX7KpR.js";import"./useOsdkClient-B319hJFg.js";import"./tick-bTbyimze.js";import"./DropdownField-C5jrXGNu.js";import"./isEqual-BirJE5rZ.js";import"./withOsdkMetrics-CwndHWS3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
