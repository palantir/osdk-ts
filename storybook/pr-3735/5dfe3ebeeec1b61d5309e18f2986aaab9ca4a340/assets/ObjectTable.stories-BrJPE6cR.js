import{j as i}from"./iframe-DSMWrXPe.js";import{O as p}from"./object-table-brzJdw4z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BjnKPWag.js";import"./preload-helper-BlZGs9G1.js";import"./Table-FLFX5WVY.js";import"./index-D6D_nts1.js";import"./Dialog-CxwSbKcE.js";import"./cross-mTQyjJ68.js";import"./svgIconContainer-UJFGmyTn.js";import"./useBaseUiId-Cx1Xrpmr.js";import"./InternalBackdrop-D0nVKbjz.js";import"./composite-B-A3OnRf.js";import"./index-CN-8IRxo.js";import"./index-DNaGfyxP.js";import"./index-DSxEGt0t.js";import"./useEventCallback-B5PgNgv2.js";import"./SkeletonBar-CNF74keQ.js";import"./LoadingCell-D3IcZ7G9.js";import"./ColumnConfigDialog-q2xCJ1vk.js";import"./DraggableList-DEuHSCUq.js";import"./search-Cw6Jc9Ce.js";import"./Input-wgU5PuR4.js";import"./useControlled-2qj00gpi.js";import"./isEqual-DpvqD4Se.js";import"./isObject-V_1Zj_Zw.js";import"./Button-DZHdVHGV.js";import"./ActionButton-DXOcgc9O.js";import"./Checkbox-eegeH5wv.js";import"./useValueChanged-BNgYpVJr.js";import"./CollapsiblePanel-bfaXjnr1.js";import"./MultiColumnSortDialog-BSM2ZWp1.js";import"./MenuTrigger-BjB-MtHP.js";import"./CompositeItem-B-YTSQE9.js";import"./ToolbarRootContext-CUL72IU0.js";import"./getDisabledMountTransitionStyles-C0KhBNLA.js";import"./getPseudoElementBounds-aUbKXBHu.js";import"./chevron-down-B5dAgewr.js";import"./index-CDy6IKMN.js";import"./error-CoP_lWQF.js";import"./BaseCbacBanner-CsBjL5vT.js";import"./makeExternalStore-TjOOI6Gz.js";import"./Tooltip-DNENNQFW.js";import"./PopoverPopup-BbkLso8i.js";import"./toNumber-_WDj94yf.js";import"./useOsdkClient-C-RzX03l.js";import"./tick-jHimGsho.js";import"./DropdownField-BgvzeuHw.js";import"./withOsdkMetrics-5xZP9LUJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
