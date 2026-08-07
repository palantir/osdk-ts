import{j as i}from"./iframe-Bm3fa2Ga.js";import{O as p}from"./object-table-CN32R2L8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D27NsMn4.js";import"./preload-helper-D06pMuuX.js";import"./Table-CMOQFdw2.js";import"./index-exHa5srN.js";import"./Dialog-DPgA7HA4.js";import"./cross-BU7xL5ZY.js";import"./svgIconContainer-BMtH4hPo.js";import"./useBaseUiId-gpm2SMjj.js";import"./InternalBackdrop-Bhfp83tH.js";import"./composite-CeJsh_Dj.js";import"./index-LSlomKTu.js";import"./index-CSBVc4TV.js";import"./index-rk6eXQfS.js";import"./useEventCallback-CEmf2hqV.js";import"./SkeletonBar-Co7WW1h8.js";import"./LoadingCell-DbwzZSTM.js";import"./ColumnConfigDialog-BFIB5_qm.js";import"./DraggableList-BncsMZN7.js";import"./search-hZlNybQI.js";import"./Input-Bs9zmxov.js";import"./useControlled-CeZ9aCri.js";import"./isEqual-DYSA09uA.js";import"./isObject-BQ5tPhs4.js";import"./Button-CKJng19p.js";import"./ActionButton-FTSH7zNj.js";import"./Checkbox-De3q9A2T.js";import"./useValueChanged-8-72OZ4e.js";import"./CollapsiblePanel-BDf8BElQ.js";import"./MultiColumnSortDialog-C47pH7Rr.js";import"./MenuTrigger-txaj9CZA.js";import"./CompositeItem-DeL1bikB.js";import"./ToolbarRootContext-thHFFfWO.js";import"./getDisabledMountTransitionStyles-C3HmR4g3.js";import"./getPseudoElementBounds-n_2JPh_k.js";import"./chevron-down-CaanKCC-.js";import"./index-C8gxRxXp.js";import"./error-CUc3n5dL.js";import"./BaseCbacBanner-BsVIQ_Ip.js";import"./makeExternalStore-RYoaG-HB.js";import"./Tooltip-DKabOtn5.js";import"./PopoverPopup-C85aR5Bs.js";import"./toNumber-ChFXJ0W2.js";import"./useOsdkClient-BF01c34H.js";import"./tick-DSLlXIp8.js";import"./DropdownField-BAzEMy-q.js";import"./withOsdkMetrics-B-jEgCV5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
