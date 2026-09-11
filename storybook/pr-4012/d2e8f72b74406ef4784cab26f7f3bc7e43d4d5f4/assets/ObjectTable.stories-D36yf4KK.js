import{j as i}from"./iframe-C-mlL1d1.js";import{O as p}from"./object-table-CflN7BW3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DB8FGED5.js";import"./preload-helper-BUxDkfWR.js";import"./Table-CrwMjEH3.js";import"./index-B6OYb_DA.js";import"./Dialog-J8erkqPd.js";import"./cross-bL1PiJj_.js";import"./svgIconContainer-DOFv3aDL.js";import"./useBaseUiId-BKlcYEBY.js";import"./InternalBackdrop-Bno6e7cF.js";import"./composite-T8-lg8nr.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./index-ChA1IBqb.js";import"./useEventCallback-BrE-PuVs.js";import"./SkeletonBar-Bg2MXuuJ.js";import"./LoadingCell-CxcZgFpo.js";import"./ColumnConfigDialog-BIS05p60.js";import"./DraggableList-CLfe6gab.js";import"./search-9EoPaIsu.js";import"./Input-DwnchpfY.js";import"./useControlled-Bq8qBaBJ.js";import"./Button-To2COh7T.js";import"./small-cross-B5y9L61C.js";import"./ActionButton-DhCGZoHD.js";import"./Checkbox-CrUAsNNw.js";import"./useValueChanged-Bo5thQ8O.js";import"./CollapsiblePanel-CNKrkZjW.js";import"./MultiColumnSortDialog-sYWUGk65.js";import"./MenuTrigger-CXVAqCWg.js";import"./CompositeItem-CF65Mtg9.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./getDisabledMountTransitionStyles-B16n-yTJ.js";import"./getPseudoElementBounds-0jq6bko3.js";import"./chevron-down-CfvB8SzD.js";import"./index-Bb5I7VlI.js";import"./error-C0XWqrZ2.js";import"./BaseCbacBanner-DBuHYUCN.js";import"./makeExternalStore-Dn2EZb1T.js";import"./Tooltip-JNvzBEcs.js";import"./PopoverPopup-B2DKSbuW.js";import"./debounce-BS-XCJuC.js";import"./useOsdkClient-BSUtxC4C.js";import"./tick-DD6qfwut.js";import"./DropdownField-zYP-JtQg.js";import"./isEqual-BajcDWPI.js";import"./withOsdkMetrics-DYUhhphE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
