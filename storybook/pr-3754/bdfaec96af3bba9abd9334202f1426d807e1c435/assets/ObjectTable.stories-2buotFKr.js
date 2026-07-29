import{j as i}from"./iframe-Cpo2Lb7Q.js";import{O as p}from"./object-table-5Jh_3dqt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3NwkkZ3k.js";import"./preload-helper-BTyBDeYw.js";import"./Table-DYI1bu7c.js";import"./index-DAIxb8lO.js";import"./Dialog-BcvgDMAE.js";import"./cross-CZFyZqXF.js";import"./svgIconContainer-CNBgUvgp.js";import"./useBaseUiId-C71UhqfB.js";import"./InternalBackdrop-BbBNeTmM.js";import"./composite-lg9O8pjM.js";import"./index-P8ZVWR7P.js";import"./index-BzSe1Ywi.js";import"./index-BbCiixnW.js";import"./useEventCallback-CXI_gnIi.js";import"./SkeletonBar-V58QqV18.js";import"./LoadingCell-CNLIcZ1_.js";import"./ColumnConfigDialog-CpBrKYB4.js";import"./DraggableList-D-hNhtrV.js";import"./search-81KRYPyx.js";import"./Input-Cq3cg5h0.js";import"./useControlled-Du4CUvuR.js";import"./isEqual-C-XNtB89.js";import"./isObject-DQzLRM1_.js";import"./Button-DvY2Q1-Z.js";import"./ActionButton-CEbVE-_9.js";import"./Checkbox-CmhKE0_L.js";import"./useValueChanged-wmiaDnHO.js";import"./CollapsiblePanel-DX31vVrS.js";import"./MultiColumnSortDialog-D0MoyL6S.js";import"./MenuTrigger-DjPrBlqb.js";import"./CompositeItem-Can9NOH7.js";import"./ToolbarRootContext-4YzqWCdW.js";import"./getDisabledMountTransitionStyles-CVyvKvVG.js";import"./getPseudoElementBounds-B1IEE38k.js";import"./chevron-down-BSTwpJrf.js";import"./index-DxrxQtdn.js";import"./error-C4NjMbrc.js";import"./BaseCbacBanner-BKoq64Pz.js";import"./makeExternalStore-Bmx7Tt0X.js";import"./Tooltip-BQBIdErB.js";import"./PopoverPopup-D5V5N6Lq.js";import"./toNumber-BK28PHzs.js";import"./useOsdkClient-DmZx15_x.js";import"./tick-CLQ_tC5j.js";import"./DropdownField-BH_EsL1V.js";import"./withOsdkMetrics-j77wZ3nI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
