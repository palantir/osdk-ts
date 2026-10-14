import{j as i}from"./iframe-qsGhK2hq.js";import{O as p}from"./object-table-CqLlTF7S.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lrFt5nC1.js";import"./preload-helper-Dwtn-olX.js";import"./Table-RtxC6aTC.js";import"./index-CajyUV5R.js";import"./Dialog-D2Rmccu-.js";import"./cross-BtcvP4ej.js";import"./svgIconContainer-DZkDzvg0.js";import"./useBaseUiId-BW-cbd-G.js";import"./InternalBackdrop-Bm1UVwp8.js";import"./composite-bfuNMaa5.js";import"./index-eqMoAQQt.js";import"./index-DEfkT-Bn.js";import"./index-CyGx0SVK.js";import"./useEventCallback-DfezmX3F.js";import"./SkeletonBar-CSvI3jf6.js";import"./LoadingCell-CM8JaFl7.js";import"./ColumnConfigDialog-Cs4oTssg.js";import"./DraggableList-CVBLuRmU.js";import"./search-BylB4pvS.js";import"./Input-Czcl16E9.js";import"./useControlled-j-IY9Fng.js";import"./Button-DZOWyAnJ.js";import"./small-cross-DURYfzaP.js";import"./ActionButton-DoivhFaa.js";import"./Checkbox-BuiVWU_9.js";import"./useValueChanged-uDhMfoFi.js";import"./CollapsiblePanel-BzesRv68.js";import"./MultiColumnSortDialog-C0Jll3nn.js";import"./MenuTrigger-4uPtv7V4.js";import"./CompositeItem-DKwC-xxe.js";import"./ToolbarRootContext-BW1cRghw.js";import"./getDisabledMountTransitionStyles-C0XnpXFp.js";import"./getPseudoElementBounds-hxionTdV.js";import"./chevron-down-Dy2G7ibG.js";import"./index-BXOdJ4_3.js";import"./error-BE1KHtOw.js";import"./BaseCbacBanner-R0fCSPhc.js";import"./makeExternalStore-DSB7eaqh.js";import"./Tooltip-CB45Hw6t.js";import"./PopoverPopup-Cacp8CjB.js";import"./debounce-C8hPQAd_.js";import"./useOsdkClient-BSM4PxEw.js";import"./tick-BtVIuPON.js";import"./DropdownField-BOO-rrLR.js";import"./isEqual-CgE7Zfot.js";import"./withOsdkMetrics-Cus8kp2l.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
