import{j as i}from"./iframe-AuAaB4HI.js";import{O as p}from"./object-table-Cd9572Ls.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8btggX2.js";import"./preload-helper-qH-vyE7r.js";import"./Table-DkVJx52C.js";import"./index-BKkpZaGC.js";import"./Dialog-C8RsVbkF.js";import"./cross-B_t7xRmp.js";import"./svgIconContainer-CNBq2Qvc.js";import"./useBaseUiId-C8uvXzmq.js";import"./InternalBackdrop-BY0s6ZkK.js";import"./composite-OHdH01L1.js";import"./index-De6CDc-m.js";import"./index-BGK8CIIz.js";import"./index-B03wNI31.js";import"./useEventCallback-CPYY-2RY.js";import"./SkeletonBar-DUAi2JRR.js";import"./LoadingCell-ClVQTm05.js";import"./ColumnConfigDialog--oHcFC6T.js";import"./DraggableList-B2jXnvo5.js";import"./search-MZDtJj7T.js";import"./Input-DkM5HnnT.js";import"./useControlled-D-wnjZuk.js";import"./Button-BkBIeHIG.js";import"./small-cross-BIOH-3UI.js";import"./ActionButton-Bce2G-nj.js";import"./Checkbox-CuISlYlI.js";import"./useValueChanged-BzNV50BT.js";import"./CollapsiblePanel-DJjrjh2j.js";import"./MultiColumnSortDialog-23Ke-zpJ.js";import"./MenuTrigger-Cj7fZqKT.js";import"./CompositeItem-BPZ7rSFH.js";import"./ToolbarRootContext-CDLutxqH.js";import"./getDisabledMountTransitionStyles-BoDOk_4Q.js";import"./getPseudoElementBounds-BUuKa4di.js";import"./chevron-down-C-dLVWDH.js";import"./index-fbOZd30r.js";import"./error-CZom1ueN.js";import"./BaseCbacBanner-CexzNDIA.js";import"./makeExternalStore-BZZHokGM.js";import"./Tooltip-DiHHkjyw.js";import"./PopoverPopup-uo-vkHCz.js";import"./debounce-DfeaP7BT.js";import"./useOsdkClient-BVW8BASE.js";import"./tick-DYRfQajR.js";import"./DropdownField-uNE4h0vC.js";import"./isEqual-B-7njsTG.js";import"./withOsdkMetrics-ChC8Do0m.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
