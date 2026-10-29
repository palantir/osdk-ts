import{j as i}from"./iframe-DzAVrHJ1.js";import{O as p}from"./object-table-Bnf64FoN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tlmWE6Kw.js";import"./preload-helper-ty-K3PMW.js";import"./Table-Z8p84qki.js";import"./index-C292Gvtl.js";import"./Dialog-DlW-Iivu.js";import"./cross-CwuqZdL9.js";import"./svgIconContainer-Cjn3QLE6.js";import"./useBaseUiId-C1k_ZcgS.js";import"./InternalBackdrop-BDeEY7y8.js";import"./composite-CMwdngwB.js";import"./index-Bz0mU_jm.js";import"./index-eBdvYF3H.js";import"./index-BITESRA3.js";import"./useEventCallback-ClRDKuB_.js";import"./SkeletonBar-CCisd-VN.js";import"./LoadingCell-Bz4DD9uV.js";import"./ColumnConfigDialog-65KeMPvb.js";import"./DraggableList-B-KFUbtk.js";import"./search-Bq5r2eJD.js";import"./Input-BlhxiPuo.js";import"./useControlled-P8ZVsLoA.js";import"./Button-G6bICRGy.js";import"./small-cross-BSn3VnZ1.js";import"./ActionButton-OV3tGcjp.js";import"./Checkbox-CQxEUilD.js";import"./useValueChanged-DsB7tdZ5.js";import"./CollapsiblePanel-DZRV367u.js";import"./MultiColumnSortDialog-DVENVKDl.js";import"./MenuTrigger-CbBXGgjg.js";import"./CompositeItem-DvTwYr0k.js";import"./ToolbarRootContext-mfvQj9MT.js";import"./getDisabledMountTransitionStyles-BvYKup6L.js";import"./getPseudoElementBounds-BHcHYgUs.js";import"./chevron-down-BLhnWXgc.js";import"./index-GsoBtsBJ.js";import"./error-BRilv6DJ.js";import"./BaseCbacBanner-DiXmyfjJ.js";import"./makeExternalStore-DMxEFrb0.js";import"./Tooltip-QlEg8iZs.js";import"./PopoverPopup-BfNxXbJo.js";import"./debounce-BdQCzqPM.js";import"./useOsdkClient-CMKwPtVZ.js";import"./tick-kpTktDfZ.js";import"./DropdownField-DPtluWvH.js";import"./isEqual-Bj__1TVq.js";import"./withOsdkMetrics-C01mqZCt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
