import{j as i}from"./iframe-B312ejAg.js";import{O as p}from"./object-table-DnoG2D9F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDbJg05w.js";import"./preload-helper-y_TwqfdY.js";import"./Table-CWU8juG-.js";import"./index-M8CqzHEe.js";import"./Dialog-tA5-WrCl.js";import"./cross-fdsbY64l.js";import"./svgIconContainer-CzNhgEtv.js";import"./useBaseUiId-anpR_KLF.js";import"./InternalBackdrop-Igg-F26O.js";import"./composite-EvWupaEF.js";import"./index-Cf0quKT1.js";import"./index-DAOTkIj1.js";import"./index-kf4fDJGN.js";import"./useEventCallback-BmcDVE9F.js";import"./SkeletonBar-Cp--rqZE.js";import"./LoadingCell-CxO_8mfq.js";import"./ColumnConfigDialog-BJ33PpUQ.js";import"./DraggableList-CqqS-PfK.js";import"./search-DkAQ0ID2.js";import"./Input-hV3H3zUc.js";import"./useControlled-Dbu3jRTE.js";import"./isEqual-DX8Pba1x.js";import"./isObject-BmWUUYs3.js";import"./Button-CREGuHb1.js";import"./ActionButton-BO9c2wPo.js";import"./Checkbox-oHmNLRGC.js";import"./useValueChanged-6i9rivvp.js";import"./CollapsiblePanel-BNxxYAyz.js";import"./MultiColumnSortDialog-CEYgGiwr.js";import"./MenuTrigger-CQVoOi76.js";import"./CompositeItem-B5kZOPHG.js";import"./ToolbarRootContext-CZlcd-GQ.js";import"./getDisabledMountTransitionStyles-DsLtSiiY.js";import"./getPseudoElementBounds-DikY_gPm.js";import"./chevron-down-DR1l8zQy.js";import"./index-OifC9Xwy.js";import"./error-CcgwDgNh.js";import"./BaseCbacBanner-BXUATeZK.js";import"./makeExternalStore-UZoMjkrc.js";import"./Tooltip-DSWFjtCt.js";import"./PopoverPopup-D2zQwFUn.js";import"./toNumber-D7Zr4H5G.js";import"./useOsdkClient-CmtDNjlP.js";import"./tick-BV5lo1Vw.js";import"./DropdownField-RaJqOZ62.js";import"./withOsdkMetrics-BvU1ehSn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
