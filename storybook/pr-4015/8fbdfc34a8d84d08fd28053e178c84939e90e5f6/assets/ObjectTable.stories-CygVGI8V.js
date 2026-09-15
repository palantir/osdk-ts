import{j as i}from"./iframe-Eth4DscF.js";import{O as p}from"./object-table-Cbv16qZw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DXog5CVS.js";import"./preload-helper-D5DT8Gvv.js";import"./Table-BsZxvL7o.js";import"./index-CaJ3mqr2.js";import"./Dialog-BnNgj-DK.js";import"./cross-BwB0DXiU.js";import"./svgIconContainer-CoGRC72I.js";import"./useBaseUiId-B7RIhr15.js";import"./InternalBackdrop-CLNMJjbi.js";import"./composite-qIMfmfrB.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./index-DxmuItap.js";import"./useEventCallback-CCdM5L8S.js";import"./SkeletonBar-DiGFHRwx.js";import"./LoadingCell-DzayPawF.js";import"./ColumnConfigDialog-DtmA5b3f.js";import"./DraggableList-DSB2Ts9s.js";import"./search-CJHLYodH.js";import"./Input-4EN0R4Wx.js";import"./useControlled-E-2hYUgD.js";import"./Button-DxVY95w9.js";import"./small-cross-CJlA-_gF.js";import"./ActionButton-C6R1Vics.js";import"./Checkbox-nUwQbfWm.js";import"./useValueChanged-BesFItDX.js";import"./CollapsiblePanel-yBgFB804.js";import"./MultiColumnSortDialog-S4UpD3Tj.js";import"./MenuTrigger-CizIxwTs.js";import"./CompositeItem-DlxbA5eX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./getDisabledMountTransitionStyles-B5ZEbLKX.js";import"./getPseudoElementBounds-BtlXh7MV.js";import"./chevron-down-CqqSfn04.js";import"./index-Daf7mDrl.js";import"./error-BXTM1REk.js";import"./BaseCbacBanner-Dz7j698m.js";import"./makeExternalStore-2rYtWHIa.js";import"./Tooltip-drCTzUWh.js";import"./PopoverPopup-C3fOznkb.js";import"./debounce-Cu_1wwlT.js";import"./useOsdkClient--sVmWpOM.js";import"./tick-BmqhilVd.js";import"./DropdownField-BY08YoHL.js";import"./isEqual-DOeG1NN5.js";import"./withOsdkMetrics-HAEG8t0o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
