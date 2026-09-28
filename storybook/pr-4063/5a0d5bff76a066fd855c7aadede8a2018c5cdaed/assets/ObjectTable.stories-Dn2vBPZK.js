import{j as i}from"./iframe-BtV5Bfbi.js";import{O as p}from"./object-table-ZYe7tm6I.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C1LCGAQw.js";import"./preload-helper-BaD02CxS.js";import"./Table-CBQvxOK4.js";import"./index-DAzHyxws.js";import"./Dialog-Um1GHs-x.js";import"./cross-BHH5GCet.js";import"./svgIconContainer-CFzNfVqM.js";import"./useBaseUiId-BC3a2pkv.js";import"./InternalBackdrop-B_jFUajW.js";import"./composite-C3xTmSSO.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./index-C0jKnzN3.js";import"./useEventCallback-ebp9vHiV.js";import"./SkeletonBar-B4vnzvdw.js";import"./LoadingCell-De2MP1wZ.js";import"./ColumnConfigDialog-BThrS80a.js";import"./DraggableList-CrCzHpXA.js";import"./search-mBeXzQE2.js";import"./Input-C3DTMAEb.js";import"./useControlled-DlTCUtzh.js";import"./Button-CysZ3JPI.js";import"./small-cross-DPjobAyw.js";import"./ActionButton-BlgkxXyS.js";import"./Checkbox-B-UqzIJw.js";import"./useValueChanged-CHWZQbm_.js";import"./CollapsiblePanel-CD3W91SM.js";import"./MultiColumnSortDialog-BF442a6X.js";import"./MenuTrigger-Bfyh-Slq.js";import"./CompositeItem-Byxrj2vM.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./getDisabledMountTransitionStyles-BU2CuFg5.js";import"./getPseudoElementBounds-UM2c8Uko.js";import"./chevron-down-CdxAFrGc.js";import"./index-C-hRh0T_.js";import"./error-h7XYysQz.js";import"./BaseCbacBanner-5I7wRngd.js";import"./makeExternalStore-1ZTuUud2.js";import"./Tooltip-D8NuVw6n.js";import"./PopoverPopup-BWHAgMN7.js";import"./debounce-BqJT0k2X.js";import"./useOsdkClient-CpnotctQ.js";import"./tick-DOCZRs2u.js";import"./DropdownField-BC7NVBoz.js";import"./isEqual-BSakDJRq.js";import"./withOsdkMetrics-jSZ_Ki0a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
