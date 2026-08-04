import{j as i}from"./iframe-B2WEvdAW.js";import{O as p}from"./object-table-D56pvC1L.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dlb6lixX.js";import"./preload-helper-DhU0XYWM.js";import"./Table-EuDoghZt.js";import"./index-CPTV9ACa.js";import"./Dialog-Bs9shMGW.js";import"./cross-Dp_5_chm.js";import"./svgIconContainer-2zRkClSo.js";import"./useBaseUiId-DCdD9_76.js";import"./InternalBackdrop-CFws66aH.js";import"./composite-BREofBqz.js";import"./index-BdLXJsG_.js";import"./index-CbAjSkqf.js";import"./index-BLoo5gPv.js";import"./useEventCallback-C_gsVITF.js";import"./SkeletonBar-5dGv93nQ.js";import"./LoadingCell-ChbduxuV.js";import"./ColumnConfigDialog-Bj3PLmMs.js";import"./DraggableList-CfxOorci.js";import"./search--8DzG11U.js";import"./Input-Df2u9clw.js";import"./useControlled-C-Bb8qdR.js";import"./isEqual-D5fyckHN.js";import"./isObject-ScWPTohZ.js";import"./Button-CfOMVE39.js";import"./ActionButton-BNwYJDXK.js";import"./Checkbox-hQgO7BXg.js";import"./useValueChanged-DcSkF3ku.js";import"./CollapsiblePanel-DKsUEBPA.js";import"./MultiColumnSortDialog-CtzHHpxn.js";import"./MenuTrigger-CQi3yp30.js";import"./CompositeItem-DV2f_o_-.js";import"./ToolbarRootContext-Cl65jw6L.js";import"./getDisabledMountTransitionStyles-DVeUHiRy.js";import"./getPseudoElementBounds-_iSTNHhH.js";import"./chevron-down-CDva5__V.js";import"./index-Bt45A8jP.js";import"./error-DA0fUKLV.js";import"./BaseCbacBanner-CYNzCrjS.js";import"./makeExternalStore-PS0hgXnz.js";import"./Tooltip-C1X-0Hb3.js";import"./PopoverPopup-BjirBSSn.js";import"./toNumber-x-yUogQr.js";import"./useOsdkClient-DVo9clTL.js";import"./tick-CL3asYDB.js";import"./DropdownField-s2aUsSbs.js";import"./withOsdkMetrics-BQALV_bt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
