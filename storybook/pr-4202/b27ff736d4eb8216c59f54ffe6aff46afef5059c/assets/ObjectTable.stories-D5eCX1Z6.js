import{j as i}from"./iframe-DpYBlUf6.js";import{O as p}from"./object-table-B4dQhKDm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-FZoiWrqD.js";import"./preload-helper-aJL6Jgcy.js";import"./Table-DnbhSzQH.js";import"./index-DG12qFyq.js";import"./Dialog-D_2RIDue.js";import"./cross-hvj-E3FQ.js";import"./svgIconContainer-BNnaw46F.js";import"./useBaseUiId-Cvpk5u0b.js";import"./InternalBackdrop-yAnNHODP.js";import"./composite-kZPGPCkC.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./index-iyK82M59.js";import"./useEventCallback-DbLrzPiT.js";import"./SkeletonBar-Bim1zKuG.js";import"./LoadingCell-DkQrHs-y.js";import"./ColumnConfigDialog-yNxOstzr.js";import"./DraggableList-DVXGvHZi.js";import"./search-B-2FwTug.js";import"./Input-BuqKJ0cI.js";import"./useControlled-BzCwoTTi.js";import"./Button-OjQdDHcR.js";import"./small-cross-CE66X8dX.js";import"./ActionButton-DWHTDIUq.js";import"./Checkbox-DIIlcsg1.js";import"./useValueChanged-DfSVAW7h.js";import"./CollapsiblePanel-BOO07fZk.js";import"./MultiColumnSortDialog-6-IDQkGN.js";import"./MenuTrigger-D3BrYWAo.js";import"./CompositeItem-3SIjESMP.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./getDisabledMountTransitionStyles-B2rY7D_M.js";import"./getPseudoElementBounds-BET_L97X.js";import"./chevron-down-DiWPSqGR.js";import"./index-DvRXLSHl.js";import"./error-_sVszbe4.js";import"./BaseCbacBanner-D67ftno0.js";import"./makeExternalStore-Dk5562or.js";import"./Tooltip-iXECaKde.js";import"./PopoverPopup-CjONQpR9.js";import"./debounce-D-UCwN4o.js";import"./useOsdkClient-BDUknGJW.js";import"./tick-DQwvbD-D.js";import"./DropdownField-C4CuM9xG.js";import"./isEqual-ByuLvGFi.js";import"./withOsdkMetrics-Db3uKV6F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
