import{j as i}from"./iframe-Deuk3WWS.js";import{O as p}from"./object-table-sRmdC6uV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DexoNXRr.js";import"./preload-helper-BBagj194.js";import"./Table-ZZV9SBNc.js";import"./index-6Crz7A4k.js";import"./Dialog-BrM9AM2P.js";import"./cross-BVTbes25.js";import"./svgIconContainer-B5ALG4eV.js";import"./useBaseUiId-C0TzrPg5.js";import"./InternalBackdrop-BSAjnJ8q.js";import"./composite-CHecoTnn.js";import"./index-CLNZjEzY.js";import"./index-T88N5Ozy.js";import"./index-DdVo18Pi.js";import"./useEventCallback-Cb6Txe3l.js";import"./SkeletonBar-DSTTd06h.js";import"./LoadingCell-C4glawo5.js";import"./ColumnConfigDialog-DWZYx-xr.js";import"./DraggableList-8AUjWbzX.js";import"./search-CbQ17IfG.js";import"./Input-DB3pzys-.js";import"./useControlled-Ck5NZ_4o.js";import"./Button-NLGJUEdX.js";import"./small-cross-B4XcSwLB.js";import"./ActionButton-DFvwDNjB.js";import"./Checkbox-DDVVlV2I.js";import"./useValueChanged-BgV54nDS.js";import"./CollapsiblePanel-4fPAfwdp.js";import"./MultiColumnSortDialog-DaRilF2v.js";import"./MenuTrigger-Cmuj0DWR.js";import"./CompositeItem-D95IUf9G.js";import"./ToolbarRootContext-BQx_lx6V.js";import"./getDisabledMountTransitionStyles-jk1RFGGJ.js";import"./getPseudoElementBounds-BDKVNpp1.js";import"./chevron-down-CzdIHmMJ.js";import"./index-BOxz8-qW.js";import"./error-kMW-uU3e.js";import"./BaseCbacBanner-6dmNgK7x.js";import"./makeExternalStore-C0hhujMA.js";import"./Tooltip-BV34caG_.js";import"./PopoverPopup-Bqj9UCPW.js";import"./debounce-BRZYJGiS.js";import"./useOsdkClient-CXg2SlsO.js";import"./tick-DMuR0LZC.js";import"./DropdownField-BUzKXDS6.js";import"./isEqual-DR-npGts.js";import"./withOsdkMetrics-ZZvmUZ78.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
