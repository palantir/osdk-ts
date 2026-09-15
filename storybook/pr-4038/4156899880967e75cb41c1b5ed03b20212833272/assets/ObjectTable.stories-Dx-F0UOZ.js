import{j as i}from"./iframe-WliM3Ewa.js";import{O as p}from"./object-table-DRO0-XsV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-48fjb9Bh.js";import"./preload-helper-DEyC4ekG.js";import"./Table-DoTOPMcE.js";import"./index-CnrTWWrO.js";import"./Dialog-C-9hMTPL.js";import"./cross-B523-3pv.js";import"./svgIconContainer-eh8pO9ol.js";import"./useBaseUiId-CUkyUtdd.js";import"./InternalBackdrop-C5-fjIik.js";import"./composite-ByE6f88x.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./index-CwjXC2Es.js";import"./useEventCallback-DwV1lBpW.js";import"./SkeletonBar-BlIjEe9R.js";import"./LoadingCell-BVlRdgDo.js";import"./ColumnConfigDialog-4uaAyz0M.js";import"./DraggableList-8FBKbtBf.js";import"./search-DOR9iHB9.js";import"./Input-CQ-UP_L4.js";import"./useControlled-DNr35Z2-.js";import"./Button-Bajbsf8L.js";import"./small-cross-DoL3gn1_.js";import"./ActionButton-B0Mz96Sd.js";import"./Checkbox-BwdGH573.js";import"./useValueChanged-CdN1D_N7.js";import"./CollapsiblePanel-DEqR4YPk.js";import"./MultiColumnSortDialog-BY_tdxDU.js";import"./MenuTrigger-taMZMeQ0.js";import"./CompositeItem-PZY5TD1e.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./getDisabledMountTransitionStyles-4NaqFyh-.js";import"./getPseudoElementBounds-FBUEgUOa.js";import"./chevron-down-D3GW0vbF.js";import"./index-DZuQrbeK.js";import"./error-CRmqFCAs.js";import"./BaseCbacBanner-B3tDHTYq.js";import"./makeExternalStore-y3QUXpj7.js";import"./Tooltip-9h8kIB5N.js";import"./PopoverPopup-BfSQYfPj.js";import"./debounce-BmlTPhI1.js";import"./useOsdkClient-Ds9WknxH.js";import"./tick-B5-KzR1n.js";import"./DropdownField-Dh8xBr1M.js";import"./isEqual-CqLdlydg.js";import"./withOsdkMetrics-BMKdbhzI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
