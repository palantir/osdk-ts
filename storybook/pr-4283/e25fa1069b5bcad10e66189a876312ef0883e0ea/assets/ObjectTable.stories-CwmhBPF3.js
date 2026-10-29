import{j as i}from"./iframe-CYk-VOyX.js";import{O as p}from"./object-table-Dlv2NNIH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BNa9ELP0.js";import"./preload-helper-SkgcqAwO.js";import"./Table-CcTGCJ8I.js";import"./index-SBfcRZ8A.js";import"./Dialog-BSX3qA9d.js";import"./cross-DMsanrWV.js";import"./svgIconContainer-jVuUMFBU.js";import"./useBaseUiId-DaFkg2Hs.js";import"./InternalBackdrop-Boo6A0xA.js";import"./composite-BKwpvwkR.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./index-DPxe0aBZ.js";import"./useEventCallback-BY8DoVsR.js";import"./SkeletonBar-62HfS3Nk.js";import"./LoadingCell-C1ph3ij6.js";import"./ColumnConfigDialog-CngWqElV.js";import"./DraggableList-BPueF49n.js";import"./search-cR64-3Tm.js";import"./Input-D-JL81JO.js";import"./useControlled-C7TGm_r4.js";import"./Button-CExSo-UX.js";import"./small-cross-G7_j2zv8.js";import"./ActionButton-D8hPawwc.js";import"./Checkbox-BYlpXA2o.js";import"./useValueChanged-DrnGNbKP.js";import"./CollapsiblePanel-D0zrAQ08.js";import"./MultiColumnSortDialog-DZEk5xHQ.js";import"./MenuTrigger-CeyAU8Ab.js";import"./CompositeItem-CaDSOm5y.js";import"./ToolbarRootContext--t9DiEt8.js";import"./getDisabledMountTransitionStyles-CPFd5Dgv.js";import"./getPseudoElementBounds-BtB_IhPs.js";import"./chevron-down-Bs06bZ_z.js";import"./index-DHPPBEA9.js";import"./error-zC5vfcSr.js";import"./BaseCbacBanner-BJopHCBa.js";import"./makeExternalStore-B8yIQpmX.js";import"./Tooltip-DygePy8y.js";import"./PopoverPopup-MmB-vCo2.js";import"./debounce-BLRPrO6Z.js";import"./useOsdkClient-CpgQqUq5.js";import"./tick-sF3dW88A.js";import"./DropdownField-B-M_qxJL.js";import"./isEqual-DTmc0HEa.js";import"./withOsdkMetrics-BJbglULT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
