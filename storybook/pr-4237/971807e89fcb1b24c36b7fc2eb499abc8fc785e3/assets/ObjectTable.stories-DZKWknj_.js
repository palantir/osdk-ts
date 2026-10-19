import{j as i}from"./iframe-BH9-Vfs1.js";import{O as p}from"./object-table-DkRx2TSI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBZ_6JoS.js";import"./preload-helper-CoJdsvxJ.js";import"./Table-CF_Gr0eJ.js";import"./index-_6Q5jVBK.js";import"./Dialog-H9PWXepR.js";import"./cross-HuW5yWPa.js";import"./svgIconContainer-BPyIUPO5.js";import"./useBaseUiId-CdU1pKU6.js";import"./InternalBackdrop-C4RHDXX9.js";import"./composite-aDEaeN1m.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./index-D_GYi7KZ.js";import"./useEventCallback-BM_lCHBk.js";import"./SkeletonBar-DUzCarP5.js";import"./LoadingCell-sgIDdnpb.js";import"./ColumnConfigDialog-sGa94e2C.js";import"./DraggableList-D7hjeCsQ.js";import"./search-CaTzsfhK.js";import"./Input-CYVECsi-.js";import"./useControlled-UCeQQNPP.js";import"./Button-DJTiAyTL.js";import"./small-cross-Ws2nfjsL.js";import"./ActionButton-CgXb0xmm.js";import"./Checkbox-5TgDST7R.js";import"./useValueChanged-C51YJ2lo.js";import"./CollapsiblePanel-b7brQAbP.js";import"./MultiColumnSortDialog-_aoaC3ql.js";import"./MenuTrigger-Dh7zRnlm.js";import"./CompositeItem-D5PXOQkD.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./getDisabledMountTransitionStyles-Bavl1m2r.js";import"./getPseudoElementBounds-fo53-Bfk.js";import"./chevron-down-SngEWHwD.js";import"./index-CHoEIfe6.js";import"./error-BMBrp2lF.js";import"./BaseCbacBanner-DarXxyY1.js";import"./makeExternalStore-Cax4wnWM.js";import"./Tooltip-D8UPmHEX.js";import"./PopoverPopup-Diu6AqpB.js";import"./debounce-CErsKOIl.js";import"./useOsdkClient-B78DQJmL.js";import"./tick-sRS91U9j.js";import"./DropdownField-BPBBYIiE.js";import"./isEqual-C-YyuCMw.js";import"./withOsdkMetrics-DsCWHvB2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
