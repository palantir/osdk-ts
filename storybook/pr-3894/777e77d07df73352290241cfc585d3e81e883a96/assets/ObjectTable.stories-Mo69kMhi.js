import{j as i}from"./iframe-C1kKKYdD.js";import{O as p}from"./object-table-EugYSPRX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BP3ho0qc.js";import"./preload-helper-C6rhobWF.js";import"./Table-CLbo6gpE.js";import"./index-B1n8gOgb.js";import"./Dialog-D7ukJCKc.js";import"./cross-BR0Y4p7f.js";import"./svgIconContainer-BTr0PbTv.js";import"./useBaseUiId-DXAZbTHW.js";import"./InternalBackdrop-3F3xyHcj.js";import"./composite-ByHxOBay.js";import"./index-DQDP2CQD.js";import"./index-BLcLrxFs.js";import"./index-U-Kwg7sY.js";import"./useEventCallback-CdKhensz.js";import"./SkeletonBar-CPN9tZcc.js";import"./LoadingCell-ClyVakYH.js";import"./ColumnConfigDialog-BgefYkLR.js";import"./DraggableList-CHuZ_t3T.js";import"./search-D608KClO.js";import"./Input-BuF9ZIUF.js";import"./useControlled-unM0ZLUw.js";import"./Button-BSvNohBM.js";import"./small-cross-BIpg1ePk.js";import"./ActionButton-B68xFw_I.js";import"./Checkbox-xlu2pDu0.js";import"./useValueChanged-DFOr3chR.js";import"./CollapsiblePanel-CKUKf9Bh.js";import"./MultiColumnSortDialog-MHmSP81g.js";import"./MenuTrigger-o8CXHElR.js";import"./CompositeItem-BdX0jAKM.js";import"./ToolbarRootContext-BtomAQOF.js";import"./getDisabledMountTransitionStyles-Clu-nqTW.js";import"./getPseudoElementBounds-B5hqRMo8.js";import"./chevron-down-nMTcBTam.js";import"./index-BzLe4OJj.js";import"./error-BDemNBQ2.js";import"./BaseCbacBanner-BUjFwL83.js";import"./makeExternalStore-Cl4nhu8w.js";import"./Tooltip-CWzX8-a-.js";import"./PopoverPopup-BDqDxjcQ.js";import"./debounce-CcUXcLi7.js";import"./useOsdkClient-CK76NQ5O.js";import"./tick-BitGxqRP.js";import"./DropdownField-D9mPTLqi.js";import"./isEqual-CHP7bcZD.js";import"./withOsdkMetrics-BcxhsS6v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
