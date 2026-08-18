import{j as i}from"./iframe-BgvLvKva.js";import{O as p}from"./object-table-C5L2lUHh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BfH2t0Za.js";import"./preload-helper-B1HwKvYQ.js";import"./Table-BlCx7eH_.js";import"./index-C5UyF6W2.js";import"./Dialog-BEorr5lF.js";import"./cross-WN3vBfZU.js";import"./svgIconContainer-CcU0b5d6.js";import"./useBaseUiId-ctMKwW6N.js";import"./InternalBackdrop-BYbSa1OD.js";import"./composite-BYxHSO5E.js";import"./index-DHe1MgcY.js";import"./index-DIEiR9vc.js";import"./index-CZvid9ZQ.js";import"./useEventCallback-BeycNYXS.js";import"./SkeletonBar-Dy9e3NIH.js";import"./LoadingCell-Dwc76lDi.js";import"./ColumnConfigDialog-sp5VdiZD.js";import"./DraggableList-J22w-pzX.js";import"./search-BC3w2ZRf.js";import"./Input-BRpNUPT7.js";import"./useControlled-DJVt1nAj.js";import"./Button-CT3oLFOf.js";import"./small-cross-w8o8YAZK.js";import"./ActionButton-BW77J7ec.js";import"./Checkbox-f__wunET.js";import"./useValueChanged-DomNCZ4R.js";import"./CollapsiblePanel-B9nGBeF-.js";import"./MultiColumnSortDialog-BesTIq8C.js";import"./MenuTrigger-jvhRJjZJ.js";import"./CompositeItem-BIOBD7ED.js";import"./ToolbarRootContext-1Zs9_aIX.js";import"./getDisabledMountTransitionStyles-DDd2v21E.js";import"./getPseudoElementBounds-DZzp9gig.js";import"./chevron-down-Dsbl3RB_.js";import"./index-Dsqet5kS.js";import"./error-MS4gG1j8.js";import"./BaseCbacBanner-B4v3W_qt.js";import"./makeExternalStore-C6g-u5rg.js";import"./Tooltip-CdSKpuHY.js";import"./PopoverPopup-Cs96luoA.js";import"./debounce-DDxQirrc.js";import"./useOsdkClient-CMrBc-CL.js";import"./tick-BQ9Lr4SE.js";import"./DropdownField-CpbgYUlt.js";import"./isEqual-BAMquniX.js";import"./withOsdkMetrics-Ccq9KWbZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
