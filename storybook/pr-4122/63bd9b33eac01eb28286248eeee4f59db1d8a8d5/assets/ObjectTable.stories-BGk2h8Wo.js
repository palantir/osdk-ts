import{j as i}from"./iframe-CUZRoNNv.js";import{O as p}from"./object-table-B7I8IXEY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B7v03KL3.js";import"./preload-helper-CrAnAkNd.js";import"./Table-C3wyRrA6.js";import"./index-DyJF2RgL.js";import"./Dialog-Cn9uzKiW.js";import"./cross-CSe3kma4.js";import"./svgIconContainer-grpv7WkD.js";import"./useBaseUiId-BjYXt-Y8.js";import"./InternalBackdrop-B1oT2L8M.js";import"./composite-LGakJTZC.js";import"./index-BBjGhXOn.js";import"./index-CMCn6By5.js";import"./index-DyQ1LTEo.js";import"./useEventCallback-CRtaVkZD.js";import"./SkeletonBar-Cs_FVwUF.js";import"./LoadingCell-CRr7-OyQ.js";import"./ColumnConfigDialog-C3mzEEmr.js";import"./DraggableList-DueAX1k6.js";import"./search-XLYepbmJ.js";import"./Input-Db-zmbeF.js";import"./useControlled-SgSnNk_-.js";import"./Button-C0zF-FQF.js";import"./small-cross-DkU4qrA6.js";import"./ActionButton-Fv9YojAp.js";import"./Checkbox-B0LYl5tM.js";import"./useValueChanged-QEA79Kem.js";import"./CollapsiblePanel-CQdqgiNL.js";import"./MultiColumnSortDialog-DV5SVo22.js";import"./MenuTrigger-C_v7Fax_.js";import"./CompositeItem-BcoPKNgT.js";import"./ToolbarRootContext-8UU7wnms.js";import"./getDisabledMountTransitionStyles-CKffQk5p.js";import"./getPseudoElementBounds-C_t6F_mK.js";import"./chevron-down-GCVDTzTT.js";import"./index-DGzm9vGw.js";import"./error-DiHuZvPy.js";import"./BaseCbacBanner-DXPAW_JB.js";import"./makeExternalStore-BolJxNvY.js";import"./Tooltip-DSblGONh.js";import"./PopoverPopup-VaXrb5EK.js";import"./debounce-0YKxs7_M.js";import"./useOsdkClient-BzUYs6XV.js";import"./tick-BB3AulHS.js";import"./DropdownField-ChFA6G-L.js";import"./isEqual-CYQ9gmnQ.js";import"./withOsdkMetrics-CXfpKFLb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
