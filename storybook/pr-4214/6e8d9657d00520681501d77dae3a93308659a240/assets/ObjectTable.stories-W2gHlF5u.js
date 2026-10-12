import{j as i}from"./iframe-C9SuZ1RJ.js";import{O as p}from"./object-table-B7ycQ6BE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bfn16pKH.js";import"./preload-helper-DMSK6AnV.js";import"./Table-CF0LDgDy.js";import"./index-DT_ukoYl.js";import"./Dialog-D1IV12yc.js";import"./cross-Itynl6FX.js";import"./svgIconContainer-D69sxdT1.js";import"./useBaseUiId-7WRirspl.js";import"./InternalBackdrop-CMb1PVBv.js";import"./composite-CLRoo5Je.js";import"./index-DSlBaHfK.js";import"./index-BHS-eS1n.js";import"./index-CbbSTcJP.js";import"./useEventCallback-BATy1042.js";import"./SkeletonBar-B5kYBk_d.js";import"./LoadingCell-BCwvJEAw.js";import"./ColumnConfigDialog-CWF5ZNIo.js";import"./DraggableList-3rM2js5S.js";import"./search-N0RiDnX8.js";import"./Input-D0BDhaw_.js";import"./useControlled-DGoyddZA.js";import"./Button-DPVeNaPl.js";import"./small-cross-CVj6zxAy.js";import"./ActionButton-CFuC9l1R.js";import"./Checkbox-DlQe_mGI.js";import"./useValueChanged-DcttfwPd.js";import"./CollapsiblePanel-BYWPcYrr.js";import"./MultiColumnSortDialog-DaPBsJDS.js";import"./MenuTrigger-7tikn6Hn.js";import"./CompositeItem-y2AxCYkL.js";import"./ToolbarRootContext-IeBvAErZ.js";import"./getDisabledMountTransitionStyles-D61a-Amc.js";import"./getPseudoElementBounds-C0ASFWoG.js";import"./chevron-down-BSUO84z0.js";import"./index-tNEhjfv0.js";import"./error-JN7vVG19.js";import"./BaseCbacBanner-Bk40eYrU.js";import"./makeExternalStore-BkAl_UIS.js";import"./Tooltip-CDDNzZxm.js";import"./PopoverPopup-iUPwntF5.js";import"./debounce-Bhm2oAnY.js";import"./useOsdkClient-es3CZ3SD.js";import"./tick-Bfjhhadh.js";import"./DropdownField-Bh7g_Xnj.js";import"./isEqual-Bya2yiBi.js";import"./withOsdkMetrics-FfcvjHUd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
