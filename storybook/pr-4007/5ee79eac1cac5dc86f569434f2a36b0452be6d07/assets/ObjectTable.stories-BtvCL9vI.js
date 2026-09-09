import{j as i}from"./iframe-CiHlxZKU.js";import{O as p}from"./object-table-C4dQmNBt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CLYLx7Ia.js";import"./preload-helper-3-eHC6Oh.js";import"./Table-ZtgXk0oU.js";import"./index-DVK1qKBA.js";import"./Dialog-jNCMq-Da.js";import"./cross-DnkNQUkT.js";import"./svgIconContainer-B7oTlJNo.js";import"./useBaseUiId-CYLsHClR.js";import"./InternalBackdrop-BJHbr0kT.js";import"./composite-BmdkrJdi.js";import"./index-DX1yHJ7e.js";import"./index-BpiTLOmA.js";import"./index-DpLMVXlm.js";import"./useEventCallback-7w4Pvi2m.js";import"./SkeletonBar-BXOdSqzb.js";import"./LoadingCell-BZyyuOIV.js";import"./ColumnConfigDialog-BlzoqZbI.js";import"./DraggableList-Bi0BBenO.js";import"./search-DGzvsSxy.js";import"./Input-WrV6nsUm.js";import"./useControlled-CSOYJAwm.js";import"./Button-79zi9HD3.js";import"./small-cross-BzAZpvdB.js";import"./ActionButton-B55oBZFt.js";import"./Checkbox-D3aGbVro.js";import"./useValueChanged-Dq-vng4U.js";import"./CollapsiblePanel-DvgzvRJe.js";import"./MultiColumnSortDialog-CXlcCZMY.js";import"./MenuTrigger-C9tdQe5I.js";import"./CompositeItem-BgmQxoYD.js";import"./ToolbarRootContext-COwKCexa.js";import"./getDisabledMountTransitionStyles-z4-ghzJd.js";import"./getPseudoElementBounds-TrAXZdgf.js";import"./chevron-down-7F-_gONV.js";import"./index-GfXRF7Uq.js";import"./error-BS001LJB.js";import"./BaseCbacBanner-DHTjEXE2.js";import"./makeExternalStore-BMposTlq.js";import"./Tooltip-kEePm4YO.js";import"./PopoverPopup-Dl2GoZ6p.js";import"./debounce-DxTEdiWN.js";import"./useOsdkClient-2Pjo08Xn.js";import"./tick-CIMxzo_S.js";import"./DropdownField-DkSX7_zX.js";import"./isEqual-BXzVZVEC.js";import"./withOsdkMetrics-DOs-_cRC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
