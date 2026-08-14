import{j as i}from"./iframe-DfZGSEnK.js";import{O as p}from"./object-table-BhFBxuuq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Jk7vH_eB.js";import"./preload-helper-JSyPDtRL.js";import"./Table-DCHQ9DIl.js";import"./index-BtmgN424.js";import"./Dialog-BQK0uf89.js";import"./cross-Beh92vlp.js";import"./svgIconContainer-Df807jxI.js";import"./useBaseUiId-DywIzSMt.js";import"./InternalBackdrop-BrU3GtDz.js";import"./composite-CaYLCY3w.js";import"./index-DCIaOmvZ.js";import"./index-Bgh8wCNB.js";import"./index-BrCUh-Ra.js";import"./useEventCallback-ByrMJoxA.js";import"./SkeletonBar-C-t_-bWa.js";import"./LoadingCell-DVdW8-R0.js";import"./ColumnConfigDialog-fET7wgaA.js";import"./DraggableList-DwhS7pi1.js";import"./search-BwusOqn1.js";import"./Input-DFmCPLco.js";import"./useControlled-CIgmgNK9.js";import"./Button-B1pKZshi.js";import"./small-cross-Bc1839it.js";import"./ActionButton-BFRD3DcD.js";import"./Checkbox-CwNHEUFs.js";import"./useValueChanged-BoS3X9CQ.js";import"./CollapsiblePanel-CkOQ0TcF.js";import"./MultiColumnSortDialog-BTPWsaqG.js";import"./MenuTrigger-BV7h9uJl.js";import"./CompositeItem-BdMjAmQ6.js";import"./ToolbarRootContext-C7WEHba5.js";import"./getDisabledMountTransitionStyles-DJCiV1E5.js";import"./getPseudoElementBounds-B5f8znMc.js";import"./chevron-down-qE8TvtrC.js";import"./index-CgBWG5tj.js";import"./error-C02d4v5E.js";import"./BaseCbacBanner-DOZyeA5C.js";import"./makeExternalStore-BNurq7kY.js";import"./Tooltip-BHkZYyMQ.js";import"./PopoverPopup-BvvL2cGT.js";import"./debounce-CuIu4aks.js";import"./useOsdkClient-COnSdOcv.js";import"./tick-B2x0tHQ4.js";import"./DropdownField-BXW94eU-.js";import"./isEqual-BLC8r3fK.js";import"./withOsdkMetrics-BVC9GIYX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
