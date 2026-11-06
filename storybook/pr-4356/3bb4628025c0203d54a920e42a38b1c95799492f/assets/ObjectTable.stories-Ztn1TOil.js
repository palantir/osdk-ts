import{j as i}from"./iframe-BL-M0CJv.js";import{O as p}from"./object-table-DyjahA3Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BBKq9AlQ.js";import"./preload-helper-C0zkmkXS.js";import"./Table-CwPyldrC.js";import"./index-Db0LO39w.js";import"./Dialog-X47xU8WG.js";import"./cross-x8jhhqfq.js";import"./svgIconContainer-BX2v_cR0.js";import"./useBaseUiId-TPr_qZ_1.js";import"./InternalBackdrop-DQF7Nf_d.js";import"./composite-Dx0NSDUH.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./index-H5T9X240.js";import"./useEventCallback-ClZrDBfO.js";import"./SkeletonBar-D3gneFRh.js";import"./LoadingCell-CIZRZJiV.js";import"./ColumnConfigDialog-CrhkzJOT.js";import"./DraggableList-DJESFfbU.js";import"./search-BiWkoGJW.js";import"./Input-EsCXPtCp.js";import"./useControlled-CKiiitZS.js";import"./Button-CC9Ubwa3.js";import"./small-cross-BM9iFkVs.js";import"./ActionButton-bQlrAOg4.js";import"./Checkbox-B2PO8JSa.js";import"./useValueChanged-DM3_Gsn0.js";import"./CollapsiblePanel-nIuDIxIE.js";import"./MultiColumnSortDialog-_iw8uLQh.js";import"./MenuTrigger-DKUx42mN.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./getDisabledMountTransitionStyles-D6fdD7kD.js";import"./getPseudoElementBounds-KY_ZlW1R.js";import"./chevron-down-5PA4SDET.js";import"./index-BFvrjhEh.js";import"./error-BIo7wVIV.js";import"./BaseCbacBanner-CMUORDC1.js";import"./makeExternalStore-DG0rmoX7.js";import"./Tooltip-CZJO9zR4.js";import"./PopoverPopup-B1aR8zHS.js";import"./debounce-zXiB5GmY.js";import"./useOsdkClient-Dx2Qs5xK.js";import"./tick-Ba6iW8gF.js";import"./DropdownField-CYb_vMw7.js";import"./isEqual-CJqL8oc3.js";import"./withOsdkMetrics-BYapBjuA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
