import{j as i}from"./iframe-tJoiUnOU.js";import{O as p}from"./object-table-X0gNoGMP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CrAxMxh4.js";import"./preload-helper-q_roJb3L.js";import"./Table-Da6epX_8.js";import"./index-wkjAOCKp.js";import"./Dialog-Du7sghjf.js";import"./cross-6Rc2LF7n.js";import"./svgIconContainer-D0F8gB11.js";import"./useBaseUiId-BiDCPQhp.js";import"./InternalBackdrop-CiNn4aLK.js";import"./composite-DOEUwxcs.js";import"./index-D3jnN6Jh.js";import"./index-VD2PRP19.js";import"./index-SeseWBh6.js";import"./useEventCallback-CPmd0Kz4.js";import"./SkeletonBar-cCyX40Gf.js";import"./LoadingCell-CLv6VafM.js";import"./ColumnConfigDialog-jmSwh543.js";import"./DraggableList-DRuIg0iu.js";import"./search-CgsmrxMy.js";import"./Input-Dbo8bi4g.js";import"./useControlled-B_scRK6a.js";import"./Button-D_5bqoFg.js";import"./small-cross-C-UfEnxt.js";import"./ActionButton-CiYF1Zig.js";import"./Checkbox-BuSk1rUm.js";import"./useValueChanged-BXd8sVHl.js";import"./CollapsiblePanel-fXxTLN8h.js";import"./MultiColumnSortDialog-DCJ2kmAh.js";import"./MenuTrigger-i4WkGPfE.js";import"./CompositeItem-BDVYJdc3.js";import"./ToolbarRootContext-ekETqF8a.js";import"./getDisabledMountTransitionStyles-D1n5Dxzz.js";import"./getPseudoElementBounds-CXXoJKvV.js";import"./chevron-down-CUB7Aj2S.js";import"./index-CKDcjobG.js";import"./error-B-PeBpWB.js";import"./BaseCbacBanner-DCJxw3sC.js";import"./makeExternalStore-nQCgHpFY.js";import"./Tooltip-P6WDKgxT.js";import"./PopoverPopup-D2CFDvFx.js";import"./debounce-CkWR7YVQ.js";import"./useOsdkClient-C-pct-id.js";import"./tick-CFI6xm9s.js";import"./DropdownField-CVHEoHqX.js";import"./isEqual-B4K20_d6.js";import"./withOsdkMetrics-DhS6V5OD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
