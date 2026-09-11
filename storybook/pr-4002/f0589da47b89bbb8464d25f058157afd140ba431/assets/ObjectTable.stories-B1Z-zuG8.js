import{j as i}from"./iframe-CM-gF3vE.js";import{O as p}from"./object-table-C32GMorJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D_rL-Q-_.js";import"./preload-helper-6RfIl02U.js";import"./Table-QO4nURij.js";import"./index-DP8egC0k.js";import"./Dialog-DGgbpeLl.js";import"./cross-YK-JeFcC.js";import"./svgIconContainer-PHQsggTT.js";import"./useBaseUiId-CaS2-N7q.js";import"./InternalBackdrop-BWQN2r6E.js";import"./composite-Cf4jE4TY.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./index-JlgGEqsp.js";import"./useEventCallback-DWaD4meR.js";import"./SkeletonBar-BEl30Own.js";import"./LoadingCell-DJ4wUhY2.js";import"./ColumnConfigDialog-CSs7gAfE.js";import"./DraggableList-DzEByvv8.js";import"./search-BtBkQ6yC.js";import"./Input-DqavlJne.js";import"./useControlled-BG8DwFhU.js";import"./Button-BzK-RFmN.js";import"./small-cross-BR7O7PTe.js";import"./ActionButton-ESMROX5N.js";import"./Checkbox-pu8Dy_Nr.js";import"./useValueChanged-CM10G8md.js";import"./CollapsiblePanel-CMWBQRO_.js";import"./MultiColumnSortDialog-D7Rvpo7x.js";import"./MenuTrigger-B0ayLht6.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./getDisabledMountTransitionStyles-CA_1r-E1.js";import"./getPseudoElementBounds-du8OB8QR.js";import"./chevron-down-w3gTlyQy.js";import"./index-C3eh3scJ.js";import"./error-2hF2x4c1.js";import"./BaseCbacBanner-ByAGatso.js";import"./makeExternalStore-BT0R62z7.js";import"./Tooltip-Bwp1W_ff.js";import"./PopoverPopup-Bq82sjKK.js";import"./debounce-BZ1j8w7d.js";import"./useOsdkClient-BXUVBGsy.js";import"./tick-Cz70wbcO.js";import"./DropdownField-DO17CDFv.js";import"./isEqual-tjQhxROU.js";import"./withOsdkMetrics-CARAYaYa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
