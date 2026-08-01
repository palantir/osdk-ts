import{j as i}from"./iframe-DM57FO0O.js";import{O as p}from"./object-table-BUncbmPw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wTr2Iiac.js";import"./preload-helper-CiDQt3z4.js";import"./Table-fAJkuYMM.js";import"./index-78xpG-CN.js";import"./Dialog-B0lIxBy0.js";import"./cross-C4FWi7U6.js";import"./svgIconContainer-M4pBKDc9.js";import"./useBaseUiId-LhiCCirY.js";import"./InternalBackdrop-B7cw_zj9.js";import"./composite-szsum3r3.js";import"./index-X1UuWlqK.js";import"./index-C9SVGTzI.js";import"./index-BDCm_GGT.js";import"./useEventCallback-CQNDnyq4.js";import"./SkeletonBar-BXNcPfxw.js";import"./LoadingCell-CCifMiw4.js";import"./ColumnConfigDialog-BeH1Bmdd.js";import"./DraggableList-B-6UJOIk.js";import"./search-Swo5uGHk.js";import"./Input-jbZr5DP-.js";import"./useControlled-DmurJkbB.js";import"./isEqual-Bpc4ZaBI.js";import"./isObject-B39z3wFu.js";import"./Button-BtR_Rgq_.js";import"./ActionButton-CuTsrFpF.js";import"./Checkbox-CxtuU-nw.js";import"./useValueChanged-B7JDyvaj.js";import"./CollapsiblePanel-7JaVin_2.js";import"./MultiColumnSortDialog-CTjKzaH_.js";import"./MenuTrigger-DLb09YCg.js";import"./CompositeItem-COr71cMo.js";import"./ToolbarRootContext-Dme1Nr8M.js";import"./getDisabledMountTransitionStyles-BNVUpdXb.js";import"./getPseudoElementBounds-DTdRK2OL.js";import"./chevron-down-Dy3xC1Qv.js";import"./index-CIEwid69.js";import"./error-B-7TqBpt.js";import"./BaseCbacBanner-DnBux0DR.js";import"./makeExternalStore-IjYBHzVF.js";import"./Tooltip-D9DM-LvZ.js";import"./PopoverPopup-DJ9h3nij.js";import"./toNumber-BcdoaNcr.js";import"./useOsdkClient-CMjaLpsJ.js";import"./tick-D4_boYVT.js";import"./DropdownField-BHDZB30j.js";import"./withOsdkMetrics-U1ecBNOt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
