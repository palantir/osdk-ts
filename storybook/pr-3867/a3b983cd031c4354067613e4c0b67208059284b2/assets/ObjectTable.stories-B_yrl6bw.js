import{j as i}from"./iframe-BVDCNjcv.js";import{O as p}from"./object-table-iMyLgsRb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PJp8_2xi.js";import"./preload-helper-BYyHjn7h.js";import"./Table-CLSRkwMy.js";import"./index-_ZEFwRG4.js";import"./Dialog-CN3I2CLp.js";import"./cross-ha5THBWj.js";import"./svgIconContainer-DE6RIudO.js";import"./useBaseUiId-Bn7tPMyc.js";import"./InternalBackdrop-Cagl88rt.js";import"./composite-DfTYjTcf.js";import"./index-CiJWuuCz.js";import"./index-BpeKA42d.js";import"./index-DNPYVeRb.js";import"./useEventCallback-DymoCTvT.js";import"./SkeletonBar-Cht_cLuj.js";import"./LoadingCell-QXCWoCnM.js";import"./ColumnConfigDialog-C1Xo1sgk.js";import"./DraggableList-31c1qP_b.js";import"./search-DoN7C3Ww.js";import"./Input-D5ZE_3yL.js";import"./useControlled-C2Zp9gz_.js";import"./Button-ChLPke0x.js";import"./small-cross-59pV_NVH.js";import"./ActionButton-BEoPIWdX.js";import"./Checkbox-Bea_Wqm9.js";import"./useValueChanged-DLhsDHsb.js";import"./CollapsiblePanel-BnLgPV0Z.js";import"./MultiColumnSortDialog-BEjTzm5X.js";import"./MenuTrigger-DTO-2qCK.js";import"./CompositeItem-DqfwRJk9.js";import"./ToolbarRootContext-CtetOuLM.js";import"./getDisabledMountTransitionStyles-CAjd8DqA.js";import"./getPseudoElementBounds--sz9K5fS.js";import"./chevron-down-5NG5qhbV.js";import"./index-CMAvGmQJ.js";import"./error-CyfM8m9x.js";import"./BaseCbacBanner-_y_LvwWU.js";import"./makeExternalStore-B2YAtvuk.js";import"./Tooltip-BBhWS3Lt.js";import"./PopoverPopup-BsoLGNYy.js";import"./debounce-vPvNsZNP.js";import"./useOsdkClient-DZXCpy0q.js";import"./tick-4Gk2pH7M.js";import"./DropdownField-DxF_HQob.js";import"./isEqual-BlEwvh7Y.js";import"./withOsdkMetrics-vrnHfU6i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
