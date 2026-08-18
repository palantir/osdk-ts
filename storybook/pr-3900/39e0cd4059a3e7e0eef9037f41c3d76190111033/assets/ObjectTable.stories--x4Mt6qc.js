import{j as i}from"./iframe-CNz8RlYl.js";import{O as p}from"./object-table-BFKZlesw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-zgxCtrQD.js";import"./preload-helper-BIeB60q0.js";import"./Table-Dyr6DZ2y.js";import"./index-XxW0KRYf.js";import"./Dialog-yEMCC74c.js";import"./cross-CO8ceZUf.js";import"./svgIconContainer-B0JmWAlI.js";import"./useBaseUiId-D4vwSczU.js";import"./InternalBackdrop--VJLOWNr.js";import"./composite-CZy-mnNe.js";import"./index-DGRndsQB.js";import"./index-BlGd4sFh.js";import"./index-CPfBu2RL.js";import"./useEventCallback-DfP35NXy.js";import"./SkeletonBar-Sl0pLnzx.js";import"./LoadingCell-CsRc4-EC.js";import"./ColumnConfigDialog-RcbP0ZVL.js";import"./DraggableList-Bi4SEbSM.js";import"./search-ERRW7qI9.js";import"./Input-CpAPI-dP.js";import"./useControlled-DQvqj1ii.js";import"./Button-BoQYF-o_.js";import"./small-cross-PTH7Ve-P.js";import"./ActionButton-revmG3rY.js";import"./Checkbox-CdslJ3sm.js";import"./useValueChanged-C6ABxE1k.js";import"./CollapsiblePanel-DvAEYQfZ.js";import"./MultiColumnSortDialog-CovHMgzm.js";import"./MenuTrigger-BYzbxebb.js";import"./CompositeItem-rHSaquZY.js";import"./ToolbarRootContext-D4VXXO-L.js";import"./getDisabledMountTransitionStyles-B2i134Af.js";import"./getPseudoElementBounds-Der8dMUs.js";import"./chevron-down-DoirlpdZ.js";import"./index-9-SdAaB2.js";import"./error-DqoZ7f_W.js";import"./BaseCbacBanner-DHpPxvN7.js";import"./makeExternalStore-pBRszKy8.js";import"./Tooltip-CAngo_3k.js";import"./PopoverPopup-Dj7q3xHP.js";import"./debounce-DBQB4U5e.js";import"./useOsdkClient-il4guZPb.js";import"./tick-Bs481eBK.js";import"./DropdownField-DQKVOkv8.js";import"./isEqual-CofoEUjw.js";import"./withOsdkMetrics-CtoWR-rA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
