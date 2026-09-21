import{j as i}from"./iframe-UjTNASi3.js";import{O as p}from"./object-table-DIW9dq4B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CPkVFk8G.js";import"./preload-helper-ChUqF7Rx.js";import"./Table-MN_vrx7q.js";import"./index-CBLOqz9O.js";import"./Dialog-yrlpxn2H.js";import"./cross-BEq_sPpX.js";import"./svgIconContainer-BnZ--aX4.js";import"./useBaseUiId-DbZZYE7u.js";import"./InternalBackdrop-BCPpUKFw.js";import"./composite-BsaBRbEf.js";import"./index-bodWc-gm.js";import"./index-D5cIctx_.js";import"./index-Bzh_X7xQ.js";import"./useEventCallback-FKK13t9n.js";import"./SkeletonBar-BPWMNsbJ.js";import"./LoadingCell-CLJ65w3A.js";import"./ColumnConfigDialog-CL9JPzWq.js";import"./DraggableList-DpDJvc4F.js";import"./search-4dG4ZP2W.js";import"./Input-BLyk5LFB.js";import"./useControlled-C5YhSjey.js";import"./Button-DAjQjRlz.js";import"./small-cross-xy7dzoIW.js";import"./ActionButton-DwiWw116.js";import"./Checkbox-V82sjqAR.js";import"./useValueChanged-BLjWbJ6t.js";import"./CollapsiblePanel-DWpVdDad.js";import"./MultiColumnSortDialog-BKTCkKju.js";import"./MenuTrigger-Bh44Tetg.js";import"./CompositeItem-B-v9FANt.js";import"./ToolbarRootContext-BlxyZF17.js";import"./getDisabledMountTransitionStyles-DSqUzqL9.js";import"./getPseudoElementBounds-Dhsw8tBA.js";import"./chevron-down-B950jIbn.js";import"./index-CCVIwSxo.js";import"./error-K7GcRxh8.js";import"./BaseCbacBanner-CyOIqrYI.js";import"./makeExternalStore-BAIn4U_g.js";import"./Tooltip-D20tmfcP.js";import"./PopoverPopup-DfAiwejK.js";import"./debounce-C0USvgmQ.js";import"./useOsdkClient-DN28ZgTP.js";import"./tick-pbW1n8ts.js";import"./DropdownField-B-vNGTny.js";import"./isEqual-CIzOEpNl.js";import"./withOsdkMetrics-viX3FGJl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
