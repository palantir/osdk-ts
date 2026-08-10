import{j as i}from"./iframe-BlS90ihs.js";import{O as p}from"./object-table-CriJqgAL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B2qohSxy.js";import"./preload-helper-CO5g6I2w.js";import"./Table-CSpzi4Wm.js";import"./index-BHOc8LyC.js";import"./Dialog-DAyAF1uP.js";import"./cross-B_hisJSZ.js";import"./svgIconContainer-LYrWoKiL.js";import"./useBaseUiId-Cf5AZRTS.js";import"./InternalBackdrop-DyXxto56.js";import"./composite-DLqdT5CV.js";import"./index-U6MToZTc.js";import"./index-Dx7dMNiV.js";import"./index-C6u7r9LX.js";import"./useEventCallback-B5w2dWGU.js";import"./SkeletonBar-Dmn9hVsc.js";import"./LoadingCell-D2mD0B3A.js";import"./ColumnConfigDialog-BrNjXxXe.js";import"./DraggableList-Dhzm7_-v.js";import"./search-CHH1oEbG.js";import"./Input-CeNFNh0n.js";import"./useControlled-B84OuIK1.js";import"./isEqual-ewgMqB9v.js";import"./isObject-aIdOeCBg.js";import"./Button-SxoUXmH3.js";import"./ActionButton-VrprXojg.js";import"./Checkbox-BiITbu2D.js";import"./useValueChanged-BktjxXbF.js";import"./CollapsiblePanel-DI6MBG5L.js";import"./MultiColumnSortDialog-BoEoNYy8.js";import"./MenuTrigger-BjitqoO9.js";import"./CompositeItem-DCiFXfQY.js";import"./ToolbarRootContext-BkF9_TGB.js";import"./getDisabledMountTransitionStyles-Rn-KFTgx.js";import"./getPseudoElementBounds-BICswt92.js";import"./chevron-down-Cd3C4D7a.js";import"./index-D3oeH8Dz.js";import"./error-CPJsC_89.js";import"./BaseCbacBanner-BCUyWElG.js";import"./makeExternalStore-C-0gPcpm.js";import"./Tooltip-CcTGnIxC.js";import"./PopoverPopup-BmHjJY8y.js";import"./toNumber-C8hHjjna.js";import"./useOsdkClient-DdijOu9r.js";import"./tick-_PMLCEhr.js";import"./DropdownField-DxP0_Ckl.js";import"./withOsdkMetrics-Dc64VAF-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
