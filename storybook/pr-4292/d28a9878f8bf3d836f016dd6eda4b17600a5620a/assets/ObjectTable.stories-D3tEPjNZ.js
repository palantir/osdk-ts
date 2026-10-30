import{j as i}from"./iframe-Bib3kGT6.js";import{O as p}from"./object-table-BGi71GLP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CiDxrrvf.js";import"./preload-helper-C51LGZ31.js";import"./Table-tNd1boHc.js";import"./index-VjAhrkKZ.js";import"./Dialog-fher5GbH.js";import"./cross-qIT4Mchn.js";import"./svgIconContainer-BZsDWIhS.js";import"./useBaseUiId-CnlY9UEZ.js";import"./InternalBackdrop-Bk9vvVbD.js";import"./composite--njzr7wG.js";import"./index-CYSDWPDR.js";import"./index-DGYgRGZ8.js";import"./index-BoAbROLn.js";import"./useEventCallback-DCT06OVg.js";import"./SkeletonBar-Csvi_hZx.js";import"./LoadingCell-kGwEUKgO.js";import"./ColumnConfigDialog-UqIBsJqh.js";import"./DraggableList-CdJZevuu.js";import"./search-P-oq-XW2.js";import"./Input-isV5Y8xL.js";import"./useControlled-Drh12MBC.js";import"./Button-D_pfSgnH.js";import"./small-cross-vP71PtUb.js";import"./ActionButton-ChBBZFUd.js";import"./Checkbox-CLh6Wqk-.js";import"./useValueChanged-wvMqhi3F.js";import"./CollapsiblePanel-lc_QiXgr.js";import"./MultiColumnSortDialog-m9U3Hgcc.js";import"./MenuTrigger-DniFjMpX.js";import"./CompositeItem-BS4Q5bgP.js";import"./ToolbarRootContext-DtzEjAjd.js";import"./getDisabledMountTransitionStyles-G-mSpcgO.js";import"./getPseudoElementBounds-CAYA-GnQ.js";import"./chevron-down-lJXkLqJI.js";import"./index-B7RnLU7r.js";import"./error-k1gRtmZa.js";import"./BaseCbacBanner-D2ms6TGX.js";import"./makeExternalStore-BO4M2yBP.js";import"./Tooltip-CK9OMmvF.js";import"./PopoverPopup-Dk_xDUPF.js";import"./debounce-BONFZmZ3.js";import"./useOsdkClient-FvgP99Ie.js";import"./tick-BQw9UkqU.js";import"./DropdownField-j-f9GReF.js";import"./isEqual-Cya0uAr9.js";import"./withOsdkMetrics-BuJy5uT4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
