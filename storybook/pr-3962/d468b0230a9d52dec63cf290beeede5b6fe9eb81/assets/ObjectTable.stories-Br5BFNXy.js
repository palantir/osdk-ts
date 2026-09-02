import{j as i}from"./iframe-Cd3dv8cT.js";import{O as p}from"./object-table-DoNYRMGS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3U-N_eQ5.js";import"./preload-helper-BvamZNkq.js";import"./Table-BM2gsIQa.js";import"./index-DLxjxb8e.js";import"./Dialog-CmzL0RqW.js";import"./cross-Dn7ydKbM.js";import"./svgIconContainer-D-NoPjGJ.js";import"./useBaseUiId-BaOg2aY4.js";import"./InternalBackdrop-DvwCf0RH.js";import"./composite-CPkJv0Aj.js";import"./index-BhTIZT2w.js";import"./index-BxHsjHcu.js";import"./index-AY8LUDDe.js";import"./useEventCallback-C5kiz3QI.js";import"./SkeletonBar-CCoP-Q6v.js";import"./LoadingCell-Dz56vO0r.js";import"./ColumnConfigDialog-QrkIxj8p.js";import"./DraggableList-CH9K1l70.js";import"./search-DEQVu4Kn.js";import"./Input-BqALFs3C.js";import"./useControlled-qyMNC85h.js";import"./Button-BFlN4NNG.js";import"./small-cross-CFFZ3VmM.js";import"./ActionButton-DsAz2zkl.js";import"./Checkbox-B5AQpCuS.js";import"./useValueChanged-DO67l_ai.js";import"./CollapsiblePanel-2YcASTXk.js";import"./MultiColumnSortDialog-D9ppB96C.js";import"./MenuTrigger-DFOv8qBT.js";import"./CompositeItem-DmsI5HvC.js";import"./ToolbarRootContext-u0Mal7kP.js";import"./getDisabledMountTransitionStyles-Nf_x6EnO.js";import"./getPseudoElementBounds-rdicW1-a.js";import"./chevron-down-DhFVxk1n.js";import"./index-DSi4pYyx.js";import"./error-Dg3cLmkh.js";import"./BaseCbacBanner-DuV--lA_.js";import"./makeExternalStore-D4XV0ltY.js";import"./Tooltip-mZxcWJrw.js";import"./PopoverPopup-IaRSd_y_.js";import"./debounce-BezAcue0.js";import"./useOsdkClient-Cq-ObEKw.js";import"./tick-dgL1mLrc.js";import"./DropdownField-DJxZg7nO.js";import"./isEqual-DaKR_DAZ.js";import"./withOsdkMetrics-B9V-TBGu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
