import{j as i}from"./iframe-nHeyQ6G0.js";import{O as p}from"./object-table-CMySora2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuYpdEZX.js";import"./preload-helper-CQHnyaJj.js";import"./Table-DAvHxFZU.js";import"./index-Cepl2Gdo.js";import"./Dialog-C40NzizH.js";import"./cross-BY7_vW_g.js";import"./svgIconContainer-CLZNV5by.js";import"./useBaseUiId-WP9Qsa8B.js";import"./InternalBackdrop-BhOu_nRs.js";import"./composite-BYQJTx_c.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./index-B4LSn0e3.js";import"./useEventCallback-DDta6l4G.js";import"./SkeletonBar-B4LZAubO.js";import"./LoadingCell-W_Pg7cSe.js";import"./ColumnConfigDialog-D8-9RbHL.js";import"./DraggableList-Cu7yXH0e.js";import"./search-nN6muyjH.js";import"./Input-LHo6mX7j.js";import"./useControlled-BEwPeN8G.js";import"./Button-OJtt4Wi3.js";import"./small-cross-D5y46BPP.js";import"./ActionButton-BdRYsIpx.js";import"./Checkbox-Cg3HXpCR.js";import"./useValueChanged-CTSv8K7w.js";import"./CollapsiblePanel-DGVjgwmu.js";import"./MultiColumnSortDialog-5tu2miBi.js";import"./MenuTrigger-Db3EXvDE.js";import"./CompositeItem-Y1Nghizw.js";import"./ToolbarRootContext-CrhI_j71.js";import"./getDisabledMountTransitionStyles-B3-icwrX.js";import"./getPseudoElementBounds-CFXLoVOU.js";import"./chevron-down-DWkmyfL1.js";import"./index-BzvZTbEJ.js";import"./error-qX2wkXkr.js";import"./BaseCbacBanner-DxR5PA9d.js";import"./makeExternalStore-COs31IKH.js";import"./Tooltip-ewszX06o.js";import"./PopoverPopup-3A5a03nx.js";import"./debounce-DpokpJG9.js";import"./useOsdkClient-DdGx6s8m.js";import"./tick-Baztb2JM.js";import"./DropdownField-B02tWq-y.js";import"./isEqual-CPFA_kRf.js";import"./withOsdkMetrics-CYsyTWZq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
