import{j as i}from"./iframe-CofS9Mjv.js";import{O as p}from"./object-table-DAECEFk_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRJf1Rsx.js";import"./preload-helper-DCg3GuVE.js";import"./Table-EqdpuzEw.js";import"./index-Dba1-hqN.js";import"./Dialog-lhlR2-KK.js";import"./cross-5sYjwK4P.js";import"./svgIconContainer-rLHaF5xG.js";import"./useBaseUiId-BkkGBRPa.js";import"./InternalBackdrop-qRjGdl8e.js";import"./composite-BDNG4DUT.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./index-BHS0czud.js";import"./useEventCallback-lNR3-f9S.js";import"./SkeletonBar-Aa10YgO8.js";import"./LoadingCell-By89uux3.js";import"./ColumnConfigDialog-IsC4-88V.js";import"./DraggableList-8GCsi5Wd.js";import"./search-CbFqNZT1.js";import"./Input-Bk5_B8IH.js";import"./useControlled-Dhms1Lp4.js";import"./Button-3zEBIt6E.js";import"./small-cross-DKt2prc5.js";import"./ActionButton-DNNEXv6M.js";import"./Checkbox-CniU0Q9L.js";import"./useValueChanged-BdhihQIl.js";import"./CollapsiblePanel-P6K_7Hb6.js";import"./MultiColumnSortDialog-q887Qwbf.js";import"./MenuTrigger-DUYeCOY7.js";import"./CompositeItem-GQbg_S7m.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./getDisabledMountTransitionStyles-4uwyOcbE.js";import"./getPseudoElementBounds-YLTZgyuZ.js";import"./chevron-down-CACMHp08.js";import"./index-CfMbSRut.js";import"./error-DOmo2qFa.js";import"./BaseCbacBanner-Q1kDpWFI.js";import"./makeExternalStore-BJ0PmYe7.js";import"./Tooltip-Ceoi_Zxm.js";import"./PopoverPopup-CuVPSugr.js";import"./debounce-DZR19dzG.js";import"./useOsdkClient-CEI0BVbt.js";import"./tick-B5fekc3f.js";import"./DropdownField-Bix-FJpy.js";import"./isEqual-V26gfMdB.js";import"./withOsdkMetrics-PwzVtj_c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
