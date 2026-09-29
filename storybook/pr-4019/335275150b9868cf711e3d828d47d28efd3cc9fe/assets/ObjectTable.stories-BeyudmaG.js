import{j as i}from"./iframe-ALAQwSfV.js";import{O as p}from"./object-table-B5Y-FdlO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClyvYaRI.js";import"./preload-helper-fLSKrq12.js";import"./Table-y3Ue12x0.js";import"./index-nJZFwjBY.js";import"./Dialog-BqmhBVBc.js";import"./cross-CTj2uYDt.js";import"./svgIconContainer-CsyrjEXm.js";import"./useBaseUiId-BtuLk_tP.js";import"./InternalBackdrop-iwn5b5gf.js";import"./composite-TYYt2fCx.js";import"./index-BYTfgmte.js";import"./index-DvjPzKHT.js";import"./index-DCw12hpD.js";import"./useEventCallback-D7Z-udTV.js";import"./SkeletonBar-tY7bgNdB.js";import"./LoadingCell-iXXN4fTA.js";import"./ColumnConfigDialog-spFlNXIh.js";import"./DraggableList-BvBf5a-L.js";import"./search-6F7M3AuK.js";import"./Input-CFWd2gLa.js";import"./useControlled-f6wr2N38.js";import"./Button-Be4ab6Ld.js";import"./small-cross-Bymv6dJ6.js";import"./ActionButton-CThDEtCo.js";import"./Checkbox-BliZh0Tj.js";import"./useValueChanged-Cmuhto8a.js";import"./CollapsiblePanel-BbDUb0xg.js";import"./MultiColumnSortDialog-BCMdQTO-.js";import"./MenuTrigger-Cs2aHSlk.js";import"./CompositeItem-DbwrFgnX.js";import"./ToolbarRootContext-B_pgtouG.js";import"./getDisabledMountTransitionStyles-_fn-AZLs.js";import"./getPseudoElementBounds-nAdQbUQj.js";import"./chevron-down-nwzUELg0.js";import"./index-DipU2kkl.js";import"./error-fdu9cH2p.js";import"./BaseCbacBanner-xAH7Syu1.js";import"./makeExternalStore-BU7UI9Bv.js";import"./Tooltip-BJAwvsAX.js";import"./PopoverPopup-BM1vQM5s.js";import"./debounce-CCGKB1Tj.js";import"./useOsdkClient-KB4bH-DF.js";import"./tick-D6R52cs_.js";import"./DropdownField-DixIy5fE.js";import"./isEqual-iKZ94W8E.js";import"./withOsdkMetrics-Bz9MfpUK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
