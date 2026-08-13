import{j as i}from"./iframe-5bssl6VS.js";import{O as p}from"./object-table-BbXBLAoq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--Duq67Zy.js";import"./preload-helper-BHXvjcwa.js";import"./Table-DuplKoEt.js";import"./index-B13HoCGw.js";import"./Dialog-Dagr4xYg.js";import"./cross-DxgHVtzX.js";import"./svgIconContainer-DrtwtWvp.js";import"./useBaseUiId-Dh4eINWl.js";import"./InternalBackdrop-gF6cp71q.js";import"./composite-Btg8TS6e.js";import"./index-BOy4EylD.js";import"./index-nZ8SppMu.js";import"./index-D6UnHnWh.js";import"./useEventCallback-D8RU-Nt1.js";import"./SkeletonBar-jq5pbuMG.js";import"./LoadingCell-BT9Hgziu.js";import"./ColumnConfigDialog-1HCkOSYn.js";import"./DraggableList-DOc9gEAb.js";import"./search-VkpzhyZf.js";import"./Input-Cn-NeA9g.js";import"./useControlled-DiYZsjSM.js";import"./Button-DlzEigHK.js";import"./small-cross-BP7K_1-R.js";import"./ActionButton-WlOudVkr.js";import"./Checkbox-c1OEAWMk.js";import"./useValueChanged-DhkyBG2M.js";import"./CollapsiblePanel-D0mcSh8k.js";import"./MultiColumnSortDialog-EOtasI8f.js";import"./MenuTrigger-B0zTqH6h.js";import"./CompositeItem-BARyggcS.js";import"./ToolbarRootContext-BS1iuPdd.js";import"./getDisabledMountTransitionStyles-BMdgnVVy.js";import"./getPseudoElementBounds-DhRDGSxS.js";import"./chevron-down-CFvJBTG-.js";import"./index-BLEwjvAg.js";import"./error-BGrVIj_t.js";import"./BaseCbacBanner-BnA-PWSg.js";import"./makeExternalStore-BheM4fhK.js";import"./Tooltip-8Z9hfeDS.js";import"./PopoverPopup-BeZaAXer.js";import"./debounce-BgFOafJA.js";import"./useOsdkClient-BTz6SXdT.js";import"./tick-CQ8SUApn.js";import"./DropdownField-BbRynaXk.js";import"./isEqual-leOPEBrs.js";import"./withOsdkMetrics-CZkoO3-I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
