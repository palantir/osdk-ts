import{j as i}from"./iframe-QSknsibA.js";import{O as p}from"./object-table-DLsBAGD5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-WBLiv9_W.js";import"./preload-helper-B3LrgdxU.js";import"./Table-BsAnMen_.js";import"./index-B_OK08DX.js";import"./Dialog-B_zFcXLg.js";import"./cross-mnCq1uQ2.js";import"./svgIconContainer-De7GUSo3.js";import"./useBaseUiId-56xqlUOA.js";import"./InternalBackdrop-DLNy9f8e.js";import"./composite-rTqajcpw.js";import"./index-Cf49gatU.js";import"./index-DchscfH7.js";import"./index-CsRUh4p0.js";import"./useEventCallback-BNFo9jqT.js";import"./SkeletonBar-U8s5a4eZ.js";import"./LoadingCell-CFl1Ne9K.js";import"./ColumnConfigDialog-DToErAYq.js";import"./DraggableList-BduB1LxV.js";import"./search-D5SBe6yO.js";import"./Input-DSWKb0xV.js";import"./useControlled-DGsWq6rv.js";import"./isEqual-DOlanfjM.js";import"./isObject-KrdndNs4.js";import"./Button-Bl3RvClX.js";import"./ActionButton-CK5g_2j-.js";import"./Checkbox-ByXXs2vR.js";import"./useValueChanged-Cc7DEmXa.js";import"./CollapsiblePanel-D10wD81P.js";import"./MultiColumnSortDialog-BWQjojtp.js";import"./MenuTrigger-madZLcXv.js";import"./CompositeItem-DQqMAMfP.js";import"./ToolbarRootContext-D15HbZ6L.js";import"./getDisabledMountTransitionStyles-DLDAhr3d.js";import"./getPseudoElementBounds-CO-qv3XB.js";import"./chevron-down-CmOKY8Hu.js";import"./index-DRj4Fndf.js";import"./error-C_PHjA_A.js";import"./BaseCbacBanner-B7GtJmuI.js";import"./makeExternalStore-ClhVK885.js";import"./Tooltip-C03NNvk7.js";import"./PopoverPopup-DR9rKf_2.js";import"./toNumber-D_d6GRXM.js";import"./useOsdkClient-CDT1l2-s.js";import"./tick-CXORmvZn.js";import"./DropdownField-aW2MkhBu.js";import"./withOsdkMetrics-CLccy0f7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
