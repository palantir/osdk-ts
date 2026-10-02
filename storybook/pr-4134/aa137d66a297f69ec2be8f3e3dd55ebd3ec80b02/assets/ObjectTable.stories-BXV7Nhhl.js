import{j as i}from"./iframe-DSCKXMMn.js";import{O as p}from"./object-table-CZbIqfQV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAVB9Og5.js";import"./preload-helper-ByptHhz6.js";import"./Table-Cr_vfs4t.js";import"./index-C7t8d6sq.js";import"./Dialog-Dkrw2dKY.js";import"./cross-D9ih38aN.js";import"./svgIconContainer-D4l9MrWe.js";import"./useBaseUiId-C9Ey5z8I.js";import"./InternalBackdrop-DJscdhsG.js";import"./composite-CJGYUM8R.js";import"./index-CCGpCs03.js";import"./index-DTvEyVWA.js";import"./index-BEvWt0A3.js";import"./useEventCallback-B0RejaLo.js";import"./SkeletonBar-DseYvX2N.js";import"./LoadingCell-B39OstDD.js";import"./ColumnConfigDialog-CZg_lX5T.js";import"./DraggableList-CU3gmg9g.js";import"./search-D1zNkldZ.js";import"./Input-BzhFYkRc.js";import"./useControlled-D9fcHZz8.js";import"./Button-DsHbP2Ls.js";import"./small-cross-ClLnfsZa.js";import"./ActionButton-CDDQzDqj.js";import"./Checkbox-BcOWPK9W.js";import"./useValueChanged-CJeLgR2q.js";import"./CollapsiblePanel-CwSDo6aL.js";import"./MultiColumnSortDialog-Dd95rHb3.js";import"./MenuTrigger-L3QaBjKq.js";import"./CompositeItem-DuylraaY.js";import"./ToolbarRootContext-DcygcfWk.js";import"./getDisabledMountTransitionStyles-MuBPPf6T.js";import"./getPseudoElementBounds-BMTzjDxj.js";import"./chevron-down-CoJlRxaZ.js";import"./index-BNKB-ErD.js";import"./error-KXOxkvIx.js";import"./BaseCbacBanner-CwIMApuU.js";import"./makeExternalStore-BTu3d_5y.js";import"./Tooltip-BjyKOyVF.js";import"./PopoverPopup-wHBjGNnn.js";import"./debounce-CC8-tWmy.js";import"./useOsdkClient-BI1XigGe.js";import"./tick-DglZI497.js";import"./DropdownField-B7i6TyJK.js";import"./isEqual-W07FZkQR.js";import"./withOsdkMetrics-DIi3nPfP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
