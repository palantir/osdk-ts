import{j as i}from"./iframe-BJzSfC9S.js";import{O as p}from"./object-table-BMCTAiyf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0VWGP4I.js";import"./preload-helper-C5ZXn0m1.js";import"./Table-BIkC33Zx.js";import"./index-RBTsKrCd.js";import"./Dialog-O7xuo_XA.js";import"./cross-C1sOYIrW.js";import"./svgIconContainer-CuAg_aag.js";import"./useBaseUiId-xJC8-ZJA.js";import"./InternalBackdrop-jeH2RH2w.js";import"./composite-CJkKobo9.js";import"./index-XpV3If0y.js";import"./index-BJ-crEmJ.js";import"./index-huqfVkjH.js";import"./useEventCallback-w7WB5s1Y.js";import"./SkeletonBar-7o_3NyMD.js";import"./LoadingCell-CgxR8vsD.js";import"./ColumnConfigDialog-B6PrK4cc.js";import"./DraggableList-DjcDEt3p.js";import"./search-BtII_V1C.js";import"./Input-DtZovt6p.js";import"./useControlled-CHkHsIux.js";import"./Button-VqVSA-sW.js";import"./small-cross-CuZoKliA.js";import"./ActionButton-LG9rRmUw.js";import"./Checkbox-9l2II2-R.js";import"./useValueChanged-3Zyk1ZQA.js";import"./CollapsiblePanel-B8KUeZV_.js";import"./MultiColumnSortDialog-B3CRa72v.js";import"./MenuTrigger-DMuAXtcy.js";import"./CompositeItem-Dy9HP9ud.js";import"./ToolbarRootContext-BYj16EhM.js";import"./getDisabledMountTransitionStyles-C9ZXU9C3.js";import"./getPseudoElementBounds-DGHyT3Ys.js";import"./chevron-down-i7BRJyaV.js";import"./index-C7z7F6oT.js";import"./error-B8K_QQqb.js";import"./BaseCbacBanner-D5GYp1r1.js";import"./makeExternalStore-BYmjIu_q.js";import"./Tooltip-Bgn1Cxp6.js";import"./PopoverPopup-X5gFNrqC.js";import"./debounce-DNvbPKFV.js";import"./useOsdkClient-CQVwNPHy.js";import"./tick-C6e3lIMM.js";import"./DropdownField-BKTfgTvj.js";import"./isEqual-BEG_D5ZZ.js";import"./withOsdkMetrics-Dv0OE5bl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
