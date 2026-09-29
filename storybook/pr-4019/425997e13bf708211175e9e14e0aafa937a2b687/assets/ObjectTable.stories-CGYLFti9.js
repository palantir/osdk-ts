import{j as i}from"./iframe-CN_vvEvV.js";import{O as p}from"./object-table-DX7CTvjQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BccLqAuu.js";import"./preload-helper-WuzznOu3.js";import"./Table-xHkxr4dJ.js";import"./index-Yn_grBDh.js";import"./Dialog-DFIKjt_b.js";import"./cross-BTNfX9AB.js";import"./svgIconContainer-Cuv7eTan.js";import"./useBaseUiId-D6GNKrv7.js";import"./InternalBackdrop-cUW2sy_R.js";import"./composite-Dgt1ShdF.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./index-CCC1qb5m.js";import"./useEventCallback-CKtb97LM.js";import"./SkeletonBar-DfT678KI.js";import"./LoadingCell-DO8BK_3m.js";import"./ColumnConfigDialog-jxRXajs0.js";import"./DraggableList-EI0d774X.js";import"./search-BL454ash.js";import"./Input-D-TN7H1o.js";import"./useControlled-DY8zlZhG.js";import"./Button-GYys4WHS.js";import"./small-cross-Bnuet9W-.js";import"./ActionButton-DNB_8X09.js";import"./Checkbox-CgSh6FsU.js";import"./useValueChanged-BAUdQdKF.js";import"./CollapsiblePanel-Btx1XCpX.js";import"./MultiColumnSortDialog-Cq5nIQkj.js";import"./MenuTrigger-BJCiSHbj.js";import"./CompositeItem-CUoXO_HL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./getDisabledMountTransitionStyles-BMjHeHnL.js";import"./getPseudoElementBounds-Blrc2Fw3.js";import"./chevron-down-CuRI24Zn.js";import"./index-e9J7zdgf.js";import"./error-DJd0ydtA.js";import"./BaseCbacBanner-pbTMe1h8.js";import"./makeExternalStore-DNuR4f-v.js";import"./Tooltip-CEURmlww.js";import"./PopoverPopup-B_u8qz4L.js";import"./debounce-DK3ARArn.js";import"./useOsdkClient-DrtQRBcg.js";import"./tick-DRndoMTx.js";import"./DropdownField-D5NveR3K.js";import"./isEqual-Z4hf267W.js";import"./withOsdkMetrics-C7EoGoEb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
