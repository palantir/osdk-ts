import{j as i}from"./iframe-DyXeoGwO.js";import{O as p}from"./object-table-DE7Sj6ly.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BkGyMKv_.js";import"./preload-helper-D0PKvm90.js";import"./Table-BBQPugP-.js";import"./index-4Nqwzpvt.js";import"./Dialog-BQmjQitq.js";import"./cross-DTaTjAMm.js";import"./svgIconContainer-CCZ_a6ls.js";import"./useBaseUiId-9gwfWVJK.js";import"./InternalBackdrop-C4D46pwb.js";import"./composite-Yz-mnVT0.js";import"./index-CmKnfhTb.js";import"./index-Cxn1_saB.js";import"./index-DWWiASO0.js";import"./useEventCallback-CTiFkA1l.js";import"./SkeletonBar-DBij0pOc.js";import"./LoadingCell-BC3K9zFE.js";import"./ColumnConfigDialog-Cr3dELxt.js";import"./DraggableList-CzNfUaab.js";import"./search-Bb8GWAj-.js";import"./Input-Co_ozBSv.js";import"./useControlled-bhCIZURY.js";import"./isEqual-B29kTtlj.js";import"./isObject-DwlzPnNm.js";import"./Button-XiNhMhnD.js";import"./ActionButton-D7w_sh8l.js";import"./Checkbox-Bgz3S2Ey.js";import"./useValueChanged-BV0XQf5l.js";import"./CollapsiblePanel-CurIuftZ.js";import"./MultiColumnSortDialog-DXi1qJXQ.js";import"./MenuTrigger-B82V7p-S.js";import"./CompositeItem-D5uWMXLy.js";import"./ToolbarRootContext-NSuMsQk4.js";import"./getDisabledMountTransitionStyles-D3_etIrj.js";import"./getPseudoElementBounds-b8HcpjfA.js";import"./chevron-down-DlMyCTIX.js";import"./index-Btsx4sMw.js";import"./error-lrLb-CbY.js";import"./BaseCbacBanner-BbSgloor.js";import"./makeExternalStore-DcczwIex.js";import"./Tooltip-BNvyozEt.js";import"./PopoverPopup-CctUCuUJ.js";import"./toNumber-C_IGtKbm.js";import"./useOsdkClient-EbzbD1EX.js";import"./tick-BEKrCP22.js";import"./DropdownField-DvxFRQn7.js";import"./withOsdkMetrics-DX8ITSGp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
