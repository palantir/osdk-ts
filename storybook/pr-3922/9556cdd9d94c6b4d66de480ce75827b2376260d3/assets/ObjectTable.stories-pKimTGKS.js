import{j as i}from"./iframe-uuw7htdR.js";import{O as p}from"./object-table-BRgDatzv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnQgDDUE.js";import"./preload-helper-DFPRxsEF.js";import"./Table-CwiVhKvo.js";import"./index-DyFb1z2g.js";import"./Dialog-DanhRYeN.js";import"./cross-BpDXlZPZ.js";import"./svgIconContainer-6mS79FyE.js";import"./useBaseUiId-BbWDT_DX.js";import"./InternalBackdrop-DSxt84yf.js";import"./composite-HcgVWLde.js";import"./index-KZpV_o_R.js";import"./index-DlhafJwL.js";import"./index-TikMIhJ1.js";import"./useEventCallback--9RyIE0g.js";import"./SkeletonBar-CV-e5B2s.js";import"./LoadingCell-BieQChy9.js";import"./ColumnConfigDialog-BYR7Bb37.js";import"./DraggableList-Dehj-1oF.js";import"./search-CPthhaeA.js";import"./Input-B4rchUKr.js";import"./useControlled-DWYS3HP4.js";import"./Button-iHaT6U_x.js";import"./small-cross-mMVM4Qt0.js";import"./ActionButton-BDVI-Ha2.js";import"./Checkbox-BDnIdw4Q.js";import"./useValueChanged-DTHX8REt.js";import"./CollapsiblePanel-BpCoh2zs.js";import"./MultiColumnSortDialog-Bu8iH6Vo.js";import"./MenuTrigger-Dn_zgl92.js";import"./CompositeItem-CIVV53Jd.js";import"./ToolbarRootContext-DWeXPuz4.js";import"./getDisabledMountTransitionStyles-BFWHvAfp.js";import"./getPseudoElementBounds-DslwyEnI.js";import"./chevron-down-Y-hj8f1V.js";import"./index-D-Jsk4o1.js";import"./error-CblFsZqu.js";import"./BaseCbacBanner-D3kXbQeQ.js";import"./makeExternalStore-DAuuY8fZ.js";import"./Tooltip-coVj6bPK.js";import"./PopoverPopup-BYNv-Qsz.js";import"./debounce-CZIJJWHa.js";import"./useOsdkClient-BtbsETzR.js";import"./tick-DSafz49U.js";import"./DropdownField-DXP5SNgq.js";import"./isEqual-Cr99_gpe.js";import"./withOsdkMetrics-CgSgSDy7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
