import{j as i}from"./iframe-UMA_W4zg.js";import{O as p}from"./object-table-BKKDI_ri.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BpOZnusH.js";import"./preload-helper-DaWmOC6j.js";import"./Table-BGvWPyfA.js";import"./index-DErLZjti.js";import"./Dialog-BQYk3Xuz.js";import"./cross-uHksr5pp.js";import"./svgIconContainer-9DAz-xsT.js";import"./useBaseUiId-DrNqzCDV.js";import"./InternalBackdrop-Cv-jCIPc.js";import"./composite-cvyf7rpJ.js";import"./index-Dh7ukoT2.js";import"./index-CEcWMbm3.js";import"./index-B3bK0vsc.js";import"./useEventCallback-BylinRJz.js";import"./SkeletonBar-C7upQ1oN.js";import"./LoadingCell-C5zsmtCI.js";import"./ColumnConfigDialog-CkgLU6qt.js";import"./DraggableList-Bpq0lEEU.js";import"./search-DDqiAHNJ.js";import"./Input-B7UvCAbi.js";import"./useControlled-CE_jt1bn.js";import"./Button-CX0KG7k8.js";import"./small-cross-CzUurzMY.js";import"./ActionButton-B7RzNoqN.js";import"./Checkbox-Aalf-Nva.js";import"./useValueChanged-BNApxWdw.js";import"./CollapsiblePanel-CrqQkYc4.js";import"./MultiColumnSortDialog-TIdtig3-.js";import"./MenuTrigger-Ct962EWD.js";import"./CompositeItem-CW8dWwRY.js";import"./ToolbarRootContext-BoABXtXA.js";import"./getDisabledMountTransitionStyles-BxLbi0RQ.js";import"./getPseudoElementBounds-DNHUImXR.js";import"./chevron-down-Bl-z4KIc.js";import"./index-CpBKtjMD.js";import"./error-CSAcfTyc.js";import"./BaseCbacBanner-CMohmlg6.js";import"./makeExternalStore-Cw5EimAG.js";import"./Tooltip-CRExDwDA.js";import"./PopoverPopup-9-F50C0V.js";import"./debounce-DbOnd40f.js";import"./useOsdkClient-DJyPXQs4.js";import"./tick-0wfK4xfn.js";import"./DropdownField-CPG2IfxA.js";import"./isEqual-D8Go71qV.js";import"./withOsdkMetrics-SDJh6Z2p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
