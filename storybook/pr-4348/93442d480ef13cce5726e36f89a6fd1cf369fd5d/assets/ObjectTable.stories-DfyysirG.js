import{j as i}from"./iframe-DsqGSzyQ.js";import{O as p}from"./object-table-BbRF0HYo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D1Nf4TI0.js";import"./preload-helper-C2TDGnFx.js";import"./Table-C5PRAfzS.js";import"./index-CVVe8LYW.js";import"./Dialog-BJXvX1Qz.js";import"./cross-OIVk5Jqz.js";import"./svgIconContainer-BTnUylTl.js";import"./useBaseUiId-CLwdfekz.js";import"./InternalBackdrop-Bcj0VMJA.js";import"./composite-KVqYkGkg.js";import"./index-BUfWM760.js";import"./index-CQfkRNgK.js";import"./index-DFzEYbU7.js";import"./useEventCallback-BUxfyhL3.js";import"./SkeletonBar-OWdeOMzd.js";import"./LoadingCell-GFteHhjq.js";import"./ColumnConfigDialog-pOwuJCVA.js";import"./DraggableList-DHD8gNGM.js";import"./search-Dp0YAnmc.js";import"./Input-DxF0Wzlw.js";import"./useControlled-DnGJzKUi.js";import"./Button-CG3H6I69.js";import"./small-cross-yxECI3O6.js";import"./ActionButton-DOoFHg12.js";import"./Checkbox-8MqZzppI.js";import"./useValueChanged-DmOLE1TI.js";import"./CollapsiblePanel-CENIho0X.js";import"./MultiColumnSortDialog-CAA_Gl6u.js";import"./MenuTrigger-CfVe1Fj6.js";import"./CompositeItem-D_FxDdAh.js";import"./ToolbarRootContext-Bbhq9Lsc.js";import"./getDisabledMountTransitionStyles-DTGPpCwR.js";import"./getPseudoElementBounds-DHuKM7P-.js";import"./chevron-down-DbLJwh-Y.js";import"./index-C-t9nxqw.js";import"./error-CSEdl-5d.js";import"./BaseCbacBanner-D_4wVm3C.js";import"./makeExternalStore-CwrRFGw-.js";import"./Tooltip-C8RXxpoJ.js";import"./PopoverPopup-DDE-QaKN.js";import"./debounce--Ga5NP20.js";import"./useOsdkClient-BfsVu55M.js";import"./tick-BSaw4Ihw.js";import"./DropdownField-Hwe25ldg.js";import"./isEqual-zvTcHIVY.js";import"./withOsdkMetrics-nmEcK_Vs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
