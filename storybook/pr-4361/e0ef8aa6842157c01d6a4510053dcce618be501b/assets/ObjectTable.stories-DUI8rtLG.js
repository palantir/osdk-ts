import{j as i}from"./iframe-CQjpYJVQ.js";import{O as p}from"./object-table-BmToVaRO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dd-e3WHX.js";import"./preload-helper-5bhpmr97.js";import"./Table-DJBSUaTM.js";import"./index-zd6HXz9_.js";import"./Dialog-CM4XLviM.js";import"./cross-Deh5uDpB.js";import"./svgIconContainer-CE1ZQVk8.js";import"./useBaseUiId-jFZ68_bH.js";import"./InternalBackdrop-CTLp_BJs.js";import"./composite-D-zcsHj1.js";import"./index-CULyv4a8.js";import"./index-plWBun5g.js";import"./index-DSMMhLR-.js";import"./useEventCallback-eP2xfpVZ.js";import"./SkeletonBar-BOoh_hK9.js";import"./LoadingCell-DVXZLGmA.js";import"./ColumnConfigDialog-C74PQ5xm.js";import"./DraggableList-DKoTnVlC.js";import"./search-DStplL8v.js";import"./Input-BiPNpz_C.js";import"./useControlled-Ft9yJ31_.js";import"./Button-fOyW8XxT.js";import"./small-cross-DJff8L-H.js";import"./ActionButton-CnnTCenO.js";import"./Checkbox-CZm4gJDd.js";import"./useValueChanged-D_5yXDiE.js";import"./CollapsiblePanel-DOU8qtuA.js";import"./MultiColumnSortDialog-DWANlOyK.js";import"./MenuTrigger-91XlII8E.js";import"./CompositeItem-C0zU83Hu.js";import"./ToolbarRootContext-DqJWDTyy.js";import"./getDisabledMountTransitionStyles-YjHiHV9j.js";import"./getPseudoElementBounds-BLYD-n1h.js";import"./chevron-down-BDQkglqC.js";import"./index-RDlQB4dD.js";import"./error-BRCQmACx.js";import"./BaseCbacBanner-BvAKGDgp.js";import"./makeExternalStore-Cn0Nj4g1.js";import"./Tooltip-Dgp5uIQr.js";import"./isObject-uzU1Ylcp.js";import"./debounce-dJHnwnXb.js";import"./useOsdkClient-DD-lOblu.js";import"./tick-BHxlRL9h.js";import"./DropdownField-C1a46o93.js";import"./isEqual-C9gdny9X.js";import"./_baseIsEqual-DRNRy5kD.js";import"./withOsdkMetrics-By-ZCu6K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
