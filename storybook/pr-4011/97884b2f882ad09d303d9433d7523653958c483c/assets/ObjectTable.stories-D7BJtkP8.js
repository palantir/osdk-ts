import{j as i}from"./iframe-EfiBoZIR.js";import{O as p}from"./object-table-_-j2bQLx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9KK_Wat.js";import"./preload-helper-D_Wykq9t.js";import"./Table-C_CGpyWA.js";import"./index-0eA-Cgh_.js";import"./Dialog-vs1IxkDw.js";import"./cross-BOeJXaLq.js";import"./svgIconContainer-Daui2Dw7.js";import"./useBaseUiId-cd03ijFK.js";import"./InternalBackdrop-BzXWuiQX.js";import"./composite-CC9kaygZ.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./index-QLAugMY9.js";import"./useEventCallback-BLFhQYGq.js";import"./SkeletonBar-RRAm9W8p.js";import"./LoadingCell-C2ulrMWC.js";import"./ColumnConfigDialog-CGmVT9TB.js";import"./DraggableList-CMhSXHv7.js";import"./search-DW9KpidM.js";import"./Input-Bf8UFFCR.js";import"./useControlled-RgsLbGbj.js";import"./Button-WoBFNDMc.js";import"./small-cross-B5IfQiVk.js";import"./ActionButton-B7QgbfJ7.js";import"./Checkbox-Cmu3nVCT.js";import"./useValueChanged-DRM7hTnG.js";import"./CollapsiblePanel-B5r09xR-.js";import"./MultiColumnSortDialog-THzE8H3e.js";import"./MenuTrigger-D2n7tF1q.js";import"./CompositeItem-Bcq4203w.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./getDisabledMountTransitionStyles-CMp4u3oX.js";import"./getPseudoElementBounds-D32SWUco.js";import"./chevron-down-Bjf9KWk2.js";import"./index-kHpZltIW.js";import"./error-CzXhBCLL.js";import"./BaseCbacBanner-CAMpKzDW.js";import"./makeExternalStore-DJM-d-Lr.js";import"./Tooltip-ClBCWMU5.js";import"./PopoverPopup-D88MF7O9.js";import"./debounce-DHoJk0fe.js";import"./useOsdkClient-Cm0A3DMr.js";import"./tick-B421wai_.js";import"./DropdownField-BsrbnwCh.js";import"./isEqual-C3btcwZk.js";import"./withOsdkMetrics-EFBhc3BK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
