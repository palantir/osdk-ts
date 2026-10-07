import{j as i}from"./iframe-N69vsxs5.js";import{O as p}from"./object-table--oS9lLXG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-zxl0BP.js";import"./preload-helper-DK0eU9jP.js";import"./Table-BDw0zVSc.js";import"./index-DFVx6FW1.js";import"./Dialog-Cyl1rkzr.js";import"./cross-BdjHCXJd.js";import"./svgIconContainer-DHGJTaRH.js";import"./useBaseUiId-BOlvpNsK.js";import"./InternalBackdrop-CJ-MZyS5.js";import"./composite-DlZg84y_.js";import"./index-CshN8TfA.js";import"./index-CmUIsfdi.js";import"./index-B5NyIwpH.js";import"./useEventCallback-CIsta-Kv.js";import"./SkeletonBar-CxOLm6U3.js";import"./LoadingCell-D3W6Xq0V.js";import"./ColumnConfigDialog-wb4iu5K_.js";import"./DraggableList-DGvISr5x.js";import"./search-DHKYFAa1.js";import"./Input-DVgfJ9ud.js";import"./useControlled-HSJHWmyV.js";import"./Button-KvR9mvY1.js";import"./small-cross-BCBXkrpc.js";import"./ActionButton-_QLSmCEl.js";import"./Checkbox-D82l6YOs.js";import"./useValueChanged-Cmw18dL4.js";import"./CollapsiblePanel-BxyEH4DM.js";import"./MultiColumnSortDialog-DAgpNhCz.js";import"./MenuTrigger-CYNy5wPz.js";import"./CompositeItem-zsosIukW.js";import"./ToolbarRootContext-DAvYZo9n.js";import"./getDisabledMountTransitionStyles-DMbVH12F.js";import"./getPseudoElementBounds-DOAH-UkU.js";import"./chevron-down-I26OMj3W.js";import"./index-BLwokh6k.js";import"./error-vgCxf202.js";import"./BaseCbacBanner-Bc18pvVk.js";import"./makeExternalStore-BlbjB80h.js";import"./Tooltip-bOGOT-9E.js";import"./PopoverPopup-mInLly2E.js";import"./debounce-DK55d19x.js";import"./useOsdkClient-CzCwxYrp.js";import"./tick-CIuihs4e.js";import"./DropdownField-ByuxOcSB.js";import"./isEqual-BGChchyP.js";import"./withOsdkMetrics-D0jHdLVm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
