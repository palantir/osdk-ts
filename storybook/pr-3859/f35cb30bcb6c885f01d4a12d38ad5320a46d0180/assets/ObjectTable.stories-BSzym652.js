import{j as i}from"./iframe-DSbYefrL.js";import{O as p}from"./object-table-DOLS4r3F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CmJEJmS0.js";import"./preload-helper-Clv0QEBX.js";import"./Table-CpIrQiHH.js";import"./index-DfJdOFwn.js";import"./Dialog-CLbTzkqY.js";import"./cross-CfYS8owk.js";import"./svgIconContainer-Bkjdx6MT.js";import"./useBaseUiId-DkV43R3v.js";import"./InternalBackdrop-CGmifX4P.js";import"./composite-BhxdHiE2.js";import"./index-lJwGhQIz.js";import"./index-BRbX29hR.js";import"./index-D726ldU9.js";import"./useEventCallback-CmXtFHcQ.js";import"./SkeletonBar-C-O5AGPC.js";import"./LoadingCell-D6WW0MuL.js";import"./ColumnConfigDialog-X2Z4R0YZ.js";import"./DraggableList-Bi2lMrFV.js";import"./search-qlM389i2.js";import"./Input-DHiPLKtg.js";import"./useControlled-BarHOyLv.js";import"./isEqual-DgzbG1vg.js";import"./isObject-BIPzkIP0.js";import"./Button-C4t72u0x.js";import"./ActionButton-B3NdvxLm.js";import"./Checkbox-lygbNFpU.js";import"./useValueChanged-CbGyaYIf.js";import"./CollapsiblePanel-t-cQ1kOx.js";import"./MultiColumnSortDialog-B22v39MA.js";import"./MenuTrigger-BW5eLLQj.js";import"./CompositeItem-BtVMJozf.js";import"./ToolbarRootContext-B6LO1XZ_.js";import"./getDisabledMountTransitionStyles-BD6--rec.js";import"./getPseudoElementBounds-CQ0_pKjY.js";import"./chevron-down-Bh4mvEIQ.js";import"./index-R_rBoHID.js";import"./error-BdBj8w6f.js";import"./BaseCbacBanner-8eEQNYiR.js";import"./makeExternalStore-48lrjWXo.js";import"./Tooltip-BTFhzX0F.js";import"./PopoverPopup-Bam1YrA7.js";import"./debounce-GZwwSBFh.js";import"./useOsdkClient-aHXhUh5K.js";import"./tick-CNdHphiX.js";import"./DropdownField-Bsoi1h6R.js";import"./withOsdkMetrics-D8wuERpN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
