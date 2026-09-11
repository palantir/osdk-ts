import{j as i}from"./iframe-B9e47JAt.js";import{O as p}from"./object-table-B3vUriCd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CE4ne8Ly.js";import"./preload-helper-BRB8NOW_.js";import"./Table-moZoz-tl.js";import"./index-C_6xtQCD.js";import"./Dialog-De_UFcHU.js";import"./cross-ymxOUFGj.js";import"./svgIconContainer-dHjn9I5b.js";import"./useBaseUiId-VqyZRI0q.js";import"./InternalBackdrop-Dfj_iS6F.js";import"./composite-BethEnTN.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./index-DZGqQgW1.js";import"./useEventCallback-Bg7GLrL9.js";import"./SkeletonBar-BISleUwK.js";import"./LoadingCell-CHpd1JEV.js";import"./ColumnConfigDialog-DTLTAVEi.js";import"./DraggableList-BII7t1lU.js";import"./search-BejwSAXg.js";import"./Input-CPGlOkat.js";import"./useControlled-BBsT5_Nc.js";import"./Button-z2FVGTG2.js";import"./small-cross-DPszHJJB.js";import"./ActionButton-Bfthi2f3.js";import"./Checkbox-t96oYsN4.js";import"./useValueChanged-vvzPWCqc.js";import"./CollapsiblePanel-CcEY7J9b.js";import"./MultiColumnSortDialog-CK2phl-f.js";import"./MenuTrigger-BkF3VMxq.js";import"./CompositeItem-BJasfKU0.js";import"./ToolbarRootContext-DycOOcjn.js";import"./getDisabledMountTransitionStyles-BAlW402o.js";import"./getPseudoElementBounds-BbyW3FZM.js";import"./chevron-down-ChPDwIrO.js";import"./index-DY7BzFjI.js";import"./error-pDyLX5xW.js";import"./BaseCbacBanner-Dmr6f2y2.js";import"./makeExternalStore-CBsYhUmA.js";import"./Tooltip-FBqtZC3b.js";import"./PopoverPopup-Bvuw1Zd4.js";import"./debounce-CUqU57Yl.js";import"./useOsdkClient-D5uYQrdS.js";import"./tick-C3sbvhix.js";import"./DropdownField-rd7rOyCh.js";import"./isEqual-zLwlDRee.js";import"./withOsdkMetrics-CmtdaepB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
