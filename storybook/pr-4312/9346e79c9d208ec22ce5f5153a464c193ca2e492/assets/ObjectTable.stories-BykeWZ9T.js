import{j as i}from"./iframe-DM1KpbCL.js";import{O as p}from"./object-table-BYpj4rmp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-2z0jyVZo.js";import"./preload-helper-B5lE_CeJ.js";import"./Table-CgY3wOOw.js";import"./index-CcTzWx10.js";import"./Dialog-BPu8yv4m.js";import"./cross-CnFtk43X.js";import"./svgIconContainer-D9_cFA2L.js";import"./useBaseUiId-BS0ydcCd.js";import"./InternalBackdrop-BafR-jVe.js";import"./composite-UHbWR1-V.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./index-DzseGhFT.js";import"./useEventCallback-CPGZvpaV.js";import"./SkeletonBar-CIbWgRcz.js";import"./LoadingCell-B-S-snu4.js";import"./ColumnConfigDialog-BwmXpKR2.js";import"./DraggableList-BPHkcrGz.js";import"./search-CDaKZsSd.js";import"./Input-rJPz8yLN.js";import"./useControlled-BpM5Znsw.js";import"./Button-DbYUMIvf.js";import"./small-cross-D217SYw1.js";import"./ActionButton-CWh3vKDS.js";import"./Checkbox-B_lQ7cng.js";import"./useValueChanged-BvcJAZcs.js";import"./CollapsiblePanel-BCYCJ6Xx.js";import"./MultiColumnSortDialog-B1ICIl4b.js";import"./MenuTrigger-CAG7Bxtr.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./getDisabledMountTransitionStyles-BnK3lh8Z.js";import"./getPseudoElementBounds-CmPQacu1.js";import"./chevron-down-B55CqhSV.js";import"./index-BzYLadhD.js";import"./error-BpWcPv0-.js";import"./BaseCbacBanner-B7JhimwT.js";import"./makeExternalStore-ZdV9YzEC.js";import"./Tooltip-DJZfHa2w.js";import"./PopoverPopup-B7nGMxdA.js";import"./debounce-CcYDWLT0.js";import"./useOsdkClient-2PfnP7RQ.js";import"./tick-Dp0UZtnJ.js";import"./DropdownField-ByM8k4kQ.js";import"./isEqual-CGEFIeDh.js";import"./withOsdkMetrics-Dzlv9-Px.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
