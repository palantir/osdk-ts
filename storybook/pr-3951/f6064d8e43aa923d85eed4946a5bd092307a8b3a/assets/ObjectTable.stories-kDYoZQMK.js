import{j as i}from"./iframe-BEf575A3.js";import{O as p}from"./object-table-CyNsBF74.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-S7cNVc7J.js";import"./preload-helper-B8yT8SXx.js";import"./Table-BoarFvvZ.js";import"./index-DPOra9vP.js";import"./Dialog-CbevediE.js";import"./cross-B2xt-49o.js";import"./svgIconContainer-Ds_sg4id.js";import"./useBaseUiId-Du1Cq8KT.js";import"./InternalBackdrop-KVNLpp70.js";import"./composite-BVFiP9nk.js";import"./index-B6Jwaemq.js";import"./index-CSOMTnLn.js";import"./index-DrWIlFdC.js";import"./useEventCallback-B2f7tSmD.js";import"./SkeletonBar-C0AvNUSN.js";import"./LoadingCell-DXktZPMb.js";import"./ColumnConfigDialog-B12qvy7z.js";import"./DraggableList-BUv6HqtM.js";import"./search-BSaWqUSD.js";import"./Input-BSE_NzJ1.js";import"./useControlled-GhsyJ4IB.js";import"./Button-DQuoZQTN.js";import"./small-cross-DHnU3Y_M.js";import"./ActionButton-pEA0J6a-.js";import"./Checkbox-D9rWDzpT.js";import"./useValueChanged-BCwdJtac.js";import"./CollapsiblePanel-Dc7YlANl.js";import"./MultiColumnSortDialog-DrdEZbOO.js";import"./MenuTrigger-Ecdz3oSM.js";import"./CompositeItem-DQa7bQl1.js";import"./ToolbarRootContext-DeNEF_85.js";import"./getDisabledMountTransitionStyles-BwejZ17E.js";import"./getPseudoElementBounds-D_SiGCEF.js";import"./chevron-down-Dh8dts5f.js";import"./index-6kp1VAEO.js";import"./error-i1IrNpAR.js";import"./BaseCbacBanner-Blv-vsVV.js";import"./makeExternalStore-C8e7yQGc.js";import"./Tooltip-Dbh86cq5.js";import"./PopoverPopup-iEpmJA85.js";import"./debounce-C190Sqdz.js";import"./useOsdkClient-tyif8xTS.js";import"./tick-Y-Su1Qel.js";import"./DropdownField-4xDffuje.js";import"./isEqual-DZtnWfiD.js";import"./withOsdkMetrics-B7g61Aed.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
