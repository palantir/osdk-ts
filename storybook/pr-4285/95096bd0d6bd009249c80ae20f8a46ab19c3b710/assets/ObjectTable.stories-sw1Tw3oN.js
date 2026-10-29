import{j as i}from"./iframe-BO3JDeUy.js";import{O as p}from"./object-table-BZk0Lu8i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CReS5tUG.js";import"./preload-helper-urwU0B1K.js";import"./Table-Npo51Eyl.js";import"./index-CEHZ1Lmc.js";import"./Dialog-x_VYxJbx.js";import"./cross-B4B_Rmmg.js";import"./svgIconContainer-B2x3jtn9.js";import"./useBaseUiId-BhX3QU_S.js";import"./InternalBackdrop-B9xuZ3X4.js";import"./composite-DkSbjExr.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./index-C1W664_h.js";import"./useEventCallback-DsZGsUBH.js";import"./SkeletonBar-BIEi9a0x.js";import"./LoadingCell-DDYsuin1.js";import"./ColumnConfigDialog-DWj93LnE.js";import"./DraggableList-Dpi7zkEQ.js";import"./search-BTnE45Hm.js";import"./Input-aywzIDzd.js";import"./useControlled-CFrWaOQK.js";import"./Button-HsgZWy4d.js";import"./small-cross-D5iZfcsS.js";import"./ActionButton-CjOnURl7.js";import"./Checkbox-BxlWuqsA.js";import"./useValueChanged-D73ikQgq.js";import"./CollapsiblePanel-fn9uuRmZ.js";import"./MultiColumnSortDialog-C_nTOm41.js";import"./MenuTrigger-DD1ibjA3.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./getDisabledMountTransitionStyles-D2oz7XSg.js";import"./getPseudoElementBounds-C9NZ6w4c.js";import"./chevron-down-D8wRJ6gM.js";import"./index-_n59woxc.js";import"./error-COT9B3Hv.js";import"./BaseCbacBanner-CWSg8Ff3.js";import"./makeExternalStore-DdmSyb-E.js";import"./Tooltip-B6gO1E8K.js";import"./PopoverPopup-HQOEOoaE.js";import"./debounce-B2PKE0le.js";import"./useOsdkClient-B48UOwRR.js";import"./tick-tswKzLaH.js";import"./DropdownField-CB_lS8X1.js";import"./isEqual-DQBhCu8Z.js";import"./withOsdkMetrics-C6_wMEah.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
