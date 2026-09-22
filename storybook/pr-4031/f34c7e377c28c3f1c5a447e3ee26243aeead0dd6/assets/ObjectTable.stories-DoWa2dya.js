import{j as i}from"./iframe-DbTMqywr.js";import{O as p}from"./object-table-B4NijfTH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gQd7UeVW.js";import"./preload-helper-CplCMsOq.js";import"./Table-ivRLn4Th.js";import"./index-DrdNpw1u.js";import"./Dialog-DCrT0Gtt.js";import"./cross-D4suWXRq.js";import"./svgIconContainer-1kdK0av6.js";import"./useBaseUiId-kPb3HUGs.js";import"./InternalBackdrop-C2r_bKtU.js";import"./composite-EoFmCbIV.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./index-D8QZGzUD.js";import"./useEventCallback-BukFJMlj.js";import"./SkeletonBar-DxAs7_Je.js";import"./LoadingCell-B5t-9nBu.js";import"./ColumnConfigDialog-BoEEyPIP.js";import"./DraggableList-ChICZTX-.js";import"./search-CUcR83Lr.js";import"./Input-BLknSyNo.js";import"./useControlled-DbEVD0lO.js";import"./Button-B7bNBfe0.js";import"./small-cross-Ch5rXEbe.js";import"./ActionButton-L8rz2KEU.js";import"./Checkbox-DNMwhsGI.js";import"./useValueChanged-bqR-PJWE.js";import"./CollapsiblePanel-C4Fd8GWr.js";import"./MultiColumnSortDialog-C2m7wdIH.js";import"./MenuTrigger-C4ayYf8h.js";import"./CompositeItem-hF1oPeOK.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./getDisabledMountTransitionStyles-CKr3XGAi.js";import"./getPseudoElementBounds-H03pfPE9.js";import"./chevron-down-Bh3KWvIp.js";import"./index-BioKUlDZ.js";import"./error-Du92aaZX.js";import"./BaseCbacBanner-B4a-77eR.js";import"./makeExternalStore-mtSSB5CA.js";import"./Tooltip-X97LD_qB.js";import"./PopoverPopup-yvtzY1iK.js";import"./debounce-BgRvR_Oe.js";import"./useOsdkClient-T0bLDe_N.js";import"./tick-Dk-mGEMR.js";import"./DropdownField-AShWiiqn.js";import"./isEqual-C3spmmnW.js";import"./withOsdkMetrics-C049M_96.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
