import{j as i}from"./iframe-CdsRGRZD.js";import{O as p}from"./object-table-CeOE5Mdz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Clkq4NhY.js";import"./preload-helper-CGHORiIs.js";import"./Table-C_N_Eckt.js";import"./index-Fk1WgWoL.js";import"./Dialog-DuuLYCJ_.js";import"./cross-DAi95Y0X.js";import"./svgIconContainer-Cxkf-wd_.js";import"./useBaseUiId-DiEHO-EU.js";import"./InternalBackdrop-c4kOEo_j.js";import"./composite-DyS-Ch2i.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./index-CfhQ_HhS.js";import"./useEventCallback-DbOnN22T.js";import"./SkeletonBar-Dldmu3tt.js";import"./LoadingCell-COUXzJd2.js";import"./ColumnConfigDialog-CBifeMKK.js";import"./DraggableList-DhJLvr1S.js";import"./search-B-mt-Fpc.js";import"./Input-BrPBFCOf.js";import"./useControlled-CXpC8eD9.js";import"./Button-CMyVgQSr.js";import"./small-cross-DD2bSDX4.js";import"./ActionButton-B-ECTkAX.js";import"./Checkbox-9ZfJtWE0.js";import"./useValueChanged-hFU-JeNn.js";import"./CollapsiblePanel-BCipB-WW.js";import"./MultiColumnSortDialog-CpORbkLb.js";import"./MenuTrigger-BFayFRUa.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./getDisabledMountTransitionStyles-DXjYuHQ4.js";import"./getPseudoElementBounds-Cg-geDk4.js";import"./chevron-down-C7u5o2RL.js";import"./index-C2Mhw8zH.js";import"./error-D2kK2TGa.js";import"./BaseCbacBanner-PXIb0wXt.js";import"./makeExternalStore-8ZflOwQq.js";import"./Tooltip-CHHDt5TJ.js";import"./PopoverPopup-CExD3oNB.js";import"./debounce-C26q8tZz.js";import"./useOsdkClient-B3rsIMmP.js";import"./tick-slqArv83.js";import"./DropdownField-C2AO5vc6.js";import"./isEqual-B5I4IGDV.js";import"./withOsdkMetrics-DzKI7pdO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
