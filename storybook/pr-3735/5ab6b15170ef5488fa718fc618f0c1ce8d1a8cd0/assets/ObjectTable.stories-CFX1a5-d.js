import{j as i}from"./iframe-CI_HynUY.js";import{O as p}from"./object-table-BKiuEgSl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8Y1oD2M.js";import"./preload-helper-CIV_stCl.js";import"./Table-Bdxi8Ji2.js";import"./index-0kQGtEwV.js";import"./Dialog-DmIoMb6K.js";import"./cross-BfUKNbpN.js";import"./svgIconContainer-CBJHfw9Y.js";import"./useBaseUiId-CLhtbhfw.js";import"./InternalBackdrop-2mD5okmV.js";import"./composite-ChmQoEk2.js";import"./index-DyCxF_Yp.js";import"./index-BkBZKr2_.js";import"./index-CuvLYwNQ.js";import"./useEventCallback-LvVc03lO.js";import"./SkeletonBar-BqtbT4_L.js";import"./LoadingCell-BR6Jc_kG.js";import"./ColumnConfigDialog-VArGH5Un.js";import"./DraggableList-DNw4NfZ0.js";import"./search-DA24byco.js";import"./Input-Cb1k9hUL.js";import"./useControlled-CEg8frKf.js";import"./isEqual-njDV2lTg.js";import"./isObject-y8UFtvsy.js";import"./Button-BHVlE6--.js";import"./ActionButton-DBOJ-o3j.js";import"./Checkbox-ClCwaXFv.js";import"./useValueChanged-CbXoGVGF.js";import"./CollapsiblePanel-BNbnAlQH.js";import"./MultiColumnSortDialog-DbgN10xZ.js";import"./MenuTrigger-DtKC9G_6.js";import"./CompositeItem-D6h7EiM2.js";import"./ToolbarRootContext-Bg59D_CY.js";import"./getDisabledMountTransitionStyles-BgQ6Y6en.js";import"./getPseudoElementBounds-Djlx0q2A.js";import"./chevron-down-BLW-Pg3l.js";import"./index-BdlH6Nzm.js";import"./error-C7hCYMbm.js";import"./BaseCbacBanner-DRPBT1G1.js";import"./makeExternalStore-DhTdoCR8.js";import"./Tooltip-Baji5KPr.js";import"./PopoverPopup-CBR7iU58.js";import"./toNumber-Q3gPj6MM.js";import"./useOsdkClient-Cz_MMEOS.js";import"./tick-BDXCYJjJ.js";import"./DropdownField-BnBpVV6_.js";import"./withOsdkMetrics-CWUy-TNv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
